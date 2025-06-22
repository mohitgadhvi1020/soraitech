"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiMapPin, FiUsers, FiTrendingUp, FiClock, FiDollarSign } from "react-icons/fi";

export default function Case1Page() {
  const metrics = [
    { label: "Support Requests Automated", value: "75%", icon: FiTrendingUp },
    { label: "Response Time Reduction", value: "90%", icon: FiClock },
    { label: "Cost Savings", value: "$2.4M", icon: FiDollarSign },
    { label: "Customer Satisfaction", value: "96%", icon: FiUsers },
  ];

  const technologies = [
    "OpenAI GPT-4", "LangChain", "Python", "FastAPI", "React", "TypeScript", 
    "PostgreSQL", "Redis", "Docker", "AWS", "Kubernetes", "Elasticsearch"
  ];

  const challenges = [
    "High volume of repetitive customer inquiries overwhelming support staff",
    "Inconsistent response quality across different support agents",
    "24/7 support requirements with limited human resources",
    "Language barriers affecting international customer support",
    "Slow response times during peak hours leading to customer dissatisfaction"
  ];

  const solutions = [
    "Implemented GPT-4 powered chatbot with custom training on company knowledge base",
    "Built intelligent routing system to escalate complex queries to human agents",
    "Created multilingual support capabilities for global customer base",
    "Developed real-time analytics dashboard for monitoring bot performance",
    "Integrated seamless handoff mechanism between AI and human agents"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Header Section */}
        <section className="container-custom mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/case-studies" 
              className="inline-flex items-center text-primary hover:underline mb-8"
            >
              <FiArrowLeft className="mr-2" />
              Back to Case Studies
            </Link>
            
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Artificial Intelligence
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                AI-Powered Customer Service Platform
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                Revolutionizing customer support with intelligent automation that delivers 
                instant, accurate responses while maintaining the human touch when needed.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>Project Duration: 6 months</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>Industry: E-commerce</span>
              </div>
              <div className="flex items-center">
                <FiUsers className="mr-2" />
                <span>Team Size: 8 members</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Metrics */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 mb-16">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Project Impact
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary text-xl" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="container-custom mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-heading">The Challenge</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our client, a rapidly growing e-commerce platform, was struggling with an 
                overwhelming volume of customer support requests. Their human support team 
                was drowning in repetitive queries, leading to delayed responses and 
                decreased customer satisfaction.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Key Pain Points:</h3>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-heading">Our Solution</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We developed an intelligent AI-powered customer service platform that 
                combines the efficiency of automation with the empathy of human support. 
                The system intelligently handles routine inquiries while seamlessly 
                escalating complex issues to human agents.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Implementation Highlights:</h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-primary/5 py-16 mb-16">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technology Stack
            </motion.h2>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="container-custom mb-16">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Project Timeline
          </motion.h2>
          
          <div className="space-y-8">
            {[
              {
                phase: "Phase 1: Discovery & Planning",
                duration: "Weeks 1-2",
                description: "Requirements gathering, stakeholder interviews, and technical architecture design"
              },
              {
                phase: "Phase 2: AI Model Development",
                duration: "Weeks 3-8",
                description: "Custom LLM fine-tuning, knowledge base creation, and initial bot training"
              },
              {
                phase: "Phase 3: Platform Development",
                duration: "Weeks 9-16",
                description: "Frontend and backend development, integration with existing systems"
              },
              {
                phase: "Phase 4: Testing & Optimization",
                duration: "Weeks 17-20",
                description: "Comprehensive testing, performance optimization, and user acceptance testing"
              },
              {
                phase: "Phase 5: Deployment & Training",
                duration: "Weeks 21-24",
                description: "Production deployment, staff training, and continuous monitoring setup"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{phase.phase}</h3>
                    <span className="text-sm text-primary font-medium">{phase.duration}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results & Testimonial */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 mb-16">
          <div className="container-custom">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-heading">Results & Client Feedback</h2>
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                  &ldquo;The AI customer service platform has completely transformed our support operations. 
                  We&apos;re now able to provide instant, accurate responses to our customers 24/7, 
                  while our human agents can focus on complex issues that truly require their expertise. 
                  The ROI has exceeded our expectations.&rdquo;
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CTO, E-commerce Platform</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-heading">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build a custom AI solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View More Case Studies
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
} 