"use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

const testimonials = [
    {
        quote:
            "ClickSalesMedia transformed our B2B marketing strategy. In just 6 months, we saw a 340% increase in qualified leads and a 12x return on ad spend.",
        name: "Dr. Mohammed Saad",
        title: "Director, Americaln Accreditation Association",
        image: "/testimonials/dr-mohammed-saad.jpg"
    },
    {
        quote:
            "Their data-driven approach to performance marketing is unmatched. They don't just run campaigns—they build growth engines.",
        name: "Hicham Bouliz",
        title: "CEO, Jurico Legal",
        image: "/testimonials/hicham.jpg"
    },
    {
        quote:
            "We've worked with many agencies, but none have delivered the consistent results and strategic insights that ClickSalesMedia provides.",
        name: "Dr. Samir",
        title: "Director, Inspeed global",
        image: "/testimonials/doctor-samir.jpg"
    },
    {
        quote:
            "The team's expertise in B2B paid media helped us break through a plateau we'd been stuck at for years. Exceptional ROI.",
        name: "Said Hannour",
        title: "Owner, Hannour Catering",
        image: "/testimonials/said-traiteur.jpg"
    },
    {
        quote:
            "From ABM to content strategy, they've become an extension of our marketing team. Highly recommend for any B2B company serious about growth.",
        name: "Chef Abdesamad",
        title: "CEO, Lubenablanca",
        image: "/testimonials/chef-abdesamad.jpg"
    },
    {
        quote:
            "ClickSalesMedia's approach to analytics and attribution finally gave us clarity on what's actually driving revenue. Game-changing insights.",
        name: "Mme Sanaa",
        title: "Founder, Maeva Fashion",
        image: "/testimonials/maevafashion.jpg"
    },
];

export function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative py-32 bg-[#0f0f0f] overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#272727] via-[#0f0f0f] to-[#1a1a1a]" />

            <div className="relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 px-6"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#AD8253]/10 border border-[#AD8253]/20 text-[#c3a177] text-sm font-medium mb-6">
                        Client Success Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        What Our
                        <br />
                        <span className="gradient-gold-text">Clients Say</span>
                    </h2>
                    <p className="text-lg text-[#a1a1a1] max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it—hear from the B2B leaders who've
                        experienced transformative growth.
                    </p>
                </motion.div>

                {/* Moving Cards */}
                <div className="relative">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="slow"
                        pauseOnHover={true}
                    />
                </div>

                {/* Second row moving opposite direction */}
                <div className="relative mt-6">
                    <InfiniteMovingCards
                        items={[...testimonials].reverse()}
                        direction="right"
                        speed="slow"
                        pauseOnHover={true}
                    />
                </div>
            </div>
        </section>
    );
}
