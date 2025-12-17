"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutImages } from "@/components/about/AboutImages";
import { MissionVision } from "@/components/about/MissionVision";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { TeamLifestyle } from "@/components/about/TeamLifestyle";
import { CEOSection } from "@/components/about/CEOSection";
import { TeamSection } from "@/components/about/TeamSection";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutPage() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="relative">
            <Navigation />
            <AboutHero />
            <AboutImages />
            <MissionVision />
            <ValuesGrid />
            <TeamLifestyle />
            <CEOSection />
            <TeamSection />
            <AboutCTA />
            <Footer />
        </main>
    );
}
