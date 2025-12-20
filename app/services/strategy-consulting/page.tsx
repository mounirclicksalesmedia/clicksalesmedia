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

export default function StrategyPage() {
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

    // Strategy Deck Mockup
    const StrategyDeckMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl overflow-hidden">
                {/* Presentation Header */}
                <div className="border-b border-white/5 bg-[#272727] px-4 py-3 flex items-center gap-3">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-[#AD8253] to-[#c3a177]" />
                    <span className="text-sm text-white">Growth Strategy 2024</span>
                </div>

                {/* Slide Content */}
                <div className="p-6">
                    <div className="mb-6">
                        <div className="h-4 w-48 rounded bg-white/20 mb-2" />
                        <div className="h-2 w-32 rounded bg-white/10" />
                    </div>

                    {/* Chart */}
                    <div className="mb-6 rounded-lg border border-white/5 bg-[#272727] p-4">
                        <div className="flex items-end justify-between gap-2 h-24">
                            {[30, 45, 40, 60, 55, 80, 75, 100].map((height, i) => (
                                <div key={i} className="flex-1">
                                    <div
                                        className="w-full rounded-t bg-gradient-to-t from-[#AD8253] to-[#c3a177]"
                                        style={{ height: `${height}%` }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { label: "TAM", value: "$4.2B" },
                            { label: "Target", value: "0.5%" },
                            { label: "Revenue", value: "$21M" },
                        ].map((stat, i) => (
                            <div key={i} className="rounded bg-[#272727] p-2 text-center">
                                <p className="text-lg font-bold text-[#AD8253]">{stat.value}</p>
                                <p className="text-xs text-[#a1a1a1]">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pages indicator */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#272727] border border-white/10 px-3 py-1 text-xs text-[#a1a1a1]">
                50+ Pages
            </div>
        </div>
    );

    // Competitor Intel Mockup
    const CompetitorMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-white">Competitor Intelligence</span>
                    <span className="text-xs text-[#AD8253]">Live Data</span>
                </div>

                <div className="space-y-3">
                    {[
                        { name: "Competitor A", spend: "$45K/mo", share: 35 },
                        { name: "Competitor B", spend: "$32K/mo", share: 28 },
                        { name: "Your Company", spend: "$18K/mo", share: 15, highlight: true },
                        { name: "Others", spend: "$25K/mo", share: 22 },
                    ].map((comp, i) => (
                        <div key={i} className={`rounded-lg border p-3 ${comp.highlight ? "border-[#AD8253]/50 bg-[#AD8253]/10" : "border-white/5 bg-[#272727]"
                            }`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className={`text-sm ${comp.highlight ? "text-[#AD8253]" : "text-white"}`}>{comp.name}</span>
                                <span className="text-xs text-[#a1a1a1]">{comp.spend}</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/5">
                                <div
                                    className={`h-full rounded-full ${comp.highlight ? "bg-[#AD8253]" : "bg-white/20"}`}
                                    style={{ width: `${comp.share}%` }}
                                />
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
                badge="Market Penetration & Strategy Consulting"
                title="Your Fractional CMO for Explosive Growth"
                description="We don't just sell services. We act as your fractional CMO and Growth Team, auditing your entire funnel to find and fix the revenue leaks."
                visual={<StrategyDeckMockup />}
                source="service-strategy-consulting-hero"
            />

            <ServiceProblems
                title="Strategy Before Tactics"
                subtitle="Don't waste budget on campaigns without a plan."
                items={[
                    {
                        problem: "Spending on ads without a clear growth strategy",
                        solutionTitle: "Complete go-to-market roadmap",
                        solutionDescription:
                            "We build a comprehensive 6-12 month plan covering channels, budgets, messaging, and milestones. Every dollar has a purpose.",
                    },
                    {
                        problem: "Don't understand your competitive landscape",
                        solutionTitle: "Deep competitor intelligence",
                        solutionDescription:
                            "We disassemble your competitors' funnels to see exactly what they spend, where, and what's working. Then we outmaneuver them.",
                    },
                    {
                        problem: "Your offer doesn't stand out in the market",
                        solutionTitle: "Irresistible offer engineering",
                        solutionDescription:
                            "We align your sales and marketing teams on a unified revenue goal, SLA, and tech stack.",
                    },
                ]}
                source="service-strategy-consulting-problems"
            />

            <ServiceProcessVisual
                title="How Strategy Engagements Work"
                subtitle="From workshop to war plan."
                steps={[
                    {
                        title: "Deep Dive Workshop",
                        subtitle: "Understanding your business",
                        points: [
                            "4-hour intensive session to unpack your business model.",
                            "Review current marketing efforts and results.",
                            "Define goals, constraints, and growth targets.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="h-8 w-8 rounded bg-[#AD8253]/20 flex items-center justify-center">📋</div>
                                        <span className="text-sm text-white">Workshop Agenda</span>
                                    </div>
                                    <div className="space-y-2">
                                        {["Business Model Review", "Current State Analysis", "Goal Setting", "Resource Assessment"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 rounded border border-white/5 bg-[#272727] p-2">
                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#AD8253] text-xs text-white">
                                                    {i + 1}
                                                </span>
                                                <span className="text-xs text-[#a1a1a1]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Research Phase",
                        subtitle: "Gathering market intelligence",
                        points: [
                            "2-week deep dive into your market and competitors.",
                            "TAM/SAM/SOM analysis.",
                            "Competitor ad spend and creative analysis.",
                        ],
                        illustration: <CompetitorMockup />,
                    },
                    {
                        title: "Strategy Presentation",
                        subtitle: "Delivering your growth blueprint",
                        points: [
                            "50+ page deck with detailed recommendations.",
                            "Channel-by-channel budget allocation.",
                            "Messaging frameworks and positioning.",
                        ],
                        illustration: <StrategyDeckMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Strategy That Wins</h2>
                            <p className="text-[#a1a1a1]">
                                Join companies that planned their growth before executing.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "50+", label: "Page Strategy" },
                                { value: "12mo", label: "Roadmap" },
                                { value: "CMO", label: "Level Insight" },
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
                        question: "Is this for startups or enterprises?",
                        answer:
                            "Both. We work with funded startups looking to scale efficiently and established enterprises pivoting or entering new markets.",
                    },
                    {
                        question: "Do you execute the plan too?",
                        answer:
                            "This specific service is pure strategy. However, we can execute the plan through our other services—or hand it off to your internal team.",
                    },
                    {
                        question: "How much does strategy consulting cost?",
                        answer:
                            "Strategy engagements start at $15,000 for a complete go-to-market blueprint. Contact us for a custom quote based on your scope.",
                    },
                ]}
            />

            <AboutCTA source="service-strategy-consulting-cta" />
            <Footer />
        </main>
    );
}
