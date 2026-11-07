# HUMBLE MUSIC Website

Vite-based starter website for `humble-music.vercel.app`.

## Deploy on Vercel
- Framework preset: **Vite**
- Root directory: `./`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The production build command is configured as `vite build`.

## Run locally
1. Install Node.js LTS.
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`

## Before public release
- Upload the signed release APK to `public/downloads/`.
- Update `public/update.json` with the real version, versionCode and APK URL.
- Replace the placeholder privacy and terms pages with complete policies.
- Verify the download and update links on a real Android device.

The included `update.json` is a starter template, not a published release announcement. Do not advertise a version until its signed APK is available.
