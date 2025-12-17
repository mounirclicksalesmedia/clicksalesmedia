"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
    children,
    duration = 2000,
    className,
    containerClassName,
    borderClassName,
    as: Component = "button",
    ...props
}: {
    children: React.ReactNode;
    duration?: number;
    className?: string;
    containerClassName?: string;
    borderClassName?: string;
    as?: React.ElementType;
    [key: string]: unknown;
}) {
    return (
        <Component
            className={cn(
                "relative p-[1px] overflow-hidden bg-transparent",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "absolute inset-0",
                    borderClassName
                )}
                style={{
                    background: `linear-gradient(90deg, transparent, #AD8253, transparent)`,
                }}
            >
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(90deg, transparent, #AD8253, #c3a177, #AD8253, transparent)`,
                    }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: duration / 1000,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>
            <div
                className={cn(
                    "relative bg-[#272727] rounded-full px-8 py-4 text-white font-semibold",
                    className
                )}
            >
                {children}
            </div>
        </Component>
    );
}

export function GlowingButton({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
}) {
    return (
        <motion.button
            className={cn(
                "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-[#272727] rounded-full overflow-hidden group",
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {/* Background gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#AD8253] via-[#c3a177] to-[#AD8253]" />

            {/* Shine effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </span>

            {/* Glow */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_40px_rgba(173,130,83,0.6)]" />

            {/* Text */}
            <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
        </motion.button>
    );
}

export function OutlineButton({
    children,
    className,
    ...props
}: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
}) {
    return (
        <motion.button
            className={cn(
                "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-[#AD8253] rounded-full border-2 border-[#AD8253] overflow-hidden group",
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {/* Fill on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#AD8253] via-[#c3a177] to-[#AD8253] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            {/* Text */}
            <span className="relative z-10 group-hover:text-[#272727] transition-colors duration-300 whitespace-nowrap">
                {children}
            </span>
        </motion.button>
    );
}
