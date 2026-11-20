HUMBLE MUSIC download link configuration

ANDROID APK LINKS
Set these in src/main.js under RELEASE.arm64 and RELEASE.arm32. The download modal buttons read these two URLs.
Current ARM64: https://github.com/humblelyy/humble-music/releases/download/Humble_Music/Humble_Music_arm64.apk
Current ARM32: https://github.com/humblelyy/humble-music/releases/download/Humble_Music/Humble_Music_arm32.apk

IOS LINK (future)
When iOS is officially released, add its App Store/TestFlight/distribution URL to the iOS platform card href in the platform markup in src/main.js. Do not enable the card until the URL is live.

ANDROID TV LINK (future)
When Android TV is officially released, add its release/APK URL to the Android TV platform card href in the platform markup in src/main.js. Do not enable the card until the URL is live.

WHAT'S NEW
Edit public/update.json: latestVersion, releaseDate, and changelog array. The Updates page and desktop nav preview use this file.

ADSTERRA
Ad units are configured in getAdsterraFormat() and loadModalAd() in src/main.js. Network delivery may be blocked by browser extensions, privacy settings, or no available ad inventory.

The website does not bundle APK files. Release downloads point to GitHub Releases.
