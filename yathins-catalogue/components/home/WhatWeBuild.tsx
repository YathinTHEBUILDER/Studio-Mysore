"use client";

/**
 * WhatWeBuild — Capabilities Accordion
 *
 * Section ID: #what-we-build
 * Title: WHAT WE BUILD
 *
 * Four items, one open at a time.
 * Right panel links to existing Studio Mysore demos.
 *
 * Colours: #060606 / #F5F5F5 / #D4AF37 only.
 * Spacing: 16, 24, 32, 48, 64, 96, 128, 160 only.
 */

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  demo: {
    label: string;
    route: string;
    description: string;
  };
}

const CAPABILITIES: Capability[] = [
  {
    id: "cx",
    number: "01",
    title: "Customer Experience",
    description:
      "Interactive websites, online ordering, bookings and customer journeys.",
    demo: {
      label: "Restaurant ordering demo",
      route: "/experiences/cafe",
      description:
        "Explore a live customer-facing ordering and booking flow built for a hospitality business.",
    },
  },
  {
    id: "ops",
    number: "02",
    title: "Operations",
    description:
      "Inventory, staff management, scheduling and daily operations.",
    demo: {
      label: "Inventory dashboard",
      route: "/experiences/medical-clinic",
      description:
        "See how staff workflows, inventory tracking and task dispatch work inside a live operations system.",
    },
  },
  {
    id: "commerce",
    number: "03",
    title: "Commerce",
    description: "Payments, POS, subscriptions and online sales.",
    demo: {
      label: "Checkout and POS",
      route: "/experiences/cafe",
      description:
        "Try a complete checkout and point-of-sale experience built for real transaction volume.",
    },
  },
  {
    id: "insights",
    number: "04",
    title: "Insights",
    description: "Analytics, reporting and business intelligence.",
    demo: {
      label: "Analytics dashboard",
      route: "/experiences/gym",
      description:
        "Explore live analytics, retention tracking and business intelligence built for daily use.",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Accordion Item
// ─────────────────────────────────────────────────────────────────────────────

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: Capability;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  // Measure height for smooth CSS transition
  React.useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderTop: "1px solid rgba(245,245,245,0.08)",
      }}
    >
      {/* Row button */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          columnGap: 24,
          alignItems: "center",
          paddingTop: 32,
          paddingBottom: 32,
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          outline: "none",
        }}
      >
        {/* Number */}
        <span
          style={{
            gridColumn: "1 / 2",
            fontFamily: "monospace",
            fontSize: 12,
            letterSpacing: "0.12em",
            color: isOpen ? "#D4AF37" : "rgba(245,245,245,0.35)",
            transition: "color 300ms ease",
            fontWeight: 500,
          }}
        >
          {item.number}
        </span>

        {/* Title */}
        <span
          style={{
            gridColumn: "2 / 9",
            fontFamily:
              "var(--font-instrument-sans), 'Instrument Sans', sans-serif",
            fontSize: "clamp(26px, 2.8vw, 44px)",
            fontWeight: 700,
            color: isOpen ? "#F5F5F5" : "rgba(245,245,245,0.55)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            transition: "color 300ms ease",
          }}
        >
          {item.title}
        </span>

        {/* Plus / Minus indicator */}
        <span
          style={{
            gridColumn: "12 / 13",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            color: isOpen ? "#D4AF37" : "rgba(245,245,245,0.3)",
            transition: "color 300ms ease",
            fontSize: 20,
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Expandable body */}
      <div
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 420ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div ref={bodyRef}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              columnGap: 24,
              paddingBottom: 64,
              paddingTop: 16,
            }}
          >
            {/* Description — cols 2–6 */}
            <div
              style={{
                gridColumn: "2 / 7",
              }}
            >
              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "rgba(245,245,245,0.6)",
                  margin: 0,
                  marginBottom: 32,
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 400,
                }}
              >
                {item.description}
              </p>
            </div>

            {/* Right panel — cols 8–12 */}
            <div
              style={{
                gridColumn: "8 / 13",
              }}
            >
              <DemoPanel item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Demo Panel — links to actual Studio Mysore experiences
// ─────────────────────────────────────────────────────────────────────────────

function DemoPanel({ item }: { item: Capability }) {
  return (
    <div
      style={{
        border: "1px solid rgba(245,245,245,0.08)",
        padding: 32,
        background: "rgba(245,245,245,0.02)",
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* Demo label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#D4AF37",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#D4AF37",
            opacity: 0.9,
          }}
        >
          {item.demo.label}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.65,
          color: "rgba(245,245,245,0.45)",
          margin: 0,
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontWeight: 400,
        }}
      >
        {item.demo.description}
      </p>

      {/* Link to live demo */}
      <Link
        href={item.demo.route}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          fontSize: 13,
          fontWeight: 600,
          color: "#F5F5F5",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          letterSpacing: "0.01em",
          textDecoration: "none",
          opacity: 0.8,
          transition: "opacity 200ms ease",
          paddingTop: 8,
          borderTop: "1px solid rgba(245,245,245,0.08)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
          const arr = (e.currentTarget as HTMLAnchorElement).querySelector<HTMLSpanElement>(".wwb-arrow");
          if (arr) arr.style.transform = "translateX(4px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8";
          const arr = (e.currentTarget as HTMLAnchorElement).querySelector<HTMLSpanElement>(".wwb-arrow");
          if (arr) arr.style.transform = "translateX(0)";
        }}
      >
        <span>View live demo</span>
        <span
          className="wwb-arrow"
          style={{
            display: "inline-block",
            transition: "transform 220ms ease",
            fontSize: 14,
          }}
        >
          →
        </span>
      </Link>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WhatWeBuild — main export
// ─────────────────────────────────────────────────────────────────────────────

export function WhatWeBuild() {
  const [openId, setOpenId] = React.useState<string>("cx");

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="what-we-build"
      style={{
        background: "#060606",
        paddingTop: 128,
        paddingBottom: 160,
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
        }}
      >
        {/* ── Section header ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            columnGap: 24,
            marginBottom: 96,
            alignItems: "end",
          }}
        >
          {/* Title — cols 1–6 */}
          <div style={{ gridColumn: "1 / 7" }}>
            <span
              style={{
                display: "block",
                fontFamily: "monospace",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
                opacity: 0.8,
                marginBottom: 24,
              }}
            >
              Capabilities
            </span>
            <h2
              style={{
                fontFamily:
                  "var(--font-instrument-sans), 'Instrument Sans', sans-serif",
                fontSize: "clamp(40px, 4.5vw, 72px)",
                fontWeight: 700,
                color: "#F5F5F5",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                margin: 0,
              }}
            >
              WHAT WE BUILD
            </h2>
          </div>

          {/* Subline — cols 8–12 */}
          <div style={{ gridColumn: "8 / 13" }}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(245,245,245,0.45)",
                margin: 0,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Four product domains. Each one built to solve a specific
              operational problem — not a collection of features bolted
              together.
            </p>
          </div>
        </div>

        {/* ── Accordion list ── */}
        <div
          style={{
            borderBottom: "1px solid rgba(245,245,245,0.08)",
          }}
        >
          {CAPABILITIES.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

WhatWeBuild.displayName = "WhatWeBuild";
