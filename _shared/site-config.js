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
