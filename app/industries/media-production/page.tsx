"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    Check,
    Video,
    Camera,
    Film,
    MonitorPlay,
    Clapperboard,
    Play,
} from "lucide-react";

// ============ DATA ============

const mediaLogos = [
    { name: "CineCraft", text: "CineCraft" },
    { name: "FrameWork", text: "FrameWork" },
    { name: "StudioOne", text: "StudioOne" },
    { name: "VividMotion", text: "VividMotion" },
    { name: "PixelPerfect", text: "PixelPerfect" },
    { name: "StoryLine", text: "StoryLine" },
];

const challenges = [
    {
        id: 1,
        title: "The 'Referral Coaster'",
        problem:
            "You survive on word-of-mouth. When it rains, it pours; but when your network dries up, you're left scrambling for projects to keep your editors and crew busy.",
        problemAuthor: "Alex",
        problemRole: "Founder of a Video Production House",
        solution:
            "We build a predictable outbound engine that generates qualified leads from brands and agencies. No more waiting for the phone to ring—we go get the work.",
    },
    {
        id: 2,
        title: "One-off projects vs. Retainers",
        problem:
            "You're tired of chasing $5k one-off gigs. You want ongoing retainer contracts (e.g., social content series, corporate training) that provide recurring revenue.",
        problemAuthor: "Jessica",
        problemRole: "Executive Producer",
        solution:
            "We target marketing directors with specific pitches for ongoing content needs, shifting the conversation from 'make us a video' to 'be our content partner'.",
    },
    {
        id: 3,
        title: "Pitching to non-creatives",
        problem:
            "Your reel looks amazing, but CFOs and Marketing VPs don't 'get it'. They care about ROI, not color grading.",
        problemAuthor: "Marcus",
        problemRole: "Creative Director",
        solution:
            "We translate your creative excellence into business value. Our messaging focuses on how your videos drive conversions, brand lift, and sales, speaking the language of the decision-maker.",
    },
    {
        id: 4,
        title: "Competition from 'iPhoneographers'",
        problem:
            "Clients think they can just shoot it on a phone. You're losing bids to cheaper, lower-quality options.",
        problemAuthor: "Sarah",
        problemRole: "Director of Photography",
        solution:
            "We target premium brands that understand the value of high-end production. We help you position your studio as the 'luxury' or 'strategic' choice that delivers results amateurs can't.",
    },
    {
        id: 5,
        title: "Long sales cycles",
        problem:
            "Detailed treatments, storyboards, budget negotiations... winning a commercial bid takes forever.",
        problemAuthor: "David",
        problemRole: "Head of Sales",
        solution:
            "We keep your pipeline full so a stalled deal doesn't kill your quarter. We also nurture leads with educational content so they're ready to buy when budget opens up.",
    },
];

const partnerTabs = [
    {
        id: "tailored",
        title: "Agency Partnerships",
        heading: "Be the 'White Label' partner.",
        content:
            "Ad agencies need high-quality production partners. We run campaigns targeting Creative Directors and Producers at ad agencies to get you on their preferred vendor list.",
        extra:
            "Get a steady stream of work from agency partners.",
        link: "See agency strategies",
    },
    {
        id: "pipeline",
        title: "Direct-to-Brand",
        heading: "Pitching CMOs directly.",
        content:
            "Bypass the agency markup. We connect you with Marketing Directors at mid-market and enterprise brands who need internal comms, social assets, and product videos.",
        extra:
            "Higher margins and direct creative control.",
        link: "View brand outreach",
    },
    {
        id: "playbooks",
        title: "Niche Focus",
        heading: "The Specialist wins.",
        content:
            "Are you the best at Food & Beverage tabletop? Or heavy industrial drone shots? We build campaigns that highlight your specific superpower to the exact buyers who need it.",
        extra:
            "Generalists compete on price. Specialists compete on value.",
        link: "Explore niche targeting",
    },
    {
        id: "channels",
        title: "Reel Distribution",
        heading: "Get your work seen.",
        content:
            "Your reel is your best sales tool. We use email and LinkedIn to get your portfolio in front of the people with the budget to hire you.",
        extra: "Turn views into meetings.",
        link: "Learn about distribution",
    },
    {
        id: "alignment",
        title: "Post-Production Sales",
        heading: "Filling the edit bay.",
        content:
            "Have downtime in the edit suite? We can run campaigns targeting companies with raw footage that needs editing, motion graphics, or VFX.",
        extra:
            "Keep your post-team billable year-round.",
        link: "Meet your team",
    },
    {
        id: "scalability",
        title: "Scale Your Studio",
        heading: "Grow beyond the founder.",
        content:
            "If the founder is the only one selling, the business can't grow. We act as your outsourced sales team, bringing in leads so you can focus on directing and producing.",
        extra: "Systemize your sales process.",
        link: "Discuss scaling",
    },
];

const resultsTabs = ["Results", "KPIs", "Our process", "Peek inside", "Team", "Tech stack"];

const companyResults = [
    {
        company: "CineCraft",
        logo: "CineCraft",
        results: "Landed 3 national TV spot contracts",
        challenge: "Was stuck doing local car dealership ads.",
    },
    {
        company: "FrameWork",
        logo: "FrameWork",
        results: "$500k in new retainer revenue",
        challenge: "Wanted to move from project-based to recurring revenue.",
    },
    {
        company: "StudioOne",
        logo: "StudioOne",
        results: "Partnered with 5 major ad agencies",
        challenge: "Needed a steady stream of agency overflow work.",
    },
    {
        company: "VividMotion",
        logo: "VividMotion",
        results: "Full calendar for Q3 and Q4",
        challenge: "Had zero projects booked for the upcoming quarter.",
    },
    {
        company: "PixelPerfect",
        logo: "PixelPerfect",
        results: "Signed a tech giant for explainer videos",
        challenge: "Specialized in 2D animation but couldn't find buyers.",
    },
    {
        company: "StoryLine",
        logo: "StoryLine",
        results: "10x ROI on cold outreach",
        challenge: "Relied 100% on referrals previously.",
    },
    {
        company: "DronePros",
        logo: "DronePros",
        results: "Contracted by 2 national real estate developers",
        challenge: "Niche drone service needing commercial clients.",
    },
    {
        company: "LiveStreamX",
        logo: "LiveStreamX",
        results: "Produced 12 virtual conferences",
        challenge: "Pivot to virtual events during market shift.",
    },
];

const kpiStats = [
    "10-15 Qualified Producer meetings/month",
    "30% increase in average project value",
    "3 new Agency Partner relationships/quarter",
    "Shortened pitch-to-close cycle",
];

const processStages = [
    {
        id: 1,
        title: "Reel Review & Positioning",
        duration: "1-7 days",
        description:
            "We analyze your best work. What are you world-class at? We help you package your portfolio into a 'capabilities deck' that sells.",
    },
    {
        id: 2,
        title: "List Building & Targeting",
        duration: "7-14 days",
        description:
            "We build two lists: (1) Brand Marketing Leaders and (2) Agency Producers. We identify the companies that align with your aesthetic and budget.",
    },
    {
        id: 3,
        title: "Outreach & Distribution",
        duration: "Ongoing",
        description:
            "We share your work. We use personalized email and LinkedIn to show your reel to decision-makers, asking for a meeting to discuss upcoming productions.",
    },
    {
        id: 4,
        title: "Bid Opportunity Management",
        duration: "Ongoing",
        description:
            "When a lead says 'Send us a bid', we qualify them and hand them off to you instantly. We track the pipeline from initial view to signed contract.",
    },
];

const peekInsideTabs = [
    {
        id: "opportunity",
        title: "Ad Spend Tracking",
        content:
            "We track brands increasing their digital ad spend. If they are spending more on ads, they need more creative assets to run.",
    },
    {
        id: "sourcing",
        title: "Agency Rosters",
        content:
            "We map out the org charts of major ad agencies to find the Producers and Creative Directors who actually hire vendors.",
    },
    {
        id: "templates",
        title: "Visual Emails",
        content:
            "Our emails aren't just text. We embed GIFs and thumbnails of your best work to grab attention instantly. Show, don't just tell.",
    },
    {
        id: "reporting",
        title: "Engagement Tracking",
        content:
            "We see who watched your reel, how long they watched, and if they shared it with a colleague.",
    },
    {
        id: "communication",
        title: "Real-time Slack",
        content:
            "Get notified the moment a Creative Director replies. Strike while the iron is hot.",
    },
];

const techPartners = [
    "Vimeo Enterprise",
    "Wistia",
    "Frame.io",
    "HubSpot",
    "Apollo",
    "LinkedIn Sales Nav",
    "Google Workspace",
    "Slack",
];

const proprietaryTools = [
    {
        name: "AdWatch",
        description: "Creative spend monitor",
        color: "bg-pink-500",
    },
    {
        name: "ReelTrack",
        description: "Portfolio engagement analytics",
        color: "bg-blue-500",
    },
    {
        name: "AgencyMap",
        description: "Org charts for ad agencies",
        color: "bg-purple-500",
    },
];

const services = {
    outbound: {
        title: "Lead Generation",
        description: "Fill your production calendar:",
        channels: [
            {
                title: "Direct Outreach",
                items: [
                    "CMO/VP Marketing targeting",
                    "Reel distribution campaigns",
                    "Agency partnership pitches",
                    "Event production sales",
                    "Retainer pitching",
                    "Meeting booking",
                ],
            },
            {
                title: "LinkedIn Strategy",
                items: [
                    "Producer networking",
                    "Content showcasing",
                    "InMail sequences",
                    "Company page growth",
                    "Social proof building",
                    "Engagement pods",
                ],
            },
            {
                title: "Physical Direct Mail",
                items: [
                    "Video brochures",
                    "Premium 'Look Books'",
                    "Swag boxes for Producers",
                    "QR code campaigns",
                    "Conference invites",
                    "Studio tour invites",
                ],
            },
        ],
    },
    inbound: {
        title: "Inbound Marketing",
        description: "Attract clients searching for quality:",
        channels: [
            {
                title: "SEO for Production",
                items: [
                    "'Video Production + City' ranking",
                    "Niche keywords (e.g. 'Food Stylist')",
                    "Case study optimization",
                    "Google Maps ranking",
                    "Blog content strategy",
                    "Technical SEO",
                ],
            },
            {
                title: "Content Marketing",
                items: [
                    "Behind-the-scenes content",
                    "Production guides for clients",
                    "Trend reports",
                    "Client testimonials",
                    "Webinar hosting",
                    "Email newsletters",
                ],
            },
            {
                title: "Paid Media",
                items: [
                    "Retargeting site visitors",
                    "YouTube ads (pre-roll)",
                    "LinkedIn video ads",
                    "Google Search Ads",
                    "Lookalike audiences",
                    "Conversion tracking",
                ],
            },
        ],
    },
    complementary: {
        title: "Sales Operations",
        description: "Streamline your bidding process:",
        channels: [
            {
                title: "CRM Setup",
                items: [
                    "HubSpot/PipeDrive config",
                    "Pipeline management",
                    "Deal stages for Production",
                    "Automated follow-ups",
                    "Contact management",
                    "Reporting",
                ],
            },
            {
                title: "Sales Enablement",
                items: [
                    "Capabilities deck design",
                    "Proposal templates",
                    "Treatment templates",
                    "Budget breakdown sheets",
                    "Email scripts",
                    "One-pagers",
                ],
            },
            {
                title: "Market Research",
                items: [
                    "Competitor pricing analysis",
                    "Industry trend spotting",
                    "Target account mapping",
                    "Lead enrichment",
                    "Event calendars",
                    "Award submission help",
                ],
            },
        ],
    },
};

const nutshellSteps = [
    ["Curate Portfolio", "Identify Ideal Clients", "Strategy & Scripting", "Tech Setup"],
    ["Launch Outreach", "Share Reel", "Book Strategy Calls", "Qualify Bids"],
    ["Proposal/Pitch", "Win Project", "Production", "Retainer Upsell"],
];

const mediaTypes = [
    "Commercial Production",
    "Corporate Video",
    "Animation & Motion Graphics",
    "Post-Production & VFX",
    "Live Event Production",
    "Social Media Content",
    "Documentary",
    "Branded Entertainment",
    "Photography Studios",
    "Podcast Production",
    "AR/VR Experiences",
];

// ============ COMPONENTS ============

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
                        <p className="text-[#AD8253] font-medium mb-4">Media & Video Production Growth</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Land High-Ticket <span className="text-[#AD8253]">Commercial Projects</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Stop relying on word-of-mouth. We help production studios connect with Brands and Agencies to fill their calendar with premium projects and retainers.
                        </p>
                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#AD8253] text-white rounded-lg hover:bg-[#8a6842] transition-colors font-medium"
                            >
                                Get More Projects
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <p className="text-sm text-[#6b6b6b] mt-3">* schedule a 15-30-min strategy session</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-card p-6 min-h-[400px] flex items-center justify-center border-[#AD8253]/20">
                            <div className="text-center">
                                <Clapperboard className="w-16 h-16 text-[#AD8253] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Studio Growth Engine</h3>
                                <p className="text-[#a1a1a1]">Direct-to-Brand & Agency Outreach.</p>
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
                        Studios boosting
                        <br />
                        revenue with us
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {mediaLogos.map((logo) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Production Challenges</h2>

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
                            <h3 className="text-white font-semibold text-lg mb-4">The Problem</h3>
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
                        Your Executive Producer <br />
                        for Sales
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto">
                        We don't hold a boom pole, but we do the heavy lifting in client acquisition. We get your reel in front of the people who sign the checks.
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
                    Studio Success Stories
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
                    <div className="bg-[#272727] rounded-2xl overflow-hidden shadow-sm border border-white/5">
                        <div className="grid grid-cols-4 bg-[#1a1a1a] text-white p-4 hidden md:grid">
                            <div className="font-medium text-[#AD8253]">Studio</div>
                            <div className="font-medium text-[#AD8253]">Results</div>
                            <div className="font-medium text-[#AD8253]">Challenge Solved</div>
                            <div></div>
                        </div>
                        {companyResults.map((result, index) => (
                            <div
                                key={index}
                                className="grid md:grid-cols-4 p-4 border-b border-white/5 items-center hover:bg-[#333] transition-colors gap-4 md:gap-0"
                            >
                                <div className="font-medium text-white">{result.logo}</div>
                                <div className="font-semibold text-white/90"><span className="md:hidden text-[#AD8253] text-xs uppercase block mb-1">Results:</span>{result.results}</div>
                                <div className="text-[#a1a1a1] text-sm"><span className="md:hidden text-[#AD8253] text-xs uppercase block mb-1">Challenge:</span>{result.challenge}</div>
                                <div className="text-right">
                                    <Link href="#" className="text-[#AD8253] text-sm font-medium hover:text-[#c3a177]">
                                        View Case Study
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
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
                    Metrics that Matter
                </h3>
                <p className="text-[#a1a1a1] mb-6">
                    We track everything from 'Reel Views' to 'Contracts Signed'. We ensure your capabilities are being seen by the right people.
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
                <p className="text-sm text-[#a1a1a1] mb-4">Commercial Bids Won (Quarterly)</p>
                <div className="h-64 relative">
                    <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-[#a1a1a1]">
                        <span>12</span>
                        <span>9</span>
                        <span>6</span>
                        <span>3</span>
                        <span>0</span>
                    </div>
                    <div className="ml-10 mr-4 h-full flex items-end gap-2">
                        {[1, 2, 3, 4].map((q) => (
                            <div key={q} className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full bg-[#AD8253] rounded-t opacity-80" style={{ height: `${20 + q * 20}%` }} />
                                <span className="text-xs text-[#a1a1a1] mt-2">Q{q}</span>
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
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">From Pitch to Production</h3>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                    {processStages.map((stage, index) => (
                        <div
                            key={stage.id}
                            className={`relative pl-8 pb-8 ${index < processStages.length - 1 ? "border-l-2 border-dashed border-gray-600" : ""}`}
                        >
                            <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${index <= activeStage ? "bg-[#AD8253]" : "bg-gray-600"}`} />
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Data-Driven Sourcing</h3>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">We Speak 'Set Life'</h3>
            <div className="grid lg:grid-cols-2 gap-8 text-white">
                <div className="bg-[#272727] rounded-2xl overflow-hidden shadow-sm border border-white/5 p-6">
                    <h4 className="text-xl font-bold mb-4">Creative Sales Pros</h4>
                    <p className="text-[#a1a1a1] mb-4">
                        We know the difference between 4K and 8K, Pre-pro and Post, and how to sell the value of high production value without getting bogged down in specs.
                    </p>
                </div>
                <div className="bg-[#272727] rounded-2xl p-6 shadow-sm border border-white/5">
                    <h4 className="text-xl font-bold mb-4">Roles on your account</h4>
                    <ul className="space-y-2">
                        {["Creative Strategist", "Outbound Producer", "List Specialist", "Copywriter", "Account Manager"].map((role) => (
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">Sales Tech for Creatives</h3>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-white font-semibold mb-6">Distribution & Hosting</h4>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Filmmakers Review Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"We went from scrambling for small gigs to landing a $100k retainer with a national CPG brand. ClickSalesMedia knows how to open doors for creative studios."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">AL</div>
                            <div>
                                <p className="text-white font-bold">Alex L.</p>
                                <p className="text-[#a1a1a1] text-sm">Founder, CineCraft</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"They helped us refine our reel and targeted exactly the right Agency Producers. We are now on the bid list for three major agencies in NYC."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">JM</div>
                            <div>
                                <p className="text-white font-bold">Jessica M.</p>
                                <p className="text-[#a1a1a1] text-sm">EP, FrameWork</p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Pricing Models</h2>
                <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-sm border border-white/5 max-w-3xl mx-auto text-center">
                    <p className="text-[#a1a1a1] mb-2 uppercase tracking-wide">Studio Growth Partner</p>
                    <p className="text-5xl font-bold text-[#AD8253] mb-6">Custom</p>
                    <p className="text-white mb-8">
                        Tailored outreach campaigns based on your studio's capacity and target market.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-[#AD8253] text-white rounded-lg hover:bg-[#8a6842] transition-colors font-medium">
                        Get a Start Date
                    </Link>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Production Growth Services</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">From Idle to Action</h2>
                <div className="grid lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Your Studio</div>
                    <Link href="/contact" className="col-span-2 bg-[#AD8253] p-4 rounded-lg text-white font-bold flex items-center justify-center hover:bg-[#c3a177] transition-colors">
                        Start Filming
                    </Link>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Booked Solid</div>
                </div>
            </div>
        </section>
    );
}

function MediaTypesSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">We scale production businesses:</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {mediaTypes.map((type) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready for your next big shoot?</h2>
                <p className="text-gray-400 mb-8">
                    Let's get your reel in front of better clients.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#AD8253] text-white rounded-lg hover:bg-[#c3a177] transition-colors font-medium"
                >
                    Book a Strategy Call
                </Link>
            </div>
        </section>
    );
}

export default function MediaProductionPage() {
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
            <MediaTypesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
