"use client";

import { useEffect, useCallback } from "react";

interface CalendlyButtonProps {
  url: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  className?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CalendlyButton({
  url,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CalendlyButtonProps) {
  useEffect(() => {
    // Check if already loaded
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      return;
    }

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      // Fallback: open in new tab if widget not loaded
      window.open(url, "_blank");
    }
  }, [url]);

  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer relative z-10";

  const sizes = {
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-glow hover:shadow-glow-lg hover:scale-[1.03] active:scale-[0.98]",
    secondary: "bg-white text-gray-900 hover:bg-gray-100 shadow-card hover:shadow-card-hover hover:scale-[1.03] active:scale-[0.98]",
    outline: "border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm hover:scale-[1.03] active:scale-[0.98]",
  };

  return (
    <button
      type="button"
      onClick={openCalendly}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
