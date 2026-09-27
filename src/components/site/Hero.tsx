"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY_URL } from "@/config/calendly";

// Illustrative audit result shown in the hero. Labelled as an example on the card.
const tasks = [
  { task: "Answering customer emails", now: 120, after: 35 },
  { task: "Typing in supplier invoices", now: 60, after: 8 },
  { task: "Preparing the weekly sales report", now: 16, after: 1 },
];
const saved = tasks.reduce((n, t) => n + t.now - t.after, 0);

// Stage timeline: 0 idle, 1-3 tasks appear, 4 summary
const timings = [300, 900, 1500, 2400];

export default function Hero() {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState(reduce ? 4 : 0);

  useEffect(() => {
    if (reduce) {
      setStage(4);
      return;
    }
    const timers = timings.map((t, i) => setTimeout(() => setStage(i + 1), t));
    return () => timers.forEach(clearTimeout);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden bg-paper pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="mb-6 text-[15px] font-medium text-lake">
            AI consulting for growing businesses
          </p>
          <h1 className="font-grotesk text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-[3.4rem] lg:text-[4.1rem]">
            Give your team back the hours lost to busywork.
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted">
            We find the tasks AI can take off your team&apos;s plate, set up the solution, and stay
            with you until it pays for itself. Honest advice, plain English, measurable results.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CalendlyButton
              url={CALENDLY_URL}
              className="!rounded-md !bg-ink !border !border-ink !px-6 !py-[13px] !text-[15px] !font-semibold !leading-6 !text-paper !shadow-none hover:!bg-ink-soft hover:!scale-100"
            >
              Book a free consultation
            </CalendlyButton>
            <a
              href="#use-cases"
              className="inline-flex items-center justify-center rounded-md border border-line px-6 py-[13px] text-[15px] font-semibold leading-6 text-ink transition-colors hover:border-ink"
            >
              See what AI can do
            </a>
          </div>
        </div>

        {/* Example audit: the one orchestrated moment on the page */}
        <div
          className="rounded-xl bg-ink p-5 text-[13px] text-[#C9D4D8] shadow-[0_30px_60px_-30px_rgba(18,32,39,0.55)] sm:p-6"
          role="img"
          aria-label={`Example AI opportunity audit: three everyday tasks and the monthly hours they take now versus with AI, saving ${saved} hours a month.`}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[12px] text-[#8FA3AB]">
            <span>AI opportunity audit (example)</span>
            <span className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${stage >= 4 ? "bg-pass" : "bg-[#8FA3AB]"} transition-colors`} />
              {stage >= 4 ? "Report ready" : "Analysing"}
            </span>
          </div>

          <div className="grid grid-cols-[1fr_64px_64px] gap-3 pt-4 pb-1 text-[11px] uppercase tracking-wider text-[#8FA3AB] sm:grid-cols-[1fr_80px_80px]">
            <span>Task</span>
            <span className="text-right">Now</span>
            <span className="text-right">With AI</span>
          </div>
          <ul>
            {tasks.map((t, i) => (
              <motion.li
                key={t.task}
                initial={false}
                animate={{ opacity: stage >= i + 1 ? 1 : 0.18 }}
                transition={{ duration: 0.45 }}
                className="grid grid-cols-[1fr_64px_64px] items-baseline gap-3 border-b border-white/[0.07] py-3.5 sm:grid-cols-[1fr_80px_80px]"
              >
                <span className="text-[15px] leading-snug text-white">{t.task}</span>
                <span className="text-right text-[#8FA3AB] line-through decoration-white/30">{t.now} h</span>
                <span className="text-right font-semibold text-[#6FCF97]">{t.after} h</span>
              </motion.li>
            ))}
          </ul>
          <p className="pt-2 text-[11px] text-[#8FA3AB]">Hours per month</p>

          <motion.div
            initial={false}
            animate={{ opacity: stage >= 4 ? 1 : 0.18 }}
            transition={{ duration: 0.45 }}
            className="mt-5 grid grid-cols-2 gap-4 rounded-lg bg-white/[0.06] p-4"
          >
            <div>
              <p className="text-[12px] text-[#8FA3AB]">Time back each month</p>
              <p className="mt-1 font-grotesk text-[1.9rem] font-semibold leading-none text-white">{saved} hours</p>
            </div>
            <div>
              <p className="text-[12px] text-[#8FA3AB]">Start with</p>
              <p className="mt-1 text-[15px] font-semibold leading-snug text-white">Customer support AI</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
