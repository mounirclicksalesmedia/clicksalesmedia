"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/Cards";
import { GridBackground } from "@/components/ui/Backgrounds";
import {
    Zap,
    Bot,
    MousePointerClick,
    Layers,
    LineChart,
    Wrench,
    ArrowRight
} from "lucide-react";

const services = [
    {
        icon: <Zap className="w-7 h-7" />,
        title: "Alpha Lead Gen 2.0",
        description: "Our proprietary, AI-driven lead generation engine that scrapes, verifies, and engages high-intent prospects at scale to fill your pipeline with qualified meetings, not just busy work.",
        href: "/services/alpha-lead-gen"
    },
    {
        icon: <Bot className="w-7 h-7" />,
        title: "AI Agents & Automation",
        description: "Deploy intelligent digital workers to automate complex sales workflows, customer support, and operational tasks 24/7, reducing overhead while massively scaling output.",
        href: "/services/ai-automation"
    },
    {
        icon: <MousePointerClick className="w-7 h-7" />,
        title: "Landing Page & CRO",
        description: "Turn traffic into revenue with scientific A/B testing and psychology-driven design. We build high-converting landing pages that maximize the value of every single click.",
        href: "/services/landing-page-cro"
    },
    {
        icon: <Layers className="w-7 h-7" />,
        title: "Multi-Channel Acquisition",
        description: "Dominate your market with an omnipresent strategy. We orchestrate synchronized campaigns across LinkedIn, Google, and Meta to capture demand wherever your ideal clients are active.",
        href: "/services/multi-channel-acquisition"
    },
    {
        icon: <LineChart className="w-7 h-7" />,
        title: "Revenue Analytics",
        description: "Eliminate guesswork with server-side tracking and multi-touch attribution. See exactly which channels, ads, and keywords are driving real revenue, not just vanity metrics.",
        href: "/services/revenue-analytics"
    },
    {
        icon: <Wrench className="w-7 h-7" />,
        title: "CRM Architecture",
        description: "Build a sales machine that manages itself. We design and implement robust CRM systems that track every interaction, automate follow-ups, and give you crystal-clear pipeline visibility.",
        href: "/services/crm-architecture"
    },
];

export function Services() {
    return (
        <section id="services" className="relative py-32 bg-[#1a1a1a]">
            <GridBackground />

            <div className="relative z-10 container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium mb-6">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Full-Stack{" "}
                        <span className="gradient-gold-text">Performance</span>
                        <br />
                        Marketing
                    </h2>
                    <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto leading-relaxed">
                        End-to-end growth systems designed to scale B2B revenue.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link href={service.href} className="block h-full">
                                <GlowingCard className="h-full hover:border-[#AD8253]/50 transition-colors duration-300">
                                    <div className="flex flex-col h-full">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center text-[#272727] mb-6 shadow-lg shadow-[#AD8253]/20">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#AD8253] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#a1a1a1] leading-relaxed flex-grow text-sm">
                                            {service.description}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 text-[#AD8253] font-medium mt-6 group/link"
                                        >
                                            Learn more
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </GlowingCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
