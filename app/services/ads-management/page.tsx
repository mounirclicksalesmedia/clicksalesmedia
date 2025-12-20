"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ServiceHeroVisual } from "@/components/services/ServiceHeroVisual";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceProcessVisual } from "@/components/services/ServiceProcessVisual";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AdsManagementPage() {
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

    // Ad Manager Mockup
    const AdManagerMockup = () => (
        <div className="relative mx-auto max-w-lg">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="border-b border-white/5 bg-[#272727] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {["G", "f", "in"].map((platform, i) => (
                                <div key={i} className="h-6 w-6 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[10px] font-bold text-white z-10">
                                    {platform}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm text-white">Consolidated View</span>
                    </div>
                    <span className="text-xs text-[#AD8253] bg-[#AD8253]/10 px-2 py-1 rounded">Last 30 Days</span>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {[
                            { label: "Spend", value: "$42.5K", trend: "flat", color: "text-white" },
                            { label: "Revenue", value: "$284.1K", trend: "up", color: "text-[#AD8253]" },
                            { label: "ROAS", value: "6.68x", trend: "up", color: "text-[#AD8253]" },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <p className="text-xs text-[#a1a1a1]">{stat.label}</p>
                                <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Visual Chart Area */}
                    <div className="relative h-32 w-full">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-px bg-white/5 w-full" />
                            ))}
                        </div>

                        {/* ROAS Line (Mock) */}
                        <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                            <path
                                d="M0,80 C50,80 100,70 150,50 C200,30 250,20 300,10"
                                fill="none"
                                stroke="#AD8253"
                                strokeWidth="3"
                            />
                            {/* Area under curve */}
                            <path
                                d="M0,80 C50,80 100,70 150,50 C200,30 250,20 300,10 L300,130 L0,130 Z"
                                fill="url(#gradient)"
                                opacity="0.2"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#AD8253" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Spend Line (Flat) */}
                        <div className="absolute top-[60%] left-0 right-0 border-t-2 border-dashed border-[#a1a1a1]/30" />
                        <span className="absolute right-0 top-[65%] text-[10px] text-[#a1a1a1]">Ad Spend (Stable)</span>
                    </div>
                </div>
            </div>
        </div>
    );

    // Platform Optimization Mockup
    const OptimizationMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="space-y-4">
                    {[
                        { platform: "Google Ads", status: "Scaling", change: "+15% Budget", icon: "G" },
                        { platform: "Facebook Ads", status: "Optimizing", change: "Testing Creatives", icon: "f" },
                        { platform: "LinkedIn", status: "Retargeting", change: "Audience Refined", icon: "in" },
                    ].map((p, i) => (
                        <div key={i} className="flex items-center gap-4 rounded-xl border border-white/5 bg-[#272727] p-3">
                            <div className="h-10 w-10 rounded-full bg-[#1a1a1a] flex items-center justify-center font-bold text-white border border-white/10">
                                {p.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                    <h4 className="text-sm font-medium text-white">{p.platform}</h4>
                                    <span className="text-xs text-[#AD8253] font-medium">{p.status}</span>
                                </div>
                                <p className="text-xs text-[#a1a1a1]">{p.change}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />

            <ServiceHeroVisual
                badge="Ads Management"
                title="Stop Burning Money. Start Scaling Revenue."
                description="Most agencies set it and forget it. We obsess over your campaigns daily. Multi-platform management optimized for ROAS, not just clicks."
                visual={<AdManagerMockup />}
                source="service-ads-management-hero"
            />

            <ServiceProblems
                title="The 'Black Box' Agency Problem"
                subtitle="You deserve to know where your money is going."
                items={[
                    {
                        problem: "Agencies that hide performance data",
                        solutionTitle: "100% Transparent Live Dashboards",
                        solutionDescription:
                            "We give you 24/7 access to the same dashboards we use. See every click, every dollar, and every lead in real-time.",
                    },
                    {
                        problem: "Scaling spend kills ROI",
                        solutionTitle: "Horizontal Scaling Strategy",
                        solutionDescription:
                            "We don't just dump budget into fading campaigns. We test new angels horizontally to scale spend without tanking your ROAS.",
                    },
                    {
                        problem: "Wasting budget on wrong audiences",
                        solutionTitle: "Negative Keyword Obsession",
                        solutionDescription:
                            "We aggressively manage negative keywords and audience exclusions to ensure you never pay for a bad click twice.",
                    },
                ]}
                source="service-ads-management-problems"
            />

            <ServiceProcessVisual
                title="Our Management Methodology"
                subtitle="Scientific optimization, every single day."
                steps={[
                    {
                        title: "Audit & Restructure",
                        subtitle: "Cleaning up the mess",
                        points: [
                            "Audit last 12 months of ad data.",
                            "Fix conversion tracking errors.",
                            "Restructure campaigns for SKAG (Single Keyword Ad Group) or alpha/beta structure.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white">Account Health Score</div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative h-16 w-16 rounded-full border-4 border-[#AD8253] flex items-center justify-center">
                                            <span className="text-xl font-bold text-white">42</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs text-red-400 mb-1">⚠️ Tracking Broken</p>
                                            <p className="text-xs text-red-400 mb-1">⚠️ Keywords Broad</p>
                                            <p className="text-xs text-red-400">⚠️ Low Quality Score</p>
                                        </div>
                                    </div>
                                    <div className="text-center text-xs text-[#a1a1a1]">Before Optimization</div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Creative Testing",
                        subtitle: "Feeding the algorithm",
                        points: [
                            "Launch 5-10 new creative variations weekly.",
                            "Test headers vs. lifestyle images vs. UGC.",
                            "Iterate on winning hooks quickly.",
                        ],
                        illustration: <OptimizationMockup />,
                    },
                    {
                        title: "Scale & Profit",
                        subtitle: "Turning up the volume",
                        points: [
                            "Increase budget on winning ad sets.",
                            "Expand into lookalike audiences.",
                            "Implement cross-channel retargeting.",
                        ],
                        illustration: <AdManagerMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Performance Guaranteed</h2>
                            <p className="text-[#a1a1a1]">
                                We don't just manage ads. We manage profitability.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "Daily", label: "Optimization" },
                                { value: "A/B", label: "Testing" },
                                { value: "24/7", label: "Dashboard" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-4xl font-bold text-[#AD8253] md:text-5xl">{stat.value}</p>
                                    <p className="text-sm text-[#a1a1a1]">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFAQ
                items={[
                    {
                        question: "What platforms do you manage?",
                        answer:
                            "We specialize in Google Ads (Search, Display, YouTube), Meta (Facebook & Instagram), and LinkedIn Ads. We focus where B2B decisions happen.",
                    },
                    {
                        question: "Do you charge a % of spend?",
                        answer:
                            "We typically charge a flat management fee up to a certain spend level, then a small percentage performance kicker to align our incentives with your growth.",
                    },
                    {
                        question: "How are you different from other agencies?",
                        answer:
                            "Most agencies assign you an account manager who checks your account once a week. Our team audits and optimizes daily, and we're obsessed with creative testing.",
                    },
                ]}
            />

            <AboutCTA source="service-ads-management-cta" />
            <Footer />
        </main>
    );
}
