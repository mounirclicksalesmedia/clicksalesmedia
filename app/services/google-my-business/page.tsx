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
import { GoogleMyBusinessMockup, LocalSearchMockup } from "@/components/services/ServiceMockups";

export default function GoogleMyBusinessPage() {
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
                badge="Google Business Profile Optimization"
                title="Dominate Local Search & Drive B2B Leads"
                description="Your Google Business Profile is often the first impression potential clients get. We optimize your profile to rank #1 in local search, drive calls, and generate qualified B2B leads."
                visual={<GoogleMyBusinessMockup />}
                source="service-google-my-business-hero"
            />

            <ServiceProblems
                title="Stop Losing Leads to Your Competitors"
                subtitle="With a fully optimized Google Business Profile that converts."
                items={[
                    {
                        problem: "Your business doesn't show up in local search results",
                        solutionTitle: "Rank #1 in the Local Pack",
                        solutionDescription:
                            "We optimize your Google Business Profile with proven SEO strategies to dominate the Google Map Pack for your target keywords and service area.",
                    },
                    {
                        problem: "Low-quality or missing reviews hurting your credibility",
                        solutionTitle: "Build a 5-star reputation automatically",
                        solutionDescription:
                            "We implement automated review request systems and reputation management strategies to consistently generate authentic 5-star reviews from happy clients.",
                    },
                    {
                        problem: "Your profile looks unprofessional or incomplete",
                        solutionTitle: "Professional profile that converts browsers into buyers",
                        solutionDescription:
                            "We completely overhaul your profile with high-quality images, compelling descriptions, accurate information, and conversion-focused CTAs.",
                    },
                ]}
                source="service-google-my-business-problems"
            />

            <ServiceProcessVisual
                title="How We Transform Your Google Presence"
                subtitle="Our proven process to dominate local search and drive qualified B2B leads."
                steps={[
                    {
                        title: "Profile Audit & Optimization",
                        subtitle: "Foundation of local search dominance",
                        points: [
                            "Complete profile audit identifying gaps and opportunities for improvement.",
                            "Optimize business name, categories, services, and descriptions with target keywords.",
                            "Add high-quality professional photos, videos, and virtual tours to showcase your business.",
                            "Set up Google Posts schedule for regular engagement and fresh content.",
                        ],
                        illustration: <GoogleMyBusinessMockup />,
                    },
                    {
                        title: "Local SEO Strategy",
                        subtitle: "Getting you to the top of search results",
                        points: [
                            "Keyword research for high-intent local search terms in your industry.",
                            "Citation building across 50+ high-authority local directories.",
                            "Location page optimization if you serve multiple areas.",
                            "NAP (Name, Address, Phone) consistency audit and cleanup across the web.",
                        ],
                        illustration: <LocalSearchMockup />,
                    },
                    {
                        title: "Review Generation System",
                        subtitle: "Building trust and social proof",
                        points: [
                            "Automated review request sequences sent after project completion.",
                            "QR codes and easy review links for in-person requests.",
                            "Review monitoring and professional response management.",
                            "Negative review mitigation strategies to protect your reputation.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-center">
                                        <p className="text-sm text-[#a1a1a1]">Review Growth</p>
                                    </div>
                                    <div className="flex items-end justify-between gap-2 mb-4">
                                        {[20, 35, 50, 75, 95, 120].map((height, i) => (
                                            <div key={i} className="flex flex-1 flex-col items-center gap-1">
                                                <div className="flex items-center gap-0.5 mb-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <span key={star} className="text-xs text-[#AD8253]">★</span>
                                                    ))}
                                                </div>
                                                <div
                                                    className="w-full rounded-t bg-gradient-to-t from-[#AD8253] to-[#c3a177]"
                                                    style={{ height: `${height}px` }}
                                                />
                                                <span className="text-xs text-[#a1a1a1]">M{i + 1}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="rounded-lg border border-white/5 bg-[#272727] p-3 text-center">
                                            <p className="text-2xl font-bold text-[#AD8253]">4.9</p>
                                            <p className="text-xs text-[#a1a1a1]">Avg Rating</p>
                                        </div>
                                        <div className="rounded-lg border border-white/5 bg-[#272727] p-3 text-center">
                                            <p className="text-2xl font-bold text-[#AD8253]">247</p>
                                            <p className="text-xs text-[#a1a1a1]">Total Reviews</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Performance Tracking & Reporting",
                        subtitle: "Measuring your local visibility",
                        points: [
                            "Monthly reports showing search impressions, profile views, and website clicks.",
                            "Call tracking to attribute leads directly to your Google Business Profile.",
                            "Competitor analysis comparing your performance to local rivals.",
                            "Ongoing optimization based on performance data and algorithm updates.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 flex items-center justify-between">
                                        <h4 className="text-sm font-medium text-white">Monthly Performance</h4>
                                        <div className="rounded-full bg-[#AD8253]/10 px-2 py-1 text-xs text-[#AD8253]">
                                            +42% MoM
                                        </div>
                                    </div>

                                    <div className="mb-4 grid grid-cols-2 gap-3">
                                        {[
                                            { label: "Search Views", value: "12.4K", change: "+28%" },
                                            { label: "Map Views", value: "8.2K", change: "+34%" },
                                            { label: "Website Clicks", value: "1.8K", change: "+52%" },
                                            { label: "Phone Calls", value: "340", change: "+61%" },
                                        ].map((metric, i) => (
                                            <div key={i} className="rounded-lg border border-white/5 bg-[#272727] p-3">
                                                <p className="text-xs text-[#a1a1a1] mb-1">{metric.label}</p>
                                                <p className="text-xl font-bold text-white">{metric.value}</p>
                                                <p className="text-xs text-[#AD8253]">{metric.change}</p>
                                            </div>
                                        ))}
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
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Own Your Local Market</h2>
                            <p className="text-[#a1a1a1]">
                                Join B2B companies dominating local search and generating qualified leads on autopilot.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "180%", label: "More Visibility" },
                                { value: "5★", label: "Avg Rating" },
                                { value: "42%", label: "More Calls" },
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
                        question: "How long does it take to see results?",
                        answer:
                            "Most businesses see improved rankings within 2-4 weeks. Full optimization and consistent review generation typically show significant results within 60-90 days.",
                    },
                    {
                        question: "Do you guarantee #1 rankings?",
                        answer:
                            "While we can't guarantee specific rankings (Google's algorithm changes constantly), we use proven strategies that have helped hundreds of B2B companies dominate their local markets. We focus on maximizing visibility and lead generation.",
                    },
                    {
                        question: "Is this only for service-area businesses?",
                        answer:
                            "No! Google Business Profile optimization works for both brick-and-mortar locations and service-area businesses (SABs). We tailor our strategy based on your business model and target markets.",
                    },
                    {
                        question: "How do you handle negative reviews?",
                        answer:
                            "We monitor all reviews in real-time and respond professionally to negative feedback within 24 hours. Our reputation management strategies focus on generating more positive reviews to outweigh any negatives, while addressing legitimate concerns to improve your service.",
                    },
                ]}
            />

            <AboutCTA source="service-google-my-business-cta" />
            <Footer />
        </main>
    );
}
