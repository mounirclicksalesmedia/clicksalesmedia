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
import { LinkedInProfileMockup, EmailStatsMockup } from "@/components/services/ServiceMockups";

export default function LinkedInAdsPage() {
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
                badge="LinkedIn Lead Generation Agency"
                title="Start Getting Deals From LinkedIn"
                description="We create tailored outreach campaigns to hook prospects and convert quality B2B leads from either your company or personal LinkedIn profile."
                visual={
                    <div className="relative">
                        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] opacity-60 blur-2xl" />
                        <div className="relative rounded-2xl border border-white/10 bg-[#272727] p-6 shadow-xl">
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center gap-4 rounded-lg bg-[#1a1a1a] p-4">
                                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177]" />
                                        <div className="flex-1 space-y-2">
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <span key={star} className="text-xs text-[#AD8253]">★</span>
                                                ))}
                                            </div>
                                            <div className="h-2 w-3/4 rounded bg-white/10" />
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AD8253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute -bottom-4 -right-4 text-8xl font-bold text-white/5">in</div>
                        </div>
                    </div>
                }
                source="service-linkedin-ads-hero"
            />

            <ServiceProblems
                title="Get New Opportunities From LinkedIn Regularly"
                subtitle="With our complex LinkedIn outreach service that solves your lead gen challenges."
                items={[
                    {
                        problem: "Inadequate results from current prospecting strategy",
                        solutionTitle: "Put your solution in front of actual decision-makers",
                        solutionDescription:
                            "We audit and update your profile, build a relevant network of ICP matches via personalized connection requests, and follow up with them to schedule appointments.",
                    },
                    {
                        problem: "Poor engagement with your LinkedIn messages",
                        solutionTitle: "Craft messages that actually get responses",
                        solutionDescription:
                            "We develop personalized outreach sequences that resonate with your target audience and drive meaningful conversations that convert.",
                    },
                    {
                        problem: "Hard to get prospects' attention",
                        solutionTitle: "Stand out in a crowded inbox",
                        solutionDescription:
                            "We create compelling content and outreach strategies that capture attention and generate genuine interest in your offerings.",
                    },
                ]}
                source="service-linkedin-ads-problems"
            />

            <ServiceProcessVisual
                title="How LinkedIn Lead Generation Service Works"
                subtitle="Check out how we help you build meaningful relations with your connections so they become your clients."
                steps={[
                    {
                        title: "LinkedIn Profile Optimization",
                        subtitle: "Fine-tuning your profile to build trust",
                        points: [
                            "First, we audit your profile and come up with a list of recommended improvements.",
                            "Then we upgrade all key sections that require a touch-up: Headline, About, Experience, Skills, etc.",
                            "Finally, we choose high-quality visuals, like a professional headshot and relevant cover photo, to create a positive first impression.",
                        ],
                        illustration: <LinkedInProfileMockup />,
                    },
                    {
                        title: "LinkedIn Prospecting",
                        subtitle: "Attracting sales-ready leads to your pipeline",
                        points: [
                            "To get you in front of potential clients, we study your business and industry specifics to refine your ICP and develop a sophisticated outreach strategy.",
                            "We use advanced search and filtering tools to identify individuals within your ICP based on industry, job title, company size, and other relevant criteria.",
                            "Finally, we build a targeted list of potential clients to ensure you reach the right people.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="absolute -left-4 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#AD8253] text-white shadow-lg">
                                    <span className="text-2xl font-bold">in</span>
                                </div>
                                <div className="ml-8 rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 h-3 w-full rounded bg-gradient-to-r from-[#AD8253] to-[#c3a177]" />
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177]" />
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <span key={star} className="text-xs text-[#AD8253]">★</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute -right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#AD8253] text-white shadow-lg">
                                    ✓
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Thought-Leadership Content",
                        subtitle: "Establishing your expertise and increasing your audience",
                        points: [
                            "We research your TAM and competitors and learn your ICP's pain points to create a stellar content strategy and plan.",
                            "Our copywriters produce exclusive content that resonates with your audience and drives impressions, reactions, and reposts.",
                            "We track post performance and adjust the strategy to convert your followers into qualified leads.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#AD8253]/20">
                                            <span className="text-[#AD8253]">✓</span>
                                        </div>
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="h-8 w-8 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-br from-[#AD8253] to-[#c3a177]" />
                                            ))}
                                        </div>
                                        <span className="rounded-full bg-[#AD8253] px-2 py-1 text-xs text-white">+2</span>
                                    </div>
                                    <div className="mb-3 aspect-video rounded-lg bg-gradient-to-br from-[#272727] to-[#1a1a1a]" />
                                    <div className="flex gap-4 text-[#a1a1a1]">
                                        <span>👍</span>
                                        <span>❤️</span>
                                        <span>💬</span>
                                    </div>
                                </div>
                                <div className="absolute -right-4 top-1/2 flex h-8 w-8 items-center justify-center rounded bg-[#272727] shadow-lg">
                                    ✏️
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "LinkedIn Outreach",
                        subtitle: "Connecting and booking appointments with your prospects",
                        points: [
                            "We locate decision-makers who interact with your profile, qualify them, and send connection requests.",
                            "When they add you to their network, we drop them a short personalized welcome message, briefly describe your offer, and suggest an appointment.",
                            "If there's no response, we launch a sequence of messages to remind how you can help and book a call with them.",
                        ],
                        illustration: <EmailStatsMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Get Leads From LinkedIn</h2>
                            <p className="text-[#a1a1a1]">
                                Seize the power of the largest professional network with ClickSalesMedia.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "200+", label: "Opportunities Yearly" },
                                { value: "15%", label: "Deal Closing Rate" },
                                { value: "10:1", label: "ROI Achieved" },
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
                        question: "What do I get from LinkedIn sales lead generation by ClickSalesMedia?",
                        answer:
                            "You get a comprehensive LinkedIn lead generation service that includes profile optimization, targeted prospecting, thought-leadership content creation, and personalized outreach campaigns designed to generate qualified B2B leads and book appointments with decision-makers.",
                    },
                    {
                        question: "What is included in the preparation stage?",
                        answer:
                            "The preparation stage includes a thorough audit of your LinkedIn profile, ICP definition and refinement, competitor analysis, content strategy development, and the creation of personalized outreach sequences tailored to your target audience.",
                    },
                    {
                        question: "Is this all about social media marketing?",
                        answer:
                            "No, our service focuses specifically on B2B lead generation through LinkedIn. While we do create content, our primary goal is to generate qualified leads and book appointments, not just increase social media engagement.",
                    },
                ]}
            />

            <AboutCTA source="service-linkedin-ads-cta" />
            <Footer />
        </main>
    );
}
