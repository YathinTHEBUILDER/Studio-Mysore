"use client";

import * as React from "react";
import Link from "next/link";
import { Coffee, ShoppingBag, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface CafeNavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const CafeNavbar: React.FC<CafeNavbarProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-stone-950/90 backdrop-blur-xl border-b border-amber-900/30 py-4">
      <Container variant="wide" className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/experiences"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-200/70 hover:text-amber-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Catalogue</span>
          </Link>
          <div className="h-4 w-[1px] bg-amber-900/40" />
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-amber-900/30 border border-amber-600/40 flex items-center justify-center text-amber-400 shadow-inner">
              <Coffee className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="font-serif text-lg font-medium text-amber-50 tracking-tight block leading-tight">
                Artisan Café & Roasters
              </span>
              <span className="text-[10px] font-mono text-amber-400/80 tracking-widest uppercase block">
                Single-Origin • Handcrafted Micro-Bakery
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-amber-600/20 border border-amber-500/40 hover:bg-amber-600/30 text-amber-200 font-medium text-xs tracking-wide transition-all active:scale-95 shadow-lg shadow-amber-950/30"
          aria-label="Open Order Cart"
        >
          <ShoppingBag className="w-4 h-4 text-amber-400" />
          <span className="font-mono uppercase text-[11px] tracking-wider text-amber-100">Your Basket</span>
          {cartCount > 0 && (
            <span className="ml-1 w-5 h-5 rounded-full bg-amber-500 text-stone-950 font-mono text-[11px] font-bold flex items-center justify-center shadow-md">
              {cartCount}
            </span>
          )}
        </button>
      </Container>
    </header>
  );
};

