
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { prisma as prismadb } from "@/lib/prisma";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await prismadb.blogArticle.findUnique({
        where: { slug: slug },
    });

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${article.title} | ClickSalesMedia Blog`,
        description: article.excerpt || "Read our latest insights.",
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const article = await prismadb.blogArticle.findUnique({
        where: { slug: slug },
        include: {
            category: true,
        },
    });

    if (!article) {
        notFound();
    }

    // Find related articles (same category, excluding current)
    const relatedArticles = await prismadb.blogArticle.findMany({
        where: {
            categoryId: article.categoryId,
            NOT: {
                id: article.id,
            },
            published: true,
        },
        take: 3,
    });

    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 border-b border-white/5 bg-[#111]">
                <div className="absolute inset-0 bg-[#AD8253]/5 pointer-events-none" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    {article.category && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AD8253]/10 text-[#AD8253] text-sm font-medium mb-6">
                            <Tag className="w-4 h-4" />
                            {article.category.name}
                        </div>
                    )}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-[#a1a1a1] text-sm md:text-base">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[#AD8253]" />
                            {format(new Date(article.createdAt), "MMMM d, yyyy")}
                        </div>
                        {article.readTime && (
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[#AD8253]" />
                                {article.readTime}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-[#a1a1a1] hover:text-[#AD8253] transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>

                        {article.image && (
                            <div className="rounded-2xl overflow-hidden border border-white/5 mb-12 shadow-2xl">
                                {/* Use a functional Image component if dealing with real URLs, 
                            but for now we might have local paths or placeholders. 
                            If it starts with http, use it, else assume local public. */}
                                <div className="relative aspect-video w-full bg-[#222]">
                                    {/* <Image 
                                src={article.image} 
                                alt={article.title} 
                                fill 
                                className="object-cover"
                            /> */}
                                    {/* Fallback visual since we don't have real images yet */}
                                    <div className="absolute inset-0 flex items-center justify-center text-[#444] text-lg font-medium">
                                        [Featured Image: {article.title}]
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Article Content */}
                        <article
                            className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white prose-headings:font-bold prose-headings:font-sans
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#AD8253]
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-[#d1d1d1] prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-[#AD8253] prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white
                    prose-ul:my-6 prose-li:text-[#d1d1d1]
                    prose-img:rounded-xl prose-img:border prose-img:border-white/10"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>

                    {/* Tags/Share (Optional) */}
                    <div className="border-t border-white/10 pt-8 mt-12 flex justify-between items-center">
                        <p className="text-[#666]">Share this article</p>
                        {/* Social Share buttons placeholder */}
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#333] hover:bg-[#AD8253] transition-colors cursor-pointer" />
                            <div className="w-8 h-8 rounded-full bg-[#333] hover:bg-[#AD8253] transition-colors cursor-pointer" />
                            <div className="w-8 h-8 rounded-full bg-[#333] hover:bg-[#AD8253] transition-colors cursor-pointer" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="py-16 bg-[#111] border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedArticles.map((related) => (
                                <Link href={`/blog/${related.slug}`} key={related.id} className="group">
                                    <div className="rounded-xl overflow-hidden bg-[#222] border border-white/5 mb-4 aspect-video relative">
                                        <div className="absolute inset-0 flex items-center justify-center text-[#444] text-sm">
                                            [Thumb]
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#AD8253] transition-colors">
                                        {related.title}
                                    </h3>
                                    <p className="text-sm text-[#a1a1a1] line-clamp-2">
                                        {related.excerpt}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
