"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import {
    ArrowLeft, ArrowRight, ChevronRight, Check, Target, TrendingUp,
    Anchor, Search, BarChart3, Star, Shield, Users, Sparkles, CheckCircle2,
    Camera, Globe, Compass, Ship, Waves, Crown,
} from "lucide-react";

// ============ DATA ============

const challenges = [
    { title: "Reaching ultra-high-net-worth yacht buyers", solution: { title: "Elite Audience Targeting", description: "We access exclusive networks and platforms where UHNW individuals research investments. Our campaigns reach verified yacht buyers, not aspirational browsers." } },
    { title: "Showcasing vessels with the prestige they deserve", solution: { title: "Luxury Visual Storytelling", description: "We create cinematic content experiences—virtual tours, drone footage, and lifestyle imagery that captures the essence of ownership and inspires action." } },
    { title: "Competing with established luxury brokerages", solution: { title: "Digital Presence Excellence", description: "We build commanding digital presences that rival legacy brokerages, establishing your brand as synonymous with expertise, discretion, and exceptional service." } },
    { title: "Converting inquiries across global time zones", solution: { title: "24/7 Concierge Experience", description: "We design seamless inquiry systems with automated yet personalized responses, ensuring every potential buyer receives white-glove treatment immediately." } },
    { title: "Building trust for high-value transactions", solution: { title: "Authority & Social Proof", description: "We develop compelling case studies, client testimonials, and industry partnerships that build the credibility required for multi-million dollar decisions." } },
];

const pipelineStages = [
    { label: "Visibility", value: "500K+", sublabel: "luxury impressions", isPrimary: true },
    { label: "Engagement", value: "15,000+", sublabel: "qualified views", isPrimary: false },
    { label: "Inquiries", value: "200+", sublabel: "serious inquiries", isPrimary: false },
    { label: "Sales", value: "8-15", sublabel: "vessels sold/year", isPrimary: false },
];

const journeySteps = [
    { title: "Prestige positioning", description: "We establish your brand in the luxury ecosystem through premium placements, partnerships with yacht shows, and visibility among the world's most discerning buyers." },
    { title: "Experience creation", description: "We craft immersive digital experiences—from virtual sea trials to lifestyle content—that allow prospects to envision ownership before ever stepping aboard." },
    { title: "Concierge conversion", description: "We design frictionless inquiry-to-showing journeys with personalized follow-ups, private viewing coordination, and nurture sequences befitting luxury clientele." },
];

const processSteps = [
    {
        icon: Crown,
        step: "01",
        title: "Luxury Positioning",
        subtitle: "Brand Excellence",
        items: ["Premium brand identity", "Luxury market positioning", "Competitor differentiation", "Heritage storytelling"],
    },
    {
        icon: Camera,
        step: "02",
        title: "Visual Excellence",
        subtitle: "Cinematic Content",
        items: ["Professional yacht photography", "Aerial drone footage", "Virtual tours & 360°", "Lifestyle video production"],
    },
    {
        icon: Globe,
        step: "03",
        title: "Global Reach",
        subtitle: "International Visibility",
        items: ["Multi-language campaigns", "Yacht show presence", "Luxury publication placements", "International SEO"],
    },
    {
        icon: Target,
        step: "04",
        title: "Elite Targeting",
        subtitle: "UHNW Acquisition",
        items: ["Private network access", "Programmatic luxury targeting", "LinkedIn Ultra campaigns", "Retargeting exclusives"],
    },
    {
        icon: Star,
        step: "05",
        title: "Concierge Experience",
        subtitle: "White-Glove Service",
        items: ["24/7 inquiry management", "Private viewing coordination", "Personalized follow-ups", "CRM & pipeline tracking"],
    },
];

const valueProps = [
    { icon: Crown, title: "Luxury-Native Expertise", desc: "We understand that yacht marketing isn't just marketing—it's about prestige, discretion, and the art of selling dreams to those who can afford them." },
    { icon: Shield, title: "Discretion Guaranteed", desc: "We respect the privacy of both sellers and buyers. Our campaigns maintain the exclusivity and confidentiality that luxury clients expect." },
    { icon: Compass, title: "Global Network", desc: "From Monaco to Miami, Sydney to Singapore—we have the expertise and partnerships to reach yacht buyers wherever they are in the world." },
    { icon: TrendingUp, title: "Transaction-Focused", desc: "We measure success in vessels sold, not vanity metrics. Every campaign is designed to drive serious inquiries from qualified buyers." },
];

const segments = [
    "Superyacht Brokerages", "Yacht Builders", "Charter Companies", "Marinas & Harbors",
    "Marine Equipment", "Yacht Management", "Crew Agencies", "Refit & Repair",
    "Marine Insurance", "Yacht Transport", "Sailing Schools", "Luxury Charters",
];

const stats = [
    { value: "$127M", label: "Yacht Sales Facilitated" },
    { value: "340%", label: "Inquiry Increase" },
    { value: "12", label: "Vessels Sold (Avg/Year)" },
    { value: "5★", label: "Client Rating" },
];

// ============ COMPONENTS ============

function HeroSection() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden">
            {/* Premium gradient background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a]" />
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#AD8253]/8 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#c3a177]/6 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>
            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `linear-gradient(rgba(173,130,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(173,130,83,1) 1px, transparent 1px)`, backgroundSize: "100px 100px" }} />

            <div className="relative z-10 container mx-auto px-6">
                <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#AD8253] mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />All industries
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#AD8253]/20 to-[#c3a177]/10 border border-[#AD8253]/30 text-[#c3a177] text-sm font-medium mb-8">
                            <Anchor className="w-4 h-4" />
                            Luxury Marine Marketing
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Where <span className="gradient-gold-text italic">Elegance</span> Meets the <span className="gradient-gold-text italic">Open Sea</span>
                        </h1>
                        <p className="text-xl text-[#a1a1a1] mb-10 leading-relaxed font-light">
                            Premium marketing for the world's finest yachts and marine services. We connect exceptional vessels with extraordinary buyers.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_60px_rgba(173,130,83,0.4)] transition-all duration-500">
                                Begin Your Journey
                                <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="relative">
                        <div className="glass-card p-10 bg-gradient-to-br from-white/[0.03] to-transparent border-white/10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center">
                                    <Ship className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">The Luxury Buyer</h3>
                                    <p className="text-[#6b6b6b]">A different journey entirely</p>
                                </div>
                            </div>
                            <p className="text-[#a1a1a1] mb-8 leading-relaxed text-lg font-light">
                                Ultra-high-net-worth individuals don't browse—they discover. Their yacht purchase journey is curated, discreet, and demands marketing that matches their expectations.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                                <div className="text-center">
                                    <p className="text-3xl font-bold gradient-gold-text mb-1">€5.2M</p>
                                    <p className="text-sm text-[#6b6b6b]">Avg. vessel value</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold gradient-gold-text mb-1">14 mo</p>
                                    <p className="text-sm text-[#6b6b6b]">Avg. decision time</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#AD8253]/20 rounded-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#AD8253]/10 rounded-xl blur-sm" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function PhilosophySection() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-6">
                        <Waves className="w-4 h-4" />
                        Our Philosophy
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Why the <span className="gradient-gold-text italic">World's Finest</span> Choose Us
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-xl font-light leading-relaxed">
                        Luxury marine marketing requires an understanding of exclusivity, prestige, and the art of connecting exceptional products with exceptional people.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {valueProps.map((prop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group"
                        >
                            <div className="glass-card p-8 h-full bg-gradient-to-br from-white/[0.02] to-transparent hover:border-[#AD8253]/40 transition-all duration-700 hover:shadow-[0_0_40px_rgba(173,130,83,0.1)]">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#AD8253]/20 to-[#AD8253]/5 flex items-center justify-center mb-6 group-hover:from-[#AD8253]/30 group-hover:to-[#AD8253]/10 transition-all duration-500">
                                    <prop.icon className="w-7 h-7 text-[#AD8253]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{prop.title}</h3>
                                <p className="text-[#a1a1a1] leading-relaxed font-light">{prop.desc}</p>
                            </div>
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
        <section className="py-24 bg-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Solutions for <span className="gradient-gold-text">Luxury Marine</span> Challenges
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="space-y-3">
                        {challenges.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-full text-left px-8 py-5 rounded-2xl transition-all duration-500 flex items-center justify-between ${active === i ? "bg-gradient-to-r from-[#1a1a1a] to-[#1f1f1f] border border-[#AD8253]/40 shadow-[0_0_30px_rgba(173,130,83,0.1)]" : "bg-[#1a1a1a]/50 border border-transparent hover:border-white/10"}`}
                            >
                                <span className={`font-medium text-lg ${active === i ? "text-[#c3a177]" : "text-[#a1a1a1]"}`}>{c.title}</span>
                                {active === i && <ArrowRight className="w-5 h-5 text-[#AD8253]" />}
                            </button>
                        ))}
                    </div>

                    <motion.div key={active} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="glass-card p-10 bg-gradient-to-br from-white/[0.02] to-transparent">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center mb-8">
                            <Check className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{challenges[active].solution.title}</h3>
                        <p className="text-[#a1a1a1] mb-10 leading-relaxed text-lg font-light">{challenges[active].solution.description}</p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(173,130,83,0.3)] transition-all duration-500">
                            Discuss Your Needs
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
        <section className="py-24 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Your Sales Pipeline <span className="gradient-gold-text">Elevated</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto text-xl font-light">Focus on showcasing vessels while we deliver qualified buyers to your dock.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="glass-card p-8 mb-6 bg-gradient-to-br from-white/[0.02] to-transparent">
                            <p className="text-[#6b6b6b] text-sm mb-6 uppercase tracking-wider">The Complete Journey</p>
                            <div className="space-y-3">
                                {journeySteps.map((step, index) => (
                                    <button key={index} onClick={() => setActiveStep(index)} className={`w-full text-left rounded-xl transition-all duration-500 ${activeStep === index ? "bg-[#272727] p-5" : "bg-transparent hover:bg-[#272727]/50 p-5"}`}>
                                        <div className="flex items-center justify-between">
                                            <span className={`font-medium text-lg ${activeStep === index ? "text-[#c3a177]" : "text-white"}`}>{step.title}</span>
                                            <ChevronRight className={`w-5 h-5 text-[#AD8253] transition-transform duration-300 ${activeStep === index ? "rotate-90" : ""}`} />
                                        </div>
                                        {activeStep === index && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-[#a1a1a1] mt-4 font-light leading-relaxed">{step.description}</motion.p>}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card p-6 bg-gradient-to-br from-white/[0.02] to-transparent">
                            <p className="text-[#6b6b6b] text-sm mb-4 uppercase tracking-wider">Your Focus</p>
                            <div className="bg-[#272727] rounded-xl p-5 flex items-center justify-between">
                                <span className="text-white font-medium text-lg">Close sales & deliver excellence</span>
                                <CheckCircle2 className="w-6 h-6 text-green-400" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-[#6b6b6b] text-sm mb-10 text-center uppercase tracking-wider">* Annual outcomes for established brokerages</p>
                        <div className="w-full max-w-md space-y-5">
                            {pipelineStages.map((stage, index) => (
                                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-medium bg-[#272727] text-white border border-white/10 uppercase tracking-wider">{stage.label}</div>
                                    <div className={`rounded-2xl p-8 text-center ${stage.isPrimary ? "bg-gradient-to-r from-[#AD8253] to-[#c3a177] shadow-[0_0_40px_rgba(173,130,83,0.3)]" : "bg-[#272727] border border-white/10"}`} style={{ width: `${100 - index * 12}%`, margin: "0 auto" }}>
                                        <p className={`text-2xl font-bold ${stage.isPrimary ? "text-[#1a1a1a]" : "text-white"}`}>{stage.value}</p>
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
        <section className="py-28 bg-gradient-to-b from-[#272727] to-[#1a1a1a] relative overflow-hidden">
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#AD8253]/5 rounded-full blur-[150px]" />
            <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-6">
                        <Compass className="w-4 h-4" />
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        The <span className="gradient-gold-text italic">Art</span> of Luxury Marine Marketing
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-xl font-light leading-relaxed">
                        A refined approach that honors the prestige of exceptional vessels while delivering measurable results.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#AD8253]/30 to-transparent -translate-y-1/2 z-0" />

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative z-10"
                        >
                            <div className="glass-card p-7 h-full group hover:border-[#AD8253]/40 transition-all duration-700 bg-gradient-to-br from-white/[0.02] to-transparent hover:shadow-[0_0_40px_rgba(173,130,83,0.1)]">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-[#AD8253] to-[#c3a177] bg-clip-text text-transparent">{step.step}</span>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#AD8253]/20 to-[#AD8253]/5 flex items-center justify-center group-hover:from-[#AD8253]/30 transition-all duration-500">
                                        <step.icon className="w-6 h-6 text-[#AD8253]" />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                <p className="text-[#c3a177] text-sm mb-5">{step.subtitle}</p>

                                <ul className="space-y-2.5">
                                    {step.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + i * 0.1 }}
                                            className="flex items-start gap-2.5 text-sm text-[#a1a1a1]"
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
        <section className="py-24 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Results That <span className="gradient-gold-text italic">Speak</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="text-5xl md:text-6xl font-bold gradient-gold-text mb-3">{stat.value}</div>
                            <div className="text-sm text-[#6b6b6b] uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SegmentsSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Serving the <span className="gradient-gold-text italic">Entire Marine Ecosystem</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl text-xl font-light leading-relaxed">
                        From superyacht brokerages to boutique marinas, we help marine businesses attract discerning clientele.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {segments.map((segment, index) => (
                        <motion.div
                            key={segment}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card px-5 py-4 text-center hover:border-[#AD8253]/40 transition-all duration-500 bg-gradient-to-br from-white/[0.02] to-transparent"
                        >
                            <span className="text-white text-sm font-light">{segment}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-28 bg-[#272727]">
            <div className="container mx-auto px-6">
                <div className="glass-card p-16 text-center bg-gradient-to-br from-[#AD8253]/10 via-transparent to-transparent border-[#AD8253]/30 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#AD8253]/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c3a177]/5 rounded-full blur-[80px]" />

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
                        <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center shadow-[0_0_60px_rgba(173,130,83,0.3)]">
                            <Anchor className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Set Sail?
                        </h2>
                        <p className="text-[#a1a1a1] mb-10 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                            Let's discuss how our luxury marine expertise can connect your vessels with the world's most discerning buyers.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_60px_rgba(173,130,83,0.4)] transition-all duration-500 text-lg">
                            Begin Your Journey
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function LuxuryMarineIndustryPage() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
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
