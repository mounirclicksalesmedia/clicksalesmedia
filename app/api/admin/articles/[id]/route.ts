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

        // Generate slug from title
        let slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')

        // Check if slug conflicts with another article (not this one)
        const slugConflict = await prisma.blogArticle.findFirst({
            where: {
                slug,
                id: { not: id }
            }
        })

        // If slug conflicts, append a unique suffix
        if (slugConflict) {
            slug = `${slug}-${id.slice(-6)}`
        }

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
                excerpt: excerpt || null,
                image: image || null,
                categoryId,
                readTime: readTime || null,
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

        // Return more specific error messages
        if (error instanceof Error) {
            if (error.message.includes('Unique constraint')) {
                return NextResponse.json(
                    { error: 'An article with this title/slug already exists' },
                    { status: 400 }
                )
            }
            return NextResponse.json(
                { error: `Failed to update article: ${error.message}` },
                { status: 500 }
            )
        }

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
