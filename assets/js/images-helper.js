// ============================================
// IMAGE HELPER FUNCTIONS
// ============================================
// Dynamically injects images from IMAGES config into the DOM

// Generic function to set images by data attribute
function setupImagesByDataAttribute() {
  const allImages = document.querySelectorAll('img[data-image-key]');
  console.log('[images-helper] setupImagesByDataAttribute found', allImages.length, 'images');
  
  allImages.forEach((img) => {
    const key = img.dataset.imageKey;
    const imageConfig = getImageByKey(key);

    if (imageConfig) {
      // support both string (direct src) and object ({src, alt, fallback})
      const src = (typeof imageConfig === 'string') ? imageConfig : imageConfig.src;
      const alt = (typeof imageConfig === 'string') ? '' : imageConfig.alt;
      const fallback = (typeof imageConfig === 'string') ? null : imageConfig.fallback;

      if (src) img.src = src;
      if (alt) img.alt = alt;
      if (fallback) {
        img.onerror = function() {
          this.src = fallback;
        };
      }
      console.log('[images-helper] Set image', key, '→', src.substring(0, 60) + '...');
    } else {
      console.warn('[images-helper] Image key not found:', key);
    }
  });
}

// Handle <link data-image-key> elements (favicon, logos in head, etc.)
function setupLinksByDataAttribute() {
  const allLinks = document.querySelectorAll('link[data-image-key]');

  allLinks.forEach((link) => {
    const key = link.dataset.imageKey;
    const imageConfig = getImageByKey(key);

    if (imageConfig) {
      const href = (typeof imageConfig === 'string') ? imageConfig : imageConfig.src;
      if (href) link.href = href;
    }
  });
}

// Helper function to get image by dot-notation key
// Example: "HERO.carousel.0", "PARTNERS.make", "CASE_STUDIES.smartLeadQualification.screenshot1"
// Supports IMAGES, CASE_STUDIES, and other top-level namespaces
function getImageByKey(key) {
  if (!key) return null;
  
  const keys = key.split('.');
  const namespace = keys[0];
  
  // Try direct top-level access first (IMAGES, CASE_STUDIES, etc.)
  let value = window[namespace];
  
  // Fallback to SITE.* namespaces (SITE.images, SITE.caseStudies, etc.)
  if (!value && typeof SITE !== 'undefined' && SITE[namespace]) {
    value = SITE[namespace];
  }
  
  // DEFAULT: If first key is "HERO", "PARTNERS", etc., assume it's under SITE.images
  if (!value && typeof SITE !== 'undefined' && SITE.images && SITE.images[namespace]) {
    value = SITE.images[namespace];
  }
  
  if (!value) {
    console.warn('Image namespace not found:', namespace, '(looked in window and SITE)');
    return null;
  }
  
  try {
    // Skip the first key since we already resolved it to 'value'
    for (let i = 1; i < keys.length; i++) {
      const k = keys[i];
      if (!isNaN(k)) {
        value = value[parseInt(k)];
      } else {
        value = value[k];
      }
    }
    return value;
  } catch (e) {
    console.warn('Image key not found:', key, e.message);
    return null;
  }
}

// Function to set hero carousel images (backward compatible)
function setupHeroCarousel() {
  const carouselImages = document.querySelectorAll('.carousel-img');
  if (carouselImages.length > 0 && IMAGES.HERO.carousel) {
    carouselImages.forEach((img, index) => {
      if (IMAGES.HERO.carousel[index]) {
        img.src = IMAGES.HERO.carousel[index].src;
        img.alt = IMAGES.HERO.carousel[index].alt;
      }
    });
  }
}

// Function to set partner badge images (backward compatible)
function setupPartnerBadges() {
  const partnerBadges = document.querySelectorAll('.partner-badge');
  const partnerKeys = Object.keys(IMAGES.PARTNERS);
  
  partnerBadges.forEach((badge, index) => {
    if (index < partnerKeys.length) {
      const img = badge.querySelector('img');
      const key = partnerKeys[index];
      const partner = IMAGES.PARTNERS[key];
      
      if (img && partner) {
        img.src = partner.src;
        img.alt = partner.alt;
        img.onerror = function() {
          this.src = partner.fallback;
        };
      }
    }
  });
}

// Function to set ticker images dynamically
function setupTickerImages() {
  const tickerRows = document.querySelectorAll('.ticker-row');
  
  if (tickerRows[0]) {
    const row1Items = tickerRows[0].querySelectorAll('.ticker-item');
    row1Items.forEach((item, index) => {
      const actualIndex = index % IMAGES.TICKER_ROW_1.length;
      const img = item.querySelector('img');
      if (img && IMAGES.TICKER_ROW_1[actualIndex]) {
        img.src = IMAGES.TICKER_ROW_1[actualIndex].src;
        img.onerror = function() {
          this.src = IMAGES.TICKER_ROW_1[actualIndex].fallback;
        };
      }
    });
  }

  if (tickerRows[1]) {
    const row2Items = tickerRows[1].querySelectorAll('.ticker-item');
    row2Items.forEach((item, index) => {
      const actualIndex = index % IMAGES.TICKER_ROW_2.length;
      const img = item.querySelector('img');
      if (img && IMAGES.TICKER_ROW_2[actualIndex]) {
        img.src = IMAGES.TICKER_ROW_2[actualIndex].src;
        img.onerror = function() {
          this.src = IMAGES.TICKER_ROW_2[actualIndex].fallback;
        };
      }
    });
  }
}

// Function to set case study images
function setupCaseStudies() {
  const caseCards = document.querySelectorAll('.case-card');
  caseCards.forEach((card, index) => {
    if (index < IMAGES.CASES.length) {
      const img = card.querySelector('.case-img img');
      if (img) {
        img.src = IMAGES.CASES[index].img;
        img.alt = IMAGES.CASES[index].alt;
      }
    }
  });
}

// Function to set testimonial avatars
function setupTestimonials() {
  const testimonialCards = document.querySelectorAll('.test-card');
  const testimonialKeys = ['andrey', 'noor', 'ankit'];
  
  testimonialCards.forEach((card, index) => {
    if (index < testimonialKeys.length) {
      const avatar = card.querySelector('.test-avatar-img');
      const key = testimonialKeys[index];
      if (avatar && IMAGES.TESTIMONIALS[key]) {
        avatar.src = IMAGES.TESTIMONIALS[key].img;
        avatar.alt = IMAGES.TESTIMONIALS[key].alt;
      }
    }
  });
}

// Function to set review badge logos
function setupReviewBadges() {
  const reviewPlatforms = document.querySelectorAll('.review-platform');
  const logos = ['google', 'upwork', 'upwork']; // Last two are Upwork
  
  reviewPlatforms.forEach((platform, index) => {
    if (index < logos.length) {
      const logo = platform.querySelector('.review-logo');
      if (logo && IMAGES.REVIEW_BADGES[logos[index]]) {
        logo.src = IMAGES.REVIEW_BADGES[logos[index]];
      }
    }
  });
}

// Function to set review collage images
function setupReviewCollage() {
  const reviewCards = document.querySelectorAll('.rc-card');
  
  reviewCards.forEach((card) => {
    const sourceLogos = card.querySelectorAll('.rc-source-logo');
    sourceLogos.forEach((logo) => {
      const isGoogle = card.classList.contains('rc-google');
      const isUpwork = card.classList.contains('rc-upwork');
      
      if (isGoogle && IMAGES.REVIEW_BADGES.google) {
        logo.src = IMAGES.REVIEW_BADGES.google;
      } else if (isUpwork && IMAGES.REVIEW_BADGES.upwork) {
        logo.src = IMAGES.REVIEW_BADGES.upwork;
      }
    });
  });
}

// Initialize all image injections on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  if (typeof IMAGES !== 'undefined') {
    // First try data-attribute based injection (new approach)
    setupLinksByDataAttribute();
    setupImagesByDataAttribute();
    
    // Then fallback to class-based injection (backward compatible)
    setupHeroCarousel();
    setupPartnerBadges();
    setupTickerImages();
    setupCaseStudies();
    setupTestimonials();
    setupReviewBadges();
    setupReviewCollage();
  }
  // Retry image injection after a short delay to handle any late-inserted nodes
  // (some components may be fetched asynchronously; this is a safe idempotent retry)
  setTimeout(function() {
    try {
      setupLinksByDataAttribute();
      setupImagesByDataAttribute();
    } catch (e) {
      console.warn('images-helper retry failed:', e);
    }
  }, 600);
});
