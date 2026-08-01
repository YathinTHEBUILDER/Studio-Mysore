"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export const CafeCTA: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I explored the Café Experience and I'd like to discuss something similar for my café."
  );

  return (
    <section className="py-20 bg-gradient-to-t from-amber-950/20 to-zinc-950 border-t border-amber-900/20">
      <Container variant="wide">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-amber-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block">
              Built by Studio Mysore
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-semibold text-white tracking-tight">
              Let&apos;s build something for your café.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Tell us how your café works. We&apos;ll suggest ideas that fit your customers, your staff and the way you already operate.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 text-zinc-950 text-sm font-semibold hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
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
