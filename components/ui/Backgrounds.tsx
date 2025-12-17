"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function BackgroundBeams({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className
            )}
        >
            <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="beam1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#AD8253" stopOpacity="0" />
                        <stop offset="50%" stopColor="#AD8253" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#AD8253" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="beam2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#c3a177" stopOpacity="0" />
                        <stop offset="50%" stopColor="#c3a177" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#c3a177" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Animated beams */}
                <g className="animate-beam-1">
                    <path
                        d="M100,0 Q150,500 100,1000"
                        stroke="url(#beam1)"
                        strokeWidth="2"
                        fill="none"
                    />
                </g>
                <g className="animate-beam-2">
                    <path
                        d="M300,0 Q350,500 300,1000"
                        stroke="url(#beam2)"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </g>
                <g className="animate-beam-3">
                    <path
                        d="M500,0 Q550,500 500,1000"
                        stroke="url(#beam1)"
                        strokeWidth="2"
                        fill="none"
                    />
                </g>
                <g className="animate-beam-4">
                    <path
                        d="M700,0 Q650,500 700,1000"
                        stroke="url(#beam2)"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </g>
                <g className="animate-beam-5">
                    <path
                        d="M900,0 Q850,500 900,1000"
                        stroke="url(#beam1)"
                        strokeWidth="2"
                        fill="none"
                    />
                </g>
            </svg>

            <style jsx>{`
        @keyframes beam {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(-10px);
          }
          50% {
            opacity: 0.8;
            transform: translateY(10px);
          }
        }

        .animate-beam-1 { animation: beam 8s ease-in-out infinite; }
        .animate-beam-2 { animation: beam 10s ease-in-out infinite 1s; }
        .animate-beam-3 { animation: beam 7s ease-in-out infinite 2s; }
        .animate-beam-4 { animation: beam 9s ease-in-out infinite 0.5s; }
        .animate-beam-5 { animation: beam 11s ease-in-out infinite 1.5s; }
      `}</style>
        </div>
    );
}

export function GridBackground({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className
            )}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(173, 130, 83, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(173, 130, 83, 0.03) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />
            {/* Radial fade */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#272727]" />
        </div>
    );
}

export function DotBackground({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className
            )}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(173, 130, 83, 0.15) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />
        </div>
    );
}

export function GradientOrb({
    className,
    size = 400,
    color1 = "#AD8253",
    color2 = "#c3a177",
    blur = 100,
}: {
    className?: string;
    size?: number;
    color1?: string;
    color2?: string;
    blur?: number;
}) {
    return (
        <div
            className={cn("absolute rounded-full pointer-events-none", className)}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${color1}40, ${color2}20, transparent)`,
                filter: `blur(${blur}px)`,
            }}
        />
    );
}
