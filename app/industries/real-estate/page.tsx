"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import {
    ArrowLeft, ArrowRight, ChevronRight, Star, Check, Target,
    MessageSquare, Building2, Home, TrendingUp, MapPin, CheckCircle2, DollarSign,
} from "lucide-react";

const clientLogos = ["LuxuryHomes Pro", "Premier Estates", "Urban Realty", "Skyline Properties", "Elite Homes", "Metro Developers"];

const challenges = [
    { title: "Generating high-quality buyer and seller leads", solution: { title: "Targeted lead generation campaigns", description: "We deploy multi-channel campaigns targeting motivated buyers and sellers in your key markets using demographic, behavioral, and intent data to ensure lead quality." } },
    { title: "Standing out in a crowded real estate market", solution: { title: "Premium brand positioning", description: "We help you build a distinctive brand presence through high-quality content, targeted advertising, and strategic visibility that positions you as the market leader." } },
    { title: "Converting online leads into showings and listings", solution: { title: "Lead nurture automation", description: "Our automated nurture sequences keep leads engaged with market updates, property alerts, and valuable content until they're ready to buy or sell." } },
    { title: "Competing with large brokerages and iBuyers", solution: { title: "Local expertise positioning", description: "We highlight your local market knowledge, personalized service, and community connections that national players can't match." } },
    { title: "Inconsistent lead flow throughout the year", solution: { title: "Year-round demand generation", description: "Our evergreen campaigns maintain consistent lead flow while scaling up during peak seasons to maximize your opportunities." } },
];

const pipelineStages = [
    { label: "Prospects", value: "Up to 25,000*", sublabel: "targeted homebuyers/sellers", isPrimary: true },
    { label: "Inquiries", value: "Up to 12,000*", sublabel: "property inquiries", isPrimary: false },
    { label: "Showings", value: "300*", sublabel: "qualified showings/listings", isPrimary: false },
    { label: "Closings", value: "30-80*", sublabel: "closed transactions", isPrimary: false },
];

const journeySteps = [
    { title: "Market-targeted advertising", description: "We create hyper-local campaigns targeting buyers and sellers in specific neighborhoods, price ranges, and property types." },
    { title: "Lead capture & qualification", description: "We design high-converting landing pages and qualification flows that capture contact information and assess buyer/seller motivation." },
    { title: "Nurture to showing-ready", description: "We nurture leads through automated sequences until they're ready for showings, keeping them engaged with market updates." },
];

const segments = ["Luxury Real Estate", "Residential Brokerages", "Commercial Real Estate", "Property Developers", "Real Estate Investment", "Property Management", "New Construction Sales", "Vacation Properties", "Industrial Real Estate", "Mixed-Use Development", "Real Estate Technology"];
const stats = [{ value: "400+", label: "Real Estate Clients" }, { value: "$5B+", label: "In Closed Transactions" }, { value: "14x", label: "Average ROI" }, { value: "40%", label: "Lower Cost Per Lead" }];

function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0"><div className="absolute top-20 left-1/4 w-96 h-96 bg-[#AD8253]/10 rounded-full blur-3xl animate-pulse" /><div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c3a177]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} /></div>
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(173,130,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(173,130,83,1) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
            <div className="relative z-10 container mx-auto px-6">
                <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#AD8253] mb-8 transition-colors"><ArrowLeft className="w-4 h-4" />All industries</Link>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-6">Lead Generation for Real Estate</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Dominate Your <span className="gradient-gold-text">Real Estate Market</span></h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">Attract motivated buyers and sellers using our proven hyper-local marketing strategies that deliver exclusive, qualified leads.</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(173,130,83,0.4)] transition-all">Book a Consultation<ChevronRight className="w-5 h-5" /></Link>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card p-8">
                        <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-[#AD8253] text-[#AD8253]" />))}<span className="text-sm text-[#a1a1a1] ml-2">5.0 rating</span></div>
                        <p className="text-white mb-6 leading-relaxed">"ClickSalesMedia transformed our lead generation. We went from inconsistent referrals to a predictable pipeline. Last quarter, we closed 28 transactions from their leads."</p>
                        <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center text-white font-bold text-lg">J</div><div><p className="font-medium text-white">Jennifer Adams</p><p className="text-sm text-[#6b6b6b]">Team Lead, Adams Realty Group</p></div></div>
                        <div className="flex items-center gap-8 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center"><Target className="w-5 h-5 text-[#AD8253]" /></div><div><p className="text-2xl font-bold text-white">156</p><p className="text-sm text-[#6b6b6b]">qualified showings</p></div></div>
                            <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center"><DollarSign className="w-5 h-5 text-[#AD8253]" /></div><div><p className="text-2xl font-bold text-white">$12M</p><p className="text-sm text-[#6b6b6b]">in closed volume</p></div></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function LogoBar() { return (<section className="py-12 border-t border-b border-white/5"><div className="container mx-auto px-6"><p className="text-center text-[#6b6b6b] mb-8">Trusted by top-producing real estate professionals</p><div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">{clientLogos.map((logo) => (<span key={logo} className="text-[#6b6b6b] font-semibold text-lg hover:text-[#AD8253] transition-colors">{logo}</span>))}</div></div></section>); }

function ChallengesSection() {
    const [active, setActive] = useState(0);
    return (
        <section className="py-20 bg-[#272727]"><div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proven Solutions for Your <span className="gradient-gold-text">Real Estate Marketing Challenges</span></h2></motion.div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-2">{challenges.map((c, i) => (<button key={i} onClick={() => setActive(i)} className={`w-full text-left px-6 py-4 rounded-xl transition-all flex items-center justify-between ${active === i ? "bg-[#1a1a1a] border border-[#AD8253]/30" : "bg-[#1a1a1a]/50 border border-transparent hover:border-white/10"}`}><span className={`font-medium ${active === i ? "text-[#AD8253]" : "text-[#a1a1a1]"}`}>{c.title}</span>{active === i && <ArrowRight className="w-5 h-5 text-[#AD8253]" />}</button>))}</div>
                <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="glass-card p-8"><div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6"><Check className="w-7 h-7 text-green-500" /></div><h3 className="text-xl font-bold text-white mb-4">{challenges[active].solution.title}</h3><p className="text-[#a1a1a1] mb-8 leading-relaxed">{challenges[active].solution.description}</p><Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full">Schedule a Call</Link></motion.div>
            </div>
        </div></section>
    );
}

function PipelineSection() {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <section className="py-20 bg-[#1a1a1a]"><div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Real Estate Pipeline <span className="gradient-gold-text">With ClickSalesMedia</span></h2><p className="text-[#a1a1a1] max-w-2xl mx-auto">Focus on showing properties and closing deals while we fill your pipeline.</p></motion.div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div><div className="glass-card p-6 mb-4"><p className="text-[#6b6b6b] text-sm mb-4">We manage your entire lead journey</p><div className="space-y-2">{journeySteps.map((step, i) => (<button key={i} onClick={() => setActiveStep(i)} className={`w-full text-left rounded-xl transition-all ${activeStep === i ? "bg-[#272727] p-4" : "bg-transparent hover:bg-[#272727]/50 p-4"}`}><div className="flex items-center justify-between"><span className={`font-medium ${activeStep === i ? "text-[#AD8253]" : "text-white"}`}>{step.title}</span><ChevronRight className={`w-5 h-5 text-[#AD8253] transition-transform ${activeStep === i ? "rotate-90" : ""}`} /></div>{activeStep === i && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#a1a1a1] text-sm mt-3">{step.description}</motion.p>}</button>))}</div></div><div className="glass-card p-6"><p className="text-[#6b6b6b] text-sm mb-4">Your role</p><div className="bg-[#272727] rounded-xl p-4 flex items-center justify-between"><span className="text-white font-medium">Show properties & close deals</span><CheckCircle2 className="w-5 h-5 text-green-500" /></div></div></div>
                <div className="flex flex-col items-center"><p className="text-[#6b6b6b] text-sm mb-8 text-center">* Average yearly outcomes.</p><div className="w-full max-w-md space-y-4">{pipelineStages.map((stage, i) => (<motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-[#272727] text-white border border-white/10">{stage.label}</div><div className={`rounded-xl p-6 text-center ${stage.isPrimary ? "bg-gradient-to-r from-[#AD8253] to-[#c3a177]" : "bg-[#272727] border border-white/10"}`} style={{ width: `${100 - i * 15}%`, margin: "0 auto" }}><p className={`text-xl font-bold ${stage.isPrimary ? "text-[#1a1a1a]" : "text-white"}`}>{stage.value}</p><p className={`text-sm ${stage.isPrimary ? "text-[#1a1a1a]/70" : "text-[#a1a1a1]"}`}>{stage.sublabel}</p></div></motion.div>))}</div></div>
            </div>
        </div></section>
    );
}

function SegmentsSection() { return (<section className="py-20 bg-[#1a1a1a]"><div className="container mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12"><h2 className="text-3xl md:text-4xl font-bold text-white mb-6"><span className="gradient-gold-text">We serve real estate professionals</span> across all property types</h2></motion.div><div className="grid grid-cols-1 md:grid-cols-3 gap-4">{segments.map((s, i) => (<motion.div key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass-card px-6 py-4 hover:border-[#AD8253]/30 transition-colors"><span className="text-white">{s}</span></motion.div>))}</div></div></section>); }

function StatsSection() { return (<section className="py-20 bg-gradient-to-br from-[#272727] to-[#1a1a1a]"><div className="container mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center"><div className="text-4xl md:text-5xl font-bold gradient-gold-text mb-2">{stat.value}</div><div className="text-sm text-[#6b6b6b]">{stat.label}</div></motion.div>))}</motion.div></div></section>); }

function CTASection() { return (<section className="py-20 bg-[#272727]"><div className="container mx-auto px-6"><div className="glass-card p-12 text-center bg-gradient-to-br from-[#AD8253]/10 to-transparent border-[#AD8253]/20"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Dominate Your Real Estate Market?</h2><p className="text-[#a1a1a1] mb-8 max-w-2xl mx-auto">Let's discuss how we can help you attract more qualified buyers and sellers.</p><Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full hover:shadow-[0_0_40px_rgba(173,130,83,0.4)] transition-all">Schedule a Consultation<ArrowRight className="w-5 h-5" /></Link></motion.div></div></div></section>); }

export default function RealEstateIndustryPage() {
    useEffect(() => { const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), orientation: "vertical", smoothWheel: true }); function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); } requestAnimationFrame(raf); return () => { lenis.destroy(); }; }, []);
    return (<main className="relative min-h-screen bg-[#1a1a1a]"><Navigation /><HeroSection /><ChallengesSection /><PipelineSection /><SegmentsSection /><StatsSection /><CTASection /><Footer /></main>);
}
