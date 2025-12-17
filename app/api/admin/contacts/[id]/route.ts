import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET single contact submission
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id } = await params

        const submission = await prisma.contactSubmission.findUnique({
            where: { id },
        })

        if (!submission) {
            return NextResponse.json(
                { error: 'Submission not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(submission)
    } catch (error) {
        console.error('Error fetching submission:', error)
        return NextResponse.json(
            { error: 'Failed to fetch submission' },
            { status: 500 }
        )
    }
}

// PUT - Mark as read/unread
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

        const submission = await prisma.contactSubmission.update({
            where: { id },
            data: { read: body.read },
        })

        return NextResponse.json(submission)
    } catch (error) {
        console.error('Error updating submission:', error)
        return NextResponse.json(
            { error: 'Failed to update submission' },
            { status: 500 }
        )
    }
}

// DELETE contact submission
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

        await prisma.contactSubmission.delete({
            where: { id },
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting submission:', error)
        return NextResponse.json(
            { error: 'Failed to delete submission' },
            { status: 500 }
        )
    }
}
