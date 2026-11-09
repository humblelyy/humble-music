# HUMBLE MUSIC website release workflow

The website and Android app share `public/update.json`. The app reads `latestVersion`, `downloadPage`, `releaseDate`, and `changelog`; the download page reads the architecture-specific APK URLs.

For every release, upload signed production APKs to `public/downloads/`, then update `latestVersion`, `versionCode`, `minimumVersionCode`, `arm64ApkUrl`, `arm32ApkUrl`, and `changelog` in `public/update.json`. Add VirusTotal URLs only after scanning the exact final APKs. Deploy to Vercel and verify `/update.json` and both download links.

The first 2.3.1 production build is a new installation baseline. Existing apps signed with a different certificate need a one-time reinstall. All releases from 2.3.1 onward must keep the same package ID and private signing key.
