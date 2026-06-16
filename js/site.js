/* Pyramid Construction DMV — Site JS v2 */

const PHONE      = '703-297-1991';
const PHONE_HREF = 'tel:+17032971991';
const SMS_HREF   = 'sms:+17032971991';
const EMAIL      = 'Pyramidconstruction.dmv@gmail.com';
const EMAIL_HREF = 'mailto:Pyramidconstruction.dmv@gmail.com';
const GBP        = 'https://share.google/6MjSduVZNhITtfzyX';
const IG         = 'https://www.instagram.com/pyramidconstruction.dmv/';
const FB         = 'https://www.facebook.com/PyramidConstructionDMV';

/* ---- SVG Icons ---- */
const SVG = {
  phone:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>`,
  sms:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`,
  email:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  shield: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  star:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  map:    `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>`,
  check:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
  fb:     `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  ig:     `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  gbp:    `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>`,
  g_logo: `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`,
};

/* ---- Nav HTML ---- */
function navHTML() {
  return `
<header id="site-header">
  <div class="nav-inner">
    <a href="/index.html" class="nav-brand">
      <img src="/assets/logo/logo.png" alt="Pyramid Construction DMV logo" class="nav-logo" width="60" height="60">
      <div class="nav-brand-text">
        <span class="name">Pyramid Construction</span>
        <span class="sub">DMV</span>
      </div>
    </a>

    <nav aria-label="Main" class="nav-menu-dt" id="desktop-nav">
      <ul style="display:flex;list-style:none;align-items:center;margin:0;padding:0">
        <li>
          <button class="drop-btn" aria-haspopup="true">Services ▾</button>
          <ul class="dropdown" role="menu" style="list-style:none">
            <li><a href="/roofing.html">Roofing</a></li>
            <li><a href="/windows.html">Window Replacement</a></li>
            <li><a href="/doors.html">Door Replacement</a></li>
            <li><a href="/gutters.html">Gutters</a></li>
            <li><a href="/siding.html">Siding</a></li>
            <li><a href="/storm-damage.html">Storm Damage</a></li>
            <li><a href="/fascia-trim.html">Fascia &amp; Trim Repair</a></li>
            <li><a href="/garage-doors.html">Garage Doors</a></li>
            <li><a href="/interior.html">Interior Renovation</a></li>
          </ul>
        </li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/reviews.html">Reviews</a></li>
        <li><a href="/service-areas.html">Service Areas</a></li>
        <li><a href="/contact.html">Contact</a></li>
        <li><a href="/careers.html">Careers</a></li>
        <li><a href="/contact.html" class="nav-cta">Free Estimate</a></li>
      </ul>
    </nav>

    <div class="nav-phone-dt">
      <a href="${PHONE_HREF}">${SVG.phone} ${PHONE}</a>
    </div>

    <button class="hamburger" id="ham-btn" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>

  <nav id="mobile-nav" aria-label="Mobile navigation">
    <ul class="mob-links" style="list-style:none">
      <li>
        <details>
          <summary>Services</summary>
          <ul class="mob-submenu" style="list-style:none">
            <li><a href="/roofing.html">Roofing</a></li>
            <li><a href="/windows.html">Window Replacement</a></li>
            <li><a href="/doors.html">Door Replacement</a></li>
            <li><a href="/gutters.html">Gutters</a></li>
            <li><a href="/siding.html">Siding</a></li>
            <li><a href="/storm-damage.html">Storm Damage</a></li>
            <li><a href="/fascia-trim.html">Fascia &amp; Trim Repair</a></li>
            <li><a href="/garage-doors.html">Garage Doors</a></li>
            <li><a href="/interior.html">Interior Renovation</a></li>
          </ul>
        </details>
      </li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/reviews.html">Reviews</a></li>
      <li><a href="/service-areas.html">Service Areas</a></li>
      <li><a href="/contact.html">Contact</a></li>
      <li><a href="/careers.html">Careers</a></li>
    </ul>
    <div class="mob-ctas">
      <a href="${PHONE_HREF}" class="btn btn-primary btn-full">${SVG.phone} Call ${PHONE}</a>
      <a href="/contact.html" class="btn btn-outline-white btn-full">Free Estimate</a>
    </div>
  </nav>
</header>`;
}

/* ---- Footer HTML ---- */
function footerHTML() {
  const yr = new Date().getFullYear();
  return `
<footer id="site-footer">
  <div class="container">
    <div class="foot-grid">
      <div>
        <img src="/assets/logo/logo.png" alt="Pyramid Construction DMV" class="foot-logo" width="60" height="60" loading="lazy">
        <div class="foot-name">Pyramid Construction DMV</div>
        <p class="foot-tagline">Northern Virginia's trusted general contractor. Free inspections, honest pricing, quality work.</p>
        <div class="foot-license">${SVG.shield} Licensed, Bonded &amp; Insured in Virginia</div>
        <div class="foot-contact">${SVG.phone}<a href="${PHONE_HREF}">${PHONE}</a></div>
        <div class="foot-contact">${SVG.email}<a href="${EMAIL_HREF}" style="word-break:break-all">${EMAIL}</a></div>
        <div class="social">
          <a href="${FB}" target="_blank" rel="noopener" aria-label="Facebook">${SVG.fb}</a>
          <a href="${IG}" target="_blank" rel="noopener" aria-label="Instagram">${SVG.ig}</a>
          <a href="${GBP}" target="_blank" rel="noopener" aria-label="Google Business">${SVG.gbp}</a>
        </div>
      </div>
      <div>
        <div class="foot-col-title">Services</div>
        <div class="foot-links">
          <a href="/roofing.html">Roofing</a>
          <a href="/windows.html">Window Replacement</a>
          <a href="/doors.html">Door Replacement</a>
          <a href="/gutters.html">Gutters</a>
          <a href="/siding.html">Siding</a>
          <a href="/storm-damage.html">Storm Damage</a>
          <a href="/fascia-trim.html">Fascia &amp; Trim Repair</a>
          <a href="/garage-doors.html">Garage Doors</a>
          <a href="/interior.html">Interior Renovation</a>
        </div>
      </div>
      <div>
        <div class="foot-col-title">Company</div>
        <div class="foot-links">
          <a href="/about.html">About Us</a>
          <a href="/reviews.html">Reviews</a>
          <a href="/service-areas.html">Service Areas</a>
          <a href="/contact.html">Contact</a>
          <a href="${GBP}" target="_blank" rel="noopener">Google Business</a>
        </div>
      </div>
      <div>
        <div class="foot-col-title">Areas We Serve</div>
        <div class="foot-links">
          <a href="/manassas-roofing.html">Manassas, VA</a>
          <a href="/fairfax-windows.html">Fairfax, VA</a>
          <a href="/ashburn-gutters.html">Ashburn, VA</a>
          <a href="/loudoun-roofing.html">Loudoun County</a>
          <a href="/northern-virginia-exterior.html">Northern Virginia</a>
          <a href="/prince-william-siding.html">Prince William Co.</a>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© ${yr} Pyramid Construction DMV. All rights reserved.</span>
      <span>Virginia Class A Contractor · Licensed, Bonded &amp; Insured</span>
    </div>
  </div>
</footer>

<div id="sticky-bar" role="complementary" aria-label="Quick contact">
  <a href="${PHONE_HREF}">${SVG.phone} Call Now</a>
  <div class="bar-div"></div>
  <a href="${SMS_HREF}">${SVG.sms} Text Us</a>
  <div class="bar-div"></div>
  <a href="/contact.html" style="font-size:.8rem">✏️ Free Estimate</a>
</div>`;
}

/* ---- Review card helper ---- */
function reviewCard(text, name) {
  return `<div class="review-card reveal">
    <div class="stars">★★★★★</div>
    <p class="review-text">"${text}"</p>
    <div class="review-name">${name}</div>
    <div class="review-platform">${SVG.g_logo} Google Review</div>
  </div>`;
}

/* ---- Scroll Reveal (Intersection Observer) ---- */
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    io.observe(el);
  });
}

/* ---- Animated Number Counter ---- */
function animateCounters() {
  const counterEls = document.querySelectorAll('.counter[data-target]');
  if (!counterEls.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1600;
      const start = performance.now();
      const isFloat = target % 1 !== 0;

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = target * ease;
        el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => io.observe(el));
}

/* ---- Initialise ---- */
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav & footer
  const navEl    = document.getElementById('nav-ph');
  const footerEl = document.getElementById('footer-ph');
  if (navEl)    navEl.innerHTML    = navHTML();
  if (footerEl) footerEl.innerHTML = footerHTML();

  // Hamburger toggle
  document.addEventListener('click', e => {
    const btn = e.target.closest('#ham-btn');
    if (btn) {
      const menu   = document.getElementById('mobile-nav');
      const isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
      return;
    }
    // Close on outside click
    const header = document.querySelector('#site-header');
    if (header && !header.contains(e.target)) {
      const menu = document.getElementById('mobile-nav');
      const btn2 = document.getElementById('ham-btn');
      if (menu && btn2) {
        menu.classList.remove('open');
        btn2.classList.remove('open');
        btn2.setAttribute('aria-expanded', false);
      }
    }
  });

  // Active nav highlight
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-header a').forEach(a => {
    const h = (a.getAttribute('href') || '').split('/').pop();
    if (h && h === page) a.style.color = 'var(--gold)';
  });

  // Contact form
  const form = document.getElementById('estimate-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      const ok  = document.getElementById('form-ok');
      btn.disabled = true;
      btn.textContent = 'Sending…';
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          form.style.display = 'none';
          if (ok) ok.style.display = 'block';
        } else {
          btn.disabled = false;
          btn.textContent = 'Request Free Estimate';
          alert('Submission error — please call us at 703-297-1991.');
        }
      } catch {
        btn.disabled = false;
        btn.textContent = 'Request Free Estimate';
        alert('Network error — please call us at 703-297-1991.');
      }
    });
  }

  // Init animations after nav/footer injection
  requestAnimationFrame(() => {
    initScrollReveal();
    animateCounters();
  });
});
