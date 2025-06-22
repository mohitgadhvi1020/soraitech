"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiMapPin, FiUsers, FiTrendingUp, FiClock, FiShoppingCart, FiGlobe } from "react-icons/fi";

export default function Case2Page() {
  const metrics = [
    { label: "Performance Improvement", value: "300%", icon: FiTrendingUp },
    { label: "Page Load Time", value: "1.2s", icon: FiClock },
    { label: "Global Markets", value: "25+", icon: FiGlobe },
    { label: "Conversion Rate Increase", value: "45%", icon: FiShoppingCart },
  ];

  const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", 
    "Redis", "Elasticsearch", "Docker", "Kubernetes", "AWS", "CloudFront", "Stripe", "Shopify Plus"
  ];

  const challenges = [
    "Legacy monolithic architecture causing frequent downtime and slow performance",
    "Limited scalability preventing expansion to international markets",
    "Poor mobile experience leading to high bounce rates",
    "Inefficient inventory management system causing stock issues",
    "Lack of real-time analytics for business decision making",
    "Security vulnerabilities in payment processing system"
  ];

  const solutions = [
    "Migrated to microservices architecture for better scalability and maintainability",
    "Implemented server-side rendering with Next.js for optimal performance",
    "Built responsive, mobile-first design with progressive web app features",
    "Integrated advanced inventory management with real-time stock tracking",
    "Developed comprehensive analytics dashboard with business intelligence",
    "Enhanced security with PCI DSS compliance and advanced fraud detection"
  ];

  const features = [
    {
      title: "Microservices Architecture",
      description: "Modular, scalable backend services for better performance and maintenance"
    },
    {
      title: "Global CDN Integration",
      description: "Fast content delivery worldwide with AWS CloudFront"
    },
    {
      title: "Advanced Search & Filtering",
      description: "Elasticsearch-powered search with intelligent recommendations"
    },
    {
      title: "Real-time Inventory",
      description: "Live stock tracking and automated reorder notifications"
    },
    {
      title: "Multi-currency Support",
      description: "Seamless shopping experience across 25+ countries"
    },
    {
      title: "Progressive Web App",
      description: "Native app-like experience on mobile devices"
    }
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
              <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Full-Stack Development
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                E-Commerce Transformation & Scale
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                Complete platform modernization enabling global expansion with 300% performance 
                improvement and seamless user experience across all devices.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>Project Duration: 8 months</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>Industry: Retail & E-commerce</span>
              </div>
              <div className="flex items-center">
                <FiUsers className="mr-2" />
                <span>Team Size: 12 members</span>
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
              Transformation Results
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
                    <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-secondary text-xl" />
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-2">{metric.value}</div>
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
                A successful retail company with a growing online presence was constrained 
                by their legacy e-commerce platform. The outdated system was preventing 
                them from scaling globally and providing the modern shopping experience 
                customers expected.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Critical Issues:</h3>
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
              <h2 className="text-3xl font-bold mb-6 font-heading">Our Approach</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We designed and implemented a complete platform transformation using 
                modern technologies and best practices. The new system was built for 
                global scale, optimal performance, and exceptional user experience.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Key Improvements:</h3>
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

        {/* Key Features */}
        <section className="bg-secondary/5 py-16 mb-16">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Platform Features
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="container-custom mb-16">
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
        </section>

        {/* Architecture Diagram Section */}
        <section className="bg-gray-50 dark:bg-dark/30 py-16 mb-16">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              System Architecture
            </motion.h2>
            
            <motion.div
              className="bg-white dark:bg-dark/50 rounded-xl p-8 text-center shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary">Frontend Layer</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-secondary/10 p-3 rounded-lg">Next.js PWA</div>
                    <div className="bg-secondary/10 p-3 rounded-lg">React Components</div>
                    <div className="bg-secondary/10 p-3 rounded-lg">TypeScript</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary">API Layer</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-secondary/10 p-3 rounded-lg">GraphQL Gateway</div>
                    <div className="bg-secondary/10 p-3 rounded-lg">Microservices</div>
                    <div className="bg-secondary/10 p-3 rounded-lg">Load Balancer</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-secondary">Data Layer</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-secondary/10 p-3 rounded-lg">PostgreSQL</div>
                    <div className="bg-secondary/10 p-3 rounded-lg">Redis Cache</div>
                    <div className="bg-secondary/10 p-3 rounded-lg">Elasticsearch</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results & Testimonial */}
        <section className="bg-gradient-to-br from-secondary/10 to-primary/10 py-16 mb-16">
          <div className="container-custom">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-heading">Transformation Impact</h2>
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                  &ldquo;The platform transformation exceeded all our expectations. We&apos;ve not only 
                  improved our customer experience dramatically but also enabled our expansion into 
                  25 new international markets. The performance improvements have directly translated 
                  to increased sales and customer satisfaction.&rdquo;
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CEO, Global Retail Solutions</div>
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
              Ready to Scale Your E-commerce Platform?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can modernize your platform for global growth and optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Transformation
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