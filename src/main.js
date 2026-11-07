import './style.css'

const app = document.querySelector('#app')
const path = window.location.pathname.replace(/\/+$/, '') || '/'

const nav = `
<header class="nav wrap">
  <a class="brand" href="/"><span class="brand-mark">H</span><span>HUMBLE<span class="muted"> MUSIC</span></span></a>
  <nav><a href="#features">Features</a><a href="/updates">Updates</a><a href="/privacy">Privacy</a></nav>
  <a class="nav-cta" href="/download">Get the app <span>↗</span></a>
</header>`

const footer = `
<footer class="footer wrap">
  <div><a class="brand" href="/"><span class="brand-mark small">H</span><span>HUMBLE<span class="muted"> MUSIC</span></span></a><p>Music. Design. Identity.</p></div>
  <div class="foot-links"><a href="/download">Download</a><a href="/updates">Updates</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
  <small>© ${new Date().getFullYear()} HUMBLE Studio. All rights reserved.</small>
</footer>`

const home = `
${nav}
<main>
<section class="hero wrap">
  <div class="eyebrow"><i></i> AN INDEPENDENT MUSIC EXPERIENCE</div>
  <h1>Sound, with a<br><span class="gradient">HUMBLE</span> identity.</h1>
  <p class="lead">A thoughtfully crafted music experience, built around the details that matter.</p>
  <div class="actions"><a class="button primary" href="/download">Explore HUMBLE MUSIC <b>↗</b></a><a class="button secondary" href="#features">Discover more</a></div>
  <div class="hero-meta"><span><b class="dot green"></b> Android</span><span><b class="dot pink"></b> HUMBLE UI</span><span><b class="dot olive"></b> Made by HUMBLE Studio</span></div>
  <div class="orb orb-one"></div><div class="orb orb-two"></div>
</section>
<section class="feature-section wrap" id="features">
  <div class="section-head"><div><div class="eyebrow">THE EXPERIENCE</div><h2>Less noise.<br>More music.</h2></div><p>Designed with a clear visual language, expressive motion and a focused listening experience.</p></div>
  <div class="cards">
    <article class="feature-card"><span class="num">01</span><div class="feature-icon pink-icon">◈</div><h3>HUMBLE UI</h3><p>A distinct interface with a dark, immersive atmosphere and carefully tuned details.</p></article>
    <article class="feature-card"><span class="num">02</span><div class="feature-icon green-icon">♫</div><h3>Your listening space</h3><p>A personal music experience with an emphasis on clarity and usability.</p></article>
    <article class="feature-card"><span class="num">03</span><div class="feature-icon olive-icon">↗</div><h3>Always improving</h3><p>Follow official releases and get the latest app version from one trusted place.</p></article>
  </div>
</section>
<section class="download-band wrap"><div><div class="eyebrow">READY WHEN YOU ARE</div><h2>Meet your new<br>music space.</h2><p>Get HUMBLE MUSIC from the official download page.</p></div><a class="button primary" href="/download">Go to download <b>↗</b></a></section>
</main>
${footer}`

const download = `
${nav}
<main class="subpage wrap">
  <div class="eyebrow"><i></i> OFFICIAL ANDROID RELEASE</div>
  <h1>Get <span class="gradient">HUMBLE MUSIC.</span></h1>
  <p class="lead">Download the Android app from the official HUMBLE MUSIC release page.</p>
  <section class="release-card">
    <div class="release-top"><span class="release-icon">H</span><div><h2>HUMBLE MUSIC for Android</h2><p>Official APK distribution</p></div><span class="status">RELEASE PAGE</span></div>
    <div class="release-placeholder"><span class="download-symbol">↓</span><h3>First release is being prepared</h3><p>The signed APK will appear here when the public release is ready.</p></div>
    <p class="notice">Only install APK files published on this official website. Android may ask you to confirm installation and allow installs from your browser.</p>
  </section>
  <p class="backlink"><a href="/">← Back to home</a></p>
</main>
${footer}`

const updates = `
${nav}
<main class="subpage wrap">
  <div class="eyebrow">RELEASE NOTES</div><h1>Updates & <span class="gradient">changes.</span></h1>
  <p class="lead">Official HUMBLE MUSIC version history will be published here.</p>
  <section class="release-card"><span class="status">UPDATE CHANNEL</span><h2>Release history</h2><p class="muted">No public release notes have been published yet. Check back when the first official release is available.</p></section>
</main>
${footer}`

const legal = (title, body) => `${nav}<main class="subpage wrap"><div class="eyebrow">HUMBLE STUDIO</div><h1>${title}</h1><p class="lead">${body}</p><section class="release-card"><h2>Information</h2><p>This page is a starter placeholder. Before public launch, replace it with the complete policy and contact details applicable to the released app and its services.</p></section></main>${footer}`

app.innerHTML = path === '/download' ? download : path === '/updates' ? updates : path === '/privacy' ? legal('Privacy <span class="gradient">policy.</span>','The privacy policy for HUMBLE MUSIC.') : path === '/terms' ? legal('Terms of <span class="gradient">use.</span>','Terms for using HUMBLE MUSIC.') : home