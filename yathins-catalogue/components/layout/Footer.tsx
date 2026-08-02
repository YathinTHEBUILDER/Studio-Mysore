"use client";

/**
 * Footer — Editorial Publication Colophon & Site Footer
 *
 * Studio Mysore luxury colophon architecture:
 *  - Issue N° 01 publication mark
 *  - Live studio status indicator (● Operational • Mysore Studio)
 *  - Categorized experience navigation columns
 *  - Direct founder WhatsApp conversion CTA
 *  - Hairline gradient dividers & high-contrast focus rings
 */

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Badge } from "@/components/ui/Badge";
import { Logo } from "./Logo";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hi, I explored Studio Mysore's website catalogue and would like to talk about a custom website for my business."
  );

  return (
    <footer className="w-full bg-background border-t border-zinc-800/80 pt-16 pb-12 overflow-hidden select-none">
      <Container variant="wide" className="space-y-14">
        {/* Top Colophon Bar: Studio Status & Issue Stamp */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Operational • Mysore Studio</span>
            </div>
            <span className="text-zinc-700 text-xs">•</span>
            <span className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase">
              Issue N° 01
            </span>
          </div>

          <span className="text-xs font-mono text-zinc-400">
            Design Engineering for Ambitious Businesses
          </span>
        </div>

        <Divider variant="gradient" />

        {/* Main Colophon Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-4">
          {/* Column 1: Brand Identity & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              We design and build bespoke, production-grade websites for businesses that refuse generic templates. Pure performance, cinematic aesthetics, zero compromises.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs transition-all duration-300 hover:bg-zinc-200 shadow-lg shadow-white/5 active:scale-95 outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <MessageCircle className="w-3.5 h-3.5 text-zinc-950 fill-zinc-950" />
                <span>Talk to Founder on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Industry Experiences (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-white">
              Catalogue Experiences
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-400">
              <li>
                <Link
                  href="/experiences/cafe"
                  className="hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Micro-Batch Roastery Café</span>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-amber-400">01</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/restaurant"
                  className="hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Fine Dining Tasting Room</span>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-rose-400">02</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/dental"
                  className="hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>3D Digital Dental Studio</span>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-sky-400">03</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/medical-clinic"
                  className="hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Outpatient Medical Clinic</span>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-teal-400">04</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences/gym"
                  className="hover:text-white transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Heavy Iron Athletic Lab</span>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-lime-400">05</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform Architecture & Credentials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-white">
              Engineering Credentials
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span>Zero Generic Framer/WP Templates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span>60 FPS GSAP Smooth Orchestration</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span>Sub-100ms Turbopack Build Performance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span>24-Hour Initial Working Concept</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-zinc-600" />
                <span>Direct 1-on-1 Founder Partnership</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-zinc-400">
              <li>
                <Link href="/#experiences" className="hover:text-white transition-colors">
                  Catalogue Grid
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  Process Workflow
                </Link>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Divider variant="gradient" />

        {/* Bottom Colophon Credit Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Studio Mysore. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Mysore, KA, India</span>
            <span>•</span>
            <span>Crafted with Reverence</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Footer.displayName = "Footer";
