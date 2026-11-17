# HUMBLE MUSIC Website

A responsive product website for HUMBLE MUSIC, built with Vite and the supplied app screenshots and brand mark.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Pages
- `/` — product landing page, interface comparison, platform availability and promotional placement
- `/download` — ARM64 / ARM32 APK download flow, plus iOS and Android TV coming-soon states
- `/updates` — current release information from `public/update.json`
- `/privacy`, `/cookies`, `/terms` — legal information

## Android release links
The download buttons use the official assets from the `Humble_Music` GitHub release:
- Release: https://github.com/humblelyy/humble-music/releases/tag/Humble_Music
- ARM64: https://github.com/humblelyy/humble-music/releases/download/Humble_Music/Humble_Music_arm64.apk
- ARM32: https://github.com/humblelyy/humble-music/releases/download/Humble_Music/Humble_Music_arm32.apk

The version and changelog are read from `public/update.json`. Keep its keys compatible with the app's update checker when publishing a new release.

## Advertising integration
The homepage includes a reserved promotional placement and the download flow includes a 15-second download interstitial. These are front-end placeholders, not an active advertising network. To monetize, create an account with your chosen provider, obtain its approved website script/ad unit, review its policy and consent requirements, then insert its code in the marked `.ad-panel` / `.sponsor-slot` areas. Do not claim ad revenue or impressions until the provider is installed and verified.

## Fonts
The page uses Manrope for display typography and DM Sans for interface/body text, loaded from Google Fonts with system fallbacks. If you prefer self-hosted fonts, place licensed WOFF2 files under `public/fonts` and replace the stylesheet link in `index.html` with `@font-face` declarations.

## Deploy to Vercel
Import the repository, use the default Vite settings (`npm run build`, output directory `dist`). `vercel.json` provides SPA rewrites and disables caching for the update manifest.

## Notes
- The screenshots in `public/assets` are the user-supplied reference captures.
- No APK files are bundled into this website ZIP; the buttons download directly from GitHub Releases.
- The website presents HUMBLE MUSIC as an independent project and does not imply Spotify endorsement.


## Adsterra integration

- Social Bar script is loaded once from `index.html`.
- The homepage banner slot selects one supplied format by viewport width:
  - 728×90 on wide desktop screens
  - 300×250 on medium/tablet screens
  - 320×50 on small/mobile screens
- Each banner runs in an isolated iframe so the Adsterra `atOptions` global does not collide between formats.
- The 15-second APK download preparation countdown is separate from Social Bar. Social Bar is not a guaranteed full-screen interstitial, and the countdown does not claim that an ad was viewed.
- Ad delivery depends on Adsterra approval, inventory, visitor eligibility, browser settings and the provider's policies.
