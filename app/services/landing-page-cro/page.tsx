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

export default function LandingPageCROPage() {
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

    // Landing Page Mockup
    const LandingPageMockup = () => (
        <div className="relative mx-auto max-w-sm">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl overflow-hidden">
                {/* No Nav - Intentional */}
                <div className="p-6">
                    {/* Hero */}
                    <div className="mb-4 text-center">
                        <div className="h-6 w-48 mx-auto rounded bg-white/20 mb-2" />
                        <div className="h-3 w-32 mx-auto rounded bg-white/10" />
                    </div>

                    {/* Form */}
                    <div className="rounded-xl border border-[#AD8253]/30 bg-[#272727] p-4 mb-4">
                        <div className="space-y-2 mb-3">
                            <div className="h-8 rounded bg-[#1a1a1a]" />
                            <div className="h-8 rounded bg-[#1a1a1a]" />
                            <div className="h-8 rounded bg-[#1a1a1a]" />
                        </div>
                        <div className="h-10 rounded-lg bg-gradient-to-r from-[#AD8253] to-[#c3a177]" />
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-6 w-6 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-br from-[#AD8253] to-[#c3a177]" />
                            ))}
                        </div>
                        <span className="text-xs text-[#a1a1a1]">500+ leads this month</span>
                    </div>
                </div>
            </div>

            {/* Conversion Badge */}
            <div className="absolute -right-4 -top-4 rounded-lg bg-[#AD8253] px-3 py-2 text-center shadow-lg">
                <p className="text-xl font-bold text-white">12%</p>
                <p className="text-xs text-white/80">Conv Rate</p>
            </div>
        </div>
    );

    // A/B Test Mockup
    const ABTestMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-white">A/B Test Results</span>
                    <span className="text-xs text-[#AD8253]">Winner Found!</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {[
                        { variant: "Control A", rate: "4.2%", status: "loser" },
                        { variant: "Variant B", rate: "8.7%", status: "winner" },
                    ].map((test, i) => (
                        <div key={i} className={`rounded-lg border p-4 text-center ${test.status === "winner" ? "border-[#AD8253] bg-[#AD8253]/10" : "border-white/5 bg-[#272727]"
                            }`}>
                            <p className="text-xs text-[#a1a1a1] mb-2">{test.variant}</p>
                            <p className={`text-3xl font-bold ${test.status === "winner" ? "text-[#AD8253]" : "text-white"}`}>
                                {test.rate}
                            </p>
                            {test.status === "winner" && (
                                <span className="mt-2 inline-block rounded-full bg-[#AD8253] px-2 py-1 text-xs text-white">
                                    +107% lift
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#a1a1a1]">
                    <span>Statistical significance: 95%</span>
                    <span>4,200 visitors tested</span>
                </div>
            </div>
        </div>
    );

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />

            <ServiceHeroVisual
                badge="Landing Page Logic & CRO"
                title="Turn Clicks Into Conversions"
                description="Traffic is expensive. Clicks are wasted without conversion. We build dedicated, single-focus landing pages and A/B test them to squeeze maximum efficiency from every visitor."
                visual={<LandingPageMockup />}
                source="service-landing-page-cro-hero"
            />

            <ServiceProblems
                title="Stop Wasting Your Ad Spend"
                subtitle="Every unconverted visitor is money down the drain."
                items={[
                    {
                        problem: "High traffic but terrible conversion rates",
                        solutionTitle: "Single-focus landing pages that convert",
                        solutionDescription:
                            "We remove navigation, distractions, and competing CTAs. One page, one goal: submit the form.",
                    },
                    {
                        problem: "Don't know why visitors aren't converting",
                        solutionTitle: "Heatmap and behavior analysis",
                        solutionDescription:
                            "We analyze exactly where visitors drop off, what they click, and how far they scroll. Then we fix it.",
                    },
                    {
                        problem: "Making changes based on gut feeling",
                        solutionTitle: "Data-driven A/B testing",
                        solutionDescription:
                            "We test headline A vs B, form length C vs D, and find the mathematically winning combination. No guessing.",
                    },
                ]}
                source="service-landing-page-cro-problems"
            />

            <ServiceProcessVisual
                title="The Optimization Cycle"
                subtitle="Continuous improvement through scientific testing."
                steps={[
                    {
                        title: "Hypothesis Formation",
                        subtitle: "Understanding the problem",
                        points: [
                            "Analyze heatmaps and session recordings.",
                            "Identify drop-off points and friction.",
                            "Form specific hypotheses about what to change.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white">Heatmap Analysis</div>
                                    <div className="aspect-[4/5] rounded-lg bg-gradient-to-b from-red-500/30 via-yellow-500/20 to-green-500/10 relative">
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 rounded bg-red-500/50" />
                                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-32 h-4 rounded bg-orange-500/40" />
                                        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-20 h-8 rounded bg-yellow-500/30" />
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Design Variant",
                        subtitle: "Creating the challenger",
                        points: [
                            "Design a new version with specific changes.",
                            "Focus on one variable at a time for clear results.",
                            "Ensure technical parity between versions.",
                        ],
                        illustration: <LandingPageMockup />,
                    },
                    {
                        title: "Run Experiment",
                        subtitle: "Splitting traffic scientifically",
                        points: [
                            "Split traffic 50/50 between control and variant.",
                            "Run until statistical significance (usually 2-4 weeks).",
                            "Monitor for any technical issues or anomalies.",
                        ],
                        illustration: <ABTestMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Convert More, Spend Less</h2>
                            <p className="text-[#a1a1a1]">
                                Join companies doubling their conversion rates.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "2x", label: "Avg Conv Lift" },
                                { value: "50%", label: "Lower CPL" },
                                { value: "A/B", label: "Tested" },
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
                        question: "Do I need a new website for landing pages?",
                        answer:
                            "No, landing pages live separately (e.g., offer.yourdomain.com) and are specifically designed for ad traffic. Your main website stays unchanged.",
                    },
                    {
                        question: "What tools do you use?",
                        answer:
                            "We use Instapage, Unbounce, or custom Next.js builds depending on your needs and existing tech stack.",
                    },
                    {
                        question: "How long until I see results?",
                        answer:
                            "You'll have an optimized landing page live within 2 weeks. A/B test results typically show statistical significance within 2-4 weeks of running traffic.",
                    },
                ]}
            />

            <AboutCTA source="service-landing-page-cro-cta" />
            <Footer />
        </main>
    );
}
