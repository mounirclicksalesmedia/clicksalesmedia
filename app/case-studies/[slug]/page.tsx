"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { ArrowLeft, CheckCircle2, Quote, Loader2 } from "lucide-react";

interface Industry {
    id: string;
    name: string;
}

interface Stat {
    id: string;
    value: string;
    label: string;
}

interface CaseStudy {
    id: string;
    title: string;
    slug: string;
    client: string | null;
    image: string | null;
    description: string | null;
    challenge: string | null;
    solution: string | null;
    results: string | null;
    industries: Industry[];
    stats: Stat[];
    published: boolean;
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const [study, setStudy] = useState<CaseStudy | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [notFoundState, setNotFoundState] = useState(false);

    useEffect(() => {
        async function fetchCaseStudy() {
            try {
                const response = await fetch(`/api/case-studies/${slug}`);
                if (!response.ok) {
                    setNotFoundState(true);
                    return;
                }
                const data = await response.json();
                setStudy(data);
            } catch (error) {
                console.error('Failed to fetch case study:', error);
                setNotFoundState(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCaseStudy();
    }, [slug]);

    if (notFoundState) {
        notFound();
    }

    if (isLoading || !study) {
        return (
            <div className="min-h-screen bg-[#121212] flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#121212] text-gray-200 selection:bg-[#AD8253] selection:text-white">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a2a2a] via-[#121212] to-[#121212] opacity-70"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#AD8253] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Case Studies
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#AD8253] font-semibold text-sm uppercase tracking-wider mb-4 block">
                                {study.industries.map(i => i.name).join(" & ")}
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {study.title}
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                {study.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="bg-[#1e1e1e] border border-[#333] px-6 py-3 rounded-lg">
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Client</span>
                                    <span className="text-white font-medium">{study.client || 'N/A'}</span>
                                </div>
                                <div className="bg-[#1e1e1e] border border-[#333] px-6 py-3 rounded-lg">
                                    <span className="block text-xs text-gray-500 uppercase tracking-wide">Services</span>
                                    <span className="text-white font-medium">Strategy & Growth</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {study.stats.map((stat, idx) => (
                                <div key={idx} className="bg-[#1e1e1e] p-8 rounded-2xl border border-[#333] hover:border-[#AD8253]/50 transition-colors">
                                    <p className="text-4xl font-bold text-[#AD8253] mb-2">{stat.value}</p>
                                    <p className="text-gray-400 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-[#121212]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Challenge */}
                    {study.challenge && (
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-1 bg-[#AD8253] rounded-full"></span>
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wide">The Challenge</h2>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {study.challenge}
                            </p>
                        </div>
                    )}

                    {/* Solution */}
                    {study.solution && (
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-1 bg-[#AD8253] rounded-full"></span>
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wide">The Solution</h2>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                {study.solution}
                            </p>

                            {/* Placeholder visual/image for solution */}
                            {study.image && (
                                <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-[#333] h-96 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60 z-10"></div>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={study.image} alt="Solution visualization" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />

                                    <div className="absolute bottom-8 left-8 z-20">
                                        <span className="bg-[#AD8253] text-white text-xs px-3 py-1 rounded-full uppercase font-bold tracking-wider mb-3 inline-block">
                                            Strategy in Action
                                        </span>
                                        <h3 className="text-xl font-bold text-white">Delivering measurable impact</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Results */}
                    {study.results && (
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-1 bg-[#AD8253] rounded-full"></span>
                                <h2 className="text-2xl font-bold text-white uppercase tracking-wide">The Results</h2>
                            </div>
                            <p className="text-lg text-gray-300 leading-relaxed mb-10">
                                {study.results}
                            </p>

                            <div className="bg-[#1e1e1e] rounded-2xl border border-[#333] p-8">
                                <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="text-[#AD8253] w-5 h-5" />
                                    Key Outcomes
                                </h3>
                                <div className="space-y-4">
                                    {study.stats.map((stat, idx) => (
                                        <div key={idx} className="flex items-center justify-between border-b border-[#333] pb-4 last:border-0 last:pb-0">
                                            <span className="text-gray-400">{stat.label}</span>
                                            <span className="text-[#AD8253] font-bold text-lg">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#1e1e1e] py-24 border-t border-[#333]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to achieve similar results?</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        Let&apos;s discuss how our data-driven strategies can help {study.industries[0]?.name || 'your'} businesses scale effectively.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="w-full sm:w-auto bg-[#AD8253] hover:bg-[#8a6842] text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                            Schedule a Strategy Call
                        </Link>
                        <Link href="/case-studies" className="w-full sm:w-auto bg-transparent border border-[#333] hover:border-[#AD8253] text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg">
                            View More Case Studies
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
