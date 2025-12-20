"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight, SpotlightBeam } from "@/components/ui/Spotlight";
import { TextGenerateEffect, TypewriterEffect } from "@/components/ui/TextEffects";
import { GlowingButton, OutlineButton } from "@/components/ui/Buttons";
import { GradientOrb } from "@/components/ui/Backgrounds";
import { BookingButton } from "@/components/booking";

// Client logos from /public/clients folder - all 16 logos
const clientLogos = [
    { src: "/clients/aaa-Logo.png", alt: "AAA Logo" },
    { src: "/clients/bajunaid-company.png", alt: "Bajunaid Company" },
    { src: "/clients/erosforlady.png", alt: "Eros For Lady" },
    { src: "/clients/eshraq.png", alt: "Eshraq" },
    { src: "/clients/greenroasteries-logo.png", alt: "Green Roasteries" },
    { src: "/clients/inspeedglobal-1.png", alt: "Inspeed Global" },
    { src: "/clients/joynt-1.png", alt: "Joynt" },
    { src: "/clients/wse.png", alt: "WSE" },
    { src: "/clients/mahadahlan.png", alt: "Maha Dahlan" },
    { src: "/clients/newrayanclinic.png", alt: "New Rayan Clinic" },
    { src: "/clients/purenbio.webp", alt: "Purenbio" },
    { src: "/clients/ses-school-clicksalesmedia.png", alt: "SES School" },
    { src: "/clients/ses-school-logo-clicksalesmedia.png", alt: "SES School Logo" },
    { src: "/clients/storage.png", alt: "Storage" },
    { src: "/clients/tohatsu.webp", alt: "Tohatsu" },
    { src: "/clients/maeva-2.png", alt: "Maeva" },
];

export function Hero() {
    const words = [
        { text: "REVENUE", className: "gradient-gold-text" },
        { text: "PERFORMANCE", className: "gradient-gold-text" },
        { text: "PROFITABILITY", className: "gradient-gold-text" },
        { text: "GROWTH", className: "gradient-gold-text" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#272727] pt-28 lg:pt-32 pb-12">
            {/* Background Effects */}
            <Spotlight />
            <SpotlightBeam />

            {/* Gradient Orbs */}
            <GradientOrb
                className="top-1/4 -left-20"
                size={600}
                blur={150}
            />
            <GradientOrb
                className="bottom-1/4 -right-20"
                size={500}
                blur={120}
                color1="#c3a177"
                color2="#AD8253"
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(173, 130, 83, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(173, 130, 83, 1) 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#AD8253] animate-pulse" />
                        B2B Performance Marketing Agency
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                >
                    We Engineer & Optimize Your{" "}
                    <br />
                    <TypewriterEffect
                        words={words}
                        className="inline"
                        cursorClassName="h-12 md:h-16 lg:h-20"
                    />
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-12 font-normal leading-relaxed"
                >
                    Stop relying on guesswork. We combine advanced AI infrastructure with elite performance strategies to turn your marketing into a predictable, scalable business asset. From the first click to the closed deal.
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <BookingButton
                        text="Check Availability"
                        variant="primary"
                        size="lg"
                        source="hero"
                    />
                    <OutlineButton className="whitespace-nowrap">
                        View Our Technology
                    </OutlineButton>
                </motion.div>

                {/* Logo Marquee */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-20 w-full"
                >
                    <p className="text-center text-sm text-[#6b6b6b] mb-6">Trusted by innovative brands worldwide</p>
                    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
                        {/* Left fade gradient */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#272727] to-transparent z-10 pointer-events-none" />
                        {/* Right fade gradient */}
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#272727] to-transparent z-10 pointer-events-none" />

                        {/* Scrolling container */}
                        <div className="flex animate-marquee">
                            {/* First set of logos */}
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex shrink-0 items-center gap-16 px-8">
                                    {clientLogos.map((logo, i) => (
                                        <div
                                            key={`${setIndex}-${i}`}
                                            className="flex items-center justify-center h-16 w-[140px] shrink-0"
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
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-[#AD8253]/40 flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-2 rounded-full bg-[#AD8253]"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
