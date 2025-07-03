"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Sorai Tech's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
        "If you do not agree with any part of these terms, you must not use our website or services.",
        "These terms apply to all visitors, users, and others who access or use our services.",
        "We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of such changes."
      ]
    },
    {
      title: "Description of Services",
      content: [
        "Sorai Tech provides software development, AI consulting, technical architecture, and related technology services.",
        "We offer custom software solutions, AI integration services, full-stack development, and cloud infrastructure consulting.",
        "Our services are provided on a project basis or through ongoing consulting arrangements as agreed upon in separate contracts.",
        "Service specifications, timelines, and deliverables are detailed in individual project agreements or statements of work."
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "You agree to provide accurate and complete information when requesting our services or communicating with us.",
        "You are responsible for maintaining the confidentiality of any access credentials we provide.",
        "You must not use our services for any illegal, harmful, or unauthorized purposes.",
        "You agree to cooperate with us in good faith to achieve project objectives and timelines.",
        "You are responsible for providing necessary resources, information, and approvals required for project completion."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All original work product created by Sorai Tech for clients becomes the property of the client upon full payment, unless otherwise specified in the project agreement.",
        "Sorai Tech retains ownership of pre-existing intellectual property, methodologies, and general knowledge used in providing services.",
        "Clients grant Sorai Tech the right to showcase completed work in our portfolio and marketing materials, unless confidentiality agreements specify otherwise.",
        "Both parties agree to respect and protect each other's intellectual property rights."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Payment terms are specified in individual project agreements or invoices.",
        "Unless otherwise agreed, payments are due within 30 days of invoice date.",
        "Late payments may incur interest charges and may result in suspension of services.",
        "All prices are quoted exclusive of applicable taxes unless otherwise stated.",
        "Refunds are handled on a case-by-case basis as outlined in individual project agreements."
      ]
    },
    {
      title: "Confidentiality",
      content: [
        "We maintain strict confidentiality regarding all client information and project details.",
        "Both parties agree to protect confidential information received during the course of our business relationship.",
        "Confidentiality obligations survive the termination of our services.",
        "We may use anonymized case studies and general project descriptions for marketing purposes unless prohibited by confidentiality agreements."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Sorai Tech's liability is limited to the amount paid for the specific services that gave rise to the claim.",
        "We are not liable for any indirect, incidental, special, or consequential damages.",
        "We do not guarantee uninterrupted or error-free operation of software or systems we develop.",
        "Clients are responsible for maintaining appropriate backups and disaster recovery procedures.",
        "Our liability is further limited by the terms specified in individual project agreements."
      ]
    },
    {
      title: "Warranties and Disclaimers",
      content: [
        "We warrant that our services will be performed with professional skill and care.",
        "We provide a limited warranty on our work as specified in individual project agreements.",
        "Except as expressly stated, all services are provided 'as is' without warranties of any kind.",
        "We disclaim all warranties, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose.",
        "Any third-party software or services integrated into our solutions are subject to their respective terms and warranties."
      ]
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate our services with appropriate notice as specified in project agreements.",
        "Upon termination, clients remain responsible for payment of all services performed up to the termination date.",
        "We will deliver all completed work product and return client materials upon final payment.",
        "Termination does not relieve either party of obligations that by their nature should survive termination.",
        "We reserve the right to immediately terminate services for breach of these terms or non-payment."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of Gujarat, India.",
        "Any disputes arising from these terms or our services will be subject to the jurisdiction of courts in Rajkot, Gujarat.",
        "Both parties agree to attempt to resolve disputes through good faith negotiation before pursuing legal action.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions remain in full effect.",
        "These terms constitute the entire agreement between parties regarding the use of our website and general service terms."
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container-custom mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Terms of Service</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Last updated: January 1, 2024
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              These Terms of Service govern your use of Sorai Tech&apos;s website and services. Please read them carefully 
              as they contain important information about your rights and obligations.
            </p>
          </motion.div>
        </section>

        {/* Terms Sections */}
        <section className="container-custom">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6 font-heading">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 dark:bg-dark/30 py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6 font-heading">Questions About These Terms?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                If you have any questions about these Terms of Service or need clarification on any provisions, 
                please contact us. We&apos;re here to help explain our terms and discuss how they apply to your specific situation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div>
                  <h3 className="font-bold mb-2">Legal Inquiries</h3>
                  <a 
                    href="mailto:legal@soraitech.com" 
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    legal@soraitech.com
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-2">General Questions</h3>
                  <a 
                    href="/contact" 
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Contact our team
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white dark:bg-dark/50 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Sorai Tech</strong><br />
                  123 Tech Avenue<br />
                  Rajkot, Gujarat, India<br />
                  Email: info@soraitech.com<br />
                  Phone: +91 7231972519
                </p>
              </div>
              
              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  These terms supplement any specific project agreements or contracts you may have with Sorai Tech. 
                  In case of conflicts, the terms of individual project agreements take precedence.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 