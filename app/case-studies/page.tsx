"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Play, Clock, ChevronLeft, ChevronRight, ChevronDown, Users, Loader2 } from "lucide-react";

// Case studies data
const industries = [
    "Manufacturing",
    "Finance",
    "Healthcare",
    "SaaS",
    "Environmental",
    "Marketing & Creative Agencies",
    "Software Development",
    "Legal Services",
    "Technology",
]

interface Industry {
    id: string;
    name: string;
}

interface Stat {
    id: string;
    value: string;
    label: string;
}

interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    client: string | null;
    image: string | null;
    description: string | null;
    industries: Industry[];
    stats: Stat[];
    published: boolean;
}

// Hero Section
function HeroSection() {
    return (
        <section className="bg-[#1e1e1e] pt-32 pb-16 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-[#AD8253] font-semibold text-sm uppercase tracking-wide">Case Studies</span>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
                            Inspiring success stories of our clients
                        </h1>
                        <p className="text-gray-400 mt-6 text-lg">
                            Discover how we've helped companies from 50+ industries unlock their growth potential. Want alike results?
                        </p>
                        <button className="mt-8 bg-[#AD8253] hover:bg-[#8a6842] text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                            Contact us
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Testimonials Video Card */}
                    <div className="bg-[#272727] rounded-2xl overflow-hidden border border-[#3a3a3a]">
                        <div className="relative">
                            {/* Using a placeholder since we don't have the image file yet */}
                            <div className="w-full h-64 bg-[#333] flex items-center justify-center">
                                <Play className="w-12 h-12 text-[#AD8253]" />
                            </div>

                            <div className="absolute top-4 left-4 bg-[#272727] text-white px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                                <Play className="w-4 h-4 text-[#AD8253]" />
                                TESTIMONIALS
                            </div>
                            <button className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-[#AD8253] rounded-full flex items-center justify-center hover:bg-[#c3a177] transition-colors">
                                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                                </div>
                            </button>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                                <p className="text-gray-900 font-semibold text-lg">What Do Clients Say About Us?</p>
                            </div>
                        </div>
                        <div className="p-4 flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Watch client stories</span>
                            <span className="text-gray-500 text-sm flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                3:08
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Industry Filter Tabs
function IndustryTabs() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="bg-[#272727] py-8 border-b border-[#3a3a3a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full border border-[#3a3a3a] text-gray-400 hover:text-white hover:border-[#AD8253] transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex-1 overflow-x-auto scrollbar-hide">
                        <div className="flex gap-3">
                            {industries.map((industry, index) => (
                                <button
                                    key={industry}
                                    onClick={() => setActiveIndex(index)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeIndex === index
                                        ? "bg-[#AD8253] text-white"
                                        : "bg-[#1e1e1e] text-gray-300 hover:text-white border border-[#3a3a3a]"
                                        }`}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="p-2 rounded-full border border-[#3a3a3a] text-gray-400 hover:text-white hover:border-[#AD8253] transition-colors">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}

// Case Studies Grid
function CaseStudiesGrid() {
    const [companySizeOpen, setCompanySizeOpen] = useState(false)
    const [industryOpen, setIndustryOpen] = useState(false)
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchCaseStudies() {
            try {
                const response = await fetch('/api/admin/case-studies?published=true')
                const data = await response.json()
                setCaseStudies(data)
            } catch (error) {
                console.error('Failed to fetch case studies:', error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCaseStudies()
    }, [])

    if (isLoading) {
        return (
            <section className="bg-[#272727] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
                </div>
            </section>
        )
    }

    return (
        <section className="bg-[#272727] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8">Latest case studies</h2>

                {/* Filters */}
                <div className="flex gap-4 mb-10">
                    <div className="relative">
                        <button
                            onClick={() => setCompanySizeOpen(!companySizeOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg text-gray-300 hover:border-[#AD8253] transition-colors"
                        >
                            <Users className="w-4 h-4" />
                            Company size
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {companySizeOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg shadow-xl z-10">
                                {["1-50", "51-200", "201-500", "500+"].map((size) => (
                                    <button
                                        key={size}
                                        className="w-full text-left px-4 py-2 text-gray-300 hover:bg-[#272727] hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {size} employees
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setIndustryOpen(!industryOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg text-gray-300 hover:border-[#AD8253] transition-colors"
                        >
                            Industry
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {industryOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-[#1e1e1e] border border-[#3a3a3a] rounded-lg shadow-xl z-10">
                                {industries.slice(0, 6).map((industry) => (
                                    <button
                                        key={industry}
                                        className="w-full text-left px-4 py-2 text-gray-300 hover:bg-[#272727] hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {industry}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {caseStudies.map((study) => (
                        <Link
                            key={study.id}
                            href={`/case-studies/${study.slug}`}
                            className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-[#3a3a3a] hover:border-[#AD8253] transition-colors group cursor-pointer block"
                        >
                            <div className="relative overflow-hidden h-56 bg-[#000]">
                                {/* Image */}
                                <div className="w-full h-full bg-[#333] flex items-center justify-center text-[#666]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    {study.image ? <img src={study.image} alt={study.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" /> : "[Image]"}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    {study.industries.map((ind) => (
                                        <span
                                            key={ind.id}
                                            className="text-xs font-medium text-gray-400 bg-[#272727] px-3 py-1 rounded-full border border-[#3a3a3a]"
                                        >
                                            {ind.name}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-[#c3a177] transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {study.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {study.stats.map((stat, index) => (
                                        <div key={index}>
                                            <p className="text-xl font-bold text-[#AD8253]">{stat.value}</p>
                                            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 border border-[#AD8253] text-[#AD8253] rounded-lg font-medium hover:bg-[#AD8253] hover:text-white transition-colors">
                        Load more case studies
                    </button>
                </div>
            </div>
        </section>
    )
}

// CTA Section
function CTASection() {
    return (
        <section className="bg-[#1e1e1e] py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to become our next success story?</h2>
                <p className="text-gray-400 text-lg mb-8">
                    Set up a brief meeting with one of our experts to facilitate your business growth.
                </p>
                <button className="bg-[#AD8253] hover:bg-[#8a6842] text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                    Schedule 30-min call
                </button>
            </div>
        </section>
    )
}

// Main Page
export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-[#272727]">
            <Navigation />
            <HeroSection />
            <IndustryTabs />
            <CaseStudiesGrid />
            <CTASection />
            <Footer />
        </div>
    )
}
