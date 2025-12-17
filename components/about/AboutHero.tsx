"use client";

import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { GradientOrb } from "@/components/ui/Backgrounds";
import { GlowingButton } from "@/components/ui/Buttons";

export function AboutHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#272727]">
            {/* Background Effects */}
            <Spotlight />

            {/* Gradient Orbs */}
            <GradientOrb
                className="top-1/4 -left-20"
                size={500}
                blur={120}
            />
            <GradientOrb
                className="bottom-1/4 -right-20"
                size={400}
                blur={100}
                color1="#c3a177"
                color2="#AD8253"
            />

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

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#AD8253] animate-pulse" />
                        About Us
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                >
                    We Build{" "}
                    <span className="gradient-gold-text">Revenue Engines</span>
                    <br />
                    That Scale
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-[#a1a1a1] max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    ClickSalesMedia is a performance marketing agency obsessed with one thing: turning your marketing into a predictable, scalable revenue machine. No fluff, no vanity metrics—just results.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <GlowingButton className="whitespace-nowrap">
                        Let's Talk Growth
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </GlowingButton>
                </motion.div>
            </div>
        </section>
    );
}
