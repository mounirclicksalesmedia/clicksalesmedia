"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export function InfiniteMovingCards({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
        image?: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[400px] max-w-full relative rounded-2xl border border-[#AD8253]/20 bg-[#1a1a1a] px-8 py-6 flex-shrink-0"
                        key={idx}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            />
                            <div className="text-[#AD8253] text-3xl font-serif mb-3">"</div>
                            <span className="relative z-20 text-base leading-relaxed text-gray-100">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-11 h-11 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center text-[#272727] font-bold">
                                        {item.name[0]}
                                    </div>
                                )}
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm font-semibold leading-[1.2] text-gray-100">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.2] text-gray-400">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
            <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 12px));
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 40s)
            var(--animation-direction, forwards) linear infinite;
        }
      `}</style>
        </div>
    );
}
