"use client";

import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Clock, Video, Youtube, Headphones, Users, ImageIcon } from "lucide-react";

// Types
interface BlogArticle {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    image: string | null;
    readTime: string | null;
    createdAt: Date;
}

interface BlogCategory {
    id: string;
    name: string;
    slug: string;
    articles: BlogArticle[];
}

interface BlogPageClientProps {
    categories: BlogCategory[];
}

// Content Types (Static for now)
const contentTypes = [
    { icon: Video, label: "Webinars" },
    { icon: Youtube, label: "YouTube" },
    { icon: Headphones, label: "Podcasts" },
    { icon: Users, label: "Community" },
]

export function BlogPageClient({ categories }: BlogPageClientProps) {
    // Filter out categories with no articles
    const activeCategories = categories.filter((cat) => cat.articles.length > 0);

    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-[#1a1a1a] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-[#AD8253] font-medium mb-2 tracking-widest text-sm">BLOG</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Insights & Resources</h1>
                    <p className="text-[#a1a1a1] text-lg max-w-2xl leading-relaxed">
                        Expert tips, strategies, and industry insights to help you generate more leads and close more deals.
                    </p>
                </div>
            </section>

            {/* Blog Sections */}
            {activeCategories.map((section, index) => {
                // First article is featured
                const featured = section.articles[0];
                const others = section.articles.slice(1);

                return (
                    <section key={section.slug} className={`py-16 ${index % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#111]"}`}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">{section.name}</h2>
                                <Link
                                    href={`/blog/category/${section.slug}`}
                                    className="border border-white/10 hover:border-[#AD8253] text-[#a1a1a1] hover:text-[#AD8253] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all"
                                >
                                    View all articles
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                {/* Featured Article */}
                                {featured && (
                                    <Link href={`/blog/${featured.slug}`} className="group cursor-pointer">
                                        <div className="relative rounded-xl overflow-hidden mb-4 bg-[#222] border border-white/5">
                                            <div className="w-full h-64 md:h-80 relative">
                                                {featured.image ? (
                                                    <Image
                                                        src={featured.image}
                                                        alt={featured.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-[#222] flex items-center justify-center">
                                                        <ImageIcon className="w-16 h-16 text-[#444]" />
                                                    </div>
                                                )}
                                            </div>
                                            {featured.readTime && (
                                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm text-white/90">
                                                    <Clock className="w-4 h-4 text-[#AD8253]" />
                                                    {featured.readTime}
                                                </div>
                                            )}
                                        </div>
                                        <span className="inline-block text-xs font-bold text-[#AD8253] bg-[#AD8253]/10 px-2.5 py-1 rounded mb-3 uppercase tracking-wider">
                                            {section.name}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#AD8253] transition-colors leading-tight">
                                            {featured.title}
                                        </h3>
                                        <p className="text-[#a1a1a1] text-sm mb-4 line-clamp-3 leading-relaxed">
                                            {featured.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-[#666] font-medium">
                                            <span>{format(new Date(featured.createdAt), "d MMM yyyy")}</span>
                                        </div>
                                    </Link>
                                )}

                                {/* Article List */}
                                <div className="flex flex-col gap-6">
                                    {others.map((article) => (
                                        <Link href={`/blog/${article.slug}`} key={article.id} className="flex gap-4 group">
                                            <div className="flex-shrink-0">
                                                <div className="w-32 h-24 md:w-40 md:h-28 rounded-lg overflow-hidden bg-[#222] border border-white/5 relative">
                                                    {article.image ? (
                                                        <Image
                                                            src={article.image}
                                                            alt={article.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <ImageIcon className="w-8 h-8 text-[#444]" />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-semibold text-white mb-2 group-hover:text-[#AD8253] transition-colors line-clamp-2">
                                                    {article.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-xs text-[#a1a1a1]">
                                                    <span className="text-[#AD8253] font-medium">{section.name}</span>
                                                    <span>•</span>
                                                    <span>{format(new Date(article.createdAt), "d MMM yyyy")}</span>
                                                    {article.readTime && (
                                                        <>
                                                            <span>•</span>
                                                            <span>{article.readTime}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Explore Our Content - Insert after first section */}
                        {
                            index === 0 && (
                                <div className="mt-16 bg-[#222] py-16 relative overflow-hidden">
                                    <div className="absolute -top-10 left-0 w-64 h-64 bg-[#AD8253]/10 rounded-full blur-3xl pointer-events-none" />
                                    <div className="absolute -bottom-10 right-0 w-64 h-64 bg-[#c3a177]/10 rounded-full blur-3xl pointer-events-none" />

                                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">Explore our Content</h2>
                                        <div className="flex flex-wrap justify-center gap-6">
                                            {contentTypes.map((type) => (
                                                <button
                                                    key={type.label}
                                                    className="bg-[#1a1a1a] hover:bg-[#272727] border border-white/5 hover:border-[#AD8253] rounded-2xl px-10 py-8 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(173,130,83,0.15)] group w-40"
                                                >
                                                    <div className="w-14 h-14 rounded-full bg-[#333] group-hover:bg-[#AD8253]/20 flex items-center justify-center transition-colors">
                                                        <type.icon
                                                            className={`w-7 h-7 ${type.label === "YouTube" ? "text-white group-hover:text-red-500" : "text-[#a1a1a1] group-hover:text-[#AD8253]"}`}
                                                        />
                                                    </div>
                                                    <span className="font-medium text-white group-hover:text-[#AD8253]">{type.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </section >
                );
            })}

            {/* Newsletter Section */}
            <section className="bg-[#1a1a1a] py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl bg-gradient-to-r from-[#222] to-[#1a1a1a] border border-white/5 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#AD8253]/10 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                Get the latest growth hacks <br /> and trends in your inbox
                            </h2>
                            <p className="text-[#a1a1a1] max-w-lg">
                                Get weekly tips and insights on how to grow your business from ClickSalesMedia&apos;s experts in your inbox.
                            </p>
                        </div>
                        <button className="relative z-10 bg-[#AD8253] hover:bg-[#c3a177] text-white px-8 py-4 rounded-xl font-bold transition-shadow shadow-[0_0_20px_rgba(173,130,83,0.3)] hover:shadow-[0_0_30px_rgba(173,130,83,0.5)] whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    )
}
