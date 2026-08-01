"use client";

/**
 * CafePhoneMockup — Refined Handcrafted Hero Device Visual
 *
 * A fully interactive, live React cafe ordering application encased within a
 * hyper-realistic smartphone frame. Designed with pixel precision, tactile motion physics,
 * real-time user interaction, and seamless micro-state transitions.
 *
 * Craftsmanship highlights:
 *  - Precision hardware chassis with metallic bevels, dynamic island lens details, and physical buttons.
 *  - Dynamic status bar with live system clock & custom SVG cellular/wifi/battery indicators.
 *  - Full interactive state: search filtering, category tab spring indicator, item quantity adjusters.
 *  - Interactive checkout drawer: slide-up sheet, itemized breakdown, order type selector,
 *    and animated one-tap order submission with confetti/success checkmark feedback.
 *  - Glass surface reflectivity & ambient backlight glow.
 *
 * Source: 09-cafe-experience.md, 04-visual-design-system.md, 05-motion-system.md
 */

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingBag,
  X,
  Check,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  Clock,
} from "lucide-react";

// ─── Data Types & Menu Data ───────────────────────────────────────────────────

export const CATEGORIES = ["All", "Coffees", "Teas", "Bites"] as const;
export type Category = (typeof CATEGORIES)[number];

export interface MenuItem {
  id: string;
  category: "Coffees" | "Teas" | "Bites";
  name: string;
  desc: string;
  price: number;
  priceFormatted: string;
  tag?: string;
  gradient: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "c1",
    category: "Coffees",
    name: "Flat White",
    desc: "Double ristretto & velvet microfoam",
    price: 220,
    priceFormatted: "₹220",
    tag: "Popular",
    gradient: "linear-gradient(135deg, #5C3D2E 0%, #A0785A 100%)",
  },
  {
    id: "c2",
    category: "Coffees",
    name: "Cold Brew",
    desc: "16-hr slow steep, citrus & cocoa notes",
    price: 260,
    priceFormatted: "₹260",
    tag: "Single Origin",
    gradient: "linear-gradient(135deg, #2C1D11 0%, #6B4E37 100%)",
  },
  {
    id: "c3",
    category: "Coffees",
    name: "Cortado",
    desc: "Equal parts espresso & steamed oat milk",
    price: 200,
    priceFormatted: "₹200",
    gradient: "linear-gradient(135deg, #4A3324 0%, #8C6246 100%)",
  },
  {
    id: "c4",
    category: "Coffees",
    name: "Vanilla Latte",
    desc: "Madagascar vanilla bean & espresso",
    price: 280,
    priceFormatted: "₹280",
    gradient: "linear-gradient(135deg, #7A563D 0%, #C49A76 100%)",
  },
  {
    id: "t1",
    category: "Teas",
    name: "Masala Chai",
    desc: "Slow-brewed cardamom & Assam tea",
    price: 120,
    priceFormatted: "₹120",
    tag: "Classic",
    gradient: "linear-gradient(135deg, #8C431D 0%, #D97736 100%)",
  },
  {
    id: "t2",
    category: "Teas",
    name: "Matcha Latte",
    desc: "Uji ceremonial grade green tea",
    price: 240,
    priceFormatted: "₹240",
    tag: "Organic",
    gradient: "linear-gradient(135deg, #2D5A27 0%, #5B8C51 100%)",
  },
  {
    id: "t3",
    category: "Teas",
    name: "Earl Grey",
    desc: "Bergamot oil & blue cornflower",
    price: 160,
    priceFormatted: "₹160",
    gradient: "linear-gradient(135deg, #1E3A5F 0%, #3B6B9C 100%)",
  },
  {
    id: "b1",
    category: "Bites",
    name: "Almond Croissant",
    desc: "Flaky pastry filled with rich frangipane",
    price: 180,
    priceFormatted: "₹180",
    tag: "Fresh Baked",
    gradient: "linear-gradient(135deg, #9E6B28 0%, #D4A359 100%)",
  },
  {
    id: "b2",
    category: "Bites",
    name: "Avocado Toast",
    desc: "Hass avocado, chili flakes, sourdough",
    price: 320,
    priceFormatted: "₹320",
    gradient: "linear-gradient(135deg, #47662B 0%, #82A35C 100%)",
  },
  {
    id: "b3",
    category: "Bites",
    name: "Banana Bread",
    desc: "Warm toasted slice with espresso butter",
    price: 160,
    priceFormatted: "₹160",
    gradient: "linear-gradient(135deg, #7A4E29 0%, #B88554 100%)",
  },
];

// ─── Component Implementation ─────────────────────────────────────────────────

export function CafePhoneMockup() {
  const [activeCategory, setActiveCategory] = React.useState<Category>("Coffees");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [cart, setCart] = React.useState<Record<string, number>>({ c1: 1 });
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [orderType, setOrderType] = React.useState<"dine-in" | "takeaway">("dine-in");
  const [orderStatus, setOrderStatus] = React.useState<"idle" | "submitting" | "success">("idle");
  const [currentTime, setCurrentTime] = React.useState("9:41");

  // Update time live
  React.useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const mins = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${mins}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 10000);
    return () => clearInterval(timer);
  }, []);

  // Filter items
  const filteredItems = React.useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Cart calculations
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const handleAdd = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  const handleRemove = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) next[id]--;
      else delete next[id];
      return next;
    });
  };

  const handlePlaceOrder = () => {
    if (orderStatus !== "idle" || totalItems === 0) return;
    setOrderStatus("submitting");
    setTimeout(() => {
      setOrderStatus("success");
      setTimeout(() => {
        setIsCartOpen(false);
        setCart({});
        setOrderStatus("idle");
      }, 2200);
    }, 1000);
  };

  return (
    <div
      className="relative select-none group"
      style={{ width: 296, height: 608 }}
      aria-label="Interactive Café Ordering Interface Mockup"
      role="region"
    >
      {/* ── Ambient Backlight Glow ─────────────────────────────────────── */}
      <div
        className="absolute -inset-4 rounded-[56px] opacity-40 blur-2xl transition-opacity duration-700 pointer-events-none group-hover:opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(160, 120, 90, 0.28) 0%, rgba(0, 0, 0, 0) 70%)",
        }}
      />

      {/* ── Phone Hardware Outer Frame ─────────────────────────────────── */}
      <div
        className="relative w-full h-full rounded-[48px] p-2.5 transition-all duration-300"
        style={{
          background: "linear-gradient(145deg, #1C1C1F 0%, #0C0C0E 100%)",
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.12),
            inset 0 1.5px 1px rgba(255,255,255,0.25),
            inset 0 -1.5px 1px rgba(0,0,0,0.8),
            0 30px 70px -15px rgba(0, 0, 0, 0.95),
            0 10px 25px -5px rgba(0, 0, 0, 0.6)
          `,
        }}
      >
        {/* Hardware side buttons */}
        <div
          className="absolute -left-[3px] top-[108px] w-[3px] h-[34px] rounded-l-sm"
          style={{
            background: "linear-gradient(90deg, #3F3F46 0%, #18181B 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        />
        <div
          className="absolute -left-[3px] top-[152px] w-[3px] h-[34px] rounded-l-sm"
          style={{
            background: "linear-gradient(90deg, #3F3F46 0%, #18181B 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        />
        <div
          className="absolute -right-[3px] top-[128px] w-[3px] h-[52px] rounded-r-sm"
          style={{
            background: "linear-gradient(270deg, #3F3F46 0%, #18181B 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        />

        {/* ── Screen Inner Container ───────────────────────────────────── */}
        <div
          className="relative w-full h-full rounded-[40px] overflow-hidden flex flex-col"
          style={{
            background: "#FAFAF8",
            boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.12)",
          }}
        >
          {/* Glass reflection glaze overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-30 opacity-40"
            style={{
              background:
                "linear-gradient(130deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 30%, transparent 55%)",
            }}
          />

          {/* ── Status Bar & Dynamic Island ───────────────────────────── */}
          <div className="relative h-[44px] shrink-0 px-6 flex items-center justify-between z-20 select-none">
            {/* Dynamic Island */}
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-[84px] h-[22px] rounded-full bg-black flex items-center justify-between px-2.5"
              style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#0a101d] ring-1 ring-white/10 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#1b2b48]" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#051c08] ring-1 ring-emerald-500/30" />
            </div>

            {/* Live Clock */}
            <span
              className="text-[11px] font-semibold tracking-tight text-neutral-800"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {currentTime}
            </span>

            {/* Signal, Wifi & Battery Icons */}
            <div className="flex items-center gap-1.5 text-neutral-800">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="currentColor">
                <rect x="0" y="6" width="2" height="3" rx="0.5" />
                <rect x="3" y="4" width="2" height="5" rx="0.5" />
                <rect x="6" y="2" width="2" height="7" rx="0.5" />
                <rect x="9" y="0" width="2" height="9" rx="0.5" />
              </svg>
              <svg width="12" height="9" viewBox="0 0 12 9" fill="currentColor">
                <path d="M6 1.5C8.2 1.5 10.1 2.3 11.5 3.6L6 9L0.5 3.6C1.9 2.3 3.8 1.5 6 1.5Z" />
              </svg>
              <div className="w-4 h-2 rounded-[2px] border border-neutral-800 p-[1px] flex items-center">
                <div className="w-2.5 h-full bg-neutral-800 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* ── App Header ─────────────────────────────────────────────── */}
          <div className="px-4 pt-1 pb-2.5 border-b border-neutral-200/60 bg-[#FAFAF8] z-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span
                    className="text-[9px] font-bold tracking-wider uppercase"
                    style={{ color: "#A0785A" }}
                  >
                    Table 4 · QR Order
                  </span>
                </div>
                <h2
                  className="text-[15px] font-bold text-neutral-900 tracking-tight leading-tight mt-0.5"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  Mysore Roasters
                </h2>
              </div>

              {/* Search Toggle */}
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (isSearchOpen) setSearchQuery("");
                }}
                className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 active:scale-95 transition-all"
                aria-label="Toggle Search"
              >
                {isSearchOpen ? <X className="w-3.5 h-3.5" /> : <Search className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Expandable Search Input */}
            <AnimatePresence>
              {isSearchOpen && (
                <m.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mt-2"
                >
                  <input
                    type="text"
                    placeholder="Search coffee, bites..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-7 px-2.5 rounded-lg bg-neutral-200/70 text-[11px] text-neutral-800 placeholder-neutral-400 outline-none border-none"
                    autoFocus
                  />
                </m.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Category Navigation Tabs ────────────────────────────────── */}
          <div className="px-3 pt-2 pb-1 flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-neutral-200/40 bg-[#FAFAF8]">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-2.5 py-1 text-[11px] font-semibold transition-colors shrink-0"
                  style={{
                    color: isActive ? "#A0785A" : "#8E8E93",
                  }}
                >
                  {cat}
                  {isActive && (
                    <m.div
                      layoutId="cafeTabIndicator"
                      className="absolute bottom-0 inset-x-2 h-[2px] rounded-full"
                      style={{ background: "#A0785A" }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Menu List Section ───────────────────────────────────────── */}
          <div className="flex-1 overflow-y-auto px-3.5 py-2 space-y-2 select-none" style={{ scrollbarWidth: "none" }}>
            <AnimatePresence mode="popLayout">
              {filteredItems.length === 0 ? (
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-8 text-center"
                >
                  <p className="text-[11px] text-neutral-400 font-medium">No items found</p>
                </m.div>
              ) : (
                filteredItems.map((item) => {
                  const qty = cart[item.id] ?? 0;
                  return (
                    <m.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between p-2 rounded-xl bg-white border border-neutral-200/50 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-neutral-300 transition-all"
                    >
                      {/* Left: Swatch + Details */}
                      <div className="flex items-center gap-2.5 min-w-0 pr-1">
                        <div
                          className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center shadow-inner"
                          style={{ background: item.gradient }}
                        >
                          <span className="text-[10px] text-white/80 font-mono font-bold">
                            {item.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-[12px] font-bold text-neutral-900 truncate leading-tight">
                              {item.name}
                            </h3>
                            {item.tag && (
                              <span
                                className="text-[8px] font-bold px-1.5 py-0.2 rounded-full uppercase shrink-0"
                                style={{
                                  background: "rgba(160, 120, 90, 0.12)",
                                  color: "#A0785A",
                                }}
                              >
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-[9.5px] text-neutral-500 truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* Right: Price & Quantity Controls */}
                      <div className="flex items-center gap-2 shrink-0 pl-1">
                        <span className="text-[11px] font-extrabold text-neutral-900">
                          {item.priceFormatted}
                        </span>

                        {qty > 0 ? (
                          <div className="flex items-center gap-1 bg-neutral-100 p-0.5 rounded-full border border-neutral-200">
                            <m.button
                              whileTap={{ scale: 0.85 }}
                              onClick={(e) => handleRemove(item.id, e)}
                              className="w-4 h-4 rounded-full flex items-center justify-center bg-white text-neutral-700 shadow-sm"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </m.button>
                            <span className="text-[10px] font-bold w-3 text-center text-neutral-800">
                              {qty}
                            </span>
                            <m.button
                              whileTap={{ scale: 0.85 }}
                              onClick={(e) => handleAdd(item.id, e)}
                              className="w-4 h-4 rounded-full flex items-center justify-center text-white shadow-sm"
                              style={{ background: "#A0785A" }}
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </m.button>
                          </div>
                        ) : (
                          <m.button
                            whileTap={{ scale: 0.85 }}
                            onClick={(e) => handleAdd(item.id, e)}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-white shadow-sm transition-transform"
                            style={{ background: "#A0785A" }}
                            aria-label="Add to cart"
                          >
                            <Plus className="w-3 h-3" />
                          </m.button>
                        )}
                      </div>
                    </m.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>

          {/* ── Persistent Cart Bottom Bar ──────────────────────────────── */}
          <AnimatePresence>
            {totalItems > 0 && !isCartOpen && (
              <m.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="p-3 bg-[#FAFAF8] border-t border-neutral-200/60 z-10"
              >
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="w-full py-2.5 px-3.5 rounded-xl flex items-center justify-between text-white shadow-lg transition-transform active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #A0785A 0%, #856145 100%)",
                    boxShadow: "0 4px 14px rgba(160, 120, 90, 0.4)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/20 text-[10px] font-bold flex items-center justify-center text-white">
                      {totalItems}
                    </span>
                    <span className="text-[11px] font-semibold text-white/90">
                      View Order
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[12px] font-bold">
                    <span>₹{subtotal}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </div>
                </button>
              </m.div>
            )}
          </AnimatePresence>

          {/* ── Interactive Cart Drawer Modal ─────────────────────────────── */}
          <AnimatePresence>
            {isCartOpen && (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 z-40 flex flex-col justify-end"
                onClick={() => setIsCartOpen(false)}
              >
                <m.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  className="bg-white rounded-t-[28px] p-4 flex flex-col max-h-[85%] select-none shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Drag Indicator */}
                  <div className="w-8 h-1 rounded-full bg-neutral-300 mx-auto mb-3" />

                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <div>
                      <h3 className="text-[13px] font-bold text-neutral-900 leading-tight">
                        Your Order
                      </h3>
                      <p className="text-[9.5px] text-neutral-500">
                        {totalItems} item{totalItems > 1 ? "s" : ""} selected
                      </p>
                    </div>

                    {/* Order Type Toggle Pill */}
                    <div className="flex items-center p-0.5 bg-neutral-100 rounded-lg border border-neutral-200/80">
                      <button
                        onClick={() => setOrderType("dine-in")}
                        className={`px-2 py-0.5 rounded-md text-[9px] font-bold transition-all ${
                          orderType === "dine-in"
                            ? "bg-white text-neutral-900 shadow-xs"
                            : "text-neutral-500"
                        }`}
                      >
                        Dine-In
                      </button>
                      <button
                        onClick={() => setOrderType("takeaway")}
                        className={`px-2 py-0.5 rounded-md text-[9px] font-bold transition-all ${
                          orderType === "takeaway"
                            ? "bg-white text-neutral-900 shadow-xs"
                            : "text-neutral-500"
                        }`}
                      >
                        Takeaway
                      </button>
                    </div>
                  </div>

                  {/* Drawer Item List */}
                  <div className="py-2 space-y-2 overflow-y-auto max-h-[220px]" style={{ scrollbarWidth: "none" }}>
                    {Object.entries(cart).map(([id, qty]) => {
                      const item = MENU_ITEMS.find((m) => m.id === id);
                      if (!item) return null;
                      return (
                        <div
                          key={id}
                          className="flex items-center justify-between text-[11px] py-1 border-b border-neutral-100/60"
                        >
                          <div className="min-w-0 pr-2">
                            <span className="font-semibold text-neutral-900 block truncate">
                              {item.name}
                            </span>
                            <span className="text-[9px] text-neutral-400">
                              {item.priceFormatted} × {qty}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => handleRemove(id)}
                              className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600"
                            >
                              <Minus className="w-2.5 h-2.5" />
                            </button>
                            <span className="font-bold text-neutral-800 text-[10px] w-3 text-center">
                              {qty}
                            </span>
                            <button
                              onClick={() => handleAdd(id)}
                              className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600"
                            >
                              <Plus className="w-2.5 h-2.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bill Summary */}
                  <div className="pt-2 border-t border-neutral-100 space-y-1 text-[10px] text-neutral-500">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & Kitchen Fee</span>
                      <span>₹25</span>
                    </div>
                    <div className="flex justify-between font-extrabold text-[12px] text-neutral-900 pt-1 border-t border-neutral-200">
                      <span>Total</span>
                      <span>₹{subtotal > 0 ? subtotal + 25 : 0}</span>
                    </div>
                  </div>

                  {/* Submit Order Action Button */}
                  <div className="mt-3">
                    {orderStatus === "success" ? (
                      <m.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="py-2.5 rounded-xl bg-emerald-600 text-white flex items-center justify-center gap-1.5 text-[11px] font-bold"
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Order #42 Sent to Kitchen!</span>
                      </m.div>
                    ) : (
                      <m.button
                        whileTap={{ scale: 0.98 }}
                        onClick={handlePlaceOrder}
                        disabled={orderStatus === "submitting" || totalItems === 0}
                        className="w-full py-2.5 rounded-xl text-white font-bold text-[11px] flex items-center justify-center gap-2 shadow-md transition-all disabled:opacity-50"
                        style={{
                          background: "linear-gradient(135deg, #A0785A 0%, #856145 100%)",
                        }}
                      >
                        {orderStatus === "submitting" ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Confirm & Pay ₹{subtotal > 0 ? subtotal + 25 : 0}</span>
                          </>
                        )}
                      </m.button>
                    )}
                  </div>
                </m.div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

CafePhoneMockup.displayName = "CafePhoneMockup";
