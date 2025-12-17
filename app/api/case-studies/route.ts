import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET published case studies for public consumption
export async function GET() {
    try {
        const caseStudies = await prisma.caseStudy.findMany({
            where: { published: true },
            include: {
                industries: true,
                stats: {
                    orderBy: { order: 'asc' },
                },
            },
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(caseStudies)
    } catch (error) {
        console.error('Error fetching case studies:', error)
        return NextResponse.json(
            { error: 'Failed to fetch case studies' },
            { status: 500 }
        )
    }
}
