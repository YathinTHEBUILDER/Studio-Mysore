"use client";

/**
 * CafePhoneMockup — Hero Device Visual
 *
 * A fully rendered café ordering interface displayed inside a premium
 * phone frame. This is NOT decorative — it communicates a real product.
 *
 * Design rules:
 *  - No placeholder text. Real menu items, real prices.
 *  - Phone frame: dark, clean — no glowing borders, no 3D effects.
 *  - Interface inside: warm café palette (#A0785A accent), Inter typography.
 *  - Sharp, readable UI — as if a real app is running inside the device.
 *
 * Source: 09-cafe-experience.md, 04-visual-design-system.md
 */

import * as React from "react";
import { m } from "framer-motion";

// ─── Static café menu data ────────────────────────────────────────────────────

const CATEGORIES = ["Coffees", "Teas", "Bites"] as const;
type Category = (typeof CATEGORIES)[number];

interface MenuItem {
  id: string;
  name: string;
  price: string;
  tag?: string;
}

const MENU: Record<Category, MenuItem[]> = {
  Coffees: [
    { id: "c1", name: "Flat White", price: "₹220", tag: "Popular" },
    { id: "c2", name: "Cold Brew", price: "₹260" },
    { id: "c3", name: "Cortado", price: "₹200" },
    { id: "c4", name: "Oat Latte", price: "₹280" },
  ],
  Teas: [
    { id: "t1", name: "Masala Chai", price: "₹120", tag: "Classic" },
    { id: "t2", name: "Earl Grey", price: "₹160" },
    { id: "t3", name: "Matcha Latte", price: "₹240" },
  ],
  Bites: [
    { id: "b1", name: "Almond Croissant", price: "₹180", tag: "Fresh" },
    { id: "b2", name: "Avocado Toast", price: "₹320" },
    { id: "b3", name: "Banana Bread", price: "₹160" },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────

export function CafePhoneMockup() {
  const [activeCategory, setActiveCategory] =
    React.useState<Category>("Coffees");
  const [cart, setCart] = React.useState<Record<string, number>>({ c1: 1 });

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = Object.values(MENU)
      .flat()
      .find((m) => m.id === id);
    if (!item) return sum;
    const price = parseInt(item.price.replace("₹", ""));
    return sum + price * qty;
  }, 0);

  const handleAdd = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  const handleRemove = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) next[id]--;
      else delete next[id];
      return next;
    });
  };

  return (
    /**
     * Outer phone frame — dark border, subtle rounded corners (phone radius).
     * No glow. No fake 3D perspective. Depth comes from layering only.
     */
    <div
      className="relative select-none"
      style={{ width: 280, height: 560 }}
      aria-label="Preview of café ordering interface"
      role="img"
    >
      {/* Phone shell */}
      <div
        className="absolute inset-0 rounded-[44px] overflow-hidden"
        style={{
          background: "#0E0E10",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.8), 0 40px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Status bar notch */}
        <div className="relative h-[48px] flex items-end justify-center pb-1.5 px-6">
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full"
            style={{ background: "#0E0E10" }}
          />
          <div className="flex w-full justify-between text-[9px] font-semibold tracking-tight"
            style={{ color: "rgba(255,255,255,0.7)", paddingTop: 8 }}
          >
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <BatteryIcon />
            </span>
          </div>
        </div>

        {/* ── App Content ─────────────────────────────────────────────── */}
        <div
          className="flex flex-col overflow-hidden"
          style={{
            height: "calc(100% - 48px)",
            background: "#FAFAF8",
            borderRadius: "0 0 44px 44px",
          }}
        >
          {/* App header */}
          <div
            className="px-5 pt-4 pb-3"
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              background: "#FAFAF8",
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div
                  className="text-[9px] font-medium tracking-wider uppercase mb-0.5"
                  style={{ color: "#A0785A" }}
                >
                  Table 4 · QR Order
                </div>
                <div
                  className="text-[16px] font-bold leading-tight tracking-tight"
                  style={{
                    color: "#1C1C1E",
                    fontFamily: "system-ui, sans-serif",
                  }}
                >
                  Good morning ☕
                </div>
              </div>
              <div
                className="text-[9px] font-medium px-2 py-1 rounded-full mt-0.5"
                style={{
                  background: "rgba(160,120,90,0.12)",
                  color: "#A0785A",
                  border: "1px solid rgba(160,120,90,0.2)",
                }}
              >
                Open
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <div
            className="flex gap-0 px-5 pt-3 pb-2"
            style={{ background: "#FAFAF8" }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-3 py-1.5 text-[11px] font-semibold transition-colors"
                style={{
                  color: activeCategory === cat ? "#A0785A" : "#999",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 6,
                }}
              >
                {cat}
                {activeCategory === cat && (
                  <m.div
                    layoutId="cafeTab"
                    className="absolute bottom-0 inset-x-2 h-[2px] rounded-full"
                    style={{ background: "#A0785A" }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Menu list */}
          <div
            className="flex-1 overflow-y-auto px-4 pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            <m.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {MENU[activeCategory].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2.5"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.055)" }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Item colour swatch — stands in for an image */}
                    <div
                      className="w-8 h-8 rounded-xl shrink-0"
                      style={{
                        background:
                          item.id.startsWith("c")
                            ? "linear-gradient(135deg, #6B4E37 0%, #A0785A 100%)"
                            : item.id.startsWith("t")
                            ? "linear-gradient(135deg, #4A7C59 0%, #6EAB86 100%)"
                            : "linear-gradient(135deg, #C9A96E 0%, #E8D5B7 100%)",
                      }}
                    />
                    <div className="min-w-0">
                      <div
                        className="text-[12px] font-semibold leading-tight truncate"
                        style={{ color: "#1C1C1E" }}
                      >
                        {item.name}
                      </div>
                      {item.tag && (
                        <div
                          className="text-[9px] font-medium mt-0.5"
                          style={{ color: "#A0785A" }}
                        >
                          {item.tag}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="text-[12px] font-semibold"
                      style={{ color: "#1C1C1E" }}
                    >
                      {item.price}
                    </span>
                    {cart[item.id] ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold"
                          style={{
                            background: "rgba(160,120,90,0.12)",
                            color: "#A0785A",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          −
                        </button>
                        <span
                          className="text-[11px] font-bold w-3 text-center"
                          style={{ color: "#1C1C1E" }}
                        >
                          {cart[item.id]}
                        </span>
                        <button
                          onClick={() => handleAdd(item.id)}
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold"
                          style={{
                            background: "#A0785A",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAdd(item.id)}
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[13px] font-bold"
                        style={{
                          background: "rgba(160,120,90,0.12)",
                          color: "#A0785A",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </m.div>
          </div>

          {/* Cart bar */}
          {totalItems > 0 && (
            <m.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mx-4 mb-4 rounded-2xl px-4 py-3 flex items-center justify-between"
              style={{
                background: "#A0785A",
                boxShadow: "0 8px 24px rgba(160,120,90,0.35)",
              }}
            >
              <div
                className="text-[11px] font-semibold"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {totalItems} item{totalItems > 1 ? "s" : ""} · ₹{totalPrice}
              </div>
              <div
                className="text-[11px] font-bold"
                style={{ color: "#fff" }}
              >
                View order →
              </div>
            </m.div>
          )}
        </div>
      </div>

      {/* Side buttons — physical detail */}
      <div
        className="absolute left-[-2px] top-24 w-[2px] h-10 rounded-l-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
      <div
        className="absolute left-[-2px] top-36 w-[2px] h-8 rounded-l-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
      <div
        className="absolute right-[-2px] top-28 w-[2px] h-14 rounded-r-full"
        style={{ background: "rgba(255,255,255,0.08)" }}
      />
    </div>
  );
}

CafePhoneMockup.displayName = "CafePhoneMockup";

// ─── Micro icons ──────────────────────────────────────────────────────────────

function BatteryIcon() {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="13"
        height="7"
        rx="2"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1"
      />
      <rect x="14" y="2.5" width="1.5" height="3" rx="0.75" fill="rgba(255,255,255,0.4)" />
      <rect x="1.5" y="1.5" width="9" height="5" rx="1" fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}
