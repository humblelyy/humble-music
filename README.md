# HUMBLE MUSIC Website

Vite static website for HUMBLE MUSIC.

## Deploy

1. Push this project to `humblelyy/humble-music` or upload the updated files to your website repository.
2. Vercel will build with `npm run build`.
3. Publish GitHub Release assets with the exact filenames `app-arm64-v8a-debug.apk` and `app-armeabi-v7a-debug.apk` for the current download links to work.

## Important release note

The current links target GitHub's latest release and the APK filenames from the supplied test builds. These files are debug builds. Before a public production release, create and sign release APKs, upload them as release assets, and update the filenames/links in `src/main.js`.

VirusTotal links are supplied reports for the file hashes provided by the project owner. The website does not claim that either file is clean or safe; visitors should review the live reports themselves.

## Update metadata

Edit `public/update.json` whenever a new app version is published. Ensure `latestVersion`, `versionCode`, `minimumVersionCode`, `apkUrl`, `releaseDate` and `changelog` match the actual signed release.
