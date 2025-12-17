import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET all categories
export async function GET() {
    try {
        const categories = await prisma.blogCategory.findMany({
            include: {
                _count: {
                    select: { articles: true },
                },
            },
            orderBy: { name: 'asc' },
        })

        return NextResponse.json(categories)
    } catch (error) {
        console.error('Error fetching categories:', error)
        return NextResponse.json(
            { error: 'Failed to fetch categories' },
            { status: 500 }
        )
    }
}

// POST create category
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { name, description } = body

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

        const category = await prisma.blogCategory.create({
            data: {
                name,
                slug,
                description,
            },
        })

        return NextResponse.json(category, { status: 201 })
    } catch (error) {
        console.error('Error creating category:', error)
        return NextResponse.json(
            { error: 'Failed to create category' },
            { status: 500 }
        )
    }
}
