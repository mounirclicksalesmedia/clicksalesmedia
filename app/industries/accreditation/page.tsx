"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { BookingButton } from "@/components/booking/BookingButton";
import {
    ArrowLeft, ArrowRight, ChevronRight, Check, Target, TrendingUp,
    BadgeCheck, Search, BarChart3, Zap, Shield, Users, Brain, Sparkles, CheckCircle2,
    FileCheck, Globe, MessageSquare, Award, ClipboardCheck, Building2,
} from "lucide-react";

// ============ DATA ============

const challenges = [
    { title: "Reaching organizations seeking certification", solution: { title: "Intent-Based Targeting", description: "We identify organizations actively researching certification requirements and compliance standards, reaching them with targeted messaging at the perfect moment in their decision journey." } },
    { title: "Explaining complex accreditation processes", solution: { title: "Educational Content Strategy", description: "We create clear, compelling content that demystifies your certification process, builds trust, and positions your organization as the authoritative choice for standards compliance." } },
    { title: "Competing with established certification bodies", solution: { title: "Differentiation Marketing", description: "We highlight your unique value—faster timelines, better support, industry specialization—helping you compete effectively with larger, established accreditation organizations." } },
    { title: "Building trust in a credibility-focused market", solution: { title: "Authority & Social Proof", description: "We develop case studies, success stories, and testimonial campaigns that demonstrate your track record and build the trust essential for organizations making compliance decisions." } },
    { title: "Converting inquiries to certification engagements", solution: { title: "Consultation Optimization", description: "We design seamless intake funnels with qualification questions, automated follow-ups, and nurture sequences that convert initial inquiries into signed certification agreements." } },
];

const pipelineStages = [
    { label: "Visibility", value: "8,000+", sublabel: "monthly certification searches", isPrimary: true },
    { label: "Website Visits", value: "1,800+", sublabel: "qualified visitors", isPrimary: false },
    { label: "Inquiries", value: "150+", sublabel: "certification inquiries", isPrimary: false },
    { label: "Clients", value: "25+", sublabel: "new certifications/month", isPrimary: false },
];

const journeySteps = [
    { title: "Authority building", description: "We establish your organization as the trusted authority in your certification domain through SEO-optimized content, thought leadership, and strategic industry presence." },
    { title: "Lead qualification", description: "We create targeted landing pages and qualification forms that identify serious certification candidates and filter out unqualified inquiries before they reach your team." },
    { title: "Engagement conversion", description: "We nurture prospects through the decision process with educational sequences, consultation scheduling, and follow-up automation that drives certification commitments." },
];

const processSteps = [
    {
        icon: Search,
        step: "01",
        title: "SEO & Content",
        subtitle: "Search Authority",
        items: ["Certification keyword targeting", "Educational content creation", "FAQ & resource optimization", "Industry-specific landing pages"],
    },
    {
        icon: Globe,
        step: "02",
        title: "Programmatic SEO",
        subtitle: "Scalable Visibility",
        items: ["Standard-specific pages at scale", "Industry vertical landing pages", "Regional certification guides", "Automated content optimization"],
    },
    {
        icon: BarChart3,
        step: "03",
        title: "Paid Advertising",
        subtitle: "Targeted Campaigns",
        items: ["LinkedIn for decision-makers", "Google Ads for certification searches", "Industry publication advertising", "Retargeting for consultations"],
    },
    {
        icon: ClipboardCheck,
        step: "04",
        title: "Lead Nurturing",
        subtitle: "Conversion Optimization",
        items: ["Educational email sequences", "Webinar funnels", "Consultation scheduling", "CRM integration & tracking"],
    },
    {
        icon: Award,
        step: "05",
        title: "Authority Building",
        subtitle: "Trust & Credibility",
        items: ["Case study development", "Success story campaigns", "Industry partnership content", "Speaking & PR opportunities"],
    },
];

const valueProps = [
    { icon: Shield, title: "Trust-First Messaging", desc: "In accreditation, credibility is everything. We craft messaging that builds confidence and positions you as the authoritative certification choice." },
    { icon: Target, title: "Decision-Stage Targeting", desc: "We reach organizations actively researching certification options—not just awareness, but prospects ready to begin the accreditation process." },
    { icon: FileCheck, title: "Complex Process Clarity", desc: "We translate complex certification requirements into clear, compelling content that guides prospects through their decision journey." },
    { icon: TrendingUp, title: "Pipeline Predictability", desc: "We build systematic lead generation that delivers consistent certification inquiries, making your growth predictable and scalable." },
];

const segments = [
    "ISO Certification", "Healthcare Accreditation", "Educational Accreditation", "Professional Certification",
    "Quality Standards", "Environmental Certification", "Safety Accreditation", "Industry Compliance",
    "Management Systems", "Laboratory Accreditation", "Product Certification", "Training Accreditation",
];

const stats = [
    { value: "312%", label: "Avg. Organic Traffic Increase" },
    { value: "4.9★", label: "Average Client Rating" },
    { value: "58%", label: "Higher Inquiry Quality" },
    { value: "3.2x", label: "Certification Conversions" },
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
                            Marketing for Accreditation Bodies
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Grow Your <span className="gradient-gold-text">Certification Business</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Attract organizations seeking certification, build trust through authority, and convert inquiries into accreditation engagements with systematic marketing.
                        </p>
                        <BookingButton
                            text="Get More Certifications"
                            variant="primary"
                            size="lg"
                            source="industry-accreditation-hero"
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <BadgeCheck className="w-8 h-8 text-[#AD8253]" />
                            <Award className="w-8 h-8 text-[#AD8253]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">The Certification Search Journey</h3>
                        <p className="text-[#a1a1a1] mb-6 leading-relaxed">
                            Organizations research extensively before choosing a certification body. Your visibility and credibility at each stage determines whether they choose you or a competitor.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center">
                                    <Search className="w-5 h-5 text-[#AD8253]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">78%</p>
                                    <p className="text-sm text-[#6b6b6b]">start with search</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center">
                                    <FileCheck className="w-5 h-5 text-[#AD8253]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">5+</p>
                                    <p className="text-sm text-[#6b6b6b]">bodies compared</p>
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
                        Why <span className="gradient-gold-text">Certification Bodies</span> Choose Us
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg">
                        We understand that accreditation marketing requires building trust and demonstrating expertise. Our strategies are designed for complex, high-trust decision processes.
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
                        Solutions for <span className="gradient-gold-text">Accreditation Growth Challenges</span>
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
                        <BookingButton
                            text="Schedule a Call"
                            variant="primary"
                            className="bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full"
                            source="industry-accreditation-challenges"
                        />
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
                        Your Certification Pipeline <span className="gradient-gold-text">With ClickSalesMedia</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto">Focus on delivering certifications while we fill your pipeline with qualified organizations.</p>
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
                                <span className="text-white font-medium">Deliver certifications & maintain standards</span>
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-[#6b6b6b] text-sm mb-8 text-center">* Average monthly outcomes for established organizations.</p>
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
                        Our Proven Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        How We <span className="gradient-gold-text">Grow Accreditation Bodies</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg">
                        A comprehensive approach that builds trust, generates qualified inquiries, and converts them into certification engagements.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
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
                        Results That <span className="gradient-gold-text">Drive Certifications</span>
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
                        <span className="gradient-gold-text">We serve accreditation organizations</span> across all domains
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl leading-relaxed">
                        From ISO certification bodies to industry-specific accreditation agencies, we help standards organizations grow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
                            Ready to Grow Your Certification Business?
                        </h2>
                        <p className="text-[#a1a1a1] mb-8 max-w-2xl mx-auto">
                            Let's discuss how our accreditation marketing expertise can help you attract more organizations and deliver more certifications.
                        </p>
                        <div className="flex justify-center">
                            <BookingButton
                                text="Get Your Free Growth Audit"
                                variant="primary"
                                size="lg"
                                source="industry-accreditation-cta"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function AccreditationIndustryPage() {
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
