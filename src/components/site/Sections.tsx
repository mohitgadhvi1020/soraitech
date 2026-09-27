"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";
import {
  clients,
  services,
  approach,
  useCases,
  process,
  principles,
  testimonials,
  faqs,
  founder,
} from "@/content/site";

import { wrap } from "./wrap";

export function SectionHead({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <h2 className="font-grotesk text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink [text-wrap:balance] md:text-[2.6rem]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/* Client strip, the Techiebutler-style moving marquee */
export function ClientStrip() {
  const reduce = useReducedMotion();
  const row = [...clients, ...clients, ...clients];
  return (
    <section aria-label="Teams we've worked with" className="border-y border-line bg-paper py-7">
      <div className={`${wrap} flex flex-col gap-4 md:flex-row md:items-center md:gap-10`}>
        <p className="shrink-0 text-sm text-muted">Trusted by teams at</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className={`flex w-max gap-14 ${reduce ? "" : "animate-marquee"}`}>
            {[...row, ...row].map((c, i) => (
              <span
                key={i}
                aria-hidden={i >= clients.length}
                className="whitespace-nowrap font-grotesk text-xl font-semibold tracking-tight text-ink/55"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Services as an expandable index, not a grid of cards */
export function Services() {
  const [open, setOpen] = useState<string | null>(services[0].id);
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className={wrap}>
        <SectionHead
          title="How we help"
          intro="From a first look at where AI fits, to a working solution your team uses every day. Most clients start with an audit."
        />
        <ul className="border-t border-ink">
          {services.map((s) => {
            const isOpen = open === s.id;
            return (
              <li key={s.id} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? null : s.id)}
                  aria-expanded={isOpen}
                  aria-controls={`svc-${s.id}`}
                  className="group grid w-full grid-cols-1 gap-1 py-6 text-left md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_24px] md:items-baseline md:gap-8"
                >
                  <span className="font-grotesk text-[1.35rem] font-semibold tracking-[-0.02em] text-ink md:text-[1.6rem]">
                    {s.name}
                  </span>
                  <span className="text-[17px] text-muted group-hover:text-ink">{s.outcome}</span>
                  <span
                    aria-hidden
                    className={`hidden text-2xl leading-none text-lake transition-transform duration-300 md:block ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`svc-${s.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-9 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_24px] md:gap-8">
                        <p className="text-sm text-muted">{s.timeline}</p>
                        <div>
                          <p className="max-w-xl text-[16px] leading-relaxed text-ink">{s.detail}</p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {s.includes.map((x) => (
                              <li key={x} className="rounded bg-lake-light px-3 py-1.5 text-sm text-lake-dark">
                                {x}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* Why us: how we make sure the project pays off */
export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 bg-ink py-24 text-paper md:py-32">
      <div className={`${wrap} grid gap-14 lg:grid-cols-[0.9fr_1.1fr]`}>
        <div>
          <h2 className="font-grotesk text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] md:text-[2.6rem]">
            Most AI projects never pay off. Here&apos;s how we make sure yours does.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[#A9B8BE]">
            Plenty of businesses have tried an AI tool that looked great in a demo and then got
            ignored. These four habits are how we avoid that.
          </p>
        </div>
        <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {approach.map((r) => (
            <div key={r.title} className="border-t border-white/15 pt-5">
              <dt className="flex items-center gap-2.5 font-grotesk text-lg font-semibold">
                <span aria-hidden className="text-[#6FCF97]">✓</span>
                {r.title}
              </dt>
              <dd className="mt-2.5 leading-relaxed text-[#A9B8BE]">{r.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className={wrap}>
        <SectionHead
          title="Where AI saves time first"
          intro="Every business is different, but these are the places we usually find the quickest wins."
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <article key={u.team} className="flex flex-col bg-white p-7">
              <h3 className="font-grotesk text-[1.3rem] font-semibold tracking-[-0.015em] text-ink">{u.team}</h3>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">Today</p>
              <p className="mt-1.5 leading-relaxed text-muted">{u.before}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-lake">With AI</p>
              <p className="mt-1.5 leading-relaxed text-ink">{u.after}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* A real sequence, so it gets numbers and a progress line that follows scroll */
export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <section id="process" className="scroll-mt-24 border-t border-line bg-white py-24 md:py-32">
      <div className={wrap}>
        <SectionHead
          title="How it works"
          intro="Small, clear steps. Each one is priced separately, and you decide after each whether to continue."
        />
        <div className="relative">
          <div className="absolute left-0 right-0 top-[15px] hidden h-px bg-line md:block" />
          <motion.div
            style={{ scaleX: reduce ? 1 : scaleX }}
            className="absolute left-0 right-0 top-[15px] hidden h-px origin-left bg-lake md:block"
          />
          <ol ref={ref} className="relative grid gap-10 md:grid-cols-4 md:gap-8">
            {process.map((p, i) => (
              <li key={p.name}>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-lake bg-white text-sm font-semibold text-lake">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-grotesk text-xl font-semibold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-lake">{p.time}</p>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className={wrap}>
        <SectionHead title="What working with us is like" />
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="max-w-md">
              <h3 className="font-grotesk text-[1.35rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [first, ...rest] = testimonials;
  return (
    <section className="border-t border-line bg-white py-24 md:py-32">
      <div className={wrap}>
        <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-lake">What clients say</p>
        <figure className="max-w-4xl">
          <blockquote className="font-grotesk text-[1.55rem] font-medium leading-[1.35] tracking-[-0.015em] text-ink md:text-[2rem]">
            &ldquo;{first.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-muted">
            <span className="font-semibold text-ink">{first.name}</span>, {first.role}
          </figcaption>
        </figure>
        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
          {rest.map((t) => (
            <figure key={t.name}>
              <blockquote className="leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                <span className="font-semibold text-ink">{t.name}</span>, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className={`${wrap} max-w-3xl`}>
        <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-lake">{founder.eyebrow}</p>
        <h2 className="font-grotesk text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.4rem]">
          {founder.title}
        </h2>
        {founder.bio.map((b) => (
          <p key={b} className="mt-5 text-lg leading-relaxed text-muted">
            {b}
          </p>
        ))}
      </div>
    </section>
  );
}

export function FAQ({ items = faqs, title = "Questions we hear often" }: { items?: typeof faqs; title?: string }) {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className={`${wrap} grid gap-12 lg:grid-cols-[0.8fr_1.2fr]`}>
        <h2 className="font-grotesk text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.4rem]">
          {title}
        </h2>
        <div className="border-t border-ink">
          {items.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-grotesk text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-2xl leading-none text-lake transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({
  title = "Find out where AI can save your business time.",
  body = "Book a free 30-minute consultation. Tell us how your team works and we'll tell you honestly where AI would help, and where it wouldn't.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink py-24 text-paper md:py-28">
      <div className={`${wrap} max-w-4xl`}>
        <h2 className="font-grotesk text-[2.1rem] font-semibold leading-[1.08] [text-wrap:balance] tracking-[-0.03em] md:text-[3.2rem]">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#A9B8BE]">{body}</p>
        <CalendlyButton
          url={CALENDLY_URL}
          className="mt-9 !rounded-md !bg-paper !px-7 !py-4 !text-[15px] !font-semibold !text-ink !shadow-none hover:!bg-white hover:!scale-100"
        >
          Book a free consultation
        </CalendlyButton>
      </div>
    </section>
  );
}
