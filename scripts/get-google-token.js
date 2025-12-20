// Script to get Google OAuth Refresh Token
// Run with: node scripts/get-google-token.js

require('dotenv').config({ path: '.env.local' });

const http = require('http');
const url = require('url');

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/api/auth/google/callback';
const SCOPES = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events'
].join(' ');

// Step 1: Generate auth URL
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&response_type=code` +
    `&scope=${encodeURIComponent(SCOPES)}` +
    `&access_type=offline` +
    `&prompt=consent`;

console.log('\n🔐 Google OAuth Token Generator\n');
console.log('1. Opening browser for authorization...');
console.log('2. After authorizing, you will be redirected back here.\n');

// Create a simple server to catch the callback
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/api/auth/google/callback') {
        const code = parsedUrl.query.code;

        if (code) {
            console.log('✅ Authorization code received!');
            console.log('📡 Exchanging for refresh token...\n');

            // Exchange code for tokens
            try {
                const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({
                        code: code,
                        client_id: CLIENT_ID,
                        client_secret: CLIENT_SECRET,
                        redirect_uri: REDIRECT_URI,
                        grant_type: 'authorization_code'
                    })
                });

                const tokens = await tokenResponse.json();

                if (tokens.refresh_token) {
                    console.log('🎉 SUCCESS! Here is your refresh token:\n');
                    console.log('━'.repeat(60));
                    console.log(tokens.refresh_token);
                    console.log('━'.repeat(60));
                    console.log('\n📋 Copy this and add it to your .env.local as GOOGLE_REFRESH_TOKEN\n');

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <html>
                        <head><title>Success!</title></head>
                        <body style="font-family: system-ui; background: #1a1a1a; color: white; padding: 40px; text-align: center;">
                            <h1 style="color: #AD8253;">✅ Token Generated!</h1>
                            <p>Your refresh token has been printed in the terminal.</p>
                            <p>You can close this window.</p>
                            <pre style="background: #272727; padding: 20px; border-radius: 8px; text-align: left; overflow-x: auto;">${tokens.refresh_token}</pre>
                        </body>
                        </html>
                    `);
                } else {
                    console.log('❌ Error:', tokens);
                    res.writeHead(400, { 'Content-Type': 'text/html' });
                    res.end('<h1>Error getting token. Check terminal for details.</h1>');
                }
            } catch (error) {
                console.log('❌ Error:', error.message);
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>Error: ' + error.message + '</h1>');
            }

            // Close server after getting token
            setTimeout(() => {
                server.close();
                process.exit(0);
            }, 2000);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end('<h1>No code received</h1>');
        }
    }
});

server.listen(3000, () => {
    console.log('🌐 Callback server running on http://localhost:3000');
    console.log('\n📎 Open this URL in your browser:\n');
    console.log(authUrl);
    console.log('\n');

    // Try to open browser automatically
    const { exec } = require('child_process');
    const command = process.platform === 'darwin' ? 'open' :
        process.platform === 'win32' ? 'start' : 'xdg-open';
    exec(`${command} "${authUrl}"`);
});
