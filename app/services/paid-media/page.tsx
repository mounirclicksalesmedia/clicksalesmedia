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
    Minus
} from "lucide-react";
import { cn } from "@/lib/utils";

// ==================== DATA ====================

const logos = ["Google Ads", "Meta Ads", "TikTok", "YouTube", "LinkedIn", "Taboola", "Outbrain"];

const painPoints = [
    {
        id: 1,
        title: "Wasted Ad Spend",
        solution: {
            title: "Stop burning cash on wrong audiences",
            description:
                "We implement negative keyword moats and precise audience exclusions to ensure every dollar connects with a qualified prospect.",
        },
    },
    {
        id: 2,
        title: "Low Conversion Rates",
        solution: {
            title: "Turn clicks into revenue",
            description:
                "Traffic is vanity, revenue is sanity. Our dedicated CRO (Conversion Rate Optimization) strategies align your landing pages with ad intent to maximize ROI.",
        },
    },
    {
        id: 3,
        title: "Unclear Attribution",
        solution: {
            title: "Know exactly what's working",
            description:
                "We set up server-side tracking and multi-touch attribution models so you can scale the winning campaigns and cut the losers with confidence.",
        },
    },
];

const caseStudies = [
    {
        logo: "E-COMMERCE GIANT",
        title: "Scaled ROAS from 2.5x to 6x in 90 days with multi-channel funnels",
        stats: [
            { value: "140%", label: "Revenue Increase" },
            { value: "-30%", label: "CPA Reduction" },
        ],
    },
    {
        logo: "SAAS PLATFORM",
        title: "Generated 500+ Qualified Demos per month via LinkedIn Ads",
        stats: [
            { value: "500+", label: "Monthly Demos" },
            { value: "45%", label: "Pipeline Velocity" },
        ],
    },
];

const services = [
    {
        icon: Search,
        title: "Search Intent Capture",
        subtitle: "Google & Bing Ads",
        points: [
            "We dominate high-intent keywords where your customers are actively searching for a solution.",
            "Structuring campaigns for maximum Quality Score to lower your CPCs.",
            "Continuous optimization of ad copy and extensions to improve CTR.",
        ],
        illustration: "search",
    },
    {
        icon: Users,
        title: "Social Demand Gen",
        subtitle: "Meta (Facebook/Instagram) & TikTok",
        points: [
            "Stopping the scroll with high-performance creative assets.",
            "Leveraging AI-driven audience targeting to find your ideal customers.",
            "Retargeting funnels that nurture prospects until they convert.",
        ],
        illustration: "social",
    },
    {
        icon: Linkedin,
        title: "B2B Account Based Marketing",
        subtitle: "LinkedIn Ads",
        points: [
            "Targeting specific companies and decision-makers with surgical precision.",
            "Sponsored content and InMail campaigns that feel personal and relevant.",
            "Driving high-value leads directly into your sales pipeline.",
        ],
        illustration: "b2b",
    },
];

const packages = [
    {
        name: "Growth Starter",
        description: "Perfect for scaling a single proven channel.",
        featured: false,
        features: [
            { icon: TrendingUp, value: "$5k-$20k", label: "Monthly Ad Spend Managed" },
            { icon: Users, value: "1", label: "Primary Channel (Google/Meta)" },
        ],
    },
    {
        name: "Omni-Channel Scale",
        description: "Dominate your market across all major platforms.",
        featured: true,
        features: [
            { icon: TrendingUp, value: "$20k+", label: "Monthly Ad Spend Managed" },
            { icon: Users, value: "Unlimited", label: "Channels Included" },
        ],
    },
];

const checklistItems = [
    "You're tired of agencies that don't understand your business.",
    "You need transparent reporting and real ROI.",
    "You want to scale beyond your current plateau.",
    "You're ready to invest in high-quality creative assets.",
    "You value data-driven decision making.",
];

const teamMembers = [
    { name: "Media Buyer", role: "Google Ads Specialist" },
    { name: "Creative Strategist", role: "Ad Creative Director" },
    { name: "Tracking Expert", role: "Analytics Lead" },
    { name: "Growth Manager", role: "Strategy Lead" },
];

const faqs = [
    {
        question: "How fast can we expect results?",
        answer:
            "Paid media usually shows initial data within 48 hours. However, optimization for stable, scalable ROAS typically takes 2-4 weeks as the algorithms learn and we refine the targeting.",
    },
    {
        question: "Do you handle ad creatives?",
        answer:
            "Yes! We believe creative is the new targeting. Our team produces high-converting static images, videos, and copy tailored to each platform.",
    },
    {
        question: "What is your minimum ad spend?",
        answer:
            "To gather statistically significant data and drive meaningful results, we recommend a minimum monthly ad spend of $5,000.",
    },
];

// ==================== COMPONENTS ====================

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

function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#1a1a1a] pt-32 pb-20">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#AD8253]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c3a177]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium tracking-wide">
                            PAID MEDIA & TRAFFIC
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
                            Turn <span className="text-[#AD8253]">Ad Spend</span> <br />
                            Into <span className="text-white">Revenue.</span>
                        </h1>
                        <p className="max-w-xl text-lg text-[#a1a1a1] leading-relaxed">
                            We engineer high-performance campaigns on Google, Meta, and LinkedIn that don't just drive clicks—they drive qualified pipeline and demonstrable ROI.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button>
                                Get a Proposal <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline">
                                View Case Studies
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-2xl bg-[#222] border border-white/5 p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <p className="text-[#a1a1a1] text-sm">Total Revenue</p>
                                    <h3 className="text-3xl font-bold text-white">$1,240,500</h3>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-bold flex items-center gap-1">
                                    <TrendingUp size={14} /> +124%
                                </div>
                            </div>

                            {/* Fake Chart Bars */}
                            <div className="flex items-end gap-3 h-48 mb-6">
                                {[40, 60, 45, 70, 55, 85, 65, 90, 100].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-gradient-to-t from-[#AD8253]/20 to-[#AD8253] rounded-t-sm hover:opacity-80 transition-opacity"
                                        style={{ height: `${h}%` }}
                                    />
                                ))}
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#272727] border border-white/5">
                                    <div className="h-10 w-10 rounded-lg bg-[#AD8253]/20 flex items-center justify-center text-[#AD8253]">
                                        <Zap size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">ROAS Optimized</p>
                                        <p className="text-xs text-[#a1a1a1]">Campaigns firing on all cylinders</p>
                                    </div>
                                    <Check className="h-5 w-5 text-[#AD8253] ml-auto" />
                                </div>
                                <Button className="w-full bg-[#AD8253]/10 text-[#AD8253] hover:bg-[#AD8253] hover:text-white border border-[#AD8253]/20">
                                    Analyze Your Funnel
                                </Button>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -z-10 -top-10 -right-10 h-64 w-64 bg-[#AD8253]/20 rounded-full blur-[80px]" />
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
                <p className="text-center text-[#666] text-xs font-bold uppercase tracking-widest mb-8">Platforms We Master</p>
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
                        Stop Guessing. <br />
                        <span className="text-[#AD8253]">Start Scaling.</span>
                    </h2>
                    <p className="text-[#a1a1a1] text-lg">
                        We systematically eliminate wasted spend and scale the winners.
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
                            <Button>Book a Strategy Call</Button>
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
                <Button variant="outline">Learn More</Button>
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
                        Full-Funnel <span className="text-[#AD8253]">Dominance</span>
                    </h2>
                    <p className="text-[#a1a1a1]">
                        We don't just run ads. We build ecosystems that capture demand.
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
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to amplify your growth?</h2>
                            <p className="text-white/80 text-lg">Join the partners who've scaled to 7 and 8 figures with our systems.</p>
                            <Button className="bg-white text-[#AD8253] hover:bg-white/90 shadow-xl">
                                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex justify-around gap-8 text-center">
                            <div>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">$50M+</p>
                                <p className="text-sm text-white/70 font-medium">Ad Spend Managed</p>
                            </div>
                            <div>
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">4.5x</p>
                                <p className="text-sm text-white/70 font-medium">Average ROAS</p>
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
                    <h2 className="mb-4 text-3xl md:text-4xl font-bold text-white">Investment Levels</h2>
                    <p className="text-[#a1a1a1]">Transparent pricing models aligned with your growth stage.</p>
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
                            <Button
                                className={`w-full ${pkg.featured
                                        ? "bg-[#AD8253] text-white hover:bg-[#c3a177]"
                                        : "border border-white/20 bg-transparent text-white hover:bg-white/5"
                                    }`}
                            >
                                Get a Quote
                            </Button>
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

// ==================== MAIN PAGE ====================

export default function PaidMediaPage() {
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
