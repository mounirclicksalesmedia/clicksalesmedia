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

export default function AlphaLeadGenPage() {
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

    // The Alpha Engine Mockup
    const AlphaEngineMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#AD8253]/5 rounded-full blur-3xl" />

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <span className="text-[#AD8253]">⚡</span>
                        <span className="text-sm font-bold text-white tracking-wider">STRATEGIC REVENUE CORE</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-[#a1a1a1] uppercase">AI Tactics Active</span>
                    </div>
                </div>

                {/* The Core */}
                <div className="relative flex justify-center py-6">
                    {/* Central Processor */}
                    <div className="relative z-10 h-24 w-24 rounded-xl bg-gradient-to-br from-[#272727] to-[#1a1a1a] border border-[#AD8253] shadow-[0_0_20px_rgba(173,130,83,0.2)] flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-[#AD8253]">AI</span>
                        <span className="text-[10px] text-[#a1a1a1]">Strategic Logic</span>
                    </div>

                    {/* Inputs */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                        {["Market Strategy", "ICP Tactics", "Intent Data"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="h-2 w-8 bg-gradient-to-r from-transparent to-[#AD8253]/50 rounded animate-pulse" />
                                <span className="text-[10px] text-[#a1a1a1] bg-[#272727] px-1 rounded">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* Outputs */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                        {["Tactical Deploy", "Closed Deals", "Revenue"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="text-[10px] text-white bg-[#AD8253]/20 px-1 rounded border border-[#AD8253]/20">{item}</span>
                                <div className="h-2 w-8 bg-gradient-to-l from-transparent to-[#AD8253] rounded" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Metrics Footer */}
                <div className="mt-8 grid grid-cols-3 gap-2 text-center border-t border-white/5 pt-4">
                    <div>
                        <p className="text-lg font-bold text-white">100%</p>
                        <p className="text-[10px] text-[#a1a1a1]">Strategic Align</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-white">AI</p>
                        <p className="text-[10px] text-[#a1a1a1]">Tactical Exec</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-[#AD8253]">ROI</p>
                        <p className="text-[10px] text-[#a1a1a1]">Focused</p>
                    </div>
                </div>
            </div>
        </div>
    );

    // Pipeline Flow Mockup
    const PipelineFlowMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 text-sm text-white">Tactical Execution Map</div>
                <div className="space-y-4">
                    {[
                        { step: "01", title: "Strategy: ICP Definition", desc: "Define Total Addressable Market", active: true },
                        { step: "02", title: "Tactic: AI Enrollment", desc: "Deploy scraping bots & intent scripts", active: true },
                        { step: "03", title: "Tactic: Neuro-Outreach", desc: "AI-generated personalized copy", active: true },
                        { step: "04", title: "Strategy: Revenue Capture", desc: "Convert meetings to closed-won", active: true },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 group">
                            <div className="flex flex-col items-center">
                                <div className={`h-8 w-8 rounded-full border flex items-center justify-center text-xs font-bold ${item.active ? "border-[#AD8253] bg-[#AD8253] text-white" : "border-white/10 bg-[#272727] text-[#a1a1a1]"
                                    }`}>
                                    {item.step}
                                </div>
                                {i !== 3 && <div className="h-8 w-0.5 bg-[#white/5] my-1 bg-gradient-to-b from-[#AD8253] to-transparent" />}
                            </div>
                            <div className="pt-1">
                                <h4 className={`text-sm font-medium ${item.active ? "text-white" : "text-[#6b6b6b]"}`}>{item.title}</h4>
                                <p className="text-xs text-[#a1a1a1]">{item.desc}</p>
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
                badge="Strategic AI Revenue Architecture"
                title="Autonomous Revenue Infrastructure"
                description="Strategic precision meets AI velocity. The first intelligent system engineered to generate qualified pipeline at scale, bridging the gap between high-level strategy and automated tactical execution."
                visual={<AlphaEngineMockup />}
                source="service-alpha-lead-gen-hero"
            />

            <ServiceProblems
                title="The Strategic Gap"
                subtitle="Why tactical implementations fail without strategic foundations."
                items={[
                    {
                        problem: "Tactics Without Strategy",
                        solutionTitle: "Strategic Market Alignment",
                        solutionDescription:
                            "Running ads (tactic) without defining your ICP (strategy) is burning money. We start by architecting your Go-To-Market strategy before a single line of code is deployed.",
                    },
                    {
                        problem: "Siloed Intelligence",
                        solutionTitle: "Unified AI Data Core",
                        solutionDescription:
                            "We centralize intelligence. Ad performance data informs email copy; CRM objection data retrains the targeting model. A tactical loop powered by strategic oversight.",
                    },
                    {
                        problem: "Human Execution Lag",
                        solutionTitle: "AI Velocity & Scale",
                        solutionDescription:
                            "Strategy defines the direction; AI sets the pace. We replace slow human SDR work with high-frequency algorithmic outreach that executes your strategy at 100x speed.",
                    },
                    {
                        problem: "Revenue Leakage",
                        solutionTitle: "Algorithmic Pipeline Optimization",
                        solutionDescription:
                            "We monitor funnel velocity in real-time. If a stage lags, our AI autonomously adjusts tactical inputs (messaging, ad spend) to realign with the strategic revenue goal.",
                    },
                ]}
                source="service-alpha-lead-gen-problems"
            />

            {/* Cold Email Infrastructure Section */}
            <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
                <div className="absolute left-0 top-1/4 w-96 h-96 bg-[#AD8253]/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-4">
                            Precision Outreach Protocol
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            The Anti-Spam <span className="gradient-gold-text">Infrastructure</span>
                        </h2>
                        <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg leading-relaxed">
                            We don't do "spray and pray." We engineered a proprietary cold email ecosystem designed for one purpose:
                            delivering high-value, relevant messages to the primary inbox of decision-makers who actually need your solution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Philosophy Card */}
                        <div className="glass-card p-8 group hover:border-[#AD8253]/30 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center mb-6 group-hover:bg-[#AD8253]/20 transition-colors">
                                <span className="text-2xl">⚖️</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Philosophy: Relevance &gt; Volume</h3>
                            <p className="text-[#a1a1a1] leading-relaxed">
                                Our AI analyzes prospect data to ensure every email is contextual. If we can't find a valid reason to reach out (e.g., hiring, funding, tech stack change), we don't send the email. This protects your brand reputation and ensures we only engage high-probability targets.
                            </p>
                        </div>

                        {/* Data Card */}
                        <div className="glass-card p-8 group hover:border-[#AD8253]/30 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center mb-6 group-hover:bg-[#AD8253]/20 transition-colors">
                                <span className="text-2xl">💎</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Data: AI-Cleaned Intelligence</h3>
                            <p className="text-[#a1a1a1] leading-relaxed">
                                Most agencies buy static lists. We use live waterfall enrichment. Our system cross-references LinkedIn, Apollo, and corporate registries in real-time. Before an email is sent, our AI verifies the address using SMTP handshakes to guarantee &lt;1% bounce rates.
                            </p>
                        </div>

                        {/* Deliverability Card */}
                        <div className="glass-card p-8 group hover:border-[#AD8253]/30 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center mb-6 group-hover:bg-[#AD8253]/20 transition-colors">
                                <span className="text-2xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Tech: Inbox Sovereignty</h3>
                            <p className="text-[#a1a1a1] leading-relaxed">
                                We never put your main domain at risk. We build a dedicated "sending infrastructure" of secondary domains, fully authenticated with SPF, DKIM, and DMARC. These domains are "warmed up" for 14 days before launch to establish Tier-1 sender reputation with Google and Outlook.
                            </p>
                        </div>

                        {/* Automation Card */}
                        <div className="glass-card p-8 group hover:border-[#AD8253]/30 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center mb-6 group-hover:bg-[#AD8253]/20 transition-colors">
                                <span className="text-2xl">🧬</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Campaigns: Behavioral Sequences</h3>
                            <p className="text-[#a1a1a1] leading-relaxed">
                                Linear sequences are dead. Our system adapts based on prospect behavior. If they click a link, they enter a "high-intent" sub-sequence. If they view your LinkedIn profile, we trigger a connection request. It's not just email; it's an orchestrated pursuit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceProcessVisual
                title="The Alpha Protocol"
                subtitle="From Strategic Vision to Tactical Dominance."
                steps={[
                    {
                        title: "Phase 1: Strategic Intelligence",
                        subtitle: "Market Decoding & ICP Architecture",
                        points: [
                            "STRATEGY: Define the precise Ideal Customer Profile (ICP) and Total Addressable Market (TAM).",
                            "TACTIC: Deploy AI scrapers to ingest 50+ data points (Funding, Tech Stack, Hiring) from Apollo & LinkedIn.",
                            "OUTCOME: A mathematically verified list of high-intent targets ready for engagement.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white flex justify-between">
                                        <span>Strategic Data Core</span>
                                        <span className="text-[#AD8253]">Targets: 420</span>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { filter: "Strategy: Expansion Stage", active: true },
                                            { filter: "Tactic: Scrape Series B", active: true },
                                            { filter: "Tactic: Filter CRM Status", active: true },
                                            { filter: "Result: High Intent", active: true },
                                        ].map((f, i) => (
                                            <div key={i} className="flex items-center justify-between p-2 rounded bg-[#272727] border border-white/5">
                                                <span className="text-xs text-[#a1a1a1]">{f.filter}</span>
                                                <div className={`h-3 w-3 rounded-full ${f.active ? "bg-[#AD8253]" : "bg-white/10"}`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Phase 2: Tactical 'Air Cover'",
                        subtitle: "Omnichannel Surround Sound",
                        points: [
                            "STRATEGY: Build familiarity before the first cold contact to increase conversion rates.",
                            "TACTIC: Launch programmatic display and LinkedIn ads targeting the exact prospect list 7 days prior to outreach.",
                            "OUTCOME: Prospects recognize your brand, warming them up for the inbound/outbound conversion.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex-1 h-2 bg-[#272727] rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-gradient-to-r from-blue-500 to-[#AD8253]" />
                                        </div>
                                        <span className="text-xs text-[#AD8253] font-bold">Tactical Sync</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-white">Ad Tactics</span>
                                            <span className="text-[#AD8253]">Deployed</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-white">Email Tactics</span>
                                            <span className="text-[#AD8253]">Synced</span>
                                        </div>
                                        <div className="flex justify-between text-xs">
                                            <span className="text-white">Strategic Goal</span>
                                            <span className="text-[#AD8253]">Conversion</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Phase 3: Autonomous Execution",
                        subtitle: "Machine Learning Revenue Loop",
                        points: [
                            "STRATEGY: Creating a self-optimizing revenue machine that improves over time.",
                            "TACTIC: ML models analyze reply sentiment to refine messaging clones and retargeting logic.",
                            "OUTCOME: An autonomous loop that delivers booked meetings directly to your CRM.",
                        ],
                        illustration: <PipelineFlowMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Strategy. Tactics. AI.</h2>
                            <p className="text-[#a1a1a1]">
                                The perfect convergence of human strategic vision and machine tactical execution.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "Strategy", label: "Defined" },
                                { value: "AI", label: "Executed" },
                                { value: "Revenue", label: "Delivered" },
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
                        question: "How do you balance Strategy and Tactics?",
                        answer:
                            "Strategy is the 'Why' and 'Where'. Tactics are the 'How'. We provide the Strategic Intelligence (identifying the market, crafting the offer) and use AI for the Tactical Execution (scraping, sending, retargeting). You need both to win.",
                    },
                    {
                        question: "Why use AI for tactical execution?",
                        answer:
                            "Human execution is slow, expensive, and inconsistent. AI executes tactics (like sending 1000 unique emails or adjusting ad bids) instantly and perfectly every time, allowing us to scale your strategy indefinitely.",
                    },
                    {
                        question: "Does this replace my sales team?",
                        answer:
                            "No. It replaces the 'busy work' (tactics). Your sales team focuses on the high-value 'strategy'—closing deals and building relationships. We hand them qualified meetings, not lists of cold leads.",
                    },
                    {
                        question: "Is the AI custom trained?",
                        answer:
                            "Yes. We train the Machine Learning models on your specific value proposition and historical deal data. The system 'learns' your aesthetic and strategic voice to ensure tactical alignment.",
                    },
                ]}
            />

            <AboutCTA source="service-alpha-lead-gen-cta" />
            <Footer />
        </main>
    );
}
