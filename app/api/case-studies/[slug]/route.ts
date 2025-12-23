import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET single case study by slug (public API)
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params
        const caseStudy = await prisma.caseStudy.findUnique({
            where: { slug },
            include: {
                industries: true,
                stats: {
                    orderBy: { order: 'asc' },
                },
            },
        })

        if (!caseStudy || !caseStudy.published) {
            return NextResponse.json(
                { error: 'Case study not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(caseStudy)
    } catch (error) {
        console.error('Error fetching case study:', error)
        return NextResponse.json(
            { error: 'Failed to fetch case study' },
            { status: 500 }
        )
    }
}
