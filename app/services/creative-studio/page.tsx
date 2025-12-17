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

export default function CreativeStudioPage() {
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

    // Ad Creative Mockup
    const AdCreativeMockup = () => (
        <div className="relative mx-auto max-w-sm">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl overflow-hidden">
                {/* Video Ad Preview */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-[#272727] to-[#1a1a1a]">
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-[#AD8253]/90 flex items-center justify-center shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </div>
                    </div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="space-y-2">
                            <div className="h-3 w-3/4 rounded bg-white/80" />
                            <div className="h-2 w-1/2 rounded bg-white/40" />
                        </div>
                    </div>

                    {/* Platform Badge */}
                    <div className="absolute top-3 right-3 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
                        TikTok
                    </div>
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between p-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <span className="text-[#a1a1a1]">❤️</span>
                        <span className="text-xs text-white">24.5K</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#a1a1a1]">💬</span>
                        <span className="text-xs text-white">1.2K</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#a1a1a1]">↗️</span>
                        <span className="text-xs text-white">8.4K</span>
                    </div>
                </div>
            </div>

            {/* CTR Badge */}
            <div className="absolute -right-4 -top-4 rounded-full bg-[#AD8253] px-3 py-1 text-xs font-bold text-white shadow-lg">
                4.2% CTR
            </div>
        </div>
    );

    // Static Ad Grid Mockup
    const StaticAdsMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="grid grid-cols-2 gap-3">
                {[
                    { ratio: "1:1", platform: "LinkedIn" },
                    { ratio: "4:5", platform: "Meta" },
                    { ratio: "16:9", platform: "Display" },
                    { ratio: "9:16", platform: "Stories" },
                ].map((ad, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-[#1a1a1a] p-3 shadow-lg">
                        <div className={`mb-2 rounded-lg bg-gradient-to-br from-[#AD8253]/30 to-[#c3a177]/10 ${ad.ratio === "1:1" ? "aspect-square" :
                                ad.ratio === "4:5" ? "aspect-[4/5]" :
                                    ad.ratio === "16:9" ? "aspect-video" :
                                        "aspect-[9/16]"
                            }`} style={{ maxHeight: "80px" }}>
                            <div className="flex h-full items-center justify-center text-xs text-[#AD8253]">
                                {ad.ratio}
                            </div>
                        </div>
                        <p className="text-xs text-center text-[#a1a1a1]">{ad.platform}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />

            <ServiceHeroVisual
                badge="Performance Creative Studio"
                title="Ad Creatives That Stop the Scroll"
                description="We design ad visuals and video scripts backed by data, not just aesthetics. We make assets that stop the scroll and drive clicks."
                visual={<AdCreativeMockup />}
            />

            <ServiceProblems
                title="Creative That Actually Converts"
                subtitle="Stop wasting budget on ads nobody clicks."
                items={[
                    {
                        problem: "Ads get ignored in the feed",
                        solutionTitle: "Scroll-stopping hooks in 3 seconds",
                        solutionDescription:
                            "We study what's working in your niche and create pattern-interrupt hooks that grab attention before they scroll past.",
                    },
                    {
                        problem: "High impressions but low click-through rates",
                        solutionTitle: "Direct response design principles",
                        solutionDescription:
                            "Every visual is designed with CTR in mind. Clear value props, compelling CTAs, and contrast that demands attention.",
                    },
                    {
                        problem: "Creative fatigue tanking your campaigns",
                        solutionTitle: "Fresh creative on a consistent schedule",
                        solutionDescription:
                            "We deliver new batches of creative weekly or monthly so your campaigns never go stale. Constant testing, constant winning.",
                    },
                ]}
            />

            <ServiceProcessVisual
                title="From Brief to Breakthrough"
                subtitle="Our production workflow that delivers results."
                steps={[
                    {
                        title: "Competitor & Market Research",
                        subtitle: "Finding what works in your space",
                        points: [
                            "Analyze top-performing ads in your industry using ad spy tools.",
                            "Identify winning hooks, formats, and angles.",
                            "Study your competitors' creative strategies.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white">Ad Research Dashboard</div>
                                    <div className="space-y-2">
                                        {["Competitor A", "Competitor B", "Competitor C"].map((name, i) => (
                                            <div key={i} className="flex items-center gap-3 rounded border border-white/5 bg-[#272727] p-3">
                                                <div className="h-8 w-8 rounded bg-gradient-to-br from-[#AD8253] to-[#c3a177]" />
                                                <div className="flex-1">
                                                    <p className="text-xs text-white">{name}</p>
                                                    <p className="text-xs text-[#a1a1a1]">{12 - i * 3} active ads</p>
                                                </div>
                                                <span className="text-xs text-[#AD8253]">Analyzed</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Scripting & Storyboard",
                        subtitle: "Crafting the message",
                        points: [
                            "Write hooks that capture attention in 3 seconds.",
                            "Develop body copy that builds desire and overcomes objections.",
                            "Create CTAs that demand action.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white">Video Script</div>
                                    <div className="space-y-3">
                                        {[
                                            { time: "0-3s", label: "Hook", content: "Stop scrolling if you..." },
                                            { time: "3-15s", label: "Problem", content: "You're struggling with..." },
                                            { time: "15-25s", label: "Solution", content: "Here's how we fix it..." },
                                            { time: "25-30s", label: "CTA", content: "Click the link below" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 rounded border border-white/5 bg-[#272727] p-2">
                                                <span className="rounded bg-[#AD8253]/20 px-2 py-1 text-xs text-[#AD8253]">{item.time}</span>
                                                <div>
                                                    <p className="text-xs font-medium text-white">{item.label}</p>
                                                    <p className="text-xs text-[#a1a1a1]">{item.content}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Production & Delivery",
                        subtitle: "Creating the assets",
                        points: [
                            "Shoot, edit, and animate video content.",
                            "Design static ads for all platforms and sizes.",
                            "Source and manage UGC creators for authentic content.",
                        ],
                        illustration: <StaticAdsMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Creative That Performs</h2>
                            <p className="text-[#a1a1a1]">
                                Join brands with ads that actually get clicked.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "3x", label: "Higher CTR" },
                                { value: "50+", label: "Creatives/Month" },
                                { value: "4.2%", label: "Avg Engagement" },
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
                        question: "Do you shoot raw footage?",
                        answer:
                            "Yes! We can organize professional shoots, work with stock footage, or create animated content depending on your budget and needs.",
                    },
                    {
                        question: "How many ads do I get?",
                        answer:
                            "We work on a retainer basis, delivering fresh batches of creative weekly or monthly. Typical packages include 10-50+ creatives per month.",
                    },
                    {
                        question: "Do you create UGC content?",
                        answer:
                            "Absolutely. We source, brief, and manage creators to produce authentic user-generated content that performs incredibly well on social.",
                    },
                ]}
            />

            <AboutCTA />
            <Footer />
        </main>
    );
}
