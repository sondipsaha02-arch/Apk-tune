# Tune APK build guide

This project is prepared to build an Android APK with GitHub Actions.

## Important architecture

Tune is a React + Node/WebSocket app. The APK uses the hosted Tune web/server URL, so the Node server must be deployed first. Do not put a Gemini API key inside the APK.

## 1. Deploy the Tune server

Deploy this repository to a Node-capable host such as Render, Railway, Fly.io, or your own server.

Build command:
`npm run build`

Start command:
`npm start`

The server listens on port 3000 by default. If your host supplies PORT, update `const PORT = 3000` in server.ts to `const PORT = Number(process.env.PORT || 3000)` before deploying.

## 2. Test the web app

Open the deployed HTTPS URL in a browser and verify the Live connection works.

## 3. Put the code on GitHub

Create a GitHub repository and upload this project.

## 4. Add the server URL

GitHub repository -> Settings -> Secrets and variables -> Actions -> Variables -> New repository variable.

Name:
`TUNE_SERVER_URL`

Value:
`https://YOUR-TUNE-SERVER.example.com`

Do NOT put a Gemini API key here.

## 5. Build the APK

GitHub -> Actions -> Build Tune APK -> Run workflow.

When it finishes:
Artifacts -> Tune-debug-apk -> download the ZIP -> extract `app-debug.apk`.

## 6. Install on Android

Transfer `app-debug.apk` to the phone, open it, allow installation from that source if Android asks, then tap Install.

## User API keys

The Live WebSocket server no longer rejects a connection merely because the server has no default GEMINI_API_KEY. If a user enters a key in Tune Settings, that key is used for that user's Live session.

For a public release, add authentication/rate limits before allowing arbitrary users to send API keys through your server.
