"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Sparkles, ShieldCheck, Cpu } from "lucide-react";

export const DentalTechnologySection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950/90 border-t border-b border-sky-500/20 relative">
      <Container variant="wide" className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Advanced Clinical Technology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-semibold text-slate-50 tracking-tight">
            Built for total patient comfort.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
            We combine zero-pain laser therapy, instant 3D intraoral scans, and digital smile previews for stress-free visits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-sky-500/20 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center">
              <Cpu className="w-5.5 h-5.5 text-sky-400" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-slate-50">3D iTero Intraoral Scanner</h3>
            <p className="text-xs font-sans text-slate-300 leading-relaxed font-normal">
              No messy gooey physical impressions. 6,000 digital images per second build a flawless 3D model of your teeth.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-sky-500/20 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center">
              <Sparkles className="w-5.5 h-5.5 text-sky-400" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-slate-50">Diode Waterlase Dental Laser</h3>
            <p className="text-xs font-sans text-slate-300 leading-relaxed font-normal">
              Painless gum reshaping and cavity treatment without noisy drills or needle injections.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-sky-500/20 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-400 flex items-center justify-center">
              <ShieldCheck className="w-5.5 h-5.5 text-sky-400" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-slate-50">Automated SMS Reminders</h3>
            <p className="text-xs font-sans text-slate-300 leading-relaxed font-normal">
              Zero phone tag. One-tap appointment confirmations, pre-visit intake, and insurance pre-checks.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

