// ============================================
// GROWWSTACKS SITE CONFIGURATION
// Single source of truth for all pages
// Last updated: 2026-02-18
// ============================================

const SITE = {

  // ─── Brand ────────────────────────────────
  name: 'GrowwStacks',
  tagline: 'AI Agents, Voice AI & Business Automation Agency',
  legalName: 'M TEC Software & Business Automation Pvt. Ltd.',

  // ─── URLs ─────────────────────────────────
  domain: 'https://go.growwstacks.com',

  // ─── Contact ──────────────────────────────
  phone: '+91-971-333-9155',
  phoneTel: 'tel:+919713339155',
  email: 'hello@growwstacks.com',

  // ─── Addresses ────────────────────────────
  addressUS: {
    street: '525 Route 73 North, Ste 104',
    city: 'Marlton', state: 'NJ', zip: '08053',
    country: 'US', flag: '🇺🇸'
  },
  addressIN: {
    city: 'Mumbai', state: 'Maharashtra',
    country: 'IN', flag: '🇮🇳'
  },

  // ─── Social & Profiles ────────────────────
  social: {
    linkedin: 'https://www.linkedin.com/company/growwstacks/',
    upwork: 'https://www.upwork.com/agencies/1631885072275017728',
    googleReviews: 'https://share.google/e7U12GrP3UxuzJEGr',
  },

  // ─── Tracking ─────────────────────────────
  googleAdsId: 'AW-17936939840',
  // googleAnalyticsId: 'G-XXXXXXXXXX',  // uncomment when ready

  // ─── Form / Webhook ───────────────────────
  formWebhookUrl: 'YOUR_WEBHOOK_URL_HERE',
  thankYouPage: '/pages/thank-you/',

  // ─── Assets (ImageKit) ────────────────────
  imagekit: {
    base: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website',
    favicon: 'https://ik.imagekit.io/ui4mpbzoy/growwstacks-favicon-logo.png',
  },

  // ─── Partner Logos (ImageKit hosted, pre-sized) ─
  logos: {
    make:      'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/make-color.png?tr=w-110,h-38,q-80',
    monday:    'https://www.google.com/s2/favicons?domain=monday.com&sz=128',
    zapier:    'https://www.google.com/s2/favicons?domain=zapier.com&sz=128',
    n8n:       'https://www.google.com/s2/favicons?domain=n8n.io&sz=128',
    microsoft: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Microsoft_logo.svg.png?tr=w-110,h-38,q-80',
    airtable:  'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/images.png?tr=w-110,h-38,q-80',
    vapi:      'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/email-logo.png?tr=w-110,h-38,q-80',
    retell:    'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/6726f234dc6305cc1dee884c_Retell-mark-black.png?tr=w-110,h-38,q-80',
    google:    'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/GrowwStacks%20Google%20Review%20Logo.png',
    upwork:    'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/upwork%20logo.jpeg',
  },

  // ─── Stats (update here → updates everywhere) ─
  stats: {
    projects: '2000+',
    clients: '500+',
    experts: '40+',
    costReduction: '60%',
    googleRating: '5.0',
  },

  // ─── Fonts ────────────────────────────────
  fonts: {
    display: "'Bricolage Grotesque', serif",
    body: "'Plus Jakarta Sans', sans-serif",
    url: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap',
  },

  // ─── Ticker Platforms (Row 1 — Left to Right) ─
  tickerRow1: [
    { name: 'Make.com',        domain: 'make.com' },
    { name: 'Zapier',          domain: 'zapier.com' },
    { name: 'Slack',           domain: 'slack.com' },
    { name: 'HubSpot',         domain: 'hubspot.com' },
    { name: 'Salesforce',      domain: 'salesforce.com' },
    { name: 'Airtable',        domain: 'airtable.com' },
    { name: 'n8n',             domain: 'n8n.io' },
    { name: 'Monday.com',      domain: 'monday.com' },
    { name: 'WhatsApp',        domain: 'whatsapp.com' },
    { name: 'Stripe',          domain: 'stripe.com' },
    { name: 'OpenAI',          domain: 'openai.com' },
    { name: 'Shopify',         domain: 'shopify.com' },
    { name: 'Power Automate',  domain: 'microsoft.com' },
  ],

  // ─── Ticker Platforms (Row 2 — Right to Left) ─
  tickerRow2: [
    { name: 'Telegram',        domain: 'telegram.org' },
    { name: 'Notion',          domain: 'notion.so' },
    { name: 'Zoom',            domain: 'zoom.us' },
    { name: 'Calendly',        domain: 'calendly.com' },
    { name: 'Twilio',          domain: 'twilio.com' },
    { name: 'Meta / Facebook', domain: 'meta.com' },
    { name: 'Discord',         domain: 'discord.com' },
    { name: 'Power BI',        domain: 'powerbi.microsoft.com' },
    { name: 'QuickBooks',      domain: 'quickbooks.intuit.com' },
    { name: 'AWS',             domain: 'amazon.com' },
    { name: 'Jira',            domain: 'atlassian.com' },
    { name: 'Mailchimp',       domain: 'mailchimp.com' },
    { name: 'Google Sheets',   domain: 'sheets.google.com' },
    { name: 'Power Apps',      domain: 'microsoft.com' },
  ],
};

// ============================================
// IMAGES — Central repository for all image URLs
// ============================================
SITE.images = {
  HERO: {
    carousel: [
      {
        src: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/3.png?tr=w-600,h-380,q-100',
        alt: 'Make Platinum Partner Award'
      },
      {
        src: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/4.png?tr=w-600,h-380,q-100',
        alt: 'GrowwStacks Team Celebration'
      }
    ]
  },

  PARTNERS: {
    make: {
      src: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/make-color.png?updatedAt=1771322847653',
      fallback: 'https://cdn.worldvectorlogo.com/logos/make-formerly-integromat.svg',
      alt: 'Make.com Logo'
    },
    monday: {
      src: 'https://logo.clearbit.com/monday.com',
      fallback: 'https://cdn.worldvectorlogo.com/logos/monday-1.svg',
      alt: 'Monday.com Logo'
    },
    zapier: {
      src: 'https://logo.clearbit.com/zapier.com',
      fallback: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
      alt: 'Zapier Logo'
    },
    n8n: {
      src: 'https://logo.clearbit.com/n8n.io',
      fallback: 'https://n8n.io/favicon.ico',
      alt: 'n8n Logo'
    },
    microsoft: {
      src: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Microsoft_logo.svg.png?updatedAt=1771323050579',
      fallback: 'https://cdn.worldvectorlogo.com/logos/microsoft.svg',
      alt: 'Microsoft Logo'
    },
    airtable: {
      src: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/images.png?updatedAt=1771322869012',
      fallback: 'https://cdn.worldvectorlogo.com/logos/airtable.svg',
      alt: 'Airtable Logo'
    },
    vapi: {
      src: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/email-logo.png?updatedAt=1771326474022',
      fallback: 'https://avatars.githubusercontent.com/u/119600686?s=200&v=4',
      alt: 'VAPI Logo'
    },
    retellAi: {
      src: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/6726f234dc6305cc1dee884c_Retell-mark-black.png?updatedAt=1771326562198',
      fallback: 'https://avatars.githubusercontent.com/u/128374519?s=200&v=4',
      alt: 'Retell AI Logo'
    }
  },

  TICKER_ROW_1: [
    { name: 'Make.com', src: 'https://logo.clearbit.com/make.com', fallback: 'https://www.google.com/s2/favicons?domain=make.com&sz=32' },
    { name: 'Zapier', src: 'https://logo.clearbit.com/zapier.com', fallback: 'https://cdn.worldvectorlogo.com/logos/zapier.svg' },
    { name: 'Slack', src: 'https://logo.clearbit.com/slack.com', fallback: 'https://www.google.com/s2/favicons?domain=slack.com&sz=32' },
    { name: 'HubSpot', src: 'https://logo.clearbit.com/hubspot.com', fallback: 'https://www.google.com/s2/favicons?domain=hubspot.com&sz=32' },
    { name: 'Salesforce', src: 'https://logo.clearbit.com/salesforce.com', fallback: 'https://www.google.com/s2/favicons?domain=salesforce.com&sz=32' },
    { name: 'Airtable', src: 'https://logo.clearbit.com/airtable.com', fallback: 'https://www.google.com/s2/favicons?domain=airtable.com&sz=32' },
    { name: 'n8n', src: 'https://logo.clearbit.com/n8n.io', fallback: 'https://www.google.com/s2/favicons?domain=n8n.io&sz=32' },
    { name: 'Monday.com', src: 'https://logo.clearbit.com/monday.com', fallback: 'https://www.google.com/s2/favicons?domain=monday.com&sz=32' },
    { name: 'WhatsApp', src: 'https://logo.clearbit.com/whatsapp.com', fallback: 'https://www.google.com/s2/favicons?domain=whatsapp.com&sz=32' },
    { name: 'Stripe', src: 'https://logo.clearbit.com/stripe.com', fallback: 'https://www.google.com/s2/favicons?domain=stripe.com&sz=32' },
    { name: 'OpenAI', src: 'https://logo.clearbit.com/openai.com', fallback: 'https://www.google.com/s2/favicons?domain=openai.com&sz=32' },
    { name: 'Shopify', src: 'https://logo.clearbit.com/shopify.com', fallback: 'https://www.google.com/s2/favicons?domain=shopify.com&sz=32' },
    { name: 'Google Workspace', src: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/GrowwStacks%20Google%20Review%20Logo.png?updatedAt=1771312395368', fallback: 'https://www.google.com/s2/favicons?domain=google.com&sz=32' },
    { name: 'Power Automate', src: 'https://logo.clearbit.com/microsoft.com', fallback: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=32' }
  ],

  TICKER_ROW_2: [
    { name: 'Telegram', src: 'https://logo.clearbit.com/telegram.org', fallback: 'https://www.google.com/s2/favicons?domain=telegram.org&sz=32' },
    { name: 'Notion', src: 'https://logo.clearbit.com/notion.so', fallback: 'https://www.google.com/s2/favicons?domain=notion.so&sz=32' },
    { name: 'Zoom', src: 'https://logo.clearbit.com/zoom.us', fallback: 'https://www.google.com/s2/favicons?domain=zoom.us&sz=32' },
    { name: 'Calendly', src: 'https://logo.clearbit.com/calendly.com', fallback: 'https://www.google.com/s2/favicons?domain=calendly.com&sz=32' },
    { name: 'Twilio', src: 'https://logo.clearbit.com/twilio.com', fallback: 'https://www.google.com/s2/favicons?domain=twilio.com&sz=32' },
    { name: 'Meta / Facebook', src: 'https://logo.clearbit.com/meta.com', fallback: 'https://www.google.com/s2/favicons?domain=meta.com&sz=32' },
    { name: 'Discord', src: 'https://logo.clearbit.com/discord.com', fallback: 'https://www.google.com/s2/favicons?domain=discord.com&sz=32' },
    { name: 'Power BI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/512px-New_Power_BI_Logo.svg.png', fallback: 'https://logo.clearbit.com/powerbi.microsoft.com' },
    { name: 'QuickBooks', src: 'https://logo.clearbit.com/quickbooks.intuit.com', fallback: 'https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg' },
    { name: 'AWS', src: 'https://logo.clearbit.com/amazon.com', fallback: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=32' },
    { name: 'Jira', src: 'https://logo.clearbit.com/atlassian.com', fallback: 'https://www.google.com/s2/favicons?domain=atlassian.com&sz=32' },
    { name: 'Mailchimp', src: 'https://logo.clearbit.com/mailchimp.com', fallback: 'https://www.google.com/s2/favicons?domain=mailchimp.com&sz=32' },
    { name: 'Google Sheets', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/512px-Google_Sheets_logo_%282014-2020%29.svg.png', fallback: 'https://logo.clearbit.com/sheets.google.com' },
    { name: 'Power Apps', src: 'https://logo.clearbit.com/microsoft.com', fallback: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=32' }
  ],

  CASES: [
    {
      title: 'AI Lead Qualification Agent for SaaS Platform',
      img: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/AI%20Lead%20Qualification%20Agent%20for%20SaaS%20Platform.jpeg?updatedAt=1771319768887',
      alt: 'AI Lead Qualification Agent for SaaS Platform',
      category: 'SaaS'
    },
    {
      title: 'Voice AI for Patient Appointment Booking',
      img: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/Voice%20AI%20for%20Patient%20Appointment%20Booking.png?updatedAt=1771320381007',
      alt: 'Voice AI for Patient Appointment Booking',
      category: 'Healthcare'
    },
    {
      title: 'AI Chatbot + Social Media Automation for Real Estate',
      img: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/AI%20Chatbot%20+%20Social%20Media%20Automation%20for%20Real%20Estate.png?updatedAt=1771325461368',
      alt: 'AI Chatbot + Social Media Automation for Real Estate',
      category: 'Real Estate'
    }
  ],

  TESTIMONIALS: {
    andrey: {
      img: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/Andrey-Avatov-GrowwStacks-Client.png?updatedAt=1771326788524',
      alt: 'Andrey Avetov'
    },
    noor: {
      img: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/Noor-Israel-GrowwStacks-Client.png?updatedAt=1771326788512',
      alt: 'Noor Webbed'
    },
    ankit: {
      img: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/Ankit-GrowwStacks-Client.png?updatedAt=1771326788415',
      alt: 'Ankit'
    }
  },

  VIDEOS: {
    hero: 'https://i.ytimg.com/vi/x3RdjxHS2pI/hqdefault.jpg',
    andrey: 'https://i.ytimg.com/vi/VxRCbwp8HEY/hqdefault.jpg',
    noor: 'https://i.ytimg.com/vi/OkRWr5TL-QY/hqdefault.jpg',
    ankit: 'https://i.ytimg.com/vi/-GhflHmCmFM/hqdefault.jpg'
  },

  REVIEW_BADGES: {
    google: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/GrowwStacks%20Google%20Review%20Logo.png',
    upwork: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/upwork%20logo.jpeg?updatedAt=1771312194270'
  },

  BRANDING: {
    favicon: 'https://ik.imagekit.io/ui4mpbzoy/growwstacks-favicon-logo.png',
    logo: 'https://ik.imagekit.io/ui4mpbzoy/growwstacks-favicon-logo.png'
  }
};

// Backward compatibility: make IMAGES identifier available for existing helpers
// expose on window for any code that checks window.IMAGES
window.IMAGES = SITE.images;
const IMAGES = SITE.images;
