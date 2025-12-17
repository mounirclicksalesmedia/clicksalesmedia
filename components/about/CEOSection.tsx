"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

export function CEOSection() {
    return (
        <section className="relative py-32 bg-[#272727] overflow-hidden">
            {/* Background gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#AD8253]/5 blur-3xl" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* CEO Image/Avatar */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative aspect-square max-w-md mx-auto">
                                {/* Decorative elements */}
                                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#AD8253]/20 blur-2xl" />
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#c3a177]/20 blur-2xl" />

                                {/* Main image container */}
                                <div className="relative rounded-2xl overflow-hidden border-2 border-[#AD8253]/20">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#AD8253]/20 to-[#c3a177]/10" />
                                    <div className="aspect-square relative bg-[#1a1a1a]">
                                        <Image
                                            src="/team/mounir-clicksalesmedia.jpg"
                                            alt="Mounir Bennassar - CEO of ClickSalesMedia"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CEO Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-4">
                                <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium mb-6">
                                    Leadership
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Meet Our <span className="gradient-gold-text">CEO</span>
                            </h2>

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white">Mounir Bennassar</h3>
                                <p className="text-[#AD8253] font-medium">Founder & CEO</p>
                            </div>

                            <div className="space-y-4 text-[#a1a1a1] leading-relaxed">
                                <p>
                                    "I founded ClickSalesMedia with a simple belief: marketing should be measurable, scalable, and profitable. Too many agencies focus on vanity metrics while businesses struggle to see real ROI."
                                </p>
                                <p>
                                    "We've built a team of performance marketing experts who are obsessed with one thing—driving revenue growth for our clients. Every strategy, every campaign, every optimization is designed to move the needle on what matters most: your bottom line."
                                </p>
                                <p>
                                    "Our approach combines cutting-edge AI technology with battle-tested marketing strategies to create predictable, scalable revenue engines. We're not here to win awards—we're here to grow your business."
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mt-8">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#AD8253]/10 hover:bg-[#AD8253]/20 border border-[#AD8253]/20 flex items-center justify-center text-[#AD8253] transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-[#AD8253]/10 hover:bg-[#AD8253]/20 border border-[#AD8253]/20 flex items-center justify-center text-[#AD8253] transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
