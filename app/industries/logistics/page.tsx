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
    Truck,
    Map,
    Box,
    Anchor,
    Globe,
    Package,
} from "lucide-react";

// ============ DATA ============

const logisticsLogos = [
    { name: "SwiftMove", text: "SwiftMove" },
    { name: "GlobalCargo", text: "GlobalCargo" },
    { name: "Prime3PL", text: "Prime3PL" },
    { name: "OceanBound", text: "OceanBound" },
    { name: "AirFreightPro", text: "AirFreightPro" },
    { name: "LastMile", text: "LastMile" },
];

const challenges = [
    {
        id: 1,
        title: "The 'Race to the Bottom' on rates",
        problem:
            "Shippers treat logistics as a commodity. If you compete solely on price per mile or container, your margins get crushed by digital brokers and massive carriers.",
        problemAuthor: "Tom",
        problemRole: "VP Sales at a 3PL",
        solution:
            "We reposition your pitch from 'cheapest rate' to 'reliable capacity'. We find shippers who value service level agreements (SLAs) and on-time performance over saving pennies, protecting your margins.",
    },
    {
        id: 2,
        title: "Feast or famine capacity cycles",
        problem:
            "One month your trucks are empty; the next you're turning down freight. Relying on spot market load boards makes revenue unpredictable.",
        problemAuthor: "Sarah",
        problemRole: "Owner of a Trucking Fleet",
        solution:
            "We secure dedicated contract lanes. By targeting high-volume shippers directly, we help you lock in consistent volume, stabilizing your revenue and allowing for better fleet planning.",
    },
    {
        id: 3,
        title: "Gatekeepers at manufacturing plants",
        problem:
            "Trying to reach the Logistics Manager or Supply Chain Director at a major manufacturer is tough. They are bombarded by calls from brokers every day.",
        problemAuthor: "Mike",
        problemRole: "Director of Business Development",
        solution:
            "We use multi-channel outreach to cut through the noise. We leverage accurate direct-dial data and personalized emails to bypass gatekeepers and get you straight to the decision-maker.",
    },
    {
        id: 4,
        title: "Long sales cycles for enterprise shippers",
        problem:
            "Winning a Fortune 500 RFP takes months. You can't afford to have your sales team chasing dead ends.",
        problemAuthor: "Elena",
        problemRole: "Head of Strategic Accounts",
        solution:
            "We nurture these relationships year-round. We map the buying committee and ensure your brand is top-of-mind when the annual RFP season begins.",
    },
    {
        id: 5,
        title: "Warehouse vacancy",
        problem:
            "Empty pallet positions cost money. You need critical mass to make your fulfillment center profitable.",
        problemAuthor: "James",
        problemRole: "GM of a Warehousing Firm",
        solution:
            "We target e-commerce brands and manufacturers specifically looking for 3PL partners in your geographic region, filling your warehouse faster.",
    },
];

const partnerTabs = [
    {
        id: "tailored",
        title: "Logistics Niche",
        heading: "We speak Trucking, Air, and Ocean.",
        content:
            "We know the difference between FTL, LTL, and Drayage. We understand the nuances of cold chain versus dry van. We don't write generic scripts; we write industry-specific copy that shippers respect.",
        extra:
            "Our team understands the current freight market dynamics.",
        link: "See our expertise",
    },
    {
        id: "pipeline",
        title: "Shipper Growth",
        heading: "Direct-to-Shipper Campaigns.",
        content:
            "Stop relying on low-margin broker freight. We help you build direct relationships with manufacturers, retailers, and distributors who own the freight.",
        extra:
            "Direct shippers mean higher rates and better payment terms.",
        link: "View shipper results",
    },
    {
        id: "playbooks",
        title: "Lane Density",
        heading: "Build density in your key lanes.",
        content:
            "Need more freight out of Chicago? Or backhauls from Atlanta? We run geo-targeted campaigns to find shippers in specific regions to balance your network.",
        extra:
            "Optimize your network efficiency and reduce deadhead miles.",
        link: "Explore lane strategies",
    },
    {
        id: "channels",
        title: "LinkedIn for Logistics",
        heading: "Where Supply Chain Leaders hang out.",
        content:
            "Supply Chain Directors are active on LinkedIn. We build your personal brand to position you as a thought leader in transportation, attracting inbound interest.",
        extra: "Connect with decision-makers at target accounts personally.",
        link: "Learn about LinkedIn",
    },
    {
        id: "alignment",
        title: "Integration/Tech",
        heading: "Selling your Tech Stack.",
        content:
            "If you offer real-time tracking, API integration, or a customer portal, we make that a central part of your value prop. Modern shippers want visibility.",
        extra:
            "Tech-enabled logistics services win more sophisticated contracts.",
        link: "Meet your team",
    },
    {
        id: "scalability",
        title: "Scale Your Sales",
        heading: "Grow without adding headcount.",
        content:
            "Hiring good freight brokers is hard and expensive. We act as your lead generation arm, feeding your closers a steady diet of opportunities without the overhead of junior sales staff.",
        extra: "Scale up during peak season, scale down during lulls.",
        link: "Discuss scaling",
    },
];

const resultsTabs = ["Results", "KPIs", "Our process", "Peek inside", "Team", "Tech stack"];

const companyResults = [
    {
        company: "SwiftMove",
        logo: "SwiftMove",
        results: "Secured $5M in annual contract value",
        challenge: "Needed to diversify customer base away from one major retailer.",
    },
    {
        company: "GlobalCargo",
        logo: "GlobalCargo",
        results: "300% increase in qualified leads",
        challenge: "Sales team was relying on cold calling with bad data.",
    },
    {
        company: "Prime3PL",
        logo: "Prime3PL",
        results: "Filled 50,000 sq ft of new warehouse space",
        challenge: "Opening a new facility with zero pre-committed clients.",
    },
    {
        company: "OceanBound",
        logo: "OceanBound",
        results: "20 new NVOCC partners",
        challenge: "Expanding trade lanes between Asia and US West Coast.",
    },
    {
        company: "AirFreightPro",
        logo: "AirFreightPro",
        results: "Partnered with 5 major automotive suppliers",
        challenge: "Needed urgent/expedited freight customers.",
    },
    {
        company: "LastMile",
        logo: "LastMile",
        results: "Signed 15 suburban e-commerce delivery contracts",
        challenge: "Competing with Amazon's internal logistics.",
    },
    {
        company: "ColdChain",
        logo: "ColdChain",
        results: "40 meetings with Pharma Supply Chain VP's",
        challenge: "Highly specialized, high-trust niche market.",
    },
    {
        company: "FlatbedX",
        logo: "FlatbedX",
        results: "10 industrial equipment manufacturers signed",
        challenge: "Finding shippers with specific over-dimensional needs.",
    },
];

const kpiStats = [
    "15-20 qualified shipper meetings/month",
    "40% reduction in deadhead miles (via targeted lanes)",
    "5x ROI on marketing spend",
    "Shortened sales cycle by 30%",
];

const processStages = [
    {
        id: 1,
        title: "Network Analysis & Targeting",
        duration: "1-14 days",
        description:
            "We analyze your network. Where do you need freight? What equipment do you have? We build lists of shippers who match your operational strengths (e.g., hazmat, reefer, flatbed).",
    },
    {
        id: 2,
        title: "Value Prop & Scripting",
        duration: "15-30 days",
        description:
            "We craft messages that speak to shipper pain points: late deliveries, damaged cargo, lack of visibility. We position your company as the solution to their supply chain headaches.",
    },
    {
        id: 3,
        title: "Campaign Launch",
        duration: "30-60 days",
        description:
            "We launch email and phone campaigns. We use 'trigger events' like port strikes, weather disruptions, or peak season operational issues to make outreach timely.",
    },
    {
        id: 4,
        title: "Lead Handoff & RFPs",
        duration: "60+ days",
        description:
            "We book the meeting or get you invited to the RFP. We hand off all notes and context to your pricing team to bid and win.",
    },
];

const peekInsideTabs = [
    {
        id: "opportunity",
        title: "Import/Export Data",
        content:
            "We can see who is importing containers. We target companies based on their bill of lading data, knowing exactly what they ship and how much.",
    },
    {
        id: "sourcing",
        title: "Job Postings",
        content:
            "Companies hiring a 'Logistics Coordinator' or 'Supply Chain Manager' are likely growing or reorganizing. We target them immediately.",
    },
    {
        id: "templates",
        title: "Educational Outreach",
        content:
            "We send market updates (e.g., 'Fuel Surcharge Trends', 'Port Congestion Reports') to add value and position you as an expert advisor, not just a carrier.",
    },
    {
        id: "reporting",
        title: "Lane Mapping",
        content:
            "We track which geographic regions are generating the most interest, helping you adjust your fleet positioning.",
    },
    {
        id: "communication",
        title: "Slack Channels",
        content:
            "We integrate with your team's Slack or Teams. You get notified the second a shipper replies 'Yes, can you quote this lane?'.",
    },
];

const techPartners = [
    "ZoomInfo",
    "Salesforce",
    "HubSpot",
    "Datamyne",
    "Panjiva",
    "LinkedIn Sales Nav",
    "Apollo",
    "Seamless.AI",
];

const proprietaryTools = [
    {
        name: "LaneFinder",
        description: "Geographic demand matching",
        color: "bg-blue-500",
    },
    {
        name: "ImportWatch",
        description: "Bill of Lading tracker",
        color: "bg-green-500",
    },
    {
        name: "RFP Radar",
        description: "Bid season alert system",
        color: "bg-orange-500",
    },
];

const services = {
    outbound: {
        title: "Shipper Acquisition",
        description: "Direct outreach to fill your trucks and warehouses:",
        channels: [
            {
                title: "Cold Email",
                items: [
                    "Lane-specific targeting",
                    "RFP cycle timing",
                    "Asset-based value props",
                    "Case study distribution",
                    "Meeting booking",
                    "Re-engagement loops",
                ],
            },
            {
                title: "LinkedIn Pro",
                items: [
                    "Supply Chain connections",
                    "Content for Logistics Mgrs",
                    "InMail sequences",
                    "Company page growth",
                    "Retargeting ads",
                    "Social selling training",
                ],
            },
            {
                title: "Direct Mail",
                items: [
                    "Fleet maps sent to desks",
                    "Branded swag boxes",
                    "Conference invites",
                    "Postcard campaigns",
                    "Executive door openers",
                    "Physical newsletters",
                ],
            },
        ],
    },
    inbound: {
        title: "Inbound Marketing",
        description: "Attract shippers searching for solutions:",
        channels: [
            {
                title: "Content Strategy",
                items: [
                    "Market update blogs",
                    "QBR templates",
                    "Warehousing guides",
                    "Sustainability reports",
                    "Case studies",
                    "Whitepapers",
                ],
            },
            {
                title: "Website Optimization",
                items: [
                    "Request a Quote forms",
                    "Track & Trace pages",
                    "Location finders",
                    "Equipment galleries",
                    "SEO for key lanes",
                    "Speed optimization",
                ],
            },
            {
                title: "PPC / Paid Social",
                items: [
                    "Google Ads for '3PL'",
                    "LinkedIn Sponsored Content",
                    "Retargeting visitors",
                    "Geo-fencing conferences",
                    "Video ads",
                    "Lead gen forms",
                ],
            },
        ],
    },
    complementary: {
        title: "Sales Operations",
        description: " streamline your sales process:",
        channels: [
            {
                title: "Data Services",
                items: [
                    "Shipper list building",
                    "Contact validation",
                    "CRM cleanup",
                    "Lane data append",
                    "Buying intent signals",
                    "Competitor monitoring",
                ],
            },
            {
                title: "CRM Setup",
                items: [
                    "HubSpot/Salesforce config",
                    "Quote-to-Cash workflow",
                    "Sales automation",
                    "Dashboard creation",
                    "TMS integration support",
                    "Training",
                ],
            },
            {
                title: "Enablement",
                items: [
                    "Sales decks",
                    "One-pagers per service",
                    "Email templates",
                    "Objection handling guides",
                    "Proposal design",
                    "Cold call scripts",
                ],
            },
        ],
    },
};

const nutshellSteps = [
    ["Direct Shipper List", "Operational Audit", "Message Strategy", "Tech Setup"],
    ["Lane-Targeted Launch", "Feedback Loop", "Quote Opportunities", "Follow-up"],
    ["Contract Negotiation", "Onboarding", "Operational Review", "Growth"],
];

const logisticsTypes = [
    "Third-Party Logistics (3PL)",
    "Freight Forwarders",
    "Asset-Based Carriers",
    "Warehousing & Fulfillment",
    "Last Mile Delivery",
    "Air Cargo",
    "Ocean Freight",
    "Cold Chain / Reefer",
    "Logistics Tech (SaaS)",
    "Freight Brokerage",
    "Moving & Storage",
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
                        <p className="text-[#AD8253] font-medium mb-4">Logistics Lead Generation</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Fill Your Fleet & <span className="text-[#AD8253]">Secure Shipper Contracts</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Stop chasing spot market scraps. We help 3PLs, Carriers, and Forwarders build direct relationships with enterprise shippers to stabilize volume and boost margins.
                        </p>
                        <div>
                            <BookingButton
                                text="Get a Quote Plan"
                                variant="primary"
                                className="bg-[#AD8253] text-white rounded-lg hover:bg-[#8a6842] transition-colors font-medium px-6 py-3"
                                source="industry-logistics-hero"
                            />
                            <p className="text-sm text-[#6b6b6b] mt-3">* schedule a 15-30-min strategy session</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-card p-6 min-h-[400px] flex items-center justify-center border-[#AD8253]/20">
                            <div className="text-center">
                                <Truck className="w-16 h-16 text-[#AD8253] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Logistics Growth Engine</h3>
                                <p className="text-[#a1a1a1]">Dedicated lanes. Contract freight.</p>
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
                        Moving freight for
                        <br />
                        industry leaders
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {logisticsLogos.map((logo) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Supply Chain Challenges</h2>

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
                        A partner who knows <br />
                        the difference between a pallet and a parcel
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto">
                        Generalist marketing agencies don't understand the logistics industry. We do. We skip the learning curve and start generating relevant opportunities on day one.
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
                    Logistics Success Record
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
                            <div className="font-medium text-[#AD8253]">Company</div>
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
                    Moving Metrics that Matter
                </h3>
                <p className="text-[#a1a1a1] mb-6">
                    We focus on metrics that impact your bottom line: Lane utilization, Contract volume, and Shipper acquisition cost.
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
                <p className="text-sm text-[#a1a1a1] mb-4">Direct Shipper Volume (Loads/Month)</p>
                <div className="h-64 relative">
                    <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-[#a1a1a1]">
                        <span>5000</span>
                        <span>2500</span>
                        <span>1000</span>
                        <span>500</span>
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
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">The Shipper Acquisition Framework</h3>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Data-Driven Load Sourcing</h3>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Freight Experts, Not Just Marketers</h3>
            <div className="grid lg:grid-cols-2 gap-8 text-white">
                <div className="bg-[#272727] rounded-2xl overflow-hidden shadow-sm border border-white/5 p-6">
                    <h4 className="text-xl font-bold mb-4">Industry Veterans</h4>
                    <p className="text-[#a1a1a1] mb-4">
                        Our team includes former freight brokers and supply chain managers. We know how to talk about detention time, accessorials, and fuel surcharges intelligently.
                    </p>
                </div>
                <div className="bg-[#272727] rounded-2xl p-6 shadow-sm border border-white/5">
                    <h4 className="text-xl font-bold mb-4">Roles on your account</h4>
                    <ul className="space-y-2">
                        {["Logistics Strategist", "Outbound Specialist", "Data Analyst", "Copywriter", "SDR Team Lead"].map((role) => (
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">Supply Chain Tech Stack</h3>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-white font-semibold mb-6">Market Data</h4>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Client Feedback</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"We were heavily reliant on one major retail customer. ClickSalesMedia helped us diversify by getting us in the door with three new manufacturing clients in just 6 months."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">TM</div>
                            <div>
                                <p className="text-white font-bold">Tom M.</p>
                                <p className="text-[#a1a1a1] text-sm">VP Sales, SwiftMove</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"Their targeting is incredible. They didn't just find 'companies'; they found shippers producing the exact kind of obscure industrial equipment we specialize in hauling."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">RJ</div>
                            <div>
                                <p className="text-white font-bold">Rachel J.</p>
                                <p className="text-[#a1a1a1] text-sm">Owner, FlatbedX</p>
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
                    <p className="text-[#a1a1a1] mb-2 uppercase tracking-wide">Strategic Partnership</p>
                    <p className="text-5xl font-bold text-[#AD8253] mb-6">Custom</p>
                    <p className="text-white mb-8">
                        We offer retainer and performance-based models depending on your fleet size and growth targets.
                    </p>
                    <BookingButton
                        text="Get a Quote"
                        variant="primary"
                        className="inline-block px-8 py-4 bg-[#AD8253] text-white rounded-lg hover:bg-[#8a6842] transition-colors font-medium"
                        source="industry-logistics-pricing"
                    />
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Logistics Growth Services</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">From Empty Miles to Full Trucks</h2>
                <div className="grid lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Your Fleet</div>
                    <BookingButton
                        text="Find Shippers"
                        variant="primary"
                        className="col-span-2 bg-[#AD8253] p-4 rounded-lg text-white font-bold flex items-center justify-center hover:bg-[#c3a177] transition-colors"
                        source="industry-logistics-nutshell"
                    />
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Consistent Revenue</div>
                </div>
            </div>
        </section>
    );
}

function LogisticsTypesSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">We serve the entire supply chain:</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {logisticsTypes.map((type) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to fill your pipeline?</h2>
                <p className="text-gray-400 mb-8">
                    Let's discuss how to secure more contract freight/shippers.
                </p>
                <BookingButton
                    text="Book a Strategy Call"
                    variant="primary"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#AD8253] text-white rounded-lg hover:bg-[#c3a177] transition-colors font-medium"
                    source="industry-logistics-cta"
                />
            </div>
        </section>
    );
}

export default function LogisticsPage() {
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
            <LogisticsTypesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
