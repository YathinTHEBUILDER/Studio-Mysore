"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Sparkles, Layers } from "lucide-react";

export const ExperienceDirectoryHero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950 border-b border-zinc-800/80 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[140px] pointer-events-none" />

      <Container variant="wide" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono uppercase tracking-widest"
        >
          <Layers className="w-3.5 h-3.5 text-zinc-400" />
          <span>Standalone Web Applications Catalogue</span>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-display font-semibold text-white tracking-tight leading-[1.08]"
        >
          Complete digital experiences built for your industry.
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          Explore working, fully functional website applications tailored for Cafes, Fine Dining Restaurants, Dental Clinics, Medical Centers, and Gyms.
        </m.p>
      </Container>
    </section>
  );
};
