"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingButton } from "@/components/ui/Buttons";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description: string;
    badgeText?: string;
    stats?: { label: string; value: string }[];
}

export function ServiceHero({ title, subtitle, description, badgeText, stats }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-[#272727] overflow-hidden pt-32 pb-20">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AD8253]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c3a177]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

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

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {badgeText && (
                            <div className="inline-block px-4 py-1.5 rounded-full border border-[#AD8253]/30 bg-[#AD8253]/10 text-[#AD8253] text-sm font-medium mb-6">
                                {badgeText}
                            </div>
                        )}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                            {title} <br />
                            <span className="gradient-gold-text">{subtitle}</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] max-w-xl mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <GlowingButton className="whitespace-nowrap">
                                Get a Proposal
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </GlowingButton>
                        </div>
                    </motion.div>

                    {/* Stats/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            {stats?.map((stat, i) => (
                                <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 bg-[#1a1a1a]/50 backdrop-blur-xl">
                                    <div className="text-4xl font-bold gradient-gold-text mb-2">{stat.value}</div>
                                    <div className="text-sm text-[#a1a1a1]">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative elements behind stats */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#AD8253]/20 to-[#c3a177]/20 rounded-3xl blur-2xl -z-10 opacity-50" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
