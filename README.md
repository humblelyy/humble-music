# HUMBLE MUSIC Website

Starter website for `humble-music.vercel.app`.

## Run locally
1. Install Node.js LTS.
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy, then add `humble-music.vercel.app` under Project → Settings → Domains.

## Before public release
- Upload your signed release APK to `public/downloads/`.
- Update `public/update.json` with the real version, versionCode and APK URL.
- Replace the placeholder privacy and terms pages with complete policies.
- Verify the download and update links on a real Android device.

The included `update.json` is a starter template, not a published release announcement. Do not advertise a version until its signed APK is available.
