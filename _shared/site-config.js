// ============================================
// GROWWSTACKS SITE CONFIGURATION
// Single source of truth for all pages
// ============================================

const SITE = {
  // --- Brand ---
  name: 'GrowwStacks',
  tagline: 'AI Agents, Voice AI & Business Automation Agency',
  legalName: 'M TEC Software & Business Automation Pvt. Ltd.',
  foundedYear: 2020,
  
  // --- URLs ---
  domain: 'https://go.growwstacks.com',
  oldDomain: 'https://www.growwstacks.com',  // for redirects
  
  // --- Contact ---
  phone: '+91-971-333-9155',
  phoneTel: 'tel:+919713339155',       // for href
  email: 'hello@growwstacks.com',
  
  // --- Addresses ---
  addressUS: {
    street: '525 Route 73 North, Ste 104',
    city: 'Marlton',
    state: 'NJ',
    zip: '08053',
    country: 'US',
    flag: '🇺🇸'
  },
  addressIN: {
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'IN',
    flag: '🇮🇳'
  },
  
  // --- Social ---
  social: {
    linkedin: 'https://www.linkedin.com/company/growwstacks/',
    upwork: 'https://www.upwork.com/agencies/1631885072275017728',
    googleReviews: 'https://share.google/e7U12GrP3UxuzJEGr',
  },
  
  // --- Tracking ---
  googleAdsId: 'AW-17936939840',
  // googleAnalyticsId: 'G-XXXXXXXXXX',  // add when ready
  
  // --- Webhook ---
  formWebhookUrl: 'YOUR_WEBHOOK_URL_HERE',  // Make.com or n8n webhook
  thankYouPage: '/pages/thank-you/',
  
  // --- Assets (ImageKit) ---
  imagekit: {
    base: 'https://ik.imagekit.io/r2zdlyze2o/GS%20Website',
    favicon: 'https://ik.imagekit.io/ui4mpbzoy/growwstacks-favicon-logo.png',
  },
  
  // --- Logos (all hosted on ImageKit) ---
  logos: {
    make:       'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/make-color.png?tr=w-110,h-38,q-80',
    microsoft:  'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Microsoft_logo.svg.png?tr=w-110,h-38,q-80',
    airtable:   'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/images.png?tr=w-110,h-38,q-80',
    vapi:       'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/email-logo.png?tr=w-110,h-38,q-80',
    retell:     'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/6726f234dc6305cc1dee884c_Retell-mark-black.png?tr=w-110,h-38,q-80',
    google:     'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/GrowwStacks%20Google%20Review%20Logo.png',
    upwork:     'https://ik.imagekit.io/r2zdlyze2o/GS%20Website/Home%20Page/upwork%20logo.jpeg',
  },
  
  // --- Stats (update in one place) ---
  stats: {
    projects: '2000+',
    clients: '500+',
    experts: '40+',
    costReduction: '60%',
    googleRating: '5.0',
  },
  
  // --- Navigation Links ---
  navLinks: [
    { label: 'Services', href: '/#services' },
    { label: 'How We Work', href: '/#process' },
    { label: 'Case Studies', href: '/#cases' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Reviews', href: '/#testimonials' },
  ],
  
  // --- Footer Service Links ---
  footerServices: [
    { label: 'AI Agents', href: '/services/ai-agents/' },
    { label: 'Voice AI', href: '/services/voice-ai/' },
    { label: 'Make.com Automation', href: '/services/make-automation/' },
    { label: 'n8n Automation', href: '/services/n8n-automation/' },
    { label: 'Custom Integration', href: '/#consultation' },
  ],
  
  // --- Fonts ---
  fonts: {
    display: "'Bricolage Grotesque', serif",
    body: "'Plus Jakarta Sans', sans-serif",
    url: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Bricolage+Grotesque:wght@400;500;600;700;800&display=swap',
  },
  
  // --- Ticker Platform Logos (for the scrolling ticker) ---
  tickerRow1: [
    { name: 'Make.com', domain: 'make.com' },
    { name: 'Zapier', domain: 'zapier.com' },
    { name: 'Slack', domain: 'slack.com' },
    { name: 'HubSpot', domain: 'hubspot.com' },
    { name: 'Salesforce', domain: 'salesforce.com' },
    { name: 'Airtable', domain: 'airtable.com' },
    { name: 'n8n', domain: 'n8n.io' },
    { name: 'Monday.com', domain: 'monday.com' },
    { name: 'WhatsApp', domain: 'whatsapp.com' },
    { name: 'Stripe', domain: 'stripe.com' },
    { name: 'OpenAI', domain: 'openai.com' },
    { name: 'Shopify', domain: 'shopify.com' },
    { name: 'Power Automate', domain: 'microsoft.com' },
  ],
  tickerRow2: [
    { name: 'Telegram', domain: 'telegram.org' },
    { name: 'Notion', domain: 'notion.so' },
    { name: 'Zoom', domain: 'zoom.us' },
    { name: 'Calendly', domain: 'calendly.com' },
    { name: 'Twilio', domain: 'twilio.com' },
    { name: 'Meta / Facebook', domain: 'meta.com' },
    { name: 'Discord', domain: 'discord.com' },
    { name: 'Power BI', domain: 'powerbi.microsoft.com' },
    { name: 'QuickBooks', domain: 'quickbooks.intuit.com' },
    { name: 'AWS', domain: 'amazon.com' },
    { name: 'Jira', domain: 'atlassian.com' },
    { name: 'Mailchimp', domain: 'mailchimp.com' },
    { name: 'Google Sheets', domain: 'sheets.google.com' },
    { name: 'Power Apps', domain: 'microsoft.com' },
  ],
};
