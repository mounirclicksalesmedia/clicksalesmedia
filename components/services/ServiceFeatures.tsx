"use client";

import React from "react";
import { motion } from "framer-motion";

interface Feature {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface ServiceFeaturesProps {
    title: string;
    subtitle?: string;
    features: Feature[];
}

export function ServiceFeatures({ title, subtitle, features }: ServiceFeaturesProps) {
    return (
        <section className="relative py-24 bg-[#272727]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(#AD8253 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
                    {subtitle && <p className="text-[#a1a1a1] max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="glass-card p-8 h-full hover:border-[#AD8253]/40 transition-all duration-300 bg-[#1a1a1a]/50">
                                <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center mb-6 text-[#AD8253] group-hover:bg-[#AD8253] group-hover:text-[#272727] transition-all duration-300">
                                    {feature.icon || (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-[#a1a1a1] leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
