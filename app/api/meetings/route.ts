import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { createCalendarEvent, generateAddToCalendarUrl, cancelCalendarEvent } from '@/lib/google-calendar'
import { sendMeetingConfirmation, sendNewLeadNotification } from '@/lib/email'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { leadId, startTime, endTime, timezone = 'Europe/Paris' } = body

        // Validate required fields
        if (!leadId || !startTime || !endTime) {
            return NextResponse.json(
                { error: 'Missing required fields: leadId, startTime, endTime' },
                { status: 400 }
            )
        }

        // Get the lead
        const lead = await prisma.lead.findUnique({
            where: { id: leadId },
        })

        if (!lead) {
            return NextResponse.json(
                { error: 'Lead not found' },
                { status: 404 }
            )
        }

        // Check if lead is qualified
        if (!lead.isQualified) {
            return NextResponse.json(
                { error: 'Lead is not qualified for booking' },
                { status: 403 }
            )
        }

        const meetingStart = new Date(startTime)
        const meetingEnd = new Date(endTime)

        // Check for conflicts
        const existingMeeting = await prisma.meeting.findFirst({
            where: {
                startTime: {
                    lt: meetingEnd,
                },
                endTime: {
                    gt: meetingStart,
                },
                status: {
                    in: ['SCHEDULED', 'RESCHEDULED'],
                },
            },
        })

        if (existingMeeting) {
            return NextResponse.json(
                { error: 'This time slot is no longer available' },
                { status: 409 }
            )
        }

        let googleEventId: string | null = null
        let googleMeetLink: string | null = null
        let calendarLink: string | null = null

        // Try to create Google Calendar event (may fail if not configured)
        try {
            const calendarEvent = await createCalendarEvent({
                summary: `Strategy Session with ${lead.name}${lead.company ? ` - ${lead.company}` : ''}`,
                description: `Strategy session booked via ClickSalesMedia website.\n\nLead: ${lead.name}\nEmail: ${lead.email}\nCompany: ${lead.company || 'N/A'}\nWebsite: ${lead.website || 'N/A'}`,
                startTime: meetingStart,
                endTime: meetingEnd,
                attendeeEmail: lead.email,
                attendeeName: lead.name,
                timezone,
            })

            googleEventId = calendarEvent.id
            googleMeetLink = calendarEvent.hangoutLink || null
        } catch (calendarError) {
            console.error('Failed to create Google Calendar event:', calendarError)
            // Continue without Google Calendar - meeting will still be created in database
        }

        // Generate add-to-calendar link as fallback
        calendarLink = generateAddToCalendarUrl({
            title: 'Strategy Session with ClickSalesMedia',
            description: `Your strategy session with ClickSalesMedia.${googleMeetLink ? `\n\nJoin: ${googleMeetLink}` : ''}`,
            startTime: meetingStart,
            endTime: meetingEnd,
            location: googleMeetLink || 'Online',
        })

        // Create meeting in database
        const meeting = await prisma.meeting.create({
            data: {
                leadId,
                title: 'Strategy Session',
                startTime: meetingStart,
                endTime: meetingEnd,
                timezone,
                googleEventId,
                googleMeetLink,
                status: 'SCHEDULED',
            },
        })

        // Update lead status
        await prisma.lead.update({
            where: { id: leadId },
            data: { status: 'MEETING_SCHEDULED' },
        })

        // Format meeting time for emails
        const meetingTimeInZone = toZonedTime(meetingStart, timezone)
        const formattedTime = format(meetingTimeInZone, 'h:mm a')

        // Send confirmation email to lead
        try {
            await sendMeetingConfirmation({
                leadName: lead.name,
                leadEmail: lead.email,
                meetingDate: meetingStart,
                meetingTime: formattedTime,
                googleMeetLink: googleMeetLink || undefined,
                calendarLink,
                timezone,
            })
        } catch (emailError) {
            console.error('Failed to send confirmation email:', emailError)
        }

        // Send notification to admin
        try {
            await sendNewLeadNotification({
                leadName: lead.name,
                leadEmail: lead.email,
                company: lead.company || undefined,
                website: lead.website || undefined,
                growthGoal: lead.growthGoal,
                budgetTier: lead.budgetTier,
                isQualified: lead.isQualified,
                meetingScheduled: true,
                meetingDate: meetingStart,
                meetingTime: formattedTime,
            })
        } catch (emailError) {
            console.error('Failed to send admin notification:', emailError)
        }

        return NextResponse.json({
            success: true,
            meetingId: meeting.id,
            googleMeetLink,
            calendarLink,
            formattedDate: format(meetingStart, 'EEEE, MMMM do, yyyy'),
            formattedTime,
            timezone,
        })
    } catch (error) {
        console.error('Error creating meeting:', error)
        return NextResponse.json(
            { error: 'Failed to create meeting' },
            { status: 500 }
        )
    }
}

// GET meetings
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const status = searchParams.get('status')
        const upcoming = searchParams.get('upcoming')
        const limit = parseInt(searchParams.get('limit') || '50')
        const offset = parseInt(searchParams.get('offset') || '0')

        const where: Record<string, unknown> = {}

        if (status) {
            where.status = status
        }

        if (upcoming === 'true') {
            where.startTime = { gte: new Date() }
            where.status = { in: ['SCHEDULED', 'RESCHEDULED'] }
        }

        const [meetings, total] = await Promise.all([
            prisma.meeting.findMany({
                where,
                orderBy: { startTime: upcoming === 'true' ? 'asc' : 'desc' },
                take: limit,
                skip: offset,
                include: {
                    lead: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            company: true,
                            website: true,
                            budgetTier: true,
                            growthGoal: true,
                        },
                    },
                },
            }),
            prisma.meeting.count({ where }),
        ])

        return NextResponse.json({
            meetings,
            total,
            limit,
            offset,
        })
    } catch (error) {
        console.error('Error fetching meetings:', error)
        return NextResponse.json(
            { error: 'Failed to fetch meetings' },
            { status: 500 }
        )
    }
}

// DELETE/Cancel meeting
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const meetingId = searchParams.get('id')

        if (!meetingId) {
            return NextResponse.json(
                { error: 'Meeting ID is required' },
                { status: 400 }
            )
        }

        const meeting = await prisma.meeting.findUnique({
            where: { id: meetingId },
        })

        if (!meeting) {
            return NextResponse.json(
                { error: 'Meeting not found' },
                { status: 404 }
            )
        }

        // Cancel Google Calendar event if exists
        if (meeting.googleEventId) {
            try {
                await cancelCalendarEvent(meeting.googleEventId)
            } catch (calendarError) {
                console.error('Failed to cancel Google Calendar event:', calendarError)
            }
        }

        // Update meeting status
        await prisma.meeting.update({
            where: { id: meetingId },
            data: { status: 'CANCELLED' },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error cancelling meeting:', error)
        return NextResponse.json(
            { error: 'Failed to cancel meeting' },
            { status: 500 }
        )
    }
}
