"use client";

import Link from "next/link";
import { FiMail, FiMapPin } from "react-icons/fi";
import CalendlyButton from "./CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-950 text-white pt-16 pb-8 border-t border-white/[0.06]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-white">Sorai Tech</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Product + growth team that helps build, launch and scale products using development, AI, SEO and AEO.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FiMapPin className="text-brand-400 flex-shrink-0" />
              Bangalore, India
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-gray-500">Services</h4>
            <ul className="space-y-2.5">
              {["MVP Development", "Backend & DevOps", "AI Automation", "SEO & AEO", "UX Optimization"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-gray-500">Company</h4>
            <ul className="space-y-2.5">
              {[
                { name: "About", href: "/about" },
                { name: "Team", href: "/team" },
                { name: "Careers", href: "/careers" },
                { name: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold mb-4 uppercase tracking-wider text-gray-500">Get in Touch</h4>
            <div className="flex items-center gap-2 mb-4">
              <FiMail className="text-brand-400 flex-shrink-0" />
              <a href="mailto:contact@soraitech.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                contact@soraitech.com
              </a>
            </div>
            <CalendlyButton url={CALENDLY_URL} variant="primary" size="md" className="!px-5 !py-2.5 !text-sm">
              Book a Call
            </CalendlyButton>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 text-gray-600 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {year} Sorai Tech. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
