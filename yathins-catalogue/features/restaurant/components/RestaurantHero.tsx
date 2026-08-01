"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Calendar, Wine, Star } from "lucide-react";

interface RestaurantHeroProps {
  onOpenReserve: () => void;
}

export const RestaurantHero: React.FC<RestaurantHeroProps> = ({ onOpenReserve }) => {
  return (
    <section className="relative pt-12 pb-16 bg-gradient-to-b from-zinc-950 via-rose-950/10 to-zinc-950 overflow-hidden border-b border-rose-900/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container variant="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono tracking-widest uppercase">
              <Star className="w-3.5 h-3.5 fill-rose-400" />
              <span>Michelin Guide Selected 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-semibold text-white tracking-tight leading-[1.08]">
              An Editorial Culinary Experience.
            </h1>

            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              Curated multi-course tasting menus, rare vintage wine pairings, and seamless digital table reservations designed for unforgettable evenings.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenReserve}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 text-white font-semibold text-sm hover:bg-rose-500 transition-all shadow-xl shadow-rose-600/20 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Table & Tasting Menu</span>
              </button>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-rose-500/20 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop"
                alt="Fine Dining Ambiance"
                className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-rose-500/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block">Sommelier Selection</span>
                  <span className="text-sm font-semibold text-white block">7-Course Chef's Pairing</span>
                </div>
                <Wine className="w-5 h-5 text-rose-400" />
              </div>
            </div>
          </m.div>
        </div>
      </Container>
    </section>
  );
};
