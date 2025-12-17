"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const teamMembers = [
    {
        name: "Rafif",
        role: "Creative Director",
        image: "/team/rafif.jpg",
    },
    {
        name: "Said",
        role: "Lead Data Analyst",
        image: "/team/said.jpg",
    },
    {
        name: "Sara",
        role: "Head of Performance Marketing",
        image: "/team/sara.jpg",
    },
    {
        name: "Ibrahim",
        role: "Senior SEO Strategist",
        image: "/team/ibrahim.jpg",
    },
    {
        name: "Reem",
        role: "Client Success Manager",
        image: "/team/reem.jpg",
    },
    {
        name: "Zeina",
        role: "Paid Media Specialist",
        image: "/team/zeina.png",
    },
];

export function TeamSection() {
    return (
        <section className="relative py-32 bg-[#1a1a1a]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Meet The <span className="gradient-gold-text">Team</span>
                    </h2>
                    <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
                        A group of performance marketing experts dedicated to your success
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="glass-card p-8 text-center hover:border-[#AD8253]/40 transition-all duration-300">
                                {/* Avatar */}
                                <div className="relative inline-block mb-6">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center p-[2px] group-hover:scale-110 transition-transform duration-300">
                                        <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1a1a1a]">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#AD8253] border-4 border-[#1a1a1a] flex items-center justify-center z-10">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#272727"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-[#AD8253] font-medium mb-4">{member.role}</p>

                                {/* Social Link */}
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#AD8253]/10 hover:bg-[#AD8253]/20 border border-[#AD8253]/20 text-[#AD8253] transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
