"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingButton } from "@/components/ui/Buttons";

export function AboutCTA() {
    return (
        <section className="relative py-20 bg-[#272727] overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#AD8253]/10 rounded-full blur-3xl animate-pulse" />
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#AD8253]" />
                        <div className="w-2 h-2 rounded-full bg-[#AD8253]" />
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#AD8253]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Build Your{" "}
                        <span className="gradient-gold-text">Revenue Engine?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-[#a1a1a1] mb-10 max-w-2xl mx-auto">
                        Let's turn your marketing into a predictable, scalable growth machine.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <GlowingButton className="whitespace-nowrap">
                            Start Your Growth Journey
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
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#AD8253]/10">
                        {[
                            { value: "500+", label: "Clients" },
                            { value: "$2B+", label: "Revenue Generated" },
                            { value: "12x", label: "Avg ROI" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold gradient-gold-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[#6b6b6b]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
