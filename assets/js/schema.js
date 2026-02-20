// ============================================
// FAQ SCHEMA (AEO OPTIMIZATION)
// ============================================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does GrowwStacks do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GrowwStacks is an AI and automation agency that builds intelligent systems for businesses. We create AI agents, voice AI that handles phone calls, chatbots, and workflow automations on platforms like Make.com, n8n, and Power Automate. Our team of 40+ experts has delivered 2000+ projects across healthcare, e-commerce, SaaS, real estate, and financial services."
      }
    },
    {
      "@type": "Question",
      "name": "What is an AI agent and how can it help my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AI agent is an autonomous software system that can perform complex tasks without constant human supervision. Unlike simple automations that follow fixed rules, AI agents can research, analyze data, make decisions, and take actions across multiple tools."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an automation or AI project cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Projects typically range from $3,000 to $25,000+ depending on complexity. A simple workflow automation might cost $3,000-$5,000, while a comprehensive AI agent system with voice integration could be $15,000-$25,000."
      }
    },
    {
      "@type": "Question",
      "name": "How long does implementation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple automations are delivered in 1-2 weeks. AI agent systems typically take 2-4 weeks. Complex enterprise deployments may take 4-8 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What platforms do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are a Make.com Platinum Partner, Monday.com Master Partner, Zapier Certified Expert, and n8n Integration Partner. We also work with Power Automate, Power Apps, OpenAI, Anthropic Claude, Google Gemini, Vapi, Bland AI, and ElevenLabs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide support after the project is live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every project includes 30 days of free support after go-live. After that, we offer monthly maintenance plans that include monitoring, bug fixes, optimization, and minor modifications."
      }
    }
  ]
};

// ============================================
// ORGANIZATION SCHEMA
// ============================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GrowwStacks",
  "legalName": "M TEC Software and Business Automation Private Limited",
  "description": "AI Agents, Voice AI, and Business Automation Agency. Make.com Platinum Partner.",
  "url": "https://www.growwstacks.com",
  "logo": "https://ik.imagekit.io/ui4mpbzoy/growwstacks-favicon-logo.png",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "525 Route 73 North, Ste 104",
      "addressLocality": "Marlton",
      "addressRegion": "NJ",
      "postalCode": "08053",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": (typeof SITE !== 'undefined' && SITE.phone) ? SITE.phone : "+91-971-333-9155",
    "contactType": "sales",
    "availableLanguage": ["English", "Hindi"]
  }
};

// ============================================
// INJECT SCHEMAS INTO DOM
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  // FAQ Schema
  const faqScriptTag = document.createElement('script');
  faqScriptTag.type = 'application/ld+json';
  faqScriptTag.textContent = JSON.stringify(faqSchema);
  document.head.appendChild(faqScriptTag);

  // Organization Schema
  const orgScriptTag = document.createElement('script');
  orgScriptTag.type = 'application/ld+json';
  orgScriptTag.textContent = JSON.stringify(organizationSchema);
  document.head.appendChild(orgScriptTag);
});
