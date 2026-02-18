// ============================================
// GROWWSTACKS PAGE BUILDER
// Loads shared components + injects config values
// Include AFTER site-config.js on every page
// ============================================

(function () {
  'use strict';

  // --- Determine relative path to _shared/ ---
  // Works at any folder depth on Cloudflare Pages
  const pathSegments = window.location.pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const depth = pathSegments.length; // 0 for homepage, 2 for /services/voice-ai/
  const prefix = depth === 0 ? './_shared/' : '../'.repeat(depth) + '_shared/';

  // --- Components to inject ---
  // Each id matches a <div id="gs-xxx"></div> placeholder in the page
  const COMPONENTS = [
    { id: 'gs-navbar',       file: 'components/navbar.html' },
    { id: 'gs-footer',       file: 'components/footer.html' },
    { id: 'gs-consult-form', file: 'components/consult-form.html' },
    { id: 'gs-ticker',       file: 'components/platform-ticker.html' },
    { id: 'gs-partners',     file: 'components/partner-badges.html' },
    { id: 'gs-stats',        file: 'components/stats-bar.html' },
    { id: 'gs-mid-cta',      file: 'components/mid-cta.html' },
    { id: 'gs-schema',       file: 'components/schema-org.html' },
  ];

  // --- Token map: {{TOKEN}} → value ---
  function buildTokenMap() {
    if (typeof SITE === 'undefined') {
      console.error('page-builder.js: SITE config not found. Load site-config.js first.');
      return {};
    }
    return {
      '{{SITE.name}}':                    SITE.name,
      '{{SITE.tagline}}':                 SITE.tagline,
      '{{SITE.legalName}}':               SITE.legalName,
      '{{SITE.domain}}':                  SITE.domain,
      '{{SITE.phone}}':                   SITE.phone,
      '{{SITE.phoneTel}}':                SITE.phoneTel,
      '{{SITE.email}}':                   SITE.email,
      '{{SITE.googleAdsId}}':             SITE.googleAdsId,
      '{{SITE.formWebhookUrl}}':          SITE.formWebhookUrl,
      '{{SITE.thankYouPage}}':            SITE.thankYouPage,
      '{{SITE.imagekit.favicon}}':        SITE.imagekit.favicon,
      '{{SITE.stats.projects}}':          SITE.stats.projects,
      '{{SITE.stats.clients}}':           SITE.stats.clients,
      '{{SITE.stats.experts}}':           SITE.stats.experts,
      '{{SITE.stats.costReduction}}':     SITE.stats.costReduction,
      '{{SITE.stats.googleRating}}':      SITE.stats.googleRating,
      '{{SITE.social.linkedin}}':         SITE.social.linkedin,
      '{{SITE.social.upwork}}':           SITE.social.upwork,
      '{{SITE.social.googleReviews}}':    SITE.social.googleReviews,
      '{{SITE.addressUS.street}}':        SITE.addressUS.street,
      '{{SITE.addressUS.city}}':          SITE.addressUS.city,
      '{{SITE.addressUS.state}}':         SITE.addressUS.state,
      '{{SITE.addressUS.flag}}':          SITE.addressUS.flag,
      '{{SITE.addressIN.city}}':          SITE.addressIN.city,
      '{{SITE.addressIN.flag}}':          SITE.addressIN.flag,
      '{{SITE.logos.make}}':              SITE.logos.make,
      '{{SITE.logos.monday}}':            SITE.logos.monday,
      '{{SITE.logos.zapier}}':            SITE.logos.zapier,
      '{{SITE.logos.n8n}}':               SITE.logos.n8n,
      '{{SITE.logos.microsoft}}':         SITE.logos.microsoft,
      '{{SITE.logos.airtable}}':          SITE.logos.airtable,
      '{{SITE.logos.vapi}}':              SITE.logos.vapi,
      '{{SITE.logos.retell}}':            SITE.logos.retell,
      '{{SITE.logos.google}}':            SITE.logos.google,
      '{{SITE.logos.upwork}}':            SITE.logos.upwork,
      '{{YEAR}}':                         String(new Date().getFullYear()),
    };
  }

  // --- Replace all {{TOKENS}} in HTML string ---
  function replaceTokens(html) {
    const tokens = buildTokenMap();
    for (const [token, value] of Object.entries(tokens)) {
      html = html.split(token).join(value || '');
    }
    return html;
  }

  // --- Activate <script> tags inside injected HTML ---
  function activateScripts(container) {
    container.querySelectorAll('script').forEach(oldScript => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr =>
        newScript.setAttribute(attr.name, attr.value)
      );
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

  // --- Load a single component ---
  function loadComponent(comp) {
    const el = document.getElementById(comp.id);
    if (!el) return; // Page doesn't use this component — skip silently

    fetch(prefix + comp.file)
      .then(res => {
        if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
        return res.text();
      })
      .then(html => {
        el.innerHTML = replaceTokens(html);
        activateScripts(el);
      })
      .catch(err => {
        console.warn('[page-builder] Could not load ' + comp.id + ':', err.message);
      });
  }

  // --- Init: load all components ---
  COMPONENTS.forEach(loadComponent);

  // --- Shared Scripts (run after DOM is ready) ---
  // Sticky nav shadow
  window.addEventListener('scroll', function () {
    const nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Smooth scroll for anchor links
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = 80;
      const pos = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  });

  // YouTube Lite Facade — click to load
  document.addEventListener('click', function (e) {
    const facade = e.target.closest('.yt-facade');
    if (!facade) return;
    const videoId = facade.dataset.videoId;
    if (!videoId) return;
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
    iframe.title = facade.getAttribute('aria-label') || 'YouTube video';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;';
    facade.style.position = 'relative';
    facade.innerHTML = '';
    facade.appendChild(iframe);
  });

  // FAQ accordion (delegated)
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.faq-q');
    if (!btn) return;
    const item = btn.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('active'); });
    if (!wasActive) item.classList.add('active');
  });

})();
