import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// GET published blog articles for public consumption
export async function GET() {
    try {
        const articles = await prisma.blogArticle.findMany({
            where: { published: true },
            include: {
                category: true,
            },
            orderBy: { publishedAt: 'desc' },
        })

        return NextResponse.json(articles)
    } catch (error) {
        console.error('Error fetching blog articles:', error)
        return NextResponse.json(
            { error: 'Failed to fetch articles' },
            { status: 500 }
        )
    }
}
