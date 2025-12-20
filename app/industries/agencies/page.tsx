"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { BookingButton } from "@/components/booking/BookingButton";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Check,
    Target,
    Users,
    FileText,
    Mail,
    Play,
    Briefcase,
} from "lucide-react";

// ============ DATA ============

const agencyLogos = [
    { name: "DigitalPeak", text: "DigitalPeak" },
    { name: "CreativeMinds", text: "CreativeMinds" },
    { name: "GrowthHackers", text: "GrowthHackers" },
    { name: "DevSquad", text: "DevSquad" },
    { name: "BrandBold", text: "BrandBold" },
    { name: "TechFlow", text: "TechFlow" },
];

const challenges = [
    {
        id: 1,
        title: "Relentless 'feast or famine' revenue cycles",
        problem:
            "Agencies often oscillate between being overwhelmed with work and scrambling for new business. Relying on referrals means you have zero control over your pipeline predictability.",
        problemAuthor: "James",
        problemRole: "Founder of a Development Agency",
        solution:
            "We build a consistent outbound engine that runs 24/7. This smooths out your revenue peaks and valleys, giving you a predictable stream of qualified meetings regardless of referral volume.",
    },
    {
        id: 2,
        title: "Difficulty breaking into larger enterprise accounts",
        problem:
            "You have the skills to serve big clients, but your current network only brings in SMBs. Breaking through the noise to reach enterprise decision-makers feels impossible.",
        problemAuthor: "Elena",
        problemRole: "CEO of a Branding Agency",
        solution:
            "Our enterprise-focused outreach strategies target key stakeholders at large organizations. We use account-based marketing tactics to position your agency as the premium partner they need.",
    },
    {
        id: 3,
        title: "Founder-led sales are unscalable",
        problem:
            "As a founder, you're the best salesperson, but you're also the CEO. You can't scale the agency if you're stuck doing all the prospecting and closing yourself.",
        problemAuthor: "Marcus",
        problemRole: "Owner of a Digital Marketing Firm",
        solution:
            "We act as your dedicated SDR team, filling your calendar with qualified leads so you can focus on high-level strategy and closing the biggest deals, or hand them off to a sales lead.",
    },
    {
        id: 4,
        title: "Generic outreach yields zero results",
        problem:
            "Sending cold emails that look like every other agency's pitch gets you deleted. You need a way to cut through the noise and show unique value immediately.",
        problemAuthor: "Thomas",
        problemRole: "VP of Growth at a UX Design Studio",
        solution:
            "We craft hyper-personalized messaging that speaks directly to your prospect's specific pain points and industry challenges, positioning your agency as a specialized sentiment, not a commodity.",
    },
    {
        id: 5,
        title: "Long sales cycles for high-ticket services",
        problem:
            "Selling $50k+ projects takes time. Leads go cold if not nurtured properly, and you lose momentum with key decision-makers.",
        problemAuthor: "Sophia",
        problemRole: "Director at a Consulting Firm",
        solution:
            "Our nurturing sequences keep your agency top-of-mind with value-driven content. We maintain engagement throughout the long buying cycle, ensuring you're there when they're ready to sign.",
    },
];

const partnerTabs = [
    {
        id: "tailored",
        title: "Agency-specific strategies",
        heading: "We design outreach that highlights your unique creative or technical edge.",
        content:
            "Agencies aren't SaaS products. We understand the nuances of selling services—trust, portfolio, and expertise. We build campaigns that showcase your case studies and past wins to build immediate credibility.",
        extra:
            "Our approach positions you as a strategic partner, not just a vendor. We target decision-makers who value quality and are ready to invest in professional services.",
        link: "See our agency approach",
    },
    {
        id: "pipeline",
        title: "Consistent lead flow",
        heading: "End the 'referral waiting game' forever.",
        content:
            "We replace hope with a system. By actively prospecting your ideal clients, we ensure your pipeline is always full, allowing you to be selective about the projects you take on.",
        extra:
            "Predictable growth allows you to hire confidently and plan for the future, rather than reacting to short-term project influxes.",
        link: "View pipeline results",
    },
    {
        id: "playbooks",
        title: "Vertical expertise",
        heading: "We help you dominate your niche.",
        content:
            "Whether you target healthcare, fintech, or e-commerce brands, we build specialized lists and messaging that speaks the insider language of your target vertical.",
        extra:
            "Targeting a specific niche increases response rates significantly. We help you refine your ICP to focus on the most profitable market segments.",
        link: "Explore vertical solutions",
    },
    {
        id: "channels",
        title: "Multi-channel presence",
        heading: "Be everywhere your future clients are.",
        content:
            "From LinkedIn thought leadership to targeted email campaigns, we ensure your agency is visible. We treat your brand with the same care you treat your clients'.",
        extra: "Our multi-channel approach increases touchpoints, building familiarity and trust before the first call.",
        link: "Learn about channels",
    },
    {
        id: "alignment",
        title: "Seamless integration",
        heading: "We work as an extension of your growth team.",
        content:
            "We integrate with your CRM and Slack. It significantly reduces the friction of handing off leads and ensures your sales team has all the context they need to close.",
        extra:
            "Think of us as your fractional outbound sales department, fully aligned with your agency's culture and goals.",
        link: "Meet your team",
    },
    {
        id: "scalability",
        title: "Scale on demand",
        heading: "Grow your outreach as you grow your delivery capacity.",
        content:
            "Need to slow down lead flow while you hire more devs? No problem. Ready to ramp up for Q4? We can scale up instantly. You have full control.",
        extra: "Flexible engagement models mean you're never paying for leads you can't handle.",
        link: "Discuss scaling",
    },
];

const resultsTabs = ["Results", "KPIs", "Our process", "Peek inside", "Team", "Tech stack"];

const companyResults = [
    {
        company: "DigitalPeak",
        logo: "DigitalPeak",
        results: "45 qualified meetings in 4 months",
        challenge: "Needed to diversify away from Upwork and referrals.",
    },
    {
        company: "TechFlow",
        logo: "TechFlow",
        results: "$1.2M in pipeline generated in 6 months",
        challenge: "Struggling to reach CTOs at enterprise fintech companies.",
    },
    {
        company: "BrandBold",
        logo: "BrandBold",
        results: "30% increase in deal size average",
        challenge: "Attracting low-budget leads that wasted sales time.",
    },
    {
        company: "DevSquad",
        logo: "DevSquad",
        results: "3 major enterprise contracts signed",
        challenge: "Long sales cycles and difficulty maintaining follow-up momentum.",
    },
    {
        company: "CreativeMinds",
        logo: "CreativeMinds",
        results: "85 appointments in 10 months",
        challenge: "Inconsistent lead flow causing staffing issues.",
    },
    {
        company: "GrowthHackers",
        logo: "GrowthHackers",
        results: "15 qualified leads per month consistently",
        challenge: "Founder was doing all sales manually.",
    },
    {
        company: "PixelPerfect",
        logo: "PixelPerfect",
        results: "ROI of 800% in first year",
        challenge: "High competition in the web design space.",
    },
    {
        company: "CodeCraft",
        logo: "CodeCraft",
        results: "Expanded to US market successfully",
        challenge: "European agency needing US market entry strategy.",
    },
];

const kpiStats = [
    "20%+ meeting booking rate",
    "40% reduction in sales cycle length",
    "100% pipeline visibility",
    "5x ROI on outbound spend",
];

const processStages = [
    {
        id: 1,
        title: "Agency positioning & ICP",
        duration: "1-14 days",
        description:
            "We define exactly what makes your agency unique. We identify your 'sweet spot' clients—those with the budget and need for your specific expertise. We build a list of decision-makers who fit this profile perfect.",
    },
    {
        id: 2,
        title: "Campaign launch & testing",
        duration: "15-60 days",
        description:
            "We launch campaigns highlighting your portfolio and value proposition. We A/B test different angles: value-led, case-study led, and pain-point led to see what resonates with your niche.",
    },
    {
        id: 3,
        title: "Lead qualification & booking",
        duration: "60-90 days",
        description:
            "We handle the back-and-forth. We qualify leads to ensure they have the budget and intent before they ever hit your calendar. You only speak to prospects ready to talk business.",
    },
    {
        id: 4,
        title: "Optimization & scaling",
        duration: "90+ days",
        description:
            "We double down on the verticals and messaging driving the most revenue. We help you expand into adjacent markets or new service offerings based on market feedback.",
    },
];

const peekInsideTabs = [
    {
        id: "opportunity",
        title: "Vertical market analysis",
        content:
            "We analyze which industries are currently buying your services. We look at funding rounds, hiring trends, and technology adoption to find companies that likely need agency support right now.",
    },
    {
        id: "sourcing",
        title: "Decision-maker mapping",
        content:
            "We don't just find 'CEOs'. For a design agency, we might target 'VP of Brand'. For a dev shop, 'CTO' or 'Product Director'. We map the buying committee for each target account.",
    },
    {
        id: "templates",
        title: "Portfolio-infused outreach",
        content:
            "We weave your past work into the outreach. 'We built a similar app for Competitor X' is a powerful hook. We make sure your expertise shines through in every email.",
    },
    {
        id: "reporting",
        title: "Real-time dashboard",
        content:
            "See exactly how many companies we've reached, who opened, who clicked, and who booked. You'll always know the health of your agency's pipeline.",
    },
    {
        id: "communication",
        title: "Slack integration",
        content:
            "We communicate in real-time. When a hot lead replies, you'll know instantly. We work as a true partner, not a distant vendor.",
    },
];

const techPartners = [
    "HubSpot",
    "Salesforce",
    "Apollo",
    "ZoomInfo",
    "LinkedIn Sales Nav",
    "Outreach",
    "Lemlist",
    "Google Workspace",
];

const proprietaryTools = [
    {
        name: "Folderly",
        description: "Email deliverability optimization",
        color: "bg-blue-500",
    },
    {
        name: "Charge",
        description: "Advanced outreach automation",
        color: "bg-green-500",
    },
    {
        name: "Frostbite",
        description: "Cold outreach scalability",
        color: "bg-orange-500",
    },
];

const services = {
    outbound: {
        title: "Outbound Client Acquisition",
        description: "Proactive strategies to win your dream agency clients:",
        channels: [
            {
                title: "Cold Email",
                items: [
                    "Custom domain setup",
                    "Inbox rotation",
                    "Copywriting that sells services",
                    "Case study integration",
                    "Follow-up automation",
                    "Meeting booking",
                ],
            },
            {
                title: "LinkedIn Pro",
                items: [
                    "Profile optimization for founders",
                    "Thought leadership distribution",
                    "Network expansion",
                    "Direct messaging sequences",
                    "Social selling",
                    "Engagement monitoring",
                ],
            },
            {
                title: "Account-Based",
                items: [
                    "Top 100 dream client list",
                    "Multi-stakeholder mapping",
                    "Personalized video outreach",
                    "Direct mail integration",
                    "High-touch nurturing",
                    "Strategic targeted ads",
                ],
            },
        ],
    },
    inbound: {
        title: "Inbound Lead Capture",
        description: "Convert more of your website traffic into qualified leads:",
        channels: [
            {
                title: "Lead Magnets",
                items: [
                    "Whitepaper creation",
                    "Industry reports",
                    "Webinar funnels",
                    "Email course setup",
                    "Newsletter growth",
                    "Asset design",
                ],
            },
            {
                title: "Website CRO",
                items: [
                    "Form optimization",
                    "Chatbot flows",
                    "Scheduling tool embedding",
                    "Exit-intent popups",
                    "Landing page testing",
                    "Analytics setup",
                ],
            },
            {
                title: "Content Strategy",
                items: [
                    "SEO-driven blog posts",
                    "Case study writing",
                    "Service page optimization",
                    "Authority building",
                    "Content distribution",
                    "Metrics tracking",
                ],
            },
        ],
    },
    complementary: {
        title: "Sales Enablement",
        description: "Tools to help you close the deals we generate:",
        channels: [
            {
                title: "Pitch Assets",
                items: [
                    "Sales deck design",
                    "Proposal templates",
                    "One-pagers",
                    "Pricing calculators",
                    "Contract templates",
                    "Competitor battlecards",
                ],
            },
            {
                title: "CRM Setup",
                items: [
                    "HubSpot/Pipedrive config",
                    "Deal stage definitions",
                    "Automated workflows",
                    "Reporting dashboards",
                    "Data migration",
                    "Team training",
                ],
            },
            {
                title: "Sales Training",
                items: [
                    "Discovery call coaching",
                    "Objection handling",
                    "Negotiation tactics",
                    "Closing techniques",
                    "Pipeline review",
                    "Sales script refinement",
                ],
            },
        ],
    },
};

const nutshellSteps = [
    ["Niche definition", "ICP identification", "Offer refinement", "List building"],
    ["Campaign crafting", "Tech setup", "Launch & Reach", "A/B Testing"],
    ["Lead qualification", "Meeting booking", "Proposal sent", "Follow-up", "Deal Closed"],
];

const agencyTypes = [
    "Digital Marketing Agencies",
    "Software Dev Shops",
    "Branding & Design Studios",
    "Staffing & Recruitment",
    "PR & Communications",
    "Consulting Firms",
    "SEO & Content Agencies",
    "Video Production Houses",
    "UX/UI Design Firms",
    "IT Managed Services",
    "Mobile App Developers",
];

// ============ COMPONENTS ============
// (Reusing the same component structure as SaaS Page with adapted data)

function HeroSection() {
    return (
        <section className="relative py-12 lg:py-20 bg-[#1a1a1a]">
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
                        <p className="text-[#AD8253] font-medium mb-4">For B2B Agencies & Service Firms</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Scale your agency with <span className="text-[#AD8253]">qualified B2B leads</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Stop relying on referrals. We build a predictable outbound engine that targets your dream clients, fills your pipeline, and helps you break into new verticals or enterprise accounts.
                        </p>
                        <div>
                            <div className="flex flex-col items-start gap-3">
                                <BookingButton
                                    text="Get a growth plan"
                                    variant="primary"
                                    size="lg"
                                    source="industry-agencies-hero"
                                />
                                <p className="text-sm text-[#6b6b6b]">* schedule a 15-30-min call with our agency experts</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-card p-6 min-h-[400px] flex items-center justify-center border-[#AD8253]/20">
                            <div className="text-center">
                                <Briefcase className="w-16 h-16 text-[#AD8253] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Agency Growth Engine</h3>
                                <p className="text-[#a1a1a1]">Predictable client acquisition for modern agencies.</p>
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
                        Trusted by leading agencies
                        <br />
                        to drive growth
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {agencyLogos.map((logo) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Agency Growth Challenges We Solve</h2>

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
                            <h3 className="text-white font-semibold text-lg mb-4">The Pain</h3>
                            <p className="text-gray-300 italic leading-relaxed">
                                {challenges[activeChallenge].problem}
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-white font-medium">{challenges[activeChallenge].problemAuthor}</p>
                                <p className="text-gray-500 text-sm">{challenges[activeChallenge].problemRole}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold text-lg mb-4">Our Solution</h3>
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
                        Your partner in <br />
                        predictable agency scaling
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto">
                        We don't offer generic lead gen. We offer a strategic partnership that understands the agency business model—selling expertise, trust, and premium services.
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
                    Results we deliver for agencies
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
                                <div className="font-medium text-[#AD8253]">Agency</div>
                                <div className="font-medium text-[#AD8253]">Growth Results</div>
                                <div className="font-medium text-[#AD8253]">Main Challenge Solved</div>
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
                                            Read case study
                                        </Link>
                                    </div>
                                </div>
                            ))}
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
                    Metrics that matter for agency owners
                </h3>
                <p className="text-[#a1a1a1] mb-6">
                    We track everything from open rates to closed deals. Our goal is to give you a clear ROI on your marketing spend and a predictable pipeline.
                </p>
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
                <p className="text-sm text-[#a1a1a1] mb-4">Agency Revenue Growth (Avg Client)</p>
                <div className="h-64 relative">
                    <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-[#a1a1a1]">
                        <span>3M</span>
                        <span>2M</span>
                        <span>1M</span>
                        <span>0.5M</span>
                        <span>0</span>
                    </div>
                    <div className="ml-10 mr-4 h-full flex items-end gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                            <div key={month} className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full bg-[#AD8253] rounded-t opacity-80" style={{ height: `${20 + month * 6}%` }} />
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
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">From kickoff to contracts</h3>
            <p className="text-[#a1a1a1] mb-8 max-w-3xl">
                We move fast. Within 30 days, you'll have a fully operational outbound system. By day 90, you'll have a proven playbook for scalable growth.
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
                    <p className="text-[#a1a1a1] leading-relaxed">{processStages[activeStage].description}</p>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Inside our agency workflow</h3>
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
                            <span className="font-medium text-sm">{tab.title}</span>
                        </button>
                    ))}
                </div>
                <div className="lg:col-span-2 bg-[#272727] rounded-2xl p-8 shadow-sm border border-white/5">
                    {activeContent && (
                        <>
                            <h4 className="text-xl font-bold text-white mb-4">{activeContent.title}</h4>
                            <p className="text-[#a1a1a1] leading-relaxed mb-6">{activeContent.content}</p>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Your specialized growth team</h3>
            <div className="grid lg:grid-cols-2 gap-8 text-white">
                <div className="bg-[#272727] rounded-2xl overflow-hidden shadow-sm border border-white/5 p-6">
                    <h4 className="text-xl font-bold mb-4">Experts in B2B Service Sales</h4>
                    <p className="text-[#a1a1a1] mb-4">
                        Selling intangible services is different from selling products. Our SDRs are trained to sell expertise, handle 'trust-based' objections, and navigate complex decision-making units in large organizations.
                    </p>
                </div>
                <div className="bg-[#272727] rounded-2xl p-6 shadow-sm border border-white/5">
                    <h4 className="text-xl font-bold mb-4">Roles on your account</h4>
                    <ul className="space-y-2">
                        {["Account Strategist", "Senior SDR", "Copywriting Specialist", "Research Analyst", "Deliverability Expert"].map((role) => (
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">Enterprise-grade tech stack included</h3>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-white font-semibold mb-6">Partners & Integrations</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {techPartners.map((partner) => (
                            <div key={partner} className="bg-[#1a1a1a] rounded-lg p-4 flex items-center justify-center border border-white/10">
                                <span className="text-white font-medium">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6">Proprietary Tools</h4>
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">What Agency Founders Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"We went from relying 100% on referrals to having a predictable stream of 15-20 qualified appointments every month. It completely changed how we plan our growth."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">JD</div>
                            <div>
                                <p className="text-white font-bold">John Doe</p>
                                <p className="text-[#a1a1a1] text-sm">Founder, TechFlow Agency</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"The quality of leads is outstanding. These aren't just random inquiries; they are decision-makers at companies that actually fit our ICP."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">JS</div>
                            <div>
                                <p className="text-white font-bold">Jane Smith</p>
                                <p className="text-[#a1a1a1] text-sm">CEO, CreativeMinds</p>
                            </div>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Simple, transparent pricing</h2>
                <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-sm border border-white/5 max-w-3xl mx-auto text-center">
                    <p className="text-[#a1a1a1] mb-2 uppercase tracking-wide">Growth Partner Retainer</p>
                    <p className="text-5xl font-bold text-[#AD8253] mb-6">Custom</p>
                    <p className="text-white mb-8">
                        We build custom packages based on your agency's capacity, target market size, and growth goals.
                        Whether you need 5 meetings a month or 50, we have a plan for you.
                    </p>
                    <div className="flex justify-center">
                        <BookingButton
                            text="Get a quote"
                            variant="primary"
                            size="lg"
                            source="industry-agencies-pricing"
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Comprehensive Growth Services</h2>
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-[#272727] rounded-lg p-1">
                        {["outbound", "inbound", "complementary"].map((s) => (
                            <button
                                key={s}
                                onClick={() => setActiveService(s as any)}
                                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all capitalize ${activeService === s ? "bg-[#AD8253]/20 text-[#AD8253]" : "text-[#a1a1a1]"
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Agency Growth in a Nutshell</h2>
                <div className="grid lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Your Agency</div>
                    <div className="col-span-2 flex items-center justify-center">
                        <BookingButton
                            text="Start Growth Engine"
                            variant="primary"
                            className="w-full h-full text-lg"
                            source="industry-agencies-nutshell"
                        />
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Scalable Revenue</div>
                </div>
            </div>
        </section>
    );
}

function AgencyTypesSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">We specialize in helping:</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {agencyTypes.map((type) => (
                        <div key={type} className="bg-[#272727] px-6 py-4 rounded-lg text-white hover:bg-[#333] transition-colors border border-white/5 hover:border-[#AD8253]/30">
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
        <section className="py-20 bg-[#272727] relative">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(173,130,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(173,130,83,1) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Start predicting your revenue</h2>
                <p className="text-gray-400 mb-8">
                    Stop wondering where your next client is coming from. Let's build a machine that brings them to you.
                </p>
                <div className="flex justify-center">
                    <BookingButton
                        text="Book a Strategy Call"
                        variant="primary"
                        size="lg"
                        source="industry-agencies-cta"
                    />
                </div>
            </div>
        </section>
    );
}

export default function AgenciesIndustryPage() {
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
            <AgencyTypesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
