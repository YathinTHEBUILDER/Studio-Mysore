"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Sparkles, Flame, Zap } from "lucide-react";

export const GymFacilitiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-black border-t border-b border-indigo-900/40 relative">
      <Container variant="wide" className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-tl-lg rounded-br-lg bg-indigo-950/90 border border-indigo-500/50 text-lime-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Zap className="w-4 h-4 text-lime-400 fill-lime-400" />
            <span>State-of-the-Art Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-black uppercase tracking-wider italic text-white">
            ENGINEERED FOR MAX PERFORMANCE & RECOVERY.
          </h2>
          <p className="text-indigo-100/80 text-sm sm:text-base leading-relaxed font-sans font-medium">
            From Eleiko competition weightlifting bars to infrared saunas and cold plunge contrast recovery tubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-tl-2xl rounded-br-2xl bg-zinc-900/90 border border-indigo-500/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-tl-xl rounded-br-xl bg-indigo-600/30 border border-indigo-400/50 text-lime-400 flex items-center justify-center">
              <Zap className="w-5.5 h-5.5 text-lime-400" />
            </div>
            <h3 className="font-sans font-black text-xl text-white uppercase italic">Eleiko Heavy Iron Rig</h3>
            <p className="text-xs font-sans text-indigo-100/80 leading-relaxed font-normal">
              Swedish Olympic steel barbells, calibrated bumper plates, and competition powerlifting platforms.
            </p>
          </div>

          <div className="p-8 rounded-tl-2xl rounded-br-2xl bg-zinc-900/90 border border-indigo-500/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-tl-xl rounded-br-xl bg-indigo-600/30 border border-indigo-400/50 text-lime-400 flex items-center justify-center">
              <Flame className="w-5.5 h-5.5 text-lime-400" />
            </div>
            <h3 className="font-sans font-black text-xl text-white uppercase italic">Cryo & Cold Plunge Suite</h3>
            <p className="text-xs font-sans text-indigo-100/80 leading-relaxed font-normal">
              Contrast therapy lounge featuring 48°F cold plunge tubs and Finnish cedar saunas.
            </p>
          </div>

          <div className="p-8 rounded-tl-2xl rounded-br-2xl bg-zinc-900/90 border border-indigo-500/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-tl-xl rounded-br-xl bg-indigo-600/30 border border-indigo-400/50 text-lime-400 flex items-center justify-center">
              <Sparkles className="w-5.5 h-5.5 text-lime-400" />
            </div>
            <h3 className="font-sans font-black text-xl text-white uppercase italic">Turnstile QR Gate Pass</h3>
            <p className="text-xs font-sans text-indigo-100/80 leading-relaxed font-normal">
              One-tap phone QR pass entry with zero waiting at the front desk or desk queues.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

