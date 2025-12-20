import { Resend } from 'resend'
import { format } from 'date-fns'

// Lazy initialization of Resend client to avoid build-time issues
let resendClient: Resend | null = null

function getResendClient(): Resend {
  if (!resendClient) {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set')
    }
    resendClient = new Resend(apiKey)
  }
  return resendClient
}

const FROM_EMAIL = process.env.EMAIL_FROM || 'noreply@mail.clicksalesmedia.com'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@mail.clicksalesmedia.com'

export interface MeetingEmailData {
  leadName: string
  leadEmail: string
  meetingDate: Date
  meetingTime: string
  googleMeetLink?: string
  calendarLink?: string
  timezone?: string
}

/**
 * Send meeting confirmation email to lead
 */
export async function sendMeetingConfirmation(data: MeetingEmailData) {
  const { leadName, leadEmail, meetingDate, meetingTime, googleMeetLink, calendarLink, timezone = 'Europe/Paris' } = data

  const formattedDate = format(meetingDate, 'EEEE, MMMM do, yyyy')

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meeting Confirmed</title>
</head>
<body style="margin: 0; padding: 0; background-color: #1a1a1a; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #1a1a1a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #272727; border-radius: 16px; border: 1px solid rgba(173, 130, 83, 0.3);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; border-bottom: 1px solid rgba(173, 130, 83, 0.2);">
              <h1 style="color: #AD8253; font-size: 28px; margin: 0; font-weight: 700;">Strategy Session Confirmed</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #ffffff; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Hello ${leadName},
              </p>
              <p style="color: #a1a1a1; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                Your strategy session with ClickSalesMedia has been confirmed. We're excited to discuss how we can help grow your business.
              </p>
              
              <!-- Meeting Details Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #1a1a1a; border-radius: 12px; border: 1px solid rgba(173, 130, 83, 0.3); margin-bottom: 30px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="color: #AD8253; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px; font-weight: 600;">Meeting Details</p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: #6b6b6b; font-size: 14px;">Date:</span>
                          <span style="color: #ffffff; font-size: 14px; float: right; font-weight: 500;">${formattedDate}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-top: 1px solid rgba(255,255,255,0.1);">
                          <span style="color: #6b6b6b; font-size: 14px;">Time:</span>
                          <span style="color: #ffffff; font-size: 14px; float: right; font-weight: 500;">${meetingTime} (${timezone})</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-top: 1px solid rgba(255,255,255,0.1);">
                          <span style="color: #6b6b6b; font-size: 14px;">Duration:</span>
                          <span style="color: #ffffff; font-size: 14px; float: right; font-weight: 500;">30 minutes</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Buttons -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                ${googleMeetLink ? `
                <tr>
                  <td style="padding-bottom: 16px;">
                    <a href="${googleMeetLink}" style="display: block; background: linear-gradient(135deg, #AD8253 0%, #c3a177 50%, #AD8253 100%); color: #272727; text-decoration: none; text-align: center; padding: 16px 32px; border-radius: 50px; font-weight: 600; font-size: 16px;">
                      Join Google Meet
                    </a>
                  </td>
                </tr>
                ` : ''}
                ${calendarLink ? `
                <tr>
                  <td>
                    <a href="${calendarLink}" style="display: block; background: transparent; color: #AD8253; text-decoration: none; text-align: center; padding: 14px 32px; border-radius: 50px; font-weight: 600; font-size: 14px; border: 2px solid #AD8253;">
                      Add to Calendar
                    </a>
                  </td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px 40px; text-align: center; border-top: 1px solid rgba(173, 130, 83, 0.2);">
              <p style="color: #6b6b6b; font-size: 14px; margin: 0;">
                ClickSalesMedia • Luxury Digital Marketing
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `

  const { data: result, error } = await getResendClient().emails.send({
    from: `ClickSalesMedia <${FROM_EMAIL}>`,
    to: leadEmail,
    subject: `Meeting Confirmed: Strategy Session on ${formattedDate}`,
    html: htmlContent,
  })

  if (error) {
    console.error('Failed to send confirmation email:', error)
    throw new Error(`Failed to send email: ${error.message}`)
  }

  return result
}

/**
 * Send new lead notification to admin
 */
export async function sendNewLeadNotification(data: {
  leadName: string
  leadEmail: string
  company?: string
  website?: string
  growthGoal: string
  budgetTier: string
  isQualified: boolean
  meetingScheduled?: boolean
  meetingDate?: Date
  meetingTime?: string
}) {
  const {
    leadName,
    leadEmail,
    company,
    website,
    growthGoal,
    budgetTier,
    isQualified,
    meetingScheduled,
    meetingDate,
    meetingTime,
  } = data

  const formatBudget = (tier: string) => {
    const budgetLabels: Record<string, string> = {
      UNDER_2K: 'Under $2,000',
      BETWEEN_2K_5K: '$2,000 - $5,000',
      BETWEEN_5K_10K: '$5,000 - $10,000',
      BETWEEN_10K_50K: '$10,000 - $50,000',
      ABOVE_50K: '$50,000+',
    }
    return budgetLabels[tier] || tier
  }

  const formatGoal = (goal: string) => {
    const goalLabels: Record<string, string> = {
      SCALE_REVENUE: 'Scale Revenue',
      BRAND_AWARENESS: 'Brand Awareness',
      FIX_ROI: 'Fix ROI',
      FULL_DIGITAL_TRANSFORMATION: 'Full Digital Transformation',
    }
    return goalLabels[goal] || goal
  }

  const subject = meetingScheduled
    ? `🗓️ New Meeting Booked: ${leadName}${company ? ` from ${company}` : ''}`
    : isQualified
      ? `✨ New Qualified Lead: ${leadName}${company ? ` from ${company}` : ''}`
      : `📥 New Lead: ${leadName}${company ? ` from ${company}` : ''}`

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #f5f5f5; padding: 20px;">
  <table width="600" style="margin: 0 auto; background: white; border-radius: 8px; overflow: hidden;">
    <tr>
      <td style="background: ${isQualified ? '#AD8253' : '#6b6b6b'}; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 20px;">
          ${meetingScheduled ? '🗓️ New Meeting Scheduled' : isQualified ? '✨ New Qualified Lead' : '📥 New Lead'}
        </h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <h2 style="margin: 0 0 20px; color: #272727;">${leadName}</h2>
        
        <table width="100%" style="border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;"><a href="mailto:${leadEmail}">${leadEmail}</a></td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${company}</td>
          </tr>
          ` : ''}
          ${website ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Website</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;"><a href="${website}">${website}</a></td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Growth Goal</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">${formatGoal(growthGoal)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Budget</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right; font-weight: 600; color: ${isQualified ? '#AD8253' : '#666'};">${formatBudget(budgetTier)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Status</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; text-align: right;">
              <span style="background: ${isQualified ? '#e8f5e9' : '#fff3e0'}; color: ${isQualified ? '#2e7d32' : '#ef6c00'}; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500;">
                ${isQualified ? 'Qualified' : 'Not Qualified'}
              </span>
            </td>
          </tr>
          ${meetingScheduled && meetingDate && meetingTime ? `
          <tr>
            <td style="padding: 10px 0; color: #666;">Meeting</td>
            <td style="padding: 10px 0; text-align: right; font-weight: 600; color: #AD8253;">
              ${format(meetingDate, 'MMM do, yyyy')} at ${meetingTime}
            </td>
          </tr>
          ` : ''}
        </table>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="${process.env.NEXTAUTH_URL || 'https://clicksalesmedia.com'}/admin/leads" style="background: #AD8253; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500;">
            View in Admin Portal
          </a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `

  const { data: result, error } = await getResendClient().emails.send({
    from: `ClickSalesMedia <${FROM_EMAIL}>`,
    to: ADMIN_EMAIL,
    subject,
    html: htmlContent,
  })

  if (error) {
    console.error('Failed to send admin notification:', error)
    // Don't throw - admin notification is not critical
  }

  return result
}

export { getResendClient }
