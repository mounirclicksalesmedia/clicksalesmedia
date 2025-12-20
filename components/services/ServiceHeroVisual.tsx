"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookingButton } from "@/components/booking/BookingButton";

interface ServiceHeroProps {
    badge: string;
    title: string;
    description: string;
    ctaText?: string;
    visual: React.ReactNode;
    source?: string;
}

export function ServiceHeroVisual({ badge, title, description, ctaText = "Get a Proposal", visual, source }: ServiceHeroProps) {
    return (
        <section className="relative overflow-hidden bg-[#272727] py-24 md:py-32">
            {/* Background Effects */}
            <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] opacity-20 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />

            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#AD8253]/20 bg-[#AD8253]/10 px-4 py-2 text-sm font-medium text-[#AD8253]">
                            {badge}
                        </span>

                        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            {title}
                        </h1>

                        <p className="max-w-lg text-lg text-[#a1a1a1]">
                            {description}
                        </p>

                        <BookingButton
                            text={ctaText}
                            source={source}
                            variant="primary"
                            className="whitespace-nowrap"
                        />
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {visual}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
