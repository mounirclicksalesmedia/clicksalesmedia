import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function check() {
    const categories = await prisma.blogCategory.findMany({
        include: { articles: true }
    });

    console.log('=== Blog Categories ===');
    for (const cat of categories) {
        console.log(`Category: ${cat.name} (${cat.slug}), Articles: ${cat.articles.length}`);
        for (const art of cat.articles) {
            console.log(`  - ${art.title} | published: ${art.published}`);
        }
    }

    const articlesCount = await prisma.blogArticle.count();
    console.log(`\n=== Total Articles: ${articlesCount} ===`);

    await prisma.$disconnect();
}

check();
