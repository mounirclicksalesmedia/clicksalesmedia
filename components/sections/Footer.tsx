"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/Backgrounds";

const footerLinks = {
    services: [
        { name: "Paid Media", href: "#" },
        { name: "SEO & Content", href: "#" },
        { name: "CRO", href: "#" },
        { name: "ABM", href: "#" },
        { name: "Marketing Automation", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
    ],
    resources: [
        { name: "Knowledge Base", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Downloads", href: "#" },
        { name: "ROI Calculator", href: "#" },
    ],
};

const socialLinks = [
    {
        name: "LinkedIn",
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
];

export function Footer() {
    return (
        <footer className="relative bg-[#0f0f0f] pt-20 pb-8 overflow-hidden">
            <BackgroundBeams className="opacity-30" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.a
                            href="#"
                            className="flex items-center gap-3 mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Image
                                src="/clicksalesmedialogo.png"
                                alt="ClickSalesMedia"
                                width={180}
                                height={60}
                                className="h-12 w-auto"
                            />
                        </motion.a>
                        <p className="text-[#a1a1a1] leading-relaxed mb-6 max-w-sm">
                            A B2B performance marketing agency helping ambitious companies drive sustainable growth through data-driven strategies.
                        </p>
                        {/* Newsletter */}
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-[#1a1a1a] border border-[#AD8253]/20 rounded-lg text-white placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#AD8253]/50 transition-colors"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#272727] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(173,130,83,0.4)] transition-shadow">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[#a1a1a1] hover:text-[#AD8253] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[#a1a1a1] hover:text-[#AD8253] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[#a1a1a1] hover:text-[#AD8253] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#AD8253]/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[#6b6b6b] text-sm">
                        © {new Date().getFullYear()} ClickSalesMedia. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#AD8253]/20 flex items-center justify-center text-[#a1a1a1] hover:text-[#AD8253] hover:border-[#AD8253]/50 transition-all"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Legal */}
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#" className="text-[#6b6b6b] hover:text-[#AD8253] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#6b6b6b] hover:text-[#AD8253] transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
