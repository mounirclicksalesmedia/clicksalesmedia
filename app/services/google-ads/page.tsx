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
import { GoogleAdsMockup, AnalyticsMockup } from "@/components/services/ServiceMockups";

export default function GoogleAdsPage() {
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

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />

            <ServiceHeroVisual
                badge="Google Ads Performance"
                title="Capture High-Intent Leads With Google Ads"
                description="Dominate search results when your customers are actively looking for a solution. We build precision-targeted campaigns that convert clicks into revenue."
                visual={<GoogleAdsMockup />}
            />

            <ServiceProblems
                title="Maximize Your Ad Spend ROI"
                subtitle="Stop wasting budget on campaigns that don't convert."
                items={[
                    {
                        problem: "High cost per click with poor conversion rates",
                        solutionTitle: "Target high-intent keywords that convert",
                        solutionDescription:
                            "We identify and target search terms where users are ready to buy, filtering out expensive 'tire kickers' and focusing your budget on profitable keywords.",
                    },
                    {
                        problem: "Ads not showing for your target audience",
                        solutionTitle: "Dominate impression share for your best keywords",
                        solutionDescription:
                            "We optimize quality scores and bidding strategies to ensure your ads appear at the top when your ideal customers are searching.",
                    },
                    {
                        problem: "Can't track which ads actually drive revenue",
                        solutionTitle: "Full conversion tracking and attribution",
                        solutionDescription:
                            "We implement server-side tracking to capture every conversion, giving you crystal-clear ROI data that shows which keywords and ads generate revenue.",
                    },
                ]}
            />

            <ServiceProcessVisual
                title="Our Google Ads Methodology"
                subtitle="A scientific approach to paid search domination."
                steps={[
                    {
                        title: "Keyword & Intent Analysis",
                        subtitle: "Finding the money keywords",
                        points: [
                            "We analyze search intent to separate high-value keywords from waste.",
                            "Identify long-tail opportunities with lower CPC and higher conversion rates.",
                            "Build negative keyword lists to eliminate junk traffic.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AD8253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.3-4.3" />
                                        </svg>
                                        <span className="text-sm text-white">Keyword Research</span>
                                    </div>
                                    <div className="space-y-2">
                                        {["High Intent", "Commercial", "Branded"].map((label, i) => (
                                            <div key={i} className="flex items-center justify-between rounded border border-white/5 bg-[#272727] p-3">
                                                <span className="text-xs text-[#a1a1a1]">{label}</span>
                                                <div className="flex items-center gap-2">
                                                    <div className="h-2 w-16 rounded-full bg-gradient-to-r from-[#AD8253] to-[#c3a177]" />
                                                    <span className="text-xs font-bold text-[#AD8253]">{90 - i * 15}%</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Campaign Architecture",
                        subtitle: "Building the foundation for scale",
                        points: [
                            "Create granular ad groups for maximum relevance and Quality Score.",
                            "Write compelling ad copy that matches search intent perfectly.",
                            "Design high-converting landing pages for each campaign.",
                        ],
                        illustration: <GoogleAdsMockup />,
                    },
                    {
                        title: "Launch & Optimization",
                        subtitle: "Daily bid management and testing",
                        points: [
                            "Daily monitoring of bid adjustments and budget allocation.",
                            "A/B testing ad copy, headlines, and landing page elements.",
                            "Continuous negative keyword mining to eliminate waste.",
                        ],
                        illustration: <AnalyticsMockup />,
                    },
                    {
                        title: "Scale & Dominate",
                        subtitle: "Aggressive growth once profitable",
                        points: [
                            "Expand to new keyword opportunities while maintaining CPA targets.",
                            "Increase budget allocation to top-performing campaigns.",
                            "Launch remarketing campaigns to recapture lost traffic.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-center">
                                        <p className="text-sm text-[#a1a1a1]">Monthly Growth</p>
                                    </div>
                                    <div className="flex items-end justify-between gap-2">
                                        {[30, 45, 55, 70, 85, 100].map((height, i) => (
                                            <div key={i} className="flex flex-1 flex-col items-center gap-1">
                                                <div
                                                    className="w-full rounded-t bg-gradient-to-t from-[#AD8253] to-[#c3a177]"
                                                    style={{ height: `${height}px` }}
                                                />
                                                <span className="text-xs text-[#a1a1a1]">M{i + 1}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 rounded-lg border border-white/5 bg-[#272727] p-3 text-center">
                                        <p className="text-2xl font-bold text-[#AD8253]">+230%</p>
                                        <p className="text-xs text-[#a1a1a1]">Revenue Growth</p>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Dominate Google?</h2>
                            <p className="text-[#a1a1a1]">
                                Join hundreds of companies scaling profitably with Google Ads.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "300%", label: "Avg ROAS" },
                                { value: "40%", label: "Lower CPL" },
                                { value: "98%", label: "Quality Score" },
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
                        question: "Why hire an agency instead of doing it myself?",
                        answer:
                            "Google Ads is complex. One wrong setting can waste thousands. We bring expert strategists, copywriters, and designers to ensure every dollar generates a return.",
                    },
                    {
                        question: "What is the minimum budget required?",
                        answer:
                            "We typically recommend a minimum ad spend of $1,500/month to gather enough data for meaningful optimization, but this varies by industry.",
                    },
                    {
                        question: "Do you own the ad account?",
                        answer:
                            "No, you always retain full ownership of your Google Ads account and data. We operate as a partner with access to manage it.",
                    },
                ]}
            />

            <AboutCTA />
            <Footer />
        </main>
    );
}
