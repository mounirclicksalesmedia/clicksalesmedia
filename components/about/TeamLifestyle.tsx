"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

export function TeamLifestyle() {
    return (
        <section className="relative py-32 bg-[#1a1a1a] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#AD8253]/5 rounded-full blur-[120px]" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c3a177]/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-[#AD8253]/30 bg-[#AD8253]/10 text-[#AD8253] text-sm font-medium mb-6">
                            Behind The Scenes
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            Where <span className="font-serif italic font-light text-[#c3a177]">Creativity</span> Meets Data
                        </h2>
                        <p className="text-xl text-[#a1a1a1] leading-relaxed mb-8">
                            We're not just number crunchers. We are a diverse team of strategists, creatives, and engineers working in sync to solve complex growth challenges.
                        </p>

                        <div className="flex items-center gap-8">
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-[#6b6b6b]">Remote First</div>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <div>
                                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                <div className="text-sm text-[#6b6b6b]">Global Coverage</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Composition Side */}
                    <div className="relative h-[600px] w-full">
                        {/* Image 1 - Top Right */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="absolute top-0 right-0 w-[65%] h-[60%] rounded-2xl overflow-hidden z-10 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#272727] to-[#1a1a1a] border border-white/10 group-hover:border-[#AD8253]/30 transition-colors duration-500">
                                <Image
                                    src="/team/imgc.jpg"
                                    alt="Strategy Session"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                                <span className="text-white text-sm font-medium">Strategy Session</span>
                            </div>
                        </motion.div>

                        {/* Image 2 - Bottom Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-2xl overflow-hidden z-20 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#272727] border border-white/10 group-hover:border-[#c3a177]/30 transition-colors duration-500 shadow-2xl shadow-black/50">
                                <Image
                                    src="/team/teamone.png"
                                    alt="Deep Work"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute top-6 right-6 bg-[#AD8253] px-4 py-2 rounded-lg shadow-lg shadow-[#AD8253]/20">
                                <span className="text-[#272727] text-sm font-bold">Deep Work</span>
                            </div>
                        </motion.div>

                        {/* Decorative Graphic Elements */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute top-1/3 left-1/4 w-24 h-24 border border-[#AD8253]/20 rounded-full flex items-center justify-center z-0 animate-[spin_10s_linear_infinite]"
                        >
                            <div className="w-2 h-2 bg-[#AD8253] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-[#c3a177]/20 rounded-full flex items-center justify-center z-0 animate-[spin_15s_linear_infinite_reverse]"
                        >
                            <div className="w-2 h-2 bg-[#c3a177] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
