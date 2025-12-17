"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import {
    IconChartBar,
    IconRocket,
    IconTargetArrow,
    IconTrendingUp,
} from "@tabler/icons-react";

export function BentoGrid() {
    const features = [
        {
            title: "Data-Driven Strategy",
            description:
                "Every campaign is backed by comprehensive analytics and market research to maximize your ROI.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r border-[#AD8253]/20",
        },
        {
            title: "Global Reach",
            description:
                "Connect with B2B prospects across the globe through our strategic multi-channel approach.",
            skeleton: <SkeletonTwo />,
            className: "border-b col-span-1 lg:col-span-2 border-[#AD8253]/20",
        },
        {
            title: "Trusted by Industry Leaders",
            description:
                "Join 500+ companies who've transformed their marketing with our performance-driven approach.",
            skeleton: <SkeletonThree />,
            className: "col-span-1 lg:col-span-3 lg:border-r border-[#AD8253]/20",
        },
        {
            title: "Real-Time Analytics",
            description:
                "Track every metric that matters with our live dashboard and automated reporting.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];

    return (
        <section className="relative z-20 py-20 lg:py-32 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium mb-6">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-white mb-4">
                        Built for{" "}
                        <span className="gradient-gold-text">Performance</span>
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto text-[#a1a1a1] text-center font-normal">
                        From strategy to execution, we deliver measurable results that
                        accelerate your B2B growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-6 rounded-2xl border border-[#AD8253]/20 bg-[#272727]/50 backdrop-blur-sm overflow-hidden">
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} className={feature.className}>
                                <FeatureTitle>{feature.title}</FeatureTitle>
                                <FeatureDescription>{feature.description}</FeatureDescription>
                                <div className="h-full w-full">{feature.skeleton}</div>
                            </FeatureCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("p-6 sm:p-8 relative overflow-hidden", className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl font-semibold">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="text-sm md:text-base max-w-sm text-left text-[#a1a1a1] my-2">
            {children}
        </p>
    );
};

// Data visualization skeleton
export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 gap-10 h-full">
            <div className="w-full p-5 mx-auto bg-[#1a1a1a] rounded-xl shadow-2xl group h-full border border-[#AD8253]/10">
                <div className="flex flex-1 w-full h-full flex-col space-y-4">
                    {/* Animated chart bars */}
                    <div className="flex items-end gap-2 h-40">
                        {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="flex-1 rounded-t-md bg-gradient-to-t from-[#AD8253] to-[#c3a177]"
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-between text-[#a1a1a1] text-xs">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                        <span>Aug</span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 z-40 inset-x-0 h-40 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent w-full pointer-events-none" />
        </div>
    );
};

// Globe skeleton
export const SkeletonTwo = () => {
    return (
        <div className="h-60 flex flex-col items-center relative bg-transparent mt-4">
            <Globe className="absolute -right-10 -bottom-40" />
        </div>
    );
};

// Logo cloud skeleton
export const SkeletonThree = () => {
    const logos = [
        { name: "Google", color: "#AD8253" },
        { name: "Meta", color: "#c3a177" },
        { name: "LinkedIn", color: "#AD8253" },
        { name: "HubSpot", color: "#c3a177" },
        { name: "Salesforce", color: "#AD8253" },
        { name: "Marketo", color: "#c3a177" },
    ];

    return (
        <div className="relative flex flex-col items-start p-4 gap-6 h-full overflow-hidden">
            <div className="flex flex-row flex-wrap gap-3">
                {logos.map((logo, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="px-4 py-3 rounded-lg bg-[#272727] border border-[#AD8253]/20 hover:border-[#AD8253]/50 transition-all cursor-pointer"
                    >
                        <span
                            className="font-semibold text-sm"
                            style={{ color: logo.color }}
                        >
                            {logo.name}
                        </span>
                    </motion.div>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-4">
                <IconTrendingUp className="w-5 h-5 text-[#AD8253]" />
                <span className="text-[#a1a1a1] text-sm">
                    +340% average lead increase
                </span>
            </div>
        </div>
    );
};

// Metrics skeleton
export const SkeletonFour = () => {
    const metrics = [
        { icon: IconChartBar, value: "12x", label: "ROAS" },
        { icon: IconRocket, value: "500+", label: "Campaigns" },
        { icon: IconTargetArrow, value: "95%", label: "Accuracy" },
    ];

    return (
        <div className="flex flex-wrap gap-4 py-8">
            {metrics.map((metric, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex-1 min-w-[100px] p-4 rounded-xl bg-[#1a1a1a] border border-[#AD8253]/20 text-center"
                >
                    <metric.icon className="w-8 h-8 mx-auto mb-2 text-[#AD8253]" />
                    <div className="text-2xl font-bold gradient-gold-text">
                        {metric.value}
                    </div>
                    <div className="text-xs text-[#a1a1a1]">{metric.label}</div>
                </motion.div>
            ))}
        </div>
    );
};

// Globe component
export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 400 * 2,
            height: 400 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.15, 0.15, 0.15],
            markerColor: [0.678, 0.51, 0.325], // #AD8253 in RGB normalized
            glowColor: [0.678, 0.51, 0.325],
            markers: [
                { location: [37.7595, -122.4367], size: 0.05 },
                { location: [40.7128, -74.006], size: 0.08 },
                { location: [51.5074, -0.1278], size: 0.06 },
                { location: [48.8566, 2.3522], size: 0.05 },
                { location: [35.6762, 139.6503], size: 0.07 },
                { location: [1.3521, 103.8198], size: 0.05 },
                { location: [-33.8688, 151.2093], size: 0.05 },
                { location: [25.2048, 55.2708], size: 0.06 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};
