"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export const RestaurantCTA: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I loved the Fine Dining Restaurant experience and want to discuss building an editorial web application for my restaurant."
  );

  return (
    <section className="py-20 bg-gradient-to-t from-rose-950/20 to-zinc-950 border-t border-rose-900/20">
      <Container variant="wide">
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/80 border border-rose-500/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold block">
              Built by Studio Mysore
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-semibold text-white tracking-tight">
              Elevate your restaurant's digital presence.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We design & build high-converting editorial restaurant websites, tasting menu booking systems, and table reservation workflows.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-rose-600 text-white text-sm font-semibold hover:bg-rose-500 transition-all shadow-lg shadow-rose-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Restaurant Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
