import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET all industries
export async function GET() {
    try {
        const industries = await prisma.industry.findMany({
            include: {
                _count: {
                    select: { caseStudies: true },
                },
            },
            orderBy: { name: 'asc' },
        })

        return NextResponse.json(industries)
    } catch (error) {
        console.error('Error fetching industries:', error)
        return NextResponse.json(
            { error: 'Failed to fetch industries' },
            { status: 500 }
        )
    }
}

// POST create industry
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { name } = body

        if (!name) {
            return NextResponse.json(
                { error: 'Name is required' },
                { status: 400 }
            )
        }

        const slug = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')

        const industry = await prisma.industry.create({
            data: {
                name,
                slug,
            },
        })

        return NextResponse.json(industry, { status: 201 })
    } catch (error) {
        console.error('Error creating industry:', error)
        return NextResponse.json(
            { error: 'Failed to create industry' },
            { status: 500 }
        )
    }
}
