import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET single case study
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const caseStudy = await prisma.caseStudy.findUnique({
            where: { id },
            include: {
                industries: true,
                stats: {
                    orderBy: { order: 'asc' },
                },
            },
        })

        if (!caseStudy) {
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

// PUT update case study
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id } = await params
        const body = await request.json()
        const { title, description, content, image, industryIds, stats, published } = body

        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')

        // Delete existing stats and recreate
        await prisma.caseStudyStat.deleteMany({
            where: { caseStudyId: id },
        })

        const caseStudy = await prisma.caseStudy.update({
            where: { id },
            data: {
                title,
                slug,
                description,
                content,
                image,
                published,
                industries: {
                    set: industryIds?.map((industryId: string) => ({ id: industryId })) || [],
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

        return NextResponse.json(caseStudy)
    } catch (error) {
        console.error('Error updating case study:', error)
        return NextResponse.json(
            { error: 'Failed to update case study' },
            { status: 500 }
        )
    }
}

// DELETE case study
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id } = await params

        await prisma.caseStudy.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Case study deleted' })
    } catch (error) {
        console.error('Error deleting case study:', error)
        return NextResponse.json(
            { error: 'Failed to delete case study' },
            { status: 500 }
        )
    }
}
