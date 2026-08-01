"use client";

/**
 * Footer — Clean Minimal Site Footer
 */

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { buildWhatsAppUrl } from "@/lib/site-config";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi Studio Mysore, I explored your website and would like to get in touch."
  );

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 py-12 sm:py-16">
      <Container variant="wide" className="space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Logo & Brand Tagline */}
          <div className="space-y-2 max-w-sm">
            <Logo />
            <p className="text-xs text-zinc-500 font-mono leading-relaxed">
              We build digital experiences around the way businesses work.
            </p>
          </div>

          {/* Footer Quick Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium text-zinc-400">
            <Link
              href="/#experiences"
              className="hover:text-white transition-colors"
            >
              Experiences
            </Link>
            <Link
              href="/#how-we-work"
              className="hover:text-white transition-colors"
            >
              How We Work
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-600">
          <div>
            © {new Date().getFullYear()} Studio Mysore. All rights reserved.
          </div>
          <div>
            Built with craftsmanship for local businesses.
          </div>
        </div>
      </Container>
    </footer>
  );
}

Footer.displayName = "Footer";
