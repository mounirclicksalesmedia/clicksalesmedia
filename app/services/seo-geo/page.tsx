"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import {
    ChevronDown,
    Menu,
    ArrowRight,
    Check,
    Zap,
    ChevronLeft,
    ChevronRight,
    Settings,
    Search,
    FileText,
    Send,
    Star,
    TrendingUp,
    Users,
    Linkedin,
    Youtube,
    Twitter,
    Plus,
    Minus,
    Globe,
    Cpu,
    BarChart3
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BookingButton } from "@/components/booking/BookingButton";

// ==================== DATA ====================

const logos = ["Google", "Bing", "OpenAI", "Perplexity", "Gemini", "Claude", "Yahoo"];

const painPoints = [
    {
        id: 1,
        title: "Invisible on Google",
        solution: {
            title: "Claim your digital real estate",
            description:
                "If you aren't on Page 1, you don't exist. We use technical SEO and authority building to push your brand to the top of high-value search terms.",
        },
    },
    {
        id: 2,
        title: "Traffic loss to AI Answers",
        solution: {
            title: "Start ranking in AI Summaries (GEO)",
            description:
                "Search is changing. We optimize your content not just for keywords, but for Large Language Models (LLMs) like ChatGPT, Gemini, and Perplexity.",
        },
    },
    {
        id: 3,
        title: "Low Quality Organic Leads",
        solution: {
            title: "Target intent, not just volume",
            description:
                "We focus on 'Revenue Keywords'—terms used by buyers ready to purchase—rather than vanity metrics that bring empty traffic.",
        },
    },
];

const caseStudies = [
    {
        logo: "FINTECH STARTUP",
        title: "Captured 3 Featured Snippets & 15% Traffic Boost via GEO",
        stats: [
            { value: "+215%", label: "Organic Traffic" },
            { value: "Top 3", label: "For Main Category" },
        ],
    },
    {
        logo: "HEALTHCARE PROVIDER",
        title: "Dominated Local SEO in 4 major metropolitan areas",
        stats: [
            { value: "350+", label: "Monthly Calls" },
            { value: "+80%", label: "Map Pack Visibility" },
        ],
    },
];

const services = [
    {
        icon: Search,
        title: "Modern Technical SEO",
        subtitle: "Foundation for Growth",
        points: [
            "Comprehensive site audits to fix crawlability and indexing issues.",
            "Core Web Vitals optimization for lightning-fast user experience.",
            "Schema markup implementation to help engines understand your data.",
        ],
        illustration: "seo",
    },
    {
        icon: Cpu,
        title: "GEO (Generative Engine Optimization)",
        subtitle: "Future-Proofing for AI",
        points: [
            "Optimizing content structure for direct citation by AI models (ChatGPT, Perplexity).",
            "Entity-based SEO to establish your brand as 'The Source' in the Knowledge Graph.",
            "Structuring data for retrieval-augmented generation (RAG) systems.",
        ],
        illustration: "geo",
    },
    {
        icon: FileText,
        title: "Authority Content Strategy",
        subtitle: "Topical Authority",
        points: [
            "Building topical clusters that prove expertise to Google's E-E-A-T algorithms.",
            "High-quality backlink acquisition from industry-relevant sources.",
            "Updating legacy content to maintain freshness and relevance.",
        ],
        illustration: "content",
    },
];

const packages = [
    {
        name: "Authority Builder",
        description: "For brands engaged in a long-term organic growth game.",
        featured: false,
        features: [
            { icon: FileText, value: "4", label: "Deep-Dive Articles / Mo" },
            { icon: Search, value: "Full", label: "Technical Maintenance" },
        ],
    },
    {
        name: "Market Dominance",
        description: "Aggressive expansion for maximum visibility across AI & Search.",
        featured: true,
        features: [
            { icon: Cpu, value: "Included", label: "GEO / AI Optimization" },
            { icon: FileText, value: "10+", label: "Content Assets / Mo" },
        ],
    },
];

const teamMembers = [
    { name: "SEO Strategist", role: "Search Lead" },
    { name: "Technical SEO", role: "Code Optimization" },
    { name: "Content Lead", role: "Editorial Director" },
    { name: "PR Specialist", role: "Link Building" },
];

const faqs = [
    {
        question: "What is GEO (Generative Engine Optimization)?",
        answer:
            "GEO is the new SEO. It involves optimizing your content so that AI engines like ChatGPT, Perplexity, and Google's AI Overviews cite you as the answer. It requires different formatting and authority signals than traditional SEO.",
    },
    {
        question: "How long does SEO take?",
        answer:
            "SEO is a compound interest game. While technical fixes can show results in weeks, building significant authority typically takes 3-6 months. However, the ROI is often higher than paid channels in the long run.",
    },
    {
        question: "Do you guarantee #1 rankings?",
        answer:
            "No ethical agency guarantees a #1 ranking because algorithms are proprietary and changing. We guarantee a proven process, transparency, and a relentless focus on improving your visibility and revenue.",
    },
];

// ==================== HELPER COMPONENTS ====================

const Button = ({ children, className, variant = "primary", ...props }: any) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300",
                variant === "primary"
                    ? "bg-[#AD8253] text-white hover:bg-[#c3a177] shadow-[0_0_15px_rgba(173,130,83,0.3)] hover:shadow-[0_0_25px_rgba(173,130,83,0.6)]"
                    : "border border-[#AD8253]/30 bg-transparent text-white hover:bg-[#AD8253]/10",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

const CustomAccordionItem = ({ title, children, isOpen, onClick }: any) => {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between py-4 text-left font-medium text-white transition-all hover:text-[#AD8253]"
            >
                {title}
                {isOpen ? <Minus className="h-4 w-4 text-[#AD8253]" /> : <Plus className="h-4 w-4 text-[#AD8253]" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 text-[#a1a1a1]">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ==================== SECTIONS ====================

function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#1a1a1a] pt-32 pb-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#AD8253]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#c3a177]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium tracking-wide">
                            SEO & GEO (AI SEARCH)
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
                            Rank In The <br />
                            <span className="text-[#AD8253]">Age of AI.</span>
                        </h1>
                        <p className="max-w-xl text-lg text-[#a1a1a1] leading-relaxed">
                            Traditional SEO is evolving. We help you dominate Google today while future-proofing your brand for the AI search engines of tomorrow (GEO).
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <BookingButton
                                text="Get a Site Audit"
                                source="service-seo-geo-hero"
                                variant="primary"
                            />
                            <Button variant="outline">
                                What is GEO?
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl bg-[#222] border border-white/5 p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-[#a1a1a1] text-sm">Monthly Traffic Value</p>
                                    <h3 className="text-3xl font-bold text-white">$245,000</h3>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-bold flex items-center gap-1">
                                    <TrendingUp size={14} /> +312%
                                </div>
                            </div>

                            {/* Abstract Search Results Visual */}
                            <div className="space-y-3 mb-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-4 p-3 rounded-lg bg-[#272727] border border-white/5 opacity-80">
                                        <div className="w-10 h-10 rounded bg-[#AD8253]/10 flex-shrink-0" />
                                        <div className="flex-1 space-y-2">
                                            <div className="h-3 w-3/4 bg-white/10 rounded" />
                                            <div className="h-2 w-1/2 bg-white/5 rounded" />
                                        </div>
                                    </div>
                                ))}
                                {/* The "AI Answer" Box */}
                                <div className="p-4 rounded-xl bg-gradient-to-br from-[#AD8253]/20 to-[#AD8253]/5 border border-[#AD8253]/30">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap size={14} className="text-[#AD8253]" />
                                        <span className="text-xs font-bold text-[#AD8253]">AI Generative Answer</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/20 rounded mb-2" />
                                    <div className="h-2 w-5/6 bg-white/20 rounded mb-2" />
                                    <div className="h-2 w-4/6 bg-white/20 rounded" />
                                </div>
                            </div>

                            <BookingButton
                                text="Scan Your Rankings"
                                source="service-seo-geo-scan_rankings"
                                className="w-full bg-[#AD8253]/10 text-[#AD8253] hover:bg-[#AD8253] hover:text-white border border-[#AD8253]/20"
                                variant="secondary"
                            />
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -z-10 -bottom-10 -left-10 h-64 w-64 bg-[#c3a177]/20 rounded-full blur-[80px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function LogoBar() {
    return (
        <section className="border-y border-white/5 bg-[#1a1a1a] py-10">
            <div className="container mx-auto px-6">
                <p className="text-center text-[#666] text-xs font-bold uppercase tracking-widest mb-8">Where We Make You Visible</p>
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo) => (
                        <span key={logo} className="text-lg font-bold text-white/40 hover:text-[#AD8253] cursor-default transition-colors">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function OpportunitiesSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#111] py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="mb-6 text-3xl md:text-5xl font-bold text-white">
                        The Search Landscape <br />
                        <span className="text-[#AD8253]">Has Changed.</span>
                    </h2>
                    <p className="text-[#a1a1a1] text-lg">
                        Old SEO tactics don't work in an AI world. We adapt your strategy.
                    </p>
                </div>
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                        {painPoints.map((point, index) => (
                            <button
                                key={point.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex w-full items-center justify-between rounded-xl p-6 text-left transition-all border ${activeTab === index
                                    ? "bg-[#222] border-[#AD8253] text-[#AD8253] shadow-[0_0_20px_rgba(173,130,83,0.1)]"
                                    : "bg-transparent border-transparent text-[#666] hover:bg-[#222] hover:text-[#ccc]"
                                    }`}
                            >
                                <span className="text-lg font-medium">{point.title}</span>
                                {activeTab === index && <ArrowRight className="h-5 w-5" />}
                            </button>
                        ))}
                    </div>
                    <div className="rounded-3xl bg-[#222] border border-white/5 p-10 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#AD8253]/10 rounded-bl-full" />

                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#AD8253]/20">
                            <Check className="h-7 w-7 text-[#AD8253]" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-white">{painPoints[activeTab].solution.title}</h3>
                        <p className="mb-8 text-[#a1a1a1] leading-relaxed text-lg">{painPoints[activeTab].solution.description}</p>
                        <div>
                            <BookingButton
                                text="Book an Audit"
                                source="service-seo-geo-audit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: any) {
    return (
        <div className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-[#AD8253]/10 text-[#AD8253]">
                        <service.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white md:text-3xl">{service.title}</h3>
                </div>
                <p className="mb-8 font-medium text-[#AD8253]">{service.subtitle}</p>
                <ul className="mb-8 space-y-4">
                    {service.points.map((point: string, i: number) => (
                        <li key={i} className="flex gap-4 text-[#a1a1a1]">
                            <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-[#AD8253]/20 flex items-center justify-center">
                                <Check size={12} className="text-[#AD8253]" />
                            </div>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
                <Button variant="outline">Explore Service</Button>
            </div>

            <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""} rounded-3xl overflow-hidden bg-[#222] border border-white/5 aspect-video flex items-center justify-center p-8 group`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#AD8253]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Abstract Placeholder Visual */}
                <div className="relative text-center">
                    <div className="mx-auto w-20 h-20 rounded-2xl bg-[#AD8253] flex items-center justify-center text-white mb-4 shadow-[0_0_30px_rgba(173,130,83,0.4)]">
                        <service.icon size={40} />
                    </div>
                    <p className="text-white font-bold">{service.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

function ServicesSection() {
    return (
        <section className="bg-[#1a1a1a] py-24">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white">
                        Comprehensive <span className="text-[#AD8253]">Search Strategy</span>
                    </h2>
                    <p className="text-[#a1a1a1]">
                        From technical foundation to AI authority building.
                    </p>
                </div>
                <div className="space-y-32">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatsSection() {
    return (
        <section className="relative overflow-hidden py-24 bg-[#111]">
            <div className="container mx-auto px-6">
                <div className="relative rounded-3xl bg-gradient-to-r from-[#AD8253] to-[#8c6a42] p-12 md:p-16 overflow-hidden">
                    <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />

                    <div className="grid items-center gap-12 lg:grid-cols-2 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Be the answer they find.</h2>
                            <p className="text-white/80 text-lg">Stop losing customers to competitors with better SEO. Own your keywords.</p>
                            <BookingButton
                                text="Book an SEO Strategy Call"
                                source="service-seo-geo-stats"
                                className="bg-white text-[#AD8253] hover:bg-white/90 shadow-xl"
                            />
                        </div>
                        <div className="flex justify-around gap-8 text-center">
                            <div>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">300%</p>
                                <p className="text-sm text-white/70 font-medium">Avg Traffic Growth</p>
                            </div>
                            <div>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">Top 3</p>
                                <p className="text-sm text-white/70 font-medium">Target Rankings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PricingSection() {
    return (
        <section className="py-24 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">Growth Partners</h2>
                    <p className="text-[#a1a1a1]">We don't sell backlinks. We sell market share.</p>
                </div>
                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className={`rounded-2xl border p-8 transition-all duration-300 ${pkg.featured
                                ? "border-[#AD8253] bg-[#AD8253]/5 shadow-[0_0_30px_rgba(173,130,83,0.1)] scale-105"
                                : "border-white/10 bg-[#222] hover:border-white/20"
                                }`}
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                                {pkg.featured && <Star className="h-6 w-6 text-[#AD8253] fill-[#AD8253]" />}
                            </div>
                            <p className="mb-8 text-[#a1a1a1]">{pkg.description}</p>
                            <div className="mb-8 space-y-5">
                                {pkg.features.map((feature) => (
                                    <div key={feature.label} className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#AD8253]/10">
                                            <feature.icon className="h-5 w-5 text-[#AD8253]" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">{feature.value}</p>
                                            <p className="text-xs text-[#666] uppercase tracking-wide">{feature.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <BookingButton
                                text="Inquire Now"
                                source={`service-seo-geo-pricing-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`w-full ${pkg.featured
                                    ? "bg-[#AD8253] text-white hover:bg-[#c3a177]"
                                    : "border border-white/20 bg-transparent text-white hover:bg-white/5"
                                    }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#111]">
            <div className="container mx-auto px-6">
                <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Common Questions</h2>
                <div className="mx-auto max-w-3xl space-y-2">
                    {faqs.map((faq, index) => (
                        <CustomAccordionItem
                            key={index}
                            title={faq.question}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {faq.answer}
                        </CustomAccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function SEOPage() {
    return (
        <main className="min-h-screen bg-[#1a1a1a] text-white">
            <Navigation />
            <HeroSection />
            <LogoBar />
            <OpportunitiesSection />
            <ServicesSection />
            <StatsSection />
            <PricingSection />
            <FAQSection />
            <Footer />
        </main>
    );
}
