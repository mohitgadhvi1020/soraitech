"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiMapPin, FiUsers, FiClock, FiServer, FiShield, FiZap } from "react-icons/fi";

export default function Case3Page() {
  const metrics = [
    { label: "Deployment Time Reduction", value: "95%", icon: FiClock },
    { label: "System Uptime", value: "99.9%", icon: FiServer },
    { label: "Security Incidents", value: "0", icon: FiShield },
    { label: "Release Frequency", value: "10x", icon: FiZap },
  ];

  const technologies = [
    "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitLab CI/CD", 
    "Prometheus", "Grafana", "ELK Stack", "Ansible", "Vault", "Consul", "Istio", "ArgoCD"
  ];

  const challenges = [
    "Manual deployment processes taking days to complete with high error rates",
    "Legacy on-premise infrastructure limiting scalability and reliability",
    "Lack of monitoring and observability causing delayed incident response",
    "Inconsistent environments between development, staging, and production",
    "Security vulnerabilities due to outdated systems and manual configurations",
    "High operational costs and resource inefficiency"
  ];

  const solutions = [
    "Implemented Infrastructure as Code using Terraform for consistent deployments",
    "Migrated to AWS cloud with auto-scaling and high availability architecture",
    "Built comprehensive CI/CD pipelines with automated testing and deployment",
    "Established monitoring and alerting system with Prometheus and Grafana",
    "Implemented security best practices with automated compliance checks",
    "Created disaster recovery and backup strategies with automated failover"
  ];

  const phases = [
    {
      title: "Assessment & Planning",
      duration: "2 weeks",
      description: "Infrastructure audit, migration strategy, and risk assessment",
      deliverables: ["Current state analysis", "Migration roadmap", "Risk mitigation plan"]
    },
    {
      title: "Cloud Foundation",
      duration: "4 weeks", 
      description: "AWS account setup, networking, security, and core services",
      deliverables: ["VPC configuration", "Security groups", "IAM policies", "Monitoring setup"]
    },
    {
      title: "Application Migration",
      duration: "6 weeks",
      description: "Containerization, microservices deployment, and data migration",
      deliverables: ["Dockerized applications", "Kubernetes clusters", "Database migration"]
    },
    {
      title: "CI/CD Implementation",
      duration: "4 weeks",
      description: "Automated pipelines, testing frameworks, and deployment automation",
      deliverables: ["GitLab CI/CD pipelines", "Automated testing", "Deployment workflows"]
    },
    {
      title: "Optimization & Training",
      duration: "2 weeks",
      description: "Performance tuning, cost optimization, and team training",
      deliverables: ["Performance reports", "Cost analysis", "Training documentation"]
    }
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Faster Time to Market",
      description: "Reduced deployment time from days to minutes with automated CI/CD pipelines"
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description: "40% reduction in infrastructure costs through efficient resource utilization"
    },
    {
      icon: "🔒",
      title: "Enhanced Security",
      description: "Automated security scanning and compliance checks in every deployment"
    },
    {
      icon: "📊",
      title: "Better Observability",
      description: "Real-time monitoring and alerting for proactive issue resolution"
    },
    {
      icon: "🚀",
      title: "Improved Scalability",
      description: "Auto-scaling capabilities to handle traffic spikes automatically"
    },
    {
      icon: "🛡️",
      title: "Disaster Recovery",
      description: "Automated backup and recovery processes with RTO < 1 hour"
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
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Cloud & DevOps
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Cloud Migration & DevOps Automation
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                Complete infrastructure transformation with cloud migration and DevOps automation, 
                reducing deployment time by 95% and achieving 99.9% uptime.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>Project Duration: 4.5 months</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>Industry: Financial Services</span>
              </div>
              <div className="flex items-center">
                <FiUsers className="mr-2" />
                <span>Team Size: 6 members</span>
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
              Migration Success Metrics
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
                A growing financial services company was struggling with outdated 
                infrastructure and manual deployment processes. Their legacy systems 
                were becoming a bottleneck for innovation and growth, with frequent 
                downtime and security concerns.
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
                We designed and executed a comprehensive cloud migration strategy 
                with full DevOps automation. The solution focused on reliability, 
                security, and operational efficiency while maintaining zero downtime 
                during the migration process.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Implementation Strategy:</h3>
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

        {/* Migration Phases */}
        <section className="bg-primary/5 py-16 mb-16">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Migration Phases
            </motion.h2>
            
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm text-primary font-medium">{phase.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-primary">{phase.title}</h3>
                    </div>
                    
                    <div className="md:col-span-2">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{phase.description}</p>
                    </div>
                    
                    <div className="md:col-span-1">
                      <h4 className="font-semibold mb-2">Key Deliverables:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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

        {/* Key Benefits */}
        <section className="bg-gray-50 dark:bg-gray-900 py-16 mb-16">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key Benefits Achieved
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="container-custom mb-16">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Cloud Architecture Overview
          </motion.h2>
          
          <motion.div
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Production Environment</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">EKS Cluster</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">Auto Scaling Groups</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">Load Balancers</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">RDS Multi-AZ</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">CI/CD Pipeline</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">GitLab CI/CD</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">Automated Testing</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">Security Scanning</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">ArgoCD Deployment</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Monitoring & Security</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">Prometheus</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">Grafana Dashboards</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">ELK Stack</div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm text-gray-700 dark:text-gray-200">AWS Security Hub</div>
                </div>
              </div>
            </div>
          </motion.div>
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
              <h2 className="text-3xl font-bold mb-6 font-heading">Client Success Story</h2>
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                  &ldquo;The cloud migration and DevOps transformation has revolutionized our operations. 
                  We&apos;ve gone from manual deployments taking days to automated releases in minutes. 
                  The reliability and security improvements have given us the confidence to innovate 
                  faster than ever before.&rdquo;
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    D
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">David Park</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CTO, FinTech Solutions</div>
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
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you migrate to the cloud and implement DevOps best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Migration
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