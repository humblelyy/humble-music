import './style.css'

const ROOT = ''
const RELEASE = {
  tag: 'https://github.com/humblelyy/humble-music/releases/tag/Humble_Music',
  arm32: 'https://github.com/humblelyy/humble-music/releases/download/Humble_Music/Humble_Music_arm32.apk',
  arm64: 'https://github.com/humblelyy/humble-music/releases/download/Humble_Music/Humble_Music_arm64.apk',
}
const app = document.querySelector('#app')
const path = window.location.pathname.replace(/\/+$/, '') || '/'
const logo = '/assets/humble-mark.png'

const platformMarks = {
  android: `<img src="/assets/platforms/android.svg" alt="" aria-hidden="true">`,
  apple: `<img src="/assets/platforms/apple.svg" alt="" aria-hidden="true">`,
  androidtv: `<img src="/assets/platforms/android-tv.svg" alt="" aria-hidden="true">`
}

const nav = `
<header class="site-header">
  <div class="nav-shell wrap">
    <a class="brand" href="/" aria-label="HUMBLE MUSIC home"><img src="${logo}" alt=""/><span>HUMBLE<span class="brand-light"> MUSIC</span></span></a>
    <nav class="desktop-nav" aria-label="Main navigation"><a href="/#about">About</a><a href="/#interfaces">App screens</a><a href="/download">Download</a><a href="/updates">What's new</a></nav>
    <a class="nav-download" href="/download">Get HUMBLE <span>↗</span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
  </div>
  <div class="mobile-menu" hidden><a href="/#about">About</a><a href="/#interfaces">App screens</a><a href="/download">Download</a><a href="/updates">What's new</a></div>
</header>`

const footer = `
<footer class="footer wrap">
  <div class="footer-main"><div class="brand footer-brand"><img src="${logo}" alt=""/><span>HUMBLE<span class="brand-light"> MUSIC</span></span></div><p>Android music app by HUMBLE Studio.</p></div>
  <div class="footer-links"><a href="/download">Download</a><a href="/updates">Updates</a><a href="https://github.com/humblelyy/humble-music/releases" target="_blank" rel="noopener">GitHub releases ↗</a><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a></div>
  <div class="footer-bottom"><span>© ${new Date().getFullYear()} HUMBLE Studio</span><span>Independent project · Not affiliated with Spotify</span></div>
</footer>`

const home = `${nav}<main>
<section class="hero wrap">
  <div class="hero-copy reveal"><div class="eyebrow"><span class="eyebrow-line"></span> THE HUMBLE MUSIC APP</div><h1>Music playback.<br><span class="hero-italic">Your choice of interface.</span></h1><p class="hero-description">HUMBLE MUSIC connects with your Spotify account. Choose between Classic UI and HUMBLE UI.</p><div class="hero-actions"><a class="button button-light" href="/download">Get HUMBLE MUSIC <span>↗</span></a><a class="text-button" href="#interfaces">View app screens <span>↓</span></a></div><div class="hero-footnote"><span class="availability-dot"></span> Available for Android <span class="footnote-divider">/</span> iOS and Android TV coming soon</div></div>
  <div class="hero-visual reveal"><div class="hero-glow"></div><div class="hero-device device-back"><img src="/assets/humble-player.jpeg" alt="HUMBLE UI music player"/></div><div class="hero-device device-front"><img src="/assets/classic-home.jpeg" alt="Classic interface home screen"/></div><div class="floating-note"><span class="note-dot"></span><span><b>Two interfaces</b><small>Classic UI and HUMBLE UI</small></span></div><div class="visual-index">H / 02</div></div>
</section>
<section class="ticker" aria-label="HUMBLE MUSIC details"><div class="ticker-track"><span>CLASSIC UI</span><i>✳</i><span>HUMBLE UI</span><i>✳</i><span>ANDROID</span><i>✳</i><span>MADE BY HUMBLE STUDIO</span><i>✳</i><span>CLASSIC UI</span><i>✳</i><span>HUMBLE UI</span><i>✳</i></div></section>
<section class="intro-section wrap" id="about"><div class="section-kicker">01 — ABOUT THE APP</div><div class="intro-grid"><h2>One app.<br><span>Two interfaces.</span></h2><div class="intro-copy"><p>Choose Classic UI for a familiar layout or HUMBLE UI for the custom interface. Switch between them in the app.</p><a class="inline-link" href="#interfaces">See both interfaces <span>↗</span></a></div></div></section>
<section class="interface-section wrap" id="interfaces"><div class="section-top"><div><div class="section-kicker">02 — APP INTERFACES</div><h2>Choose your <em>interface.</em></h2></div><div class="interface-controls" role="tablist" aria-label="Choose app interface"><button class="interface-tab active" data-interface="classic" role="tab" aria-selected="true">Classic UI</button><button class="interface-tab" data-interface="humble" role="tab" aria-selected="false">HUMBLE UI</button></div></div>
<div class="interface-showcase"><div class="interface-copy"><div class="interface-count" id="interface-count">01 / 02</div><h3 id="interface-title">Classic UI</h3><p id="interface-description">The Classic UI keeps the main music controls, playlists and library in a familiar layout.</p><div class="interface-tags" id="interface-tags"><span>Familiar controls</span><span>Playlists</span><span>Music library</span></div><div class="interface-arrows"><button class="arrow-button" data-step="prev" aria-label="Previous interface">←</button><button class="arrow-button" data-step="next" aria-label="Next interface">→</button></div></div><div class="interface-images" id="interface-images"><figure class="screen screen-main"><img id="screen-main" src="/assets/classic-home.jpeg" alt="Classic UI home screen"/><figcaption>HOME</figcaption></figure><figure class="screen screen-secondary"><img id="screen-secondary" src="/assets/classic-player.jpeg" alt="Classic UI player screen"/><figcaption>NOW PLAYING</figcaption></figure></div></div></section>
<section class="details-section"><div class="wrap details-inner"><div class="section-kicker">03 — APP DETAILS</div><h2>App <em>features.</em></h2><div class="detail-grid"><article><span class="detail-number">01</span><div class="detail-symbol">◉</div><h3>Two interface styles</h3><p>Switch between Classic UI and HUMBLE UI.</p></article><article><span class="detail-number">02</span><div class="detail-symbol">♫</div><h3>Spotify-connected</h3><p>Sign in using your Spotify account.</p></article><article><span class="detail-number">03</span><div class="detail-symbol">↗</div><h3>Built for Android</h3><p>Download the ARM64 or ARM32 APK for your device.</p></article></div></div></section>
<section class="platform-section wrap"><div class="section-kicker">04 — PLATFORMS</div><div class="platform-heading"><h2>Available <em>platforms.</em></h2><p>The Android version is available now. iOS and Android TV versions are not available yet.</p></div><div class="platform-grid"><a class="platform-card available" href="/download"><div class="platform-icon android-icon">${platformMarks.android}</div><div><h3>Android</h3><p>Available now · ARM64 / ARM32</p></div><span class="platform-arrow">↗</span></a><div class="platform-card coming"><div class="platform-icon apple-icon">${platformMarks.apple}</div><div><h3>iOS</h3><p>Coming soon</p></div><span class="coming-label">SOON</span></div><div class="platform-card coming"><div class="platform-icon tv-icon">${platformMarks.androidtv}</div><div><h3>Android TV</h3><p>Coming soon</p></div><span class="coming-label">SOON</span></div></div></section>
<section class="ad-section wrap" id="advertisement"><div class="ad-section-heading"><div><div class="section-kicker">HOMEPAGE ADVERTISEMENT</div><h2>Sponsored placement<span>.</span></h2></div><span class="ad-label-pill">ADVERTISEMENT</span></div><div class="adsterra-banner-frame" id="adsterra-banner-slot" aria-label="Advertisement"><div class="adsterra-loading">Advertisement loading…</div></div><p class="ad-disclosure">Advertisement · Served by Adsterra. Availability and format may vary by device and visitor.</p></section>
<section class="closing-cta wrap"><div><div class="section-kicker">05 — DOWNLOAD</div><h2>Get HUMBLE<br><em>MUSIC.</em></h2></div><a class="button button-light" href="/download">Download for Android <span>↗</span></a></section>
</main>${footer}`

const download = `${nav}<main class="subpage wrap download-page"><div class="section-kicker">HUMBLE MUSIC / DOWNLOAD</div><div class="download-heading"><h1>Download<br><em>HUMBLE MUSIC.</em></h1><p>Select the Android package for your device. iOS and Android TV are coming soon.</p></div>
<section class="platform-downloads"><article class="download-platform selected"><div class="download-platform-head"><span class="platform-icon brand-platform-icon"><img src="/assets/platforms/android.svg" alt="Android logo"></span><span class="availability-pill"><i></i> AVAILABLE NOW</span></div><h2>Android</h2><p>Choose the APK that matches your device's processor architecture.</p><div class="architecture-grid"><article class="architecture-card"><div class="architecture-top"><strong>64</strong><span>RECOMMENDED</span></div><h3>ARM 64-bit</h3><p>For most modern Android phones.<br><code>arm64-v8a</code></p><button class="button button-light download-trigger" data-arch="arm64">Download ARM64 <span>↓</span></button></article><article class="architecture-card"><div class="architecture-top"><strong>32</strong><span>COMPATIBILITY</span></div><h3>ARM 32-bit</h3><p>For compatible 32-bit Android devices.<br><code>armeabi-v7a</code></p><button class="button button-outline download-trigger" data-arch="arm32">Download ARM32 <span>↓</span></button></article></div><div class="release-info"><span>Current release <b id="release-version">2.3.1</b></span><a href="${RELEASE.tag}" target="_blank" rel="noopener">View release notes ↗</a></div></article>
<div class="future-platforms"><article><div class="platform-icon apple-icon">${platformMarks.apple}</div><div><h3>iOS</h3><p>We're working on it.</p></div><span class="coming-label">COMING SOON</span></article><article><div class="platform-icon tv-icon">${platformMarks.androidtv}</div><div><h3>Android TV</h3><p>A bigger-screen experience is on the way.</p></div><span class="coming-label">COMING SOON</span></article></div></section>
<section class="download-help"><div><div class="section-kicker">NOT SURE WHICH ONE?</div><h2>64-bit or 32-bit?</h2></div><p>Most Android phones released in recent years use ARM64. ARM32 is intended for older or specifically 32-bit devices. Check your device specifications before installing.</p></section><p class="download-note">Only download APK files from the official HUMBLE MUSIC release links. Android may ask you to allow installation from your browser or file manager.</p></main>${footer}`

const updates = `${nav}<main class="subpage wrap legal-page"><div class="section-kicker">HUMBLE MUSIC / RELEASE NOTES</div><div class="download-heading"><h1>What's<br><em>new.</em></h1><p>Version information and release notes.</p></div><section class="release-card"><div class="release-card-top"><span class="availability-pill"><i></i> CURRENT RELEASE</span><a href="${RELEASE.tag}" target="_blank" rel="noopener">GitHub release ↗</a></div><h2 id="updates-version">HUMBLE MUSIC 2.3.1</h2><p class="release-date" id="release-date">Published 10 November 2026</p><ul id="updates-changelog"><li>Release notes are published with each version.</li></ul><div class="release-card-bottom"><span>HUMBLE MUSIC</span><span>VERSION <b id="release-version-small">2.3.1</b></span></div></section></main>${footer}`

const privacy = `${nav}<main class="subpage wrap legal-page"><div class="section-kicker">HUMBLE STUDIO / LEGAL</div><div class="download-heading"><h1>Privacy<br><em>policy.</em></h1><p>Last updated: 17 November 2026</p></div><section class="legal-content"><h2>1. About this website</h2><p>This website provides information about HUMBLE MUSIC and links to official Android releases. It is operated as an independent project by HUMBLE Studio.</p><h2>2. Information and server logs</h2><p>This website does not currently provide account registration or a contact form. The hosting provider may process standard technical and security logs, including IP address, request time and browser information, to deliver and protect the service.</p><h2>3. Local storage</h2><p>The website uses local storage to remember your interface and cookie-notice preferences. These values remain in your browser.</p><h2>4. Third-party services</h2><p>Download links open GitHub Releases. These services may process data under their own privacy policies. This website does not control third-party services.</p><h2>5. Music service account</h2><p>HUMBLE MUSIC connects to Spotify using a Spotify account. Spotify's own privacy policy and terms govern Spotify's handling of account and listening data. Review the app's disclosures and the relevant service policies before use.</p><h2>6. Advertising</h2><p>This website includes a reserved promotional placement. Third-party advertising will only be enabled after a provider is configured; any provider may process data according to its own policy. This notice must be updated when such integration is activated.</p><h2>7. Contact</h2><p>For questions, visit <a href="https://maheshmadhav.vercel.app/" target="_blank" rel="noopener">the developer website</a>.</p></section></main>${footer}`

const cookies = `${nav}<main class="subpage wrap legal-page"><div class="section-kicker">HUMBLE STUDIO / LEGAL</div><div class="download-heading"><h1>Cookie<br><em>notice.</em></h1><p>Last updated: 17 November 2026</p></div><section class="legal-content"><h2>Current website storage</h2><p>This website currently uses browser local storage to remember the cookie notice and selected interface. It does not currently set third-party advertising or analytics cookies.</p><h2>Third-party links</h2><p>When you follow a GitHub release link, that service may use its own cookies or similar technologies under its own policies.</p><h2>Advertising changes</h2><p>A promotional placement is reserved on the homepage. If a third-party advertising provider is enabled later, this notice and any required consent controls will be updated before activation.</p><h2>Manage your preferences</h2><p>You can clear this site's stored preferences through your browser's site-data settings.</p></section></main>${footer}`

const terms = `${nav}<main class="subpage wrap legal-page"><div class="section-kicker">HUMBLE STUDIO / LEGAL</div><div class="download-heading"><h1>Terms of<br><em>use.</em></h1><p>Last updated: 17 November 2026</p></div><section class="legal-content"><h2>1. Independent project</h2><p>HUMBLE MUSIC is an independent project by HUMBLE Studio. It is not affiliated with, endorsed by, or sponsored by Spotify. Third-party names and trademarks belong to their respective owners.</p><h2>2. Downloads</h2><p>Use the official GitHub release links provided on this website. Check device architecture and compatibility before installing an APK. You are responsible for deciding whether to install software on your device.</p><h2>3. Third-party platforms</h2><p>Spotify, GitHub and other third-party services operate under their own terms and policies. HUMBLE Studio does not control these services.</p><h2>4. Availability and changes</h2><p>Features, releases, links and platform availability may change. We may update, suspend or remove website content.</p><h2>5. No warranty</h2><p>The website and its information are provided on an as-available basis. We do not guarantee uninterrupted availability or compatibility with every device.</p><h2>6. Contact</h2><p>For questions, visit <a href="https://maheshmadhav.vercel.app/" target="_blank" rel="noopener">the developer website</a>.</p></section></main>${footer}`

const pages = {'/': home, '/download': download, '/updates': updates, '/privacy': privacy, '/cookies': cookies, '/terms': terms}
app.innerHTML = pages[path] || home
if (!pages[path]) history.replaceState({}, '', '/')

document.querySelector('.menu-toggle')?.addEventListener('click', (event) => {
  const button = event.currentTarget
  const menu = document.querySelector('.mobile-menu')
  const open = button.getAttribute('aria-expanded') === 'true'
  button.setAttribute('aria-expanded', String(!open))
  menu.hidden = open
})

const interfaceData = {
  classic: {count:'01 / 02',title:'Classic UI',description:'The Classic UI keeps the main music controls, playlists and library in a familiar layout.',tags:['Familiar controls','Playlists','Music library'],home:'/assets/classic-home.jpeg',player:'/assets/classic-player.jpeg'},
  humble: {count:'02 / 02',title:'HUMBLE UI',description:'HUMBLE UI uses a custom layout with album artwork and redesigned playback controls.',tags:['Custom interface','Artwork-led player','Personal character'],home:'/assets/humble-home.jpeg',player:'/assets/humble-player.jpeg'}
}
function setInterface(key) {
  const data = interfaceData[key]
  if (!data) return
  document.querySelectorAll('.interface-tab').forEach(tab => { const active = tab.dataset.interface === key; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)) })
  const count = document.querySelector('#interface-count'); if (count) count.textContent = data.count
  const title = document.querySelector('#interface-title'); if (title) title.textContent = data.title
  const description = document.querySelector('#interface-description'); if (description) description.textContent = data.description
  const tags = document.querySelector('#interface-tags'); if (tags) tags.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('')
  const main = document.querySelector('#screen-main'); if (main) { main.src = data.home; main.alt = `${key} interface home screen` }
  const secondary = document.querySelector('#screen-secondary'); if (secondary) { secondary.src = data.player; secondary.alt = `${key} interface player screen` }
}
document.querySelectorAll('.interface-tab').forEach(tab => tab.addEventListener('click', () => setInterface(tab.dataset.interface)))
document.querySelectorAll('.arrow-button').forEach(button => button.addEventListener('click', () => setInterface(button.dataset.step === 'next' ? (document.querySelector('.interface-tab.active')?.dataset.interface === 'classic' ? 'humble' : 'classic') : (document.querySelector('.interface-tab.active')?.dataset.interface === 'classic' ? 'humble' : 'classic'))))

// Release data is shared by the download page and the update page.
async function loadReleaseManifest() {
  try {
    const response = await fetch(`/update.json?v=${Date.now()}`, {cache:'no-store'})
    if (!response.ok) throw new Error(`Manifest returned ${response.status}`)
    const release = await response.json()
    const version = String(release.latestVersion || '2.3.1')
    document.querySelectorAll('#release-version, #release-version-small').forEach(node => node.textContent = version)
    const updatesVersion = document.querySelector('#updates-version'); if (updatesVersion) updatesVersion.textContent = `HUMBLE MUSIC ${version}`
    const date = document.querySelector('#release-date'); if (date && release.releaseDate) date.textContent = `Published ${new Date(`${release.releaseDate}T12:00:00`).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}`
    const list = document.querySelector('#updates-changelog')
    if (list) { const items = Array.isArray(release.changelog) ? release.changelog : []; list.innerHTML = ''; (items.length ? items : ['Release notes will be published with each version.']).forEach(item => { const li = document.createElement('li'); li.textContent = item; list.append(li) }) }
  } catch (error) { console.warn('HUMBLE MUSIC release manifest could not be loaded.', error) }
}
loadReleaseManifest()

// Adsterra responsive banner. Each format runs in its own iframe so its
// atOptions global cannot collide with the other banner sizes.
function loadAdsterraBanner() {
  const slot = document.querySelector('#adsterra-banner-slot')
  if (!slot) return
  const width = window.innerWidth
  const format = width >= 900
    ? { width: 728, height: 90, key: '904c40f40fae339299065354b65663a1', src: 'https://bauval.org/22/904c40f40fae339299065354b65663a1' }
    : width >= 600
      ? { width: 300, height: 250, key: '03d4570fff0e14667c8338ef84dbb878', src: 'https://bauval.org/22/03d4570fff0e14667c8338ef84dbb878' }
      : { width: 320, height: 50, key: '46e607ec8f783cd3faeeda1b243e8eed', src: 'https://bauval.org/22/46e607ec8f783cd3faeeda1b243e8eed' }

  slot.replaceChildren()
  const frame = document.createElement('iframe')
  frame.title = 'Advertisement'
  frame.width = String(format.width)
  frame.height = String(format.height)
  frame.loading = 'lazy'
  frame.referrerPolicy = 'no-referrer-when-downgrade'
  frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox')
  frame.srcdoc = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden;width:${format.width}px;height:${format.height}px}</style></head><body><script>var atOptions={key:'${format.key}',format:'iframe',height:${format.height},width:${format.width},params:{}};<\/script><script src="${format.src}"><\/script></body></html>`
  slot.append(frame)
}
if (document.querySelector('#adsterra-banner-slot')) {
  loadAdsterraBanner()
  let adResizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(adResizeTimer)
    adResizeTimer = setTimeout(loadAdsterraBanner, 350)
  }, {passive:true})
}

// The download countdown is a short preparation step. Adsterra Social Bar
// runs independently and is not represented as a guaranteed interstitial.
const adModal = document.querySelector('#download-modal')
if (adModal) {
  const title = adModal.querySelector('#modal-title'), timer = adModal.querySelector('#modal-countdown'), progress = adModal.querySelector('.countdown-progress'), status = adModal.querySelector('#modal-status'), close = adModal.querySelector('.modal-close')
  let interval = null, selectedUrl = '', remaining = 15
  function finishDownload() { clearInterval(interval); interval = null; if (!selectedUrl) return; status.textContent = 'Your download is starting…'; window.location.assign(selectedUrl); setTimeout(() => { adModal.hidden = true; document.body.classList.remove('modal-open') }, 650) }
  function stop() { clearInterval(interval); interval = null; adModal.hidden = true; document.body.classList.remove('modal-open') }
  document.querySelectorAll('.download-trigger').forEach(button => button.addEventListener('click', () => {
    selectedUrl = button.dataset.arch === 'arm64' ? RELEASE.arm64 : RELEASE.arm32
    remaining = 15; timer.textContent = String(remaining); progress.style.transform = 'scaleX(0)'; status.textContent = 'Preparing your download'; title.textContent = `Your ${button.dataset.arch.toUpperCase()} download is almost ready.`
    adModal.hidden = false; document.body.classList.add('modal-open')
    interval = setInterval(() => { remaining -= 1; timer.textContent = String(remaining); progress.style.transform = `scaleX(${(15-remaining)/15})`; if (remaining <= 0) finishDownload() }, 1000)
  }))
  close?.addEventListener('click', stop)
  adModal.addEventListener('click', event => { if (event.target === adModal) stop() })
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !adModal.hidden) stop() })
}

// Optional cookie notice: dismissed choice is stored locally.
const cookieKey = 'humble-cookie-notice-dismissed-v2'
try {
  if (!localStorage.getItem(cookieKey)) {
    const banner = document.createElement('aside')
    banner.className = 'cookie-banner'
    banner.innerHTML = `<div><b>A small note about this site.</b><p>We use local storage for simple site preferences. See the <a href="/cookies">cookie notice</a>.</p></div><button type="button" class="cookie-accept">Got it</button>`
    document.body.append(banner)
    banner.querySelector('button').addEventListener('click', () => { localStorage.setItem(cookieKey, '1'); banner.remove() })
  }
} catch { /* Storage may be disabled by the browser. */ }

// Lightweight entrance motion; respects users who prefer reduced motion.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), {threshold:0.12})
  document.querySelectorAll('.reveal, .feature-card, .platform-card, .screen').forEach(el => observer.observe(el))
} else document.querySelectorAll('.reveal, .feature-card, .platform-card, .screen').forEach(el => el.classList.add('is-visible'))
