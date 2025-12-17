"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import {
    ArrowLeft, ArrowRight, ChevronRight, Check, Target, TrendingUp,
    Mail, Search, BarChart3, Zap, Shield, Users, Brain, Sparkles, CheckCircle2,
    Database, Bot, LineChart, Settings, MessageSquare,
} from "lucide-react";

// ============ DATA ============

const challenges = [
    { title: "Building authority in a crowded consulting market", solution: { title: "AI-Powered Thought Leadership", description: "We use AI-driven content distribution and SEO to establish your firm as the go-to authority in your niche, positioning you above competitors in search and social." } },
    { title: "Generating high-value enterprise leads", solution: { title: "Intelligent ABM Campaigns", description: "Our machine learning identifies decision-makers at your ideal client companies and engages them with personalized outreach that opens doors to six-figure engagements." } },
    { title: "Long sales cycles with multiple stakeholders", solution: { title: "Automated Multi-Touch Nurturing", description: "Our CRM-integrated nurture sequences keep your firm top-of-mind throughout extended buying processes, addressing each stakeholder's concerns automatically." } },
    { title: "Differentiating from larger, established firms", solution: { title: "Specialized Positioning Strategy", description: "We highlight your unique methodologies, personalized service, and deep expertise that large firms simply cannot match—amplified through precision targeting." } },
    { title: "Converting thought leadership into paying clients", solution: { title: "Content-to-Client Attribution", description: "Our tracking systems attribute every touchpoint, showing exactly how your content drives pipeline and proving marketing ROI to stakeholders." } },
];

const pipelineStages = [
    { label: "Prospects", value: "Up to 8,000*", sublabel: "qualified decision-makers", isPrimary: true },
    { label: "Engagements", value: "Up to 4,000*", sublabel: "content engagements", isPrimary: false },
    { label: "Meetings", value: "100*", sublabel: "discovery calls booked", isPrimary: false },
    { label: "Clients", value: "5-15*", sublabel: "new retainer clients", isPrimary: false },
];

const journeySteps = [
    { title: "Authority building", description: "We establish your firm's thought leadership through AI-optimized content distribution, PR placements, and targeted visibility campaigns that reach C-suite decision-makers." },
    { title: "Targeted outreach", description: "We engage ideal prospects with personalized messaging powered by behavioral data, demonstrating understanding of their challenges and positioning your expertise as the solution." },
    { title: "Relationship nurturing", description: "We develop long-term relationships through CRM-automated value delivery, ensuring your firm is top-of-mind when consulting needs arise." },
];

const processSteps = [
    {
        icon: Brain,
        step: "01",
        title: "Strategic Intelligence",
        subtitle: "ICP & Market Mapping",
        items: ["Define ideal client profile with AI analysis", "Map total addressable market", "Identify high-intent signals (funding, hiring, expansion)"],
    },
    {
        icon: Mail,
        step: "02",
        title: "AI-Powered Outreach",
        subtitle: "Cold Email & LinkedIn",
        items: ["Dedicated sending infrastructure", "AI-personalized messaging at scale", "Behavioral sequences that adapt to engagement"],
    },
    {
        icon: Database,
        step: "03",
        title: "CRM Architecture",
        subtitle: "Pipeline Management",
        items: ["HubSpot/Salesforce integration", "Automated lead scoring & routing", "Real-time pipeline visibility"],
    },
    {
        icon: BarChart3,
        step: "04",
        title: "Performance Analytics",
        subtitle: "Continuous Optimization",
        items: ["Full-funnel attribution tracking", "A/B testing across all channels", "Weekly performance reporting"],
    },
];

const valueProps = [
    { icon: Bot, title: "AI-First Execution", desc: "Machine learning optimizes your campaigns 24/7, adjusting messaging and targeting for maximum conversion rates." },
    { icon: Database, title: "CRM Integration", desc: "We architect your CRM to capture, score, and route leads automatically—turning chaos into a predictable pipeline." },
    { icon: LineChart, title: "Performance Obsessed", desc: "Every action is tracked and attributed. We measure success in meetings booked and deals closed, not vanity metrics." },
    { icon: Shield, title: "Enterprise-Grade", desc: "Our systems are built for scale. GDPR-compliant, SOC-2 ready, and designed for sophisticated consulting practices." },
];

const consultingSegments = [
    "Management Consulting", "Strategy Consulting", "IT & Technology Consulting",
    "HR & Organizational Consulting", "Financial Advisory", "Marketing & Brand Consulting",
    "Operations Consulting", "Risk & Compliance", "Sustainability Consulting", "Digital Transformation",
];

const stats = [
    { value: "97%", label: "Email Deliverability" },
    { value: "3.2x", label: "Meeting Conversion" },
    { value: "45%", label: "Shorter Sales Cycles" },
    { value: "100%", label: "Pipeline Visibility" },
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
                            AI-Powered Lead Generation for Consulting
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Grow Your <span className="gradient-gold-text">Consulting Practice</span> with AI
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Build authority and attract high-value enterprise clients using AI-powered outreach, intelligent CRM architecture, and data-driven performance optimization.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(173,130,83,0.4)] transition-all">
                            Book a Strategy Call
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center text-white font-bold text-lg">S</div>
                            <div>
                                <p className="font-medium text-white">Dr Samir Abdelaziz</p>
                                <p className="text-sm text-[#6b6b6b]">CEO, GovernValu Investment & Consulting</p>
                            </div>
                        </div>
                        <p className="text-white mb-6 leading-relaxed italic">
                            "ClickSalesMedia engineered a complete transformation of our lead acquisition. Their strategic ABM campaigns delivered 76 qualified meetings with C-level executives across the GCC, converting into retainer agreements that now represent a significant revenue stream."
                        </p>
                        <div className="flex items-center gap-8 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-[#AD8253]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">76</p>
                                    <p className="text-sm text-[#6b6b6b]">C-level meetings</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-[#AD8253]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">$2M+</p>
                                    <p className="text-sm text-[#6b6b6b]">annual contracts</p>
                                </div>
                            </div>
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
                        Our Approach
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why <span className="gradient-gold-text">Elite Consultancies</span> Choose Us
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg">
                        We combine AI-powered automation with strategic expertise to build predictable, scalable client acquisition systems for consulting firms.
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
                        Solutions for <span className="gradient-gold-text">Consulting Growth Challenges</span>
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

function PipelineSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-20 bg-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Your Client Pipeline <span className="gradient-gold-text">With ClickSalesMedia</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto">Focus on delivering exceptional consulting while we fill your pipeline with qualified prospects.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="glass-card p-6 mb-4">
                            <p className="text-[#6b6b6b] text-sm mb-4">We manage your entire client acquisition journey</p>
                            <div className="space-y-2">
                                {journeySteps.map((step, index) => (
                                    <button key={index} onClick={() => setActiveStep(index)} className={`w-full text-left rounded-xl transition-all ${activeStep === index ? "bg-[#1a1a1a] p-4" : "bg-transparent hover:bg-[#1a1a1a]/50 p-4"}`}>
                                        <div className="flex items-center justify-between">
                                            <span className={`font-medium ${activeStep === index ? "text-[#AD8253]" : "text-white"}`}>{step.title}</span>
                                            <ChevronRight className={`w-5 h-5 text-[#AD8253] transition-transform ${activeStep === index ? "rotate-90" : ""}`} />
                                        </div>
                                        {activeStep === index && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#a1a1a1] text-sm mt-3">{step.description}</motion.p>}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card p-6">
                            <p className="text-[#6b6b6b] text-sm mb-4">Your role in the process</p>
                            <div className="bg-[#1a1a1a] rounded-xl p-4 flex items-center justify-between">
                                <span className="text-white font-medium">Close deals & deliver value</span>
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-[#6b6b6b] text-sm mb-8 text-center">* Average yearly outcomes. Results depend on multiple factors.</p>
                        <div className="w-full max-w-md space-y-4">
                            {pipelineStages.map((stage, index) => (
                                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-[#1a1a1a] text-white border border-white/10">{stage.label}</div>
                                    <div className={`rounded-xl p-6 text-center ${stage.isPrimary ? "bg-gradient-to-r from-[#AD8253] to-[#c3a177]" : "bg-[#1a1a1a] border border-white/10"}`} style={{ width: `${100 - index * 15}%`, margin: "0 auto" }}>
                                        <p className={`text-xl font-bold ${stage.isPrimary ? "text-[#1a1a1a]" : "text-white"}`}>{stage.value}</p>
                                        <p className={`text-sm ${stage.isPrimary ? "text-[#1a1a1a]/70" : "text-[#a1a1a1]"}`}>{stage.sublabel}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessSection() {
    return (
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#AD8253]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-4">
                        Our AI-Driven Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        How We <span className="gradient-gold-text">Optimize Performance</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg">
                        A proven system that combines strategic intelligence with AI execution to deliver qualified meetings for your consulting practice.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl font-bold bg-gradient-to-r from-[#AD8253] to-[#c3a177] bg-clip-text text-transparent">{step.step}</span>
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
        <section className="py-20 bg-gradient-to-br from-[#272727] to-[#1a1a1a]">
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
                        <span className="gradient-gold-text">We serve consulting firms</span> of all specializations
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl leading-relaxed">
                        From boutique strategy firms to large management consultancies, we help consulting practices attract high-value clients.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {consultingSegments.map((segment, index) => (
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
                            Ready to Grow Your Consulting Practice?
                        </h2>
                        <p className="text-[#a1a1a1] mb-8 max-w-2xl mx-auto">
                            Let's discuss how our AI-powered approach and CRM architecture can help you attract more high-value clients and build a predictable pipeline.
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

export default function ConsultingIndustryPage() {
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
            <PipelineSection />
            <ProcessSection />
            <StatsSection />
            <SegmentsSection />
            <CTASection />
            <Footer />
        </main>
    );
}
