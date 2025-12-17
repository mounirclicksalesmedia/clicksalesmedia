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
    Users,
    Briefcase,
    Search,
    UserCheck,
    Globe,
    TrendingUp,
} from "lucide-react";

// ============ DATA ============

const recruitmentLogos = [
    { name: "TalentHive", text: "TalentHive" },
    { name: "EliteStaff", text: "EliteStaff" },
    { name: "ExecSearch", text: "ExecSearch" },
    { name: "TechRecruit", text: "TechRecruit" },
    { name: "NurseFinders", text: "NurseFinders" },
    { name: "GlobalHire", text: "GlobalHire" },
];

const challenges = [
    {
        id: 1,
        title: "The 'Job Board' trap",
        problem:
            "Relying solely on job boards for candidates and clients is a race to the bottom. You're fighting 50 other agencies for the same low-margin contingent roles.",
        problemAuthor: "James",
        problemRole: "Founder of a Tech Recruitment Firm",
        solution:
            "We help you bypass the job boards. Our outbound engine generates exclusive job orders directly from hiring managers before they ever hit Indeed or LinkedIn.",
    },
    {
        id: 2,
        title: "Feast or famine job orders",
        problem:
            "One month you have too many reqs, the next you have none. This unpredictability makes it impossible to scale your team or predict revenue.",
        problemAuthor: "Sarah",
        problemRole: "Managing Director of Executive Search",
        solution:
            "We build a consistent pipeline of new client meetings using automated multi-channel outreach. This smooths out your revenue curve and lets you focus on filling roles, not finding them.",
    },
    {
        id: 3,
        title: "Moving from Contingent to Retained",
        problem:
            "You want to sell retained search, but new clients only want to give you contingent work. Trust is the missing variable.",
        problemAuthor: "Michael",
        problemRole: "VP of Sales",
        solution:
            "We position your firm as a specialized consultant, not a 'body shop'. Our authority-building content and targeted outreach help you win the trust needed to secure retained fees upfront.",
    },
    {
        id: 4,
        title: "Candidate Ghosting",
        problem:
            "You spend hours finding the perfect candidate, only for them to disappear. Your database is full of passive talent you can't re-engage.",
        problemAuthor: "Emma",
        problemRole: "Head of Talent Acquisition",
        solution:
            "We run 'database reactivation' campaigns. We use automated sequences to wake up your dormant candidate pool, generating 'hand-raisers' who are ready to move now.",
    },
    {
        id: 5,
        title: "Business Development burnout",
        problem:
            "Your best recruiters hate doing BD. They want to recruit, not cold call. Forcing them to do sales leads to burnout and turnover.",
        problemAuthor: "David",
        problemRole: "Agency Owner",
        solution:
            "We take BD off their plate. We deliver qualified meetings with hiring managers directly to your recruiters' calendars, so they can do what they do best: interview and place talent.",
    },
];

const partnerTabs = [
    {
        id: "tailored",
        title: "Niche Specialization",
        heading: "We speak your vertical.",
        content:
            "Whether you recruit for Locum Tenens, SaaS Sales, or Civil Engineering, we build lists and messaging that resonate with the specific hiring managers in your niche.",
        extra:
            "Generalist pitches die in the inbox. Specialist pitches get replies.",
        link: "See our niche expertise",
    },
    {
        id: "pipeline",
        title: "MPC Marketing",
        heading: "Market your Most Placeable Candidates (MPCs).",
        content:
            "Don't just ask for jobs. We run campaigns marketing your top talent to companies that need them. It's the fastest way to open a door.",
        extra:
            "Reverse-marketing candidates is our highest converting strategy.",
        link: "View MPC strategies",
    },
    {
        id: "playbooks",
        title: "Retained Search",
        heading: "Win exclusive terms.",
        content:
            "We target C-Suite executives who value quality over speed. We help you craft the 'Retained Pitch' that justifies an upfront fee.",
        extra:
            "Stop working for free on roles you might not fill.",
        link: "Explore retained search",
    },
    {
        id: "channels",
        title: "LinkedIn Automation",
        heading: "Scale your personal brand.",
        content:
            "Recruitment is a people business. We optimize your LinkedIn profile and run safe, personalized connection campaigns to grow your network of hiring managers on autopilot.",
        extra: "Become the 'go-to' recruiter in your space.",
        link: "Learn about LinkedIn",
    },
    {
        id: "alignment",
        title: "RPO & Staffing",
        heading: "Land volume accounts.",
        content:
            "For staffing firms, we target HR Directors at large enterprises with high-volume hiring needs. We help you pitch RPO (Recruitment Process Outsourcing) solutions.",
        extra:
            "Secure long-term contracts with recurring revenue.",
        link: "Meet your team",
    },
    {
        id: "scalability",
        title: "Scale on Demand",
        heading: "Grow your agency.",
        content:
            "Need more leads for a new desk? We can spin up a campaign in a new vertical in days. We act as the growth engine for your agency's expansion.",
        extra: "Launch new divisions without the risk.",
        link: "Discuss scaling",
    },
];

const resultsTabs = ["Results", "KPIs", "Our process", "Peek inside", "Team", "Tech stack"];

const companyResults = [
    {
        company: "TalentHive",
        logo: "TalentHive",
        results: "Generated 40 exclusive job orders in Q1",
        challenge: "Needed to break free from VMS/MSP low-fee models.",
    },
    {
        company: "EliteStaff",
        logo: "EliteStaff",
        results: "$2M in new placement fees",
        challenge: "Recruiters were struggling to find time for business development.",
    },
    {
        company: "ExecSearch",
        logo: "ExecSearch",
        results: "Secured 5 retained searches ($50k+ fees)",
        challenge: "Transitioning from contingent to retained model.",
    },
    {
        company: "TechRecruit",
        logo: "TechRecruit",
        results: "Placed 15 Senior Devs via MPC campaigns",
        challenge: "Had great candidates but no open reqs to submit them to.",
    },
    {
        company: "NurseFinders",
        logo: "NurseFinders",
        results: "Partnered with 3 hospital networks",
        challenge: "High volume travel nursing needs.",
    },
    {
        company: "GlobalHire",
        logo: "GlobalHire",
        results: "Expanded into US market from UK",
        challenge: "Zero brand presence in the new territory.",
    },
    {
        company: "SalesTalent",
        logo: "SalesTalent",
        results: "20 meetings/month with VP of Sales",
        challenge: "Reaching busy sales leaders.",
    },
    {
        company: "LegalPros",
        logo: "LegalPros",
        results: "10x ROI on marketing spend",
        challenge: "Very traditional, relationship-heavy market.",
    },
];

const kpiStats = [
    "15+ Hiring Manager meetings/month",
    "20% conversion from contingent to exclusive",
    "40% reduction in time-to-fill (via proactive pipeline)",
    "5x ROI on outbound spend",
];

const processStages = [
    {
        id: 1,
        title: "Niche Definition & ICP",
        duration: "1-7 days",
        description:
            "We define your 'bullseye'. Who is the hiring manager? What is the specific role you fill best? We build a list of companies likely to be hiring for that role now.",
    },
    {
        id: 2,
        title: "The 'Hook' Creation",
        duration: "7-14 days",
        description:
            "We craft the pitch. Are we marketing an MPC (Most Placeable Candidate)? Are we pitching a salary guide? Are we offering a free consultation? We find the hook that opens the door.",
    },
    {
        id: 3,
        title: "Campaign Execution",
        duration: "14-45 days",
        description:
            "We launch multi-channel campaigns (Email + LinkedIn). We target hiring managers directly, bypassing HR gatekeepers whenever possible.",
    },
    {
        id: 4,
        title: "Meeting Booking & Handover",
        duration: "Ongoing",
        description:
            "When a hiring manager replies 'Send me the resume' or 'Let's talk rates', we book the call for you. You show up and win the business.",
    },
];

const peekInsideTabs = [
    {
        id: "opportunity",
        title: "Job Post Scrapers",
        content:
            "We monitor job boards. When a company posts a role you fill, we contact the hiring manager immediately offering to help fill it faster.",
    },
    {
        id: "sourcing",
        title: "Hiring Triggers",
        content:
            "We track funding rounds and new executive hires. A new VP of Sales usually means a hiring spree is coming. We get you there first.",
    },
    {
        id: "templates",
        title: "MPC Emails",
        content:
            "We write anonymous profiles of your top candidates: 'I'm working with a Python Dev who built X at Y company'. These emails get the highest response rates in the industry.",
    },
    {
        id: "reporting",
        title: "Client Portal",
        content:
            "See every company we contacted, every reply, and every meeting booked in real-time.",
    },
    {
        id: "communication",
        title: "Slack Integration",
        content:
            "Your team gets a ping in Slack every time a lead comes in. Speed to lead is crucial in recruitment.",
    },
];

const techPartners = [
    "LinkedIn Recruiter",
    "Salesforce",
    "Bullhorn",
    "Loxo",
    "ZoomInfo",
    "Apollo",
    "Lemlist",
    "SourceWhale",
];

const proprietaryTools = [
    {
        name: "JobWatch",
        description: "New requisition alerts",
        color: "bg-purple-500",
    },
    {
        name: "TalentMap",
        description: "Candidate density analysis",
        color: "bg-green-500",
    },
    {
        name: "GateBreaker",
        description: "Direct dial finder for HMs",
        color: "bg-blue-500",
    },
];

const services = {
    outbound: {
        title: "Client Acquisition",
        description: "Get more job orders from hiring managers:",
        channels: [
            {
                title: "MPC Campaigns",
                items: [
                    "Blind candidate profiles",
                    "Top 5% talent marketing",
                    "Direct-to-HM outreach",
                    "Exclusive candidate pitching",
                    "Interview booking",
                    "Fee negotiation setup",
                ],
            },
            {
                title: "LinkedIn Brand",
                items: [
                    "Thought leadership posts",
                    "Network expansion",
                    "InMail sequences",
                    "Social selling",
                    "Poll strategies",
                    "Comment engagement",
                ],
            },
            {
                title: "Cold Email",
                items: [
                    "New funding outreach",
                    "Integration with job posts",
                    "Salary guide distribution",
                    "Webinar invites",
                    "Case study sharing",
                    "Meeting setting",
                ],
            },
        ],
    },
    inbound: {
        title: "Candidate Sourcing",
        description: "Attract the best talent:",
        channels: [
            {
                title: "Job Ad Optimization",
                items: [
                    "Copywriting for conversion",
                    "SEO for job titles",
                    "Google for Jobs schema",
                    "LinkedIn slot management",
                    "Video job descriptors",
                    "Application flow testing",
                ],
            },
            {
                title: "Database Reactivation",
                items: [
                    "SMS campaigns",
                    "Email newsletters",
                    "Referral programs",
                    "Alumni networks",
                    "Passive candidate nurture",
                    "Data enrichment",
                ],
            },
            {
                title: "Employer Branding",
                items: [
                    "Career page design",
                    "Employee testimonials",
                    "Culture videos",
                    "Glassdoor reputation",
                    "Social media recruiting",
                    "Talent community building",
                ],
            },
        ],
    },
    complementary: {
        title: "Operations & Tech",
        description: "Scale your recruiting machine:",
        channels: [
            {
                title: "ATS Optimization",
                items: [
                    "Bullhorn/Loxo config",
                    "Workflow automation",
                    "Data hygiene",
                    "Reporting dashboards",
                    "Migration support",
                    "User training",
                ],
            },
            {
                title: "Sales Enablement",
                items: [
                    "Fee agreement templates",
                    "Retained search pitch decks",
                    "Objection handling scripts",
                    "Client onboarding packets",
                    "Case study design",
                    "Salary report creation",
                ],
            },
            {
                title: "Market Intelligence",
                items: [
                    "Salary benchmarking",
                    "Competitor analysis",
                    "Talent supply mapping",
                    "Industry trend reports",
                    "Hiring heatmaps",
                    "Lead scoring",
                ],
            },
        ],
    },
};

const nutshellSteps = [
    ["Define Niche", "Identify Top Candidates", "Build Client List", "Craft MPC Pitch"],
    ["Launch Outreach", "Generate Interest", "Book Interviews", "Negotiate Fees"],
    ["Placement", "Onboarding", "Referral Request", "Repeat Business"],
];

const recruitmentTypes = [
    "Executive Search",
    "IT & Tech Staffing",
    "Healthcare/Locum Tenens",
    "Finance & Accounting",
    "Sales & Marketing",
    "Engineering & Construction",
    "Legal Recruitment",
    "RPO Providers",
    "Creative & Digital",
    "Industrial Staffing",
    "HR Recruitment",
];

// ============ COMPONENTS ============
// Reused structure from other industry pages

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
                        <p className="text-[#AD8253] font-medium mb-4">For Recruitment & Staffing Agencies</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Fill Your Pipeline with <span className="text-[#AD8253]">Exclusive Job Orders</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Stop chasing low-fee contingent work. We help you connect directly with Hiring Managers to secure higher fees, exclusive terms, and retained searches.
                        </p>
                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#AD8253] text-white rounded-lg hover:bg-[#8a6842] transition-colors font-medium"
                            >
                                Get More Clients
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <p className="text-sm text-[#6b6b6b] mt-3">* schedule a 15-30-min strategy call</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-card p-6 min-h-[400px] flex items-center justify-center border-[#AD8253]/20">
                            <div className="text-center">
                                <Users className="w-16 h-16 text-[#AD8253] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Recruitment Growth Engine</h3>
                                <p className="text-[#a1a1a1]">Automated Business Development.</p>
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
                        Trusted by top
                        <br />
                        search firms
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {recruitmentLogos.map((logo) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">The Agency Trap</h2>

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
                            <h3 className="text-white font-semibold text-lg mb-4">The Pain Point</h3>
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
                        Your Outsourced <br />
                        Business Development Team
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto">
                        Your recruiters should be recruiting. We handle the grind of finding new clients, so your team can focus on billing fees.
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
                    Placement Results
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
                            <div className="font-medium text-[#AD8253]">Agency</div>
                            <div className="font-medium text-[#AD8253]">Outcome</div>
                            <div className="font-medium text-[#AD8253]">Problem Solved</div>
                            <div></div>
                        </div>
                        {companyResults.map((result, index) => (
                            <div
                                key={index}
                                className="grid md:grid-cols-4 p-4 border-b border-white/5 items-center hover:bg-[#333] transition-colors gap-4 md:gap-0"
                            >
                                <div className="font-medium text-white">{result.logo}</div>
                                <div className="font-semibold text-white/90"><span className="md:hidden text-[#AD8253] text-xs uppercase block mb-1">Outcome:</span>{result.results}</div>
                                <div className="text-[#a1a1a1] text-sm"><span className="md:hidden text-[#AD8253] text-xs uppercase block mb-1">Problem:</span>{result.challenge}</div>
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
                    Metrics that Drive Billings
                </h3>
                <p className="text-[#a1a1a1] mb-6">
                    In recruitment, "Speed to Market" is everything. We get your candidates in front of hiring managers before your competitors even know the job exists.
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
                <p className="text-sm text-[#a1a1a1] mb-4">Job Orders Generated (Monthly)</p>
                <div className="h-64 relative">
                    <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-[#a1a1a1]">
                        <span>40</span>
                        <span>30</span>
                        <span>20</span>
                        <span>10</span>
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
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">The Placement Protocol</h3>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Recruitment Intelligence</h3>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Experts in Agency Growth</h3>
            <div className="grid lg:grid-cols-2 gap-8 text-white">
                <div className="bg-[#272727] rounded-2xl overflow-hidden shadow-sm border border-white/5 p-6">
                    <h4 className="text-xl font-bold mb-4">We know the grind</h4>
                    <p className="text-[#a1a1a1] mb-4">
                        Our strategists have backgrounds in agency recruitment. We know what 'MPC', 'Full Desk', and 'Draw vs Commission' mean. We don't need to be onboarded.
                    </p>
                </div>
                <div className="bg-[#272727] rounded-2xl p-6 shadow-sm border border-white/5">
                    <h4 className="text-xl font-bold mb-4">Roles on your account</h4>
                    <ul className="space-y-2">
                        {["Account Strategist", "Copywriter (MPC/Client)", "Data Miner", "SDR Specialist", "Success Manager"].map((role) => (
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">Powered by Agency Tech</h3>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-white font-semibold mb-6">Integrations</h4>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">What Founders Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"Our recruiters were burning out from cold calling. ClickSalesMedia took over the BD function and now my team just takes 3-4 qualified meetings a week. It saved my agency."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">JD</div>
                            <div>
                                <p className="text-white font-bold">James D.</p>
                                <p className="text-[#a1a1a1] text-sm">Founder, TalentHive</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"The MPC campaigns are gold. We sent an anonymous profile of a Java Dev to 50 CTOs and got 3 interview requests in 24 hours. Incredible."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">SM</div>
                            <div>
                                <p className="text-white font-bold">Sarah M.</p>
                                <p className="text-[#a1a1a1] text-sm">MD, EliteStaff</p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Flexible Pricing</h2>
                <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-sm border border-white/5 max-w-3xl mx-auto text-center">
                    <p className="text-[#a1a1a1] mb-2 uppercase tracking-wide">Agency Growth Plan</p>
                    <p className="text-5xl font-bold text-[#AD8253] mb-6">Custom</p>
                    <p className="text-white mb-8">
                        We offer performance models based on meetings booked or a monthly retainer for managed campaigns.
                    </p>
                    <Link href="/contact" className="inline-block px-8 py-4 bg-[#AD8253] text-white rounded-lg hover:bg-[#8a6842] transition-colors font-medium">
                        Get a Quote
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Full-Desk Solutions</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">From Contingent to Retained</h2>
                <div className="grid lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Your Agency</div>
                    <Link href="/contact" className="col-span-2 bg-[#AD8253] p-4 rounded-lg text-white font-bold flex items-center justify-center hover:bg-[#c3a177] transition-colors">
                        Automate BD
                    </Link>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Predictable Fees</div>
                </div>
            </div>
        </section>
    );
}

function RecruitmentTypesSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">We scale agencies in:</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {recruitmentTypes.map((type) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Start placing more candidates</h2>
                <p className="text-gray-400 mb-8">
                    Stop waiting for the phone to ring. Build a machine that brings job orders to you.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#AD8253] text-white rounded-lg hover:bg-[#c3a177] transition-colors font-medium"
                >
                    Book a Growth Call
                </Link>
            </div>
        </section>
    );
}

export default function RecruitmentPage() {
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
            <RecruitmentTypesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
