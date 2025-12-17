"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowingCard({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) {
    return (
        <motion.div
            className={cn("relative group", containerClassName)}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#AD8253] to-[#c3a177] rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500" />

            {/* Card */}
            <div
                className={cn(
                    "relative bg-[#1a1a1a] border border-[#AD8253]/20 rounded-2xl p-8 transition-all duration-300",
                    "group-hover:border-[#AD8253]/40",
                    className
                )}
            >
                {children}
            </div>
        </motion.div>
    );
}

export function HoverCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-[1px]",
                className
            )}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#AD8253]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#1a1a1a] rounded-2xl p-8">
                {children}
            </div>
        </motion.div>
    );
}

export function FeatureCard({
    icon,
    title,
    description,
    className,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}) {
    return (
        <GlowingCard className={className}>
            <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center text-[#272727]">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-[#a1a1a1] leading-relaxed">{description}</p>
            </div>
        </GlowingCard>
    );
}

export function StatCard({
    value,
    label,
    suffix = "",
    className,
}: {
    value: string;
    label: string;
    suffix?: string;
    className?: string;
}) {
    return (
        <motion.div
            className={cn(
                "text-center p-8",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-5xl md:text-6xl font-bold gradient-gold-text mb-2">
                {value}{suffix}
            </div>
            <div className="text-[#a1a1a1] text-lg">{label}</div>
        </motion.div>
    );
}

export function TestimonialCard({
    quote,
    author,
    role,
    company,
    image,
    className,
}: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "flex-shrink-0 w-[400px] p-8 rounded-2xl bg-[#1a1a1a] border border-[#AD8253]/20",
                className
            )}
        >
            {/* Quote marks */}
            <div className="text-[#AD8253] text-4xl font-serif mb-4">"</div>

            <p className="text-white text-lg leading-relaxed mb-6">{quote}</p>

            <div className="flex items-center gap-4">
                {image ? (
                    <img
                        src={image}
                        alt={author}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center text-[#272727] font-bold">
                        {author[0]}
                    </div>
                )}
                <div>
                    <div className="font-semibold text-white">{author}</div>
                    <div className="text-sm text-[#a1a1a1]">
                        {role}, {company}
                    </div>
                </div>
            </div>
        </div>
    );
}
