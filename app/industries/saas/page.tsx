"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { BookingButton } from "@/components/booking/BookingButton";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Check,
    Menu,
    X,
    Target,
    Users,
    FileText,
    Mail,
    Linkedin,
    Phone,
    Play,
} from "lucide-react";

// ============ DATA ============

const saasLogos = [
    { name: "Virayo", text: "VIRAYO" },
    { name: "JourneyDXP", text: "JourneyDXP" },
    { name: "Appruv", text: "Appruv" },
    { name: "pairaphrase", text: "pairaphrase" },
    { name: "Labrador", text: "Labrador" },
    { name: "bob", text: "bob" },
];

const challenges = [
    {
        id: 1,
        title: "Waiting for B2B prospects to need a SaaS product like yours could take years",
        problem:
            "Our clients don't make software decisions every day. So catching them at that perfect 'right time, right place' moment? It's a long shot. And when the buying cycle stretches over years, there's no telling if we'll ever connect when it actually matters.",
        problemAuthor: "Andy",
        problemRole: "Director of operations at a legal technology platform",
        solution:
            "We don't wait around for lucky breaks. Instead, we build a reliable, cross-channel nurturing system that targets leads with real buying intent, ready to switch to your SaaS. We actively manage your pipeline to ensure consistent deal flow.",
    },
    {
        id: 2,
        title: "You're stuck chasing leads who show interest and then ghost you",
        problem:
            "Prospects engage with your content, download resources, even book demos — then disappear. The follow-up process becomes a guessing game of timing and messaging.",
        problemAuthor: "Sarah",
        problemRole: "VP of Sales at a HR tech company",
        solution:
            "We implement multi-touch sequences across email, LinkedIn, and phone that keep your brand top-of-mind. Our SDRs know exactly when and how to re-engage cold leads to warm them back up.",
    },
    {
        id: 3,
        title: "You need to scale your SDR team but hiring delays are slowing everything down",
        problem:
            "Finding qualified SDRs takes months. Training them takes more months. By the time they're productive, your pipeline has already suffered and targets are missed.",
        problemAuthor: "Michael",
        problemRole: "CEO at a fintech startup",
        solution:
            "Get a fully trained, ready-to-go SDR team within weeks. Our specialists already know B2B SaaS sales cycles and can start booking meetings from day one.",
    },
    {
        id: 4,
        title: "You invest too many resources in tech and channels, and get no real results",
        problem:
            "You've bought the tools, hired the people, tested the channels. But the ROI just isn't there. It feels like throwing money at a wall hoping something sticks.",
        problemAuthor: "Jennifer",
        problemRole: "CMO at an enterprise SaaS",
        solution:
            "We bring the tech stack, the expertise, and the proven playbooks. You only pay for results — qualified meetings with decision-makers who actually need your solution.",
    },
    {
        id: 5,
        title: "You want to scale fast in new markets but are afraid of compromising your brand",
        problem:
            "Expanding to new regions or verticals is risky. One wrong message or poorly targeted campaign can damage the reputation you've built over years.",
        problemAuthor: "David",
        problemRole: "Head of Growth at a B2B marketplace",
        solution:
            "Our market research and ICP refinement ensure every outreach is on-brand and on-target. We test messaging carefully before scaling, protecting your reputation while driving growth.",
    },
];

const partnerTabs = [
    {
        id: "tailored",
        title: "Tailored strategies",
        heading: "We tailor a strategic outbound model to your SaaS, and then execute fast.",
        content:
            "First, we dig into your current outbound sales performance, audience segments and market analysis, and positioning to shape a focused, channel-specific approach that fits your business model. Then, we get straight to effective execution, without endless strategy decks.",
        extra:
            "80% of our clients start seeing real traction and booking high-value meetings within the first 30 days. However, a three-month pilot period is essential to fully optimize campaigns, perform A/B testing, refine strategies, and scale meeting volumes.",
        link: "Learn more about our process",
    },
    {
        id: "pipeline",
        title: "Pipeline-boosting focus",
        heading: "We focus on filling your pipeline with sales-ready opportunities.",
        content:
            "Our entire operation is built around one goal: getting qualified meetings on your calendar. We don't just generate leads — we nurture them until they're ready to have a real sales conversation.",
        extra:
            "Every campaign is optimized for pipeline velocity, not vanity metrics. We track and improve conversion rates at every stage of the funnel.",
        link: "See our results",
    },
    {
        id: "playbooks",
        title: "Flexible playbooks",
        heading: "We adapt our playbooks to your specific market and ICP.",
        content:
            "No two SaaS companies are the same. We customize our outreach sequences, messaging, and channel mix based on your unique value proposition and target audience.",
        extra:
            "Our playbooks evolve with market feedback. We continuously test and refine approaches to maximize response rates and meeting quality.",
        link: "Explore our methodology",
    },
    {
        id: "channels",
        title: "Effective channel mixes",
        heading: "We combine channels for maximum impact and reach.",
        content:
            "Email alone isn't enough. LinkedIn alone isn't enough. We orchestrate multi-channel campaigns that reach prospects wherever they are, whenever they're most receptive.",
        extra: "Our channel mix is data-driven, based on what works best for your specific industry and buyer persona.",
        link: "Learn about our channels",
    },
    {
        id: "alignment",
        title: "Team alignment",
        heading: "We integrate seamlessly with your existing sales team.",
        content:
            "We're not a siloed vendor — we're an extension of your team. Regular syncs, shared dashboards, and transparent communication ensure we're always aligned on goals and strategy.",
        extra:
            "Your account manager becomes a trusted partner, providing insights and recommendations beyond just lead generation.",
        link: "Meet your team",
    },
    {
        id: "scalability",
        title: "Customization and scalability",
        heading: "We scale with you as your needs evolve.",
        content:
            "Starting small? We can run a focused pilot. Ready to go big? We can scale to multiple SDRs, markets, and channels. Our model flexes to match your growth trajectory.",
        extra: "No long-term lock-ins. We earn your business month over month with consistent results.",
        link: "Discuss your needs",
    },
];

const resultsTabs = ["Results", "KPIs", "Our process", "Peek inside", "Team", "Tech stack"];

const companyResults = [
    {
        company: "bob",
        logo: "bob",
        results: "100 appointments in 6 months and $50K in closed revenue in 3 months",
        challenge: "Long sales cycles that could last up to 2 years and no reliable lead qualification system",
    },
    {
        company: "Unifocus",
        logo: "UNIFOCUS",
        results: "56 appointments in 8 months",
        challenge: "A shortage of skilled SDRs, a long sales cycle, and limited resources",
    },
    {
        company: "pairaphrase",
        logo: "pairaphrase",
        results: "203 appointments in 17 months",
        challenge:
            "Difficulty scaling to the U.S. market and low sales predictability, resulting in irregular client inflow",
    },
    {
        company: "Virayo",
        logo: "VIRAYO",
        results: "3 major deals, with an average deal size of $8K",
        challenge: "Prolonged sales cycles and weak positioning which hindered the company's rapid growth.",
    },
    {
        company: "JourneyDXP",
        logo: "JourneyDXP",
        results: "125 appointments in 17 months, with 8-10 qualified meetings per month",
        challenge:
            "Unclear market positioning that led to inconsistent lead gen and poor engagement with large enterprises.",
    },
    {
        company: "Appruv",
        logo: "Appruv",
        results: "155 appointments in 2 years",
        challenge: "Inefficient sales team expansion, declining appointments, and vendor reluctance.",
    },
    {
        company: "grafi",
        logo: "grafi",
        results: "80 appointments in 7 months",
        challenge: "Limited outreach capacity, an unreleased product, and an undefined target audience.",
    },
    {
        company: "Labrador",
        logo: "Labrador",
        results: "51 appointments in 8 months",
        challenge: "Expanding to and competing in foreign markets and raising product awareness for their niche CMS",
    },
];

const kpiStats = [
    "15%+ demo-to-close rates",
    "60% faster decision making",
    "50%+ more qualified opportunities at the top of the funnel",
    "3x ROI on lead generation investment within 6 months",
];

const processStages = [
    {
        id: 1,
        title: "Strategic planning and kickoff",
        duration: "1-14 days",
        description:
            "Frame the scope of work, predict expected deliverables, and build a high-impact initial strategy to mitigate the risk of unproductive outreach. We start by taking a deep dive into your ICP, reviewing previous strategies, segmenting your total addressable market, and crafting a tailored and unified outreach strategy.",
    },
    {
        id: 2,
        title: "Test campaigns and optimization",
        duration: "15-60 days",
        description:
            "Launch initial campaigns across selected channels, A/B test messaging and sequences, and gather data on what resonates with your target audience. We iterate rapidly based on response rates and meeting quality.",
    },
    {
        id: 3,
        title: "Scaling and process documentation",
        duration: "60-90 days",
        description:
            "Double down on winning approaches, expand to additional segments or channels, and document playbooks for consistent execution. This is where pipeline velocity really picks up.",
    },
    {
        id: 4,
        title: "Engagement expansion or transition",
        duration: "90+ days",
        description:
            "Based on results, we either expand the engagement to new markets/products or transition knowledge to your internal team. Either way, you have a proven playbook to scale.",
    },
];

const peekInsideTabs = [
    {
        id: "opportunity",
        title: "Opportunity and market analysis",
        content:
            "Before launching any campaign, we lay the groundwork by pinpointing your most profitable ICPs and segments so that we're aligned on where the real opportunities lie. We dig into your ideal customer's role, goals, pain points, and KPIs to craft messaging that actually resonates. Then, we layer in insights from your historical sales data, our internal benchmarks, and proven strategies from similar campaigns. Before you sign anything, you'll receive a full strategic blueprint, complete with addressable market analysis and sample contacts, so expectations are clear from day one.",
    },
    {
        id: "sourcing",
        title: "Manual lead sourcing and qualification",
        content:
            "We don't rely on scraped databases or outdated lists. Our research team manually identifies and verifies each prospect, ensuring they match your ICP and have buying authority. Every lead is qualified before entering your pipeline.",
    },
    {
        id: "templates",
        title: "Hand-crafted templates and scripts",
        content:
            "Generic templates get ignored. We write custom messaging for each campaign, tested and refined based on real response data. Your outreach sounds human, relevant, and compelling.",
    },
    {
        id: "reporting",
        title: "Transparent reporting",
        content:
            "No black boxes. You get full visibility into campaign performance, pipeline metrics, and team activities through shared dashboards and regular reports.",
    },
    {
        id: "communication",
        title: "Proactive and open communication",
        content:
            "Weekly syncs, Slack channels, and responsive account managers ensure you're never in the dark. We flag issues early and celebrate wins together.",
    },
];

const techPartners = [
    "Reply",
    "HubSpot",
    "Expandi.io",
    "Chili Piper",
    "Nooks",
    "Apollo",
    "Dreamdata",
    "Google Workspace",
];

const proprietaryTools = [
    {
        name: "Folderly",
        description: "AI-driven SaaS platform for email deliverability",
        color: "bg-blue-500",
    },
    {
        name: "Charge",
        description: "Chrome extension for bulk outreach via Outlook",
        color: "bg-green-500",
    },
    {
        name: "Frostbite",
        description: "Intuitive and charge-free email outreach tool",
        color: "bg-orange-500",
    },
];

const services = {
    outbound: {
        title: "Outbound appointment setting",
        description: "Our basic appointment setting for SaaS companies includes these top-performing channels:",
        channels: [
            {
                title: "Cold email outreach",
                items: [
                    "Lead list building",
                    "Email domain deployment",
                    "Deliverability infrastructure setup",
                    "Message A/B testing",
                    "3- to 10-touch sequences",
                    "Response handling and follow-ups",
                ],
            },
            {
                title: "LinkedIn outreach",
                items: [
                    "LinkedIn profile setup and optimization",
                    "Content development and posting",
                    "100-500 connection requests per month",
                    "150-200 daily activities from account",
                    "Messaging sequences of 3-10 touches",
                    "Webinar and event support",
                ],
            },
            {
                title: "Cold calling",
                items: [
                    "Tailored scripts",
                    "Objection-handling and recalling protocols",
                    "2-3 reaching attempts",
                    "Voicemail messages",
                    "Native and non-native speakers available",
                    "Multiline calling",
                ],
            },
        ],
    },
    inbound: {
        title: "Inbound lead generation",
        description: "Capture and convert inbound interest with our proven methodologies:",
        channels: [
            {
                title: "Content marketing",
                items: [
                    "SEO-optimized blog content",
                    "Thought leadership articles",
                    "Case studies and whitepapers",
                    "Landing page optimization",
                    "Lead magnet creation",
                    "Content distribution",
                ],
            },
            {
                title: "Lead capture",
                items: [
                    "Form optimization",
                    "Chatbot implementation",
                    "Demo request handling",
                    "Lead scoring setup",
                    "CRM integration",
                    "Nurture sequence creation",
                ],
            },
            {
                title: "Account-based marketing",
                items: [
                    "Target account identification",
                    "Personalized campaigns",
                    "Multi-stakeholder outreach",
                    "Intent data integration",
                    "Engagement tracking",
                    "Sales-marketing alignment",
                ],
            },
        ],
    },
    complementary: {
        title: "Complementary services",
        description: "Enhance your lead generation with these additional services:",
        channels: [
            {
                title: "Sales enablement",
                items: [
                    "Sales playbook creation",
                    "Objection handling guides",
                    "Competitive battle cards",
                    "Demo scripts",
                    "Proposal templates",
                    "Training and coaching",
                ],
            },
            {
                title: "CRM optimization",
                items: [
                    "Pipeline management setup",
                    "Workflow automation",
                    "Reporting dashboards",
                    "Data hygiene processes",
                    "Integration setup",
                    "Team training",
                ],
            },
            {
                title: "Market research",
                items: [
                    "ICP refinement",
                    "Competitor analysis",
                    "Market sizing",
                    "Buyer persona development",
                    "Messaging testing",
                    "Win/loss analysis",
                ],
            },
        ],
    },
};

const nutshellSteps = [
    ["ICP & TAM analysis", "Lead segmentation", "Lead qualification", "Domain setup"],
    ["Multiple ICP testing", "VP and emails creation", "Infrastructure set-up", "Domain health tracking"],
    ["Response handling", "No-show management", "Appointment booking", "Pitching", "Closing deals"],
];

const saasTypes = [
    "HR tech platforms",
    "Fintech solutions",
    "Marketing automation",
    "Sales enablement tools",
    "Project management software",
    "Customer success platforms",
    "Data analytics tools",
    "Cybersecurity solutions",
    "Healthcare SaaS",
    "EdTech platforms",
    "Legal tech solutions",
];

// ============ COMPONENTS ============

function HeroSection() {
    return (
        <section className="relative py-12 lg:py-20 bg-[#1a1a1a]">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#AD8253]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c3a177]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 text-[#a1a1a1] hover:text-[#AD8253] transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        All industries
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-[#AD8253] font-medium mb-4">#1 SaaS lead generation partner</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Add 50%+ more qualified SaaS leads to your pipeline
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            We'll double your B2B SaaS pipeline value by engaging the right decision-makers at the right time via the
                            most effective channels, so your team can focus on closing deals consistently, even in a competitive
                            landscape.
                        </p>
                        <div>
                            <BookingButton
                                text="Book a consultation"
                                variant="primary"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#AD8253] text-white rounded-lg hover:bg-[#8a6842] transition-colors font-medium"
                                source="industry-saas-hero"
                            />
                            <p className="text-sm text-[#6b6b6b] mt-3">* schedule a 15-30-min call with our sales executive</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-card p-6 min-h-[400px] flex items-center justify-center border-[#AD8253]/20">
                            <div className="text-center">
                                <Target className="w-16 h-16 text-[#AD8253] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">SaaS Growth Engine</h3>
                                <p className="text-[#a1a1a1]">Predictable pipeline generation for scalable insights.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LogoBar() {
    return (
        <section className="py-12 bg-[#272727] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <p className="text-white font-semibold whitespace-nowrap">
                        We helped great SaaS brands
                        <br />
                        generate B2B leads
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {saasLogos.map((logo) => (
                            <span key={logo.name} className="text-[#6b6b6b] hover:text-[#AD8253] font-medium text-lg transition-colors">
                                {logo.text}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChallengesSection() {
    const [activeChallenge, setActiveChallenge] = useState(0);

    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Challenges we solve</h2>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        {challenges.map((challenge, index) => (
                            <button
                                key={challenge.id}
                                onClick={() => setActiveChallenge(index)}
                                className={`w-full text-left p-4 rounded-lg transition-all ${activeChallenge === index
                                    ? "bg-[#272727] border-l-4 border-[#AD8253]"
                                    : "bg-[#272727]/50 hover:bg-[#272727]"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className={`${activeChallenge === index ? "text-[#AD8253]" : "text-gray-300"} text-sm lg:text-base font-medium`}
                                    >
                                        {challenge.title}
                                    </span>
                                    {activeChallenge === index && <ArrowRight className="w-4 h-4 text-[#AD8253]" />}
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="bg-[#272727] rounded-2xl p-8 border border-white/5">
                        <div className="mb-8">
                            <h3 className="text-white font-semibold text-lg mb-4">Problem</h3>
                            <p className="text-gray-300 italic leading-relaxed">
                                {challenges[activeChallenge].problem.split(" ").map((word, i) =>
                                    word.includes("catching") || word.includes("right") || word.includes("long") ? (
                                        <span key={i} className="text-[#AD8253]">
                                            {word}{" "}
                                        </span>
                                    ) : (
                                        word + " "
                                    ),
                                )}
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-white font-medium">{challenges[activeChallenge].problemAuthor}</p>
                                <p className="text-gray-500 text-sm">{challenges[activeChallenge].problemRole}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4">Solution</h3>
                            <p className="text-gray-300 leading-relaxed">{challenges[activeChallenge].solution}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PartnerSection() {
    const [activeTab, setActiveTab] = useState("tailored");

    const activeContent = partnerTabs.find((tab) => tab.id === activeTab);

    return (
        <section className="py-20 bg-[#272727] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(173,130,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(173,130,83,1) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Your lead generation partner for a<br />
                        predictable sales pipeline
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto">
                        We're not just another SaaS lead generation agency promising lots of meetings. We're an integrated growth
                        partner, bridging the gap between your product and decision makers who actually need your solution.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        {partnerTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full text-left p-4 rounded-lg transition-all ${activeTab === tab.id
                                    ? "bg-[#1a1a1a] border-l-4 border-[#AD8253] text-[#AD8253]"
                                    : "bg-[#1a1a1a]/50 hover:bg-[#1a1a1a] text-white"
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">{tab.title}</span>
                                    {activeTab === tab.id && <ArrowRight className="w-4 h-4" />}
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl p-8 border border-white/5">
                        {activeContent && (
                            <>
                                <h3 className="text-xl font-bold text-white mb-4">{activeContent.heading}</h3>
                                <p className="text-[#a1a1a1] mb-4 leading-relaxed">{activeContent.content}</p>
                                <p className="text-[#a1a1a1] mb-6 leading-relaxed">{activeContent.extra}</p>
                                <Link href="#" className="text-[#AD8253] font-medium hover:text-[#c3a177] transition-colors">
                                    {activeContent.link}
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ResultsSection() {
    const [activeTab, setActiveTab] = useState("Results");

    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">
                    What results to expect from our
                    <br />
                    partnership
                </h2>

                <div className="flex justify-center mb-12 overflow-x-auto">
                    <div className="inline-flex bg-[#272727] rounded-full p-1 shadow-sm">
                        {resultsTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab ? "bg-[#AD8253] text-white shadow" : "text-[#a1a1a1] hover:text-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {activeTab === "Results" && (
                    <>
                        <div className="bg-[#272727] rounded-2xl overflow-hidden shadow-sm border border-white/5">
                            <div className="grid grid-cols-4 bg-[#1a1a1a] text-white p-4 hidden md:grid">
                                <div className="font-medium text-[#AD8253]">Company</div>
                                <div className="font-medium text-[#AD8253]">Campaign results and impact</div>
                                <div className="font-medium text-[#AD8253]">Key challenge resolved</div>
                                <div></div>
                            </div>

                            {companyResults.map((result, index) => (
                                <div
                                    key={index}
                                    className="grid md:grid-cols-4 p-4 border-b border-white/5 items-center hover:bg-[#333] transition-colors gap-4 md:gap-0"
                                >
                                    <div className="font-medium text-white">{result.logo}</div>
                                    <div className="font-semibold text-white/90"><span className="md:hidden text-[#AD8253] text-xs uppercase block mb-1">Result:</span>{result.results}</div>
                                    <div className="text-[#a1a1a1] text-sm"><span className="md:hidden text-[#AD8253] text-xs uppercase block mb-1">Challenge:</span>{result.challenge}</div>
                                    <div className="text-right">
                                        <Link href="#" className="text-[#AD8253] text-sm font-medium hover:text-[#c3a177]">
                                            Read the case study
                                        </Link>
                                    </div>
                                </div>
                            ))}

                            <div className="p-4 text-center text-[#a1a1a1]">+130 other SaaS companies</div>
                        </div>
                    </>
                )}

                {activeTab === "KPIs" && <KPIsContent />}
                {activeTab === "Our process" && <ProcessContent />}
                {activeTab === "Peek inside" && <PeekInsideContent />}
                {activeTab === "Team" && <TeamContent />}
                {activeTab === "Tech stack" && <TechStackContent />}
            </div>
        </section>
    );
}

function KPIsContent() {
    return (
        <div className="grid lg:grid-cols-2 gap-12 items-center text-white">
            <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Improved KPIs aligned with
                    <br />
                    your revenue growth
                </h3>
                <p className="text-[#a1a1a1] mb-6">
                    On average, our lead generation services deliver over $50K in closed revenue for SaaS companies in the first 3
                    months, with qualified appointments increasing 35% month-over-month.
                </p>
                <p className="text-white font-medium mb-4">Here's what else our B2B SaaS clients typically see:</p>
                <ul className="space-y-3">
                    {kpiStats.map((stat, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-[#AD8253] mt-0.5 flex-shrink-0" />
                            <span className="text-[#a1a1a1]">{stat}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-[#272727] rounded-2xl p-6 shadow-sm border border-white/5">
                <p className="text-sm text-[#a1a1a1] mb-4">Example: Appointments vs. new revenue growth over 12 month</p>
                <div className="h-64 relative">
                    <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-[#a1a1a1]">
                        <span>40</span>
                        <span>30</span>
                        <span>20</span>
                        <span>10</span>
                        <span>0</span>
                    </div>
                    <div className="absolute right-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-[#AD8253]">
                        <span>400K</span>
                        <span>300K</span>
                        <span>200K</span>
                        <span>100K</span>
                        <span>0</span>
                    </div>
                    <div className="ml-10 mr-14 h-full flex items-end gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                            <div key={month} className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full flex gap-0.5 items-end h-full">
                                    <div className="flex-1 bg-gray-600 rounded-t" style={{ height: `${10 + month * 5}%` }} />
                                    <div className="flex-1 bg-[#AD8253] rounded-t" style={{ height: `${5 + month * 7}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProcessContent() {
    const [activeStage, setActiveStage] = useState(0);

    return (
        <div className="text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our process from start to growth</h3>
            <p className="text-[#a1a1a1] mb-8 max-w-3xl">
                Our SaaS clients often start seeing real results within{" "}
                <span className="text-[#AD8253]">the first 30 days</span>. However, the "real shift" comes in 90 days, along
                with the ongoing strategy refinement shaped by real buyer behavior and market feedback. You'll see early
                momentum and have the freedom to pause, pivot, or scale as needed.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    {processStages.map((stage, index) => (
                        <div
                            key={stage.id}
                            className={`relative pl-8 pb-8 ${index < processStages.length - 1 ? "border-l-2 border-dashed border-gray-600" : ""}`}
                        >
                            <div
                                className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${index <= activeStage ? "bg-[#AD8253]" : "bg-gray-600"
                                    }`}
                            />
                            <button
                                onClick={() => setActiveStage(index)}
                                className={`text-left ${index === activeStage ? "text-[#AD8253]" : "text-[#a1a1a1]"} hover:text-[#AD8253] transition-colors font-medium`}
                            >
                                {stage.title}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="bg-[#272727] rounded-2xl p-6 shadow-sm border border-white/5">
                    <span className="inline-block px-3 py-1 bg-[#1a1a1a] rounded-full text-sm text-[#AD8253] mb-4 border border-[#AD8253]/20">
                        {processStages[activeStage].duration}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-4">{processStages[activeStage].title}</h4>
                    <div className="flex items-start gap-2 mb-4">
                        <Target className="w-5 h-5 text-[#AD8253] mt-0.5" />
                        <span className="font-medium text-white">Goal</span>
                    </div>
                    <p className="text-[#a1a1a1] leading-relaxed">{processStages[activeStage].description}</p>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                        <button
                            onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                            disabled={activeStage === 0}
                            className="p-2 rounded-full bg-[#1a1a1a] hover:bg-[#333] disabled:opacity-50 text-white"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="text-[#AD8253] font-medium">Stage {activeStage + 1}</span>
                        <button
                            onClick={() => setActiveStage(Math.min(processStages.length - 1, activeStage + 1))}
                            disabled={activeStage === processStages.length - 1}
                            className="p-2 rounded-full bg-[#1a1a1a] hover:bg-[#333] disabled:opacity-50 text-white"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PeekInsideContent() {
    const [activeTab, setActiveTab] = useState("opportunity");

    const activeContent = peekInsideTabs.find((tab) => tab.id === activeTab);

    return (
        <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">A peek inside our collaboration</h3>

            <div className="grid lg:grid-cols-3 gap-8 text-white">
                <div className="space-y-2">
                    {peekInsideTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full text-left p-4 rounded-lg transition-all ${activeTab === tab.id
                                ? "bg-[#272727] border-l-4 border-[#AD8253] text-[#AD8253]"
                                : "bg-[#272727]/50 hover:bg-[#272727] text-white"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-medium text-sm">{tab.title}</span>
                                {activeTab === tab.id && <ArrowRight className="w-4 h-4" />}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="lg:col-span-2 bg-[#272727] rounded-2xl p-8 shadow-sm border border-white/5">
                    {activeContent && (
                        <>
                            <h4 className="text-xl font-bold text-white mb-4">{activeContent.title}</h4>
                            <p className="text-[#a1a1a1] leading-relaxed mb-6">{activeContent.content}</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#1a1a1a] rounded-lg p-4">
                                    <p className="text-xs text-[#a1a1a1] mb-2">Competency mapping</p>
                                    <div className="h-24 bg-gradient-to-br from-[#AD8253]/20 to-[#AD8253]/5 rounded" />
                                </div>
                                <div className="bg-[#1a1a1a] rounded-lg p-4">
                                    <p className="text-xs text-[#a1a1a1] mb-2">Total addressable market calculation</p>
                                    <div className="h-24 bg-gradient-to-br from-[#AD8253]/20 to-[#AD8253]/5 rounded" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function TeamContent() {
    return (
        <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">High-impact talent</h3>

            <div className="grid lg:grid-cols-2 gap-8 text-white">
                <div className="bg-[#272727] rounded-2xl overflow-hidden shadow-sm border border-white/5">
                    <div className="h-48 bg-gradient-to-br from-[#AD8253]/20 to-[#AD8253]/5 flex items-center justify-center">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#AD8253]/30" />
                            <div className="w-12 h-12 rounded-full bg-[#AD8253] flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div className="w-16 h-16 rounded-full bg-[#AD8253]/30" />
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-xl font-bold mb-4">
                            A proven track record in delivering lead generation services for SaaS companies
                        </h4>
                        <p className="text-[#a1a1a1] mb-4">
                            We don't hand you just any SDRs. You get a team of specialists with real experience driving complex B2B
                            SaaS outreach. They understand regulatory nuance, speak your audience's language, and know how to build
                            trust with decision-makers from the first touch.
                        </p>
                    </div>
                </div>

                <div className="bg-[#272727] rounded-2xl p-6 shadow-sm border border-white/5">
                    <div className="bg-[#1a1a1a] rounded-lg mb-6 p-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-sm text-[#a1a1a1]">
                                <Users className="w-4 h-4 text-[#AD8253]" />
                                Account manager
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#a1a1a1]">
                                <Target className="w-4 h-4 text-[#AD8253]" />
                                Lead researcher
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#a1a1a1]">
                                <FileText className="w-4 h-4 text-[#AD8253]" />
                                Sales copywriter
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#a1a1a1]">
                                <Mail className="w-4 h-4 text-[#AD8253]" />
                                Deliverability
                            </div>
                        </div>
                    </div>
                    <h4 className="text-xl font-bold mb-4">
                        Dedicated professionals for every step of the funnel
                    </h4>
                    <p className="text-[#a1a1a1] mb-4">
                        Every lead generation campaign is run by a dedicated team aligned with your go-to-market strategy and fully
                        accountable for results. Your core team will include:
                    </p>
                    <ul className="space-y-2">
                        {[
                            "Account manager",
                            "Sales development representative",
                            "Lead researcher",
                            "Sales copywriter",
                            "Email deliverability and tech specialist",
                        ].map((role) => (
                            <li key={role} className="flex items-center gap-2 text-[#AD8253]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#AD8253]" />
                                {role}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function TechStackContent() {
    return (
        <div className="bg-[#272727] rounded-2xl p-8 lg:p-12 border border-white/5">
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">Top-tier tools at no extra cost</h3>
            <p className="text-[#a1a1a1] text-center max-w-3xl mx-auto mb-12">
                Save up to $10,000 annually on premium lead generation and marketing tools — all included in our retainer. Plus,
                when we couldn't find the right tools on the market, we developed our own software so you get the best tech
                without the extra hassle or costs.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-white font-semibold mb-6">Our tech partners</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {techPartners.map((partner) => (
                            <div key={partner} className="bg-[#1a1a1a] rounded-lg p-4 flex items-center justify-center border border-white/10">
                                <span className="text-white font-medium">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Proprietary tools</h4>
                    <div className="space-y-4">
                        {proprietaryTools.map((tool) => (
                            <div key={tool.name} className="bg-[#1a1a1a] rounded-lg p-4 flex items-center gap-4 border border-white/10">
                                <div className={`w-10 h-10 ${tool.color} rounded-lg flex items-center justify-center`}>
                                    <span className="text-white font-bold text-sm">{tool.name[0]}</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium">{tool.name}</p>
                                    <p className="text-[#a1a1a1] text-sm">{tool.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TestimonialsSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Testimonials from B2B
                        <br />
                        SaaS clients
                    </h2>
                    <Link href="#" className="text-[#AD8253] font-medium hover:text-[#c3a177] flex items-center gap-2">
                        Discover more reviews
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative rounded-2xl overflow-hidden bg-[#272727] aspect-video flex items-center justify-center group cursor-pointer border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur rounded-full text-white text-sm flex items-center gap-2 z-20">
                            <div className="w-2 h-2 rounded-full bg-[#AD8253]" />
                            Client testimonial
                        </div>
                        <div className="absolute bottom-6 left-6 z-20">
                            <p className="text-[#AD8253] text-4xl font-bold">$250,000</p>
                            <p className="text-white text-xl">in revenue expected</p>
                            <div className="mt-4">
                                <p className="text-white font-medium">JourneyDXP</p>
                                <p className="text-[#a1a1a1] text-sm">Bill Butler, CEO & Founder</p>
                            </div>
                        </div>
                        <div className="w-16 h-16 bg-[#AD8253] rounded-full flex items-center justify-center group-hover:bg-[#c3a177] transition-colors z-20">
                            <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#AD8253]/20 to-[#AD8253]/5 aspect-video flex items-center justify-center group cursor-pointer border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                            <div className="w-6 h-6 bg-[#AD8253] rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xs">C</span>
                            </div>
                            <span className="text-white text-sm font-medium">TESTIMONIALS</span>
                        </div>
                        <div className="absolute bottom-6 left-6 z-20">
                            <p className="text-white text-2xl font-bold mb-2">
                                ClickSalesMedia brings
                                <br />a little bit of
                                <br />
                                magic for us
                            </p>
                            <p className="text-[#AD8253] font-semibold">SEPY BAZZAZI</p>
                            <p className="text-[#a1a1a1] text-sm">DIRECTOR OF MARKETING</p>
                        </div>
                        <div className="w-16 h-16 bg-[#AD8253] rounded-full flex items-center justify-center group-hover:bg-[#c3a177] transition-colors z-20">
                            <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PricingSection() {
    return (
        <section className="py-20 bg-[#272727]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
                    Lead generation pricing tailored to your goals
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-sm relative overflow-hidden border border-white/5">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#AD8253]/20 to-transparent rounded-bl-full" />
                        <p className="text-[#a1a1a1] mb-2">Typical starter package for B2B SaaS firms:</p>
                        <p className="text-4xl font-bold text-[#AD8253] mb-6">from $5,000</p>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-[#AD8253]">1,500</p>
                                <p className="text-sm text-[#a1a1a1]">leads/month</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">3</p>
                                <p className="text-sm text-[#a1a1a1]">outreach channels</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-[#AD8253]">100</p>
                                <p className="text-sm text-[#a1a1a1]">guaranteed appts/year</p>
                            </div>
                        </div>

                        <p className="font-medium text-white mb-4">What we evaluate to tailor the most balanced budget:</p>
                        <ul className="space-y-2 text-[#a1a1a1] text-sm">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                                Your company size
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                                Your total addressable market and the number of ideal customer groups
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                                Your revenue and deal velocity goals
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2" />
                                The channels you'll be required to include in your plan
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-sm border border-white/5">
                        <p className="font-medium text-white mb-6">What's included in all packages:</p>
                        <ul className="space-y-4">
                            {[
                                "Full sales audit and strategy mapping",
                                "Total addressable market calculation and buyer profile mapping",
                                "Sales copywriting",
                                "Meetings booking",
                                "No-show recovery",
                                "Continuous refinement, data-driven fixes, and tech support",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#AD8253] mt-0.5" />
                                    <span className="text-[#a1a1a1]">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <BookingButton
                            text="Get my custom proposal"
                            variant="primary"
                            className="w-full mt-8 px-6 py-3 bg-[#AD8253] text-white rounded-lg hover:bg-[#8a6842] transition-colors font-medium"
                            source="industry-saas-pricing"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServicesSection() {
    const [activeService, setActiveService] = useState<"outbound" | "inbound" | "complementary">("outbound");

    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
                    Full-spectrum B2B SaaS lead generation
                    <br />
                    services
                </h2>

                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-[#272727] rounded-lg p-1">
                        <button
                            onClick={() => setActiveService("outbound")}
                            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeService === "outbound" ? "bg-[#AD8253]/10 text-[#AD8253]" : "text-[#a1a1a1]"
                                }`}
                        >
                            Outbound appointment setting
                        </button>
                        <button
                            onClick={() => setActiveService("inbound")}
                            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeService === "inbound" ? "bg-[#AD8253]/10 text-[#AD8253]" : "text-[#a1a1a1]"
                                }`}
                        >
                            Inbound lead generation
                        </button>
                        <button
                            onClick={() => setActiveService("complementary")}
                            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeService === "complementary" ? "bg-[#AD8253]/10 text-[#AD8253]" : "text-[#a1a1a1]"
                                }`}
                        >
                            Complementary services
                        </button>
                    </div>
                </div>

                <div className="bg-[#272727] rounded-2xl p-8 border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-2">{services[activeService].title}</h3>
                    <p className="text-[#a1a1a1] mb-8">{services[activeService].description}</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {services[activeService].channels.map((channel) => (
                            <div key={channel.title} className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                                <h4 className="font-semibold text-white mb-4 text-center">{channel.title}</h4>
                                <ul className="space-y-3">
                                    {channel.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-[#a1a1a1]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function NutshellSection() {
    return (
        <section className="py-20 bg-[#272727]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
                    Our lead generation
                    <br />
                    for SaaS in a nutshell
                </h2>

                <div className="relative">
                    <div className="mb-8">
                        <p className="text-[#a1a1a1] font-medium mb-4">Before ClickSalesMedia</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {nutshellSteps
                                .flat()
                                .slice(0, -2)
                                .map((step) => (
                                    <div key={step} className="bg-red-900/20 text-red-200 border border-red-900/30 px-4 py-3 rounded-lg text-sm text-center">
                                        {step}
                                    </div>
                                ))}
                            <div className="bg-green-900/20 text-green-200 border border-green-900/30 px-4 py-3 rounded-lg text-sm text-center">Pitching</div>
                            <div className="bg-green-900/20 text-green-200 border border-green-900/30 px-4 py-3 rounded-lg text-sm text-center">Closing deals</div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-[#AD8253] rounded flex items-center justify-center">
                                <span className="text-white font-bold text-xs">C</span>
                            </div>
                            <p className="text-white font-medium">With ClickSalesMedia</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            <div className="col-span-2 md:col-span-4 bg-[#AD8253]/10 text-[#AD8253] px-4 py-3 rounded-lg text-sm text-center border border-[#AD8253]/20 flex items-center justify-center font-medium">
                                We've got you covered on each step above
                            </div>
                            <div className="bg-green-900/20 text-green-200 border border-green-900/30 px-4 py-3 rounded-lg text-sm text-center">Pitching</div>
                            <div className="bg-green-900/20 text-green-200 border border-green-900/30 px-4 py-3 rounded-lg text-sm text-center">Closing deals</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SaaSTypesSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    <span className="text-[#AD8253]">We help SaaS companies</span> of different size
                    <br />
                    and specialization generate annual
                    <br />
                    revenue of $500K and more
                </h2>
                <p className="text-[#a1a1a1] mb-8 max-w-2xl">
                    We streamline lead generation for B2B SaaS companies, freeing them to focus on what truly matters: closing
                    deals. Mainly, we work with:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    {saasTypes.map((type) => (
                        <div
                            key={type}
                            className="bg-[#272727] px-6 py-4 rounded-lg text-white hover:bg-[#333] transition-colors border border-white/5 hover:border-[#AD8253]/30"
                        >
                            {type}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-20 bg-[#272727] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(173,130,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(173,130,83,1) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to start getting clients?</h2>
                <p className="text-gray-400 mb-8">
                    Set up a brief meeting with one of our experts to facilitate your business growth.
                </p>
                <BookingButton
                    text="Schedule 30-min call"
                    variant="primary"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#AD8253] text-white rounded-lg hover:bg-[#c3a177] transition-colors font-medium"
                    source="industry-saas-cta"
                />
            </div>
        </section>
    );
}

// ============ MAIN PAGE ============

export default function SaaSIndustryPage() {
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
        <main className="min-h-screen bg-[#1a1a1a]">
            <Navigation />
            <HeroSection />
            <ChallengesSection />
            <PartnerSection />
            <ResultsSection />
            <TestimonialsSection />
            <PricingSection />
            <ServicesSection />
            <NutshellSection />
            <SaaSTypesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
