"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Spotlight } from "@/components/ui/Spotlight";
import { GradientOrb } from "@/components/ui/Backgrounds";
import {
    HeartPulse,
    GraduationCap,
    HardHat,
    Briefcase,
    Building2,
    UtensilsCrossed,
    Scale,
    Landmark,
    Truck,
    Cloud,
    BadgeCheck,
    Anchor,
    ArrowUpRight,
} from "lucide-react";

export default function IndustriesPage() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    const industries = [
        {
            title: "Healthcare",
            description: "Patient acquisition and telemedicine growth strategies.",
            icon: <HeartPulse className="h-6 w-6 text-white" />,
            href: "/industries/healthcare",
        },
        {
            title: "Education",
            description: "Scaling enrollments for EdTech and institutions.",
            icon: <GraduationCap className="h-6 w-6 text-white" />,
            href: "/industries/education",
        },
        {
            title: "Construction",
            description: "High-value project leads and contractor marketing.",
            icon: <HardHat className="h-6 w-6 text-white" />,
            href: "/industries/construction",
        },
        {
            title: "Consulting",
            description: "Authority building for firms and independent experts.",
            icon: <Briefcase className="h-6 w-6 text-white" />,
            href: "/industries/consulting",
        },
        {
            title: "Real Estate",
            description: "Lead generation for developers and luxury agents.",
            icon: <Building2 className="h-6 w-6 text-white" />,
            href: "/industries/real-estate",
        },
        {
            title: "Hotels & Restaurants",
            description: "Local SEO, GMB optimization, and guest acquisition.",
            icon: <UtensilsCrossed className="h-6 w-6 text-white" />,
            href: "/industries/hotels-restaurants",
        },
        {
            title: "Law Firms",
            description: "Client acquisition and reputation marketing for legal practices.",
            icon: <Scale className="h-6 w-6 text-white" />,
            href: "/industries/law-firms",
        },
        {
            title: "Financial Services",
            description: "Trust-based marketing for advisors and wealth mgmt.",
            icon: <Landmark className="h-6 w-6 text-white" />,
            href: "/industries/financial-services",
        },
        {
            title: "Logistics",
            description: "B2B supply chain and transport lead generation.",
            icon: <Truck className="h-6 w-6 text-white" />,
            href: "/industries/logistics",
        },
        {
            title: "SaaS Services",
            description: "Demo bookings and churn reduction strategies.",
            icon: <Cloud className="h-6 w-6 text-white" />,
            href: "/industries/saas",
        },
        {
            title: "Accreditation",
            description: "Lead generation for certification and accreditation bodies.",
            icon: <BadgeCheck className="h-6 w-6 text-white" />,
            href: "/industries/accreditation",
        },
        {
            title: "Luxury Marine",
            description: "Premium marketing for yacht brokerages and marine services.",
            icon: <Anchor className="h-6 w-6 text-white" />,
            href: "/industries/luxury-marine",
        },

    ];

    return (
        <main className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
            {/* GLOBAL BACKGROUND EFFECTS - Moved here to prevent cutting lines */}
            <Spotlight />
            {/* Top Left Orb */}
            <GradientOrb className="top-0 -left-20" size={500} blur={120} />
            {/* Middle Right Orb (The "Sport" of gold) - Moved up slightly to bridge sections */}
            <GradientOrb
                className="top-[40vh] -right-20"
                size={600}
                blur={120}
                color1="#c3a177"
                color2="#AD8253"
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(173, 130, 83, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(173, 130, 83, 1) 1px, transparent 1px)
          `,
                    backgroundSize: "80px 80px",
                }}
            />

            <Navigation />

            {/* HERO CONTENT */}
            <section className="relative z-10 px-6 container mx-auto text-center" style={{ paddingTop: '200px', paddingBottom: '80px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#AD8253] animate-pulse" />
                        Industries
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                >
                    Specialized Impact <br />
                    <span className="gradient-gold-text">For Every Sector</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-[#a1a1a1] max-w-3xl mx-auto leading-relaxed"
                >
                    We don't do cookie-cutter solutions. We deploy industry-specific
                    growth engines tailored to the unique dynamics of your market.
                </motion.p>
            </section>

            {/* INDUSTRIES GRID */}
            <section className="relative z-10 px-6 container mx-auto" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((item, index) => (
                        <GridItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            href={item.href}
                        />
                    ))}
                </ul>
            </section>

            <Footer />
        </main>
    );
}

interface GridItemProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    href: string;
}

const GridItem = ({ icon, title, description, href }: GridItemProps) => {
    return (
        <li className="list-none min-h-[14rem] group">
            <Link href={href} className="block relative h-full">
                <div className="relative h-full rounded-2xl border border-white/5 p-2 md:rounded-3xl md:p-3 bg-[#272727]/30 transition-transform duration-300 group-hover:scale-[1.02]">
                    <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 border border-white/5 bg-[#1a1a1a]/80 shadow-2xl">
                        <div className="relative flex flex-1 flex-col justify-between gap-3">
                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <div className="w-fit rounded-lg border border-[#AD8253]/30 bg-[#AD8253]/10 p-3">
                                    {icon}
                                </div>
                                <div className="p-2 rounded-full bg-white/5 text-[#AD8253] group-hover:bg-[#AD8253]/20 transition-all duration-300">
                                    <ArrowUpRight className="h-5 w-5" />
                                </div>
                            </div>

                            {/* Body */}
                            <div className="space-y-3">
                                <h3 className="pt-0.5 font-sans text-xl font-semibold text-white group-hover:text-[#AD8253] transition-colors">
                                    {title}
                                </h3>
                                <h2 className="font-sans text-sm text-[#a1a1a1]">
                                    {description}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};
