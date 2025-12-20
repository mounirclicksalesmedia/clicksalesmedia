"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ServiceHeroVisual } from "@/components/services/ServiceHeroVisual";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceProcessVisual } from "@/components/services/ServiceProcessVisual";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function WebDevPage() {
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

    // Website Mockup
    const WebsiteMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-white/5 bg-[#272727] px-4 py-3">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/60" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                        <div className="h-3 w-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 mx-4">
                        <div className="rounded bg-[#1a1a1a] px-3 py-1 text-xs text-[#a1a1a1]">
                            yourdomain.com
                        </div>
                    </div>
                </div>

                {/* Website Content */}
                <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="h-6 w-24 rounded bg-gradient-to-r from-[#AD8253] to-[#c3a177]" />
                        <div className="flex gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-2 w-12 rounded bg-white/10" />
                            ))}
                        </div>
                    </div>

                    <div className="mb-6 space-y-2">
                        <div className="h-8 w-3/4 rounded bg-white/10" />
                        <div className="h-4 w-1/2 rounded bg-white/5" />
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-[#272727] to-[#1a1a1a]" />
                        ))}
                    </div>

                    <div className="h-10 w-32 rounded-full bg-gradient-to-r from-[#AD8253] to-[#c3a177]" />
                </div>
            </div>

            {/* Performance Badge */}
            <div className="absolute -right-4 -top-4 rounded-lg bg-[#272727] border border-white/10 p-3 shadow-lg">
                <div className="text-center">
                    <p className="text-2xl font-bold text-[#AD8253]">100</p>
                    <p className="text-xs text-[#a1a1a1]">Lighthouse</p>
                </div>
            </div>
        </div>
    );

    // Speed Mockup
    const SpeedMockup = () => (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 text-center">
                    <p className="text-xs text-[#a1a1a1]">Page Load Analysis</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    {[
                        { metric: "LCP", value: "0.8s", status: "good" },
                        { metric: "FID", value: "12ms", status: "good" },
                        { metric: "CLS", value: "0.02", status: "good" },
                        { metric: "TTFB", value: "120ms", status: "good" },
                    ].map((item, i) => (
                        <div key={i} className="rounded-lg border border-white/5 bg-[#272727] p-3 text-center">
                            <p className="text-xs text-[#a1a1a1] mb-1">{item.metric}</p>
                            <p className="text-xl font-bold text-[#AD8253]">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="rounded-lg border border-[#AD8253]/20 bg-[#AD8253]/10 p-3 text-center">
                    <span className="text-sm text-[#AD8253]">✓ All Core Web Vitals Passed</span>
                </div>
            </div>
        </div>
    );

    return (
        <main className="relative min-h-screen bg-[#1a1a1a]">
            <Navigation />

            <ServiceHeroVisual
                badge="High-Conversion Web Development"
                title="Websites Engineered to Convert"
                description="We don't build brochure websites. We build performance-engineered digital assets designed to convert visitors into qualified leads. Speed, mobile-first, and UX-optimized."
                visual={<WebsiteMockup />}
                source="service-web-development-hero"
            />

            <ServiceProblems
                title="Your Website Should Be Your #1 Salesperson"
                subtitle="Solve the problems that are costing you leads every day."
                items={[
                    {
                        problem: "Slow website driving visitors away",
                        solutionTitle: "Sub-second load times guaranteed",
                        solutionDescription:
                            "We build on modern stacks (Next.js) for sub-second load times that keep visitors engaged.",
                    },
                    {
                        problem: "Great traffic but terrible conversion rates",
                        solutionTitle: "UX designed for B2B decision-makers",
                        solutionDescription:
                            "Every element is designed based on how B2B buyers actually browse and make decisions. Psychology-backed layouts that guide visitors to convert.",
                    },
                    {
                        problem: "Website doesn't rank on Google",
                        solutionTitle: "Technical SEO built from line one",
                        solutionDescription:
                            "Structure, schemas, meta tags, and Core Web Vitals optimized from the start. Not an afterthought, but foundational.",
                    },
                ]}
                source="service-web-development-problems"
            />

            <ServiceProcessVisual
                title="Our Build Process"
                subtitle="Agile, transparent, and focused on results."
                steps={[
                    {
                        title: "Discovery & Wireframe",
                        subtitle: "Mapping the user journey first",
                        points: [
                            "Deep dive into your business goals and target audience.",
                            "Map the ideal user journey from landing to conversion.",
                            "Create wireframes without distracting colors—pure UX focus.",
                        ],
                        illustration: (
                            <div className="relative mx-auto max-w-md">
                                <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                                    <div className="mb-4 text-sm text-white">Wireframe Preview</div>
                                    <div className="space-y-3">
                                        <div className="h-16 rounded-lg border-2 border-dashed border-white/20" />
                                        <div className="grid grid-cols-3 gap-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="h-12 rounded border border-dashed border-white/10" />
                                            ))}
                                        </div>
                                        <div className="h-24 rounded-lg border-2 border-dashed border-white/20" />
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        title: "Design & Prototype",
                        subtitle: "High-fidelity designs for approval",
                        points: [
                            "Pixel-perfect designs in Figma.",
                            "Interactive prototypes you can click through.",
                            "Multiple rounds of revision until perfect.",
                        ],
                        illustration: <WebsiteMockup />,
                    },
                    {
                        title: "Development",
                        subtitle: "Building with modern tech",
                        points: [
                            "Next.js + Tailwind CSS for performance and flexibility.",
                            "Headless CMS integration (Sanity, Strapi) for easy editing.",
                            "Responsive design tested on all devices.",
                        ],
                        illustration: <SpeedMockup />,
                    },
                ]}
            />

            {/* Stats Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#272727] to-[#1a1a1a] py-16">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#AD8253]/10 blur-3xl" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Ready for a Website That Works?</h2>
                            <p className="text-[#a1a1a1]">
                                Join companies with websites that generate leads 24/7.
                            </p>
                        </div>
                        <div className="flex justify-center gap-8 lg:justify-end">
                            {[
                                { value: "100", label: "Lighthouse Score" },
                                { value: "<1s", label: "Load Time" },
                                { value: "3x", label: "More Leads" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-4xl font-bold text-[#AD8253] md:text-5xl">{stat.value}</p>
                                    <p className="text-sm text-[#a1a1a1]">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ServiceFAQ
                items={[
                    {
                        question: "Can I edit the content myself?",
                        answer:
                            "Yes! We integrate a headless CMS (like Sanity or Strapi) so you can easily edit text, images, and content without touching code.",
                    },
                    {
                        question: "How long does a website take?",
                        answer:
                            "Typically 4-8 weeks depending on complexity and page count. We provide a detailed timeline before starting.",
                    },
                    {
                        question: "Do you offer maintenance?",
                        answer:
                            "Yes, we offer ongoing maintenance packages including security updates, performance monitoring, and content updates.",
                    },
                ]}
            />

            <AboutCTA source="service-web-development-cta" />
            <Footer />
        </main>
    );
}
