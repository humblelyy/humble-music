import './style.css'

const ROOT = ''
// DOWNLOAD LINKS: Update RELEASE.arm64 / RELEASE.arm32 when new APKs are published.
// iOS and Android TV are intentionally unavailable until official packages are ready.
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
    <nav class="desktop-nav" aria-label="Main navigation"><a href="/#about">About</a><a href="/#interfaces">App screens</a><a href="/download">Download</a><a href="/updates" class="whats-new-link" aria-describedby="whats-new-preview">What's new</a><a href="/dev">Developer</a></nav>
    <a class="nav-download" href="/download">Get HUMBLE <span>↗</span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
  </div>
  <aside class="whats-new-preview" id="whats-new-preview" aria-hidden="true"><span class="preview-kicker">LATEST UPDATE</span><strong id="preview-version">HUMBLE MUSIC 2.3.1</strong><ul id="preview-changelog"><li>Release notes loading…</li></ul><a href="/updates">View all updates ↗</a></aside>
  <div class="mobile-menu" hidden><a href="/#about">About</a><a href="/#interfaces">App screens</a><a href="/download">Download</a><a href="/updates">What's new</a><a href="/dev">Developer</a></div>
</header>`

const footer = `
<footer class="footer wrap">
  <div class="footer-main"><div class="brand footer-brand"><img src="${logo}" alt=""/><span>HUMBLE<span class="brand-light"> MUSIC</span></span></div><p>Android music app by HUMBLE Studio.</p></div>
  <div class="footer-links"><a href="/download">Download</a><a href="/updates">Updates</a><a href="https://github.com/humblelyy/humble-music/releases" target="_blank" rel="noopener">GitHub releases ↗</a><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a></div>
  <div class="footer-bottom"><span>© ${new Date().getFullYear()} HUMBLE Studio</span><span>Independent project · Not affiliated with Spotify</span></div>
</footer>`

const home = `${nav}<main>
<section class="hero wrap">
  <div class="hero-copy reveal"><div class="eyebrow"><span class="eyebrow-line"></span> HUMBLE MUSIC · ANDROID</div><h1>Listen your way.<br><span class="hero-italic">Make it yours.</span></h1><p class="hero-description">Spotify library, with two distinct ways to listen. Pick the interface that feels right and keep your music close.</p><div class="hero-actions"><a class="button button-light" href="/download">Get HUMBLE <span>↗</span></a><a class="text-button" href="#interfaces">View app screens <span>↓</span></a></div><div class="hero-footnote"><span class="availability-dot"></span> Available for Android <span class="footnote-divider">/</span> iOS and Android TV coming soon</div></div>
  <div class="hero-visual reveal"><div class="hero-glow"></div><div class="hero-device device-back"><img src="/assets/humble-player.jpeg" alt="HUMBLE UI music player"/></div><div class="hero-device device-front"><img src="/assets/classic-home.jpeg" alt="Classic interface home screen"/></div><div class="floating-note"><span class="note-dot"></span><span><b>Two interfaces</b><small>Classic UI and HUMBLE UI</small></span></div><div class="visual-index">H / 02</div></div>
</section>

<section class="intro-section wrap" id="about"><div class="section-kicker">01 — ABOUT THE APP</div><div class="intro-grid"><h2>Made for your<br><span>music routine.</span></h2><div class="intro-copy"><p>Sign in with Spotify to access your playlists, liked songs and library. Switch between Classic UI and HUMBLE UI whenever you want.</p><a class="inline-link" href="#interfaces">Explore the app <span>↗</span></a></div></div></section>
<section class="interface-section wrap" id="interfaces"><div class="section-top"><div><div class="section-kicker">02 — APP INTERFACES</div><h2>Two ways to <em>listen.</em></h2></div><div class="interface-controls" role="tablist" aria-label="Choose app interface"><button class="interface-tab active" data-interface="classic" role="tab" aria-selected="true">Classic UI</button><button class="interface-tab" data-interface="humble" role="tab" aria-selected="false">HUMBLE UI</button></div></div>
<div class="interface-showcase"><div class="interface-copy"><div class="interface-count" id="interface-count">01 / 02</div><h3 id="interface-title">Classic UI</h3><p id="interface-description">A straightforward layout for browsing your library, finding playlists and getting to playback controls quickly.</p><div class="interface-tags" id="interface-tags"><span>Familiar controls</span><span>Playlists</span><span>Music library</span></div><div class="interface-arrows"><button class="arrow-button" data-step="prev" aria-label="Previous interface">←</button><button class="arrow-button" data-step="next" aria-label="Next interface">→</button></div></div><div class="interface-images" id="interface-images"><figure class="screen screen-main"><img id="screen-main" src="/assets/classic-home.jpeg" alt="Classic UI home screen"/><figcaption>HOME</figcaption></figure><figure class="screen screen-secondary"><img id="screen-secondary" src="/assets/classic-player.jpeg" alt="Classic UI player screen"/><figcaption>NOW PLAYING</figcaption></figure></div></div></section>
<section class="details-section"><div class="wrap details-inner"><div class="section-kicker">03 — APP DETAILS</div><h2>Built around <em>your listening.</em></h2><div class="detail-grid"><article><span class="detail-number">01</span><div class="detail-symbol">♫</div><h3>Spotify library</h3><p>Your playlists, liked songs and saved tracks in one place.</p></article><article><span class="detail-number">02</span><div class="detail-symbol">◈</div><h3>No audio ads</h3><p>Enjoy playback without Spotify Free audio ads.</p></article><article><span class="detail-number">03</span><div class="detail-symbol">♬</div><h3>Lossless support</h3><p>Lossless playback where supported by the source and device.</p></article><article><span class="detail-number">04</span><div class="detail-symbol">↗</div><h3>Audio quality</h3><p>Choose the quality that suits your listening setup.</p></article></div></div></section>
<section class="platform-section wrap"><div class="section-kicker">04 — PLATFORMS</div><div class="platform-heading"><h2>Available <em>platforms.</em></h2><p>The Android version is available now. iOS and Android TV versions are not available yet.</p></div><div class="platform-grid"><a class="platform-card available" href="/download"><div class="platform-icon android-icon">${platformMarks.android}</div><div><h3>Android</h3><p>Available now · ARM64 / ARM32</p></div><span class="platform-arrow">↗</span></a><div class="platform-card coming" aria-disabled="true" title="Unavailable"><div class="platform-icon apple-icon">${platformMarks.apple}</div><div><h3>iOS</h3><p>Coming soon</p></div><span class="coming-label"> UNAVAILABLE </span></div><div class="platform-card coming" aria-disabled="true" title="Unavailable"><div class="platform-icon tv-icon">${platformMarks.androidtv}</div><div><h3>Android TV</h3><p>Coming soon</p></div><span class="coming-label">UNAVAILABLE </span></div></div></section>
<section class="ad-section wrap" id="advertisement"><div class="ad-section-heading"><div><div class="section-kicker">HOMEPAGE ADVERTISEMENT</div><h2>Sponsored<span>.</span></h2></div><span class="ad-label-pill">ADVERTISEMENT</span></div><div class="adsterra-banner-frame" id="adsterra-banner-slot" aria-label="Advertisement"><div class="adsterra-loading"><strong>Advertisement</strong><small>Ad space · Ads may not appear with blockers or limited inventory.</small></div></div><div class="additional-ad-grid" aria-label="Additional advertisement placements"><div class="additional-ad-slot" id="ad-300x250"><span>ADVERTISEMENT</span></div><div class="additional-ad-slot" id="ad-160x300"><span>ADVERTISEMENT</span></div><div class="additional-ad-slot additional-ad-wide" id="ad-728x90"><span>ADVERTISEMENT</span></div><div class="additional-ad-slot additional-ad-mobile" id="ad-320x50"><span>ADVERTISEMENT</span></div><div id="container-5da5f87f818aa673503a23100996a38c"></div></div><p class="ad-disclosure">Advertisement · Served by Adsterra. Availability and format may vary by device and visitor.</p></section>
<section class="closing-cta wrap"><div><div class="section-kicker">05 — DOWNLOAD</div><h2>Your music.<br><em>Your interface.</em></h2></div><a class="button button-light" href="/download">Download for Android <span>↗</span></a></section>
</main>${footer}`

// MANUAL PLATFORM LINK CONFIGURATION: Android APK URLs are defined in RELEASE.arm64 and RELEASE.arm32 above.
// iOS: paste the App Store/TestFlight/IPA distribution URL into its future-platform card href when released.
// Android TV: paste the Android TV APK/release URL into its future-platform card href when released.
// What's New: edit public/update.json (latestVersion, releaseDate, changelog array) — preview and /updates page both read it.
const download = `${nav}<main class="subpage wrap download-page"><div class="section-kicker">HUMBLE MUSIC / DOWNLOAD</div><div class="download-heading"><h1>Download<br><em>HUMBLE MUSIC.</em></h1><p>Select the Android package for your device. iOS and Android TV are coming soon.</p></div>
<section class="platform-downloads"><article class="download-platform selected"><div class="download-platform-head"><span class="platform-icon brand-platform-icon"><img src="/assets/platforms/android.svg" alt="Android logo"></span><span class="availability-pill"><i></i> AVAILABLE NOW</span></div><h2>Android</h2><p>Choose the APK that matches your device's processor architecture.</p><div class="architecture-grid"><article class="architecture-card"><div class="architecture-top"><strong>64</strong><span>RECOMMENDED</span></div><h3>ARM 64-bit</h3><p>For most modern Android phones.<br><code>arm64-v8a</code></p><button class="button button-light download-trigger" data-arch="arm64">Download ARM64 <span>↓</span></button></article><article class="architecture-card"><div class="architecture-top"><strong>32</strong><span>COMPATIBILITY</span></div><h3>ARM 32-bit</h3><p>For compatible 32-bit Android devices.<br><code>armeabi-v7a</code></p><button class="button button-outline download-trigger" data-arch="arm32">Download ARM32 <span>↓</span></button></article></div><div class="release-info"><span>Current release <b id="release-version">2.3.1</b></span><a href="${RELEASE.tag}" target="_blank" rel="noopener">View release notes ↗</a></div></article>
<div class="future-platforms"><article class="coming-platform" aria-disabled="true"><div class="platform-icon apple-icon">${platformMarks.apple}</div><div><h3>iOS</h3><p>We're working on it.</p></div><span class="coming-label">COMING SOON</span></article><article class="coming-platform" aria-disabled="true"><div class="platform-icon tv-icon">${platformMarks.androidtv}</div><div><h3>Android TV</h3><p>A bigger-screen experience is on the way.</p></div><span class="coming-label">COMING SOON </span></article></div></section>
<section class="download-help"><div><div class="section-kicker">NOT SURE WHICH ONE?</div><h2>64-bit or 32-bit?</h2></div><p>Most Android phones released in recent years use ARM64. ARM32 is intended for older or specifically 32-bit devices. Check your device specifications before installing.</p></section><p class="download-note">Only download APK files from the official HUMBLE MUSIC release links. Android may ask you to allow installation from your browser or file manager.</p></main>${footer}`

const updates = `${nav}<main class="subpage wrap legal-page"><div class="section-kicker">HUMBLE MUSIC / RELEASE NOTES</div><div class="download-heading"><h1>What's<br><em>new.</em></h1><p>Version information and release notes.</p></div><section class="release-card"><div class="release-card-top"><span class="availability-pill"><i></i> CURRENT RELEASE</span><a href="${RELEASE.tag}" target="_blank" rel="noopener">GitHub release ↗</a></div><h2 id="updates-version">HUMBLE MUSIC 2.3.1</h2><p class="release-date" id="release-date">Published 10 November 2026</p><ul id="updates-changelog"><li>Release notes are published with each version.</li></ul><div class="release-card-bottom"><span>HUMBLE MUSIC</span><span>VERSION <b id="release-version-small">2.3.1</b></span></div></section></main>${footer}`

const privacy = `${nav}<main class="subpage wrap legal-page"><div class="section-kicker">HUMBLE STUDIO / LEGAL</div><div class="download-heading"><h1>Privacy<br><em>policy.</em></h1><p>Last updated: 17 November 2026</p></div><section class="legal-content"><h2>1. About this website</h2><p>This website provides information about HUMBLE MUSIC and links to official Android releases. It is operated as an independent project by HUMBLE Studio.</p><h2>2. Information and server logs</h2><p>This website does not currently provide account registration or a contact form. The hosting provider may process standard technical and security logs, including IP address, request time and browser information, to deliver and protect the service.</p><h2>3. Local storage</h2><p>The website uses local storage to remember your interface and cookie-notice preferences. These values remain in your browser.</p><h2>4. Third-party services</h2><p>Download links open GitHub Releases. These services may process data under their own privacy policies. This website does not control third-party services.</p><h2>5. Music service account</h2><p>HUMBLE MUSIC connects to Spotify using a Spotify account. Spotify's own privacy policy and terms govern Spotify's handling of account and listening data. Review the app's disclosures and the relevant service policies before use.</p><h2>6. Advertising</h2><p>This website displays third-party advertising scripts and placements. Advertising providers may process browser/device information and use cookies or similar technologies according to their own policies.</p><h2>7. Contact</h2><p>For questions, visit <a href="https://maheshmadhav.vercel.app/" target="_blank" rel="noopener">the developer website</a>.</p></section></main>${footer}`

const cookies = `${nav}<main class="subpage wrap legal-page"><div class="section-kicker">HUMBLE STUDIO / LEGAL</div><div class="download-heading"><h1>Cookie<br><em>notice.</em></h1><p>Last updated: 17 November 2026</p></div><section class="legal-content"><h2>Current website storage</h2><p>This website uses browser local storage to remember the first-visit advertising support notice and includes third-party advertising scripts that may use cookies or similar technologies.</p><h2>Third-party links</h2><p>When you follow a GitHub release link, that service may use its own cookies or similar technologies under its own policies.</p><h2>Advertising changes</h2><p>Third-party advertising scripts are enabled on this website. Advertising content and tracking technologies are controlled by advertising providers and may vary by browser, region, and visitor settings.</p><h2>Manage your preferences</h2><p>You can clear this site's stored preferences through your browser's site-data settings.</p></section></main>${footer}`

const terms = `${nav}<main class="subpage wrap legal-page"><div class="section-kicker">HUMBLE STUDIO / LEGAL</div><div class="download-heading"><h1>Terms of<br><em>use.</em></h1><p>Last updated: 17 November 2026</p></div><section class="legal-content"><h2>1. Independent project</h2><p>HUMBLE MUSIC is an independent project by HUMBLE Studio. It is not affiliated with, endorsed by, or sponsored by Spotify. Third-party names and trademarks belong to their respective owners.</p><h2>2. Downloads</h2><p>Use the official GitHub release links provided on this website. Check device architecture and compatibility before installing an APK. You are responsible for deciding whether to install software on your device.</p><h2>3. Third-party platforms</h2><p>Spotify, GitHub and other third-party services operate under their own terms and policies. HUMBLE Studio does not control these services.</p><h2>4. Availability and changes</h2><p>Features, releases, links and platform availability may change. We may update, suspend or remove website content.</p><h2>5. No warranty</h2><p>The website and its information are provided on an as-available basis. We do not guarantee uninterrupted availability or compatibility with every device.</p><h2>6. Contact</h2><p>For questions, visit <a href="https://maheshmadhav.vercel.app/" target="_blank" rel="noopener">the developer website</a>.</p></section></main>${footer}`

const pages = {'/': home, '/download': download, '/updates': updates, '/privacy': privacy, '/cookies': cookies, '/terms': terms}
app.innerHTML = pages[path] || home
if (!pages[path]) history.replaceState({}, '', '/')

const menuButton = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
function setMobileMenu(open) {
  if (!menuButton || !mobileMenu) return
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation')
  mobileMenu.hidden = false
  mobileMenu.classList.toggle('menu-open', open)
  if (!open) window.setTimeout(() => { if (menuButton.getAttribute('aria-expanded') !== 'true') mobileMenu.hidden = true }, 240)
}
menuButton?.addEventListener('click', () => setMobileMenu(menuButton.getAttribute('aria-expanded') !== 'true'))
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMobileMenu(false)))
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') setMobileMenu(false) })

const interfaceData = {
  classic: {count:'01 / 02',title:'Classic UI',description:'A straightforward layout for browsing your library, finding playlists and getting to playback controls quickly.',tags:['Familiar controls','Playlists','Music library'],home:'/assets/classic-home.jpeg',player:'/assets/classic-player.jpeg'},
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
    const previewVersion = document.querySelector('#preview-version'); if (previewVersion) previewVersion.textContent = `HUMBLE MUSIC ${version}`
    const previewList = document.querySelector('#preview-changelog'); if (previewList) { const changes = Array.isArray(release.changelog) ? release.changelog : []; previewList.innerHTML = ''; (changes.slice(0,3).length ? changes.slice(0,3) : ['Latest updates will appear here.']).forEach(item => { const li = document.createElement('li'); li.textContent = item; previewList.append(li) }) }
    const list = document.querySelector('#updates-changelog')
    if (list) { const items = Array.isArray(release.changelog) ? release.changelog : []; list.innerHTML = ''; (items.length ? items : ['Release notes will be published with each version.']).forEach(item => { const li = document.createElement('li'); li.textContent = item; list.append(li) }) }
  } catch (error) { console.warn('HUMBLE MUSIC release manifest could not be loaded.', error) }
}
loadReleaseManifest()

// Adsterra responsive banner. Each format runs in its own iframe so its
// atOptions global cannot collide with other banner instances.
function getAdsterraFormat() {
  const width = window.innerWidth
  return width >= 900
    ? { width: 728, height: 90, key: '904c40f40fae339299065354b65663a1', src: 'https://bauval.org/22/904c40f40fae339299065354b65663a1' }
    : width >= 600
      ? { width: 300, height: 250, key: '03d4570fff0e14667c8338ef84dbb878', src: 'https://bauval.org/22/03d4570fff0e14667c8338ef84dbb878' }
      : { width: 320, height: 50, key: '46e607ec8f783cd3faeeda1b243e8eed', src: 'https://bauval.org/22/46e607ec8f783cd3faeeda1b243e8eed' }
}
function createAdsterraFrame(format, title = 'Advertisement') {
  const frame = document.createElement('iframe')
  frame.title = title
  frame.width = String(format.width)
  frame.height = String(format.height)
  frame.loading = 'lazy'
  frame.referrerPolicy = 'no-referrer-when-downgrade'
  frame.srcdoc = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden;width:${format.width}px;height:${format.height}px}</style></head><body><script>var atOptions={key:'${format.key}',format:'iframe',height:${format.height},width:${format.width},params:{}};</script><script src="${format.src}"></script></body></html>`
  return frame
}
function loadAdsterraBanner() {
  const slot = document.querySelector('#adsterra-banner-slot')
  if (!slot) return
  const format = getAdsterraFormat()
  slot.replaceChildren(createAdsterraFrame(format))
}
if (document.querySelector('#adsterra-banner-slot')) {
  loadAdsterraBanner()
  let adResizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(adResizeTimer)
    adResizeTimer = setTimeout(loadAdsterraBanner, 350)
  }, {passive:true})
}

// Additional supplied ad units, isolated in iframes to avoid atOptions collisions.
function mountAd(slotId, width, height, key, url) {
  const slot = document.getElementById(slotId); if (!slot) return;
  const frame = document.createElement('iframe'); frame.title = 'Advertisement'; frame.loading = 'lazy'; frame.width = width; frame.height = height;
  frame.style.cssText = `border:0;display:block;margin:auto;max-width:100%;width:${width}px;height:${height}px;background:transparent`;
  frame.srcdoc = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}</style></head><body><script>var atOptions={key:'${key}',format:'iframe',height:${height},width:${width},params:{}};<\/script><script src="${url}"><\/script></body></html>`;
  slot.replaceChildren(frame);
}
function loadExtraAdUnits(){
  mountAd('ad-300x250',300,250,'03d4570fff0e14667c8338ef84dbb878','https://bauval.org/22/03d4570fff0e14667c8338ef84dbb878');
  mountAd('ad-160x300',160,300,'7d784d8d8a81d18a93d22e22579c1dc3','https://bauval.org/22/7d784d8d8a81d18a93d22e22579c1dc3');
  mountAd('ad-728x90',728,90,'904c40f40fae339299065354b65663a1','https://bauval.org/22/904c40f40fae339299065354b65663a1');
  mountAd('ad-320x50',320,50,'46e607ec8f783cd3faeeda1b243e8eed','https://bauval.org/22/46e607ec8f783cd3faeeda1b243e8eed');
}
if(document.querySelector('.additional-ad-grid')) loadExtraAdUnits();
// Homepage-only supplied ad scripts.
if(path === '/') {
  const s14=document.createElement('script'); s14.dataset.cfasync='false'; s14.src='https://bauval.org/14/9c10f55f9787749f376a390c03bb741a'; document.body.append(s14);
  const s21=document.createElement('script'); s21.async=true; s21.dataset.cfasync='false'; s21.src='https://bauval.org/21/5da5f87f818aa673503a23100996a38c'; document.body.append(s21);
  const sAbs=document.createElement('script'); sAbs.dataset.cfasync='false'; sAbs.src='https://abscloud.org/1/4de5426ade931d8e9e947e945e1ef123'; document.body.append(sAbs);
}

// The download countdown is a short preparation step. Adsterra Social Bar
// runs independently and is not represented as a guaranteed interstitial.
const adModal = document.querySelector('#download-modal')
if (adModal) {
  const title = adModal.querySelector('#modal-title'), timer = adModal.querySelector('#modal-countdown'), progress = adModal.querySelector('.countdown-progress'), status = adModal.querySelector('#modal-status'), close = adModal.querySelector('.modal-close')
  let interval = null, selectedUrl = '', remaining = 15
  const modalAdSlot = adModal.querySelector('#modal-adsterra-slot')
  function loadModalAd() {
    if (!modalAdSlot) return
    // Reuse the homepage's existing 320x50 mobile banner unit in the compact modal.
    const format = window.innerWidth >= 520 ? { width: 300, height: 250, key: '03d4570fff0e14667c8338ef84dbb878', src: 'https://bauval.org/22/03d4570fff0e14667c8338ef84dbb878' } : { width: 320, height: 50, key: '46e607ec8f783cd3faeeda1b243e8eed', src: 'https://bauval.org/22/46e607ec8f783cd3faeeda1b243e8eed' }
    modalAdSlot.replaceChildren(createAdsterraFrame(format, 'Download advertisement'))
  }
  function finishDownload() { clearInterval(interval); interval = null; if (!selectedUrl) return; status.textContent = 'Your download is starting…'; window.location.assign(selectedUrl); setTimeout(() => { adModal.hidden = true; document.body.classList.remove('modal-open') }, 650) }
  function stop() { clearInterval(interval); interval = null; adModal.hidden = true; document.body.classList.remove('modal-open') }
  document.querySelectorAll('.download-trigger').forEach(button => button.addEventListener('click', () => {
    selectedUrl = button.dataset.arch === 'arm64' ? RELEASE.arm64 : RELEASE.arm32
    clearInterval(interval); remaining = 15; timer.textContent = String(remaining); progress.style.transform = 'scaleX(0)'; status.textContent = 'Preparing your download'; title.textContent = `Your ${button.dataset.arch.toUpperCase()} download is almost ready.`
    adModal.hidden = false; document.body.classList.add('modal-open'); loadModalAd()
    interval = setInterval(() => { remaining -= 1; timer.textContent = String(remaining); progress.style.transform = `scaleX(${(15-remaining)/15})`; if (remaining <= 0) finishDownload() }, 1000)
  }))
  close?.addEventListener('click', stop)
  adModal.addEventListener('click', event => { if (event.target === adModal) stop() })
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !adModal.hidden) stop() })
}

// First-visit ad-support notice. This is an informational notice, not an ad consent substitute.
const supportNoticeKey = 'humble-support-notice-v1'
try {
  if (!localStorage.getItem(supportNoticeKey)) {
    const notice = document.createElement('div')
    notice.className = 'support-notice-overlay'
    notice.innerHTML = `<section class="support-notice" role="dialog" aria-modal="true" aria-labelledby="support-notice-title"><div class="support-notice-mark"><img src="/assets/humble-mark.png" alt="HUMBLE MUSIC"></div><div class="section-kicker">A QUICK NOTE</div><h2 id="support-notice-title">Ads help keep HUMBLE MUSIC free.</h2><p>This website may display advertisements. They help support the project and make it possible to keep HUMBLE MUSIC available to everyone for free. Thanks for supporting an independent project.</p><div class="notice-auto"><span>Opening HUMBLE MUSIC</span><span class="notice-progress"></span></div></section>`
    document.body.append(notice)
    window.setTimeout(() => { try { localStorage.setItem(supportNoticeKey, '1') } catch {} notice.classList.add('notice-dismissed'); window.setTimeout(() => { notice.remove(); if (path !== '/') window.location.replace('/') }, 260) }, 2400)
  }
} catch { /* If storage is unavailable, show the notice for this visit. */ }


// Lightweight entrance motion; respects users who prefer reduced motion.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), {threshold:0.12})
  document.querySelectorAll('.reveal, .feature-card, .platform-card, .screen').forEach(el => observer.observe(el))
} else document.querySelectorAll('.reveal, .feature-card, .platform-card, .screen').forEach(el => el.classList.add('is-visible'))

// Subtle pointer interactions for image cards and controls.
const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (motionOK && window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.screen, .architecture-card, .platform-card.available').forEach(el => {
    el.addEventListener('pointermove', event => {
      const rect = el.getBoundingClientRect(), x = (event.clientX - rect.left) / rect.width, y = (event.clientY - rect.top) / rect.height
      el.style.setProperty('--tilt-x', `${(0.5-y)*5}deg`); el.style.setProperty('--tilt-y', `${(x-0.5)*5}deg`)
    })
    el.addEventListener('pointerleave', () => { el.style.setProperty('--tilt-x','0deg'); el.style.setProperty('--tilt-y','0deg') })
  })
  document.querySelectorAll('.button-light, .button-outline, .nav-download').forEach(btn => {
    btn.addEventListener('pointermove', event => { const r=btn.getBoundingClientRect(); btn.style.setProperty('--shine-x', `${event.clientX-r.left}px`); btn.style.setProperty('--shine-y', `${event.clientY-r.top}px`) })
  })
}
// What's New hover preview is populated from update.json and supports keyboard focus.
const whatsNewLink = document.querySelector('.whats-new-link')
const whatsNewPreview = document.querySelector('#whats-new-preview')
if (whatsNewLink && whatsNewPreview) {
  whatsNewLink.addEventListener('mouseenter', () => whatsNewPreview.setAttribute('aria-hidden','false'))
  whatsNewLink.addEventListener('mouseleave', () => whatsNewPreview.setAttribute('aria-hidden','true'))
  whatsNewLink.addEventListener('focus', () => whatsNewPreview.setAttribute('aria-hidden','false'))
  whatsNewLink.addEventListener('blur', () => whatsNewPreview.setAttribute('aria-hidden','true'))
}

// Motion & interaction layer: scroll progress, gentle parallax, tab transitions and magnetic CTA.
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(pointer:fine)').matches
  const progress = document.createElement('div'); progress.className = 'scroll-progress'; document.body.append(progress)
  const header = document.querySelector('.site-header')
  let scrollQueued = false
  const updateScrollUI = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    document.documentElement.style.setProperty('--scroll-progress', max > 0 ? String(window.scrollY / max) : '0')
    header?.classList.toggle('header-scrolled', window.scrollY > 12)
    scrollQueued = false
  }
  updateScrollUI()
  window.addEventListener('scroll', () => { if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScrollUI) } }, {passive:true})

  // Animate additional content in with a stagger, rather than revealing whole blocks at once.
  if (!reduced && 'IntersectionObserver' in window) {
    const motionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); motionObserver.unobserve(entry.target) }
    }), {threshold:.1, rootMargin:'0px 0px -35px 0px'})
    document.querySelectorAll('.detail-grid article,.intro-grid h2,.intro-copy,.section-top,.platform-heading,.closing-cta>div,.closing-cta>.button,.ad-section-heading,.download-heading,.platform-downloads,.release-card,.support-notice').forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index % 5, 4) * 65}ms`
      motionObserver.observe(el)
    })
  } else {
    document.querySelectorAll('.detail-grid article,.intro-grid h2,.intro-copy,.section-top,.platform-heading,.closing-cta>div,.closing-cta>.button,.ad-section-heading,.download-heading,.platform-downloads,.release-card,.support-notice').forEach(el => el.classList.add('is-visible'))
  }

  if (!reduced && finePointer) {
    const visual = document.querySelector('.hero-visual')
    visual?.addEventListener('pointermove', event => {
      const rect = visual.getBoundingClientRect(), px = (event.clientX - rect.left) / rect.width - .5, py = (event.clientY - rect.top) / rect.height - .5
      visual.style.setProperty('--pointer-x', `${px}`); visual.style.setProperty('--pointer-y', `${py}`)
      const glow = visual.querySelector('.hero-glow'), note = visual.querySelector('.floating-note')
      if (glow) glow.style.transform = `translate3d(${px * 24}px,${py * 18}px,0) scale(1.04)`
      if (note) note.style.translate = `${px * 9}px ${py * 7}px`
    })
    visual?.addEventListener('pointerleave', () => {
      const glow = visual.querySelector('.hero-glow'), note = visual.querySelector('.floating-note')
      if (glow) glow.style.transform = ''; if (note) note.style.translate = ''
    })
    document.querySelectorAll('.button-light,.button-outline,.nav-download').forEach(button => {
      button.addEventListener('pointermove', event => {
        const r = button.getBoundingClientRect(), x = (event.clientX - r.left - r.width / 2) * .08, y = (event.clientY - r.top - r.height / 2) * .08
        button.style.transform = `translate3d(${x}px,${y}px,0)`
      })
      button.addEventListener('pointerleave', () => button.style.transform = '')
    })
  }

  // Smooth crossfade the screenshots when switching interface tabs.
  const showcase = document.querySelector('.interface-showcase')
  document.querySelectorAll('.interface-tab,.arrow-button').forEach(control => control.addEventListener('click', () => {
    const images = document.querySelector('.interface-images')
    if (!images || reduced) return
    images.classList.remove('interface-swap'); void images.offsetWidth; images.classList.add('interface-swap')
  }))

  // Small visual tap feedback, without changing button behavior or navigation.
  document.querySelectorAll('.button,.nav-download,.arrow-button,.interface-tab').forEach(control => {
    control.addEventListener('pointerdown', () => { if (!reduced) control.classList.add('is-pressed') })
    const release = () => control.classList.remove('is-pressed')
    control.addEventListener('pointerup', release); control.addEventListener('pointercancel', release); control.addEventListener('pointerleave', release)
  })
})()
