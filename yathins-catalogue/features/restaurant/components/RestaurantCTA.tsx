"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export const RestaurantCTA: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I explored the Fine Dining Restaurant Experience and I'd like to discuss something similar for my establishment."
  );

  return (
    <section className="py-20 bg-gradient-to-t from-stone-950 via-rose-950/20 to-stone-950 border-t border-amber-500/20">
      <Container variant="wide">
        <div className="p-8 sm:p-12 rounded-sm bg-gradient-to-r from-stone-900 via-rose-950/40 to-stone-900 border border-amber-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block">
              Built by Studio Mysore
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-amber-50 tracking-tight">
              Let&apos;s build an elevated experience for your dining room.
            </h2>
            <p className="text-amber-200/70 text-sm font-sans font-light leading-relaxed">
              Share your restaurant's vision. We&apos;ll craft a refined digital reservation and tasting menu experience tailored to your culinary standards.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-amber-500 text-stone-950 text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all duration-500 shadow-2xl shadow-amber-500/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
