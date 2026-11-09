import './style.css'

const app = document.querySelector('#app')
const path = window.location.pathname.replace(/\/+$/, '') || '/'
const arm64Report = '' // Add the new APK's VirusTotal URL after scanning the final release.
const arm32Report = '' // Add the new APK's VirusTotal URL after scanning the final release.
const updateManifestUrl = '/update.json'

const nav = `
<header class="nav wrap">
  <a class="brand" href="/" aria-label="HUMBLE MUSIC home"><span class="brand-mark">H</span><span>HUMBLE<span class="muted"> MUSIC</span></span></a>
  <nav aria-label="Main navigation"><a href="/#experience">Experience</a><a href="/download">Download</a><a href="/updates">Updates</a></nav>
  <a class="nav-cta" href="/download">Get the app <span>↗</span></a>
</header>`
const footer = `
<footer class="footer wrap">
  <div><a class="brand" href="/"><span class="brand-mark small">H</span><span>HUMBLE<span class="muted"> MUSIC</span></span></a><p>Music, with a HUMBLE identity.</p></div>
  <div class="foot-links"><a href="/download">Download</a><a href="/updates">Updates</a><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a></div>
  <small>© ${new Date().getFullYear()} HUMBLE Studio. Independent project. Not affiliated with Spotify.</small>
</footer>`
const home = `${nav}<main>
<section class="hero wrap"><div class="hero-copy"><div class="eyebrow"><i></i> AN INDEPENDENT MUSIC EXPERIENCE</div><h1>Your music.<br><span class="gradient">Your space.</span></h1><p class="lead">Meet HUMBLE MUSIC — a carefully shaped Android listening experience with a distinctive interface and a focus on the details.</p><div class="actions"><a class="button primary" href="/download">Explore downloads <b>↗</b></a><a class="button secondary" href="#experience">Discover HUMBLE</a></div><div class="hero-meta"><span><b class="dot green"></b> Android</span><span><b class="dot pink"></b> HUMBLE UI</span><span><b class="dot olive"></b> By HUMBLE Studio</span></div></div><div class="hero-art" aria-hidden="true"><div class="disc disc-back"></div><div class="disc disc-front"><div class="disc-label">H<span>♪</span></div></div><div class="art-caption">HUMBLE MUSIC <span>LISTEN DIFFERENTLY</span></div></div></section>
<section class="feature-section wrap" id="experience"><div class="section-head"><div><div class="eyebrow">THE EXPERIENCE</div><h2>Made for the<br>moments between.</h2></div><p>A focused music space with expressive visuals, thoughtful navigation and a product that continues to evolve.</p></div><div class="cards"><article class="feature-card"><span class="num">01</span><div class="feature-icon pink-icon">◈</div><h3>Distinct HUMBLE UI</h3><p>A dark, immersive interface with a visual identity of its own.</p></article><article class="feature-card"><span class="num">02</span><div class="feature-icon green-icon">♫</div><h3>Made for Android</h3><p>Architecture-specific builds help you choose the package that matches your device.</p></article><article class="feature-card"><span class="num">03</span><div class="feature-icon olive-icon">✓</div><h3>Release transparency</h3><p>Find version notes, file details and independent scan-report links before installing.</p></article></div></section>
<section class="download-band wrap"><div><div class="eyebrow">READY WHEN YOU ARE</div><h2>Find your build.<br>Press play.</h2><p>Choose the Android package that matches your device architecture.</p></div><a class="button primary" href="/download">Download HUMBLE MUSIC <b>↗</b></a></section>
</main>${footer}`
const download = `${nav}<main class="subpage wrap download-page">
<div class="eyebrow"><i></i> OFFICIAL HUMBLE MUSIC DOWNLOADS</div><h1>Choose your <span class="gradient">Android build.</span></h1><p class="lead">Select the package that matches your phone's processor architecture. If you are unsure, check your device specifications before downloading.</p>
<div class="release-summary"><div><span class="live-dot"></span><span id="release-version">HUMBLE MUSIC 2.3.1</span></div><span class="summary-note">APK · ARM architecture</span></div>
<div class="build-grid">
<article class="build-card featured"><div class="build-top"><span class="arch-icon">64</span><span class="recommended">MOST COMMON</span></div><div class="build-kicker">FOR MODERN ANDROID PHONES</div><h2>ARM 64-bit</h2><p>For devices using the <code>arm64-v8a</code> architecture. This is the right choice for most modern Android phones.</p><div class="build-spec"><span>Package</span><b id="arm64-filename">APK · ARM64</b></div><a id="arm64-download" class="button primary full" href="/downloads/HUMBLE-MUSIC-2.3.1-ARM64.apk">Download ARM64 <b>↓</b></a><a id="arm64-scan" class="scan-link" hidden href="#" target="_blank" rel="noopener noreferrer"><span class="shield">✓</span> View VirusTotal scan report <span>↗</span></a></article>
<article class="build-card"><div class="build-top"><span class="arch-icon muted-icon">32</span><span class="recommended secondary-tag">COMPATIBILITY BUILD</span></div><div class="build-kicker">FOR 32-BIT ARM DEVICES</div><h2>ARM 32-bit</h2><p>For older or specific Android devices using the <code>armeabi-v7a</code> architecture.</p><div class="build-spec"><span>Package</span><b id="arm32-filename">APK · ARM32</b></div><a id="arm32-download" class="button secondary full" href="/downloads/HUMBLE-MUSIC-2.3.1-ARM32.apk">Download ARM32 <b>↓</b></a><a id="arm32-scan" class="scan-link" hidden href="#" target="_blank" rel="noopener noreferrer"><span class="shield">✓</span> View VirusTotal scan report <span>↗</span></a></article>
</div>
<div class="security-panel"><div class="security-icon">⌑</div><div><h3>Check before you install</h3><p>We provide VirusTotal report links for both APK file hashes. Open the report to review the detection results, scan date and engine details. A scan report is not a guarantee that a file is safe, and results can change over time.</p></div></div>
<div class="install-info"><h2>Which version should I download?</h2><div class="info-row"><span>ARM64 (arm64-v8a)</span><p>Recommended for most current Android phones.</p></div><div class="info-row"><span>ARM32 (armeabi-v7a)</span><p>Use only if your device requires a 32-bit ARM build.</p></div><p class="small-note">Android may ask you to allow installation from your browser or file manager. Only proceed if you trust the source and have reviewed the file report.</p></div>
<p class="backlink"><a href="/">← Back to home</a></p></main>${footer}`
const updates = `${nav}<main class="subpage wrap"><div class="eyebrow">RELEASE NOTES</div><h1>Updates & <span class="gradient">changes.</span></h1><p class="lead">Release notes and version information for HUMBLE MUSIC.</p><section class="release-card"><span class="status">RELEASE INFORMATION</span><h2 id="updates-version">HUMBLE MUSIC 2.3.1</h2><p id="updates-changelog">The 2.3.1 production baseline. Future releases will be announced here and through the in-app update checker.</p><p><a class="text-link" href="https://github.com/humblelyy/humble-music/releases" target="_blank" rel="noopener noreferrer">View GitHub releases ↗</a></p></section></main>${footer}`
const privacy = `${nav}<main class="subpage wrap legal-page"><div class="eyebrow">HUMBLE STUDIO · LEGAL</div><h1>Privacy <span class="gradient">policy.</span></h1><p class="lead">Last updated: 7 November 2026</p><section class="legal-content"><h2>1. About this website</h2><p>This website provides information and Android download links for HUMBLE MUSIC. It is operated as an independent project by HUMBLE Studio.</p><h2>2. Information we collect</h2><p>This starter website does not intentionally ask visitors to submit personal information and does not include an account-registration form. The hosting provider may process standard server and security logs, such as IP address, request time and browser information, to deliver and protect the website.</p><h2>3. Cookies and local storage</h2><p>The website may store your cookie-notice preference in your browser's local storage. This is used only to remember that you dismissed the notice; it is not an advertising cookie. See the <a href="/cookies">Cookie Notice</a>.</p><h2>4. Third-party links</h2><p>Download assets may be hosted on GitHub Releases. VirusTotal report links open a third-party service. Those services operate under their own privacy policies and terms.</p><h2>5. App permissions and data</h2><p>The Android app may connect to third-party services required for its functionality. The data handled by those services depends on the features you use and the permissions you grant. This website does not claim that the app collects no data. Review the app's in-app disclosures and the relevant service policies before use.</p><h2>6. Contact</h2><p>For privacy questions, contact HUMBLE Studio through the official links on the developer's website: <a href="https://maheshmadhav.vercel.app/" target="_blank" rel="noopener noreferrer">maheshmadhav.vercel.app</a>.</p><h2>7. Changes</h2><p>This policy may be updated as the website and app change. The date above will be revised when material changes are made.</p></section></main>${footer}`
const cookies = `${nav}<main class="subpage wrap legal-page"><div class="eyebrow">HUMBLE STUDIO · LEGAL</div><h1>Cookie <span class="gradient">notice.</span></h1><p class="lead">Last updated: 7 November 2026</p><section class="legal-content"><h2>What this website uses</h2><p>This website does not currently use advertising or analytics cookies. It may use your browser's local storage to remember whether you dismissed the cookie notice. Local storage is kept on your device and is not a cookie.</p><h2>Third-party services</h2><p>When you follow a GitHub or VirusTotal link, that service may use its own cookies or similar technologies. Their practices are governed by their own policies.</p><h2>Manage your choice</h2><p>You can clear this website's stored preference through your browser's site-data settings. If optional analytics or advertising technologies are added later, this notice and the consent controls will be updated.</p></section></main>${footer}`
const terms = `${nav}<main class="subpage wrap legal-page"><div class="eyebrow">HUMBLE STUDIO · LEGAL</div><h1>Terms of <span class="gradient">use.</span></h1><p class="lead">Last updated: 7 November 2026</p><section class="legal-content"><h2>1. Independent project</h2><p>HUMBLE MUSIC is an independent project by HUMBLE Studio. It is not affiliated with, endorsed by, or sponsored by Spotify or any other music service. Third-party names and trademarks belong to their respective owners.</p><h2>2. Downloads</h2><p>Download only from the links presented on this website or the official HUMBLE MUSIC release repository. Check the architecture compatibility and VirusTotal report before installing. You are responsible for deciding whether to install an APK on your device.</p><h2>3. No security guarantee</h2><p>VirusTotal reports are provided as independent reference links. Scan results can change and do not guarantee that a file is harmless or free of vulnerabilities.</p><h2>4. Availability and changes</h2><p>Features, download links and release availability may change. We may update, suspend or remove website content without prior notice.</p><h2>5. Third-party services</h2><p>Third-party services and links are governed by their own terms. HUMBLE Studio is not responsible for external websites or services.</p><h2>6. Contact</h2><p>For questions, visit <a href="https://maheshmadhav.vercel.app/" target="_blank" rel="noopener noreferrer">the developer website</a>.</p></section></main>${footer}`
const pages = {'/':home,'/download':download,'/updates':updates,'/privacy':privacy,'/cookies':cookies,'/terms':terms}
app.innerHTML = pages[path] || home

// The download page and release notes read one manifest, so website links and the in-app checker stay in sync.
async function loadReleaseManifest() {
  try {
    const response = await fetch(`${updateManifestUrl}?_=${Date.now()}`, { cache: 'no-store' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const release = await response.json()
    const version = String(release.latestVersion || '2.3.1')
    const arm64 = release.arm64ApkUrl || `/downloads/HUMBLE-MUSIC-${version}-ARM64.apk`
    const arm32 = release.arm32ApkUrl || `/downloads/HUMBLE-MUSIC-${version}-ARM32.apk`
    const versionLabel = document.querySelector('#release-version')
    if (versionLabel) versionLabel.textContent = `HUMBLE MUSIC ${version}`
    const updatesVersion = document.querySelector('#updates-version')
    if (updatesVersion) updatesVersion.textContent = `HUMBLE MUSIC ${version}`
    const changelog = Array.isArray(release.changelog) ? release.changelog : []
    const updatesChangelog = document.querySelector('#updates-changelog')
    if (updatesChangelog) updatesChangelog.textContent = changelog.length ? changelog.join(' · ') : 'Release notes will be published with each update.'
    for (const [id, url] of [['arm64-download', arm64], ['arm32-download', arm32]]) {
      const link = document.getElementById(id)
      if (link) link.href = url
    }
    for (const [id, url] of [['arm64-scan', release.arm64VirusTotalUrl], ['arm32-scan', release.arm32VirusTotalUrl]]) {
      const link = document.getElementById(id)
      if (link && typeof url === 'string' && url.startsWith('https://www.virustotal.com/')) { link.href = url; link.hidden = false }
    }
  } catch (error) {
    console.warn('Could not load HUMBLE MUSIC release manifest', error)
  }
}
loadReleaseManifest()

const cookieKey = 'humble-cookie-notice-dismissed'
if (!localStorage.getItem(cookieKey)) {
  const banner = document.createElement('aside')
  banner.className = 'cookie-banner'
  banner.innerHTML = `<div><b>Just the essentials.</b><p>This site uses local storage to remember this notice. No advertising or analytics cookies are currently used.</p><a href="/cookies">Cookie notice</a></div><button type="button" class="cookie-accept">Got it</button>`
  document.body.append(banner)
  banner.querySelector('button').addEventListener('click', () => { localStorage.setItem(cookieKey, '1'); banner.remove() })
}
