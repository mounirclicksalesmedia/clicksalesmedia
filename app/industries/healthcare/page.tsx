"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { BookingButton } from "@/components/booking/BookingButton";
import {
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    Star,
    Check,
    Target,
    MessageSquare,
    HeartPulse,
    Stethoscope,
    Users,
    TrendingUp,
    Shield,
    Clock,
    CheckCircle2,
} from "lucide-react";

// Healthcare-specific data
const clientLogos = ["MedTech Pro", "HealthFirst", "CareConnect", "VitalCare", "MedSync", "HealthBridge"];

const challenges = [
    {
        title: "Difficulty reaching decision-makers in healthcare organizations",
        solution: {
            title: "Targeted healthcare decision-maker outreach",
            description:
                "We leverage our extensive healthcare contact database and multi-channel approach to connect you directly with C-suite executives, department heads, and procurement managers at hospitals, clinics, and healthcare networks.",
        },
    },
    {
        title: "Navigating complex healthcare regulations in marketing",
        solution: {
            title: "HIPAA-compliant marketing strategies",
            description:
                "Our healthcare marketing experts ensure all campaigns comply with HIPAA, FDA regulations, and industry-specific guidelines while still delivering compelling messaging that converts.",
        },
    },
    {
        title: "Long sales cycles and multiple stakeholders",
        solution: {
            title: "Multi-stakeholder nurturing campaigns",
            description:
                "We design nurture sequences that address concerns of clinical staff, administrators, IT teams, and financial decision-makers simultaneously, accelerating your sales cycle.",
        },
    },
    {
        title: "Building trust in a highly regulated industry",
        solution: {
            title: "Authority-building content strategy",
            description:
                "We position your brand as a trusted healthcare partner through thought leadership, case studies, and clinical validation content that builds credibility.",
        },
    },
    {
        title: "Competing with established healthcare vendors",
        solution: {
            title: "Differentiated value proposition",
            description:
                "We help you identify and communicate your unique competitive advantages, whether it's innovation, cost savings, patient outcomes, or implementation speed.",
        },
    },
];

const pipelineStages = [
    { label: "Prospects", value: "Up to 15,000*", sublabel: "healthcare decision-makers", isPrimary: true },
    { label: "MQLs", value: "Up to 7,500*", sublabel: "marketing-qualified leads", isPrimary: false },
    { label: "SQLs", value: "150*", sublabel: "sales-qualified meetings", isPrimary: false },
    { label: "Deals", value: "8-20*", sublabel: "closed contracts", isPrimary: false },
];

const journeySteps = [
    {
        title: "Healthcare-targeted outreach",
        description:
            "We develop comprehensive outreach plans combining email, LinkedIn, and direct calling to reach healthcare professionals, administrators, and executives at the right time.",
    },
    {
        title: "Clinical value activation",
        description:
            "We engage prospects with personalized messaging that addresses their specific challenges—from patient outcomes to operational efficiency to cost reduction.",
    },
    {
        title: "Stakeholder alignment",
        description:
            "We nurture multiple decision-makers within each account through strategic follow-ups and coordinate touchpoints to drive consensus and accelerate purchasing decisions.",
    },
];

const beforeSteps = [
    ["ICP & TAM analysis", "Lead segmentation", "Compliance review", "Database building"],
    ["Multi-stakeholder mapping", "Value prop creation", "Campaign setup", "Tracking implementation"],
    ["Response handling", "No-show management", "Appointment booking", "Pitching", "Contract closing"],
];

const healthcareSegments = [
    "Hospitals & Health Systems",
    "Ambulatory Surgery Centers",
    "Telehealth & Digital Health",
    "Medical Device Companies",
    "Healthcare IT & SaaS",
    "Pharmaceutical Companies",
    "Clinical Research Organizations",
    "Home Health & Hospice",
    "Dental & Specialty Practices",
    "Health Insurance & Payers",
    "Medical Staffing Agencies",
];

const stats = [
    { value: "500+", label: "Healthcare Clients" },
    { value: "$150M+", label: "Pipeline Generated" },
    { value: "15x", label: "Average ROI" },
    { value: "45%", label: "Faster Sales Cycles" },
];

// Hero Section
function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#AD8253]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c3a177]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(173, 130, 83, 1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(173, 130, 83, 1) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative z-10 container mx-auto px-6">
                {/* Back link */}
                <Link
                    href="/industries"
                    className="inline-flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#AD8253] mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    All industries
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-6">
                            B2B Lead Generation for Healthcare
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Accelerate Growth in{" "}
                            <span className="gradient-gold-text">Healthcare</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Connect with hospitals, clinics, health systems, and healthcare organizations using our
                            proven, compliance-conscious strategies that convert prospects into long-term partners.
                        </p>
                        <BookingButton
                            text="Book a Consultation"
                            variant="primary"
                            size="lg"
                            source="industry-healthcare-hero"
                        />
                    </motion.div>

                    {/* Right - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/industries/healthcarehero.png"
                                alt="Healthcare industry marketing"
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Logo Bar
function LogoBar() {
    return (
        <section className="py-12 border-t border-b border-white/5">
            <div className="container mx-auto px-6">
                <p className="text-center text-[#6b6b6b] mb-8">Trusted by leading healthcare organizations</p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {clientLogos.map((logo) => (
                        <span key={logo} className="text-[#6b6b6b] font-semibold text-lg hover:text-[#AD8253] transition-colors">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Challenges Section
function ChallengesSection() {
    const [activeChallenge, setActiveChallenge] = useState(0);

    return (
        <section className="py-20 bg-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Proven Solutions for Your{" "}
                        <span className="gradient-gold-text">Healthcare Marketing Challenges</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left - Challenge tabs */}
                    <div className="space-y-2">
                        {challenges.map((challenge, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveChallenge(index)}
                                className={`w-full text-left px-6 py-4 rounded-xl transition-all flex items-center justify-between ${activeChallenge === index
                                    ? "bg-[#1a1a1a] border border-[#AD8253]/30"
                                    : "bg-[#1a1a1a]/50 border border-transparent hover:border-white/10"
                                    }`}
                            >
                                <span
                                    className={`font-medium ${activeChallenge === index ? "text-[#AD8253]" : "text-[#a1a1a1]"
                                        }`}
                                >
                                    {challenge.title}
                                </span>
                                {activeChallenge === index && (
                                    <ArrowRight className="w-5 h-5 text-[#AD8253]" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right - Solution content */}
                    <motion.div
                        key={activeChallenge}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="glass-card p-8"
                    >
                        <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                            <Check className="w-7 h-7 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            {challenges[activeChallenge].solution.title}
                        </h3>
                        <p className="text-[#a1a1a1] mb-8 leading-relaxed">
                            {challenges[activeChallenge].solution.description}
                        </p>
                        <BookingButton
                            text="Schedule a Call"
                            variant="primary"
                            className="bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full"
                            source="industry-healthcare-challenges"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Pipeline Section
function PipelineSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Your Healthcare Pipeline{" "}
                        <span className="gradient-gold-text">With ClickSalesMedia</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto">
                        Focus on delivering exceptional patient care while we fill your sales pipeline with qualified healthcare leads.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Journey accordion */}
                    <div>
                        <div className="glass-card p-6 mb-4">
                            <p className="text-[#6b6b6b] text-sm mb-4">We manage your entire lead journey</p>
                            <div className="space-y-2">
                                {journeySteps.map((step, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveStep(index)}
                                        className={`w-full text-left rounded-xl transition-all ${activeStep === index
                                            ? "bg-[#272727] p-4"
                                            : "bg-transparent hover:bg-[#272727]/50 p-4"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span
                                                className={`font-medium ${activeStep === index ? "text-[#AD8253]" : "text-white"
                                                    }`}
                                            >
                                                {step.title}
                                            </span>
                                            <ChevronRight
                                                className={`w-5 h-5 text-[#AD8253] transition-transform ${activeStep === index ? "rotate-90" : ""
                                                    }`}
                                            />
                                        </div>
                                        {activeStep === index && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="text-[#a1a1a1] text-sm mt-3"
                                            >
                                                {step.description}
                                            </motion.p>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card p-6">
                            <p className="text-[#6b6b6b] text-sm mb-4">Your role in the process</p>
                            <div className="bg-[#272727] rounded-xl p-4 flex items-center justify-between">
                                <span className="text-white font-medium">Close deals & serve patients</span>
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            </div>
                        </div>
                    </div>

                    {/* Right - Funnel visualization */}
                    <div className="flex flex-col items-center">
                        <p className="text-[#6b6b6b] text-sm mb-8 text-center">
                            * Average yearly outcomes. Results depend on multiple factors.
                        </p>

                        <div className="w-full max-w-md space-y-4">
                            {pipelineStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div
                                        className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-[#272727] text-white border border-white/10"
                                    >
                                        {stage.label}
                                    </div>
                                    <div
                                        className={`rounded-xl p-6 text-center ${stage.isPrimary
                                            ? "bg-gradient-to-r from-[#AD8253] to-[#c3a177]"
                                            : "bg-[#272727] border border-white/10"
                                            }`}
                                        style={{
                                            width: `${100 - index * 15}%`,
                                            margin: "0 auto",
                                        }}
                                    >
                                        <p className={`text-xl font-bold ${stage.isPrimary ? "text-[#1a1a1a]" : "text-white"}`}>
                                            {stage.value}
                                        </p>
                                        <p className={`text-sm ${stage.isPrimary ? "text-[#1a1a1a]/70" : "text-[#a1a1a1]"}`}>
                                            {stage.sublabel}
                                        </p>
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

// Process Section
function ProcessSection() {
    const processSteps = [
        {
            step: "01",
            title: "Market Intelligence",
            description: "We map your Total Addressable Market (TAM) within healthcare, identifying key decision-makers, stakeholders, and organizational buying patterns.",
            items: ["ICP & TAM analysis", "Lead segmentation", "Compliance review", "Database building"],
            icon: Target,
        },
        {
            step: "02",
            title: "Strategic Activation",
            description: "Multi-channel campaign architecture designed for healthcare's unique buying cycles, with full HIPAA-compliant messaging frameworks.",
            items: ["Multi-stakeholder mapping", "Value prop creation", "Campaign setup", "Tracking implementation"],
            icon: MessageSquare,
        },
        {
            step: "03",
            title: "Revenue Handoff",
            description: "Qualified meetings delivered directly to your calendar. You focus on closing deals and delivering patient outcomes.",
            items: ["Response handling", "No-show management", "Appointment booking"],
            icon: TrendingUp,
        },
    ];

    return (
        <section className="py-24 bg-[#272727] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#AD8253]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#AD8253]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-4">
                        Our Methodology
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Healthcare Lead Generation{" "}
                        <span className="gradient-gold-text">Process</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto text-lg">
                        A systematic approach to building predictable pipeline in the healthcare industry.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AD8253]/30 to-transparent hidden lg:block" />

                    <div className="grid lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative"
                            >
                                {/* Step Card */}
                                <div className="glass-card p-8 h-full group hover:border-[#AD8253]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(173,130,83,0.1)]">
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-4 left-8">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center text-[#1a1a1a] font-bold text-sm shadow-lg shadow-[#AD8253]/20">
                                            {step.step}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-[#AD8253]/10 border border-[#AD8253]/20 flex items-center justify-center mb-6 group-hover:bg-[#AD8253]/20 transition-colors">
                                        <step.icon className="w-7 h-7 text-[#AD8253]" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#AD8253] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#a1a1a1] mb-6 leading-relaxed text-sm">
                                        {step.description}
                                    </p>

                                    {/* Items */}
                                    <div className="space-y-2">
                                        {step.items.map((item, itemIndex) => (
                                            <motion.div
                                                key={itemIndex}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#AD8253]" />
                                                <span className="text-sm text-[#6b6b6b] group-hover:text-[#a1a1a1] transition-colors">
                                                    {item}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow (hidden on last item and mobile) */}
                                {index < 2 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.3 }}
                                            className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#AD8253]/30 flex items-center justify-center"
                                        >
                                            <ChevronRight className="w-4 h-4 text-[#AD8253]" />
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#1a1a1a] border border-[#AD8253]/20">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-[#a1a1a1]">You focus on:</span>
                        </div>
                        <span className="text-white font-semibold">Closing Deals & Serving Patients</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Healthcare Segments Section
function SegmentsSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        <span className="gradient-gold-text">We serve healthcare organizations</span>{" "}
                        of all sizes and specializations
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl leading-relaxed">
                        From hospitals and health systems to innovative healthtech startups, we help healthcare
                        organizations generate qualified leads and grow their business.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {healthcareSegments.map((segment, index) => (
                        <motion.div
                            key={segment}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card px-6 py-4 hover:border-[#AD8253]/30 transition-colors"
                        >
                            <span className="text-white">{segment}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Stats Section
function StatsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#272727] to-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-gold-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[#6b6b6b]">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// CTA Section
function CTASection() {
    return (
        <section className="py-20 bg-[#272727]">
            <div className="container mx-auto px-6">
                <div className="glass-card p-12 text-center bg-gradient-to-br from-[#AD8253]/10 to-transparent border-[#AD8253]/20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Grow Your Healthcare Business?
                        </h2>
                        <p className="text-[#a1a1a1] mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help you reach more healthcare decision-makers and close more deals.
                        </p>
                        <div className="flex justify-center">
                            <BookingButton
                                text="Schedule a Consultation"
                                variant="primary"
                                size="lg"
                                source="industry-healthcare-cta"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Main Page
export default function HealthcareIndustryPage() {
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

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />
            <HeroSection />
            <ChallengesSection />
            <PipelineSection />
            <ProcessSection />
            <SegmentsSection />
            <StatsSection />
            <CTASection />
            <Footer />
        </main>
    );
}
