"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Users,
    UserCheck,
    Target,
    Trophy,
    ChevronRight,
    TrendingUp,
} from "lucide-react";

const FUNNEL_STAGES = [
    {
        id: "leads",
        label: "Leads",
        icon: Users,
        description:
            "Top of funnel prospects generated through paid campaigns, SEO, content marketing, and outbound outreach.",
        stats: { volume: "10,000+", sources: "Multi-Channel" },
        width: 100,
    },
    {
        id: "mql",
        label: "MQL",
        icon: Target,
        description:
            "Marketing Qualified Leads that show engagement signals - content downloads, webinar attendance, and repeated site visits.",
        stats: { qualified: "4,200", rate: "42%" },
        width: 75,
    },
    {
        id: "sql",
        label: "SQL",
        icon: UserCheck,
        description:
            "Sales Qualified Leads vetted by your team, ready for direct outreach with confirmed budget, authority, and timeline.",
        stats: { pipeline: "1,680", value: "$2.1M" },
        width: 55,
    },
    {
        id: "customers",
        label: "Customers",
        icon: Trophy,
        description:
            "Closed-won deals that become long-term customers with ongoing expansion and retention opportunities.",
        stats: { closed: "504", revenue: "$630K" },
        width: 32,
    },
];

function FunnelStage({
    stage,
    index,
    isActive,
    onClick,
}: {
    stage: (typeof FUNNEL_STAGES)[0];
    index: number;
    isActive: boolean;
    onClick: () => void;
}) {
    const Icon = stage.icon;

    return (
        <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="w-full group relative"
        >
            <div
                className={`
          relative mx-auto transition-all duration-500 ease-out
          ${isActive ? "opacity-100" : "opacity-70 hover:opacity-90"}
        `}
                style={{ width: `${stage.width}%`, minWidth: '200px' }}
            >
                <div
                    className={`
            relative py-4 px-6 rounded-xl transition-all duration-300
            ${isActive
                            ? "bg-gradient-to-r from-[#AD8253] to-[#c3a177] shadow-lg shadow-[#AD8253]/30"
                            : "bg-[#1a1a1a] border border-[#AD8253]/20 group-hover:border-[#AD8253]/50"
                        }
          `}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div
                                className={`
                  w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300
                  ${isActive ? "bg-[#272727]/20" : "bg-[#AD8253]/10 group-hover:bg-[#AD8253]/20"}
                `}
                            >
                                <Icon
                                    className={`w-5 h-5 ${isActive ? "text-[#272727]" : "text-[#AD8253]"}`}
                                />
                            </div>
                            <div className="text-left">
                                <h3
                                    className={`font-semibold text-base ${isActive ? "text-[#272727]" : "text-white"}`}
                                >
                                    {stage.label}
                                </h3>
                                <p
                                    className={`text-xs ${isActive ? "text-[#272727]/70" : "text-[#a1a1a1]"}`}
                                >
                                    Stage {index + 1}
                                </p>
                            </div>
                        </div>
                        <ChevronRight
                            className={`
                w-5 h-5 transition-all duration-300
                ${isActive
                                    ? "text-[#272727] rotate-90"
                                    : "text-[#AD8253]/40 group-hover:text-[#AD8253] group-hover:translate-x-1"
                                }
              `}
                        />
                    </div>
                </div>

                {index < FUNNEL_STAGES.length - 1 && (
                    <div className="flex justify-center py-2">
                        <div
                            className={`w-0.5 h-6 transition-colors duration-300 ${isActive ? "bg-[#AD8253]" : "bg-[#AD8253]/20"
                                }`}
                        />
                    </div>
                )}
            </div>
        </motion.button>
    );
}

function StageContent({
    stage,
    isActive,
}: {
    stage: (typeof FUNNEL_STAGES)[0];
    isActive: boolean;
}) {
    const Icon = stage.icon;

    if (!isActive) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="bg-[#1a1a1a] border border-[#AD8253]/20 rounded-2xl p-6 md:p-8"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center shadow-lg shadow-[#AD8253]/30">
                    <Icon className="w-7 h-7 text-[#272727]" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">{stage.label}</h3>
                    <p className="text-[#a1a1a1] text-sm">
                        Stage {FUNNEL_STAGES.findIndex((s) => s.id === stage.id) + 1} of{" "}
                        {FUNNEL_STAGES.length}
                    </p>
                </div>
            </div>

            <p className="text-[#a1a1a1] mb-6 leading-relaxed">{stage.description}</p>

            <div className="grid grid-cols-2 gap-4">
                {Object.entries(stage.stats).map(([key, value]) => (
                    <div
                        key={key}
                        className="bg-[#272727] rounded-xl p-4 border border-[#AD8253]/10"
                    >
                        <p className="text-[#a1a1a1] text-xs uppercase tracking-wider mb-1">
                            {key}
                        </p>
                        <p className="text-white text-2xl font-bold">{value}</p>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#AD8253]/20">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[#a1a1a1] text-sm">Funnel Progress</span>
                    <span className="text-[#AD8253] font-medium flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {Math.round(
                            ((FUNNEL_STAGES.findIndex((s) => s.id === stage.id) + 1) /
                                FUNNEL_STAGES.length) *
                            100
                        )}
                        %
                    </span>
                </div>
                <div className="h-2 bg-[#272727] rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{
                            width: `${((FUNNEL_STAGES.findIndex((s) => s.id === stage.id) + 1) / FUNNEL_STAGES.length) * 100}%`,
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-[#AD8253] to-[#c3a177] rounded-full"
                    />
                </div>
            </div>
        </motion.div>
    );
}

function StageTab({
    stage,
    isActive,
    onClick,
}: {
    stage: (typeof FUNNEL_STAGES)[0];
    isActive: boolean;
    onClick: () => void;
}) {
    const Icon = stage.icon;

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
        flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 font-medium text-sm
        ${isActive
                    ? "bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#272727] shadow-lg shadow-[#AD8253]/30"
                    : "bg-transparent text-[#a1a1a1] hover:text-white hover:bg-[#AD8253]/10"
                }
      `}
        >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{stage.label}</span>
        </motion.button>
    );
}

export function FunnelSection() {
    const [activeStage, setActiveStage] = useState(0);

    return (
        <section className="relative py-20 lg:py-32 bg-[#272727] overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 -left-40 w-80 h-80 bg-[#AD8253]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#c3a177]/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium mb-6">
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Performance Marketing{" "}
                        <span className="gradient-gold-text">Funnel</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-xl mx-auto text-lg">
                        Track your B2B customer journey from first touch to closed deal
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-[#1a1a1a] rounded-full border border-[#AD8253]/20 max-w-fit mx-auto"
                >
                    {FUNNEL_STAGES.map((stage, index) => (
                        <StageTab
                            key={stage.id}
                            stage={stage}
                            isActive={activeStage === index}
                            onClick={() => setActiveStage(index)}
                        />
                    ))}
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Visual Funnel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#1a1a1a]/50 rounded-2xl p-6 md:p-8 border border-[#AD8253]/20 backdrop-blur-sm"
                    >
                        <div className="space-y-1">
                            {FUNNEL_STAGES.map((stage, index) => (
                                <FunnelStage
                                    key={stage.id}
                                    stage={stage}
                                    index={index}
                                    isActive={activeStage === index}
                                    onClick={() => setActiveStage(index)}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Stage Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <AnimatePresence mode="wait">
                            {FUNNEL_STAGES.map(
                                (stage, index) =>
                                    activeStage === index && (
                                        <StageContent key={stage.id} stage={stage} isActive={true} />
                                    )
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                >
                    {[
                        { value: "10K+", label: "Leads Generated" },
                        { value: "42%", label: "MQL Rate" },
                        { value: "40%", label: "SQL Rate" },
                        { value: "30%", label: "Close Rate" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, borderColor: "rgba(173, 130, 83, 0.5)" }}
                            className="text-center p-4 bg-[#1a1a1a] rounded-xl border border-[#AD8253]/20 transition-colors"
                        >
                            <p className="text-[#AD8253] text-2xl md:text-3xl font-bold">
                                {stat.value}
                            </p>
                            <p className="text-[#a1a1a1] text-xs uppercase tracking-wider mt-1">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
