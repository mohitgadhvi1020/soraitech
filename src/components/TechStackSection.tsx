"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Design",
    tools: ["Figma", "Framer", "Adobe XD", "Whimsical"],
  },
  {
    label: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Webflow"],
  },
  {
    label: "Backend",
    tools: ["Node.js", "Python", "Java", "GraphQL", "REST APIs"],
  },
  {
    label: "Database & Cloud",
    tools: ["PostgreSQL", "MongoDB", "Redis", "AWS", "GCP"],
  },
  {
    label: "DevOps",
    tools: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
  },
  {
    label: "Product & PM",
    tools: ["Jira", "Linear", "Notion", "Slack", "Loom"],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tools We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Work With</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We&apos;re flexible on tooling and opinionated on quality. Here&apos;s what our team uses across design, engineering, and product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-6"
            >
              <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-4">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
