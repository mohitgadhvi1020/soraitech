"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import CalendlyButton from "./CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#case-studies" },
  { name: "Process", href: "#process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center group">
            <span className={`text-xl font-heading font-bold transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}>
              Sorai Tech
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <CalendlyButton url={CALENDLY_URL} variant="primary" size="md" className="!px-5 !py-2.5 !text-sm">
              Book a Call
            </CalendlyButton>
          </nav>

          <button
            className={`md:hidden text-2xl p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/60 shadow-lg"
        >
          <div className="container-custom py-6">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 font-medium hover:text-brand-600 block py-3 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.06 }}
                className="pt-4"
              >
                <CalendlyButton url={CALENDLY_URL} variant="primary" size="md" className="w-full !justify-center">
                  Book a Call
                </CalendlyButton>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
