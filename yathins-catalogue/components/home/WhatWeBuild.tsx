"use client";

/**
 * WhatWeBuild — Primary Navigation Into Capabilities
 *
 * Section ID: #what-we-build
 *
 * Left column: Large editorial title + 4 expandable capability rows.
 * Right column: The actual Studio Mysore interactive demo embedded in a
 *               browser-chrome frame using <iframe>. GSAP fades + clip-path
 *               transitions on panel switch.
 *
 * Layout:
 *   12-column grid, max-w 1560px, px 96px, py 160px.
 *   Left:  cols 1–5
 *   Right: cols 7–12 (sticky, full section height)
 *
 * Colours: #060606 / #F5F5F5 / #D4AF37 exclusively.
 * Motion: GSAP, power3.out, 0.6s duration.
 */

import * as React from "react";
import Link from "next/link";
import { gsap } from "gsap";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  iframeUrl: string;
  demoLabel: string;
  demoRoute: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: "cx",
    number: "01",
    title: "Customer Experience",
    description:
      "Create websites and digital experiences customers genuinely enjoy using.",
    iframeUrl: "/experiences/restaurant",
    demoLabel: "Restaurant ordering demo",
    demoRoute: "/experiences/restaurant",
  },
  {
    id: "ops",
    number: "02",
    title: "Operations",
    description:
      "Manage inventory, staff, workflows and daily business operations from one place.",
    iframeUrl: "/experiences/medical-clinic",
    demoLabel: "Inventory dashboard",
    demoRoute: "/experiences/medical-clinic",
  },
  {
    id: "commerce",
    number: "03",
    title: "Commerce",
    description:
      "Accept payments, manage orders and sell across digital channels.",
    iframeUrl: "/experiences/cafe",
    demoLabel: "Checkout and POS",
    demoRoute: "/experiences/cafe",
  },
  {
    id: "insights",
    number: "04",
    title: "Insights",
    description:
      "Track performance with dashboards, analytics and reporting that support better decisions.",
    iframeUrl: "/experiences/gym",
    demoLabel: "Analytics dashboard",
    demoRoute: "/experiences/gym",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Browser Chrome Frame wrapping an iframe
// ─────────────────────────────────────────────────────────────────────────────

function BrowserFrame({
  url,
  label,
  route,
  isActive,
}: {
  url: string;
  label: string;
  route: string;
  isActive: boolean;
}) {
  const frameRef = React.useRef<HTMLDivElement>(null);
  const prevIsActive = React.useRef(isActive);

  // GSAP clip-path + fade transition when active state changes
  React.useEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    if (isActive && !prevIsActive.current) {
      // Entering
      gsap.fromTo(
        el,
        {
          opacity: 0,
          clipPath: "inset(4% 0% 4% 0%)",
        },
        {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.6,
          ease: "power3.out",
        }
      );
    } else if (!isActive && prevIsActive.current) {
      // Exiting
      gsap.to(el, {
        opacity: 0,
        clipPath: "inset(4% 0% 4% 0%)",
        duration: 0.35,
        ease: "power3.in",
      });
    }

    prevIsActive.current = isActive;
  }, [isActive]);

  if (!isActive) {
    // Keep in DOM (pre-loaded) but invisible so iframes don't reload
    return (
      <div
        ref={frameRef}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          clipPath: "inset(4% 0% 4% 0%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <BrowserChrome url={url} label={label} route={route} />
      </div>
    );
  }

  return (
    <div
      ref={frameRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        clipPath: "inset(0% 0% 0% 0%)",
      }}
    >
      <BrowserChrome url={url} label={label} route={route} />
    </div>
  );
}

function BrowserChrome({
  url,
  label,
  route,
}: {
  url: string;
  label: string;
  route: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid rgba(245,245,245,0.1)",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* ── Browser chrome bar ── */}
      <div
        style={{
          flexShrink: 0,
          height: 40,
          background: "#111111",
          borderBottom: "1px solid rgba(245,245,245,0.07)",
          display: "flex",
          alignItems: "center",
          paddingLeft: 16,
          paddingRight: 16,
          gap: 12,
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: 6 }}>
          {["rgba(245,245,245,0.15)", "rgba(245,245,245,0.1)", "rgba(245,245,245,0.07)"].map(
            (bg, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: bg,
                }}
              />
            )
          )}
        </div>

        {/* Address bar */}
        <div
          style={{
            flex: 1,
            height: 24,
            background: "rgba(245,245,245,0.04)",
            border: "1px solid rgba(245,245,245,0.06)",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
            gap: 6,
          }}
        >
          {/* Lock icon */}
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
            <rect x="1" y="4" width="7" height="6" rx="1" stroke="rgba(245,245,245,0.3)" strokeWidth="1"/>
            <path d="M2.5 4V3a2 2 0 014 0v1" stroke="rgba(245,245,245,0.3)" strokeWidth="1"/>
          </svg>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: "rgba(245,245,245,0.35)",
              letterSpacing: "0.02em",
            }}
          >
            studiomysore.com{url}
          </span>
        </div>

        {/* Open in new tab */}
        <Link
          href={route}
          target="_blank"
          rel="noopener noreferrer"
          title={`Open ${label} in new tab`}
          style={{
            color: "rgba(245,245,245,0.3)",
            transition: "color 200ms ease",
            display: "flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(245,245,245,0.75)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(245,245,245,0.3)")
          }
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5.5 2H2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8.5" />
            <path d="M8 1h4m0 0v4m0-4L5.5 7.5" />
          </svg>
        </Link>
      </div>

      {/* ── Iframe content ── */}
      <iframe
        src={url}
        title={label}
        style={{
          flex: 1,
          width: "100%",
          border: "none",
          display: "block",
          background: "#060606",
        }}
        loading="lazy"
      />

      {/* ── Bottom bar ── */}
      <div
        style={{
          flexShrink: 0,
          height: 32,
          background: "#111111",
          borderTop: "1px solid rgba(245,245,245,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 9,
            color: "rgba(245,245,245,0.2)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 9,
            color: "rgba(212,175,55,0.4)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          LIVE DEMO
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Accordion Row
// ─────────────────────────────────────────────────────────────────────────────

function CapabilityRow({
  item,
  isOpen,
  onSelect,
}: {
  item: Capability;
  isOpen: boolean;
  onSelect: () => void;
}) {
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const [bodyHeight, setBodyHeight] = React.useState(0);

  React.useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    setBodyHeight(isOpen ? el.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div
      style={{
        borderTop: "1px solid rgba(245,245,245,0.07)",
      }}
    >
      <button
        onClick={onSelect}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "baseline",
          gap: 24,
          paddingTop: 32,
          paddingBottom: isOpen ? 16 : 32,
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          outline: "none",
          transition: "padding-bottom 300ms ease",
        }}
      >
        {/* Number */}
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            color: isOpen ? "#D4AF37" : "rgba(245,245,245,0.25)",
            transition: "color 300ms ease",
            flexShrink: 0,
            lineHeight: 1,
            paddingTop: 4,
          }}
        >
          {item.number}
        </span>

        {/* Title */}
        <span
          style={{
            flex: 1,
            fontFamily:
              "var(--font-instrument-sans), 'Instrument Sans', sans-serif",
            fontSize: "clamp(28px, 2.6vw, 48px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: isOpen ? "#F5F5F5" : "rgba(245,245,245,0.4)",
            transition: "color 350ms ease",
          }}
        >
          {item.title}
        </span>

        {/* Indicator */}
        <span
          style={{
            flexShrink: 0,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 18,
            fontWeight: 300,
            lineHeight: 1,
            color: isOpen ? "#D4AF37" : "rgba(245,245,245,0.2)",
            transition: "color 300ms ease, transform 300ms ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>

      {/* Expandable description */}
      <div
        style={{
          height: bodyHeight,
          overflow: "hidden",
          transition: "height 450ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div ref={bodyRef}>
          <p
            style={{
              margin: 0,
              paddingBottom: 32,
              paddingLeft: 35, // align with title (number width + gap)
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(245,245,245,0.5)",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
              maxWidth: 420,
            }}
          >
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WhatWeBuild — main export
// ─────────────────────────────────────────────────────────────────────────────

export function WhatWeBuild() {
  const [activeId, setActiveId] = React.useState<string>("cx");
  const sectionRef = React.useRef<HTMLElement>(null);

  const handleSelect = (id: string) => {
    setActiveId((prev) => (prev === id ? prev : id)); // always stays open
  };

  return (
    <section
      ref={sectionRef}
      id="what-we-build"
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(245,245,245,0.06)",
      }}
      aria-label="What We Build"
    >
      <div
        style={{
          maxWidth: 1560,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 96,
          paddingRight: 96,
          paddingTop: 160,
          paddingBottom: 160,
        }}
      >
        {/* ── Inner 12-col grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            columnGap: 24,
            alignItems: "start",
          }}
        >
          {/* ──────────────────────────────────────
              LEFT: cols 1–5
          ─────────────────────────────────────── */}
          <div
            style={{
              gridColumn: "1 / 6",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Section label */}
            <span
              style={{
                display: "block",
                fontFamily: "monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
                opacity: 0.75,
                marginBottom: 32,
              }}
            >
              Capabilities
            </span>

            {/* Title */}
            <h2
              style={{
                fontFamily:
                  "var(--font-instrument-sans), 'Instrument Sans', sans-serif",
                fontSize: "clamp(44px, 4.8vw, 80px)",
                fontWeight: 700,
                color: "#F5F5F5",
                lineHeight: 0.9,
                letterSpacing: "-0.045em",
                margin: 0,
                marginBottom: 64,
              }}
            >
              WHAT
              <br />
              WE BUILD
            </h2>

            {/* Accordion */}
            <div
              style={{
                borderBottom: "1px solid rgba(245,245,245,0.07)",
              }}
            >
              {CAPABILITIES.map((item) => (
                <CapabilityRow
                  key={item.id}
                  item={item}
                  isOpen={activeId === item.id}
                  onSelect={() => handleSelect(item.id)}
                />
              ))}
            </div>

            {/* Footer note */}
            <p
              style={{
                marginTop: 48,
                fontFamily: "monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(245,245,245,0.2)",
                lineHeight: 1.6,
              }}
            >
              Select a capability
              <br />
              to preview a live demo →
            </p>
          </div>

          {/* ──────────────────────────────────────
              EMPTY SPACER: col 6
          ─────────────────────────────────────── */}
          <div style={{ gridColumn: "6 / 7" }} aria-hidden="true" />

          {/* ──────────────────────────────────────
              RIGHT: cols 7–12 (sticky panel)
          ─────────────────────────────────────── */}
          <div
            style={{
              gridColumn: "7 / 13",
              position: "sticky",
              top: 96,
              // Height: viewport minus top offset and some breathing room
              height: "calc(100vh - 160px)",
              minHeight: 560,
              maxHeight: 800,
            }}
          >
            {/* Stack all frames, use GSAP to show/hide */}
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              {CAPABILITIES.map((item) => (
                <BrowserFrame
                  key={item.id}
                  url={item.iframeUrl}
                  label={item.demoLabel}
                  route={item.demoRoute}
                  isActive={activeId === item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

WhatWeBuild.displayName = "WhatWeBuild";
