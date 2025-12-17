'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Loader2, Clock } from 'lucide-react'
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isBefore, startOfDay } from 'date-fns'

interface TimeSlot {
    startTime: string
    endTime: string
    formattedTime: string
    available: boolean
}

interface DayAvailability {
    date: string
    formattedDate: string
    slots: TimeSlot[]
}

interface CalendarPickerProps {
    onSelectSlot: (startTime: string, endTime: string) => void
    isLoading?: boolean
}

export function CalendarPicker({ onSelectSlot, isLoading }: CalendarPickerProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [availability, setAvailability] = useState<DayAvailability[]>([])
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
    const [isLoadingSlots, setIsLoadingSlots] = useState(true)
    const [timezone, setTimezone] = useState('Europe/Paris')

    useEffect(() => {
        // Get user's timezone
        setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    }, [])

    useEffect(() => {
        const fetchAvailability = async () => {
            setIsLoadingSlots(true)
            try {
                const response = await fetch(`/api/availability?timezone=${timezone}&days=30`)
                const data = await response.json()
                setAvailability(data.availability || [])
            } catch (error) {
                console.error('Failed to fetch availability:', error)
            } finally {
                setIsLoadingSlots(false)
            }
        }

        fetchAvailability()
    }, [timezone])

    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(currentMonth)
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd })

    // Get day names for header
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    // Check if a date has availability
    const hasAvailability = (date: Date) => {
        const dateString = format(date, 'yyyy-MM-dd')
        const dayAvailability = availability.find(a => a.date === dateString)
        return dayAvailability && dayAvailability.slots.some(s => s.available)
    }

    // Get available slots for selected date
    const getSelectedDateSlots = () => {
        if (!selectedDate) return []
        const dayAvailability = availability.find(a => a.date === selectedDate)
        return dayAvailability?.slots.filter(s => s.available) || []
    }

    const handleDateClick = (date: Date) => {
        if (!hasAvailability(date)) return
        setSelectedDate(format(date, 'yyyy-MM-dd'))
        setSelectedSlot(null)
    }

    const handleSlotClick = (slot: TimeSlot) => {
        setSelectedSlot(slot)
    }

    const handleConfirmBooking = () => {
        if (selectedSlot) {
            onSelectSlot(selectedSlot.startTime, selectedSlot.endTime)
        }
    }

    const goToPreviousMonth = () => {
        const newMonth = addMonths(currentMonth, -1)
        if (!isBefore(endOfMonth(newMonth), startOfDay(new Date()))) {
            setCurrentMonth(newMonth)
        }
    }

    const goToNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1))
    }

    const selectedDateInfo = selectedDate
        ? availability.find(a => a.date === selectedDate)
        : null

    const slots = getSelectedDateSlots()

    return (
        <div className="space-y-4">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={goToPreviousMonth}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSameMonth(currentMonth, new Date())}
                >
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <h3 className="text-white font-semibold">
                    {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <button
                    onClick={goToNextMonth}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day) => (
                    <div
                        key={day}
                        className="text-center text-xs font-medium text-gray-500 py-2"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            {isLoadingSlots ? (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-[#AD8253] animate-spin" />
                </div>
            ) : (
                <div className="grid grid-cols-7 gap-1">
                    {/* Empty cells for days before month start */}
                    {Array.from({ length: monthStart.getDay() }).map((_, i) => (
                        <div key={`empty-${i}`} className="aspect-square" />
                    ))}

                    {/* Days */}
                    {days.map((day) => {
                        const hasSlots = hasAvailability(day)
                        const isSelected = selectedDate === format(day, 'yyyy-MM-dd')
                        const isPast = isBefore(day, startOfDay(new Date()))
                        const isCurrentMonth = isSameMonth(day, currentMonth)

                        return (
                            <button
                                key={day.toISOString()}
                                onClick={() => handleDateClick(day)}
                                disabled={!hasSlots || isPast || !isCurrentMonth}
                                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all relative ${isSelected
                                        ? 'bg-[#AD8253] text-white'
                                        : hasSlots && !isPast
                                            ? 'bg-[#1a1a1a] text-white hover:bg-[#AD8253]/30 cursor-pointer'
                                            : 'text-gray-600 cursor-not-allowed'
                                    } ${isToday(day) ? 'ring-2 ring-[#AD8253]/50' : ''}`}
                            >
                                {format(day, 'd')}
                                {hasSlots && !isPast && !isSelected && (
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#AD8253] rounded-full" />
                                )}
                            </button>
                        )
                    })}
                </div>
            )}

            {/* Time Slots */}
            {selectedDate && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-white/10"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-[#AD8253]" />
                        <span className="text-sm text-gray-400">
                            {selectedDateInfo?.formattedDate || selectedDate} • {timezone}
                        </span>
                    </div>

                    {slots.length === 0 ? (
                        <p className="text-gray-500 text-sm text-center py-4">
                            No available slots for this day
                        </p>
                    ) : (
                        <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                            {slots.map((slot) => {
                                const isSlotSelected = selectedSlot?.startTime === slot.startTime

                                return (
                                    <button
                                        key={slot.startTime}
                                        onClick={() => handleSlotClick(slot)}
                                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${isSlotSelected
                                                ? 'bg-[#AD8253] text-white'
                                                : 'bg-[#1a1a1a] border border-white/10 text-white hover:border-[#AD8253]'
                                            }`}
                                    >
                                        {slot.formattedTime}
                                    </button>
                                )
                            })}
                        </div>
                    )}

                    {/* Book Button */}
                    {selectedSlot && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4"
                        >
                            <button
                                onClick={handleConfirmBooking}
                                disabled={isLoading}
                                className="w-full py-3 px-6 bg-gradient-to-r from-[#AD8253] to-[#c3a177] rounded-xl text-[#272727] font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Booking...
                                    </>
                                ) : (
                                    <>
                                        Book {selectedSlot.formattedTime}
                                    </>
                                )}
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            )}

            {/* Timezone Note */}
            <p className="text-xs text-gray-500 text-center mt-4">
                Times shown in {timezone}
            </p>
        </div>
    )
}
