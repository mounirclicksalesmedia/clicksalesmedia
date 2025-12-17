"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/LampEffect";
import { BookingButton } from "@/components/booking";

export function CTA() {
    return (
        <section id="contact" className="relative">
            <LampContainer>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Ready to{" "}
                        <span className="gradient-gold-text">Accelerate</span>
                        <br />
                        Your Growth?
                    </h2>
                    <p className="text-lg text-[#a1a1a1] max-w-xl mx-auto mb-10 leading-relaxed">
                        Let's discuss how we can drive measurable results for your B2B company.
                        Book a free strategy call today.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <BookingButton
                            text="Check Availability"
                            variant="primary"
                            size="lg"
                            source="cta-section"
                        />
                        <a
                            href="mailto:hello@clicksalesmedia.com"
                            className="text-[#a1a1a1] hover:text-white transition-colors"
                        >
                            or email us at{" "}
                            <span className="text-[#AD8253]">hello@clicksalesmedia.com</span>
                        </a>
                    </motion.div>
                </motion.div>
            </LampContainer>
        </section>
    );
}

