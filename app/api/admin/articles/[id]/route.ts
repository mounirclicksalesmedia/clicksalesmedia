import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET single article
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const article = await prisma.blogArticle.findUnique({
            where: { id },
            include: {
                category: true,
            },
        })

        if (!article) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(article)
    } catch (error) {
        console.error('Error fetching article:', error)
        return NextResponse.json(
            { error: 'Failed to fetch article' },
            { status: 500 }
        )
    }
}

// PUT update article
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
        const { title, content, excerpt, image, categoryId, readTime, published } = body

        const existingArticle = await prisma.blogArticle.findUnique({
            where: { id },
        })

        if (!existingArticle) {
            return NextResponse.json(
                { error: 'Article not found' },
                { status: 404 }
            )
        }

        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')

        // Set publishedAt when first publishing
        let publishedAt = existingArticle.publishedAt
        if (published && !existingArticle.published) {
            publishedAt = new Date()
        }

        const article = await prisma.blogArticle.update({
            where: { id },
            data: {
                title,
                slug,
                content,
                excerpt,
                image,
                categoryId,
                readTime,
                published,
                publishedAt,
            },
            include: {
                category: true,
            },
        })

        return NextResponse.json(article)
    } catch (error) {
        console.error('Error updating article:', error)
        return NextResponse.json(
            { error: 'Failed to update article' },
            { status: 500 }
        )
    }
}

// DELETE article
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

        await prisma.blogArticle.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Article deleted' })
    } catch (error) {
        console.error('Error deleting article:', error)
        return NextResponse.json(
            { error: 'Failed to delete article' },
            { status: 500 }
        )
    }
}
