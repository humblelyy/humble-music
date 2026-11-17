# HUMBLE MUSIC release / website update workflow

The in-app update checker and website use `public/update.json` as the release manifest.

For a new Android release:
1. Upload the signed ARM64 and ARM32 APK assets to the GitHub release.
2. Update `latestVersion`, `versionCode`, `minimumVersionCode`, `releaseUrl`, `arm64ApkUrl`, `arm32ApkUrl`, `releaseDate` and `changelog` in `public/update.json`.
3. Keep the `downloadPage` URL stable.
4. Add VirusTotal report URLs only after scanning the exact final APK files, if the app/client supports those fields.
5. Build and deploy the website. Verify `/update.json`, `/download`, and both release asset links.

**Signing compatibility:** Keep the same Android package ID and private signing key for in-place app updates. If a release uses a different signing certificate, users may need to uninstall and reinstall, which can remove local app data.

The current manifest points to the `Humble_Music` tag and its ARM64 / ARM32 assets.
