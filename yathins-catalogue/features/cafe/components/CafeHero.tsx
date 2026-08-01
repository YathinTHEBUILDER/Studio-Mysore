"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Clock, MapPin, Sparkles } from "lucide-react";

export const CafeHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 bg-gradient-to-b from-zinc-950 via-amber-950/10 to-zinc-950 overflow-hidden border-b border-amber-900/10">
      {/* Soft Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mobile Express Pickup & Dine-In</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-semibold text-white tracking-tight leading-[1.08]">
              More time making coffee. Less time taking orders.
            </h1>

            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              Let your customers browse the menu, place an order and pay in just a few taps. Your staff can focus on serving great coffee instead of standing at the counter taking orders.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800/80 max-w-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Ready in 5-10 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Mysore Craft Quarter</span>
              </div>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop"
                alt="Artisan Coffee Roastery"
                className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-amber-500/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">Featured Origin</span>
                  <span className="text-sm font-semibold text-white block">Ethiopia Yirgacheffe G1</span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  Fresh Batch
                </span>
              </div>
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
};
