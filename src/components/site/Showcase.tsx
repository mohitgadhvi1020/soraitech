"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { showcase } from "@/content/site";
import { wrap } from "./wrap";

// How long each slide stays up before the carousel moves on.
const SLIDE_MS = 4000;

/* "Solutions in action": auto-advancing product carousel with example screens */
export default function Showcase() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const item = showcase[index];
  const active = item.id;
  const autoplay = !reduce;
  const paused = hovered || focused || !inView;

  const go = (i: number) => setIndex((i + showcase.length) % showcase.length);

  // Only run while the carousel is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Keep the active tab visible in the horizontally scrolling row on phones
  useEffect(() => {
    const row = tabsRef.current;
    const tab = row?.querySelector<HTMLElement>(`#tab-${active}`);
    if (!row || !tab) return;
    row.scrollTo({ left: tab.offsetLeft - row.clientWidth / 2 + tab.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <section ref={sectionRef} id="solutions" className="scroll-mt-24 bg-white py-24 md:py-32">
      <div className={wrap}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-lake">Solutions in action</p>
          <h2 className="mt-4 font-grotesk text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink [text-wrap:balance] md:text-[2.6rem]">
            See what AI looks like inside a business like yours.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A few of the systems we set up. Each one is tailored to your tools, your data and the way your team works.
          </p>
        </div>

        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Solutions"
          className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:flex-wrap md:justify-center md:px-0"
        >
          {showcase.map((s, i) => {
            const on = s.id === active;
            return (
              <button
                key={s.id}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={on}
                aria-controls="solution-panel"
                onClick={() => go(i)}
                className={`relative shrink-0 overflow-hidden whitespace-nowrap rounded-full border px-4 py-2.5 text-[15px] font-medium transition-colors ${
                  on ? "border-ink bg-ink text-paper" : "border-line bg-white text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {s.tab}
                {on && autoplay && (
                  // The progress line drives the carousel: when it finishes, the next slide shows
                  <span
                    key={`${s.id}-${index}`}
                    aria-hidden
                    onAnimationEnd={() => go(index + 1)}
                    className="absolute inset-x-4 bottom-1 h-[2px] origin-left rounded-full bg-paper/70"
                    style={{
                      animation: `tab-progress ${SLIDE_MS}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          id="solution-panel"
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
          className="mt-10 grid items-center gap-10 rounded-2xl bg-paper p-5 sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12 lg:p-10"
        >
          <figure>
            <div className="relative aspect-[1586/992] w-full">
              {/* All images stay mounted so switching tabs never flashes */}
              {showcase.map((s, i) => (
                <Image
                  key={s.id}
                  src={s.image}
                  alt={s.id === active ? s.alt : ""}
                  aria-hidden={s.id !== active}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className={`object-contain transition-opacity duration-500 ${s.id === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
            <figcaption className="mt-3 text-center text-xs text-muted">
              Example screen. Every solution is set up around your own tools and data.
            </figcaption>
          </figure>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <p className="text-sm font-semibold text-lake">{item.tab}</p>
              <h3 className="mt-3 font-grotesk text-[1.7rem] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[2rem]">
                {item.headline}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-muted">{item.body}</p>
              <ul className="mt-6 space-y-3">
                {item.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-ink">
                    <span aria-hidden className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lake-light text-xs text-lake">
                      ✓
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-line pt-5 text-sm text-muted">
                <span className="font-semibold text-ink">Great for:</span> {item.bestFor}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
