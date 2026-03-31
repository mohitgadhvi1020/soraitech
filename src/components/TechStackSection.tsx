"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import {
  FiCode,
  FiLayers,
  FiPenTool,
  FiServer,
  FiCpu,
  FiCloud,
  FiTrendingUp,
} from "react-icons/fi";

type TechCategory = {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
};

const CATEGORIES: TechCategory[] = [
  {
    title: "Design",
    description: "Product UI/UX that’s clear, conversion-focused, and dev-ready.",
    icon: <FiPenTool className="text-xl" />,
    items: ["Figma", "Prototyping", "Design systems", "UX flows", "Copy + IA"],
  },
  {
    title: "Frontend",
    description: "Pixel-perfect UI, fast load times, and clean UX.",
    icon: <FiLayers className="text-xl" />,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "CMS & Marketing Sites",
    description: "Fast landing pages your team can update without engineering.",
    icon: <FiLayers className="text-xl" />,
    items: ["Webflow", "WordPress", "Headless CMS", "Landing pages", "Analytics + tracking"],
  },
  {
    title: "Backend",
    description: "Scalable APIs, auth, and data layers built to grow.",
    icon: <FiServer className="text-xl" />,
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "REST / GraphQL"],
  },
  {
    title: "AI & Automation",
    description: "Practical AI that saves time and drives outcomes.",
    icon: <FiCpu className="text-xl" />,
    items: ["LLM integrations", "RAG + embeddings", "Agents & workflows", "Document automation", "Internal tools"],
  },
  {
    title: "DevOps",
    description: "Production-ready infra with monitoring and CI/CD.",
    icon: <FiCloud className="text-xl" />,
    items: ["AWS / GCP", "Vercel", "Docker", "CI/CD pipelines", "Observability"],
  },
  {
    title: "Growth",
    description: "Built to rank and convert — on Google and AI search.",
    icon: <FiTrendingUp className="text-xl" />,
    items: ["Technical SEO", "AEO (AI search)", "Schema & structured data", "Content strategy", "Analytics"],
  },
  {
    title: "Quality",
    description: "Maintainable code with performance baked in.",
    icon: <FiCode className="text-xl" />,
    items: ["Core Web Vitals", "Accessibility", "Testing strategy", "Performance budgets", "Code reviews"],
  },
];

export default function TechStackSection({
  id = "tech-stack",
  dark = false,
}: {
  id?: string;
  dark?: boolean;
}) {
  return (
    <SectionWrapper
      id={id}
      dark={dark}
      className={dark ? "bg-surface-950" : "bg-white"}
    >
      <SectionHeader
        label="Capabilities"
        title={
          <>
            A Tech Stack Built to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
              Ship & Scale
            </span>
          </>
        }
        subtitle="We’re flexible on tooling and opinionated on quality. These are the systems we ship with most often."
        dark={dark}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.title}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`rounded-2xl border p-7 transition-all duration-300 ${
              dark
                ? "bg-white/[0.06] border-white/[0.12] hover:border-brand-400/30 hover:shadow-glow"
                : "bg-gray-50 border-gray-100 hover:border-brand-200/60 hover:shadow-card-hover"
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  dark ? "bg-brand-500/10 text-brand-300" : "bg-brand-500/10 text-brand-600"
                }`}
              >
                {cat.icon}
              </div>
              <div>
                <h3 className={`${dark ? "text-white" : "text-gray-900"} font-bold text-lg`}>
                  {cat.title}
                </h3>
                <p className={`${dark ? "text-gray-400" : "text-gray-600"} text-sm leading-relaxed`}>
                  {cat.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`text-xs px-3 py-1.5 rounded-full border ${
                    dark
                      ? "text-gray-200 bg-white/[0.05] border-white/[0.10]"
                      : "text-gray-700 bg-white border-gray-200/70"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

