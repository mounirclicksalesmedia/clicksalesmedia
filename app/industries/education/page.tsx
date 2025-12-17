"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import {
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    Star,
    Check,
    Target,
    MessageSquare,
    GraduationCap,
    BookOpen,
    Users,
    TrendingUp,
    Globe,
    Award,
    CheckCircle2,
} from "lucide-react";

// Education-specific data
const clientLogos = ["EduTech Pro", "LearnHub", "AcademyX", "StudyBridge", "EduConnect", "SkillPath"];

const challenges = [
    {
        title: "Attracting qualified student leads in a competitive market",
        solution: {
            title: "Targeted student acquisition campaigns",
            description:
                "We leverage data-driven targeting to reach prospective students at key decision points in their educational journey, using platforms they actively engage with and messaging that resonates with their aspirations.",
        },
    },
    {
        title: "Long enrollment cycles and multiple decision-makers",
        solution: {
            title: "Multi-stakeholder nurture sequences",
            description:
                "Our campaigns address both students and parents/guardians with tailored messaging, providing the right information at each stage of the enrollment decision process to accelerate conversions.",
        },
    },
    {
        title: "Differentiating from traditional and online competitors",
        solution: {
            title: "Unique value proposition development",
            description:
                "We help you identify and communicate your unique educational advantages—whether it's outcomes, methodology, flexibility, or career services—to stand out in a crowded market.",
        },
    },
    {
        title: "Seasonal enrollment fluctuations",
        solution: {
            title: "Year-round demand generation strategy",
            description:
                "We implement evergreen and seasonal campaigns working in tandem to maintain consistent lead flow while capitalizing on peak enrollment periods.",
        },
    },
    {
        title: "Proving ROI on marketing investments",
        solution: {
            title: "Full-funnel attribution tracking",
            description:
                "Our advanced tracking connects every touchpoint from first click to enrolled student, giving you clear visibility into which channels and campaigns drive actual enrollments.",
        },
    },
];

const pipelineStages = [
    { label: "Prospects", value: "Up to 20,000*", sublabel: "prospective students", isPrimary: true },
    { label: "Inquiries", value: "Up to 10,000*", sublabel: "program inquiries", isPrimary: false },
    { label: "Applications", value: "500*", sublabel: "qualified applications", isPrimary: false },
    { label: "Enrollments", value: "50-150*", sublabel: "enrolled students", isPrimary: false },
];

const journeySteps = [
    {
        title: "Multi-channel awareness",
        description:
            "We create compelling campaigns across search, social, display, and content channels to reach prospective students where they're actively researching educational options.",
    },
    {
        title: "Engagement & nurturing",
        description:
            "We engage prospects with valuable content—virtual tours, program guides, success stories—and nurture them through personalized email sequences and retargeting.",
    },
    {
        title: "Application conversion",
        description:
            "We optimize every step of the application journey, from landing pages to form completion, ensuring maximum conversion from interested prospects to enrolled students.",
    },
];

const beforeSteps = [
    ["Market research", "Audience targeting", "Content creation", "Campaign setup"],
    ["Landing page optimization", "A/B testing", "Lead scoring", "CRM integration"],
    ["Application follow-up", "Enrollment support", "Student onboarding", "Retention programs"],
];

const educationSegments = [
    "Universities & Colleges",
    "Online Learning Platforms",
    "K-12 Private Schools",
    "Vocational Training Centers",
    "Corporate Training Providers",
    "Test Prep Companies",
    "Language Schools",
    "Coding Bootcamps",
    "Professional Certification",
    "EdTech SaaS Companies",
    "Executive Education Programs",
];

const stats = [
    { value: "300+", label: "Education Clients" },
    { value: "2M+", label: "Students Reached" },
    { value: "18x", label: "Average ROI" },
    { value: "35%", label: "Lower Cost Per Enrollment" },
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
                            B2B Lead Generation for Education
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Scale Enrollments in{" "}
                            <span className="gradient-gold-text">Education</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Attract qualified students to your EdTech platform, university, or training institute
                            using our proven enrollment marketing strategies that convert prospects into enrolled learners.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(173,130,83,0.4)] transition-all"
                        >
                            Book a Consultation
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Right - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#AD8253]/10">
                            <Image
                                src="/clm.jpg"
                                alt="Education Marketing Success"
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent" />
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
                <p className="text-center text-[#6b6b6b] mb-8">Trusted by leading educational institutions</p>
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
                        <span className="gradient-gold-text">Education Marketing Challenges</span>
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
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_30px_rgba(173,130,83,0.3)] transition-all"
                        >
                            Schedule a Call
                        </Link>
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
                        Your Enrollment Pipeline{" "}
                        <span className="gradient-gold-text">With ClickSalesMedia</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto">
                        Focus on delivering exceptional education while we fill your pipeline with qualified prospective students.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Journey accordion */}
                    <div>
                        <div className="glass-card p-6 mb-4">
                            <p className="text-[#6b6b6b] text-sm mb-4">We manage your entire enrollment funnel</p>
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
                                <span className="text-white font-medium">Enroll students & deliver education</span>
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
            title: "Audience Intelligence",
            description: "We map your Total Addressable Market (TAM) within education, identifying prospective students, parents, and institutional decision-makers.",
            items: ["Market research", "Audience targeting", "Content creation", "Campaign setup"],
            icon: Target,
        },
        {
            step: "02",
            title: "Enrollment Activation",
            description: "Multi-channel campaign architecture designed for education's unique enrollment cycles, with personalized messaging for students and parents.",
            items: ["Landing page optimization", "A/B testing", "Lead scoring", "CRM integration"],
            icon: MessageSquare,
        },
        {
            step: "03",
            title: "Student Handoff",
            description: "Qualified applications delivered directly to your admissions team. You focus on onboarding students and delivering exceptional education.",
            items: ["Application follow-up", "Enrollment support", "Student onboarding"],
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
                        Education Lead Generation{" "}
                        <span className="gradient-gold-text">Process</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto text-lg">
                        A systematic approach to building predictable enrollment pipeline in the education sector.
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
                        <span className="text-white font-semibold">Enrolling Students & Delivering Education</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Education Segments Section
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
                        <span className="gradient-gold-text">We serve educational institutions</span>{" "}
                        of all types and sizes
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl leading-relaxed">
                        From traditional universities to cutting-edge EdTech startups, we help educational
                        organizations attract and enroll the right students.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {educationSegments.map((segment, index) => (
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
                            Ready to Grow Your Student Enrollment?
                        </h2>
                        <p className="text-[#a1a1a1] mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help you attract more qualified students and increase enrollments.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(173,130,83,0.4)] transition-all"
                        >
                            Schedule a Consultation
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Main Page
export default function EducationIndustryPage() {
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
