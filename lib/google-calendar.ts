import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'

// Google Calendar API Service
// Requires service account or OAuth credentials

const oauth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback'
)

// Set credentials if refresh token is available
if (process.env.GOOGLE_REFRESH_TOKEN) {
    oauth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    })
}

const calendar = google.calendar({ version: 'v3', auth: oauth2Client })

export interface CreateEventParams {
    summary: string
    description?: string
    startTime: Date
    endTime: Date
    attendeeEmail: string
    attendeeName?: string
    timezone?: string
}

export interface CalendarEvent {
    id: string
    htmlLink: string
    hangoutLink?: string
    start: { dateTime: string; timeZone: string }
    end: { dateTime: string; timeZone: string }
}

/**
 * Create a calendar event with Google Meet conference
 */
export async function createCalendarEvent(params: CreateEventParams): Promise<CalendarEvent> {
    const {
        summary,
        description,
        startTime,
        endTime,
        attendeeEmail,
        attendeeName,
        timezone = 'Europe/Paris',
    } = params

    const event = {
        summary,
        description: description || `Strategy Session with ${attendeeName || attendeeEmail}`,
        start: {
            dateTime: startTime.toISOString(),
            timeZone: timezone,
        },
        end: {
            dateTime: endTime.toISOString(),
            timeZone: timezone,
        },
        attendees: [
            { email: attendeeEmail, displayName: attendeeName },
            { email: process.env.ADMIN_EMAIL || 'hello@mail.clicksalesmedia.com' },
        ],
        conferenceData: {
            createRequest: {
                requestId: `meet-${Date.now()}`,
                conferenceSolutionKey: { type: 'hangoutsMeet' },
            },
        },
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'email', minutes: 24 * 60 }, // 1 day before
                { method: 'email', minutes: 60 }, // 1 hour before
                { method: 'popup', minutes: 30 }, // 30 minutes before
            ],
        },
    }

    const response = await calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
        requestBody: event,
        conferenceDataVersion: 1,
        sendUpdates: 'all',
    })

    return {
        id: response.data.id!,
        htmlLink: response.data.htmlLink!,
        hangoutLink: response.data.hangoutLink ?? undefined,
        start: response.data.start as CalendarEvent['start'],
        end: response.data.end as CalendarEvent['end'],
    }
}

/**
 * Update a calendar event
 */
export async function updateCalendarEvent(
    eventId: string,
    params: Partial<CreateEventParams>
): Promise<CalendarEvent> {
    const event: Record<string, unknown> = {}

    if (params.summary) event.summary = params.summary
    if (params.description) event.description = params.description
    if (params.startTime) {
        event.start = {
            dateTime: params.startTime.toISOString(),
            timeZone: params.timezone || 'Europe/Paris',
        }
    }
    if (params.endTime) {
        event.end = {
            dateTime: params.endTime.toISOString(),
            timeZone: params.timezone || 'Europe/Paris',
        }
    }

    const response = await calendar.events.patch({
        calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
        eventId,
        requestBody: event,
        sendUpdates: 'all',
    })

    return {
        id: response.data.id!,
        htmlLink: response.data.htmlLink!,
        hangoutLink: response.data.hangoutLink ?? undefined,
        start: response.data.start as CalendarEvent['start'],
        end: response.data.end as CalendarEvent['end'],
    }
}

/**
 * Cancel/delete a calendar event
 */
export async function cancelCalendarEvent(eventId: string): Promise<void> {
    await calendar.events.delete({
        calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
        eventId,
        sendUpdates: 'all',
    })
}

/**
 * Get busy times for a date range to calculate availability
 */
export async function getBusyTimes(
    startDate: Date,
    endDate: Date,
    timezone: string = 'Europe/Paris'
): Promise<Array<{ start: Date; end: Date }>> {
    const response = await calendar.freebusy.query({
        requestBody: {
            timeMin: startDate.toISOString(),
            timeMax: endDate.toISOString(),
            timeZone: timezone,
            items: [{ id: process.env.GOOGLE_CALENDAR_ID || 'primary' }],
        },
    })

    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'
    const busySlots = response.data.calendars?.[calendarId]?.busy || []

    return busySlots.map((slot) => ({
        start: new Date(slot.start!),
        end: new Date(slot.end!),
    }))
}

/**
 * Generate Google Calendar add-to-calendar URL for the attendee
 */
export function generateAddToCalendarUrl(event: {
    title: string
    description: string
    startTime: Date
    endTime: Date
    location?: string
}): string {
    const { title, description, startTime, endTime, location } = event

    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d{3}/g, '')

    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: title,
        dates: `${formatDate(startTime)}/${formatDate(endTime)}`,
        details: description,
        location: location || '',
    })

    return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export { oauth2Client }
