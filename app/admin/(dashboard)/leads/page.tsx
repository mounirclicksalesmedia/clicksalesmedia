'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    Users,
    Filter,
    Search,
    CheckCircle2,
    XCircle,
    Calendar,
    Mail,
    Building2,
    Globe,
    TrendingUp,
    DollarSign,
    Clock,
    ChevronDown,
    Eye,
    X,
    Loader2
} from 'lucide-react'

interface Lead {
    id: string
    name: string
    email: string
    phone: string | null
    company: string | null
    website: string | null
    growthGoal: string
    budgetTier: string
    status: string
    isQualified: boolean
    notes: string | null
    source: string | null
    createdAt: string
    updatedAt: string
    meetings: Array<{
        id: string
        startTime: string
        status: string
    }>
}

const statusColors: Record<string, string> = {
    NEW: 'bg-blue-500/20 text-blue-400',
    QUALIFIED: 'bg-green-500/20 text-green-400',
    UNQUALIFIED: 'bg-gray-500/20 text-gray-400',
    MEETING_SCHEDULED: 'bg-purple-500/20 text-purple-400',
    CONTACTED: 'bg-yellow-500/20 text-yellow-400',
    CONVERTED: 'bg-[#AD8253]/20 text-[#AD8253]',
    ARCHIVED: 'bg-gray-700/50 text-gray-500',
}

const budgetLabels: Record<string, string> = {
    UNDER_2K: 'Under $2K',
    BETWEEN_2K_5K: '$2K - $5K',
    BETWEEN_5K_10K: '$5K - $10K',
    BETWEEN_10K_50K: '$10K - $50K',
    ABOVE_50K: '$50K+',
}

const goalLabels: Record<string, string> = {
    SCALE_REVENUE: 'Scale Revenue',
    BRAND_AWARENESS: 'Brand Awareness',
    FIX_ROI: 'Fix ROI',
    FULL_DIGITAL_TRANSFORMATION: 'Digital Transformation',
}

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([])
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState<'all' | 'qualified' | 'unqualified'>('all')
    const [statusFilter, setStatusFilter] = useState<string>('')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedLead, setSelectedLead] = useState<Lead | null>(null)

    useEffect(() => {
        fetchLeads()
    }, [filter, statusFilter])

    const fetchLeads = async () => {
        setIsLoading(true)
        try {
            const params = new URLSearchParams()
            if (filter === 'qualified') params.set('qualified', 'true')
            if (filter === 'unqualified') params.set('qualified', 'false')
            if (statusFilter) params.set('status', statusFilter)

            const response = await fetch(`/api/leads?${params.toString()}`)
            const data = await response.json()
            setLeads(data.leads || [])
            setTotal(data.total || 0)
        } catch (error) {
            console.error('Failed to fetch leads:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const filteredLeads = leads.filter(lead => {
        if (!searchQuery) return true
        const query = searchQuery.toLowerCase()
        return (
            lead.name.toLowerCase().includes(query) ||
            lead.email.toLowerCase().includes(query) ||
            (lead.company?.toLowerCase().includes(query) ?? false)
        )
    })

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    return (
        <div className="space-y-6 pt-12 lg:pt-0">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Users className="w-7 h-7 text-[#AD8253]" />
                        Leads
                    </h1>
                    <p className="text-gray-400 mt-1">
                        {total} total leads • {leads.filter(l => l.isQualified).length} qualified
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or company..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#272727] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#AD8253] focus:outline-none"
                    />
                </div>

                <div className="flex gap-2">
                    <div className="relative">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as typeof filter)}
                            className="appearance-none px-4 py-2.5 pr-10 bg-[#272727] border border-white/10 rounded-lg text-white focus:border-[#AD8253] focus:outline-none cursor-pointer"
                        >
                            <option value="all">All Leads</option>
                            <option value="qualified">Qualified</option>
                            <option value="unqualified">Not Qualified</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="appearance-none px-4 py-2.5 pr-10 bg-[#272727] border border-white/10 rounded-lg text-white focus:border-[#AD8253] focus:outline-none cursor-pointer"
                        >
                            <option value="">All Statuses</option>
                            <option value="NEW">New</option>
                            <option value="QUALIFIED">Qualified</option>
                            <option value="MEETING_SCHEDULED">Meeting Scheduled</option>
                            <option value="CONTACTED">Contacted</option>
                            <option value="CONVERTED">Converted</option>
                            <option value="ARCHIVED">Archived</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Leads Table */}
            <div className="bg-[#272727] rounded-xl border border-white/10 overflow-hidden">
                {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
                    </div>
                ) : filteredLeads.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                        <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No leads found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Lead</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Budget</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Goal</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Status</th>
                                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Created</th>
                                    <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredLeads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${lead.isQualified ? 'bg-[#AD8253]' : 'bg-gray-600'
                                                    }`}>
                                                    {lead.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-white font-medium">{lead.name}</span>
                                                        {lead.isQualified && (
                                                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                                                        )}
                                                    </div>
                                                    <div className="text-sm text-gray-400">{lead.email}</div>
                                                    {lead.company && (
                                                        <div className="text-xs text-gray-500">{lead.company}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-sm font-medium ${lead.isQualified ? 'text-[#AD8253]' : 'text-gray-400'
                                                }`}>
                                                {budgetLabels[lead.budgetTier] || lead.budgetTier}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-300">
                                                {goalLabels[lead.growthGoal] || lead.growthGoal}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[lead.status] || 'bg-gray-500/20 text-gray-400'}`}>
                                                {lead.status.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-400">
                                                {formatDate(lead.createdAt)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => setSelectedLead(lead)}
                                                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Lead Detail Modal */}
            {selectedLead && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#272727] rounded-2xl border border-[#AD8253]/30 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-lg ${selectedLead.isQualified ? 'bg-[#AD8253]' : 'bg-gray-600'
                                    }`}>
                                    {selectedLead.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white">{selectedLead.name}</h2>
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[selectedLead.status]}`}>
                                        {selectedLead.status.replace('_', ' ')}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-xl">
                                    <Mail className="w-5 h-5 text-[#AD8253]" />
                                    <div>
                                        <div className="text-xs text-gray-500">Email</div>
                                        <a href={`mailto:${selectedLead.email}`} className="text-white hover:text-[#AD8253]">
                                            {selectedLead.email}
                                        </a>
                                    </div>
                                </div>
                                {selectedLead.phone && (
                                    <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-xl">
                                        <Calendar className="w-5 h-5 text-[#AD8253]" />
                                        <div>
                                            <div className="text-xs text-gray-500">Phone</div>
                                            <span className="text-white">{selectedLead.phone}</span>
                                        </div>
                                    </div>
                                )}
                                {selectedLead.company && (
                                    <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-xl">
                                        <Building2 className="w-5 h-5 text-[#AD8253]" />
                                        <div>
                                            <div className="text-xs text-gray-500">Company</div>
                                            <span className="text-white">{selectedLead.company}</span>
                                        </div>
                                    </div>
                                )}
                                {selectedLead.website && (
                                    <div className="flex items-center gap-3 p-4 bg-[#1a1a1a] rounded-xl">
                                        <Globe className="w-5 h-5 text-[#AD8253]" />
                                        <div>
                                            <div className="text-xs text-gray-500">Website</div>
                                            <a href={selectedLead.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#AD8253]">
                                                {selectedLead.website}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Qualification Details */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-[#1a1a1a] rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <TrendingUp className="w-4 h-4 text-[#AD8253]" />
                                        <span className="text-xs text-gray-500">Growth Goal</span>
                                    </div>
                                    <span className="text-white font-medium">
                                        {goalLabels[selectedLead.growthGoal] || selectedLead.growthGoal}
                                    </span>
                                </div>
                                <div className="p-4 bg-[#1a1a1a] rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <DollarSign className="w-4 h-4 text-[#AD8253]" />
                                        <span className="text-xs text-gray-500">Budget</span>
                                    </div>
                                    <span className={`font-medium ${selectedLead.isQualified ? 'text-[#AD8253]' : 'text-gray-400'}`}>
                                        {budgetLabels[selectedLead.budgetTier] || selectedLead.budgetTier}
                                    </span>
                                </div>
                            </div>

                            {/* Meetings */}
                            {selectedLead.meetings.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-medium text-gray-400 mb-3">Meetings</h3>
                                    <div className="space-y-2">
                                        {selectedLead.meetings.map((meeting) => (
                                            <Link
                                                key={meeting.id}
                                                href={`/admin/meetings`}
                                                className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg hover:border-[#AD8253] border border-transparent transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Calendar className="w-4 h-4 text-[#AD8253]" />
                                                    <span className="text-white">
                                                        {new Date(meeting.startTime).toLocaleDateString('en-US', {
                                                            weekday: 'short',
                                                            month: 'short',
                                                            day: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                        })}
                                                    </span>
                                                </div>
                                                <span className={`px-2 py-0.5 rounded-full text-xs ${statusColors[meeting.status] || 'bg-gray-500/20 text-gray-400'}`}>
                                                    {meeting.status}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Meta Info */}
                            <div className="flex items-center gap-6 text-sm text-gray-500 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Created {formatDate(selectedLead.createdAt)}
                                </div>
                                {selectedLead.source && (
                                    <div>
                                        Source: {selectedLead.source}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
