'use client'

import { useState, useEffect } from 'react'
import {
    Calendar,
    Clock,
    Video,
    ExternalLink,
    ChevronDown,
    Loader2,
    User,
    Building2,
    Mail,
    X,
    CheckCircle2,
    XCircle,
    AlertCircle
} from 'lucide-react'

interface Meeting {
    id: string
    leadId: string
    title: string
    startTime: string
    endTime: string
    timezone: string
    googleEventId: string | null
    googleMeetLink: string | null
    status: string
    notes: string | null
    createdAt: string
    lead: {
        id: string
        name: string
        email: string
        company: string | null
        website: string | null
        budgetTier: string
        growthGoal: string
    }
}

const statusColors: Record<string, string> = {
    SCHEDULED: 'bg-blue-500/20 text-blue-400',
    COMPLETED: 'bg-green-500/20 text-green-400',
    CANCELLED: 'bg-red-500/20 text-red-400',
    RESCHEDULED: 'bg-yellow-500/20 text-yellow-400',
    NO_SHOW: 'bg-gray-500/20 text-gray-400',
}

const statusIcons: Record<string, React.ReactNode> = {
    SCHEDULED: <Clock className="w-4 h-4" />,
    COMPLETED: <CheckCircle2 className="w-4 h-4" />,
    CANCELLED: <XCircle className="w-4 h-4" />,
    RESCHEDULED: <AlertCircle className="w-4 h-4" />,
    NO_SHOW: <XCircle className="w-4 h-4" />,
}

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState<Meeting[]>([])
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState<'upcoming' | 'past' | 'all'>('upcoming')
    const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null)
    const [isUpdating, setIsUpdating] = useState(false)

    useEffect(() => {
        fetchMeetings()
    }, [filter])

    const fetchMeetings = async () => {
        setIsLoading(true)
        try {
            const params = new URLSearchParams()
            if (filter === 'upcoming') params.set('upcoming', 'true')

            const response = await fetch(`/api/meetings?${params.toString()}`)
            const data = await response.json()
            setMeetings(data.meetings || [])
            setTotal(data.total || 0)
        } catch (error) {
            console.error('Failed to fetch meetings:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const cancelMeeting = async (meetingId: string) => {
        if (!confirm('Are you sure you want to cancel this meeting?')) return

        setIsUpdating(true)
        try {
            const response = await fetch(`/api/meetings?id=${meetingId}`, {
                method: 'DELETE',
            })

            if (response.ok) {
                fetchMeetings()
                setSelectedMeeting(null)
            }
        } catch (error) {
            console.error('Failed to cancel meeting:', error)
        } finally {
            setIsUpdating(false)
        }
    }

    const formatDateTime = (dateString: string, timezone: string) => {
        const date = new Date(dateString)
        return {
            date: date.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }),
            time: date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: timezone,
            }),
        }
    }

    const isUpcoming = (dateString: string) => {
        return new Date(dateString) > new Date()
    }

    return (
        <div className="space-y-6 pt-12 lg:pt-0">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Calendar className="w-7 h-7 text-[#AD8253]" />
                        Meetings
                    </h1>
                    <p className="text-gray-400 mt-1">
                        {total} total meetings • {meetings.filter(m => m.status === 'SCHEDULED' && isUpcoming(m.startTime)).length} upcoming
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2">
                <div className="relative">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as typeof filter)}
                        className="appearance-none px-4 py-2.5 pr-10 bg-[#272727] border border-white/10 rounded-lg text-white focus:border-[#AD8253] focus:outline-none cursor-pointer"
                    >
                        <option value="upcoming">Upcoming</option>
                        <option value="past">Past</option>
                        <option value="all">All Meetings</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
            </div>

            {/* Meetings Grid */}
            {isLoading ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
                </div>
            ) : meetings.length === 0 ? (
                <div className="bg-[#272727] rounded-xl border border-white/10 text-center py-12 text-gray-400">
                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No meetings found</p>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {meetings.map((meeting) => {
                        const { date, time } = formatDateTime(meeting.startTime, meeting.timezone)
                        const upcoming = isUpcoming(meeting.startTime)

                        return (
                            <div
                                key={meeting.id}
                                onClick={() => setSelectedMeeting(meeting)}
                                className={`bg-[#272727] rounded-xl border border-white/10 p-5 cursor-pointer hover:border-[#AD8253] transition-colors ${!upcoming && meeting.status === 'SCHEDULED' ? 'opacity-60' : ''
                                    }`}
                            >
                                {/* Status Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[meeting.status]}`}>
                                        {statusIcons[meeting.status]}
                                        {meeting.status}
                                    </span>
                                    {meeting.googleMeetLink && (
                                        <a
                                            href={meeting.googleMeetLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2 bg-[#1a1a1a] rounded-lg hover:bg-[#AD8253]/20 transition-colors"
                                        >
                                            <Video className="w-4 h-4 text-[#AD8253]" />
                                        </a>
                                    )}
                                </div>

                                {/* Date & Time */}
                                <div className="mb-4">
                                    <div className="text-[#AD8253] font-semibold">{date}</div>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                                        <Clock className="w-4 h-4" />
                                        {time} • 30 min
                                    </div>
                                </div>

                                {/* Lead Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-[#AD8253] flex items-center justify-center text-white font-medium">
                                        {meeting.lead.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">{meeting.lead.name}</div>
                                        {meeting.lead.company && (
                                            <div className="text-sm text-gray-400">{meeting.lead.company}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Meeting Detail Modal */}
            {selectedMeeting && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#272727] rounded-2xl border border-[#AD8253]/30 w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-xl font-bold text-white">Meeting Details</h2>
                            <button
                                onClick={() => setSelectedMeeting(null)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Status */}
                            <div className="flex items-center gap-3">
                                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${statusColors[selectedMeeting.status]}`}>
                                    {statusIcons[selectedMeeting.status]}
                                    {selectedMeeting.status}
                                </span>
                            </div>

                            {/* Date & Time */}
                            <div className="p-4 bg-[#1a1a1a] rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-5 h-5 text-[#AD8253]" />
                                    <span className="text-white font-medium">
                                        {formatDateTime(selectedMeeting.startTime, selectedMeeting.timezone).date}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Clock className="w-5 h-5" />
                                    <span>
                                        {formatDateTime(selectedMeeting.startTime, selectedMeeting.timezone).time} -
                                        {formatDateTime(selectedMeeting.endTime, selectedMeeting.timezone).time}
                                    </span>
                                </div>
                                <div className="text-xs text-gray-500 mt-2 ml-8">
                                    {selectedMeeting.timezone}
                                </div>
                            </div>

                            {/* Google Meet Link */}
                            {selectedMeeting.googleMeetLink && (
                                <a
                                    href={selectedMeeting.googleMeetLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#AD8253] to-[#c3a177] rounded-xl text-[#272727] font-semibold hover:opacity-90 transition-opacity"
                                >
                                    <Video className="w-5 h-5" />
                                    Join Google Meet
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}

                            {/* Lead Info */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-400 mb-3">Attendee</h3>
                                <div className="p-4 bg-[#1a1a1a] rounded-xl space-y-3">
                                    <div className="flex items-center gap-3">
                                        <User className="w-4 h-4 text-[#AD8253]" />
                                        <span className="text-white">{selectedMeeting.lead.name}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        <a href={`mailto:${selectedMeeting.lead.email}`} className="text-gray-300 hover:text-[#AD8253]">
                                            {selectedMeeting.lead.email}
                                        </a>
                                    </div>
                                    {selectedMeeting.lead.company && (
                                        <div className="flex items-center gap-3">
                                            <Building2 className="w-4 h-4 text-gray-400" />
                                            <span className="text-gray-300">{selectedMeeting.lead.company}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            {selectedMeeting.status === 'SCHEDULED' && isUpcoming(selectedMeeting.startTime) && (
                                <div className="pt-4 border-t border-white/10">
                                    <button
                                        onClick={() => cancelMeeting(selectedMeeting.id)}
                                        disabled={isUpdating}
                                        className="w-full py-3 px-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 font-medium hover:bg-red-500/20 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        {isUpdating ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Cancelling...
                                            </>
                                        ) : (
                                            <>
                                                <XCircle className="w-4 h-4" />
                                                Cancel Meeting
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
