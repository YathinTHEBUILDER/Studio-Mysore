"use client";

/**
 * FinalCTA — Homepage Final Conversion Section
 *
 * Section ID: #final-cta
 * Headline: Let's talk about your business.
 * Supporting copy: Tell us how your business works. We'll suggest what we'd build and why. No pressure. Just a conversation.
 * Primary CTA: Chat on WhatsApp
 */

import * as React from "react";
import { m } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I'd like to talk about a website for my business."
  );

  return (
    <section
      id="final-cta"
      className="relative py-28 sm:py-36 bg-background border-t border-zinc-800/60 overflow-hidden"
      aria-label="Final CTA — Let's talk"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none blur-[160px] opacity-10 bg-emerald-500"
      />

      <div className="container-wide w-full relative z-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 md:p-20 bg-zinc-900/40 border border-zinc-800/80 shadow-2xl text-center space-y-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-zinc-900 text-zinc-400 border border-zinc-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Start A Conversation
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[1.05]">
            Let&apos;s talk about your business.
          </h2>

          {/* Supporting Copy */}
          <p className="text-zinc-400 text-base sm:text-xl leading-relaxed max-w-xl mx-auto">
            Tell us how your business works. We&apos;ll show you what we can build and why. No pressure. Just an honest conversation.
          </p>

          {/* WhatsApp Action Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <m.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 450, damping: 28 }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-3",
                  "px-8 py-4 rounded-xl",
                  "bg-emerald-500 text-zinc-950",
                  "text-sm font-semibold tracking-tight",
                  "shadow-lg shadow-emerald-950/40",
                  "transition-all duration-200 hover:bg-emerald-400",
                  "outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <MessageCircle className="h-5 w-5 text-zinc-950" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="h-4 w-4 text-zinc-950" />
              </a>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

FinalCTA.displayName = "FinalCTA";
