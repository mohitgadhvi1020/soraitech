"use client";

import { FiSend, FiServer, FiCpu, FiSearch, FiActivity } from "react-icons/fi";
import ServiceCard from "./ServiceCard";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const services = [
  {
    icon: <FiSend className="text-xl" />,
    title: "Launch your MVP in 2–4 weeks",
    outcome: "Go from idea to live product — fast. We handle design, code, and deployment.",
    bullets: [
      "UI/UX design in Figma",
      "Full-stack development (React + Node.js)",
      "Cloud deployment & CI/CD",
    ],
  },
  {
    icon: <FiServer className="text-xl" />,
    title: "Scale backend to handle 10k+ users",
    outcome: "Architecture that grows with you. No rewrites, no downtime.",
    bullets: [
      "Database optimization & caching",
      "Microservices & load balancing",
      "Infrastructure monitoring",
    ],
  },
  {
    icon: <FiCpu className="text-xl" />,
    title: "Automate workflows with AI",
    outcome: "Save hours every week by letting AI handle repetitive tasks.",
    bullets: [
      "Custom LLM integrations",
      "Document processing & chatbots",
      "Internal tool automation",
    ],
  },
  {
    icon: <FiSearch className="text-xl" />,
    title: "Rank on Google + AI search (SEO + AEO)",
    outcome: "Get found by humans and AI. Organic growth on autopilot.",
    bullets: [
      "Technical SEO audit & fixes",
      "Content strategy & creation",
      "AI search optimization (AEO)",
    ],
  },
  {
    icon: <FiActivity className="text-xl" />,
    title: "Optimize product performance & UX",
    outcome: "Faster loads, better UX, higher conversion rates.",
    bullets: [
      "Core Web Vitals optimization",
      "UX audit & redesign",
      "A/B testing & analytics",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface-900 text-white">
      <div className="container-custom">
        <SectionHeader
          label="Services"
          title={
            <>
              Outcome-Driven{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
                Solutions
              </span>
            </>
          }
          subtitle="We don't just write code — we deliver business outcomes. Each engagement is built around what you actually need."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
