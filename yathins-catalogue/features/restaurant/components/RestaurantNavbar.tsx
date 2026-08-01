"use client";

import * as React from "react";
import Link from "next/link";
import { Utensils, Calendar, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface RestaurantNavbarProps {
  onOpenReserve: () => void;
}

export const RestaurantNavbar: React.FC<RestaurantNavbarProps> = ({ onOpenReserve }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-xl border-b border-rose-900/20 py-4">
      <Container variant="wide" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/experiences"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Catalogue</span>
          </Link>
          <div className="h-4 w-[1px] bg-zinc-800" />
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display text-base font-semibold text-white tracking-tight block leading-tight">
                L'Étoile Fine Dining & Lounge
              </span>
              <span className="text-[10px] font-mono text-rose-400/80 tracking-wider uppercase block">
                Michelin Guide Selected • Modern Gastronomy
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenReserve}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs tracking-wide transition-all active:scale-95 shadow-lg shadow-rose-600/20"
        >
          <Calendar className="w-4 h-4" />
          <span>Reserve Table</span>
        </button>
      </Container>
    </header>
  );
};
