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

export default function MultiChannelPage() {
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

    // Ecosystem Mockup
    const EcosystemMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl overflow-hidden p-6">
                <div className="flex justify-center mb-8">
                    <div className="relative h-24 w-24 rounded-full border-2 border-[#AD8253] flex items-center justify-center bg-[#272727] z-10 shadow-[0_0_30px_rgba(173,130,83,0.3)]">
                        <span className="text-3xl">🎯</span>
                        <div className="absolute -bottom-6 w-max text-xs font-bold text-white bg-[#AD8253] px-2 py-0.5 rounded-full">Your Business</div>
                    </div>

                    {/* Orbiting Channels */}
                    {[
                        { icon: "in", label: "LinkedIn", top: "0%", left: "50%", rotate: "0deg" },
                        { icon: "✉️", label: "Email", top: "50%", left: "100%", rotate: "90deg" },
                        { icon: "G", label: "Google", top: "100%", left: "50%", rotate: "180deg" },
                        { icon: "f", label: "Meta", top: "50%", left: "0%", rotate: "270deg" },
                    ].map((channel, i) => (
                        <div key={i} className="absolute inset-0 animate-[spin_20s_linear_infinite]" style={{ animationDelay: `-${i * 5}s` }}>
                            <div className="absolute h-12 w-12 -mt-6 -ml-6 rounded-full border border-white/10 bg-[#272727] flex flex-col items-center justify-center z-0" style={{
                                top: channel.top,
                                left: channel.left,
                                transform: `rotate(-${channel.rotate})` // Counter-rotate to keep icon upright would need nested div, simplifying for now
                            }}>
                                <span className="text-sm font-bold text-white">{channel.icon}</span>
                            </div>
                        </div>
                    ))}
                    <div className="absolute inset-0 rounded-full border border-white/5 border-dashed scale-[1.8]" />
                </div>

                <div className="space-y-2 text-center">
                    <p className="text-sm font-medium text-white">Omnipresent Authority</p>
                    <p className="text-xs text-[#a1a1a1]">Wherever your prospects go, there you are.</p>
                </div>
            </div>

            <div className="absolute -right-2 top-10 rounded-lg bg-[#272727] border border-white/10 p-2 shadow-lg animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs text-white">40+ Touchpoints</span>
                </div>
            </div>
        </div>
    );

    // Journey Mockup
    const JourneyMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 text-sm text-white">Prospect Journey</div>
                <div className="relative border-l-2 border-white/10 pl-6 ml-2 space-y-6">
                    {[
                        { day: "Day 1", event: "Clicked LinkedIn Ad", icon: "in" },
                        { day: "Day 2", event: "Visited Pricing Page", icon: "🌐" },
                        { day: "Day 3", event: "Received Case Study Email", icon: "✉️" },
                        { day: "Day 5", event: "Saw Retargeting Ad", icon: "👁️" },
                        { day: "Day 7", event: "Booked Strategy Call", icon: "📅", highlight: true },
                    ].map((step, i) => (
                        <div key={i} className="relative">
                            <div className={`absolute -left-[31px] h-4 w-4 rounded-full border-2 ${step.highlight ? "border-[#AD8253] bg-[#AD8253]" : "border-[#272727] bg-[#272727]"
                                }`} />
                            <div className={`p-3 rounded-lg border ${step.highlight ? "border-[#AD8253] bg-[#AD8253]/10" : "border-white/5 bg-[#272727]"
                                }`}>
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs text-[#a1a1a1]">{step.day}</span>
                                    <span className="text-xs">{step.icon}</span>
                                </div>
                                <p className={`text-sm font-medium ${step.highlight ? "text-[#AD8253]" : "text-white"}`}>
                                    {step.event}
                                </p>
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
                badge="Multi-Channel Client Acquisition"
                title="Be Everywhere Your Clients Are"
                description="Why rely on one channel when your customers are on five? We build synchronized ecosystems where LinkedIn, Email, Google, and Ads work together to surround your prospects."
                visual={<EcosystemMockup />}
                source="service-multi-channel-acquisition-hero"
            />

            <ServiceProblems
                title="Fragmentation Kills Conversion"
                subtitle="Disjointed marketing efforts confuse prospects and waste budget."
                items={[
                    {
                        problem: "Relying on a single source of leads",
                        solutionTitle: "Diversified lead flow",
                        solutionDescription:
                            "If one channel algorithm changes, your business shouldn't die. We diversify your risk across multiple proven platforms.",
                    },
                    {
                        problem: "Ads and outreach don't talk to each other",
                        solutionTitle: "Unified messaging strategy",
                        solutionDescription:
                            "Your email copy references your ad, and your ad reinforces your email. A cohesive narrative that builds trust faster.",
                    },
                    {
                        problem: "Leads need 7-11 touchpoints to buy",
                        solutionTitle: "Automated touchpoint density",
                        solutionDescription:
                            "We engineer high-frequency touchpoints across platforms so you stay top-of-mind without lifting a finger.",
                    },
                ]}
                source="service-multi-channel-acquisition-problems"
            />

            <ServiceProcessVisual
                title="The Omnipresence Framework"
                subtitle="How we structure your multi-channel machine."
                steps={[
                    {
                        title: "Channel Selection",
                        subtitle: "Fishing where the fish are",
                        points: [
                            "Identify where your ideal clients spend their time.",
                            "Audit current channel performance.",
                            "Select the primary driver (e.g., LinkedIn) and support channels.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white">Channel Audit</div>
                                    <div className="space-y-2">
                                        {[
                                            { name: "LinkedIn", fit: "95%", status: "Primary" },
                                            { name: "Cold Email", fit: "88%", status: "Secondary" },
                                            { name: "Twitter/X", fit: "40%", status: "Ignore" },
                                        ].map((c, i) => (
                                            <div key={i} className="flex items-center justify-between p-2 rounded border border-white/5 bg-[#272727]">
                                                <span className="text-sm text-white">{c.name}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs text-[#AD8253]">{c.fit} Fit</span>
                                                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${c.status === 'Ignore' ? 'bg-white/10 text-[#a1a1a1]' : 'bg-[#AD8253]/20 text-[#AD8253]'
                                                        }`}>{c.status}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Orchestration",
                        subtitle: "Connecting the dots",
                        points: [
                            "Build the sequencing: Ad -> Visit -> Email -> Retargeting.",
                            "Set up cross-channel attribution.",
                            "Ensure brand consistency across all assets.",
                        ],
                        illustration: <JourneyMockup />,
                    },
                    {
                        title: "Execution & Scale",
                        subtitle: "Running the machine",
                        points: [
                            "Launch synchronized campaigns.",
                            "Monitor lift in blended acquisition costs.",
                            "Scale budget into the highest-performing combination.",
                        ],
                        illustration: <EcosystemMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">The Power of Synergy</h2>
                            <p className="text-[#a1a1a1]">
                                Cross-channel campaigns convert 3x better than single-channel efforts.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "3x", label: "Conversion Lift" },
                                { value: "-40%", label: "CAC Reduction" },
                                { value: "360°", label: "Visibility" },
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
                        question: "Is this expensive?",
                        answer:
                            "It requires a higher initial setup than a single channel, but it typically lowers your Cost Per Acquisition (CPA) over time because the channels reinforce each other.",
                    },
                    {
                        question: "Do I need to be on every platform?",
                        answer:
                            "No. We only select the channels where your audience is active. For B2B, that's usually LinkedIn, Email, and Google. We ignore the rest.",
                    },
                    {
                        question: "How do you track attribution?",
                        answer:
                            "We use advanced server-side tracking and blended reporting to see how different channels contribute to the final sale.",
                    },
                ]}
            />

            <AboutCTA source="service-multi-channel-acquisition-cta" />
            <Footer />
        </main>
    );
}
