"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export const CafeCTA: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I explored the Artisan Café Experience and I'd like to discuss something similar for my business."
  );

  return (
    <section className="py-20 bg-gradient-to-t from-amber-950/40 via-stone-950 to-stone-950 border-t border-amber-900/30">
      <Container variant="wide">
        <div className="p-8 sm:p-12 rounded-3xl bg-stone-900/80 border border-amber-500/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
              Built by Studio Mysore
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-amber-50 tracking-tight">
              Let&apos;s build something warm for your café.
            </h2>
            <p className="text-amber-200/70 text-sm font-sans leading-relaxed">
              Tell us how your café operates. We&apos;ll craft a digital ordering experience tailored to your roastery, your baristas, and your regulars.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 text-stone-950 text-xs font-mono font-bold uppercase tracking-wider hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 active:scale-95"
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

