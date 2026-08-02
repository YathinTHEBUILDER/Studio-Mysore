"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { CafeCartItem } from "../types";
import { X, CreditCard, Clock, CheckCircle, Loader2, Check } from "lucide-react";
import { useInteractionRhythm } from "@/hooks/useInteractionRhythm";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { springs } from "@/lib/tokens/transitions";

interface CafeCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CafeCartItem[];
  total: number;
  onComplete: (name: string, phone: string, orderType: "pickup" | "dine_in") => void;
}

export const CafeCheckoutModal: React.FC<CafeCheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  total,
  onComplete,
}) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [orderType, setOrderType] = React.useState<"pickup" | "dine_in">("pickup");
  const { isLoading, isSuccess, execute } = useInteractionRhythm({ defaultDelayMs: 900, defaultSuccessMs: 500 });
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    execute(
      () => {
        onComplete(name, phone, orderType);
      },
      { delayMs: 900, successMs: 500, resetAfter: false }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          <m.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
            transition={springs.gentle}
            className="relative z-10 w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl text-white space-y-6"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="font-display text-xl font-semibold">Express Checkout</h3>
                <span className="text-xs font-mono text-amber-400">Artisan Cafe Counter Dispatch</span>
              </div>
              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </m.button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Order Type Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Fulfillment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <m.button
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setOrderType("pickup")}
                    className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition-all ${
                      orderType === "pickup"
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm"
                        : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <span>Express Pickup</span>
                  </m.button>
                  <m.button
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setOrderType("dine_in")}
                    className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition-all ${
                      orderType === "dine_in"
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm"
                        : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Table Dine-In</span>
                  </m.button>
                </div>
              </div>

              {/* Input Details */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rohan Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Mobile Phone (For Order SMS)</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Payment Method</label>
                  <div className="p-3 rounded-xl bg-zinc-950 border border-amber-500/40 text-xs flex items-center justify-between text-zinc-300">
                    <span className="font-semibold text-amber-300">UPI / PhonePe / GPay / Paytm</span>
                    <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">Instant Pay</span>
                  </div>
                </div>
              </div>

              {/* Total summary */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-sm">
                <span className="text-zinc-400 font-mono">Total Due:</span>
                <span className="font-mono text-lg font-bold text-amber-400">₹{total.toLocaleString('en-IN')}</span>
              </div>

              <m.button
                whileHover={isLoading || isSuccess || shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={isLoading || isSuccess || shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={springs.snappy}
                type="submit"
                disabled={isLoading || isSuccess}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                  isSuccess
                    ? "bg-emerald-500 text-zinc-950 shadow-emerald-500/20"
                    : "bg-amber-500 text-zinc-950 hover:bg-amber-400 shadow-amber-500/20"
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                    <span>Processing Payment...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-zinc-950" />
                    <span>Order Confirmed!</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Confirm & Place Cafe Order</span>
                  </>
                )}
              </m.button>
            </form>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};
