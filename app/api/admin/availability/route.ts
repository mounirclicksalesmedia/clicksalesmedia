import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET - Fetch availability configuration
export async function GET() {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const [configs, blockedDates] = await Promise.all([
            prisma.availabilityConfig.findMany({
                orderBy: { dayOfWeek: 'asc' },
            }),
            prisma.blockedDate.findMany({
                where: {
                    date: { gte: new Date() },
                },
                orderBy: { date: 'asc' },
            }),
        ])

        // Transform to schedule format
        const schedule = configs.length > 0
            ? configs.map(c => ({
                id: c.id,
                dayOfWeek: c.dayOfWeek,
                startTime: c.startTime,
                endTime: c.endTime,
                isActive: c.isActive,
            }))
            : null

        const firstConfig = configs[0]

        return NextResponse.json({
            schedule,
            blockedDates: blockedDates.map(bd => ({
                id: bd.id,
                date: bd.date.toISOString(),
                reason: bd.reason,
            })),
            slotDuration: firstConfig?.slotDuration || 30,
            bufferTime: firstConfig?.bufferTime || 15,
        })
    } catch (error) {
        console.error('Error fetching availability:', error)
        return NextResponse.json({ error: 'Failed to fetch availability' }, { status: 500 })
    }
}

// POST - Update availability or add blocked date
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { action } = body

        if (action === 'updateSchedule') {
            const { schedule, slotDuration, bufferTime } = body

            // Delete existing configs
            await prisma.availabilityConfig.deleteMany()

            // Create new configs
            const configs = await Promise.all(
                schedule.map((day: { dayOfWeek: number; startTime: string; endTime: string; isActive: boolean }) =>
                    prisma.availabilityConfig.create({
                        data: {
                            dayOfWeek: day.dayOfWeek,
                            startTime: day.startTime,
                            endTime: day.endTime,
                            isActive: day.isActive,
                            slotDuration: slotDuration || 30,
                            bufferTime: bufferTime || 15,
                        },
                    })
                )
            )

            return NextResponse.json({ success: true, configs })
        }

        if (action === 'addBlockedDate') {
            const { date, reason } = body

            const blockedDate = await prisma.blockedDate.create({
                data: {
                    date: new Date(date),
                    reason: reason || null,
                },
            })

            return NextResponse.json({
                success: true,
                blockedDate: {
                    id: blockedDate.id,
                    date: blockedDate.date.toISOString(),
                    reason: blockedDate.reason,
                },
            })
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    } catch (error) {
        console.error('Error updating availability:', error)
        return NextResponse.json({ error: 'Failed to update availability' }, { status: 500 })
    }
}

// DELETE - Remove blocked date
export async function DELETE(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { blockedDateId } = body

        if (!blockedDateId) {
            return NextResponse.json({ error: 'Blocked date ID required' }, { status: 400 })
        }

        await prisma.blockedDate.delete({
            where: { id: blockedDateId },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting blocked date:', error)
        return NextResponse.json({ error: 'Failed to delete blocked date' }, { status: 500 })
    }
}
