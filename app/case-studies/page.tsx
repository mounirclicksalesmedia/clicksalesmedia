"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Play, Clock, ChevronLeft, ChevronRight, ChevronDown, Users } from "lucide-react";

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

const caseStudies = [
    {
        id: 1,
        image: "/manufacturing-factory-times-square-signage.jpg",
        categories: ["Manufacturing"],
        title:
            "A U.S.-based signage manufacturer improved lead flow and tripled its pipeline with our omnichannel strategy",
        stats: [
            { value: "$2.7M", label: "pipeline generated" },
            { value: "$575K", label: "the largest deal booked" },
        ],
    },
    {
        id: 2,
        image: "/healthcare-tech-company-presentation-getwell.jpg",
        categories: ["Healthcare", "SaaS"],
        title: "We helped a health tech company reach new buyer personas and 5x their meeting conversion rate",
        stats: [
            { value: "44", label: "qualified meetings in 5.5 months" },
            { value: "72%", label: "of meetings booked with new buyer personas" },
        ],
    },
    {
        id: 3,
        image: "/warehouse-worker-human-resources-inclusive-workpla.jpg",
        categories: ["Human Resources"],
        title: "Inbound + outbound LinkedIn strategy boosted growth for an inclusive talent provider",
        stats: [
            { value: "450%", label: "Pipeline growth in the first 3 months" },
            { value: "70%", label: "Better connection acceptance rate" },
        ],
    },
    {
        id: 4,
        image: "/financial-services-trading-floor-purple-lights.jpg",
        categories: ["Finance"],
        title:
            "An investment platform fixed inconsistent lead flow issues and landed 30+ monthly meetings with our omnichannel approach",
        stats: [
            { value: "$434K", label: "Forecasted new revenue" },
            { value: "346", label: "Appointments in 15 months" },
        ],
    },
    {
        id: 5,
        image: "/legal-services-office-professional-blackhills-ai.jpg",
        categories: ["Legal Services"],
        title: "HubSpot migration with our team helped a legal services company cut down CRM costs by 50%",
        stats: [
            { value: "20%", label: "Increase in lead response rate" },
            { value: "10%", label: "Higher lead-to-customer conversions" },
        ],
    },
    {
        id: 6,
        image: "/ge-healthcare-medical-technology-conference-purple.jpg",
        categories: ["Manufacturing"],
        title: "Event-based cold outreach: Bringing deals with dream clients for a medical technology company",
        stats: [
            { value: "135", label: "In-person meetings in 7 months" },
            { value: "112%", label: "Avg. monthly KPI" },
        ],
    },
]

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
                        <div
                            key={study.id}
                            className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-[#3a3a3a] hover:border-[#AD8253] transition-colors group cursor-pointer"
                        >
                            <div className="relative overflow-hidden h-56 bg-[#000]">
                                {/* Image Placeholder */}
                                <div className="w-full h-full bg-[#333] flex items-center justify-center text-[#666]">
                                    [Case Study Image]
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    {study.categories.map((category) => (
                                        <span
                                            key={category}
                                            className="text-xs font-medium text-gray-400 bg-[#272727] px-3 py-1 rounded-full border border-[#3a3a3a]"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-6 leading-snug group-hover:text-[#c3a177] transition-colors">
                                    {study.title}
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {study.stats.map((stat, index) => (
                                        <div key={index}>
                                            <p className="text-2xl font-bold text-[#AD8253]">{stat.value}</p>
                                            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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
