"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BookingButton } from "@/components/booking";
import {
    Linkedin,
    Search,
    MapPin,
    Layers,
    Zap,
    BarChart3,
    Bot,
    Wrench,
    LineChart,
    Monitor,
    Rocket,
    Palette,
    BrainCircuit,
    ArrowRight,
    MousePointerClick,
    Target,
    TrendingUp
} from "lucide-react";

// Flagship Services (The "New Way") - Top Grid (6 Items)
const flagshipServices = [
    {
        name: "Alpha Lead Gen 2.0",
        href: "/services/alpha-lead-gen",
        description: "Our proprietary AI-driven lead generation engine.",
        icon: Zap
    },
    {
        name: "AI Agents & Automation",
        href: "/services/ai-automation",
        description: "Automate sales & ops with custom AI workforce.",
        icon: Bot
    },
    {
        name: "Landing Page & CRO",
        href: "/services/landing-page-cro",
        description: "Turn traffic into revenue with scientific A/B testing.",
        icon: MousePointerClick
    },
    {
        name: "Multi-Channel Acquisition",
        href: "/services/multi-channel-acquisition",
        description: "Omnipresent strategy across all major platforms.",
        icon: Layers
    },
    {
        name: "Revenue Analytics",
        href: "/services/revenue-analytics",
        description: "Server-side tracking & multi-touch attribution.",
        icon: LineChart
    },
    {
        name: "CRM Architecture",
        href: "/services/crm-architecture",
        description: "Build a sales pipeline that manages itself.",
        icon: Wrench
    }
];

// Service Lists - Consolidated for layout
const paidMediaServices = [
    { name: "Paid Media Strategy", href: "/services/paid-media", icon: BarChart3 },
    { name: "SEO & GEO", href: "/services/seo-geo", icon: Search },
    { name: "Google Ads", href: "/services/google-ads", icon: TrendingUp },
    { name: "LinkedIn Ads", href: "/services/linkedin-ads", icon: Linkedin },
];

const creativeTechnicalServices = [
    { name: "High-Conversion Web Dev", href: "/services/web-development", icon: Monitor },
    { name: "Performance Creative", href: "/services/creative-studio", icon: Palette },
    { name: "Strategy Consulting", href: "/services/strategy-consulting", icon: BrainCircuit },
    { name: "Audience Retargeting", href: "/services/retargeting-staging", icon: Target },
];

const navItems = [
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
                    scrolled
                        ? "bg-[#1a1a1a]/95 backdrop-blur-2xl border-b border-[#AD8253]/20 shadow-2xl shadow-black/40"
                        : "bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent backdrop-blur-md"
                )}
            >
                <div className="container mx-auto px-6">
                    <nav className="flex items-center justify-between h-20 lg:h-24">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center relative z-[101] -ml-2"
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                src="/clicksalesmedialogo.png"
                                alt="ClickSalesMedia"
                                className="h-12 lg:h-14 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex items-center gap-10 xl:gap-12">
                            {navItems.map((item) => (
                                <li
                                    key={item.name}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && setServicesOpen(true)}
                                    onMouseLeave={() => item.hasDropdown && setServicesOpen(false)}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-[#a1a1a1] hover:text-white transition-colors duration-300 text-[15px] font-medium relative group flex items-center gap-1.5 py-2"
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className={cn(
                                                    "transition-transform duration-300",
                                                    servicesOpen && "rotate-180"
                                                )}
                                            >
                                                <path d="m6 9 6 6 6-6" />
                                            </svg>
                                        )}
                                        <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#AD8253] to-[#c3a177] group-hover:w-full transition-all duration-300" />
                                    </Link>

                                    {/* Mega Menu Dropdown */}
                                    {item.hasDropdown && (
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-[20%] pt-2 w-[1000px]"
                                                >
                                                    <div className="bg-[#1a1a1a] rounded-xl border border-white/10 shadow-2xl shadow-black/80 overflow-hidden">

                                                        {/* Top Section: Flagship Systems (6 Cards) */}
                                                        <div className="p-8 border-b border-white/5 bg-[#222]">
                                                            <h4 className="text-xs font-bold text-[#6b6b6b] tracking-wider mb-6">CORE GROWTH SYSTEMS</h4>
                                                            <div className="grid grid-cols-3 gap-6">
                                                                {flagshipServices.map((service, i) => (
                                                                    <Link
                                                                        key={service.name}
                                                                        href={service.href}
                                                                        className="group flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-[#AD8253]/30 transition-all duration-300"
                                                                    >
                                                                        <div className="shrink-0 pt-1">
                                                                            <div className="w-12 h-12 rounded-lg bg-[#AD8253]/10 flex items-center justify-center text-[#AD8253] group-hover:bg-[#AD8253] group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(173,130,83,0.1)] group-hover:shadow-[0_0_20px_rgba(173,130,83,0.4)]">
                                                                                <service.icon size={24} />
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <h5 className="text-white font-bold text-sm mb-1 group-hover:text-[#AD8253] transition-colors">{service.name}</h5>
                                                                            <p className="text-[#a1a1a1] text-xs leading-relaxed group-hover:text-[#ccc] transition-colors">
                                                                                {service.description}
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Bottom Section: 2 Lists + Promo */}
                                                        <div className="p-8 grid grid-cols-3 gap-8 bg-[#1a1a1a]">
                                                            {/* List 1: Paid Media */}
                                                            <div>
                                                                <h4 className="text-xs font-bold text-[#6b6b6b] tracking-wider mb-4 border-b border-white/5 pb-2">PAID MEDIA & TRAFFIC</h4>
                                                                <ul className="space-y-3">
                                                                    {paidMediaServices.map((service) => (
                                                                        <li key={service.name}>
                                                                            <Link
                                                                                href={service.href}
                                                                                className="flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#AD8253] transition-colors group"
                                                                            >
                                                                                <service.icon size={16} className="text-[#666] group-hover:text-[#AD8253] transition-colors" />
                                                                                {service.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* List 2: Creative & Tech */}
                                                            <div>
                                                                <h4 className="text-xs font-bold text-[#6b6b6b] tracking-wider mb-4 border-b border-white/5 pb-2">CREATIVE & STRATEGY</h4>
                                                                <ul className="space-y-3">
                                                                    {creativeTechnicalServices.map((service) => (
                                                                        <li key={service.name}>
                                                                            <Link
                                                                                href={service.href}
                                                                                className="flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#AD8253] transition-colors group"
                                                                            >
                                                                                <service.icon size={16} className="text-[#666] group-hover:text-[#AD8253] transition-colors" />
                                                                                {service.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Promo Box (Restored) */}
                                                            <div className="bg-[#272727] rounded-xl p-6 border border-white/5 relative overflow-hidden group flex flex-col justify-center h-full">
                                                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#AD8253]/10 rounded-full blur-2xl -z-0 translate-x-10 -translate-y-10 group-hover:bg-[#AD8253]/20 transition-all duration-500" />

                                                                <h4 className="text-lg font-bold text-white mb-2 relative z-10">Our Approach</h4>
                                                                <p className="text-xs text-[#a1a1a1] mb-6 relative z-10 leading-relaxed">
                                                                    We don't just run ads. We build extensive growth ecosystems that compound over time.
                                                                </p>
                                                                <Link
                                                                    href="/about"
                                                                    className="inline-flex items-center gap-2 text-[#AD8253] text-sm font-bold hover:gap-3 transition-all relative z-10"
                                                                >
                                                                    How we work <ArrowRight size={14} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <BookingButton
                                text="Check Availability"
                                variant="primary"
                                size="md"
                                source="navigation"
                            />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-white relative z-[101]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {mobileMenuOpen ? (
                                    <>
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </>
                                ) : (
                                    <>
                                        <path d="M4 12h16" />
                                        <path d="M4 6h16" />
                                        <path d="M4 18h16" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </nav>
                </div>
            </motion.header>


            {/* Mobile Menu */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[90] bg-[#1a1a1a] lg:hidden overflow-y-auto"
                        >
                            <nav className="container mx-auto px-6 pt-32 pb-12">
                                <ul className="flex flex-col gap-2">
                                    {navItems.map((item, i) => (
                                        <motion.li
                                            key={item.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                        >
                                            {item.hasDropdown ? (
                                                <div>
                                                    <button
                                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                        className="w-full flex items-center justify-between py-4 text-2xl font-semibold text-white"
                                                    >
                                                        {item.name}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className={cn(
                                                                "transition-transform duration-300 text-[#AD8253]",
                                                                mobileServicesOpen && "rotate-180"
                                                            )}
                                                        >
                                                            <path d="m6 9 6 6 6-6" />
                                                        </svg>
                                                    </button>

                                                    <AnimatePresence>
                                                        {mobileServicesOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pb-4 space-y-6">
                                                                    <div>
                                                                        <h4 className="text-xs font-bold text-[#6b6b6b] tracking-wider mb-4 px-2">CORE SYSTEMS</h4>
                                                                        <ul className="grid grid-cols-1 gap-2">
                                                                            {flagshipServices.map((service) => (
                                                                                <li key={service.name}>
                                                                                    <Link
                                                                                        href={service.href}
                                                                                        onClick={() => {
                                                                                            setMobileMenuOpen(false);
                                                                                            setMobileServicesOpen(false);
                                                                                        }}
                                                                                        className="flex items-center gap-3 py-3 px-3 rounded-lg bg-white/5 text-white"
                                                                                    >
                                                                                        <service.icon size={18} className="text-[#AD8253]" />
                                                                                        <span className="text-sm font-medium">{service.name}</span>
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>

                                                                    <div>
                                                                        <h4 className="text-xs font-bold text-[#6b6b6b] tracking-wider mb-4 px-2">ALL SERVICES</h4>
                                                                        <ul className="space-y-2 px-2">
                                                                            {[...paidMediaServices, ...creativeTechnicalServices].map((service) => (
                                                                                <li key={service.name}>
                                                                                    <Link
                                                                                        href={service.href}
                                                                                        onClick={() => {
                                                                                            setMobileMenuOpen(false);
                                                                                            setMobileServicesOpen(false);
                                                                                        }}
                                                                                        className="flex items-center gap-3 py-2 text-[#a1a1a1]"
                                                                                    >
                                                                                        <service.icon size={16} />
                                                                                        <span className="text-sm">{service.name}</span>
                                                                                    </Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className="block py-4 text-2xl font-semibold text-white hover:text-[#AD8253] transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </motion.li>
                                    ))}
                                    <motion.li
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: navItems.length * 0.05 }}
                                        className="pt-4"
                                    >
                                        <div onClick={() => setMobileMenuOpen(false)}>
                                            <BookingButton
                                                text="Check Availability"
                                                variant="primary"
                                                size="lg"
                                                source="navigation-mobile"
                                                className="w-full justify-center"
                                            />
                                        </div>
                                    </motion.li>
                                </ul>
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}
