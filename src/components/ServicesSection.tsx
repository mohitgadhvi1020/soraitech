"use client";

import { motion } from "framer-motion";
import { FiActivity, FiCode, FiServer, FiDatabase, FiLayers, FiRefreshCw } from "react-icons/fi";
import Link from "next/link";

const services = [
  {
    id: "ai-consulting",
    title: "AI Consulting",
    description: "Leverage cutting-edge AI technologies like LLMs, ML models, and GenAI to enhance your business processes and products.",
    icon: <FiActivity className="text-primary text-3xl" />,
    delay: 0.1,
  },
  {
    id: "software-development",
    title: "Full-Stack Development",
    description: "Build robust, scalable applications with modern technologies tailored to your specific business requirements.",
    icon: <FiCode className="text-primary text-3xl" />,
    delay: 0.2,
  },
  {
    id: "product-development",
    title: "End-to-End Product Development",
    description: "From concept to deployment, we guide your product through discovery, design, development, and scaling.",
    icon: <FiLayers className="text-primary text-3xl" />,
    delay: 0.3,
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps & CI/CD",
    description: "Optimize your infrastructure with cloud-native solutions and automated deployment pipelines for maximum efficiency.",
    icon: <FiServer className="text-primary text-3xl" />,
    delay: 0.4,
  },
  {
    id: "technical-architecture",
    title: "Technical Architecture",
    description: "Design robust system architectures that scale effortlessly and adapt to changing business needs.",
    icon: <FiDatabase className="text-primary text-3xl" />,
    delay: 0.5,
  },
  {
    id: "tech-modernization",
    title: "Tech Stack Modernization",
    description: "Update legacy systems with modern technologies to improve performance, security, and maintainability.",
    icon: <FiRefreshCw className="text-primary text-3xl" />,
    delay: 0.6,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We offer a comprehensive range of technology and AI services to help businesses innovate and stay ahead in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="bg-white dark:bg-dark/50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <Link 
                href={`/services#${service.id}`} 
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Learn more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
} 