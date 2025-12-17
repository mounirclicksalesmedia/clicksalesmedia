import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET single industry
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const industry = await prisma.industry.findUnique({
            where: { id },
            include: {
                caseStudies: true,
            },
        })

        if (!industry) {
            return NextResponse.json(
                { error: 'Industry not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(industry)
    } catch (error) {
        console.error('Error fetching industry:', error)
        return NextResponse.json(
            { error: 'Failed to fetch industry' },
            { status: 500 }
        )
    }
}

// PUT update industry
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
        const { name } = body

        const slug = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')

        const industry = await prisma.industry.update({
            where: { id },
            data: {
                name,
                slug,
            },
        })

        return NextResponse.json(industry)
    } catch (error) {
        console.error('Error updating industry:', error)
        return NextResponse.json(
            { error: 'Failed to update industry' },
            { status: 500 }
        )
    }
}

// DELETE industry
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

        await prisma.industry.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Industry deleted' })
    } catch (error) {
        console.error('Error deleting industry:', error)
        return NextResponse.json(
            { error: 'Failed to delete industry' },
            { status: 500 }
        )
    }
}
