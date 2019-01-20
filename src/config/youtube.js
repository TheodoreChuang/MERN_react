import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
        "http://localhost:3001/oauth"
    );
    oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN});

    //await oauth2Client.refreshAccessToken()

    const youtube = google.youtube({version: 'v3', auth: oauth2Client });

export default youtube;