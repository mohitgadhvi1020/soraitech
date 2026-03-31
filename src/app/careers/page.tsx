"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper, { SectionHeader } from "@/components/SectionWrapper";
import { FiMapPin, FiClock, FiUsers } from "react-icons/fi";

const benefits = [
  { title: "Real ownership", desc: "You own features end-to-end. No ticket factories." },
  { title: "Remote-friendly", desc: "Work from anywhere. We care about output, not hours." },
  { title: "Learning budget", desc: "Annual budget for courses, conferences, and certifications." },
  { title: "Competitive pay", desc: "Market-rate salaries with performance bonuses." },
  { title: "Small team", desc: "Your work has direct impact. No layers of management." },
  { title: "Interesting clients", desc: "Cybersecurity, manufacturing, finance \u2014 not the same SaaS dashboard every time." },
];

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    experience: "3-5 years",
    description: "Work on client products end-to-end \u2014 from React frontends to Node.js APIs to cloud deployments.",
    requirements: [
      "Strong React, Node.js, and TypeScript experience",
      "Familiarity with AWS or GCP",
      "Comfortable with agile sprint workflows",
      "AI/ML integration experience is a bonus",
    ],
  },
  {
    title: "AI/ML Engineer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Build and deploy ML models that solve real business problems for our clients.",
    requirements: [
      "Python, TensorFlow or PyTorch",
      "Experience with NLP, CV, or recommendation systems",
      "Ability to take models from notebook to production",
      "MLOps and monitoring experience",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Bangalore / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Build infrastructure and CI/CD pipelines that let our teams deploy with confidence.",
    requirements: [
      "Docker, Kubernetes, and Terraform",
      "AWS or GCP hands-on experience",
      "Strong scripting skills (Bash, Python)",
      "Monitoring with Prometheus, Grafana, or similar",
    ],
  },
];

const hiringSteps = [
  { step: "1", title: "Apply", desc: "Send your resume to careers@soraitech.com" },
  { step: "2", title: "Chat", desc: "30-min call to learn about each other" },
  { step: "3", title: "Technical", desc: "Practical assessment relevant to the role" },
  { step: "4", title: "Offer", desc: "Meet the team and finalize details" },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-20 bg-gradient-to-br from-brand-600 via-brand-700 to-surface-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-200 mb-3">
                Careers
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
                Join{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  Sorai Tech
                </span>
              </h1>
              <p className="text-lg text-white/80">
                We&apos;re a small team that ships real products. If you want ownership over your work and variety in your projects, we might be a good fit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <SectionWrapper>
          <SectionHeader label="Perks" title="What You Get" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-card hover:border-brand-200/50 transition-all duration-300"
              >
                <h3 className="text-sm font-bold mb-2 text-gray-900">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Open Positions */}
        <SectionWrapper className="bg-gray-50">
          <SectionHeader label="Openings" title="Open Positions" />
          <div className="space-y-6">
            {openPositions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-card transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{pos.title}</h3>
                      <span className="bg-brand-50 text-brand-600 px-3 py-1 rounded-full text-xs font-medium border border-brand-100">
                        {pos.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-5 text-gray-500 text-sm mb-4">
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={14} className="text-brand-500" />
                        {pos.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiClock size={14} className="text-brand-500" />
                        {pos.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiUsers size={14} className="text-brand-500" />
                        {pos.experience}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{pos.description}</p>

                    <ul className="space-y-1.5">
                      {pos.requirements.map((req, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-500 text-sm">
                          <span className="text-brand-500 mt-0.5">&#x2022;</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href={`mailto:careers@soraitech.com?subject=Application: ${pos.title}`}
                      className="inline-block px-6 py-3 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 transition-colors text-sm"
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Hiring Process */}
        <SectionWrapper>
          <SectionHeader label="Process" title="How Hiring Works" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {hiringSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="bg-brand-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold mb-1 text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white font-heading">
                Don&apos;t See the Right Role?
              </h2>
              <p className="text-white/80 mb-6 text-sm max-w-md mx-auto">
                We&apos;re always open to meeting talented people. Send your resume anyway.
              </p>
              <a
                href="mailto:careers@soraitech.com"
                className="inline-block bg-white text-gray-900 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                careers@soraitech.com
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
