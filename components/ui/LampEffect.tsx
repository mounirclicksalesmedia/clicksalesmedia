"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampContainer({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden bg-[#0f0f0f] w-full rounded-none z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#AD8253] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute w-[100%] left-0 bg-[#0f0f0f] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-[100%] left-0 bg-[#0f0f0f] bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#AD8253] text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-[100%] right-0 bg-[#0f0f0f] bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-[100%] right-0 bg-[#0f0f0f] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#0f0f0f] blur-2xl" />
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#AD8253] opacity-50 blur-3xl" />
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#c3a177] blur-2xl"
                />
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#c3a177]"
                />

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#0f0f0f]" />
            </div>

            <div className="relative z-50 flex -translate-y-60 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
}

export function SimpleLamp({ className }: { className?: string }) {
    return (
        <div className={cn("relative w-full", className)}>
            {/* Lamp glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#AD8253]/40 via-[#AD8253]/10 to-transparent rounded-full blur-3xl" />
            </div>
            {/* Lamp line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px] bg-gradient-to-r from-transparent via-[#AD8253] to-transparent" />
        </div>
    );
}
