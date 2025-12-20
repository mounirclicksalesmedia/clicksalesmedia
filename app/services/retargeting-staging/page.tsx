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

export default function RetargetingPage() {
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

    // Retargeting Map Mockup
    const RetargetingMapMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl p-6">
                <div className="flex justify-center items-center mb-8 relative">
                    {/* Central User */}
                    <div className="relative z-10">
                        <div className="h-16 w-16 rounded-full bg-[#272727] border-2 border-white/20 flex items-center justify-center">
                            <span className="text-2xl">👤</span>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-white bg-[#AD8253] px-2 rounded-full whitespace-nowrap">
                            Target Prospect
                        </div>
                    </div>

                    {/* Surrounding Ads */}
                    {[
                        { pos: "top-[-60px] left-[50%] -translate-x-1/2", icon: "G", label: "News Site" },
                        { pos: "right-[-40px] top-[50%] -translate-y-1/2", icon: "f", label: "Social Feed" },
                        { pos: "bottom-[-60px] left-[50%] -translate-x-1/2", icon: "▶️", label: "YouTube" },
                        { pos: "left-[-40px] top-[50%] -translate-y-1/2", icon: "in", label: "LinkedIn" },
                    ].map((ad, i) => (
                        <div key={i} className={`absolute ${ad.pos} flex flex-col items-center animate-pulse`} style={{ animationDelay: `${i * 0.5}s` }}>
                            <div className="h-10 w-16 rounded border border-[#AD8253] bg-[#AD8253]/10 flex items-center justify-center mb-1">
                                <span className="text-xs font-bold text-[#AD8253]">AD</span>
                            </div>
                            <span className="text-[10px] text-[#a1a1a1]">{ad.label}</span>

                            {/* Connector Line */}
                            <div className="absolute top-1/2 left-1/2 h-px w-10 bg-[#AD8253]/30 -z-10 origin-left" style={{
                                transform: i === 0 ? "rotate(90deg) translate(20px, 0)" :
                                    i === 1 ? "rotate(180deg) translate(20px, 0)" :
                                        i === 2 ? "rotate(-90deg) translate(20px, 0)" :
                                            "translate(20px, 0)"
                            }} />
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs text-[#a1a1a1] mt-8">
                    "I see you guys everywhere." - Your Prospects
                </p>
            </div>
        </div>
    );

    // Audience Staging Mockup
    const AudienceStagingMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 text-sm text-white">Audience Segmentation</div>
                <div className="space-y-4">
                    {[
                        { name: "Cold Awareness", size: "2.4M", color: "bg-blue-500", desc: "Never heard of you" },
                        { name: "Warm Engage", size: "45K", color: "bg-yellow-500", desc: "Visited site / Watched video" },
                        { name: "Hot Intent", size: "2.8K", color: "bg-red-500", desc: "Visited pricing / Add to cart" },
                    ].map((stage, i) => (
                        <div key={i} className="relative overflow-hidden rounded-lg border border-white/5 bg-[#272727] p-3">
                            <div className="flex justify-between items-center relative z-10">
                                <div>
                                    <h4 className="text-sm font-medium text-white">{stage.name}</h4>
                                    <p className="text-xs text-[#a1a1a1]">{stage.desc}</p>
                                </div>
                                <span className="text-xs font-bold text-white bg-white/10 px-2 py-1 rounded">{stage.size}</span>
                            </div>
                            <div className={`absolute top-0 left-0 bottom-0 w-1 ${stage.color}`} />
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between text-xs">
                    <span className="text-[#a1a1a1]">Ad Spend Allocation</span>
                    <span className="text-[#AD8253]">70% / 20% / 10%</span>
                </div>
            </div>
        </div>
    );

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />

            <ServiceHeroVisual
                badge="Advanced Retargeting & Staging"
                title="Turn 'Maybe' Into 'Yes'"
                description="98% of visitors won't buy on the first visit. We build advanced retargeting architectures that stage audiences by intent and nurture them until they convert."
                visual={<RetargetingMapMockup />}
                source="service-retargeting-staging-hero"
            />

            <ServiceProblems
                title="Leaking Traffic is Leaking Revenue"
                subtitle="Don't pay for the click and lose the customer."
                items={[
                    {
                        problem: "Visitors leave and never come back",
                        solutionTitle: "Omnipresent retargeting",
                        solutionDescription:
                            "We re-engage them on Facebook, Instagram, LinkedIn, and Display networks. You stay top-of-mind for pennies on the dollar.",
                    },
                    {
                        problem: "Showing the same ad to everyone",
                        solutionTitle: "Intent-based sequencing",
                        solutionDescription:
                            "We don't show generic ads. We show specific case studies to people who visited your pricing page, and educational content to cold traffic.",
                    },
                    {
                        problem: "Ad fatigue and banner blindness",
                        solutionTitle: "Dynamic creative rotation",
                        solutionDescription:
                            "We rotate creatives and messages automatically so your brand never feels stale or annoying.",
                    },
                ]}
                source="service-retargeting-staging-problems"
            />

            <ServiceProcessVisual
                title="The Retargeting Architecture"
                subtitle="How we structure your follow-up machine."
                steps={[
                    {
                        title: "Audience Segmentation",
                        subtitle: "Defining the buckets",
                        points: [
                            "Create audiences based on time-on-site and page depth.",
                            "Segment by specific service pages visited.",
                            "Exclude existing customers instantly.",
                        ],
                        illustration: <AudienceStagingMockup />,
                    },
                    {
                        title: "Creative Mapping",
                        subtitle: "Matching message to mindset",
                        points: [
                            "Cold Traffic: Educational content & value props.",
                            "Warm Traffic: Social proof & case studies.",
                            "Hot Traffic: Irresistible offers & guarantees.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                                        <div className="p-2 rounded bg-blue-500/10 border border-blue-500/30 text-blue-200">
                                            Video Ad
                                            <br />(Value)
                                        </div>
                                        <div className="p-2 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-200">
                                            Image Ad
                                            <br />(Proof)
                                        </div>
                                        <div className="p-2 rounded bg-red-500/10 border border-red-500/30 text-red-200">
                                            Text Ad
                                            <br />(Offer)
                                        </div>
                                    </div>
                                    <div className="mt-2 h-1 w-full bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 rounded-full opacity-50" />
                                    <div className="flex justify-between text-[10px] text-[#a1a1a1] mt-1">
                                        <span>Awareness</span>
                                        <span>Conversion</span>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Launch & Rotate",
                        subtitle: "Keeping it fresh",
                        points: [
                            "Launch campaigns with frequency caps.",
                            "Monitor frequency to avoid annoyance.",
                            "Refresh creative assets every 2-3 weeks.",
                        ],
                        illustration: <RetargetingMapMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">The ROI of Return Visits</h2>
                            <p className="text-[#a1a1a1]">
                                Retargeted visitors are 70% more likely to convert.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "70%", label: "Likely to Buy" },
                                { value: "10x", label: "CTR Increase" },
                                { value: "Cheap", label: "Impressions" },
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
                        question: "Isn't retargeting annoying?",
                        answer:
                            "Only if done wrong. We use frequency caps (limited views per person) and burn pixels (stop showing ads after purchase) to ensure a respectful experience.",
                    },
                    {
                        question: "Does it work for B2B?",
                        answer:
                            "Absolutely. B2B sales cycles are long. Retargeting keeps your solution top-of-mind during the weeks or months of decision-making.",
                    },
                    {
                        question: "What budget do I need?",
                        answer:
                            "Retargeting is very efficient because the audience is small. You can often run a comprehensive retargeting campaign for a fraction of your main ad budget.",
                    },
                ]}
            />

            <AboutCTA source="service-retargeting-staging-cta" />
            <Footer />
        </main>
    );
}
