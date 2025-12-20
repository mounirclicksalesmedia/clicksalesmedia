"use client";

import { ArrowRight, Mail, Phone, Video, MessageCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const features = [
    ["Cold email outreach", "SMS / WhatsApp"],
    ["Cold and intent calling", "LinkedIn lead generation"],
    ["Voicemails", "Paid advertising"],
];

const services = [
    { title: "Sales development", href: "/services/alpha-lead-gen" },
    { title: "AI Performance Marketing", href: "/services/ai-automation" },
    { title: "Lead Generation 2.0", href: "/services/alpha-lead-gen" },
    { title: "High-Converting Web Design", href: "/services/creative-studio" },
    { title: "CRO & LP Optimization", href: "/services/paid-media" },
    { title: "Sales enablement", href: "/services/strategy-consulting" },
    { title: "Lead nurturing", href: "/services/multi-channel-acquisition" },
    { title: "Lead generation training", href: "/services/strategy-consulting" },
    { title: "Demand generation", href: "/services/multi-channel-acquisition" },
    { title: "HubSpot CRM consulting", href: "/services/crm-architecture" },
    { title: "Deliverability consulting", href: "/services/seo-geo" },
    { title: "Account-based marketing", href: "/services/multi-channel-acquisition" },
];

function OmnichannelCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#AD8253]/20"
        >
            {/* Image with floating icons */}
            <div className="relative flex justify-center mb-8">
                <div className="relative">
                    {/* Person image placeholder */}
                    <div className="w-48 h-48 rounded-full overflow-hidden mx-auto relative bg-gradient-to-br from-[#AD8253]/20 to-[#c3a177]/20 flex items-center justify-center">
                        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center">
                            <span className="text-5xl">👩‍💼</span>
                        </div>
                    </div>

                    {/* Floating icons around the image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="absolute -left-4 top-8 w-10 h-10 bg-[#272727] rounded-lg shadow-lg border border-[#AD8253]/30 flex items-center justify-center"
                    >
                        <MessageCircle className="w-5 h-5 text-[#AD8253]" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute left-8 -top-2 w-10 h-10 bg-[#272727] rounded-lg shadow-lg border border-[#AD8253]/30 flex items-center justify-center"
                    >
                        <Phone className="w-5 h-5 text-[#AD8253]" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="absolute right-8 -top-2 w-10 h-10 bg-[#272727] rounded-lg shadow-lg border border-[#AD8253]/30 flex items-center justify-center"
                    >
                        <Phone className="w-5 h-5 text-[#c3a177]" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="absolute -right-4 top-8 w-10 h-10 bg-[#272727] rounded-lg shadow-lg border border-[#AD8253]/30 flex items-center justify-center"
                    >
                        <Video className="w-5 h-5 text-[#AD8253]" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="absolute -left-8 top-24 w-10 h-10 bg-[#272727] rounded-lg shadow-lg border border-[#AD8253]/30 flex items-center justify-center"
                    >
                        <Mail className="w-5 h-5 text-[#c3a177]" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="absolute -right-8 top-24 w-10 h-10 bg-[#272727] rounded-lg shadow-lg border border-[#AD8253]/30 flex items-center justify-center"
                    >
                        <Video className="w-5 h-5 text-[#c3a177]" />
                    </motion.div>

                    {/* Dotted arc lines */}
                    <svg
                        className="absolute inset-0 w-full h-full -z-10"
                        viewBox="0 0 200 200"
                        fill="none"
                    >
                        <path
                            d="M 20 140 Q 20 40 100 20 Q 180 40 180 140"
                            stroke="#AD8253"
                            strokeWidth="1.5"
                            strokeDasharray="6 6"
                            fill="none"
                            opacity="0.6"
                        />
                    </svg>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Omnichannel appointment setting
            </h3>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
                {features.map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#AD8253] rounded-full" />
                            <span className="text-[#a1a1a1]">{row[0]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#c3a177] rounded-full" />
                            <span className="text-[#a1a1a1]">{row[1]}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full border-2 border-[#AD8253] flex items-center justify-center hover:bg-[#AD8253]/10 transition-colors"
                >
                    <ArrowRight className="w-6 h-6 text-[#AD8253]" />
                </motion.button>
            </div>
        </motion.div>
    );
}

function ServiceCard({ title, href }: { title: string; href?: string }) {
    const content = (
        <motion.div
            whileHover={{ x: 5, borderColor: "rgba(173, 130, 83, 0.5)" }}
            className="bg-[#272727] rounded-xl px-5 py-4 flex items-center justify-between border border-[#AD8253]/20 cursor-pointer group transition-all"
        >
            <span className="text-white font-medium">{title}</span>
            <ArrowRight className="w-5 h-5 text-[#6b6b6b] group-hover:text-[#AD8253] transition-colors" />
        </motion.div>
    );

    if (href && href !== "#") {
        return (
            <a href={href} className="block">
                {content}
            </a>
        );
    }

    return content;
}

export function OmnichannelSection() {
    return (
        <section className="relative py-20 lg:py-32 bg-[#272727]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium mb-6">
                        Our Approach
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                        Multi-Channel{" "}
                        <span className="gradient-gold-text">Lead Generation</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-[#a1a1a1]">
                        Reach your ideal customers through every channel that matters with
                        our comprehensive B2B outreach strategy.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Omnichannel Card */}
                    <OmnichannelCard />

                    {/* Right Side - Services List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                            Meet our all-inclusive B2B lead generation services performed
                            <br className="hidden md:block" /> by{" "}
                            <span className="text-[#AD8253]">world-class sales experts</span>:
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <ServiceCard title={service.title} href={service.href} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
