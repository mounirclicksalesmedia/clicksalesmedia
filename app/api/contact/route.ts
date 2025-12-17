import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Public route - no auth required (for form submission)
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, company, phone, service, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            )
        }

        // Create submission
        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                company: company || null,
                phone: phone || null,
                service: service || null,
                message,
            },
        })

        return NextResponse.json({ success: true, id: submission.id })
    } catch (error) {
        console.error('Error creating contact submission:', error)
        return NextResponse.json(
            { error: 'Failed to submit contact form' },
            { status: 500 }
        )
    }
}
