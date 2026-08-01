"use client";

/**
 * HowWeWork — Homepage Editorial Process Section
 *
 * Section ID: #how-we-work
 * Describes Studio Mysore's collaborative process across 5 key steps:
 *  1. Understand
 *  2. Plan
 *  3. Design
 *  4. Build
 *  5. Support
 */

import * as React from "react";
import { m } from "framer-motion";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "We start by understanding your daily business operations, staff workflows, and customer touchpoints before proposing a single line of code.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We architect a clear, friction-free digital workflow that eliminates manual administrative work and speeds up customer decisions.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Every interface is crafted from scratch with editorial typography, bespoke layouts, and brand identity tailored specifically to your business.",
  },
  {
    step: "04",
    title: "Build",
    description:
      "We engineer fast, high-performance web applications using modern web technologies with zero unnecessary template bloat.",
  },
  {
    step: "05",
    title: "Support",
    description:
      "We stay actively involved after launch to monitor performance, refine features, and support your long-term business growth.",
  },
];

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative py-28 sm:py-36 bg-background border-t border-zinc-800/60 overflow-hidden"
      aria-label="How We Work — Process"
    >
      <div className="container-wide w-full relative z-10 space-y-16">
        
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-zinc-700" />
            <span className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-zinc-400">
              How We Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[1.05]">
            Built around your business. <br className="hidden sm:block" />
            From start to finish.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            We don&apos;t sell generic templates. We take the time to understand your workflow and build digital systems that help your business run better.
          </p>
        </div>

        {/* ── Process Steps Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PROCESS_STEPS.map((item, index) => (
            <m.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 flex flex-col justify-between space-y-6 hover:border-zinc-700/80 transition-colors"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase block">
                  Step {item.step}
                </span>

                <h3 className="text-2xl font-display font-semibold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-8 h-[1px] bg-zinc-800" />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

HowWeWork.displayName = "HowWeWork";
