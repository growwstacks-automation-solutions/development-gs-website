/* ═══════════════════════════════════════════════════════════
   CASE STUDIES — Shared JavaScript
   Covers: Site assets init, Hub page filter + cards,
           FAQ accordion (all pages), Tool logos injection
═══════════════════════════════════════════════════════════ */

/* ─── Site Assets Init (reads from site-config.js SITE object) ─── */
(function () {
  if (typeof SITE === 'undefined') return;

  /* Google Ads — inject script tag + init tracking */
  if (SITE.googleAdsId) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', SITE.googleAdsId);

    var gads = document.createElement('script');
    gads.async = true;
    gads.src = 'https://www.googletagmanager.com/gtag/js?id=' + SITE.googleAdsId;
    document.head.appendChild(gads);
  }

  /* Favicon */
  if (SITE.imagekit && SITE.imagekit.favicon) {
    var link = document.querySelector('link[rel="icon"]')
             || document.createElement('link');
    link.rel  = 'icon';
    link.type = 'image/png';
    link.href = SITE.imagekit.favicon;
    if (!link.parentNode) document.head.appendChild(link);
  }

  /* OG image — hub page marks this meta with data-site-favicon */
  if (SITE.imagekit && SITE.imagekit.favicon) {
    var ogImg = document.querySelector('meta[property="og:image"][data-site-favicon]');
    if (ogImg) ogImg.setAttribute('content', SITE.imagekit.favicon);
  }
})();

document.addEventListener('DOMContentLoaded', function () {

  /* ─────────────────────────────────────────────────────────
     HUB PAGE — Empty State "Show All" Button
  ───────────────────────────────────────────────────────── */
  var showAllBtn = document.getElementById('csh-show-all');
  if (showAllBtn) {
    showAllBtn.addEventListener('click', function () {
      var allPill = document.querySelector('.csh-pill[data-filter="all"]');
      if (allPill) allPill.click();
    });
  }

  /* ─────────────────────────────────────────────────────────
     HUB PAGE — Sticky Filter Shadow
  ───────────────────────────────────────────────────────── */
  var filterBar = document.getElementById('csh-filters');
  if (filterBar) {
    window.addEventListener('scroll', function () {
      filterBar.classList.toggle('scrolled', window.scrollY > 200);
    });
  }

  /* ─────────────────────────────────────────────────────────
     HUB PAGE — Filter Pills Logic
  ───────────────────────────────────────────────────────── */
  var pills   = document.querySelectorAll('.csh-pill');
  var cards   = document.querySelectorAll('.csh-card');
  var countEl = document.getElementById('csh-count');
  var emptyEl = document.getElementById('csh-empty');

  if (pills.length) {
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        var filter  = pill.getAttribute('data-filter');
        var visible = 0;

        cards.forEach(function (card) {
          var cats = (card.getAttribute('data-category') || '').split(' ');
          var show = filter === 'all' || cats.indexOf(filter) !== -1;
          card.style.display = show ? '' : 'none';
          if (show) visible++;
        });

        if (countEl) {
          countEl.innerHTML = 'Showing <strong>' + visible + '</strong> project' + (visible !== 1 ? 's' : '');
        }
        if (emptyEl) {
          emptyEl.style.display = visible === 0 ? 'block' : 'none';
        }
      });
    });
  }

  /* ─────────────────────────────────────────────────────────
     HUB PAGE — Card Click → Navigate
  ───────────────────────────────────────────────────────── */
  if (cards.length) {
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        var href = card.getAttribute('data-href');
        if (href) window.location.href = href;
      });
    });
  }

  /* ─────────────────────────────────────────────────────────
     FAQ ACCORDION
     Works for both hub (.csh-faq-q / .csh-faq-item)
     and detail pages (.faq-q / .faq-item)
  ───────────────────────────────────────────────────────── */
  var faqBtns = document.querySelectorAll('.csh-faq-q, .faq-q');
  faqBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item   = btn.closest('.csh-faq-item, .faq-item');
      var isOpen = item.classList.contains('open');

      // Close all open items
      document.querySelectorAll('.csh-faq-item, .faq-item').forEach(function (i) {
        i.classList.remove('open');
        var b = i.querySelector('.csh-faq-q, .faq-q');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ─────────────────────────────────────────────────────────
     TOOL LOGOS INJECTION (Detail Pages)
     Reads tool keys from <meta name="page-tools" content="n8n,airtable,...">
     Injects logos into #cs-hero-tools and #cs-sidebar-tools
  ───────────────────────────────────────────────────────── */
  var metaTools = document.querySelector('meta[name="page-tools"]');
  if (metaTools && typeof SITE !== 'undefined' && SITE.tools) {
    var pageTools = metaTools.getAttribute('content').split(',');

    var heroEl = document.getElementById('cs-hero-tools');
    if (heroEl) {
      pageTools.forEach(function (key) {
        key = key.trim();
        var t = SITE.tools[key];
        if (!t) return;
        var img = (SITE.logos && SITE.logos[key]) || t.icon32;
        heroEl.innerHTML += '<div class="cs-hero-logo">'
          + '<img src="' + img + '" alt="' + t.name + '" width="20" height="20" loading="lazy"> '
          + t.name + '</div>';
      });
    }

    var sideEl = document.getElementById('cs-sidebar-tools');
    if (sideEl) {
      pageTools.forEach(function (key) {
        key = key.trim();
        var t = SITE.tools[key];
        if (!t) return;
        sideEl.innerHTML += '<span class="cs-tool-tag">'
          + '<img src="' + t.icon16 + '" alt="" width="14" height="14" loading="lazy"> '
          + t.name + '</span>';
      });
    }
  }

});
