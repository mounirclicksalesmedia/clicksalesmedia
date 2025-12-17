'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2 } from 'lucide-react'

interface Industry {
    id: string
    name: string
}

interface Stat {
    id: string
    value: string
    label: string
}

interface CaseStudy {
    id: string
    title: string
    slug: string
    image: string | null
    description: string | null
    published: boolean
    createdAt: string
    industries: Industry[]
    stats: Stat[]
}

export default function CaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [deletingId, setDeletingId] = useState<string | null>(null)

    useEffect(() => {
        fetchCaseStudies()
    }, [])

    const fetchCaseStudies = async () => {
        try {
            const response = await fetch('/api/admin/case-studies')
            const data = await response.json()
            setCaseStudies(data)
        } catch (error) {
            console.error('Failed to fetch case studies:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this case study?')) return

        setDeletingId(id)
        try {
            const response = await fetch(`/api/admin/case-studies/${id}`, {
                method: 'DELETE',
            })

            if (response.ok) {
                setCaseStudies(caseStudies.filter((cs) => cs.id !== id))
            }
        } catch (error) {
            console.error('Failed to delete case study:', error)
        } finally {
            setDeletingId(null)
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
            </div>
        )
    }

    return (
        <div className="space-y-6 pt-12 lg:pt-0">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Case Studies</h1>
                    <p className="text-gray-400 mt-1">Manage your case studies</p>
                </div>
                <Link
                    href="/admin/case-studies/new"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    New Case Study
                </Link>
            </div>

            {/* Case Studies Grid */}
            {caseStudies.length === 0 ? (
                <div className="text-center py-12 bg-[#272727] rounded-xl border border-white/10">
                    <p className="text-gray-400 mb-4">No case studies yet</p>
                    <Link
                        href="/admin/case-studies/new"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] transition-colors"
                    >
                        <Plus className="w-5 h-5" />
                        Create your first case study
                    </Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-6">
                    {caseStudies.map((caseStudy) => (
                        <div
                            key={caseStudy.id}
                            className="bg-[#272727] rounded-xl overflow-hidden border border-white/10 hover:border-[#AD8253]/50 transition-colors"
                        >
                            {/* Image */}
                            <div className="relative h-48 bg-[#1a1a1a]">
                                {caseStudy.image ? (
                                    <Image
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                                        No image
                                    </div>
                                )}
                                <div className="absolute top-3 right-3 flex items-center gap-2">
                                    {caseStudy.published ? (
                                        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
                                            <Eye className="w-3 h-3" />
                                            Published
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">
                                            <EyeOff className="w-3 h-3" />
                                            Draft
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-semibold text-white text-lg mb-2 line-clamp-2">
                                    {caseStudy.title}
                                </h3>

                                {/* Industries */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {caseStudy.industries.map((industry) => (
                                        <span
                                            key={industry.id}
                                            className="px-2 py-0.5 text-xs rounded-full bg-[#1a1a1a] text-gray-400"
                                        >
                                            {industry.name}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats Preview */}
                                {caseStudy.stats.length > 0 && (
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        {caseStudy.stats.slice(0, 2).map((stat) => (
                                            <div key={stat.id} className="p-2 rounded-lg bg-[#1a1a1a]">
                                                <p className="text-[#AD8253] font-bold">{stat.value}</p>
                                                <p className="text-xs text-gray-500 line-clamp-1">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Actions */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <span className="text-xs text-gray-500">
                                        {new Date(caseStudy.createdAt).toLocaleDateString()}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href={`/admin/case-studies/${caseStudy.id}/edit`}
                                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(caseStudy.id)}
                                            disabled={deletingId === caseStudy.id}
                                            className="p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors disabled:opacity-50"
                                        >
                                            {deletingId === caseStudy.id ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <Trash2 className="w-5 h-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
