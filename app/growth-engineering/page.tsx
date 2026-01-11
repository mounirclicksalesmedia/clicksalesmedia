"use client";

import React, { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { BookingButton } from "@/components/booking/BookingButton";
import { AboutCTA } from "@/components/about/AboutCTA";
import {
    Rocket,
    Search,
    Layers,
    TrendingUp,
    ArrowRight,
    CheckCircle2,
    Globe,
    MessageSquare,
    Cpu,
} from "lucide-react";

// Animated SVG Engine (Hero Visual)
const GrowthEngineGraphic = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#c3a177] opacity-5 blur-[100px] rounded-full animate-pulse" />

            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c3a177" />
                        <stop offset="100%" stopColor="#ad8253" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Outer Orbit Rings */}
                <circle cx="200" cy="200" r="160" fill="none" stroke="#3d3d3d" strokeWidth="1" className="opacity-50" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="#3d3d3d" strokeWidth="1" strokeDasharray="10 10" className="opacity-30 animate-[spin_60s_linear_infinite]" />

                {/* Animated Connecting Paths (Flow) */}
                <g className="opacity-80">
                    {/* Top to Center */}
                    <path d="M200 40 L200 140" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="160" strokeDashoffset="160">
                        <animate attributeName="stroke-dashoffset" values="160;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    {/* Right to Center */}
                    <path d="M360 200 L260 200" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="160" strokeDashoffset="160">
                        <animate attributeName="stroke-dashoffset" values="160;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </path>
                    {/* Bottom to Center */}
                    <path d="M200 360 L200 260" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="160" strokeDashoffset="160">
                        <animate attributeName="stroke-dashoffset" values="160;0" dur="2s" begin="1s" repeatCount="indefinite" />
                    </path>
                    {/* Left to Center */}
                    <path d="M40 200 L140 200" stroke="url(#goldGradient)" strokeWidth="2" strokeDasharray="160" strokeDashoffset="160">
                        <animate attributeName="stroke-dashoffset" values="160;0" dur="2s" begin="1.5s" repeatCount="indefinite" />
                    </path>
                </g>

                {/* Central Hub */}
                <g filter="url(#glow)">
                    <circle cx="200" cy="200" r="60" fill="#2a2a2a" stroke="url(#goldGradient)" strokeWidth="4" />
                    <circle cx="200" cy="200" r="50" fill="url(#goldGradient)" opacity="0.1" />
                    {/* Rotating Inner Core */}
                    <g className="origin-center animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "200px 200px" }}>
                        <path d="M200 160 L200 240 M160 200 L240 200" stroke="#c3a177" strokeWidth="2" />
                        <circle cx="200" cy="160" r="4" fill="#fff" />
                        <circle cx="200" cy="240" r="4" fill="#fff" />
                        <circle cx="160" cy="200" r="4" fill="#fff" />
                        <circle cx="240" cy="200" r="4" fill="#fff" />
                    </g>
                </g>

                {/* Satellites (Stages) */}
                {/* Top: Strategy */}
                <g transform="translate(200, 40)">
                    <circle r="30" fill="#272727" stroke="#4a4a4a" strokeWidth="2" />
                    <circle r="30" fill="url(#goldGradient)" opacity="0.1" className="animate-pulse" />
                    <path d="M-10 5 L0 -10 L10 5" fill="none" stroke="#c3a177" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Right: Traffic */}
                <g transform="translate(360, 200)">
                    <circle r="30" fill="#272727" stroke="#4a4a4a" strokeWidth="2" />
                    <path d="M-10 0 L10 0 M5 -5 L10 0 L5 5" fill="none" stroke="#c3a177" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                {/* Bottom: Retention */}
                <g transform="translate(200, 360)">
                    <circle r="30" fill="#272727" stroke="#4a4a4a" strokeWidth="2" />
                    <rect x="-10" y="-10" width="20" height="20" rx="5" fill="none" stroke="#c3a177" strokeWidth="2" />
                </g>

                {/* Left: Content */}
                <g transform="translate(40, 200)">
                    <circle r="30" fill="#272727" stroke="#4a4a4a" strokeWidth="2" />
                    <path d="M-10 -5 L10 -5 M-10 0 L5 0 M-10 5 L10 5" fill="none" stroke="#c3a177" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </svg>

            {/* Floating Labels */}
            <div className="absolute top-0 text-[#c3a177] text-xs font-bold tracking-widest uppercase bg-[#272727] px-2 py-1 border border-[#c3a177]/30 rounded">Validation</div>
            <div className="absolute bottom-0 text-[#c3a177] text-xs font-bold tracking-widest uppercase bg-[#272727] px-2 py-1 border border-[#c3a177]/30 rounded">Retention</div>
            <div className="absolute left-0 -ml-4 text-[#c3a177] text-xs font-bold tracking-widest uppercase bg-[#272727] px-2 py-1 border border-[#c3a177]/30 rounded">Content</div>
            <div className="absolute right-0 -mr-4 text-[#c3a177] text-xs font-bold tracking-widest uppercase bg-[#272727] px-2 py-1 border border-[#c3a177]/30 rounded">Traffic</div>
        </div>
    );
};

// System & AI Ecosystem Graphic
const SystemEcosystemGraphic = () => (
    <div className="w-full h-full min-h-[400px] relative flex items-center justify-center">
        <svg viewBox="0 0 600 400" className="w-full h-full max-w-3xl drop-shadow-2xl">
            <defs>
                <linearGradient id="ecosystemGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c3a177" />
                    <stop offset="100%" stopColor="#ad8253" />
                </linearGradient>
            </defs>

            {/* Central AI Core */}
            <g transform="translate(300, 200)">
                <circle r="60" fill="#2a2a2a" stroke="#c3a177" strokeWidth="1" />
                <circle r="50" fill="url(#ecosystemGold)" opacity="0.1" className="animate-pulse" />
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">ROI CORE</text>
                <text x="0" y="25" textAnchor="middle" fill="#c3a177" fontSize="10" fontFamily="sans-serif">INTELLIGENCE</text>

                {/* Spinning Rings around Core */}
                <circle r="70" fill="none" stroke="#ad8253" strokeWidth="1" strokeDasharray="4 4" className="opacity-50 animate-[spin_20s_linear_infinite]" />
                <circle r="80" fill="none" stroke="#c3a177" strokeWidth="0.5" strokeDasharray="10 20" className="opacity-30 animate-[spin_15s_linear_infinite_reverse]" />
            </g>

            {/* Connection Lines */}
            <path d="M100 100 Q 300 100 300 140" fill="none" stroke="#444" strokeWidth="2" />
            <path d="M100 300 Q 300 300 300 260" fill="none" stroke="#444" strokeWidth="2" />
            <path d="M500 100 Q 300 100 300 140" fill="none" stroke="#444" strokeWidth="2" />
            <path d="M500 300 Q 300 300 300 260" fill="none" stroke="#444" strokeWidth="2" />

            {/* Data Packets Moving to Core */}
            <circle r="3" fill="#c3a177">
                <animateMotion dur="2s" repeatCount="indefinite" path="M100 100 Q 300 100 300 140" />
            </circle>
            <circle r="3" fill="#c3a177">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M100 300 Q 300 300 300 260" />
            </circle>
            <circle r="3" fill="#c3a177">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M500 100 Q 300 100 300 140" />
            </circle>
            <circle r="3" fill="#c3a177">
                <animateMotion dur="2.2s" repeatCount="indefinite" path="M500 300 Q 300 300 300 260" />
            </circle>

            {/* Node 1: Programmatic SEO */}
            <g transform="translate(100, 100)">
                <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#222" stroke="#c3a177" strokeWidth="2" />
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">SEO AI</text>
            </g>

            {/* Node 2: Cold Email */}
            <g transform="translate(100, 300)">
                <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#222" stroke="#c3a177" strokeWidth="2" />
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">EMAIL SYS</text>
            </g>

            {/* Node 3: Whatsapp Agents */}
            <g transform="translate(500, 100)">
                <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#222" stroke="#c3a177" strokeWidth="2" />
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">WA AGENTS</text>
            </g>

            {/* Node 4: Ads System */}
            <g transform="translate(500, 300)">
                <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#222" stroke="#c3a177" strokeWidth="2" />
                <text x="0" y="5" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">ADS MCP</text>
            </g>
        </svg>
    </div>
);

// Process Stage Component
interface ProcessStageProps {
    number: number;
    title: string;
    description: string;
    icon: React.ElementType;
    isActive: boolean;
    onClick: () => void;
}

const ProcessStage = ({ number, title, description, icon: Icon, isActive, onClick }: ProcessStageProps) => (
    <div
        onClick={onClick}
        className={`cursor-pointer group relative p-8 rounded-2xl border transition-all duration-500 ease-out overflow-hidden ${isActive
            ? "border-[#c3a177] bg-[#2a2a2a] shadow-[0_0_50px_rgba(195,161,119,0.1)]"
            : "border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10"
            }`}
    >
        {isActive && (
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c3a177] to-[#ad8253]" />
        )}
        <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg ${isActive ? "bg-gradient-to-br from-[#c3a177] to-[#ad8253] text-[#272727]" : "bg-[#333] text-gray-400 group-hover:text-white"}`}>
                <Icon size={24} />
            </div>
            <span className={`text-4xl font-bold opacity-10 ${isActive ? "text-[#c3a177]" : "text-gray-500"}`}>0{number}</span>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isActive ? "text-white" : "text-gray-300"}`}>{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

        <div className={`mt-6 flex items-center text-sm font-semibold uppercase tracking-wider ${isActive ? "text-[#c3a177]" : "text-gray-500 group-hover:text-gray-300"}`}>
            Explore Phase <ArrowRight size={16} className={`ml-2 transform transition-transform ${isActive ? "translate-x-1" : ""}`} />
        </div>
    </div>
);

export default function GrowthEngineeringPage() {
    const [activeStage, setActiveStage] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);

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
        setIsLoaded(true);

        const interval = setInterval(() => {
            setActiveStage(prev => prev === 4 ? 1 : prev + 1);
        }, 5000);

        return () => {
            lenis.destroy();
            clearInterval(interval);
        };
    }, []);

    const stages = [
        {
            id: 1,
            title: "Market Validation",
            icon: Search,
            description: "We deep-dive into your niche using data-driven audits to identify the exact levers that will drive growth, eliminating guesswork before a single dollar is spent."
        },
        {
            id: 2,
            title: "Traffic Ignition",
            icon: Rocket,
            description: "Deploying high-velocity paid and organic strategies. We construct the funnel infrastructure designed to capture high-intent leads at the lowest possible cost."
        },
        {
            id: 3,
            title: "Conversion Staging",
            icon: Layers,
            description: "Optimization of the user journey. We implement CRO (Conversion Rate Optimization) tactics to turn visitors into paying customers with precision."
        },
        {
            id: 4,
            title: "Scaling & Performance",
            icon: TrendingUp,
            description: "The machine runs on autopilot. We double down on winning creatives, expand to new channels, and maximize LTV (Lifetime Value) through retention."
        }
    ];

    return (
        <main className="relative min-h-screen bg-[#272727] text-white font-sans selection:bg-[#c3a177] selection:text-[#272727]">
            <style>{`
                @keyframes dash {
                    to { stroke-dashoffset: 0; }
                }
            `}</style>

            <Navigation />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 lg:pt-40 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#c3a177] rounded-full mix-blend-overlay filter blur-[128px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#ad8253] rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center px-3 py-1 rounded-full border border-[#c3a177]/30 bg-[#c3a177]/10 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#c3a177] animate-pulse mr-2"></span>
                                <span className="text-[#c3a177] text-xs font-bold tracking-widest uppercase">The Growth Engine v2.0</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                                Igniting <span className="gradient-gold-text">Revenue</span> Through Precision.
                            </h1>

                            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                                ClickSalesMedia isn&apos;t just an agency; we are a performance infrastructure. We build the engine that powers your brand&apos;s predictable, scalable growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <BookingButton
                                    text="Initialize Engine"
                                    source="growth-engineering-hero"
                                    variant="primary"
                                    className="whitespace-nowrap"
                                />
                                <a
                                    href="/case-studies"
                                    className="px-8 py-4 border border-white/10 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm"
                                >
                                    View Case Studies
                                </a>
                            </div>

                            {/* Stats Mini Grid */}
                            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                                <div>
                                    <h4 className="text-3xl font-bold text-white">240%</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Avg. ROI</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-white">$12M+</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Ad Spend Managed</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-white">50+</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Active Engines</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content: Animated SVG */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <GrowthEngineGraphic />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- PHILOSOPHY & SYSTEMS SECTION --- */}
            <section id="philosophy" className="py-24 bg-[#2a2a2a] relative overflow-hidden border-t border-[#333]">
                {/* Background Detail */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c3a177]/20 to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Visual: System Architecture */}
                        <div className="order-2 lg:order-1">
                            <SystemEcosystemGraphic />
                        </div>

                        {/* Content: Philosophy */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Our Philosophy: <br />
                                <span className="text-[#c3a177]">Systems</span> Replace Luck.
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                Modern growth isn&apos;t about guessing; it&apos;s about engineering. We deploy a proprietary stack of AI-driven systems and MCPs (Micro-Control Processors) that work 24/7 to optimize every touchpoint of your customer&apos;s journey.
                            </p>

                            <div className="grid grid-cols-1 gap-6">
                                {/* System 1: Programmatic SEO */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                    <div className="p-3 bg-gradient-to-br from-[#c3a177] to-[#ad8253] text-[#272727] rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Programmatic SEO AI</h3>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Dominate search volume by generating thousands of high-value, intent-based landing pages automatically.
                                        </p>
                                    </div>
                                </div>

                                {/* System 2: Cold Email & WhatsApp */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                    <div className="p-3 bg-gradient-to-br from-[#c3a177] to-[#ad8253] text-[#272727] rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Omnichannel Agents</h3>
                                        <p className="text-gray-400 text-sm mt-1">
                                            From Cold Email Systems to WhatsApp Agents, our AI nurtures leads 24/7, ensuring zero slippage.
                                        </p>
                                    </div>
                                </div>

                                {/* System 3: Ads Management & MCPs */}
                                <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                                    <div className="p-3 bg-gradient-to-br from-[#c3a177] to-[#ad8253] text-[#272727] rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                                        <Cpu size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">Algorithmic Ad Optimization</h3>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Our Ads Management System uses custom APIs and MCPs to adjust bids in real-time, maximizing <span className="text-[#c3a177]">ROAS</span> and cutting wasted spend.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- PROCESS STAGING SECTION --- */}
            <section id="process" className="py-24 bg-[#222]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The Staging Architecture</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our proprietary framework breaks down growth into four scientifically managed stages.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stages.map((stage) => (
                            <ProcessStage
                                key={stage.id}
                                number={stage.id}
                                title={stage.title}
                                description={stage.description}
                                icon={stage.icon}
                                isActive={activeStage === stage.id}
                                onClick={() => setActiveStage(stage.id)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PERFORMANCE DASHBOARD MOCKUP --- */}
            <section id="performance" className="py-24 relative overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#c3a177 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="lg:flex lg:items-center lg:space-x-16">

                        {/* Left: Text */}
                        <div className="lg:w-1/3 mb-12 lg:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time Performance Tracking</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                We believe in radical transparency. Our clients get access to live dashboards showing the pulse of their growth engine. No hidden metrics, just raw performance data.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Live CAC & LTV Calculation",
                                    "Cross-Channel Attribution",
                                    "Creative Performance Heatmaps",
                                    "Daily ROI Reporting"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-300">
                                        <CheckCircle2 className="text-[#c3a177] mr-3" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Dashboard Visual */}
                        <div className="lg:w-2/3">
                            <div className="rounded-xl bg-[#2a2a2a] border border-white/5 p-6 shadow-2xl relative">
                                {/* Decorative sheen */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c3a177] via-[#ad8253] to-[#c3a177]"></div>

                                {/* Dashboard Header */}
                                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Campaign Overview</h3>
                                        <p className="text-xs text-gray-500">Last 30 Days • Global Region</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>

                                {/* Dashboard Stats */}
                                <div className="grid grid-cols-3 gap-6 mb-8">
                                    <div className="bg-[#222] p-4 rounded-lg border border-white/5">
                                        <div className="text-gray-500 text-xs uppercase mb-1">Total Revenue</div>
                                        <div className="text-2xl font-bold text-white">$142,392</div>
                                        <div className="text-[#c3a177] text-xs mt-1 flex items-center">
                                            <TrendingUp size={12} className="mr-1" /> +12.5%
                                        </div>
                                    </div>
                                    <div className="bg-[#222] p-4 rounded-lg border border-white/5">
                                        <div className="text-gray-500 text-xs uppercase mb-1">Conversion Rate</div>
                                        <div className="text-2xl font-bold text-white">4.8%</div>
                                        <div className="text-[#c3a177] text-xs mt-1 flex items-center">
                                            <TrendingUp size={12} className="mr-1" /> +2.1%
                                        </div>
                                    </div>
                                    <div className="bg-[#222] p-4 rounded-lg border border-white/5">
                                        <div className="text-gray-500 text-xs uppercase mb-1">Cost Per Lead</div>
                                        <div className="text-2xl font-bold text-white">$18.42</div>
                                        <div className="text-green-500 text-xs mt-1 flex items-center">
                                            <ArrowRight size={12} className="mr-1 rotate-45" /> -5.3%
                                        </div>
                                    </div>
                                </div>

                                {/* Simulated Chart Bars */}
                                <div className="flex items-end space-x-4 h-48 pt-4 border-t border-white/5">
                                    {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                                        <div key={i} className="flex-1 flex flex-col justify-end group">
                                            <div
                                                className="w-full bg-[#333] hover:bg-[#c3a177] transition-all duration-300 rounded-t"
                                                style={{ height: `${h}%` }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <AboutCTA source="growth-engineering-cta" />

            <Footer />
        </main>
    );
}
