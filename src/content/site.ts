// All site copy lives here. Edit this file, not the components.
// Audience: business owners and team leads who want AI to save time and money.
// Write in plain language. Only put real clients, real numbers and real quotes on the site.

export const CONTACT_EMAIL = "hello@soraitech.in"; // TODO: confirm the inbox you actually read

export const nav = [
  { name: "Solutions", href: "/#solutions" },
  { name: "Services", href: "/#services" },
  { name: "How it works", href: "/#process" },
  { name: "Why us", href: "/#approach" },
  { name: "FAQ", href: "/#faq" },
];

// Names shown in the moving strip under the hero. Only teams you've actually worked with.
export const clients = [
  "Piramal Finance",
  "Pete Slade Consulting",
  "Fulcrum Pro",
];

// "Solutions in action" showcase near the top of the homepage.
// Images are illustrative mockups, captioned as examples on the page.
export const showcase = [
  {
    id: "voice",
    tab: "AI voice receptionist",
    image: "/images/solutions/voice-receptionist.webp",
    alt: "Example dashboard of an AI voice receptionist showing a live call transcript, calls answered, appointments booked and recent calls.",
    headline: "Never miss a call again.",
    body: "An AI receptionist that answers your phone in a natural voice, day and night. It handles common questions, books appointments straight into your calendar, and passes urgent or complex calls to your staff.",
    points: [
      "Answers every call instantly, even after hours",
      "Books, reschedules and confirms appointments",
      "Transfers important calls with a short summary",
    ],
    bestFor: "Clinics, salons, real estate and service businesses",
  },
  {
    id: "support",
    tab: "Customer support assistant",
    image: "/images/solutions/support-assistant.webp",
    alt: "Example of an AI support assistant on an online store and in a mobile chat app, answering a customer's question about their order with tracking details.",
    headline: "Answer customers in seconds, day and night.",
    body: "A chat assistant on your website and WhatsApp that answers from your own policies, product information and order data. When it isn't sure, it hands the conversation to your team instead of guessing.",
    points: [
      "Looks up orders, policies and product details",
      "Works on your website, WhatsApp and email",
      "Hands over to a person when it should",
    ],
    bestFor: "Online stores, D2C brands and service companies",
  },
  {
    id: "knowledge",
    tab: "Company knowledge assistant",
    image: "/images/solutions/knowledge-assistant.webp",
    alt: "Example of a company knowledge assistant answering a question about refund policy, with links to the source documents.",
    headline: "Every answer your team needs, from your own documents.",
    body: "Your staff ask questions in plain English and get answers from your handbooks, SOPs and policies, with a link to the exact source so they can check it. No more digging through folders or asking the same person.",
    points: [
      "Connects to your documents and keeps them in sync",
      "Shows the source behind every answer",
      "Only shows people what they're allowed to see",
    ],
    bestFor: "Growing teams, operations, HR and customer service",
  },
  {
    id: "sales",
    tab: "Sales follow-up",
    image: "/images/solutions/sales-pipeline.webp",
    alt: "Example sales pipeline where leads are followed up automatically, with an email draft waiting for approval and an activity timeline.",
    headline: "Every lead followed up, automatically.",
    body: "New enquiries get a personal reply within minutes. Follow-ups go out on time, your pipeline updates itself, and you approve anything important before it's sent.",
    points: [
      "Replies to new leads within minutes",
      "Sends follow-ups so no lead goes cold",
      "Logs every email, reply and meeting for you",
    ],
    bestFor: "B2B sales teams, real estate and education",
  },
  {
    id: "reports",
    tab: "Weekly business report",
    image: "/images/solutions/weekly-report.webp",
    alt: "Example weekly business summary email with revenue, new customers and support tickets, trend charts and a needs-your-attention box.",
    headline: "Your business numbers, in your inbox every Monday.",
    body: "We connect your sales, finance and support tools and send a clear weekly summary, with anything that needs your attention explained in plain English. No more pulling numbers from five places.",
    points: [
      "Pulls numbers from the tools you already use",
      "Explains what changed and why it matters",
      "Flags what needs your attention",
    ],
    bestFor: "Owners and managers",
  },
];

// "How we help", part 1: how the AI Opportunity Audit finds the right solution.
export const audit = {
  name: "The AI Opportunity Audit",
  intro:
    "Before recommending anything, we find out where your time and money actually go. Then we match each problem with the simplest solution that works.",
  meta: ["1–2 weeks", "Fixed fee", "No obligation to build with us"],
  steps: [
    {
      name: "Understand how you work",
      body: "We talk to the people doing the work and look at the real process: the tools, the hand-offs and the workarounds.",
      get: "A map of your key workflows",
    },
    {
      name: "Measure where time and money go",
      body: "For each task we estimate hours per month, cost, delays and mistakes, so every idea is judged on real numbers.",
      get: "A time and cost baseline",
    },
    {
      name: "Score every opportunity",
      body: "Each idea is rated on savings, effort, risk and whether your data is ready. If something needs a simple process fix rather than AI, we say so.",
      get: "A ranked shortlist",
    },
    {
      name: "Match the right solution",
      body: "For the top picks we choose the simplest option: a tool you already pay for, a ready-made product, or something set up for you. Each comes with a price and expected payback.",
      get: "A costed plan with payback",
    },
  ],
};

// "How we help", part 2: solutions we set up. Add or remove items here.
export const solutionGroups = [
  {
    group: "Customers and sales",
    items: [
      {
        name: "AI voice receptionist",
        body: "Answers your phone day and night, books appointments and passes urgent calls to your staff.",
      },
      {
        name: "AI support assistant",
        body: "Answers customer questions on your website, WhatsApp and email, day and night, using your own information.",
      },
      {
        name: "Lead follow-up and qualification",
        body: "Replies to new enquiries in minutes, asks the right questions and books qualified leads into your calendar.",
      },
      {
        name: "CRM that updates itself",
        body: "Calls, emails and meetings are logged automatically, so your pipeline is always up to date.",
      },
    ],
  },
  {
    group: "Documents and data",
    items: [
      {
        name: "Invoice and bill processing",
        body: "Reads invoices and bills and enters them into your accounting system, flagging anything unusual.",
      },
      {
        name: "Contract and form extraction",
        body: "Pulls key details from contracts, applications and forms into a spreadsheet or your CRM.",
      },
      {
        name: "Automatic reports",
        body: "Collects numbers from your tools and sends a clear weekly summary of what needs attention.",
      },
    ],
  },
  {
    group: "Your team",
    items: [
      {
        name: "Company knowledge assistant",
        body: "Staff ask questions in plain English and get answers from your handbooks, SOPs and past documents.",
      },
      {
        name: "Inbox sorting and draft replies",
        body: "Sorts incoming email, drafts replies to common requests and sends the rest to the right person.",
      },
      {
        name: "AI training and usage policy",
        body: "Hands-on workshops and simple rules so your team uses AI tools safely and well.",
      },
    ],
  },
];

// "Why us" section: how we make sure AI projects pay off.
export const approach = [
  {
    title: "We start with the business case",
    body: "Before any building, we agree what success looks like in hours saved, cost cut or revenue gained. If the numbers don't work, we tell you.",
  },
  {
    title: "Tested on your real work",
    body: "We check the system against your actual emails, documents and questions before it goes live, and show you how accurate it is.",
  },
  {
    title: "A person stays in control",
    body: "When the AI is unsure, or the stakes are high, it passes the task to your team instead of guessing.",
  },
  {
    title: "Costs you can predict",
    body: "Fixed prices for each phase and clear monthly running costs. No surprise bills when usage grows.",
  },
];

export const process = [
  {
    name: "Free consultation",
    body: "A 30-minute call about your business and where time is being lost. You'll leave with ideas, even if we never work together.",
    time: "30 minutes",
  },
  {
    name: "Audit and plan",
    body: "We map your workflows, find the best opportunities and give you a costed plan with the savings you can expect.",
    time: "1–2 weeks",
  },
  {
    name: "Pilot",
    body: "We build the first solution and test it with a small group on real work, so you see results before a full rollout.",
    time: "3–6 weeks",
  },
  {
    name: "Rollout and support",
    body: "We train your team, roll it out, and check on it every month so it keeps delivering.",
    time: "Ongoing",
  },
];

export const principles = [
  {
    title: "Honest advice, even when it means less work for us",
    body: "Some problems need a simple process change, not AI. If that's your situation, we'll say so on the first call.",
  },
  {
    title: "Plain English, no jargon",
    body: "You'll always know what we're building, why, and what it costs, without needing a technical background.",
  },
  {
    title: "Your data stays private",
    body: "We sign an NDA before seeing anything and use AI providers that don't train on your data.",
  },
  {
    title: "You own everything",
    body: "Everything we build for you is yours. No lock-in, and full documentation if you ever want to take it in-house.",
  },
];

export const testimonials = [
  {
    quote:
      "Sorai Tech demonstrated exceptional commitment and technical skills throughout our finance platform project. Their expertise in full-stack development, cloud deployment, and payment integrations was outstanding.",
    name: "Parag Agarwal",
    role: "Engineering Manager, Piramal Finance",
  },
  {
    quote:
      "I needed a professional cybersecurity website that would establish credibility with government clients. Their team of 3 developers built it in 4 weeks — attention to SEO and content structure was impressive.",
    name: "Pete Slade",
    role: "Founder and Cybersecurity Strategist",
  },
];

export const faqs = [
  {
    q: "Do we need a technical team to work with you?",
    a: "No. Most of our clients don't have one. We handle the technical side and explain everything in plain language. You bring the knowledge of your business.",
  },
  {
    q: "How much does it cost?",
    a: "The audit is a fixed fee. After that, each project is quoted at a fixed price before we start, based on the savings we expect it to deliver. Ongoing support is a simple monthly fee.",
  },
  {
    q: "How quickly will we see results?",
    a: "You get the audit report within one to two weeks. A first working solution is usually in your team's hands within one to two months.",
  },
  {
    q: "Will AI replace my staff?",
    a: "Our goal is to take repetitive work off your team's plate so they can spend their time on customers and decisions. Most businesses use the time saved to grow without hiring as fast.",
  },
  {
    q: "Is our data safe?",
    a: "Yes. We sign an NDA before seeing anything, keep data in your own accounts where possible, and only use AI providers that don't train on your data.",
  },
  {
    q: "What if AI isn't right for our business?",
    a: "Then we'll tell you. It's better for both of us to find that out in a free call than halfway through a project.",
  },
];

// Team section. Deliberately anonymous: no names, photos or personal links.
export const founder = {
  eyebrow: "Founded by IITians",
  title: "Talk directly to the people advising you.",
  bio: [
    "Soraaitech was started by IIT-trained engineers (IIT Bombay) who build AI systems that run inside large companies every day. We started it so growing businesses can get the same benefits without hiring an AI team of their own.",
    "When you work with us, you work directly with the founding team and a small group who've put AI into real use. No sales layer, no hand-offs.",
  ],
};
