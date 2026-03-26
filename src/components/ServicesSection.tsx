"use client";

import { motion } from "framer-motion";
import { 
  FiPenTool,
  FiCode, 
  FiServer, 
  FiLayout,
  FiUsers,
  FiZap,
  FiBox,
  FiGitBranch,
} from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    id: "design",
    title: "UI/UX Design",
    description: "End-to-end product design in Figma — wireframes, prototypes, design systems, and pixel-perfect handoffs that developers actually love working with.",
    icon: <FiPenTool className="text-orange-400 text-3xl" />,
    tags: ["Figma", "Prototyping", "Design Systems"],
    delay: 0.1,
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Modern, responsive interfaces built with React, Next.js, and TypeScript. Fast load times, accessible, and exactly matching your Figma specs.",
    icon: <FiLayout className="text-orange-400 text-3xl" />,
    tags: ["React", "Next.js", "TypeScript"],
    delay: 0.15,
  },
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Scalable APIs, databases, and server infrastructure. Node.js, Python, PostgreSQL — built for reliability and performance from day one.",
    icon: <FiServer className="text-orange-400 text-3xl" />,
    tags: ["Node.js", "Python", "PostgreSQL"],
    delay: 0.2,
  },
  {
    id: "webflow",
    title: "Webflow Development",
    description: "Marketing sites, landing pages, and CMS-driven platforms on Webflow. Designed and built so your team can update content without touching code.",
    icon: <FiBox className="text-orange-400 text-3xl" />,
    tags: ["Webflow", "CMS", "No-Code"],
    delay: 0.25,
  },
  {
    id: "workflows",
    title: "Workflow Automation",
    description: "Connecting your tools and automating repetitive work. Integrations, internal tools, and custom workflows that save your team hours every week.",
    icon: <FiGitBranch className="text-orange-400 text-3xl" />,
    tags: ["Integrations", "Automation", "Internal Tools"],
    delay: 0.3,
  },
  {
    id: "product-management",
    title: "Product Management",
    description: "Dedicated product managers who own the roadmap, run sprints, manage stakeholders, and make sure what ships actually solves the right problem.",
    icon: <FiUsers className="text-orange-400 text-3xl" />,
    tags: ["Roadmaps", "Sprints", "Stakeholder Mgmt"],
    delay: 0.35,
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "Practical AI features for your product — chatbots, recommendations, document processing, and custom ML models that create real value.",
    icon: <FiZap className="text-orange-400 text-3xl" />,
    tags: ["LLMs", "ML Models", "AI Features"],
    delay: 0.4,
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    description: "AWS/GCP infrastructure, CI/CD pipelines, containerization, and monitoring. We ship it and we keep it running.",
    icon: <FiCode className="text-orange-400 text-3xl" />,
    tags: ["AWS", "Docker", "CI/CD"],
    delay: 0.45,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">Ship a Product</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From the first wireframe in Figma to a live product with real users — we provide the full team. Design, engineering, product management, and ongoing support.
          </p>
        </motion.div>

        {/* How it works mini-explainer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-20 pt-8"
        >
          {["You bring the idea", "We bring the team", "Together we ship"].map((step, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-400 text-sm">
              <span className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-gray-900/80 border border-gray-700/50 rounded-xl p-7 hover:border-orange-400/30 transition-colors duration-300 flex flex-col"
            >
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-5">
                {service.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm mb-5 flex-1">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[11px] text-gray-500 bg-white/5 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full product team pitch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="bg-gray-900/80 border border-gray-700/50 rounded-2xl p-12 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 text-white">
                  Get a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
                    complete product team
                  </span>
                  {" "}without the overhead
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Instead of hiring 5-8 people, get a ready-made team that&apos;s already worked together. 
                  Designer, frontend engineer, backend engineer, and product manager — aligned from day one. 
                  We plug into your workflow and start delivering in week one.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  Discuss Your Project
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { role: "Product Manager", desc: "Owns roadmap, runs sprints, aligns stakeholders" },
                  { role: "UI/UX Designer", desc: "Figma designs, prototypes, design system" },
                  { role: "Frontend Engineer", desc: "React/Next.js or Webflow implementation" },
                  { role: "Backend Engineer", desc: "APIs, databases, cloud infrastructure" },
                ].map((member, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/5">
                    <p className="text-sm font-bold text-orange-400 mb-1">{member.role}</p>
                    <p className="text-xs text-gray-400">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-10 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a product idea?</h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Tell us what you&apos;re building and we&apos;ll put together the right team — design, engineering, product, whatever you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block">
                Start a Conversation
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 inline-block">
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
