// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-YERZ770G2M'

// Track page views
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        ; (window as any).gtag('config', GA_TRACKING_ID, {
            page_path: url,
        })
    }
}

// Track events
export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        ; (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

// Pre-defined events for common actions
export const trackButtonClick = (buttonName: string, source?: string) => {
    event({
        action: 'button_click',
        category: 'engagement',
        label: source ? `${buttonName} - ${source}` : buttonName,
    })
}

export const trackModalOpen = (modalName: string, source?: string) => {
    event({
        action: 'modal_open',
        category: 'engagement',
        label: source ? `${modalName} - ${source}` : modalName,
    })
}

export const trackFormStep = (step: number, stepName: string) => {
    event({
        action: 'form_step',
        category: 'lead_generation',
        label: `Step ${step}: ${stepName}`,
        value: step,
    })
}

export const trackFormSubmit = (formName: string) => {
    event({
        action: 'form_submit',
        category: 'lead_generation',
        label: formName,
    })
}

export const trackLeadQualified = (budgetTier: string, growthGoal: string) => {
    event({
        action: 'lead_qualified',
        category: 'lead_generation',
        label: `${growthGoal} - ${budgetTier}`,
    })
}

export const trackMeetingBooked = (source?: string) => {
    event({
        action: 'meeting_booked',
        category: 'conversion',
        label: source || 'direct',
    })
}

export const trackContactForm = (action: 'start' | 'submit' | 'error') => {
    event({
        action: `contact_form_${action}`,
        category: 'lead_generation',
        label: action,
    })
}
