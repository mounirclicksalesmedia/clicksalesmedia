"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SimpleLamp } from "@/components/ui/LampEffect";

// Client logos for "Trusted by Industry Leaders" section
const trustedLogos = [
    { src: "/clients/wse.png", alt: "WSE" },
    { src: "/clients/tohatsu.webp", alt: "Tohatsu" },
    { src: "/clients/newrayanclinic.png", alt: "New Rayan Clinic" },
    { src: "/clients/bajunaid-company.png", alt: "Bajunaid Company" },
    { src: "/clients/aaa-Logo.png", alt: "AAA Logo" },
    { src: "/clients/joynt-1.png", alt: "Joynt" },
];

const stats = [
    { value: 500, suffix: "+", label: "Clients Worldwide" },
    { value: 2, prefix: "$", suffix: "B+", label: "Revenue Generated" },
    { value: 12, suffix: "x", label: "Average ROAS" },
    { value: 95, suffix: "%", label: "Client Retention" },
];

function AnimatedNumber({
    value,
    prefix = "",
    suffix = "",
    duration = 2,
}: {
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}

export function Stats() {
    return (
        <section id="about" className="relative py-32 bg-[#272727] overflow-hidden">
            {/* Lamp effect at top */}
            <SimpleLamp className="absolute top-0 left-0 right-0" />

            <div className="relative z-10 container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium mb-6">
                        Our Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Numbers That
                        <br />
                        <span className="gradient-gold-text">Speak For Themselves</span>
                    </h2>
                    <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto leading-relaxed">
                        A decade of driving exceptional results for B2B companies across industries.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center p-8 rounded-2xl bg-[#1a1a1a]/50 border border-[#AD8253]/10 hover:border-[#AD8253]/30 transition-colors"
                        >
                            <div className="text-5xl md:text-6xl font-bold gradient-gold-text mb-3">
                                <AnimatedNumber
                                    value={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                />
                            </div>
                            <div className="text-[#a1a1a1]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Client logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <p className="text-[#6b6b6b] text-sm mb-8">
                        TRUSTED BY INDUSTRY LEADERS
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {trustedLogos.map((logo, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-center h-16 px-4"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={120}
                                    height={50}
                                    className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 brightness-125"
                                    style={{ maxHeight: '50px', width: 'auto' }}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
