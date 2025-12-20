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

export default function CRMPage() {
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

    // Pipeline Mockup
    const PipelineMockup = () => (
        <div className="relative mx-auto max-w-lg">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Deal Pipeline</span>
                    <span className="text-xs text-[#AD8253]">$2.4M Total</span>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2">
                    {[
                        { stage: "New Lead", count: 24, value: "$120K", color: "from-blue-500 to-blue-600" },
                        { stage: "Qualified", count: 18, value: "$450K", color: "from-[#AD8253] to-[#c3a177]" },
                        { stage: "Proposal", count: 12, value: "$680K", color: "from-purple-500 to-purple-600" },
                        { stage: "Closed", count: 8, value: "$890K", color: "from-green-500 to-green-600" },
                    ].map((stage, i) => (
                        <div key={i} className="flex-shrink-0 w-32 rounded-lg border border-white/5 bg-[#272727] p-3">
                            <div className={`h-1 w-full rounded mb-2 bg-gradient-to-r ${stage.color}`} />
                            <p className="text-xs text-[#a1a1a1] mb-1">{stage.stage}</p>
                            <p className="text-lg font-bold text-white">{stage.count}</p>
                            <p className="text-xs text-[#AD8253]">{stage.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // Automation Mockup
    const AutomationMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-[#AD8253]/20 flex items-center justify-center">⚡</div>
                    <span className="text-sm text-white">Automation Workflows</span>
                </div>

                <div className="space-y-3">
                    {[
                        { name: "Lead Follow-up", triggers: "2,340", status: "active" },
                        { name: "Meeting Reminder", triggers: "1,120", status: "active" },
                        { name: "Re-engagement", triggers: "890", status: "active" },
                    ].map((workflow, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#272727] p-3">
                            <div className="h-2 w-2 rounded-full bg-[#AD8253] animate-pulse" />
                            <div className="flex-1">
                                <p className="text-sm text-white">{workflow.name}</p>
                                <p className="text-xs text-[#a1a1a1]">{workflow.triggers} triggers this month</p>
                            </div>
                            <span className="rounded-full bg-[#AD8253]/10 px-2 py-1 text-xs text-[#AD8253]">
                                Active
                            </span>
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
                badge="CRM Architecture & Pipeline Engineering"
                title="Build the Spine of Your Sales Process"
                description="We architect HubSpot and HighLevel environments that automate follow-ups, track deal velocity, and ensure no lead ever falls through the cracks."
                visual={<PipelineMockup />}
                source="service-crm-architecture-hero"
            />

            <ServiceProblems
                title="Stop Losing Deals to Disorganization"
                subtitle="A CRM should be a machine, not a messy contact book."
                items={[
                    {
                        problem: "Leads fall through the cracks constantly",
                        solutionTitle: "Automated deal stage management",
                        solutionDescription:
                            "We build custom pipelines with mandatory fields and automated stage progression. No deal can stagnate without triggering alerts.",
                    },
                    {
                        problem: "Sales reps forget to follow up",
                        solutionTitle: "Automatic follow-up sequences",
                        solutionDescription:
                            "If a lead stalls, the system automatically sends reminders to both the prospect and your rep. Never miss a follow-up again.",
                    },
                    {
                        problem: "No visibility into sales performance",
                        solutionTitle: "Real-time dashboards and reporting",
                        solutionDescription:
                            "See exactly where every deal stands, rep performance metrics, and revenue forecasts—all updated in real-time.",
                    },
                ]}
                source="service-crm-architecture-problems"
            />

            <ServiceProcessVisual
                title="Engineering Your Sales Machine"
                subtitle="From chaos to clarity in your sales operations."
                steps={[
                    {
                        title: "Audit & Map",
                        subtitle: "Understanding your current state",
                        points: [
                            "Map out your existing lead flow and sales process.",
                            "Identify bottlenecks, leaks, and inefficiencies.",
                            "Define ideal pipeline stages based on your sales cycle.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white">Process Audit</div>
                                    <div className="space-y-2">
                                        {["Lead Sources", "Qualification Criteria", "Sales Stages", "Close Process"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 rounded border border-white/5 bg-[#272727] p-3">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#AD8253] text-xs text-white">
                                                    {i + 1}
                                                </span>
                                                <span className="text-sm text-[#a1a1a1]">{item}</span>
                                                <span className="ml-auto text-[#AD8253]">✓</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Build & Automate",
                        subtitle: "Constructing your CRM infrastructure",
                        points: [
                            "Create custom properties, deal stages, and pipelines.",
                            "Build automation workflows for follow-ups and notifications.",
                            "Set up lead scoring based on engagement and fit.",
                        ],
                        illustration: <AutomationMockup />,
                    },
                    {
                        title: "Connect & Integrate",
                        subtitle: "Unifying your tech stack",
                        points: [
                            "Integrate with your ads, website, and email tools.",
                            "Set up two-way sync with other platforms.",
                            "Ensure seamless data flow across your entire stack.",
                        ],
                        illustration: <PipelineMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Your Sales Operations, Engineered</h2>
                            <p className="text-[#a1a1a1]">
                                Join companies running on a CRM that actually works.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "0%", label: "Lead Leakage" },
                                { value: "100%", label: "Visibility" },
                                { value: "50%", label: "Time Saved" },
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
                        question: "Which CRM do you recommend?",
                        answer:
                            "It depends on your needs. For smaller agile teams, HighLevel (GHL) is excellent. For scaling enterprise, HubSpot is our go-to. We are certified experts in both.",
                    },
                    {
                        question: "Can you fix my messy existing CRM?",
                        answer:
                            "Absolutely. We specialize in database cleanup, deduplication, and reorganization. We'll turn your chaos into a clean, efficient system.",
                    },
                    {
                        question: "Do you provide training?",
                        answer:
                            "Yes! We train your team on how to use the system effectively so they actually adopt it. Includes documentation and video tutorials.",
                    },
                ]}
            />

            <AboutCTA source="service-crm-architecture-cta" />
            <Footer />
        </main>
    );
}
