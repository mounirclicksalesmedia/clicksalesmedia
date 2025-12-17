"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    items: FAQItem[];
    title?: string;
}

export function ServiceFAQ({ items, title = "Frequently Asked Questions" }: ServiceFAQProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 bg-[#1a1a1a]">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{title}</h2>

                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="border border-white/5 rounded-2xl overflow-hidden bg-[#272727]/50">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">{item.question}</span>
                                <span className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AD8253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-[#a1a1a1] leading-relaxed border-t border-white/5">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
