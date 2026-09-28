"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";
import {
  clients,
  audit,
  solutionGroups,
  approach,
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

/* How we help: the audit method, then the solutions it leads to */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className={wrap}>
        <SectionHead
          title="How we help"
          intro="From a first look at where AI fits, to a working solution your team uses every day. Most clients start with an audit."
        />

        {/* Part 1: the audit */}
        <div className="grid gap-12 border-t border-ink pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-lake">Step one</p>
            <h3 className="mt-3 font-grotesk text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[1.9rem]">
              {audit.name}
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">{audit.intro}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {audit.meta.map((m) => (
                <li key={m} className="rounded bg-lake-light px-3 py-1.5 text-sm text-lake-dark">
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <ol className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {audit.steps.map((st, i) => (
              <li key={st.name}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-lake text-sm font-semibold text-lake">
                  {i + 1}
                </span>
                <h4 className="mt-4 font-grotesk text-lg font-semibold text-ink">{st.name}</h4>
                <p className="mt-2 leading-relaxed text-muted">{st.body}</p>
                <p className="mt-3 text-sm text-ink">
                  <span className="font-semibold text-lake">You get:</span> {st.get}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Part 2: solutions */}
        <div className="mt-24 border-t border-ink pt-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-lake">Then</p>
            <h3 className="mt-3 font-grotesk text-[1.6rem] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[1.9rem]">
              Solutions we set up
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              The full range, including the ones shown above. The audit tells you which of these are worth doing first.
            </p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {solutionGroups.map((g) => (
              <div key={g.group}>
                <h4 className="border-b border-line pb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                  {g.group}
                </h4>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.name} className="border-b border-line py-5">
                      <p className="font-grotesk text-[1.15rem] font-semibold tracking-[-0.01em] text-ink">{it.name}</p>
                      <p className="mt-1.5 leading-relaxed text-muted">{it.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
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
  return (
    <section className="border-t border-line bg-white py-24 md:py-32">
      <div className={wrap}>
        <SectionHead title="What clients say" />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between rounded-2xl border border-line bg-paper p-8">
              <blockquote className="text-[17px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-sm text-muted">
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
      <div className={wrap}>
        <div className="max-w-2xl">
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
