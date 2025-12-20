"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHoverSection() {
    return (
        <section className="relative py-12 md:py-16 lg:py-20 bg-[#272727] overflow-hidden">
            <div className="h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[24rem] xl:h-[28rem] flex items-center justify-center px-4">
                <TextHoverEffect text="PERFORMANCE" />
            </div>
        </section>
    );
}
