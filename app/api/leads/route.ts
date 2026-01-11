import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { sendNewLeadNotification } from '@/lib/email'
import { BudgetTier } from '@prisma/client'

// Qualification threshold: $2k+ budget
const QUALIFIED_BUDGETS: BudgetTier[] = [
    'BETWEEN_2K_5K',
    'BETWEEN_5K_10K',
    'BETWEEN_10K_50K',
    'ABOVE_50K',
]

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, company, website, growthGoal, budgetTier, source } = body

        // Validate required fields
        if (!name || !email || !growthGoal || !budgetTier) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, growthGoal, budgetTier' },
                { status: 400 }
            )
        }

        // Validate budget tier enum
        if (!Object.values(BudgetTier).includes(budgetTier)) {
            return NextResponse.json(
                { error: 'Invalid budget tier' },
                { status: 400 }
            )
        }

        // Check if lead is qualified based on budget
        const isQualified = QUALIFIED_BUDGETS.includes(budgetTier)

        // Create the lead
        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                phone: phone || null,
                company: company || null,
                website: website || null,
                growthGoal,
                budgetTier,
                isQualified,
                status: isQualified ? 'QUALIFIED' : 'UNQUALIFIED',
                source: source || null,
            },
        })

        // Send notification email to admin (non-blocking)
        sendNewLeadNotification({
            leadName: name,
            leadEmail: email,
            company,
            website,
            growthGoal,
            budgetTier,
            isQualified,
        }).catch((error) => console.error('Failed to send lead notification:', error))

        return NextResponse.json({
            success: true,
            leadId: lead.id,
            qualified: isQualified,
            message: isQualified
                ? 'Congratulations! You qualify for a strategy session.'
                : 'Thank you for your interest. We will be in touch.',
        })
    } catch (error) {
        console.error('Error creating lead:', error)
        return NextResponse.json(
            { error: 'Failed to create lead' },
            { status: 500 }
        )
    }
}

// GET leads (protected - for admin)
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const status = searchParams.get('status')
        const qualified = searchParams.get('qualified')
        const limit = parseInt(searchParams.get('limit') || '50')
        const offset = parseInt(searchParams.get('offset') || '0')

        const where: Record<string, unknown> = {}

        if (status) {
            where.status = status
        }

        if (qualified !== null) {
            where.isQualified = qualified === 'true'
        }

        const [leads, total] = await Promise.all([
            prisma.lead.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: limit,
                skip: offset,
                include: {
                    meetings: {
                        orderBy: { startTime: 'desc' },
                        take: 5,
                        select: {
                            id: true,
                            startTime: true,
                            endTime: true,
                            status: true,
                            googleMeetLink: true,
                            timezone: true,
                        },
                    },
                },
            }),
            prisma.lead.count({ where }),
        ])

        return NextResponse.json({
            leads,
            total,
            limit,
            offset,
        })
    } catch (error) {
        console.error('Error fetching leads:', error)
        return NextResponse.json(
            { error: 'Failed to fetch leads' },
            { status: 500 }
        )
    }
}
