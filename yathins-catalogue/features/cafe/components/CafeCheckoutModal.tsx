"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { CafeCartItem } from "../types";
import { X, CreditCard, Clock, CheckCircle } from "lucide-react";

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    onComplete(name, phone, orderType);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl text-white space-y-6"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <h3 className="font-display text-xl font-semibold">Express Checkout</h3>
              <span className="text-xs font-mono text-amber-400">Artisan Cafe Counter Dispatch</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Order Type Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Fulfillment Method</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setOrderType("pickup")}
                  className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition-all ${
                    orderType === "pickup"
                      ? "bg-amber-500/20 border-amber-500 text-amber-300"
                      : "bg-zinc-950 border-zinc-800 text-zinc-400"
                  }`}
                >
                  <Clock className="w-4 h-4" />
                  <span>Express Pickup</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType("dine_in")}
                  className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1 border transition-all ${
                    orderType === "dine_in"
                      ? "bg-amber-500/20 border-amber-500 text-amber-300"
                      : "bg-zinc-950 border-zinc-800 text-zinc-400"
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Table Dine-In</span>
                </button>
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
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500"
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
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Total summary */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-sm">
              <span className="text-zinc-400 font-mono">Total Due:</span>
              <span className="font-mono text-lg font-bold text-amber-400">${total.toFixed(2)}</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Confirm & Place Cafe Order</span>
            </button>
          </form>
        </m.div>
      </div>
    </AnimatePresence>
  );
};
