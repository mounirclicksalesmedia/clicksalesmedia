"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Clock, Play, Youtube, Headphones, Users, Video } from "lucide-react";
import { cn } from "@/lib/utils";

// YouTube Videos Data
const youtubeVideos = [
    {
        id: 1,
        image: "/sales-cycle-shortening-business-presentation-blue.jpg",
        title: "How to Shorten Your Sales Cycle?",
        description:
            "Have you ever lost opportunities or leads because of a sales process being too long? Do you feel it could be shortened? Look no further...",
    },
    {
        id: 2,
        image: "/sdr-outsourced-vs-in-house-comparison-orange.jpg",
        title: "Sales Teams Compared: Outsourced vs. In-House SDRs",
        description:
            "Debating whether to outsource SDRs or hire an in-house team? In this video, we break down the pros and cons of each option.",
    },
    {
        id: 3,
        image: "/email-subject-lines-tips-review-dark.jpg",
        title: "B2B Subject Lines Review: Best to Worst",
        description:
            "Unlock the power of email subject lines in B2B outreach with this review of 25 examples. Join Josh Pratt as he analyzes the hits and misses o...",
    },
]

// Blog Categories and Articles
const blogSections = [
    {
        title: "Outreach",
        slug: "outreach",
        featured: {
            id: 1,
            image: "/cold-email-templates-money-flying-dark-blue-illust.jpg",
            title: "11 cold email templates that performed best in our clients' campaigns",
            description:
                "In this article, we provide 11 best cold email templates to help you close more sales with your next outreach campaign and highlight best practices to get the most out of each template.",
            category: "Outreach",
            date: "16 Oct 2025",
            readTime: "10 min",
        },
        articles: [
            {
                id: 2,
                image: "/b2b-email-writing-target-illustration-colorful.jpg",
                title: "How to write B2B emails that convert: 8-step guide (with examples)",
                category: "Outreach",
                date: "2 Sep 2025",
                readTime: "16 min",
            },
            {
                id: 3,
                image: "/sales-follow-up-email-paper-airplane-orange.jpg",
                title: "22 sales follow-up email samples and templates that generate replies",
                category: "Outreach",
                date: "21 Aug 2025",
                readTime: "20 min",
            },
            {
                id: 4,
                image: "/email-subject-lines-ab-testing-illustration.jpg",
                title: "How different B2B cold email subject lines perform: Belkins' 2025 study",
                category: "Outreach",
                date: "6 Aug 2025",
                readTime: "8 min",
            },
        ],
    },
    {
        title: "B2B Marketing",
        slug: "b2b-marketing",
        featured: {
            id: 5,
            image: "/icp-ideal-customer-profile-gold-coins-plants-growi.jpg",
            title: "How we use clients' ideal customer profiles (ICPs) in lead generation campaigns",
            description:
                "Check the exact step-by-step approach Belkins' account managers and research team use our clients' ICP for lead generation, complete with real-world examples.",
            category: "B2B marketing",
            date: "23 May 2025",
            readTime: "9 min",
        },
        articles: [
            {
                id: 6,
                image: "/inbound-outbound-marketing-yin-yang-blue-orange.jpg",
                title: "Inbound vs. outbound marketing: Channels and tactics for B2B",
                category: "B2B marketing",
                date: "23 Apr 2025",
                readTime: "14 min",
            },
            {
                id: 7,
                image: "/omnichannel-customer-journey-map-island-treasure.jpg",
                title: "How to map an omnichannel customer journey: Your action blueprint",
                category: "B2B marketing",
                date: "3 Apr 2025",
                readTime: "13 min",
            },
            {
                id: 8,
                image: "/b2b-omnichannel-examples-wizard-magic-colorful.jpg",
                title: "7 B2B omnichannel examples and why they worked",
                category: "B2B marketing",
                date: "19 Feb 2025",
                readTime: "14 min",
            },
        ],
    },
    {
        title: "Latest",
        slug: "latest",
        featured: {
            id: 9,
            image: "/callbox-review-crystal-ball-hands-dark-mystical.jpg",
            title: "Callbox review 2026: Pricing, approach & competitors",
            description:
                "In this guide, we explain everything you need to know about Callbox and the repercussions of a limited experimentation culture. We also offer alternatives to consider.",
            category: "Reviews",
            date: "4 Dec 2025",
            readTime: "13 min",
        },
        articles: [
            {
                id: 10,
                image: "/email-deliverability-mountains-peaks-illustration.jpg",
                title: "How to improve email deliverability: Belkins' framework",
                category: "Outreach",
                date: "21 Nov 2025",
                readTime: "15 min",
            },
            {
                id: 11,
                image: "/saas-lead-generation-agencies-boats-ocean-illustra.jpg",
                title: "10 best SaaS lead generation agencies in 2026",
                category: "Reviews",
                date: "12 Nov 2025",
                readTime: "16 min",
            },
            {
                id: 12,
                image: "/b2b-lead-generation-funnel-rocket-colorful.jpg",
                title: "Full-funnel B2B lead generation strategy for 2026 and beyond",
                category: "Lead generation",
                date: "10 Nov 2025",
                readTime: "14 min",
            },
        ],
    },
]

// Content Types
const contentTypes = [
    { icon: Video, label: "Webinars" },
    { icon: Youtube, label: "YouTube" },
    { icon: Headphones, label: "Podcasts" },
    { icon: Users, label: "Community" },
]

export default function BlogPage() {
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

            {/* YouTube Section */}
            <section className="py-16 border-b border-white/5 bg-[#111]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-white">ClickSalesMedia</span>
                            <div className="flex items-center gap-1 bg-red-600 text-white px-2 py-1 rounded">
                                <Youtube className="w-4 h-4" />
                                <span className="text-sm font-medium">YouTube</span>
                            </div>
                        </div>
                        <button className="text-sm text-[#a1a1a1] hover:text-[#AD8253] flex items-center gap-1 transition-colors">
                            View all
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {youtubeVideos.map((video) => (
                            <div key={video.id} className="group cursor-pointer">
                                <div className="relative rounded-xl overflow-hidden mb-4 bg-[#222] border border-white/5">
                                    <div className="w-full h-48 bg-[#222] relative">
                                        {/* Placeholder for Video Image since we don't have files */}
                                        <div className="absolute inset-0 flex items-center justify-center text-[#444]">
                                            [Video Thumbnail]
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-14 h-14 bg-[#AD8253] rounded-full flex items-center justify-center">
                                            <Play className="w-6 h-6 text-white fill-white" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-white mb-2 group-hover:text-[#AD8253] transition-colors line-clamp-2">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-[#a1a1a1] mb-3 line-clamp-2">{video.description}</p>
                                <button className="flex items-center gap-2 text-[#AD8253] hover:text-[#c3a177] text-sm font-medium transition-colors">
                                    <div className="w-8 h-8 rounded-full border border-[#AD8253] flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                    Watch on YouTube
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Sections */}
            {blogSections.map((section, index) => (
                <section key={section.slug} className={`py-16 ${index % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#111]"}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                            <button className="border border-white/10 hover:border-[#AD8253] text-[#a1a1a1] hover:text-[#AD8253] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all">
                                View all articles
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Featured Article */}
                            <div className="group cursor-pointer">
                                <div className="relative rounded-xl overflow-hidden mb-4 bg-[#222] border border-white/5">
                                    <div className="w-full h-64 md:h-80 bg-[#333] flex items-center justify-center text-[#666]">
                                        [Featured Image]
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm text-white/90">
                                        <Clock className="w-4 h-4 text-[#AD8253]" />
                                        {section.featured.readTime}
                                    </div>
                                </div>
                                <span className="inline-block text-xs font-bold text-[#AD8253] bg-[#AD8253]/10 px-2.5 py-1 rounded mb-3 uppercase tracking-wider">
                                    {section.featured.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#AD8253] transition-colors leading-tight">
                                    {section.featured.title}
                                </h3>
                                <p className="text-[#a1a1a1] text-sm mb-4 line-clamp-3 leading-relaxed">{section.featured.description}</p>
                                <div className="flex items-center gap-2 text-xs text-[#666] font-medium">
                                    <span>{section.featured.date}</span>
                                </div>
                            </div>

                            {/* Article List */}
                            <div className="flex flex-col gap-6">
                                {section.articles.map((article) => (
                                    <Link href={`/blog/${article.id}`} key={article.id} className="flex gap-4 group">
                                        <div className="flex-shrink-0">
                                            <div className="w-32 h-24 md:w-40 md:h-28 rounded-lg bg-[#222] border border-white/5 flex items-center justify-center text-[#555] text-xs">
                                                [Thumb]
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className="font-semibold text-white mb-2 group-hover:text-[#AD8253] transition-colors line-clamp-2">
                                                {article.title}
                                            </h4>
                                            <div className="flex items-center gap-2 text-xs text-[#a1a1a1]">
                                                <span className="text-[#AD8253] font-medium">{article.category}</span>
                                                <span>•</span>
                                                <span>{article.date}</span>
                                                <span>•</span>
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Explore Our Content - After B2B Marketing */}
                    {section.slug === "b2b-marketing" && (
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
                    )}
                </section>
            ))}

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
                                Get weekly tips and insights on how to grow your business from ClickSalesMedia's experts in your inbox.
                            </p>
                        </div>
                        <button className="relative z-10 bg-[#AD8253] hover:bg-[#c3a177] text-white px-8 py-4 rounded-xl font-bold transition-shadow shadow-[0_0_20px_rgba(173,130,83,0.3)] hover:shadow-[0_0_30px_rgba(173,130,83,0.5)] whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
