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

export default function AIAutomationPage() {
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

    // AI Chat Mockup
    const AIChatMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center">
                        <span className="text-white text-lg">🤖</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">AI Sales Agent</p>
                        <p className="text-xs text-[#AD8253]">● Online 24/7</p>
                    </div>
                </div>

                <div className="space-y-3 mb-4">
                    <div className="flex justify-start">
                        <div className="rounded-2xl rounded-tl-none bg-[#272727] px-4 py-2 max-w-[80%]">
                            <p className="text-sm text-white">Hi! 👋 How can I help you today?</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="rounded-2xl rounded-tr-none bg-gradient-to-r from-[#AD8253] to-[#c3a177] px-4 py-2 max-w-[80%]">
                            <p className="text-sm text-[#272727]">I need help with lead generation</p>
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="rounded-2xl rounded-tl-none bg-[#272727] px-4 py-2 max-w-[80%]">
                            <p className="text-sm text-white">Great! Let me schedule a call with our team. What time works for you?</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#272727] p-2">
                    <div className="flex-1 h-2 rounded bg-white/10" />
                    <div className="h-8 w-8 rounded-full bg-[#AD8253] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="m22 2-7 20-4-9-9-4Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="absolute -right-4 -top-4 rounded-full bg-[#AD8253] px-3 py-1 text-xs font-bold text-white shadow-lg">
                AI Powered
            </div>
        </div>
    );

    // Automation Flow Mockup
    const AutomationFlowMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 text-center">
                    <p className="text-xs text-[#a1a1a1]">Automation Pipeline</p>
                </div>

                <div className="space-y-3">
                    {[
                        { icon: "📨", label: "Lead Captured", status: "completed" },
                        { icon: "🤖", label: "AI Qualification", status: "completed" },
                        { icon: "📅", label: "Auto-Schedule", status: "active" },
                        { icon: "📧", label: "Follow-up Sent", status: "pending" },
                    ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-lg ${step.status === "completed" ? "bg-[#AD8253]/20" :
                                step.status === "active" ? "bg-[#AD8253] animate-pulse" :
                                    "bg-[#272727]"
                                }`}>
                                {step.icon}
                            </div>
                            <div className="flex-1">
                                <div className={`h-2 rounded ${step.status === "completed" ? "bg-[#AD8253]" :
                                    step.status === "active" ? "bg-gradient-to-r from-[#AD8253] to-transparent" :
                                        "bg-white/10"
                                    }`} style={{ width: step.status === "active" ? "60%" : "100%" }} />
                            </div>
                            <span className="text-xs text-[#a1a1a1]">{step.label}</span>
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
                badge="B2B AI Agents & Automation"
                title="Clone Your Best Sales Rep That Works 24/7"
                description="We build custom AI agents that converse, answer FAQs, qualify leads, and book appointments automatically. Deploy on WhatsApp, web, SMS, and more."
                visual={<AIChatMockup />}
                source="service-ai-automation-hero"
            />

            <ServiceProblems
                title="Automate Your Sales Pipeline"
                subtitle="Let AI handle the repetitive tasks while you close deals."
                items={[
                    {
                        problem: "Missing leads because no one's available to respond",
                        solutionTitle: "24/7 instant response with AI agents",
                        solutionDescription:
                            "Our AI agents respond to inquiries within seconds, any time of day, ensuring you never miss a potential client.",
                    },
                    {
                        problem: "Wasting time on unqualified leads",
                        solutionTitle: "Automatic lead qualification",
                        solutionDescription:
                            "AI agents ask qualifying questions (budget, timeline, decision authority) and only pass qualified leads to your team.",
                    },
                    {
                        problem: "Manual appointment scheduling is a nightmare",
                        solutionTitle: "Direct calendar integration",
                        solutionDescription:
                            "Leads book directly into your calendar. No back-and-forth emails. The AI finds mutual availability and confirms appointments.",
                    },
                ]}
                source="service-ai-automation-problems"
            />

            <ServiceProcessVisual
                title="How We Deploy Your AI Workforce"
                subtitle="From concept to live agent in weeks, not months."
                steps={[
                    {
                        title: "Knowledge Base Training",
                        subtitle: "Teaching your AI to be an expert",
                        points: [
                            "We ingest your website, PDFs, sales scripts, and FAQs.",
                            "Train the AI on your unique value propositions and objection handling.",
                            "Define conversation boundaries and escalation triggers.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="h-8 w-8 rounded bg-[#AD8253]/20 flex items-center justify-center">📚</div>
                                        <span className="text-sm text-white">Training Data Sources</span>
                                    </div>
                                    <div className="space-y-2">
                                        {["Website Content", "Sales Scripts", "FAQ Documents", "Product Specs"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 rounded border border-white/5 bg-[#272727] p-2">
                                                <div className="h-2 w-2 rounded-full bg-[#AD8253]" />
                                                <span className="text-xs text-[#a1a1a1]">{item}</span>
                                                <span className="ml-auto text-xs text-[#AD8253]">✓</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Prompt Engineering",
                        subtitle: "Crafting the perfect personality",
                        points: [
                            "Design agent personality that matches your brand voice.",
                            "Implement strict guardrails to prevent hallucinations.",
                            "Create conversation flows for common scenarios.",
                        ],
                        illustration: <AIChatMockup />,
                    },
                    {
                        title: "Integration & Testing",
                        subtitle: "Connecting to your systems",
                        points: [
                            "Connect to CRM (HubSpot, HighLevel, Salesforce).",
                            "Calendar integration (Google, Outlook, Calendly).",
                            "Rigorous stress testing before going live.",
                        ],
                        illustration: <AutomationFlowMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Scale Without Hiring</h2>
                            <p className="text-[#a1a1a1]">
                                AI agents that work around the clock so your team can focus on closing.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "24/7", label: "Availability" },
                                { value: "<3s", label: "Response Time" },
                                { value: "95%", label: "Accuracy" },
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
                        question: "Will the AI hallucinate or say incorrect things?",
                        answer:
                            "We implement strict guardrails so the AI stays within established boundaries. If unsure, it escalates to a human instead of guessing.",
                    },
                    {
                        question: "Can it speak multiple languages?",
                        answer:
                            "Yes! Our AI agents are inherently multilingual and can converse in 95+ languages instantly.",
                    },
                    {
                        question: "Which platforms can you deploy on?",
                        answer:
                            "WhatsApp, Website chat widget, SMS, Instagram DM, Facebook Messenger, and more. We can deploy anywhere your customers are.",
                    },
                ]}
            />

            <AboutCTA source="service-ai-automation-cta" />
            <Footer />
        </main>
    );
}
