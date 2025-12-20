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
    Code,
    CreditCard,
    Globe,
    ShieldCheck,
    Smartphone,
    TrendingUp,
} from "lucide-react";

// ============ DATA ============

const fintechLogos = [
    { name: "PayStream", text: "PayStream" },
    { name: "LendFlow", text: "LendFlow" },
    { name: "CoinGuard", text: "CoinGuard" },
    { name: "NeoBank", text: "NeoBank" },
    { name: "InsurTech", text: "InsurTech" },
    { name: "WealthBot", text: "WealthBot" },
];

const challenges = [
    {
        id: 1,
        title: "CAC is skyrocketing",
        problem:
            "Paid ads are saturated. Bidding on 'credit card processing' or 'business loans' costs a fortune, destroying your margins before you even acquire the customer.",
        problemAuthor: "David",
        problemRole: "VPE of Growth",
        solution:
            "We bypass the ad auctions completely. Our direct outreach targets your ideal users—whether they are CFOs or Developers—at 1/10th the cost of LinkedIn or Google Ads.",
    },
    {
        id: 2,
        title: "Trust is hard to earn for new players",
        problem:
            "Why would a CFO trust a startup with their money? Overcoming the 'legacy is safe' mindset is the biggest hurdle for B2B fintechs.",
        problemAuthor: "Sarah",
        problemRole: "Founder of a Payment Gateway",
        solution:
            "We build trust-first campaigns. We leverage your case studies, security certifications (SOC2), and strategic partnerships in our outreach to prove you are enterprise-ready from day one.",
    },
    {
        id: 3,
        title: "Reaching decision-makers in legacy banks",
        problem:
            "Selling B2B software to banks is a nightmare. Navigating the hierarchy to find the person who can actually say 'yes' takes months.",
        problemAuthor: "Michael",
        problemRole: "Enterprise Sales Lead",
        solution:
            "Our enterprise team maps the buying centers of major banks and financial institutions. We know exactly who heads digital transformation and innovation, getting you straight to the decision-maker.",
    },
    {
        id: 4,
        title: "Developer adoption is slow",
        problem:
            "If you're an infrastructure fintech, you need developers to love you. But they ignore generic marketing and sales pitches.",
        problemAuthor: "Alex",
        problemRole: "Head of Developer Relations",
        solution:
            "We adopt a 'DevRel as Sales' approach. We target CTOs and Senior Engineers with technical value propositions—API documentation, sandbox access, and integration ease—not fluffy marketing speak.",
    },
    {
        id: 5,
        title: "Churn is high due to poor onboarding",
        problem:
            "You sign start-ups that go bust or leave. You need stable, mid-market and enterprise clients to reduce churn.",
        problemAuthor: "Jessica",
        problemRole: "VP of Customer Success",
        solution:
            "We pivot your pipeline upstream. We stop targeting early-stage startups and focus your outreach on profitable, mid-sized companies with stable transaction volumes.",
    },
];

const partnerTabs = [
    {
        id: "tailored",
        title: "B2B Focus",
        heading: "We specialize in B2B Fintech.",
        content:
            "We don't do retail crypto apps. We specialize in B2B: Payments, Lending, RegTech, InsurTech, and embedded finance. We understand the complex sales cycle of selling financial technology to businesses.",
        extra:
            "We know the difference between ISOs, PayFacs, and Acquirers.",
        link: "See our B2B focus",
    },
    {
        id: "pipeline",
        title: "Bank Partnerships",
        heading: "Unlock the bank channel.",
        content:
            "For many fintechs, partnering with a regional or community bank is the holy grail. We run specialized campaigns to 'Head of Innovation' & 'Chief Digital Officer' roles at thousands of banks.",
        extra:
            "Get the meetings that lead to BaaS (Banking as a Service) sponsorships.",
        link: "View partnership results",
    },
    {
        id: "playbooks",
        title: "Embedded Finance",
        heading: "Find platforms, not just merchants.",
        content:
            "Instead of selling to one merchant at a time, we help you sell to SaaS platforms that can embed your payments or lending product, bringing you thousands of sub-merchants at once.",
        extra:
            "The 1-to-many sales model is the fastest way to scale TPV (Total Payment Volume).",
        link: "Explore strategies",
    },
    {
        id: "channels",
        title: "Tech-Forward Outreach",
        heading: "Outreach that feels native.",
        content:
            "We use Slack communities, GitHub (where appropriate), and tech-focused channels to reach modern buyers. We speak the language of APIs and integrations.",
        extra: "Your brand never looks like a 'spammy suit'—it looks like a tech partner.",
        link: "Learn about channels",
    },
    {
        id: "alignment",
        title: "Global Expansion",
        heading: "Cross-border growth.",
        content:
            "Expanding to the US, Key EU markets, or APAC? We build localized lists and messaging to help you launch in new territories without hiring a local team immediately.",
        extra:
            "Test a new market's appetite before committing expensive resources.",
        link: "Meet your global team",
    },
    {
        id: "scalability",
        title: "Rapid Scaling",
        heading: "From Seed to Series C.",
        content:
            "We've helped fintechs grow from their first 10 beta users to their first 1,000 enterprise customers. Our systems evolve as your product matures.",
        extra: "Scale up lead flow to match your funding milestones.",
        link: "Discuss scaling",
    },
];

const resultsTabs = ["Results", "KPIs", "Our process", "Peek inside", "Team", "Tech stack"];

const companyResults = [
    {
        company: "PayStream",
        logo: "PayStream",
        results: "Closed 3 major marketplace platforms",
        challenge: "Shift strategy from direct merchant sales to platform partnerships.",
    },
    {
        company: "LendFlow",
        logo: "LendFlow",
        results: "$20M in loan origination demand generated",
        challenge: "Needed to find construction companies needing working capital.",
    },
    {
        company: "CoinGuard",
        logo: "CoinGuard",
        results: "15 Enterprise Proof-of-Concepts (POCs)",
        challenge: "Selling institutional crypto custody to traditional hedge funds.",
    },
    {
        company: "NeoBank",
        logo: "NeoBank",
        results: "400% increase in business account signups",
        challenge: "Reducing CAC below $200 per business account.",
    },
    {
        company: "InsurTech",
        logo: "InsurTech",
        results: "Partnered with top 10 national broker",
        challenge: "Needed distribution partners, not direct policy sales.",
    },
    {
        company: "WealthBot",
        logo: "WealthBot",
        results: "Onboarded 50 RIA firms",
        challenge: "Replacing legacy portfolio management software.",
    },
    {
        company: "RegSure",
        logo: "RegSure",
        results: "30 demos with Bank Compliance Officers",
        challenge: "Very hard to reach target persona (Chief Risk Officer).",
    },
    {
        company: "InvoiceGo",
        logo: "InvoiceGo",
        results: "Acquired 200 SME users in 3 months",
        challenge: "Crowded market for invoicing software.",
    },
];

const kpiStats = [
    "30% lower CAC vs Paid Ads",
    "25% conversion rate from Demo to POC",
    "50+ Enterprise connections per month",
    "3x ROI in first 6 months",
];

const processStages = [
    {
        id: 1,
        title: "ICP & Tech Stack Analysis",
        duration: "1-14 days",
        description:
            "We analyze not just who your customers are, but what tech they use. We target companies using your competitors (for displacement) or complementary tech (for integration).",
    },
    {
        id: 2,
        title: "Value Prop Engineering",
        duration: "15-30 days",
        description:
            "We translate your features into financial benefits. 'Real-time API' becomes 'Improved Cash Flow'. We craft different messages for the CTO, CFO, and CEO.",
    },
    {
        id: 3,
        title: "Multi-Channel Launch",
        duration: "30-60 days",
        description:
            "We launch coordinated campaigns on Email and LinkedIn. We use intent data to prioritize companies actively researching financial solutions.",
    },
    {
        id: 4,
        title: "Pipeline Acceleration",
        duration: "60+ days",
        description:
            "We help nurture leads that aren't ready to buy yet. We share your whitepapers, case studies, and API updates to stay top of mind until the buying window opens.",
    },
];

const peekInsideTabs = [
    {
        id: "opportunity",
        title: "Technographic Targeting",
        content:
            "We can see who is using Stripe, QuickBooks, NetSuite, or Plaid. We build lists based on the software stack your prospect already has installed.",
    },
    {
        id: "sourcing",
        title: "Funding Triggers",
        content:
            "When a startup raises Series A, they need better financial controls. We track funding announcements to pitch your CFO-stack solutions at the perfect moment.",
    },
    {
        id: "templates",
        title: "Solution Selling",
        content:
            "We don't pitch 'features'. We pitch solutions to specific problems: 'Reduce reconciliation time by 80%', 'Automate payout flows', 'Cut FX fees in half'.",
    },
    {
        id: "reporting",
        title: "Pipeline Velocity",
        content:
            "We track how fast deals move. We identify bottlenecks in your sales process—are we losing them at the reply, the demo, or the contract?",
    },
    {
        id: "communication",
        title: "Developer Dialect",
        content:
            "When reaching out to technical buyers, we drop the sales fluff. We send links to documentation, offer sandbox keys, and talk about potential integration challenges honestly.",
    },
];

const techPartners = [
    "Salesforce",
    "HubSpot",
    "Crunchbase Pro",
    "BuiltWith",
    "LinkedIn Sales Nav",
    "Apollo",
    "Mixmax",
    "Clearbit",
];

const proprietaryTools = [
    {
        name: "StackScout",
        description: "Technographics finder",
        color: "bg-purple-500",
    },
    {
        name: "FundWatch",
        description: "Investment round tracker",
        color: "bg-green-500",
    },
    {
        name: "Gatekeeper",
        description: "Direct dial verification",
        color: "bg-blue-500",
    },
];

const services = {
    outbound: {
        title: "Outbound Sales Engine",
        description: "Directly target your ideal fintech buyers:",
        channels: [
            {
                title: "Cold Email",
                items: [
                    "C-Suite targeting (CFO/CTO)",
                    "Competitor displacement",
                    "Technographic campaigns",
                    "Partner recruitment",
                    "Event meeting booking",
                    "Newsletter sponsorship",
                ],
            },
            {
                title: "LinkedIn Growth",
                items: [
                    "Founder branding",
                    "Sales Navigator lists",
                    "InMail sequences",
                    "Content distribution",
                    "Poll engagement",
                    "Strategic commenting",
                ],
            },
            {
                title: "Account-Based",
                items: [
                    "Dream 100 bank list",
                    "Enterprise mapping",
                    "Personalized video",
                    "Physical gifts (Direct Mail)",
                    "Multi-thread outreach",
                    "Buying committee alignment",
                ],
            },
        ],
    },
    inbound: {
        title: "Inbound Demand Gen",
        description: "Make them come to you:",
        channels: [
            {
                title: "Content Marketing",
                items: [
                    "Technical case studies",
                    "Comparison pages (Us vs Them)",
                    "API documentation polish",
                    "Trust center creation",
                    "Blog posts on regulations",
                    "Whitepapers",
                ],
            },
            {
                title: "SEO",
                items: [
                    "High-intent keyword ranking",
                    "Technical SEO audit",
                    "Competitor keyword gap",
                    "Programmatic SEO pages",
                    "Local presence (if applicable)",
                    "YouTube SEO",
                ],
            },
            {
                title: "Conversion (CRO)",
                items: [
                    "Landing page optimization",
                    "Pricing page testing",
                    "Demo flow friction removal",
                    "Sign-up form analytics",
                    "Exit intent offers",
                    "Social proof widget",
                ],
            },
        ],
    },
    complementary: {
        title: "Revenue Ops",
        description: "Optimize your sales machine:",
        channels: [
            {
                title: "Data Enrichment",
                items: [
                    "Lead scoring",
                    "Contact verification",
                    "Intent signal monitoring",
                    "CRM cleaning",
                    "Buying signals",
                    "Tech stack appending",
                ],
            },
            {
                title: "Sales Enablement",
                items: [
                    "Pitch deck redesign",
                    "One-pagers",
                    "ROI calculators",
                    "Proposal templates",
                    "Battlecards",
                    "Email script libraries",
                ],
            },
            {
                title: "CRM Setup",
                items: [
                    "HubSpot customization",
                    "Pipeline stages",
                    "Automations & Workflows",
                    "Reporting dashboards",
                    "Tech stack integration",
                    "Sales/Marketing alignment",
                ],
            },
        ],
    },
};

const nutshellSteps = [
    ["Market Analysis", "Tech Stack Filter", "Decision Maker ID", "Message Crafting"],
    ["Multi-Channel Launch", "A/B Testing", "Response Handling", "Meeting Set"],
    ["Demo/Access", "Technical Eval", "Security Review", "Contract", "Go Live"],
];

const fintechTypes = [
    "Payment Processors",
    "Lending Platforms",
    "Neobanks",
    "InsurTech",
    "RegTech",
    "WealthTech",
    "Crypto/Blockchain",
    "Accounting Software",
    "Payroll Solutions",
    "Expense Management",
    "Banking-as-a-Service",
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
                        <p className="text-[#AD8253] font-medium mb-4">For B2B Fintech Companies</p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Scale User Acquisition & <span className="text-[#AD8253]">Enterprise Partnerships</span>
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Stop fighting over expensive ad keywords. We build direct outbound pipelines to CFOs, Developers, and Bank Executives to drive demos, partnerships, and revenue.
                        </p>
                        <div>
                            <div className="flex flex-col items-start gap-3">
                                <BookingButton
                                    text="Get a Growth Strategy"
                                    variant="primary"
                                    size="lg"
                                    source="industry-fintech-hero"
                                />
                                <p className="text-sm text-[#6b6b6b]">* schedule a 15-30-min discovery call</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass-card p-6 min-h-[400px] flex items-center justify-center border-[#AD8253]/20">
                            <div className="text-center">
                                <CreditCard className="w-16 h-16 text-[#AD8253] mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Fintech Growth Engine</h3>
                                <p className="text-[#a1a1a1]">Lower CAC. Higher LTV.</p>
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
                        Fueling growth for
                        <br />
                        innovative fintechs
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {fintechLogos.map((logo) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Why Fintech Growth is Hard</h2>

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
                            <h3 className="text-white font-semibold text-lg mb-4">The Challenge</h3>
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
                        Growth strategies for <br />
                        the future of finance
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto">
                        Whether you are disrupting payments, insurance, or lending, we integrate with your team to drive scalable, predictable revenue growth.
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
                    Fintech Success Stories
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
                            <div className="font-medium text-[#AD8253]">Fintech</div>
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
                                        See Case Study
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
                    Optimizing Unit Economics
                </h3>
                <p className="text-[#a1a1a1] mb-6">
                    Fintech lives and dies by LTV/CAC. Our outbound strategies drastically reduce acquisition costs compared to paid media, improving your unit economics instantly.
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
                <p className="text-sm text-[#a1a1a1] mb-4">Monthly Recurring Revenue (Growth)</p>
                <div className="h-64 relative">
                    <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-xs text-[#a1a1a1]">
                        <span>500k</span>
                        <span>250k</span>
                        <span>100k</span>
                        <span>50k</span>
                        <span>0</span>
                    </div>
                    <div className="ml-10 mr-4 h-full flex items-end gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                            <div key={month} className="flex-1 flex flex-col items-center gap-1">
                                <div className="w-full bg-[#AD8253] rounded-t opacity-80" style={{ height: `${25 + month * 5}%` }} />
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
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">The Fintech Growth Protocol</h3>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Data-Driven Precision</h3>
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">Your Dedicated Growth Squad</h3>
            <div className="grid lg:grid-cols-2 gap-8 text-white">
                <div className="bg-[#272727] rounded-2xl overflow-hidden shadow-sm border border-white/5 p-6">
                    <h4 className="text-xl font-bold mb-4">Fintech Natives</h4>
                    <p className="text-[#a1a1a1] mb-4">
                        We understand APIs, compliance, and the difference between 'interchange' and 'SaaS fees'. You don't need to explain your business model to us; we get it.
                    </p>
                </div>
                <div className="bg-[#272727] rounded-2xl p-6 shadow-sm border border-white/5">
                    <h4 className="text-xl font-bold mb-4">Roles on your team</h4>
                    <ul className="space-y-2">
                        {["Campaign Strategist", "Technical Copywriter", "Data Scientist", "Lead Researcher", "SDR Manager"].map((role) => (
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
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-4">Built on the best data</h3>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h4 className="text-white font-semibold mb-6">Data Partners</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {techPartners.map((partner) => (
                            <div key={partner} className="bg-[#1a1a1a] rounded-lg p-4 flex items-center justify-center border border-white/10">
                                <span className="text-white font-medium">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6">Proprietary Engines</h4>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Founder Feedback</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"Our biggest issue was getting in front of legacy banks. ClickSalesMedia opened doors we had been banging on for years. The access to decision-makers is real."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">MK</div>
                            <div>
                                <p className="text-white font-bold">Matt K.</p>
                                <p className="text-[#a1a1a1] text-sm">CEO, RegSure</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-8 text-left">
                        <p className="text-lg text-white mb-6">"We slashed our CAC by 40% in the first quarter. Moving away from LinkedIn Ads to their targeted outbound approach was the best growth decision we made."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#AD8253] rounded-full flex items-center justify-center text-white font-bold">AL</div>
                            <div>
                                <p className="text-white font-bold">Amanda L.</p>
                                <p className="text-[#a1a1a1] text-sm">VP Growth, LendFlow</p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Growth tailored to your stage</h2>
                <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-sm border border-white/5 max-w-3xl mx-auto text-center">
                    <p className="text-[#a1a1a1] mb-2 uppercase tracking-wide">Fintech Scale-Up Plan</p>
                    <p className="text-5xl font-bold text-[#AD8253] mb-6">Custom</p>
                    <p className="text-white mb-8">
                        Startups need different things than Enterprises. We build a package based on your current stage: Seed, Series A/B, or Public.
                    </p>
                    <div className="flex justify-center">
                        <BookingButton
                            text="Get a Quote"
                            variant="primary"
                            size="lg"
                            source="industry-fintech-pricing"
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Comprehensive Growth Stack</h2>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Fintech Growth Roadmap</h2>
                <div className="grid lg:grid-cols-6 gap-4 text-center">
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Your Fintech</div>
                    <div className="col-span-2 flex items-center justify-center">
                        <BookingButton
                            text="Accelerate Growth"
                            variant="primary"
                            className="w-full h-full text-lg"
                            source="industry-fintech-nutshell"
                        />
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg text-[#a1a1a1] col-span-2 flex items-center justify-center font-bold text-lg">Market Dominance</div>
                </div>
            </div>
        </section>
    );
}

function FintechTypesSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">We accelerate all vertical:</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {fintechTypes.map((type) => (
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to scale your fintech?</h2>
                <p className="text-gray-400 mb-8">
                    Let's find your next 1,000 customers or 10 major bank partners.
                </p>
                <div className="flex justify-center">
                    <BookingButton
                        text="Book a Discovery Call"
                        source="industry-fintech-cta"
                        variant="primary"
                        size="lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default function FintechPage() {
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
            <FintechTypesSection />
            <CTASection />
            <Footer />
        </main>
    );
}
