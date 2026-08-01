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
    <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-xl border-b border-amber-900/20 py-4">
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
            <div className="w-8 h-8 rounded-lg bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display text-base font-semibold text-white tracking-tight block leading-tight">
                Artisan Café & Roasters
              </span>
              <span className="text-[10px] font-mono text-amber-400/80 tracking-wider uppercase block">
                Single-Origin & Micro-Bakery
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenCart}
          className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-300 font-medium text-xs tracking-wide transition-all active:scale-95"
          aria-label="Open Shopping Cart"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Your Order</span>
          {cartCount > 0 && (
            <span className="ml-1 w-5 h-5 rounded-full bg-amber-500 text-zinc-950 font-mono text-[11px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </Container>
    </header>
  );
};
