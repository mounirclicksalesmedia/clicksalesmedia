import { prisma } from "@/lib/prisma";
import { BlogPageClient } from "./BlogPageClient";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
    // Fetch all categories with their latest 4 articles (Server Component)
    const categories = await prisma.blogCategory.findMany({
        include: {
            articles: {
                where: { published: true },
                orderBy: { createdAt: "desc" },
                take: 4,
            },
        },
    });

    // Serialize dates for client component
    const serializedCategories = categories.map((cat) => ({
        ...cat,
        articles: cat.articles.map((article) => ({
            ...article,
            createdAt: article.createdAt,
            updatedAt: article.updatedAt,
            publishedAt: article.publishedAt,
        })),
    }));

    return <BlogPageClient categories={serializedCategories} />;
}
