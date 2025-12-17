'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Sparkles } from 'lucide-react'
import { QualificationModal } from './QualificationModal'

interface BookingButtonProps {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    text?: string
    icon?: boolean
    className?: string
    source?: string
}

export function BookingButton({
    variant = 'primary',
    size = 'md',
    text = 'Book a Strategy Audit',
    icon = true,
    className = '',
    source,
}: BookingButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    const variantClasses = {
        primary:
            'bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#272727] hover:shadow-[0_0_30px_rgba(173,130,83,0.4)]',
        secondary:
            'bg-[#272727] border-2 border-[#AD8253] text-[#AD8253] hover:bg-[#AD8253] hover:text-[#272727]',
        outline:
            'bg-transparent border border-white/20 text-white hover:border-[#AD8253] hover:text-[#AD8253]',
    }

    return (
        <>
            <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
          inline-flex items-center justify-center gap-2 font-semibold rounded-full
          transition-all duration-300 cursor-pointer
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
            >
                {icon && variant === 'primary' && <Sparkles className="w-4 h-4" />}
                {icon && variant !== 'primary' && <Calendar className="w-4 h-4" />}
                {text}
                <ArrowRight className="w-4 h-4" />
            </motion.button>

            <QualificationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source={source}
            />
        </>
    )
}

// Alternative CTA variations
export function CheckAvailabilityButton(props: Omit<BookingButtonProps, 'text'>) {
    return <BookingButton {...props} text="Check Availability" />
}

export function ScheduleCallButton(props: Omit<BookingButtonProps, 'text'>) {
    return <BookingButton {...props} text="Schedule Your Call" />
}

export function GetStrategySessionButton(props: Omit<BookingButtonProps, 'text'>) {
    return <BookingButton {...props} text="Get Your Strategy Session" />
}
