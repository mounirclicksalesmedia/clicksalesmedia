"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
    title: string;
    subtitle: string;
    points: string[];
    illustration: React.ReactNode;
}

interface ServiceProcessVisualProps {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
}

export function ServiceProcessVisual({ title, subtitle, steps }: ServiceProcessVisualProps) {
    return (
        <section className="bg-[#1a1a1a] py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        {title}
                    </h2>
                    <p className="text-[#a1a1a1]">{subtitle}</p>
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={index % 2 === 1 ? "lg:order-2" : ""}
                            >
                                <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                                    {step.title}
                                </h3>
                                <p className="mb-6 font-medium text-[#AD8253]">
                                    {step.subtitle}
                                </p>
                                <ul className="mb-6 space-y-4">
                                    {step.points.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-[#a1a1a1]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AD8253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                            >
                                {step.illustration}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
