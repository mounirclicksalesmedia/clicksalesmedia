'use client'

import { useState, useEffect } from 'react'
import {
    Clock,
    Save,
    Plus,
    X,
    Calendar,
    Loader2,
    CheckCircle2,
    AlertCircle
} from 'lucide-react'

interface AvailabilityConfig {
    id: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isActive: boolean
    slotDuration: number
    bufferTime: number
}

interface BlockedDate {
    id: string
    date: string
    reason: string | null
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const defaultSchedule = [
    { dayOfWeek: 0, startTime: '09:00', endTime: '17:00', isActive: false },
    { dayOfWeek: 1, startTime: '09:00', endTime: '17:00', isActive: true },
    { dayOfWeek: 2, startTime: '09:00', endTime: '17:00', isActive: true },
    { dayOfWeek: 3, startTime: '09:00', endTime: '17:00', isActive: true },
    { dayOfWeek: 4, startTime: '09:00', endTime: '17:00', isActive: true },
    { dayOfWeek: 5, startTime: '09:00', endTime: '17:00', isActive: true },
    { dayOfWeek: 6, startTime: '09:00', endTime: '17:00', isActive: false },
]

export default function AvailabilityPage() {
    const [schedule, setSchedule] = useState(defaultSchedule)
    const [blockedDates, setBlockedDates] = useState<BlockedDate[]>([])
    const [slotDuration, setSlotDuration] = useState(30)
    const [bufferTime, setBufferTime] = useState(15)
    const [isLoading, setIsLoading] = useState(true)
    const [isSaving, setIsSaving] = useState(false)
    const [saveSuccess, setSaveSuccess] = useState(false)
    const [newBlockedDate, setNewBlockedDate] = useState('')
    const [newBlockedReason, setNewBlockedReason] = useState('')

    useEffect(() => {
        fetchAvailability()
    }, [])

    const fetchAvailability = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/admin/availability')
            if (response.ok) {
                const data = await response.json()
                if (data.schedule && data.schedule.length > 0) {
                    setSchedule(data.schedule)
                }
                if (data.blockedDates) {
                    setBlockedDates(data.blockedDates)
                }
                if (data.slotDuration) {
                    setSlotDuration(data.slotDuration)
                }
                if (data.bufferTime) {
                    setBufferTime(data.bufferTime)
                }
            }
        } catch (error) {
            console.error('Failed to fetch availability:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleDayToggle = (dayOfWeek: number) => {
        setSchedule(prev =>
            prev.map(day =>
                day.dayOfWeek === dayOfWeek
                    ? { ...day, isActive: !day.isActive }
                    : day
            )
        )
    }

    const handleTimeChange = (dayOfWeek: number, field: 'startTime' | 'endTime', value: string) => {
        setSchedule(prev =>
            prev.map(day =>
                day.dayOfWeek === dayOfWeek
                    ? { ...day, [field]: value }
                    : day
            )
        )
    }

    const handleAddBlockedDate = async () => {
        if (!newBlockedDate) return

        try {
            const response = await fetch('/api/admin/availability', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'addBlockedDate',
                    date: newBlockedDate,
                    reason: newBlockedReason || null,
                }),
            })

            if (response.ok) {
                const data = await response.json()
                setBlockedDates(prev => [...prev, data.blockedDate])
                setNewBlockedDate('')
                setNewBlockedReason('')
            }
        } catch (error) {
            console.error('Failed to add blocked date:', error)
        }
    }

    const handleRemoveBlockedDate = async (id: string) => {
        try {
            const response = await fetch('/api/admin/availability', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ blockedDateId: id }),
            })

            if (response.ok) {
                setBlockedDates(prev => prev.filter(d => d.id !== id))
            }
        } catch (error) {
            console.error('Failed to remove blocked date:', error)
        }
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            const response = await fetch('/api/admin/availability', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'updateSchedule',
                    schedule,
                    slotDuration,
                    bufferTime,
                }),
            })

            if (response.ok) {
                setSaveSuccess(true)
                setTimeout(() => setSaveSuccess(false), 3000)
            }
        } catch (error) {
            console.error('Failed to save availability:', error)
        } finally {
            setIsSaving(false)
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        })
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-24">
                <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
            </div>
        )
    }

    return (
        <div className="space-y-6 pt-12 lg:pt-0 max-w-4xl">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Clock className="w-7 h-7 text-[#AD8253]" />
                        Availability Settings
                    </h1>
                    <p className="text-gray-400 mt-1">
                        Configure your booking availability
                    </p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-4 py-2 bg-[#AD8253] text-white rounded-lg font-medium hover:bg-[#8a6842] transition-colors disabled:opacity-50"
                >
                    {isSaving ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Saving...
                        </>
                    ) : saveSuccess ? (
                        <>
                            <CheckCircle2 className="w-4 h-4" />
                            Saved!
                        </>
                    ) : (
                        <>
                            <Save className="w-4 h-4" />
                            Save Changes
                        </>
                    )}
                </button>
            </div>

            {/* Weekly Schedule */}
            <div className="bg-[#272727] rounded-xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Weekly Schedule</h2>
                <div className="space-y-3">
                    {schedule.map((day) => (
                        <div
                            key={day.dayOfWeek}
                            className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${day.isActive
                                    ? 'bg-[#1a1a1a] border-[#AD8253]/30'
                                    : 'bg-[#1a1a1a]/50 border-white/5'
                                }`}
                        >
                            {/* Toggle */}
                            <button
                                onClick={() => handleDayToggle(day.dayOfWeek)}
                                className={`w-12 h-6 rounded-full transition-colors relative ${day.isActive ? 'bg-[#AD8253]' : 'bg-gray-600'
                                    }`}
                            >
                                <span
                                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${day.isActive ? 'left-7' : 'left-1'
                                        }`}
                                />
                            </button>

                            {/* Day Name */}
                            <span className={`w-28 font-medium ${day.isActive ? 'text-white' : 'text-gray-500'}`}>
                                {dayNames[day.dayOfWeek]}
                            </span>

                            {/* Time Inputs */}
                            {day.isActive ? (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="time"
                                        value={day.startTime}
                                        onChange={(e) => handleTimeChange(day.dayOfWeek, 'startTime', e.target.value)}
                                        className="px-3 py-1.5 bg-[#272727] border border-white/10 rounded-lg text-white focus:border-[#AD8253] focus:outline-none"
                                    />
                                    <span className="text-gray-500">to</span>
                                    <input
                                        type="time"
                                        value={day.endTime}
                                        onChange={(e) => handleTimeChange(day.dayOfWeek, 'endTime', e.target.value)}
                                        className="px-3 py-1.5 bg-[#272727] border border-white/10 rounded-lg text-white focus:border-[#AD8253] focus:outline-none"
                                    />
                                </div>
                            ) : (
                                <span className="text-gray-500 text-sm">Unavailable</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Slot Settings */}
            <div className="bg-[#272727] rounded-xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Meeting Settings</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Slot Duration (minutes)
                        </label>
                        <select
                            value={slotDuration}
                            onChange={(e) => setSlotDuration(Number(e.target.value))}
                            className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:border-[#AD8253] focus:outline-none"
                        >
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                            <option value={45}>45 minutes</option>
                            <option value={60}>60 minutes</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Buffer Time Between Meetings (minutes)
                        </label>
                        <select
                            value={bufferTime}
                            onChange={(e) => setBufferTime(Number(e.target.value))}
                            className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:border-[#AD8253] focus:outline-none"
                        >
                            <option value={0}>No buffer</option>
                            <option value={5}>5 minutes</option>
                            <option value={10}>10 minutes</option>
                            <option value={15}>15 minutes</option>
                            <option value={30}>30 minutes</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Blocked Dates */}
            <div className="bg-[#272727] rounded-xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#AD8253]" />
                    Blocked Dates
                </h2>
                <p className="text-sm text-gray-400 mb-4">
                    Block specific dates when you&apos;re not available (holidays, vacations, etc.)
                </p>

                {/* Add New Blocked Date */}
                <div className="flex flex-col md:flex-row gap-3 mb-6">
                    <input
                        type="date"
                        value={newBlockedDate}
                        onChange={(e) => setNewBlockedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="px-4 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:border-[#AD8253] focus:outline-none"
                    />
                    <input
                        type="text"
                        value={newBlockedReason}
                        onChange={(e) => setNewBlockedReason(e.target.value)}
                        placeholder="Reason (optional)"
                        className="flex-1 px-4 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#AD8253] focus:outline-none"
                    />
                    <button
                        onClick={handleAddBlockedDate}
                        disabled={!newBlockedDate}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#AD8253] text-white rounded-lg font-medium hover:bg-[#8a6842] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Plus className="w-4 h-4" />
                        Add Date
                    </button>
                </div>

                {/* Blocked Dates List */}
                {blockedDates.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>No blocked dates</p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {blockedDates.map((blocked) => (
                            <div
                                key={blocked.id}
                                className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-red-400" />
                                    <span className="text-white">{formatDate(blocked.date)}</span>
                                    {blocked.reason && (
                                        <span className="text-sm text-gray-500">— {blocked.reason}</span>
                                    )}
                                </div>
                                <button
                                    onClick={() => handleRemoveBlockedDate(blocked.id)}
                                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
