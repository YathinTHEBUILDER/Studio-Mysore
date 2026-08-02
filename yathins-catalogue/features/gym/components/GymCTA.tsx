"use client";

import * as React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";

export const GymCTA: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I explored the Pulse Gym Experience and I'd like to discuss something similar for my fitness facility."
  );

  return (
    <section className="py-20 bg-gradient-to-t from-indigo-950/40 via-black to-black border-t border-indigo-500/30">
      <Container variant="wide">
        <div className="p-8 sm:p-12 rounded-tl-3xl rounded-br-3xl bg-zinc-900/90 border-2 border-indigo-500/40 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-lime-400 font-extrabold block">
              Built by Studio Mysore
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-black uppercase tracking-wider italic text-white">
              BUILD A HIGH-PERFORMANCE DIGITAL CLUB.
            </h2>
            <p className="text-indigo-100/80 text-sm font-sans font-medium leading-relaxed">
              Tell us about your fitness studio or gym. We&apos;ll build a high-energy booking, member portal, and turnstile check-in experience that scales your community.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-tl-xl rounded-br-xl bg-lime-400 text-black text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-lime-300 transition-all shadow-xl shadow-lime-400/20 active:scale-95 border border-lime-300/60"
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
