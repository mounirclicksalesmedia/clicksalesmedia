import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'

// GET all articles
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const published = searchParams.get('published')
        const categoryId = searchParams.get('categoryId')

        const where: Record<string, unknown> = {}
        if (published !== null) {
            where.published = published === 'true'
        }
        if (categoryId) {
            where.categoryId = categoryId
        }

        const articles = await prisma.blogArticle.findMany({
            where,
            include: {
                category: true,
            },
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(articles)
    } catch (error) {
        console.error('Error fetching articles:', error)
        return NextResponse.json(
            { error: 'Failed to fetch articles' },
            { status: 500 }
        )
    }
}

// POST create article
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const { title, content, excerpt, image, categoryId, readTime, published } = body

        if (!title || !content || !categoryId) {
            return NextResponse.json(
                { error: 'Title, content, and category are required' },
                { status: 400 }
            )
        }

        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')

        const article = await prisma.blogArticle.create({
            data: {
                title,
                slug,
                content,
                excerpt,
                image,
                categoryId,
                readTime,
                published: published || false,
                publishedAt: published ? new Date() : null,
            },
            include: {
                category: true,
            },
        })

        return NextResponse.json(article, { status: 201 })
    } catch (error) {
        console.error('Error creating article:', error)
        return NextResponse.json(
            { error: 'Failed to create article' },
            { status: 500 }
        )
    }
}
