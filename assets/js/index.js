// ============================================
// CLOUDFLARE EMAIL PROTECTION
// ============================================
// Include this in your HTML if needed:
// <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-img");
  let current = 0;

  if (slides.length === 0) return;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3500); // 3.5 seconds
});

// ============================================
// STICKY NAVIGATION SHADOW
// ============================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
});

// ============================================
// FAQ ACCORDION
// ============================================
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
  });
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      const offset = 80; // nav height
      const pos = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  });
});

// ============================================
// FORM SUBMISSION → WEBHOOK + REDIRECT
// ============================================
document.getElementById('consultForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Set hidden field values
  document.getElementById('pageUrl').value = window.location.href;
  document.getElementById('submittedAt').value = new Date().toISOString();

  // Collect form data
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => { data[key] = value; });

  try {
    // ================================================
    // WEBHOOK URL: Update this with your endpoint
    // This can be a Make.com webhook, n8n webhook,
    // or any URL that accepts POST requests
    // ================================================
    const webhookUrl = 'YOUR_WEBHOOK_URL_HERE';

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (error) {
    // Even if webhook fails, redirect to thank you
    console.log('Webhook error:', error);
  }

  // Redirect to thank you page
  window.location.href = '/thank-you/';
});

// ============================================
// YOUTUBE LITE FACADE — Click to load
// ============================================
document.querySelectorAll('.yt-facade').forEach(facade => {
  function loadVideo() {
    const videoId = facade.dataset.videoId;
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
  }
  facade.addEventListener('click', loadVideo);
  facade.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      loadVideo(); 
    }
  });
});
