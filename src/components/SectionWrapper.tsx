"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function SectionWrapper({ children, className = "", id, dark = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? "bg-surface-900 text-white" : "bg-white text-gray-900"} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  dark = false,
  center = true,
}: {
  label?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 md:mb-16 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-500 mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-section font-bold font-heading mb-5 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-3xl leading-relaxed ${center ? "mx-auto" : ""} ${dark ? "text-gray-400" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
