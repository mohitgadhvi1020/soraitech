"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import CalendlyButton from "./CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";
import { nav } from "@/content/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-grotesk transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/95 backdrop-blur" : "border-b border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <Link href="/" className="text-[1.2rem] font-semibold tracking-[-0.02em] text-ink">
          Soraaitech
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.name} href={n.href} className="text-[15px] text-muted transition-colors hover:text-ink">
              {n.name}
            </Link>
          ))}
          <CalendlyButton
            url={CALENDLY_URL}
            className="!rounded-md !bg-ink !px-4 !py-2.5 !text-sm !font-semibold !text-paper !shadow-none hover:!bg-ink-soft hover:!scale-100"
          >
            Free consultation
          </CalendlyButton>
        </nav>

        <button
          className="-mr-2 p-2 text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3.5 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="px-5 pb-6">
              {nav.map((n) => (
                <Link
                  key={n.name}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-lg font-medium text-ink"
                >
                  {n.name}
                </Link>
              ))}
              <CalendlyButton
                url={CALENDLY_URL}
                className="mt-5 w-full !rounded-md !bg-ink !py-3.5 !text-[15px] !text-paper !shadow-none hover:!scale-100"
              >
                Book a free consultation
              </CalendlyButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
