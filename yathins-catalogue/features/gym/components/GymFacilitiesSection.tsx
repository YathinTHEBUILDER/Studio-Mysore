"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Sparkles, Flame, Zap } from "lucide-react";

export const GymFacilitiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950/80 border-t border-b border-indigo-900/10">
      <Container variant="wide" className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>State-of-the-Art Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight">
            Engineered for performance & recovery.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From Technogym smart machines to infrared saunas and cold plunge therapy tubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Technogym Biostrenth</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              AI-assisted resistance machines that remember your seat settings and adjust loads dynamically.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Infrared Sauna & Plunge</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Contrast therapy lounge featuring 50°F cold plunge tubs and Finnish cedar saunas.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Turnstile QR Check-In</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Seamless contactless mobile app entry with zero waiting at front desk counters.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
