import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET all case studies
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const published = searchParams.get('published')

        const where: Record<string, unknown> = {}
        if (published !== null) {
            where.published = published === 'true'
        }

        const caseStudies = await prisma.caseStudy.findMany({
            where,
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

// POST create case study
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { title, description, content, image, industryIds, stats, published, client, challenge, solution, results } = body

        if (!title) {
            return NextResponse.json(
                { error: 'Title is required' },
                { status: 400 }
            )
        }

        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')

        const caseStudy = await prisma.caseStudy.create({
            data: {
                title,
                slug,
                client,
                description,
                content,
                challenge,
                solution,
                results,
                image,
                published: published || false,
                industries: {
                    connect: industryIds?.map((id: string) => ({ id })) || [],
                },
                stats: {
                    create: stats?.map((stat: { value: string; label: string }, index: number) => ({
                        value: stat.value,
                        label: stat.label,
                        order: index,
                    })) || [],
                },
            },
            include: {
                industries: true,
                stats: {
                    orderBy: { order: 'asc' },
                },
            },
        })

        return NextResponse.json(caseStudy, { status: 201 })
    } catch (error) {
        console.error('Error creating case study:', error)
        return NextResponse.json(
            { error: 'Failed to create case study' },
            { status: 500 }
        )
    }
}
