"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
    className?: string;
    fill?: string;
}

export function Spotlight({ className, fill = "#AD8253" }: SpotlightProps) {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!spotlightRef.current) return;

            const { clientX, clientY } = e;
            spotlightRef.current.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, ${fill}15, transparent 40%)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [fill]);

    return (
        <div
            ref={spotlightRef}
            className={cn(
                "pointer-events-none fixed inset-0 z-30 transition duration-300",
                className
            )}
        />
    );
}

export function SpotlightBeam({ className }: { className?: string }) {
    return (
        <svg
            className={cn(
                "pointer-events-none absolute -top-40 left-1/2 h-[80vh] w-[120vw] -translate-x-1/2 opacity-30",
                className
            )}
            viewBox="0 0 1600 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="spotlight-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#AD8253" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#c3a177" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#AD8253" stopOpacity="0" />
                </linearGradient>
            </defs>
            <ellipse
                cx="800"
                cy="0"
                rx="600"
                ry="400"
                fill="url(#spotlight-gradient)"
            />
        </svg>
    );
}
