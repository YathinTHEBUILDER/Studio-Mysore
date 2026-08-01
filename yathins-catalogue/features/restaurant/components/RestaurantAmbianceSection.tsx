"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Wine, Sparkles, Flame } from "lucide-react";

export const RestaurantAmbianceSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950/80 border-t border-b border-rose-900/10">
      <Container variant="wide" className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Editorial Dining Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight">
            Crafted for intimate, extraordinary dining.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Every table reservation includes dedicated sommelier guidance, real-time kitchen order dispatching, and private dining rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Wine className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">4,000+ Bottle Cellar</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Rare vintages from Bordeaux, Piedmont, and Napa curated by Master Sommelier Lucian Vance.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Open Woodfire Kitchen</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Watch Executive Chef Marcus Thorne prep 45-day dry-aged steaks over Japanese Binchotan charcoal.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">Frictionless Hospitality</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Automated table holding, digital tasting menus with wine pairing notes, and zero-wait checkout.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
