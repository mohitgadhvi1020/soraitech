// All site copy lives here. Edit this file, not the components.
// Audience: business owners and team leads who want AI to save time and money.
// Write in plain language. Only put real clients, real numbers and real quotes on the site.

export const CONTACT_EMAIL = "hello@soraitech.in"; // TODO: confirm the inbox you actually read

export const nav = [
  { name: "Services", href: "/#services" },
  { name: "Use cases", href: "/#use-cases" },
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

export type Service = {
  id: string;
  name: string;
  outcome: string;
  detail: string;
  includes: string[];
  timeline: string;
};

export const services: Service[] = [
  {
    id: "audit",
    name: "AI Opportunity Audit",
    outcome: "Find out where AI will actually save you time and money.",
    detail:
      "We spend time with your team, look at how work really gets done, and pinpoint the tasks AI can take over. You get a clear report: what to automate first, what it will cost, and what it should save. No obligation to build anything with us.",
    includes: ["Interviews with your team", "Ranked list of opportunities", "Costs, savings and a clear plan"],
    timeline: "1–2 weeks, fixed fee",
  },
  {
    id: "support",
    name: "Customer support AI",
    outcome: "Answer customers instantly, day and night.",
    detail:
      "An assistant on your website, WhatsApp or email that answers common questions from your own policies and product information. Anything it isn't sure about goes straight to your team, so customers never get a made-up answer.",
    includes: ["Website, WhatsApp and email", "Answers from your own information", "Hands off to your team when needed"],
    timeline: "3–6 weeks",
  },
  {
    id: "documents",
    name: "Document and data-entry automation",
    outcome: "Stop typing invoices, forms and contracts into systems by hand.",
    detail:
      "AI reads your invoices, purchase orders, applications and contracts, pulls out the details and enters them where they belong. Your team only checks the few that need a second look.",
    includes: ["Invoices, forms and contracts", "Flags anything unclear for review", "Connects to your accounting or CRM"],
    timeline: "3–6 weeks",
  },
  {
    id: "operations",
    name: "Sales and operations automation",
    outcome: "Follow-ups, reports and admin that run themselves.",
    detail:
      "Qualifying leads, sending follow-ups, updating your CRM, preparing weekly reports, routing requests to the right person. We automate the repetitive steps and keep a person in charge of anything important.",
    includes: ["Lead follow-up and CRM updates", "Automatic reports", "Approval before anything important goes out"],
    timeline: "3–8 weeks",
  },
  {
    id: "training",
    name: "Team training and AI adoption",
    outcome: "Get your people using AI confidently and safely.",
    detail:
      "Practical workshops built around your team's real work, plus simple rules on what's safe to share with AI tools. Many teams save hours a week just by using the tools they already pay for properly.",
    includes: ["Hands-on workshops", "AI usage policy for your company", "Follow-up support"],
    timeline: "1–2 days, plus follow-up",
  },
];

// Use cases by team. Illustrative examples of what's possible, not client claims.
export const useCases = [
  {
    team: "Customer service",
    before: "Staff answer the same 30 questions every day and customers wait hours for a reply.",
    after: "Common questions are answered in seconds. Your team handles only the conversations that need a person.",
  },
  {
    team: "Finance and accounts",
    before: "Invoices and bills are typed into the accounting system by hand, with errors to chase later.",
    after: "Details are read and entered automatically. Your team reviews the exceptions.",
  },
  {
    team: "Sales",
    before: "Leads go cold because nobody followed up in time, and the CRM is always out of date.",
    after: "Every lead gets a fast, personal reply and the CRM updates itself.",
  },
  {
    team: "Operations",
    before: "Managers spend Monday mornings pulling numbers from five places into a report.",
    after: "The report is waiting in their inbox, with the numbers that need attention highlighted.",
  },
  {
    team: "HR and admin",
    before: "Employees keep asking HR the same policy questions, and onboarding is a pile of documents.",
    after: "An internal assistant answers policy questions instantly, from your own handbook.",
  },
  {
    team: "Leadership",
    before: "Lots of talk about AI, but no clear idea where it would pay off or what it would cost.",
    after: "A short, costed plan showing which projects to do first and what each should return.",
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
