"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookingButton } from "@/components/booking/BookingButton";

interface ProblemSolution {
    problem: string;
    solutionTitle: string;
    solutionDescription: string;
}

interface ServiceProblemsProps {
    title: string;
    subtitle: string;
    items: ProblemSolution[];
    source?: string;
}

export function ServiceProblems({ title, subtitle, items, source }: ServiceProblemsProps) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#272727] py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        {title}
                    </h2>
                    <p className="text-[#a1a1a1]">{subtitle}</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Problems List */}
                    <div className="space-y-2">
                        {items.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex w-full items-center justify-between rounded-lg p-4 text-left transition-all ${activeTab === index
                                    ? "bg-[#1a1a1a] text-[#AD8253] shadow-lg"
                                    : "text-[#a1a1a1] hover:bg-[#1a1a1a]/50"
                                    }`}
                            >
                                <span className="text-sm md:text-base">{item.problem}</span>
                                {activeTab === index && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Solution Card */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-8"
                    >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#AD8253]/10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AD8253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-white">
                            {items[activeTab].solutionTitle}
                        </h3>
                        <p className="mb-6 text-[#a1a1a1]">
                            {items[activeTab].solutionDescription}
                        </p>
                        <BookingButton
                            text="Book a Call"
                            source={source}
                            variant="primary"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
