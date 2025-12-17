"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import {
    ArrowLeft, ArrowRight, ChevronRight, Check, Target, TrendingUp,
    Mail, Search, BarChart3, Zap, Shield, Users, Brain, Sparkles, CheckCircle2,
} from "lucide-react";

// ============ DATA ============

const challenges = [
    { title: "Building trust with sophisticated investors", solution: { title: "Authority-Led Outreach", description: "We position your firm as a thought leader through strategic content and compliance-ready messaging that establishes credibility before the first conversation." } },
    { title: "Navigating strict compliance regulations", solution: { title: "Compliant Campaign Architecture", description: "Our team crafts persuasive messaging that resonates with HNWIs and institutions while ensuring complete regulatory compliance—no promises of returns, just value." } },
    { title: "Reaching high-net-worth decision-makers", solution: { title: "Precision Targeting with AI", description: "We use AI-driven data enrichment to identify and reach the exact decision-makers who match your ideal client profile, ensuring every touchpoint is relevant." } },
    { title: "Long sales cycles with multiple stakeholders", solution: { title: "Multi-Touch Nurture Sequences", description: "Our automated nurture sequences keep your firm top-of-mind throughout extended buying processes, addressing each stakeholder's concerns strategically." } },
    { title: "Differentiating from larger institutions", solution: { title: "Specialized Positioning", description: "We highlight your unique expertise, personalized service, and specialized methodologies that large institutions simply cannot replicate." } },
];

const processSteps = [
    {
        icon: Brain,
        step: "01",
        title: "Strategic Intelligence",
        subtitle: "ICP & Market Mapping",
        items: ["Define ideal investor/client profile", "Map total addressable market", "Identify high-intent signals (funding, hiring, exits)"],
    },
    {
        icon: Mail,
        step: "02",
        title: "AI-Powered Outreach",
        subtitle: "Cold Email Infrastructure",
        items: ["Dedicated sending domains with SPF/DKIM/DMARC", "AI-cleaned data with <1% bounce rates", "Behavioral sequences that adapt to engagement"],
    },
    {
        icon: Search,
        step: "03",
        title: "Organic Authority",
        subtitle: "SEO & Thought Leadership",
        items: ["Finance-specific keyword targeting", "Compliance-approved content strategy", "LinkedIn authority building"],
    },
    {
        icon: BarChart3,
        step: "04",
        title: "Paid Amplification",
        subtitle: "Ads Optimization",
        items: ["LinkedIn & programmatic display ads", "Retargeting sequences for warm prospects", "CPA-optimized campaign management"],
    },
];

const valueProps = [
    { icon: Shield, title: "Compliance-First Approach", desc: "Every campaign is built with financial regulations in mind. We understand FINRA, SEC, and FCA requirements." },
    { icon: Zap, title: "AI-Driven Execution", desc: "Machine learning optimizes your campaigns 24/7, adjusting messaging and targeting for maximum conversion." },
    { icon: Target, title: "Precision Targeting", desc: "We don't spray and pray. Our AI identifies the exact decision-makers who need your services." },
    { icon: TrendingUp, title: "Revenue-Focused Metrics", desc: "We measure success in AUM growth and closed mandates, not vanity metrics like impressions." },
];

const segments = ["Wealth Management", "Asset Management", "Private Equity", "Hedge Funds", "Fintech", "Insurance", "Commercial Banking", "Family Offices", "Investment Advisory", "Mortgage & Lending"];

const stats = [
    { value: "97%", label: "Inbox Placement" },
    { value: "<1%", label: "Bounce Rate" },
    { value: "3.2x", label: "Meeting Conversion" },
    { value: "100%", label: "Compliance Rate" },
];

// ============ COMPONENTS ============

function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#AD8253]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c3a177]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(173,130,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(173,130,83,1) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

            <div className="relative z-10 container mx-auto px-6">
                <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#AD8253] mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />All industries
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-6">
                            Financial Services Lead Generation
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Acquire <span className="gradient-gold-text">High-Value Clients</span> in Finance
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            We help wealth managers, fintechs, and asset firms build trust and book meetings with sophisticated investors through AI-powered, compliance-ready outreach.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(173,130,83,0.4)] transition-all">
                            Start Growing Your Pipeline
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#AD8253]/10">
                            <Image
                                src="/industries/invest.png"
                                alt="Financial Services Lead Generation"
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function PhilosophySection() {
    return (
        <section className="py-20 bg-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-4">
                        Our Philosophy
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why <span className="gradient-gold-text">Finance Leaders</span> Choose Us
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg">
                        In finance, trust is everything. We don't do generic outreach. We build authority-led campaigns that establish your credibility before the first conversation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valueProps.map((prop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 group hover:border-[#AD8253]/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center mb-4 group-hover:bg-[#AD8253]/20 transition-colors">
                                <prop.icon className="w-6 h-6 text-[#AD8253]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                            <p className="text-[#a1a1a1] text-sm leading-relaxed">{prop.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ChallengesSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Solutions for <span className="gradient-gold-text">Financial Sector Challenges</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        {challenges.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-full text-left px-6 py-4 rounded-xl transition-all flex items-center justify-between ${active === i ? "bg-[#272727] border border-[#AD8253]/30" : "bg-[#272727]/50 border border-transparent hover:border-white/10"}`}
                            >
                                <span className={`font-medium ${active === i ? "text-[#AD8253]" : "text-[#a1a1a1]"}`}>{c.title}</span>
                                {active === i && <ArrowRight className="w-5 h-5 text-[#AD8253]" />}
                            </button>
                        ))}
                    </div>

                    <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="glass-card p-8">
                        <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                            <Check className="w-7 h-7 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{challenges[active].solution.title}</h3>
                        <p className="text-[#a1a1a1] mb-8 leading-relaxed">{challenges[active].solution.description}</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full">
                            Schedule a Call
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ProcessSection() {
    return (
        <section className="py-24 bg-[#272727] relative overflow-hidden">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#AD8253]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-4">
                        Our AI-Driven Approach
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        How We <span className="gradient-gold-text">Generate Revenue</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg">
                        A proven system that combines strategic intelligence with AI execution to deliver qualified meetings for your financial services firm.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#AD8253]/20 via-[#AD8253]/40 to-[#AD8253]/20 -translate-y-1/2 z-0" />

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative z-10"
                        >
                            <div className="glass-card p-6 h-full group hover:border-[#AD8253]/30 transition-all duration-500">
                                {/* Step badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl font-bold bg-gradient-to-r from-[#AD8253] to-[#c3a177] bg-clip-text text-transparent">
                                        {step.step}
                                    </span>
                                    <div className="w-10 h-10 rounded-lg bg-[#AD8253]/10 flex items-center justify-center group-hover:bg-[#AD8253]/20 transition-colors">
                                        <step.icon className="w-5 h-5 text-[#AD8253]" />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                <p className="text-[#AD8253] text-sm mb-4">{step.subtitle}</p>

                                <ul className="space-y-2">
                                    {step.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + i * 0.1 }}
                                            className="flex items-start gap-2 text-sm text-[#a1a1a1]"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-[#AD8253] mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Performance <span className="gradient-gold-text">Metrics</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-gold-text mb-2">{stat.value}</div>
                            <div className="text-sm text-[#6b6b6b]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SegmentsSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        <span className="gradient-gold-text">We serve financial firms</span> across all specializations
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl leading-relaxed">
                        From boutique wealth advisors to institutional asset managers, we help financial services firms attract high-value clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {segments.map((segment, index) => (
                        <motion.div
                            key={segment}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card px-4 py-3 text-center hover:border-[#AD8253]/30 transition-colors"
                        >
                            <span className="text-white text-sm">{segment}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-20 bg-[#272727]">
            <div className="container mx-auto px-6">
                <div className="glass-card p-12 text-center bg-gradient-to-br from-[#AD8253]/10 to-transparent border-[#AD8253]/20">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Sparkles className="w-12 h-12 text-[#AD8253] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Grow Your Financial Practice?
                        </h2>
                        <p className="text-[#a1a1a1] mb-8 max-w-2xl mx-auto">
                            Let's discuss how our AI-powered approach can help you attract more high-value clients and build a predictable pipeline.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(173,130,83,0.4)] transition-all">
                            Schedule a Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function FinancialServicesIndustryPage() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
        });
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => { lenis.destroy(); };
    }, []);

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />
            <HeroSection />
            <PhilosophySection />
            <ChallengesSection />
            <ProcessSection />
            <StatsSection />
            <SegmentsSection />
            <CTASection />
            <Footer />
        </main>
    );
}
