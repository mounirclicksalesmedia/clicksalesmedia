'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { ImageUploader } from '@/components/admin/ImageUploader'
import { StatsEditor } from '@/components/admin/StatsEditor'

interface Industry {
    id: string
    name: string
}

interface Stat {
    value: string
    label: string
}

export default function EditCaseStudyPage() {
    const router = useRouter()
    const params = useParams()
    const caseStudyId = params.id as string

    const [industries, setIndustries] = useState<Industry[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(true)
    const [formData, setFormData] = useState({
        title: '',
        client: '',
        description: '',
        content: '',
        challenge: '',
        solution: '',
        results: '',
        image: null as string | null,
        industryIds: [] as string[],
        stats: [] as Stat[],
        published: false,
    })

    useEffect(() => {
        fetchIndustries()
        fetchCaseStudy()
    }, [caseStudyId])

    const fetchIndustries = async () => {
        try {
            const response = await fetch('/api/admin/industries')
            const data = await response.json()
            setIndustries(data)
        } catch (error) {
            console.error('Failed to fetch industries:', error)
        }
    }

    const fetchCaseStudy = async () => {
        try {
            const response = await fetch(`/api/admin/case-studies/${caseStudyId}`)
            const data = await response.json()
            setFormData({
                title: data.title,
                client: data.client || '',
                description: data.description || '',
                content: data.content || '',
                challenge: data.challenge || '',
                solution: data.solution || '',
                results: data.results || '',
                image: data.image,
                industryIds: data.industries.map((i: Industry) => i.id),
                stats: data.stats.map((s: Stat & { id: string }) => ({
                    value: s.value,
                    label: s.label,
                })),
                published: data.published,
            })
        } catch (error) {
            console.error('Failed to fetch case study:', error)
        } finally {
            setIsFetching(false)
        }
    }

    const handleIndustryToggle = (id: string) => {
        setFormData((prev) => ({
            ...prev,
            industryIds: prev.industryIds.includes(id)
                ? prev.industryIds.filter((i) => i !== id)
                : [...prev.industryIds, id],
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const response = await fetch(`/api/admin/case-studies/${caseStudyId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                router.push('/admin/case-studies')
            }
        } catch (error) {
            console.error('Failed to update case study:', error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isFetching) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 pt-12 lg:pt-0">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link
                    href="/admin/case-studies"
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white">Edit Case Study</h1>
                    <p className="text-gray-400 mt-1">Update your case study</p>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-[#272727] rounded-xl p-6 border border-white/10 space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Title *
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Enter case study title"
                        />
                    </div>

                    {/* Client */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Client Name
                        </label>
                        <input
                            type="text"
                            value={formData.client}
                            onChange={(e) =>
                                setFormData({ ...formData, client: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Enter client name"
                        />
                    </div>

                    {/* Industries */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Industries
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {industries.map((industry) => (
                                <button
                                    key={industry.id}
                                    type="button"
                                    onClick={() => handleIndustryToggle(industry.id)}
                                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${formData.industryIds.includes(industry.id)
                                        ? 'bg-[#AD8253] text-white'
                                        : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/10'
                                        }`}
                                >
                                    {industry.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Short Description
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({ ...formData, description: e.target.value })
                            }
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Brief summary of the case study"
                        />
                    </div>

                    {/* Challenge */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            The Challenge
                        </label>
                        <textarea
                            value={formData.challenge}
                            onChange={(e) =>
                                setFormData({ ...formData, challenge: e.target.value })
                            }
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Describe the challenge the client faced..."
                        />
                    </div>

                    {/* Solution */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            The Solution
                        </label>
                        <textarea
                            value={formData.solution}
                            onChange={(e) =>
                                setFormData({ ...formData, solution: e.target.value })
                            }
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Describe the solution you implemented..."
                        />
                    </div>

                    {/* Results */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            The Results
                        </label>
                        <textarea
                            value={formData.results}
                            onChange={(e) =>
                                setFormData({ ...formData, results: e.target.value })
                            }
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Describe the results achieved..."
                        />
                    </div>

                    {/* Content (Legacy/Optional) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Additional Content (Optional)
                        </label>
                        <textarea
                            value={formData.content}
                            onChange={(e) =>
                                setFormData({ ...formData, content: e.target.value })
                            }
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#AD8253]"
                            placeholder="Any additional content..."
                        />
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Featured Image
                        </label>
                        <ImageUploader
                            value={formData.image}
                            onChange={(url) => setFormData({ ...formData, image: url })}
                            folder="case-studies"
                        />
                    </div>

                    {/* Stats */}
                    <StatsEditor
                        stats={formData.stats}
                        onChange={(stats) => setFormData({ ...formData, stats })}
                    />

                    {/* Published */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="published"
                            checked={formData.published}
                            onChange={(e) =>
                                setFormData({ ...formData, published: e.target.checked })
                            }
                            className="w-5 h-5 rounded bg-[#1a1a1a] border-white/10 text-[#AD8253] focus:ring-[#AD8253]"
                        />
                        <label htmlFor="published" className="text-gray-300">
                            Published
                        </label>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4">
                    <Link
                        href="/admin/case-studies"
                        className="px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-3 rounded-lg bg-[#AD8253] text-white font-medium hover:bg-[#8a6842] disabled:opacity-50 transition-colors flex items-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            'Save Changes'
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
