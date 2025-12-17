import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { addDays, startOfDay, endOfDay, addMinutes, format, parse, isAfter, isBefore } from 'date-fns'
import { toZonedTime, fromZonedTime } from 'date-fns-tz'

interface TimeSlot {
    startTime: string // ISO string
    endTime: string // ISO string
    formattedTime: string // e.g., "10:00 AM"
    available: boolean
}

interface DayAvailability {
    date: string // YYYY-MM-DD
    formattedDate: string // e.g., "Monday, Dec 16"
    slots: TimeSlot[]
}

// Default availability if no config exists
const DEFAULT_AVAILABILITY = [
    { dayOfWeek: 1, startTime: '09:00', endTime: '17:00', isActive: true }, // Monday
    { dayOfWeek: 2, startTime: '09:00', endTime: '17:00', isActive: true }, // Tuesday
    { dayOfWeek: 3, startTime: '09:00', endTime: '17:00', isActive: true }, // Wednesday
    { dayOfWeek: 4, startTime: '09:00', endTime: '17:00', isActive: true }, // Thursday
    { dayOfWeek: 5, startTime: '09:00', endTime: '17:00', isActive: true }, // Friday
]

const DEFAULT_SLOT_DURATION = 30 // minutes
const DEFAULT_BUFFER_TIME = 15 // minutes

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const timezone = searchParams.get('timezone') || 'Europe/Paris'
        const daysAhead = parseInt(searchParams.get('days') || '14')

        // Get availability configuration
        const availabilityConfigs = await prisma.availabilityConfig.findMany({
            where: { isActive: true },
        })

        // Use default if no config exists
        const configs = availabilityConfigs.length > 0
            ? availabilityConfigs
            : DEFAULT_AVAILABILITY.map(d => ({ ...d, slotDuration: DEFAULT_SLOT_DURATION, bufferTime: DEFAULT_BUFFER_TIME }))

        // Get blocked dates
        const blockedDates = await prisma.blockedDate.findMany({
            where: {
                date: {
                    gte: new Date(),
                    lte: addDays(new Date(), daysAhead),
                },
            },
        })

        const blockedDateStrings = blockedDates.map(bd => format(bd.date, 'yyyy-MM-dd'))

        // Get existing meetings to exclude those times
        const existingMeetings = await prisma.meeting.findMany({
            where: {
                startTime: {
                    gte: new Date(),
                    lte: addDays(new Date(), daysAhead),
                },
                status: {
                    in: ['SCHEDULED', 'RESCHEDULED'],
                },
            },
            select: {
                startTime: true,
                endTime: true,
            },
        })

        // Generate available slots for each day
        const availability: DayAvailability[] = []
        const now = new Date()
        const nowInTimezone = toZonedTime(now, timezone)

        for (let i = 0; i < daysAhead; i++) {
            const date = addDays(startOfDay(nowInTimezone), i)
            const dateString = format(date, 'yyyy-MM-dd')
            const dayOfWeek = date.getDay() // 0 = Sunday, 1 = Monday, etc.

            // Skip blocked dates
            if (blockedDateStrings.includes(dateString)) {
                continue
            }

            // Find config for this day of week
            const dayConfig = configs.find(c => c.dayOfWeek === dayOfWeek)

            if (!dayConfig || !dayConfig.isActive) {
                continue // No availability on this day
            }

            const slotDuration = 'slotDuration' in dayConfig ? dayConfig.slotDuration : DEFAULT_SLOT_DURATION
            const bufferTime = 'bufferTime' in dayConfig ? dayConfig.bufferTime : DEFAULT_BUFFER_TIME

            // Parse start and end times
            const dayStart = parse(dayConfig.startTime, 'HH:mm', date)
            const dayEnd = parse(dayConfig.endTime, 'HH:mm', date)

            const slots: TimeSlot[] = []
            let slotStart = dayStart

            while (isBefore(addMinutes(slotStart, slotDuration), dayEnd) ||
                format(addMinutes(slotStart, slotDuration), 'HH:mm') === dayConfig.endTime) {
                const slotEnd = addMinutes(slotStart, slotDuration)

                // Convert to UTC for comparison
                const slotStartUTC = fromZonedTime(slotStart, timezone)
                const slotEndUTC = fromZonedTime(slotEnd, timezone)

                // Check if slot is in the past
                const isPast = isBefore(slotStartUTC, now)

                // Check if slot conflicts with existing meetings
                const isBooked = existingMeetings.some(meeting => {
                    const meetingStart = new Date(meeting.startTime)
                    const meetingEnd = new Date(meeting.endTime)

                    // Check for overlap
                    return (
                        (isAfter(slotStartUTC, meetingStart) && isBefore(slotStartUTC, meetingEnd)) ||
                        (isAfter(slotEndUTC, meetingStart) && isBefore(slotEndUTC, meetingEnd)) ||
                        (isBefore(slotStartUTC, meetingStart) && isAfter(slotEndUTC, meetingEnd)) ||
                        (slotStartUTC.getTime() === meetingStart.getTime())
                    )
                })

                const available = !isPast && !isBooked

                slots.push({
                    startTime: slotStartUTC.toISOString(),
                    endTime: slotEndUTC.toISOString(),
                    formattedTime: format(slotStart, 'h:mm a'),
                    available,
                })

                // Move to next slot (duration + buffer)
                slotStart = addMinutes(slotStart, slotDuration + bufferTime)
            }

            // Only add days that have available slots
            const availableSlots = slots.filter(s => s.available)
            if (availableSlots.length > 0) {
                availability.push({
                    date: dateString,
                    formattedDate: format(date, 'EEEE, MMM d'),
                    slots,
                })
            }
        }

        return NextResponse.json({
            timezone,
            availability,
            slotDuration: DEFAULT_SLOT_DURATION,
        })
    } catch (error) {
        console.error('Error fetching availability:', error)
        return NextResponse.json(
            { error: 'Failed to fetch availability' },
            { status: 500 }
        )
    }
}
