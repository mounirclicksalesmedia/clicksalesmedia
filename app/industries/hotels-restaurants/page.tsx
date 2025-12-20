"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { BookingButton } from "@/components/booking/BookingButton";
import {
    ArrowLeft, ArrowRight, ChevronRight, Check, Target, TrendingUp,
    MapPin, Search, BarChart3, Zap, Star, Users, Brain, Sparkles, CheckCircle2,
    UtensilsCrossed, Building, Camera, Globe, MessageSquare, Calendar,
} from "lucide-react";

// ============ DATA ============

const challenges = [
    { title: "Standing out in a crowded local market", solution: { title: "Hyper-Local SEO Domination", description: "We optimize your Google Business Profile, build local citations, and create location-specific content that puts you at the top of 'near me' searches in your area." } },
    { title: "Converting online searches to reservations", solution: { title: "Conversion-Optimized Presence", description: "We design seamless booking journeys with optimized landing pages, clear CTAs, and integrated reservation systems that turn browsers into diners and guests." } },
    { title: "Managing online reputation across platforms", solution: { title: "AI-Powered Review Management", description: "Our reputation system monitors reviews across Google, TripAdvisor, Yelp, and social platforms—alerting you instantly and helping you respond effectively." } },
    { title: "Competing with large chains and aggregators", solution: { title: "Authentic Brand Positioning", description: "We help independent hotels and restaurants compete by showcasing your unique story, local authenticity, and personalized experiences that chains can't match." } },
    { title: "Seasonal fluctuations in bookings", solution: { title: "Year-Round Demand Strategy", description: "Our campaigns adapt to seasonal trends, promoting special events, off-peak offers, and experience packages that maintain consistent revenue flow." } },
];

const pipelineStages = [
    { label: "Visibility", value: "10,000+", sublabel: "monthly local searches", isPrimary: true },
    { label: "Website Visits", value: "2,500+", sublabel: "qualified visitors", isPrimary: false },
    { label: "Engagements", value: "500+", sublabel: "calls, directions, bookings", isPrimary: false },
    { label: "Customers", value: "150+", sublabel: "new guests/month", isPrimary: false },
];

const journeySteps = [
    { title: "Local discovery", description: "We optimize your presence across Google Maps, search, and social platforms so hungry customers and travelers find you first when searching nearby." },
    { title: "Brand experience", description: "We craft compelling visual content, menu presentations, and virtual tours that make visitors crave your experience before they arrive." },
    { title: "Booking conversion", description: "We streamline the reservation process with integrated booking systems, instant quote responses, and follow-up sequences that reduce no-shows." },
];

const processSteps = [
    {
        icon: MapPin,
        step: "01",
        title: "GMB Optimization",
        subtitle: "Google Business Profile",
        items: ["Complete profile optimization", "Strategic category selection", "Photo & menu management", "Q&A and review response strategy"],
    },
    {
        icon: Globe,
        step: "02",
        title: "Programmatic SEO",
        subtitle: "Scalable Content",
        items: ["Menu item pages at scale", "Location-based landing pages", "AI-generated dish descriptions", "Automated schema for rich results"],
    },
    {
        icon: Search,
        step: "03",
        title: "Local SEO",
        subtitle: "Search Visibility",
        items: ["Local keyword targeting", "Citation building & cleanup", "Schema markup implementation", "Location page optimization"],
    },
    {
        icon: BarChart3,
        step: "04",
        title: "Paid Advertising",
        subtitle: "Targeted Campaigns",
        items: ["Google Local Ads", "Instagram & Facebook campaigns", "TripAdvisor sponsored placements", "Retargeting for abandoned bookings"],
    },
    {
        icon: Camera,
        step: "05",
        title: "Brand & Content",
        subtitle: "Visual Storytelling",
        items: ["Professional food photography", "Virtual tours & 360° views", "Social media content calendar", "Influencer partnership coordination"],
    },
];

const valueProps = [
    { icon: MapPin, title: "Local-First Strategy", desc: "We specialize in 'near me' searches. Your business appears when hungry customers and travelers are ready to book." },
    { icon: Star, title: "Reputation Excellence", desc: "AI-powered review monitoring and response strategies that build trust and improve your ratings across all platforms." },
    { icon: Globe, title: "Multi-Platform Presence", desc: "Synchronized visibility across Google, TripAdvisor, Booking.com, Yelp, and social media—managed from one dashboard." },
    { icon: Calendar, title: "Reservation Optimization", desc: "Integrated booking systems, table management, and no-show reduction strategies that maximize your covers." },
];

const segments = [
    "Fine Dining", "Casual Restaurants", "Fast Casual", "Cafés & Bakeries",
    "Boutique Hotels", "Luxury Resorts", "Bed & Breakfasts", "Bars & Lounges",
    "Catering Services", "Food Trucks", "Hotel Groups", "Restaurant Chains",
];

const stats = [
    { value: "340%", label: "Avg. GMB Visibility Increase" },
    { value: "4.7★", label: "Average Client Rating" },
    { value: "67%", label: "More Reservations" },
    { value: "#1", label: "Local Pack Rankings" },
];

// ============ COMPONENTS ============

function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#AD8253]/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c3a177]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(173,130,83,1) 1px, transparent 1px), linear-gradient(90deg, rgba(173,130,83,1) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

            <div className="relative z-10 container mx-auto px-6">
                <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-[#a1a1a1] hover:text-[#AD8253] mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />All industries
                </Link>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-6">
                            Digital Marketing for Hospitality
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Fill Every <span className="gradient-gold-text">Table & Room</span> in Your Venue
                        </h1>
                        <p className="text-lg text-[#a1a1a1] mb-8 leading-relaxed">
                            Dominate local search, build a stellar reputation, and turn online browsers into loyal guests with our hospitality-focused digital marketing.
                        </p>
                        <BookingButton
                            text="Get More Bookings"
                            variant="primary"
                            size="lg"
                            source="industry-hotels-restaurants-hero"
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="glass-card p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <UtensilsCrossed className="w-8 h-8 text-[#AD8253]" />
                            <Building className="w-8 h-8 text-[#AD8253]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">The Local Search Advantage</h3>
                        <p className="text-[#a1a1a1] mb-6 leading-relaxed">
                            "Near me" searches have grown 500% in recent years. Guests decide where to eat and stay in seconds—based on what they see online. We make sure they see you first.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[#AD8253]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">76%</p>
                                    <p className="text-sm text-[#6b6b6b]">visit within 24hrs</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center">
                                    <Star className="w-5 h-5 text-[#AD8253]" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">88%</p>
                                    <p className="text-sm text-[#6b6b6b]">trust online reviews</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function PhilosophySection() {
    return (
        <section className="py-20 bg-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-4">
                        Our Approach
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why <span className="gradient-gold-text">Hospitality Leaders</span> Choose Us
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg">
                        We understand that every reservation starts with a search. Our hospitality-focused strategies ensure you're visible, credible, and bookable.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valueProps.map((prop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 group hover:border-[#AD8253]/30 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#AD8253]/10 flex items-center justify-center mb-4 group-hover:bg-[#AD8253]/20 transition-colors">
                                <prop.icon className="w-6 h-6 text-[#AD8253]" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                            <p className="text-[#a1a1a1] text-sm leading-relaxed">{prop.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ChallengesSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Solutions for <span className="gradient-gold-text">Hospitality Challenges</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        {challenges.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-full text-left px-6 py-4 rounded-xl transition-all flex items-center justify-between ${active === i ? "bg-[#272727] border border-[#AD8253]/30" : "bg-[#272727]/50 border border-transparent hover:border-white/10"}`}
                            >
                                <span className={`font-medium ${active === i ? "text-[#AD8253]" : "text-[#a1a1a1]"}`}>{c.title}</span>
                                {active === i && <ArrowRight className="w-5 h-5 text-[#AD8253]" />}
                            </button>
                        ))}
                    </div>

                    <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="glass-card p-8">
                        <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                            <Check className="w-7 h-7 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{challenges[active].solution.title}</h3>
                        <p className="text-[#a1a1a1] mb-8 leading-relaxed">{challenges[active].solution.description}</p>
                        <BookingButton
                            text="Get Started"
                            variant="primary"
                            className="bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#1a1a1a] font-semibold rounded-full"
                            source="industry-hotels-restaurants-challenges"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function PipelineSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-20 bg-[#272727]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Your Guest Pipeline <span className="gradient-gold-text">With ClickSalesMedia</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto">Focus on delivering exceptional hospitality while we fill your tables and rooms.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="glass-card p-6 mb-4">
                            <p className="text-[#6b6b6b] text-sm mb-4">We manage your entire guest acquisition journey</p>
                            <div className="space-y-2">
                                {journeySteps.map((step, index) => (
                                    <button key={index} onClick={() => setActiveStep(index)} className={`w-full text-left rounded-xl transition-all ${activeStep === index ? "bg-[#1a1a1a] p-4" : "bg-transparent hover:bg-[#1a1a1a]/50 p-4"}`}>
                                        <div className="flex items-center justify-between">
                                            <span className={`font-medium ${activeStep === index ? "text-[#AD8253]" : "text-white"}`}>{step.title}</span>
                                            <ChevronRight className={`w-5 h-5 text-[#AD8253] transition-transform ${activeStep === index ? "rotate-90" : ""}`} />
                                        </div>
                                        {activeStep === index && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#a1a1a1] text-sm mt-3">{step.description}</motion.p>}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card p-6">
                            <p className="text-[#6b6b6b] text-sm mb-4">Your role in the process</p>
                            <div className="bg-[#1a1a1a] rounded-xl p-4 flex items-center justify-between">
                                <span className="text-white font-medium">Deliver exceptional experiences</span>
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-[#6b6b6b] text-sm mb-8 text-center">* Average monthly outcomes for established venues.</p>
                        <div className="w-full max-w-md space-y-4">
                            {pipelineStages.map((stage, index) => (
                                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-[#1a1a1a] text-white border border-white/10">{stage.label}</div>
                                    <div className={`rounded-xl p-6 text-center ${stage.isPrimary ? "bg-gradient-to-r from-[#AD8253] to-[#c3a177]" : "bg-[#1a1a1a] border border-white/10"}`} style={{ width: `${100 - index * 15}%`, margin: "0 auto" }}>
                                        <p className={`text-xl font-bold ${stage.isPrimary ? "text-[#1a1a1a]" : "text-white"}`}>{stage.value}</p>
                                        <p className={`text-sm ${stage.isPrimary ? "text-[#1a1a1a]/70" : "text-[#a1a1a1]"}`}>{stage.sublabel}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessSection() {
    return (
        <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#AD8253]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#AD8253] text-sm font-medium mb-4">
                        Our Proven Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        How We <span className="gradient-gold-text">Drive Reservations</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg">
                        A comprehensive approach that covers every touchpoint of the modern guest journey—from discovery to booking.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#AD8253]/20 via-[#AD8253]/40 to-[#AD8253]/20 -translate-y-1/2 z-0" />

                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative z-10"
                        >
                            <div className="glass-card p-6 h-full group hover:border-[#AD8253]/30 transition-all duration-500">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl font-bold bg-gradient-to-r from-[#AD8253] to-[#c3a177] bg-clip-text text-transparent">{step.step}</span>
                                    <div className="w-10 h-10 rounded-lg bg-[#AD8253]/10 flex items-center justify-center group-hover:bg-[#AD8253]/20 transition-colors">
                                        <step.icon className="w-5 h-5 text-[#AD8253]" />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                <p className="text-[#AD8253] text-sm mb-4">{step.subtitle}</p>

                                <ul className="space-y-2">
                                    {step.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 + i * 0.1 }}
                                            className="flex items-start gap-2 text-sm text-[#a1a1a1]"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-[#AD8253] mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#272727] to-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Results That <span className="gradient-gold-text">Matter</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-gold-text mb-2">{stat.value}</div>
                            <div className="text-sm text-[#6b6b6b]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SegmentsSection() {
    return (
        <section className="py-20 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        <span className="gradient-gold-text">We serve hospitality businesses</span> of all types
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl leading-relaxed">
                        From Michelin-starred restaurants to boutique hotels, we help hospitality venues attract and retain guests.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {segments.map((segment, index) => (
                        <motion.div
                            key={segment}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card px-4 py-3 text-center hover:border-[#AD8253]/30 transition-colors"
                        >
                            <span className="text-white text-sm">{segment}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-20 bg-[#272727]">
            <div className="container mx-auto px-6">
                <div className="glass-card p-12 text-center bg-gradient-to-br from-[#AD8253]/10 to-transparent border-[#AD8253]/20">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Sparkles className="w-12 h-12 text-[#AD8253] mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Fill Every Seat?
                        </h2>
                        <p className="text-[#a1a1a1] mb-8 max-w-2xl mx-auto">
                            Let's discuss how our hospitality marketing expertise can help you dominate local search and turn browsers into loyal guests.
                        </p>
                        <div className="flex justify-center">
                            <BookingButton
                                text="Get Your Free Audit"
                                variant="primary"
                                size="lg"
                                source="industry-hotels-restaurants-cta"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default function HotelsRestaurantsIndustryPage() {
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
        return () => { lenis.destroy(); };
    }, []);

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />
            <HeroSection />
            <PhilosophySection />
            <ChallengesSection />
            <PipelineSection />
            <ProcessSection />
            <StatsSection />
            <SegmentsSection />
            <CTASection />
            <Footer />
        </main>
    );
}
