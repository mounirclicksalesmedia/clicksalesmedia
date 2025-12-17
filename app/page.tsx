"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TextHoverSection } from "@/components/sections/TextHoverSection";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { OmnichannelSection } from "@/components/sections/OmnichannelSection";
import { FunnelSection } from "@/components/sections/FunnelSection";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
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
      <Hero />
      <Services />
      <TextHoverSection />
      <BentoGrid />
      <OmnichannelSection />
      <FunnelSection />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
