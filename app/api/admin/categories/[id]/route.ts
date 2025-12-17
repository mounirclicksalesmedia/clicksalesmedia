import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET single category
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const category = await prisma.blogCategory.findUnique({
            where: { id },
            include: {
                articles: true,
            },
        })

        if (!category) {
            return NextResponse.json(
                { error: 'Category not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(category)
    } catch (error) {
        console.error('Error fetching category:', error)
        return NextResponse.json(
            { error: 'Failed to fetch category' },
            { status: 500 }
        )
    }
}

// PUT update category
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
        const { name, description } = body

        const slug = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')

        const category = await prisma.blogCategory.update({
            where: { id },
            data: {
                name,
                slug,
                description,
            },
        })

        return NextResponse.json(category)
    } catch (error) {
        console.error('Error updating category:', error)
        return NextResponse.json(
            { error: 'Failed to update category' },
            { status: 500 }
        )
    }
}

// DELETE category
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

        // Check if category has articles
        const category = await prisma.blogCategory.findUnique({
            where: { id },
            include: { _count: { select: { articles: true } } },
        })

        if (category?._count.articles && category._count.articles > 0) {
            return NextResponse.json(
                { error: 'Cannot delete category with articles' },
                { status: 400 }
            )
        }

        await prisma.blogCategory.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Category deleted' })
    } catch (error) {
        console.error('Error deleting category:', error)
        return NextResponse.json(
            { error: 'Failed to delete category' },
            { status: 500 }
        )
    }
}
