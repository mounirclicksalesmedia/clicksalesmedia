'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, CheckCircle2, Calendar, Loader2, Video, ExternalLink } from 'lucide-react'
import { CalendarPicker } from './CalendarPicker'
import { trackFormStep, trackFormSubmit, trackLeadQualified, trackMeetingBooked } from '@/lib/gtag'

interface QualificationModalProps {
    isOpen: boolean
    onClose: () => void
    source?: string
}

type Step = 'contact' | 'qualify' | 'calendar' | 'thankyou' | 'confirmation'

interface FormData {
    name: string
    email: string
    phone: string
    company: string
    website: string
    growthGoal: string
    budgetTier: string
}

const growthGoals = [
    { value: 'GROWTH_ENGINEERING', label: 'Growth Engineering Systems', description: 'Revenue growth automation & systems' },
    { value: 'LEAD_GENERATION', label: 'Lead Generation', description: 'Qualified lead acquisition systems' },
    { value: 'AI_AGENT_SYSTEMS', label: 'AI Agent Systems', description: 'AI-powered automation & chatbots' },
    { value: 'PROGRAMMATIC_SEO', label: 'Programmatic SEO', description: 'Scalable SEO & content systems' },
    { value: 'COLD_EMAIL_SYSTEM', label: 'Cold Email System', description: 'Outbound email automation' },
    { value: 'WHATSAPP_AGENTS', label: 'WhatsApp Agents System', description: 'WhatsApp automation & bots' },
    { value: 'PERFORMANCE_MARKETING', label: 'Performance Marketing', description: 'ROI-focused paid campaigns' },
    { value: 'ADS_ENGINEERING', label: 'Ads Engineering & Systems', description: 'Advanced ad tech & optimization' },
]

const budgetTiers = [
    { value: 'UNDER_2K', label: 'Under $2,000', qualified: false },
    { value: 'BETWEEN_2K_5K', label: '$2,000 - $5,000', qualified: true },
    { value: 'BETWEEN_5K_10K', label: '$5,000 - $10,000', qualified: true },
    { value: 'BETWEEN_10K_50K', label: '$10,000 - $50,000', qualified: true },
    { value: 'ABOVE_50K', label: '$50,000+', qualified: true },
]

export function QualificationModal({ isOpen, onClose, source }: QualificationModalProps) {
    const [step, setStep] = useState<Step>('contact')
    const [isLoading, setIsLoading] = useState(false)
    const [leadId, setLeadId] = useState<string | null>(null)
    const [isQualified, setIsQualified] = useState(false)
    const [meetingDetails, setMeetingDetails] = useState<{
        googleMeetLink?: string
        calendarLink?: string
        formattedDate?: string
        formattedTime?: string
    } | null>(null)
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        growthGoal: '',
        budgetTier: '',
    })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            // Store original body overflow
            const originalOverflow = document.body.style.overflow
            const originalPaddingRight = document.body.style.paddingRight

            // Calculate scrollbar width to prevent layout shift
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollbarWidth}px`

            return () => {
                document.body.style.overflow = originalOverflow
                document.body.style.paddingRight = originalPaddingRight
            }
        }
    }, [isOpen])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectGoal = (value: string) => {
        setFormData((prev) => ({ ...prev, growthGoal: value }))
    }

    const handleSelectBudget = (value: string) => {
        setFormData((prev) => ({ ...prev, budgetTier: value }))
    }

    const handleSubmitQualification = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: source || window.location.pathname,
                }),
            })

            const data = await response.json()

            if (data.success) {
                setLeadId(data.leadId)
                setIsQualified(data.qualified)

                // Track form submission and lead qualification
                trackFormSubmit('QualificationModal')
                trackLeadQualified(formData.budgetTier, formData.growthGoal)

                if (data.qualified) {
                    setStep('calendar')
                } else {
                    setStep('thankyou')
                }
            }
        } catch (error) {
            console.error('Error submitting qualification:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleBookMeeting = async (startTime: string, endTime: string) => {
        if (!leadId) return

        setIsLoading(true)
        try {
            const response = await fetch('/api/meetings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    leadId,
                    startTime,
                    endTime,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                }),
            })

            const data = await response.json()

            if (data.success) {
                setMeetingDetails({
                    googleMeetLink: data.googleMeetLink,
                    calendarLink: data.calendarLink,
                    formattedDate: data.formattedDate,
                    formattedTime: data.formattedTime,
                })
                // Track meeting booked conversion
                trackMeetingBooked(source)
                setStep('confirmation')
            }
        } catch (error) {
            console.error('Error booking meeting:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleClose = () => {
        setStep('contact')
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            growthGoal: '',
            budgetTier: '',
        })
        setLeadId(null)
        setIsQualified(false)
        setMeetingDetails(null)
        onClose()
    }

    const canProceedContact = formData.name && formData.email
    const canProceedQualify = formData.growthGoal && formData.budgetTier

    const stepVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
    }

    if (!mounted) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99999]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[100000] flex items-center justify-center p-4 min-h-screen"
                    >
                        <div
                            className="bg-[#272727] rounded-2xl border border-[#AD8253]/30 w-full max-w-lg max-h-[90vh] overflow-hidden shadow-2xl flex flex-col relative"
                            onClick={(e) => e.stopPropagation()}
                            onWheel={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <div>
                                    <h2 className="text-xl font-bold text-white">
                                        {step === 'contact' && 'Let\'s Get Started'}
                                        {step === 'qualify' && 'Tell Us About Your Goals'}
                                        {step === 'calendar' && 'Choose Your Time'}
                                        {step === 'thankyou' && 'Thank You'}
                                        {step === 'confirmation' && 'You\'re All Set!'}
                                    </h2>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {step === 'contact' && 'Quick intro — takes 30 seconds'}
                                        {step === 'qualify' && 'Help us prepare the perfect session'}
                                        {step === 'calendar' && 'Select a time that works for you'}
                                        {step === 'thankyou' && 'We\'ll be in touch soon'}
                                        {step === 'confirmation' && 'Your strategy session is booked'}
                                    </p>
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-400" />
                                </button>
                            </div>

                            {/* Progress */}
                            {step !== 'thankyou' && step !== 'confirmation' && (
                                <div className="px-6 pt-4">
                                    <div className="flex gap-2">
                                        {['contact', 'qualify', 'calendar'].map((s, i) => (
                                            <div
                                                key={s}
                                                className={`h-1 flex-1 rounded-full transition-colors ${['contact', 'qualify', 'calendar'].indexOf(step) >= i
                                                    ? 'bg-[#AD8253]'
                                                    : 'bg-white/10'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            <div
                                className="p-6 overflow-y-auto max-h-[60vh] overscroll-contain"
                                onWheel={(e) => e.stopPropagation()}
                            >
                                <AnimatePresence mode="wait">
                                    {/* Step 1: Contact Info */}
                                    {step === 'contact' && (
                                        <motion.div
                                            key="contact"
                                            variants={stepVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            className="space-y-4"
                                        >
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Your Name <span className="text-[#AD8253]">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="John Smith"
                                                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#AD8253] focus:outline-none transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Email Address <span className="text-[#AD8253]">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="john@company.com"
                                                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#AD8253] focus:outline-none transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+1 234 567 890"
                                                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#AD8253] focus:outline-none transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder="Your Company"
                                                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#AD8253] focus:outline-none transition-colors"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Website URL
                                                </label>
                                                <input
                                                    type="url"
                                                    name="website"
                                                    value={formData.website}
                                                    onChange={handleInputChange}
                                                    placeholder="https://yourwebsite.com"
                                                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#AD8253] focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 2: Qualification */}
                                    {step === 'qualify' && (
                                        <motion.div
                                            key="qualify"
                                            variants={stepVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            className="space-y-6"
                                        >
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-3">
                                                    What is your primary growth goal?
                                                </label>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {growthGoals.map((goal) => (
                                                        <button
                                                            key={goal.value}
                                                            onClick={() => handleSelectGoal(goal.value)}
                                                            className={`p-4 rounded-xl border text-left transition-all ${formData.growthGoal === goal.value
                                                                ? 'bg-[#AD8253]/20 border-[#AD8253] text-white'
                                                                : 'bg-[#1a1a1a] border-white/10 text-gray-300 hover:border-white/30'
                                                                }`}
                                                        >
                                                            <div className="font-medium">{goal.label}</div>
                                                            <div className="text-sm text-gray-500 mt-1">{goal.description}</div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-3">
                                                    What is your monthly media budget?
                                                </label>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {budgetTiers.map((tier) => (
                                                        <button
                                                            key={tier.value}
                                                            onClick={() => handleSelectBudget(tier.value)}
                                                            className={`p-4 rounded-xl border text-left transition-all ${formData.budgetTier === tier.value
                                                                ? 'bg-[#AD8253]/20 border-[#AD8253] text-white'
                                                                : 'bg-[#1a1a1a] border-white/10 text-gray-300 hover:border-white/30'
                                                                }`}
                                                        >
                                                            <span className="font-medium">{tier.label}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 3a: Calendar (Qualified) */}
                                    {step === 'calendar' && (
                                        <motion.div
                                            key="calendar"
                                            variants={stepVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                        >
                                            <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                                                <div className="flex items-center gap-2 text-green-400">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                    <span className="font-medium">You qualify for a strategy session!</span>
                                                </div>
                                                <p className="text-sm text-gray-400 mt-1 ml-7">
                                                    Select a time below to book your VIP session.
                                                </p>
                                            </div>
                                            <CalendarPicker onSelectSlot={handleBookMeeting} isLoading={isLoading} />
                                        </motion.div>
                                    )}

                                    {/* Step 3b: Thank You (Not Qualified) */}
                                    {step === 'thankyou' && (
                                        <motion.div
                                            key="thankyou"
                                            variants={stepVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            className="text-center py-8"
                                        >
                                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#AD8253]/20 flex items-center justify-center">
                                                <CheckCircle2 className="w-8 h-8 text-[#AD8253]" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                Thank You for Your Interest!
                                            </h3>
                                            <p className="text-gray-400 mb-6">
                                                Due to high demand, our strategy sessions are currently at capacity for this tier.
                                                We&apos;ve saved your information and will be in touch as availability opens.
                                            </p>
                                            <div className="space-y-3">
                                                <a
                                                    href="/blog"
                                                    className="block w-full py-3 px-6 bg-[#1a1a1a] border border-white/10 rounded-xl text-white hover:border-[#AD8253] transition-colors"
                                                >
                                                    Explore Our Free Resources →
                                                </a>
                                                <a
                                                    href="/case-studies"
                                                    className="block w-full py-3 px-6 bg-[#1a1a1a] border border-white/10 rounded-xl text-white hover:border-[#AD8253] transition-colors"
                                                >
                                                    View Our Case Studies →
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Step 4: Confirmation */}
                                    {step === 'confirmation' && meetingDetails && (
                                        <motion.div
                                            key="confirmation"
                                            variants={stepVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            className="text-center py-4"
                                        >
                                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                                <CheckCircle2 className="w-8 h-8 text-green-400" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                Your Session is Booked!
                                            </h3>
                                            <p className="text-gray-400 mb-6">
                                                We&apos;ve sent a confirmation email with all the details.
                                            </p>

                                            {/* Meeting Details Card */}
                                            <div className="bg-[#1a1a1a] border border-[#AD8253]/30 rounded-xl p-5 mb-6 text-left">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 rounded-lg bg-[#AD8253]/20 flex items-center justify-center flex-shrink-0">
                                                        <Calendar className="w-6 h-6 text-[#AD8253]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-medium">Strategy Session</p>
                                                        <p className="text-[#AD8253] font-semibold mt-1">
                                                            {meetingDetails.formattedDate}
                                                        </p>
                                                        <p className="text-gray-400 text-sm">
                                                            {meetingDetails.formattedTime} • 30 minutes
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="space-y-3">
                                                {meetingDetails.googleMeetLink && (
                                                    <a
                                                        href={meetingDetails.googleMeetLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-[#AD8253] to-[#c3a177] rounded-xl text-[#272727] font-semibold hover:opacity-90 transition-opacity"
                                                    >
                                                        <Video className="w-5 h-5" />
                                                        Join Google Meet
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                                {meetingDetails.calendarLink && (
                                                    <a
                                                        href={meetingDetails.calendarLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-transparent border-2 border-[#AD8253] rounded-xl text-[#AD8253] font-semibold hover:bg-[#AD8253]/10 transition-colors"
                                                    >
                                                        <Calendar className="w-5 h-5" />
                                                        Add to Calendar
                                                    </a>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Footer */}
                            {(step === 'contact' || step === 'qualify') && (
                                <div className="p-6 border-t border-white/10 flex justify-between gap-4">
                                    {step !== 'contact' && (
                                        <button
                                            onClick={() => setStep('contact')}
                                            className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Back
                                        </button>
                                    )}
                                    <button
                                        onClick={() => {
                                            if (step === 'contact') {
                                                setStep('qualify')
                                            } else if (step === 'qualify') {
                                                handleSubmitQualification()
                                            }
                                        }}
                                        disabled={
                                            (step === 'contact' && !canProceedContact) ||
                                            (step === 'qualify' && !canProceedQualify) ||
                                            isLoading
                                        }
                                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ml-auto ${(step === 'contact' && canProceedContact) ||
                                            (step === 'qualify' && canProceedQualify)
                                            ? 'bg-gradient-to-r from-[#AD8253] to-[#c3a177] text-[#272727] hover:opacity-90'
                                            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                            }`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                {step === 'contact' ? 'Continue' : 'Check Availability'}
                                                <ArrowRight className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}

                            {/* Close button for final screens */}
                            {(step === 'thankyou' || step === 'confirmation') && (
                                <div className="p-6 border-t border-white/10">
                                    <button
                                        onClick={handleClose}
                                        className="w-full py-3 px-6 bg-[#1a1a1a] border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}
