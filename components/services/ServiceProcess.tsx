"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface ServiceProcessProps {
    title?: string;
    description?: string;
    steps: ProcessStep[];
}

export function ServiceProcess({ title = "How It Works", description, steps }: ServiceProcessProps) {
    return (
        <section className="relative py-24 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
                    {description && <p className="text-[#a1a1a1] max-w-2xl mx-auto">{description}</p>}
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line */}
                    <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-[#AD8253] to-transparent md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-start md:items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Icon/Number */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-[#1a1a1a] border-4 border-[#272727] z-10 shadow-xl shadow-black/50">
                                    <div className="w-10 h-10 rounded-full bg-[#AD8253] flex items-center justify-center text-[#272727] font-bold text-xl">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className={`flex-1 pl-24 md:pl-0 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24"
                                    }`}>
                                    <div className="glass-card p-8 hover:border-[#AD8253]/30 transition-colors duration-300">
                                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                        <p className="text-[#a1a1a1] leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Empty Spacer for layout balance */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
