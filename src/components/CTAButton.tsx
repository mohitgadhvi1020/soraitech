"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CTAButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 whitespace-nowrap";

  const sizes = {
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-brand-600 text-white hover:bg-brand-700 shadow-glow hover:shadow-glow-lg",
    secondary:
      "bg-white text-gray-900 hover:bg-gray-100 shadow-card hover:shadow-card-hover",
    outline:
      "border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
  };

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
