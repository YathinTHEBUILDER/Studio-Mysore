"use client";

import * as React from "react";
import { m } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FinalCTA() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I'd like to talk about a website for my business."
  );

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const prefersMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timer = setTimeout(() => {
      setIsMounted(true);
      setPrefersReducedMotion(prefersMotion);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!isMounted || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const duration = 0.9;
      const overlap = "-=0.315"; // 35% overlap (0.9 * 0.35 = 0.315s)

      gsap.set(
        [
          ".js-cta-eyebrow",
          ".js-cta-title",
          ".js-cta-copy",
          ".js-cta-buttons",
        ],
        {
          opacity: 0,
          y: 30,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        }
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: {
          duration,
          ease: "power4.out",
        },
      });

      // 1. Image / Eyebrow visual anchor
      timeline
        .to(".js-cta-eyebrow", {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        })
        // 2. Heading (35% overlap)
        .to(
          ".js-cta-title",
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          overlap
        )
        // 3. Body (35% overlap)
        .to(
          ".js-cta-copy",
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          overlap
        )
        // 4. CTA (35% overlap)
        .to(
          ".js-cta-buttons",
          {
            opacity: 1,
            y: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          overlap
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isMounted, prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      id="final-cta"
      className="relative py-36 sm:py-48 lg:py-56 bg-background border-t border-zinc-900 overflow-hidden"
      aria-label="Final CTA — Let's talk"
    >
      <div className="container-wide w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10 sm:space-y-12">
          {/* Eyebrow */}
          <div
            className={cn(
              "flex items-center justify-center gap-4 js-cta-eyebrow",
              isMounted && !prefersReducedMotion && "opacity-0"
            )}
          >
            <div className="w-12 h-[1px] bg-zinc-700" />
            <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-zinc-400">
              Let&apos;s Talk
            </span>
            <div className="w-12 h-[1px] bg-zinc-700" />
          </div>

          {/* Headline */}
          <h2
            className={cn(
              "text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-[-0.03em] leading-[0.98] js-cta-title",
              isMounted && !prefersReducedMotion && "opacity-0"
            )}
          >
            Let&apos;s talk about your business.
          </h2>

          {/* Supporting Copy */}
          <p
            className={cn(
              "text-zinc-400 text-lg sm:text-2xl font-light leading-relaxed max-w-[60ch] mx-auto js-cta-copy",
              isMounted && !prefersReducedMotion && "opacity-0"
            )}
          >
            Tell us how your business works. We&apos;ll build around that. No pressure, no sales pitch—just an honest conversation.
          </p>

          {/* WhatsApp Action Button & Email Option */}
          <div
            className={cn(
              "pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 js-cta-buttons",
              isMounted && !prefersReducedMotion && "opacity-0"
            )}
          >
            <m.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 450, damping: 28 }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center gap-3",
                  "px-9 py-4.5 rounded-full",
                  "bg-white text-zinc-950",
                  "text-xs font-mono font-semibold tracking-[0.15em] uppercase",
                  "shadow-xl shadow-white/5",
                  "transition-all duration-300 hover:bg-zinc-200 hover:shadow-white/10",
                  "outline-none focus-visible:ring-1 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <MessageCircle className="h-4 w-4 text-zinc-950 fill-zinc-950" />
                <span>Chat on WhatsApp</span>
                <ArrowRight className="h-4 w-4 text-zinc-950" />
              </a>
            </m.div>

            <a
              href="mailto:yathin@studiomysore.com"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "px-8 py-4.5 rounded-full",
                "bg-zinc-900/80 text-zinc-300 border border-zinc-800",
                "text-xs font-mono font-medium tracking-[0.15em] uppercase",
                "transition-all duration-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-700",
                "outline-none focus-visible:ring-1 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              <span>Email Founder Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

FinalCTA.displayName = "FinalCTA";
