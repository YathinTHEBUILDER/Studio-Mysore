"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { Sparkles, Wine, Flame, Award } from "lucide-react";

export const RestaurantAmbianceSection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-950/90 border-t border-b border-amber-500/20 relative">
      <Container variant="wide" className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-rose-950/80 border border-amber-500/30 text-amber-300 text-[11px] font-mono tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Fine Dining Atmosphere</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-amber-50 tracking-tight">
            An evening crafted for memory.
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base leading-relaxed font-sans font-light">
            From candlelit leather banquettes to our temperature-controlled grand cellar, every element is balanced to complement executive chef tasting experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-sm bg-stone-900/60 border border-amber-900/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-sm bg-rose-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Wine className="w-5.5 h-5.5 text-amber-400" />
            </div>
            <h3 className="font-serif text-xl font-normal text-amber-100">Sommelier Cellar</h3>
            <p className="text-xs font-sans text-amber-200/70 leading-relaxed font-light">
              Over 450 rare Old & New World vintages curated to match seasonal tasting courses.
            </p>
          </div>

          <div className="p-8 rounded-sm bg-stone-900/60 border border-amber-900/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-sm bg-rose-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Flame className="w-5.5 h-5.5 text-amber-400" />
            </div>
            <h3 className="font-serif text-xl font-normal text-amber-100">Live Hearth & Charcoal</h3>
            <p className="text-xs font-sans text-amber-200/70 leading-relaxed font-light">
              Dry-aged Wagyu meats and fresh seafood seared over Japanese Binchotan white charcoal.
            </p>
          </div>

          <div className="p-8 rounded-sm bg-stone-900/60 border border-amber-900/30 space-y-4 shadow-xl">
            <div className="w-11 h-11 rounded-sm bg-rose-950/80 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Award className="w-5.5 h-5.5 text-amber-400" />
            </div>
            <h3 className="font-serif text-xl font-normal text-amber-100">Private Dining Suites</h3>
            <p className="text-xs font-sans text-amber-200/70 leading-relaxed font-light">
              Exclusive soundproof dining suites for up to 14 guests with dedicated sommelier service.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
