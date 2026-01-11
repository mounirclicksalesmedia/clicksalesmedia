// Script to test Google Calendar API access
// Run with: node scripts/test-google-calendar.js

require('dotenv').config({ path: '.env.local' });
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

async function testCalendarAccess() {
    console.log('\n🔍 Testing Google Calendar API Access...\n');

    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
    const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary';

    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
        console.error('❌ Missing credentials in .env.local');
        console.log('Ensure GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, and GOOGLE_REFRESH_TOKEN are set.');
        return;
    }

    const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);
    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    // Initialize Calendar API
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    try {
        console.log('1. Attempting to list upcoming events...');
        const response = await calendar.events.list({
            calendarId: CALENDAR_ID,
            timeMin: new Date().toISOString(),
            maxResults: 1,
            singleEvents: true,
            orderBy: 'startTime',
        });

        console.log('✅ Connection Successful!');
        console.log(`📅 Found ${response.data.items.length} upcoming event(s).`);

        console.log('\n2. Checking scope access by simulating event creation...');
        // We won't actually create an event, just check if we have the object structure right
        // If we can list events, we likely have read access. 
        // We really need to know if we have write access (https://www.googleapis.com/auth/calendar.events)

        // Let's try to get the calendar details instead of creating an event (less intrusive)
        const calendarList = await calendar.calendarList.get({ calendarId: CALENDAR_ID });
        console.log(`✅ Calendar Access Level: ${calendarList.data.accessRole}`);

        if (calendarList.data.accessRole === 'writer' || calendarList.data.accessRole === 'owner') {
            console.log('✅ You have WRITE access (can create meetings).');
        } else {
            console.log('⚠️ WARNING: You might only have READ access.');
        }

    } catch (error) {
        console.error('\n❌ API Request Failed!');

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Error:', error.message);
        }

        if (error.message.includes('invalid_grant')) {
            console.log('\n👉 DIAGNOSIS: The Refresh Token is invalid or expired.');
            console.log('   SOLUTION: Run "node scripts/get-google-token.js" to generate a new one.');
        } else if (error.message.includes('insufficient authentication scopes')) {
            console.log('\n👉 DIAGNOSIS: The Refresh Token does not have the required scopes.');
            console.log('   SOLUTION: Run "node scripts/get-google-token.js" and ensure you approve all permissions.');
        }
    }
}

testCalendarAccess();
