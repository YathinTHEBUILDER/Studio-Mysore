"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Check,
  ArrowRight,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  ChevronLeft,
  Coffee,
  CheckCircle2,
  Clock,
  MapPin,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CAFE_CATEGORIES,
  CAFE_MENU_ITEMS,
  CafeCategory,
} from "./configs/cafeConfig";
import { CartItem, CartState, DemoItem, WorkflowStep } from "./types";

export interface LiveCafeDemoProps {
  initialStep?: WorkflowStep;
  onStepChange?: (step: WorkflowStep) => void;
  className?: string;
}

const MILK_OPTIONS = ["Oat Milk (+₹30)", "Almond Milk (+₹30)", "Whole Milk"];
const SIZE_OPTIONS = ["Regular", "Large (+₹40)"];

export function LiveCafeDemo({
  initialStep = "menu",
  onStepChange,
  className,
}: LiveCafeDemoProps) {
  // Step state
  const [activeStep, setActiveStep] = React.useState<WorkflowStep>(initialStep);
  const [activeCategory, setActiveCategory] = React.useState<CafeCategory>("Coffees");
  const [searchQuery, setSearchQuery] = React.useState("");

  // Detail Modal item
  const [selectedItem, setSelectedItem] = React.useState<DemoItem | null>(null);
  const [selectedMilk, setSelectedMilk] = React.useState(MILK_OPTIONS[0]);
  const [selectedSize, setSelectedSize] = React.useState(SIZE_OPTIONS[0]);
  const [itemQuantity, setItemQuantity] = React.useState(1);

  // Cart State
  const [cart, setCart] = React.useState<CartItem[]>([
    {
      item: CAFE_MENU_ITEMS[0], // Flat White initial default
      quantity: 1,
      selectedMilk: "Oat Milk (+₹30)",
      selectedSize: "Regular",
      customPrice: 250,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  // Haptic flash feedback
  const [badgeBump, setBadgeBump] = React.useState(false);

  // Sync state changes with parent callback
  const changeStep = React.useCallback(
    (step: WorkflowStep) => {
      setActiveStep(step);
      if (onStepChange) onStepChange(step);
    },
    [onStepChange]
  );

  // Keep internal step in sync if prop changes
  React.useEffect(() => {
    if (initialStep) {
      setActiveStep(initialStep);
    }
  }, [initialStep]);

  // Handle category tab change
  const handleCategorySelect = (cat: CafeCategory) => {
    setActiveCategory(cat);
    if (cat === "Coffees" && activeStep === "menu") {
      changeStep("coffee");
    }
  };

  // Open item detail (specifically Latte or any item)
  const handleItemSelect = (item: DemoItem) => {
    setSelectedItem(item);
    setItemQuantity(1);
    setSelectedMilk(MILK_OPTIONS[0]);
    setSelectedSize(SIZE_OPTIONS[0]);
    if (item.name.toLowerCase().includes("latte")) {
      changeStep("latte");
    }
  };

  // Calculate item total price with options
  const calculateItemPrice = React.useCallback(
    (basePrice: number, milk: string, size: string) => {
      let extra = 0;
      if (milk.includes("+₹30")) extra += 30;
      if (size.includes("+₹40")) extra += 40;
      return basePrice + extra;
    },
    []
  );

  // Add item to cart micro-interaction
  const handleAddToCart = () => {
    if (!selectedItem) return;

    const unitPrice = calculateItemPrice(
      selectedItem.price,
      selectedMilk,
      selectedSize
    );

    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (ci) =>
          ci.item.id === selectedItem.id &&
          ci.selectedMilk === selectedMilk &&
          ci.selectedSize === selectedSize
      );

      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx].quantity += itemQuantity;
        return next;
      }

      return [
        ...prev,
        {
          item: selectedItem,
          quantity: itemQuantity,
          selectedMilk,
          selectedSize,
          customPrice: unitPrice,
        },
      ];
    });

    // Close modal & trigger micro-interactions
    setSelectedItem(null);
    setBadgeBump(true);
    setTimeout(() => setBadgeBump(false), 400);

    changeStep("cart");
    setIsCartOpen(true);
  };

  // Cart quantity controls
  const updateQuantity = (index: number, delta: number) => {
    setCart((prev) => {
      const next = [...prev];
      const newQty = next[index].quantity + delta;
      if (newQty <= 0) {
        next.splice(index, 1);
      } else {
        next[index].quantity = newQty;
      }
      return next;
    });
    setBadgeBump(true);
    setTimeout(() => setBadgeBump(false), 300);
  };

  // Computed Cart totals
  const cartSummary: CartState = React.useMemo(() => {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => {
      const p = item.customPrice || item.item.price;
      return sum + p * item.quantity;
    }, 0);
    const tax = Math.round(subtotal * 0.05); // 5% GST
    const total = subtotal + tax;

    return { items: cart, itemCount, subtotal, tax, total };
  }, [cart]);

  // Proceed to Checkout
  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    changeStep("checkout");
  };

  // Complete Order
  const handleConfirmOrder = () => {
    changeStep("confirmed");
  };

  // Reset Demo Flow
  const handleResetDemo = () => {
    setCart([
      {
        item: CAFE_MENU_ITEMS[0],
        quantity: 1,
        selectedMilk: "Oat Milk (+₹30)",
        selectedSize: "Regular",
        customPrice: 250,
      },
    ]);
    setIsCartOpen(false);
    setSelectedItem(null);
    setActiveCategory("Coffees");
    changeStep("menu");
  };

  // Filter menu items by category & search query
  const filteredItems = CAFE_MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col bg-stone-950 text-stone-100 selection:bg-amber-500/30 selection:text-amber-200",
        className
      )}
    >
      {/* ── App Navigation Header ────────────────────────────────────────────── */}
      <header className="flex h-12 items-center justify-between border-b border-stone-800/60 bg-stone-950/90 px-4 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          {activeStep !== "menu" && activeStep !== "confirmed" && (
            <button
              type="button"
              onClick={() => {
                if (isCartOpen) setIsCartOpen(false);
                else if (selectedItem) setSelectedItem(null);
                else if (activeStep === "checkout") changeStep("cart");
                else changeStep("menu");
              }}
              className="mr-1 rounded-full p-1 text-stone-400 hover:bg-stone-800 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              aria-label="Go back"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}
          <div className="flex items-center space-x-1.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
              <Coffee className="h-3.5 w-3.5" />
            </div>
            <span className="font-semibold text-xs tracking-wide text-stone-200">
              Mysore Roasters
            </span>
          </div>
        </div>

        {/* Cart Trigger Badge */}
        <m.button
          type="button"
          onClick={() => setIsCartOpen(true)}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: badgeBump ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="relative flex h-8 items-center space-x-1.5 rounded-full bg-stone-900 px-3 ring-1 ring-white/10 hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          aria-label={`Shopping Cart with ${cartSummary.itemCount} items`}
        >
          <ShoppingBag className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-xs font-semibold text-amber-400">
            {cartSummary.itemCount}
          </span>
        </m.button>
      </header>

      {/* ── Main App Screen Content ──────────────────────────────────────────── */}
      <div className="relative flex-1 overflow-y-auto overflow-x-hidden p-3.5 scrollbar-none">
        {/* Step: Order Confirmed Screen */}
        {activeStep === "confirmed" ? (
          <div className="flex h-full flex-col items-center justify-center text-center p-4">
            {/* Animated Checkmark Circle */}
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
              <m.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.2 }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 rounded-full bg-amber-500"
              />
              <m.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-stone-950 shadow-lg shadow-emerald-500/20"
              >
                <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
              </m.div>
            </div>

            <m.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg font-bold text-stone-100"
            >
              Order Confirmed!
            </m.h3>

            <m.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-1 text-xs text-stone-400"
            >
              Order Token <span className="font-mono text-amber-400">#SM-4089</span>
            </m.p>

            <m.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 w-full rounded-xl border border-stone-800/80 bg-stone-900/60 p-3.5 text-left text-xs"
            >
              <div className="flex items-center justify-between text-stone-300">
                <span className="flex items-center space-x-1.5">
                  <Clock className="h-3.5 w-3.5 text-amber-400" />
                  <span>Est. Preparation</span>
                </span>
                <span className="font-semibold text-amber-400">6–8 mins</span>
              </div>
              <div className="mt-2.5 flex items-center justify-between border-t border-stone-800/60 pt-2 text-stone-400">
                <span>Pickup Station</span>
                <span>Barista Counter 2</span>
              </div>
            </m.div>

            <m.button
              type="button"
              onClick={handleResetDemo}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex w-full items-center justify-center space-x-2 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-semibold text-stone-950 shadow-md hover:bg-amber-400 transition-colors"
            >
              <span>Place Another Order</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </m.button>
          </div>
        ) : activeStep === "checkout" ? (
          /* Step: Checkout Screen */
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold tracking-tight text-stone-100">
                Checkout & Review
              </h2>
              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
                Live Order
              </span>
            </div>

            {/* Delivery / Pickup address card */}
            <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-3 text-xs">
              <div className="flex items-center space-x-2 text-stone-300 font-medium">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>Studio Mysore Roastery</span>
              </div>
              <p className="mt-1 text-[11px] text-stone-400">
                124 Indiranagar 100ft Rd, Bengaluru
              </p>
            </div>

            {/* Order Items Summary */}
            <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-3 space-y-2 text-xs">
              <div className="font-semibold text-stone-300 pb-1 border-b border-stone-800/80">
                Order Items ({cartSummary.itemCount})
              </div>
              {cartSummary.items.map((ci, idx) => (
                <div key={idx} className="flex justify-between text-stone-300 text-[11px]">
                  <span>
                    {ci.quantity}x {ci.item.name}{" "}
                    <span className="text-stone-500">({ci.selectedSize})</span>
                  </span>
                  <span className="font-mono text-stone-200">
                    ₹{(ci.customPrice || ci.item.price) * ci.quantity}
                  </span>
                </div>
              ))}
              <div className="border-t border-stone-800/80 pt-2 space-y-1 text-[11px]">
                <div className="flex justify-between text-stone-400">
                  <span>Subtotal</span>
                  <span>₹{cartSummary.subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>GST (5%)</span>
                  <span>₹{cartSummary.tax}</span>
                </div>
                <div className="flex justify-between text-xs font-bold text-amber-400 pt-1 border-t border-stone-800">
                  <span>Total Amount</span>
                  <span>₹{cartSummary.total}</span>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="rounded-xl border border-stone-800 bg-stone-900/50 p-3 space-y-2 text-xs">
              <div className="font-semibold text-stone-300">Payment Option</div>
              <div className="flex items-center justify-between rounded-lg bg-stone-800/60 p-2.5 ring-1 ring-amber-500/50">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-amber-400" />
                  <span className="font-medium text-stone-200">UPI / One-Tap Pay</span>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* Confirm Payment Button */}
            <m.button
              type="button"
              onClick={handleConfirmOrder}
              whileTap={{ scale: 0.96 }}
              className="mt-2 flex w-full items-center justify-center space-x-2 rounded-xl bg-amber-500 py-3 text-xs font-bold text-stone-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
            >
              <span>Pay ₹{cartSummary.total} & Confirm Order</span>
              <Sparkles className="h-3.5 w-3.5" />
            </m.button>
          </div>
        ) : (
          /* Step: Menu & Coffee Browsing Screen */
          <div className="space-y-3.5">
            {/* Search Input Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-stone-500" />
              <input
                type="text"
                placeholder="Search roastery menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-stone-800 bg-stone-900/80 py-2 pl-8 pr-3 text-xs text-stone-100 placeholder-stone-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
              {CAFE_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategorySelect(cat)}
                    className={cn(
                      "rounded-lg px-3 py-1 text-xs font-medium transition-all whitespace-nowrap focus:outline-none",
                      isActive
                        ? "bg-amber-500 text-stone-950 font-semibold shadow-sm"
                        : "bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-stone-800/60"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Banner offer */}
            <div className="rounded-xl bg-gradient-to-r from-amber-900/40 via-stone-900 to-amber-950/40 p-3 border border-amber-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold tracking-wider text-amber-400 uppercase">
                    Special Batch
                  </span>
                  <h4 className="text-xs font-bold text-stone-100">
                    Madagascar Vanilla Bean Latte
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleItemSelect(
                      CAFE_MENU_ITEMS.find((i) => i.id === "c4") || CAFE_MENU_ITEMS[0]
                    )
                  }
                  className="rounded-lg bg-amber-500/20 px-2.5 py-1 text-[11px] font-semibold text-amber-300 hover:bg-amber-500/30 transition-colors"
                >
                  View
                </button>
              </div>
            </div>

            {/* Menu Items Grid / List */}
            <div className="space-y-2">
              {filteredItems.map((item) => (
                <m.div
                  key={item.id}
                  layout
                  onClick={() => handleItemSelect(item)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex cursor-pointer items-center justify-between rounded-xl border border-stone-800/80 bg-stone-900/60 p-2.5 transition-colors hover:border-amber-500/40 hover:bg-stone-900"
                >
                  <div className="flex items-center space-x-3">
                    {/* Item Swatch Icon */}
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg shadow-inner font-bold text-xs text-white/90"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <h4 className="text-xs font-semibold text-stone-200">
                          {item.name}
                        </h4>
                        {item.tag && (
                          <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-medium text-amber-400">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="line-clamp-1 text-[11px] text-stone-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-semibold text-amber-400">
                      {item.priceFormatted}
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-800 text-stone-300 hover:bg-amber-500 hover:text-stone-950 transition-colors">
                      <Plus className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Item Detail Customization Drawer / Modal (Latte step) ───────────── */}
      <AnimatePresence>
        {selectedItem && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex flex-col justify-end bg-black/60 backdrop-blur-sm"
          >
            <m.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="rounded-t-2xl border-t border-stone-800 bg-stone-900 p-4 shadow-2xl space-y-3.5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="rounded bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold text-amber-400 uppercase">
                    Customize Order
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-stone-100">
                    {selectedItem.name}
                  </h3>
                  <p className="text-xs text-stone-400">{selectedItem.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-full p-1 text-stone-400 hover:bg-stone-800 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Milk Option Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-stone-300">
                  Milk Base
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {MILK_OPTIONS.map((milk) => (
                    <button
                      key={milk}
                      type="button"
                      onClick={() => setSelectedMilk(milk)}
                      className={cn(
                        "rounded-lg p-2 text-center text-[10px] font-medium border transition-colors",
                        selectedMilk === milk
                          ? "border-amber-500 bg-amber-500/20 text-amber-300 font-semibold"
                          : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700"
                      )}
                    >
                      {milk}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-stone-300">
                  Cup Size
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {SIZE_OPTIONS.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={cn(
                        "rounded-lg p-2 text-center text-[10px] font-medium border transition-colors",
                        selectedSize === sz
                          ? "border-amber-500 bg-amber-500/20 text-amber-300 font-semibold"
                          : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700"
                      )}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Adjuster & Add Button */}
              <div className="flex items-center space-x-3 pt-2">
                <div className="flex items-center rounded-xl border border-stone-800 bg-stone-950 px-2 py-1 space-x-2">
                  <button
                    type="button"
                    onClick={() => setItemQuantity((q) => Math.max(1, q - 1))}
                    className="p-1 text-stone-400 hover:text-white"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-4 text-center font-mono text-xs font-semibold text-stone-200">
                    {itemQuantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setItemQuantity((q) => q + 1)}
                    className="p-1 text-stone-400 hover:text-white"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>

                <m.button
                  type="button"
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-1 items-center justify-between rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-bold text-stone-950 hover:bg-amber-400 transition-colors shadow-md"
                >
                  <span>Add to Cart</span>
                  <span className="font-mono">
                    ₹
                    {calculateItemPrice(
                      selectedItem.price,
                      selectedMilk,
                      selectedSize
                    ) * itemQuantity}
                  </span>
                </m.button>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Cart Drawer / Sheet (Cart updates step) ─────────────────────────── */}
      <AnimatePresence>
        {isCartOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex flex-col justify-end bg-black/60 backdrop-blur-sm"
          >
            <m.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="rounded-t-2xl border-t border-stone-800 bg-stone-900 p-4 shadow-2xl space-y-3"
            >
              <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-4 w-4 text-amber-400" />
                  <h3 className="text-xs font-bold text-stone-100">
                    Your Cart ({cartSummary.itemCount})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-full p-1 text-stone-400 hover:bg-stone-800 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {cartSummary.items.length === 0 ? (
                <div className="py-6 text-center text-xs text-stone-500">
                  Your cart is empty. Add items from the menu!
                </div>
              ) : (
                <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                  {cartSummary.items.map((ci, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-stone-800/80 bg-stone-950 p-2 text-xs"
                    >
                      <div>
                        <div className="font-semibold text-stone-200">
                          {ci.item.name}
                        </div>
                        <div className="text-[10px] text-stone-400">
                          {ci.selectedSize} • {ci.selectedMilk}
                        </div>
                        <div className="font-mono text-amber-400 font-semibold text-[11px] mt-0.5">
                          ₹{(ci.customPrice || ci.item.price) * ci.quantity}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-1.5 rounded-md border border-stone-800 bg-stone-900 px-2 py-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(index, -1)}
                          className="text-stone-400 hover:text-white"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-mono text-xs font-medium text-stone-200 w-3 text-center">
                          {ci.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(index, 1)}
                          className="text-stone-400 hover:text-white"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {cartSummary.items.length > 0 && (
                <div className="pt-2 border-t border-stone-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-200">
                    <span>Total Amount</span>
                    <span className="font-mono text-amber-400 text-sm">
                      ₹{cartSummary.total}
                    </span>
                  </div>
                  <m.button
                    type="button"
                    onClick={handleProceedToCheckout}
                    whileTap={{ scale: 0.96 }}
                    className="flex w-full items-center justify-center space-x-2 rounded-xl bg-amber-500 py-2.5 text-xs font-bold text-stone-950 hover:bg-amber-400 transition-colors shadow-md"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </m.button>
                </div>
              )}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
