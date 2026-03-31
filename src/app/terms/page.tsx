"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using Sorai Tech\u2019s website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
      "If you do not agree with any part of these terms, you must not use our website or services.",
      "These terms apply to all visitors, users, and others who access or use our services.",
      "We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of such changes.",
    ],
  },
  {
    title: "Description of Services",
    content: [
      "Sorai Tech provides software development, AI consulting, technical architecture, and related technology services.",
      "We offer custom software solutions, AI integration services, full-stack development, and cloud infrastructure consulting.",
      "Our services are provided on a project basis or through ongoing consulting arrangements as agreed upon in separate contracts.",
      "Service specifications, timelines, and deliverables are detailed in individual project agreements or statements of work.",
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      "You agree to provide accurate and complete information when requesting our services or communicating with us.",
      "You are responsible for maintaining the confidentiality of any access credentials we provide.",
      "You must not use our services for any illegal, harmful, or unauthorized purposes.",
      "You agree to cooperate with us in good faith to achieve project objectives and timelines.",
      "You are responsible for providing necessary resources, information, and approvals required for project completion.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All original work product created by Sorai Tech for clients becomes the property of the client upon full payment, unless otherwise specified in the project agreement.",
      "Sorai Tech retains ownership of pre-existing intellectual property, methodologies, and general knowledge used in providing services.",
      "Clients grant Sorai Tech the right to showcase completed work in our portfolio and marketing materials, unless confidentiality agreements specify otherwise.",
      "Both parties agree to respect and protect each other\u2019s intellectual property rights.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "Payment terms are specified in individual project agreements or invoices.",
      "Unless otherwise agreed, payments are due within 30 days of invoice date.",
      "Late payments may incur interest charges and may result in suspension of services.",
      "All prices are quoted exclusive of applicable taxes unless otherwise stated.",
      "Refunds are handled on a case-by-case basis as outlined in individual project agreements.",
    ],
  },
  {
    title: "Confidentiality",
    content: [
      "We maintain strict confidentiality regarding all client information and project details.",
      "Both parties agree to protect confidential information received during the course of our business relationship.",
      "Confidentiality obligations survive the termination of our services.",
      "We may use anonymized case studies and general project descriptions for marketing purposes unless prohibited by confidentiality agreements.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Sorai Tech\u2019s liability is limited to the amount paid for the specific services that gave rise to the claim.",
      "We are not liable for any indirect, incidental, special, or consequential damages.",
      "We do not guarantee uninterrupted or error-free operation of software or systems we develop.",
      "Clients are responsible for maintaining appropriate backups and disaster recovery procedures.",
      "Our liability is further limited by the terms specified in individual project agreements.",
    ],
  },
  {
    title: "Warranties and Disclaimers",
    content: [
      "We warrant that our services will be performed with professional skill and care.",
      "We provide a limited warranty on our work as specified in individual project agreements.",
      "Except as expressly stated, all services are provided \u2018as is\u2019 without warranties of any kind.",
      "We disclaim all warranties, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose.",
      "Any third-party software or services integrated into our solutions are subject to their respective terms and warranties.",
    ],
  },
  {
    title: "Termination",
    content: [
      "Either party may terminate our services with appropriate notice as specified in project agreements.",
      "Upon termination, clients remain responsible for payment of all services performed up to the termination date.",
      "We will deliver all completed work product and return client materials upon final payment.",
      "Termination does not relieve either party of obligations that by their nature should survive termination.",
      "We reserve the right to immediately terminate services for breach of these terms or non-payment.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These terms are governed by the laws of Karnataka, India.",
      "Any disputes arising from these terms or our services will be subject to the jurisdiction of courts in Bangalore, Karnataka.",
      "Both parties agree to attempt to resolve disputes through good faith negotiation before pursuing legal action.",
      "If any provision of these terms is found to be unenforceable, the remaining provisions remain in full effect.",
      "These terms constitute the entire agreement between parties regarding the use of our website and general service terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 bg-gradient-to-br from-brand-600 via-brand-700 to-surface-900">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">Terms of Service</h1>
              <p className="text-white/60 text-sm">Last updated: March 1, 2026</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 leading-relaxed mb-12 text-lg"
              >
                These Terms of Service govern your use of Sorai Tech&apos;s website and services. Please read them carefully
                as they contain important information about your rights and obligations.
              </motion.p>

              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="mb-12"
                >
                  <h2 className="text-xl font-bold mb-4 font-heading text-gray-900">{section.title}</h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold mb-4 font-heading text-gray-900">Questions About These Terms?</h2>
              <p className="text-gray-600 mb-8">
                If you have any questions about these Terms of Service, please contact us.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto mb-8">
                <div>
                  <h3 className="font-bold mb-1 text-gray-900 text-sm">Legal Inquiries</h3>
                  <a href="mailto:contact@soraitech.com" className="text-brand-600 hover:text-brand-700 transition-colors text-sm">
                    contact@soraitech.com
                  </a>
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-gray-900 text-sm">General Questions</h3>
                  <a href="/contact" className="text-brand-600 hover:text-brand-700 transition-colors text-sm">
                    Contact our team
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white border border-gray-100 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-900">Sorai Tech</strong><br />
                  Bangalore, India<br />
                  Email: contact@soraitech.com
                </p>
              </div>

              <p className="mt-6 text-xs text-gray-400">
                These terms supplement any specific project agreements or contracts you may have with Sorai Tech.
                In case of conflicts, the terms of individual project agreements take precedence.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
