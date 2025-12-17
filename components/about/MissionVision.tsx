"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function MissionVision() {
    return (
        <section className="relative py-32 bg-[#272727] overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(#AD8253 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-24 max-w-7xl mx-auto">

                    {/* Mission Section */}
                    <div className="flex flex-col md:flex-row items-center gap-12 group">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 relative"
                        >
                            <div className="absolute -left-10 -top-10 text-[120px] md:text-[200px] font-bold text-white/5 select-none leading-none z-0 tracking-tighter">
                                01
                            </div>
                            <h2 className="relative z-10 text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AD8253] to-[#c3a177]">Mission</span>
                            </h2>
                            <div className="h-1 w-20 bg-[#AD8253] mb-8 rounded-full" />
                            <p className="text-xl md:text-2xl text-[#a1a1a1] leading-relaxed font-light">
                                To empower ambitious B2B companies with <span className="text-white font-medium">performance marketing strategies</span> that deliver predictable, scalable revenue growth. Buying media is easy; buying revenue is a science.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 group-hover:border-[#AD8253]/30 transition-colors duration-500">
                                {/* Abstract Geometric Shape */}
                                <Image
                                    src="/world.png"
                                    alt="ClickSalesMedia Mission"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="text-sm font-mono text-[#AD8253] mb-2">// THE GOAL</div>
                                    <div className="text-white text-lg font-medium border-l-2 border-[#AD8253] pl-4">
                                        Turning marketing into a math problem where the answer is always profit.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Vision Section */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 relative"
                        >
                            <div className="absolute -right-10 -top-10 text-[120px] md:text-[200px] font-bold text-white/5 select-none leading-none z-0 tracking-tighter">
                                02
                            </div>
                            <h2 className="relative z-10 text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 text-right md:text-left">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#c3a177] to-[#AD8253]">Vision</span>
                            </h2>
                            <div className="h-1 w-20 bg-[#c3a177] mb-8 rounded-full ml-auto md:ml-0" />
                            <p className="text-xl md:text-2xl text-[#a1a1a1] leading-relaxed font-light text-right md:text-left">
                                To become the <span className="text-white font-medium">global standard</span> for transparency and results in the agency world. We envision a future where agencies are judged solely on the revenue they generate, not the hours they bill.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative h-[300px] md:h-[400px] w-full rounded-3xl overflow-hidden bg-gradient-to-bl from-[#1a1a1a] to-[#0f0f0f] border border-white/10 group-hover:border-[#c3a177]/30 transition-colors duration-500">
                                {/* Abstract Geometric Shape */}
                                <Image
                                    src="/performancevision.png"
                                    alt="ClickSalesMedia Vision"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="text-sm font-mono text-[#c3a177] mb-2">// THE FUTURE</div>
                                    <div className="text-white text-lg font-medium border-l-2 border-[#c3a177] pl-4">
                                        No black boxes. No fluff. Just radical transparency and measurable impact.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
