"use client";

import React from "react";

// LinkedIn Profile Mockup
export function LinkedInProfileMockup() {
    return (
        <div className="relative mx-auto max-w-md">
            <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#AD8253]/20 backdrop-blur-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AD8253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-[#AD8253] to-[#c3a177]">
                    <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">
                        M
                    </div>
                </div>
                <p className="text-center font-semibold text-white">Michelle Foster</p>
                <p className="mb-4 text-center text-xs text-[#a1a1a1]">
                    CIO at Fortune 1000
                    <br />
                    Industrial Company
                </p>
                <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-[#AD8253]">★</span>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-4 -right-8 rounded-lg border border-white/10 bg-[#272727] p-2 shadow-lg">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-[#AD8253] to-[#c3a177]" />
            </div>
        </div>
    );
}

// Email/Outreach Stats Mockup
export function EmailStatsMockup() {
    return (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#AD8253] text-sm font-bold text-white">
                        in
                    </div>
                    <div>
                        <p className="text-xs font-medium text-white">Subject: Moving forward</p>
                        <p className="text-xs text-[#a1a1a1]">To: 245 recipients</p>
                    </div>
                </div>
                <div className="mb-4 space-y-2">
                    <div className="h-2 w-full rounded bg-[#AD8253]/30" />
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-[#AD8253]">90.24%</p>
                        <p className="text-xs text-[#a1a1a1]">Opened</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-[#AD8253]">25.02%</p>
                        <p className="text-xs text-[#a1a1a1]">Replied</p>
                    </div>
                </div>
            </div>
            <div className="absolute -right-8 top-0">
                <div className="rounded-full bg-[#AD8253] px-3 py-1 text-sm font-bold text-white shadow-lg">3X</div>
            </div>
            <div className="absolute -right-4 bottom-4">
                <div className="rounded-full bg-[#AD8253] px-3 py-1 text-sm font-bold text-white shadow-lg">4X</div>
            </div>
        </div>
    );
}

// Google Ads Dashboard Mockup
export function GoogleAdsMockup() {
    return (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded bg-gradient-to-br from-[#AD8253] to-[#c3a177]" />
                        <span className="text-sm font-medium text-white">Campaign Performance</span>
                    </div>
                    <div className="rounded-full bg-[#AD8253]/10 px-3 py-1 text-xs font-medium text-[#AD8253]">
                        Active
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="rounded-lg border border-white/5 bg-[#272727] p-3">
                        <p className="mb-1 text-xs text-[#a1a1a1]">ROAS</p>
                        <p className="text-2xl font-bold text-[#AD8253]">3.2x</p>
                    </div>
                    <div className="rounded-lg border border-white/5 bg-[#272727] p-3">
                        <p className="mb-1 text-xs text-[#a1a1a1]">Conv. Rate</p>
                        <p className="text-2xl font-bold text-[#AD8253]">8.4%</p>
                    </div>
                </div>

                {/* Chart Representation */}
                <div className="flex items-end justify-between gap-2 rounded-lg border border-white/5 bg-[#272727] p-4">
                    {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                        <div key={i} className="flex-1">
                            <div
                                className="w-full rounded-t bg-gradient-to-t from-[#AD8253] to-[#c3a177]"
                                style={{ height: `${height}px` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Analytics Dashboard Mockup
export function AnalyticsMockup() {
    return (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-sm font-medium text-white">Revenue Analytics</h4>
                    <div className="rounded-full bg-[#AD8253]/10 px-2 py-1 text-xs text-[#AD8253]">
                        Live
                    </div>
                </div>

                {/* Circular Progress */}
                <div className="mb-4 flex items-center justify-center">
                    <div className="relative h-32 w-32">
                        <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                            <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#272727"
                                strokeWidth="3"
                            />
                            <path
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="3"
                                strokeDasharray="75, 100"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#AD8253" />
                                    <stop offset="100%" stopColor="#c3a177" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-[#AD8253]">75%</span>
                            <span className="text-xs text-[#a1a1a1]">ROI</span>
                        </div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="space-y-2">
                    {[
                        { label: "Total Revenue", value: "$124K" },
                        { label: "Ad Spend", value: "$32K" },
                    ].map((metric, i) => (
                        <div key={i} className="flex items-center justify-between rounded border border-white/5 bg-[#272727] p-2">
                            <span className="text-xs text-[#a1a1a1]">{metric.label}</span>
                            <span className="text-sm font-bold text-white">{metric.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Google My Business Mockup
export function GoogleMyBusinessMockup() {
    return (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                {/* Business Card Header */}
                <div className="mb-4 flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-[#AD8253] to-[#c3a177] flex items-center justify-center text-2xl font-bold text-white">
                        B
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-white">Your Business Name</h4>
                        <div className="flex items-center gap-1 my-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-[#AD8253]">★</span>
                            ))}
                            <span className="ml-1 text-xs text-[#a1a1a1]">5.0 (247)</span>
                        </div>
                        <p className="text-xs text-[#a1a1a1]">B2B Service • Open Now</p>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="mb-4 grid grid-cols-3 gap-2">
                    {[
                        { label: "Views", value: "12.4K" },
                        { label: "Calls", value: "340" },
                        { label: "Directions", value: "180" },
                    ].map((stat, i) => (
                        <div key={i} className="rounded-lg border border-white/5 bg-[#272727] p-2 text-center">
                            <p className="text-lg font-bold text-[#AD8253]">{stat.value}</p>
                            <p className="text-xs text-[#a1a1a1]">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Reviews */}
                <div className="space-y-2">
                    <p className="text-xs font-medium text-white">Recent Reviews</p>
                    {[1, 2].map((i) => (
                        <div key={i} className="rounded border border-white/5 bg-[#272727] p-2">
                            <div className="flex items-center gap-1 mb-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="text-xs text-[#AD8253]">★</span>
                                ))}
                            </div>
                            <div className="h-1.5 w-full rounded bg-white/5 mb-1" />
                            <div className="h-1.5 w-3/4 rounded bg-white/5" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 -top-4 rounded-full bg-[#AD8253] px-3 py-1 text-xs font-bold text-white shadow-lg">
                Verified
            </div>
        </div>
    );
}

// Local Search Results Mockup
export function LocalSearchMockup() {
    return (
        <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 shadow-2xl">
                {/* Search Bar */}
                <div className="mb-4 flex items-center gap-2 rounded-lg border border-white/10 bg-[#272727] p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a1a1a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <div className="flex-1">
                        <div className="h-2 w-3/4 rounded bg-white/10" />
                    </div>
                </div>

                {/* Map Preview */}
                <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-[#272727] to-[#1a1a1a] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `repeating-linear-gradient(0deg, #AD8253 0px, #AD8253 1px, transparent 1px, transparent 20px),
                                        repeating-linear-gradient(90deg, #AD8253 0px, #AD8253 1px, transparent 1px, transparent 20px)`
                    }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#AD8253] flex items-center justify-center shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                    </div>
                </div>

                {/* Local Pack Results */}
                <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={`flex items-center gap-3 rounded-lg border p-3 ${i === 1 ? "border-[#AD8253]/50 bg-[#AD8253]/10" : "border-white/5 bg-[#272727]"
                            }`}>
                            <div className="flex items-center justify-center h-6 w-6 rounded bg-[#AD8253] text-xs font-bold text-white">
                                {i}
                            </div>
                            <div className="flex-1">
                                <div className={`h-2 w-24 rounded mb-1 ${i === 1 ? "bg-[#AD8253]" : "bg-white/10"}`} />
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span key={star} className={`text-xs ${i === 1 ? "text-[#AD8253]" : "text-[#a1a1a1]"}`}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

