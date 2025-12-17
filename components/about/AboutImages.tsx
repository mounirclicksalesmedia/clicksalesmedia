"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutImages() {
    return (
        <section className="relative py-32 bg-[#1a1a1a] overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#AD8253]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c3a177]/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Card 1: Data-Driven */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5 }}
                        className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-[#272727]"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#AD8253]/20 via-[#272727] to-[#1a1a1a] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Data-Driven Precision</h3>
                                <p className="text-[#a1a1a1] text-lg">Every decision is backed by millions of data points, not gut feeling.</p>
                            </div>

                            {/* Abstract UI Representation */}
                            <div className="relative w-full h-[200px] bg-black/40 rounded-xl border border-white/5 p-4 overflow-hidden group-hover:border-[#AD8253]/30 transition-colors duration-500">
                                {/* Grid lines */}
                                <div className="absolute inset-0"
                                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                                />

                                {/* Animated Bars */}
                                <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                                    {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${height}%` }}
                                            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                            className="w-full bg-gradient-to-t from-[#AD8253]/20 to-[#AD8253] rounded-t-sm opacity-80"
                                        />
                                    ))}
                                </div>

                                {/* Floating stats */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#AD8253]/30 text-[#AD8253] text-xs font-mono"
                                >
                                    +127% Growth
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: ROI-Focused */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-[#272727]"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-bl from-[#c3a177]/20 via-[#272727] to-[#1a1a1a] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">ROI-Obsessed</h3>
                                <p className="text-[#a1a1a1] text-lg">We don't count clicks. We count revenue, profit, and scalable growth.</p>
                            </div>

                            {/* Abstract UI Representation */}
                            <div className="relative w-full h-[200px] bg-black/40 rounded-xl border border-white/5 p-4 overflow-hidden group-hover:border-[#c3a177]/30 transition-colors duration-500 flex items-center justify-center">
                                {/* Circular Progress / Radar */}
                                <div className="relative w-40 h-40">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="8" />
                                        <motion.circle
                                            cx="50" cy="50" r="45" fill="none" stroke="#c3a177" strokeWidth="8"
                                            strokeDasharray="283"
                                            initial={{ strokeDashoffset: 283 }}
                                            whileInView={{ strokeDashoffset: 40 }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-3xl font-bold text-white">12x</span>
                                        <span className="text-xs text-[#a1a1a1]">Avg ROI</span>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#AD8253]/20 border border-[#AD8253]/40 blur-sm"
                                />
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#c3a177]/10 border border-[#c3a177]/30 blur-sm"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
