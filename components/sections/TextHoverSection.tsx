"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHoverSection() {
    return (
        <section className="relative py-16 bg-[#272727] overflow-hidden">
            <div className="h-[20rem] flex items-center justify-center">
                <TextHoverEffect text="PERFORMANCE" />
            </div>
        </section>
    );
}
