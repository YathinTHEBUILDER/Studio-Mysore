"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Sparkles, ShieldCheck, Cpu } from "lucide-react";

export const DentalTechnologySection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950/80 border-t border-b border-sky-900/10">
      <Container variant="wide" className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advanced Clinical Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight">
            Built for total patient comfort.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We combine zero-pain laser therapy, instant 3D intraoral printing, and digital smile preview technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">3D iTero Intraoral Scanner</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              No messy gooey physical impressions. 6,000 digital images per second build a flawless 3D model of your teeth.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Diode Waterlase Dental Laser</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Painless gum reshaping and cavity treatment without noisy drills or needle injections.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Automated SMS Reminders</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Zero phone tag. One-tap appointment confirmations, pre-visit instructions, and insurance claims.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
