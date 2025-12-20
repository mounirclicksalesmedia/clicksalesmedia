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
import { AnalyticsMockup } from "@/components/services/ServiceMockups";

export default function AnalyticsPage() {
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

    // Dashboard Mockup
    const DashboardMockup = () => (
        <div className="relative mx-auto max-w-lg">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="border-b border-white/5 bg-[#272727] px-4 py-3 flex items-center justify-between">
                    <span className="text-sm text-white">Revenue Dashboard</span>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#AD8253] animate-pulse" />
                        <span className="text-xs text-[#AD8253]">Live</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    {/* Top Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                        {[
                            { label: "Revenue", value: "$847K", change: "+23%" },
                            { label: "Ad Spend", value: "$124K", change: "-8%" },
                            { label: "ROAS", value: "6.8x", change: "+31%" },
                        ].map((stat, i) => (
                            <div key={i} className="rounded-lg border border-white/5 bg-[#272727] p-3">
                                <p className="text-xs text-[#a1a1a1] mb-1">{stat.label}</p>
                                <p className="text-xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-[#AD8253]">{stat.change}</p>
                            </div>
                        ))}
                    </div>

                    {/* Chart */}
                    <div className="rounded-lg border border-white/5 bg-[#272727] p-4 mb-4">
                        <div className="flex items-end justify-between gap-1 h-20">
                            {[40, 55, 45, 70, 65, 85, 80, 95, 90, 100, 95, 110].map((height, i) => (
                                <div key={i} className="flex-1">
                                    <div
                                        className="w-full rounded-t bg-gradient-to-t from-[#AD8253] to-[#c3a177]"
                                        style={{ height: `${height * 0.7}%` }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Attribution */}
                    <div className="space-y-2">
                        <p className="text-xs text-[#a1a1a1]">Channel Attribution</p>
                        {[
                            { channel: "Google Ads", value: 42 },
                            { channel: "LinkedIn", value: 28 },
                            { channel: "Direct", value: 18 },
                            { channel: "Organic", value: 12 },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="text-xs text-white w-20">{item.channel}</span>
                                <div className="flex-1 h-2 rounded-full bg-white/5">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-[#AD8253] to-[#c3a177]"
                                        style={{ width: `${item.value}%` }}
                                    />
                                </div>
                                <span className="text-xs text-[#AD8253] w-8">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    // Server-Side Tracking Mockup
    const TrackingMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-[#AD8253]/20 flex items-center justify-center">⚡</div>
                    <span className="text-sm text-white">Server-Side Tracking</span>
                </div>

                <div className="space-y-3">
                    {[
                        { event: "Purchase", count: "2,340", status: "synced" },
                        { event: "Lead Form", count: "1,892", status: "synced" },
                        { event: "Page View", count: "45,230", status: "synced" },
                    ].map((event, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#272727] p-3">
                            <div className="h-8 w-8 rounded bg-[#AD8253]/10 flex items-center justify-center text-[#AD8253]">
                                ✓
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-white">{event.event}</p>
                                <p className="text-xs text-[#a1a1a1]">{event.count} events</p>
                            </div>
                            <span className="rounded-full bg-[#AD8253]/10 px-2 py-1 text-xs text-[#AD8253]">
                                Synced
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-4 rounded-lg border border-[#AD8253]/20 bg-[#AD8253]/10 p-3 text-center">
                    <p className="text-xs text-[#AD8253]">Bypassing iOS 14+ restrictions ✓</p>
                </div>
            </div>
        </div>
    );

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />

            <ServiceHeroVisual
                badge="Revenue Analytics & Server-Side Tracking"
                title="Know Exactly Where Your Revenue Comes From"
                description="Marketing without data is just guessing. We implement end-to-end revenue tracking so you know exactly which dollar drove which deal."
                visual={<DashboardMockup />}
                source="service-revenue-analytics-hero"
            />

            <ServiceProblems
                title="Stop Flying Blind on Your Ad Spend"
                subtitle="Get crystal-clear attribution and ROI tracking."
                items={[
                    {
                        problem: "iOS updates broke your tracking",
                        solutionTitle: "Server-side tracking that can't be blocked",
                        solutionDescription:
                            "We implement Conversions API (CAPI) for Meta, enhanced conversions for Google—bypassing browser restrictions entirely.",
                    },
                    {
                        problem: "Don't know which ads actually drive revenue",
                        solutionTitle: "Multi-touch attribution modeling",
                        solutionDescription:
                            "See which channels contributed to a sale across the entire journey, not just the last click. Allocate budget with confidence.",
                    },
                    {
                        problem: "Reporting takes hours of manual work",
                        solutionTitle: "Automated live dashboards",
                        solutionDescription:
                            "Get a single dashboard that shows true ROI by channel, campaign, and keyword. No more spreadsheet hell.",
                    },
                ]}
                source="service-revenue-analytics-problems"
            />

            <ServiceProcessVisual
                title="Building Your Data Intelligence Layer"
                subtitle="From messy tracking to crystal-clear insights."
                steps={[
                    {
                        title: "Tagging Plan",
                        subtitle: "Defining what to measure",
                        points: [
                            "Identify every event that matters: clicks, scrolls, form submits, purchases.",
                            "Create a comprehensive measurement plan.",
                            "Define KPIs and success metrics.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white">Event Tracking Plan</div>
                                    <div className="space-y-2">
                                        {["Page Views", "Button Clicks", "Form Submissions", "Purchases", "Custom Events"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 rounded border border-white/5 bg-[#272727] p-2">
                                                <div className="h-4 w-4 rounded-full border-2 border-[#AD8253] flex items-center justify-center">
                                                    <div className="h-2 w-2 rounded-full bg-[#AD8253]" />
                                                </div>
                                                <span className="text-xs text-[#a1a1a1]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "GTM & CAPI Implementation",
                        subtitle: "Technical setup",
                        points: [
                            "Deploy Google Tag Manager with server-side containers.",
                            "Implement Meta Conversions API (CAPI).",
                            "Set up Google Ads enhanced conversions.",
                        ],
                        illustration: <TrackingMockup />,
                    },
                    {
                        title: "Dashboard & Reporting",
                        subtitle: "Visualizing your data",
                        points: [
                            "Build custom Looker Studio dashboards.",
                            "Set up automated weekly/monthly reports.",
                            "Train your team on reading and using the data.",
                        ],
                        illustration: <AnalyticsMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Data You Can Trust</h2>
                            <p className="text-[#a1a1a1]">
                                Join companies making decisions based on accurate data.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "100%", label: "Data Accuracy" },
                                { value: "Live", label: "Dashboards" },
                                { value: "CAPI", label: "Integrated" },
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
                        question: "Why is server-side tracking better?",
                        answer:
                            "Browser-side pixels can be blocked by ad blockers and Apple's ITP. Server-side sends data directly from your server to the ad platform—immune to blocking.",
                    },
                    {
                        question: "Do you work with GA4?",
                        answer:
                            "Yes, we are GA4 experts and can set up advanced e-commerce tracking, custom dimensions, and proper event configuration.",
                    },
                    {
                        question: "How long does implementation take?",
                        answer:
                            "Most implementations take 2-4 weeks depending on complexity. You'll have accurate tracking and live dashboards before the end of the month.",
                    },
                ]}
            />

            <AboutCTA source="service-revenue-analytics-cta" />
            <Footer />
        </main>
    );
}
