"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { CafeCartItem } from "../types";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

interface CafeCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CafeCartItem[];
  subtotal: number;
  tax: number;
  total: number;
  onUpdateQuantity: (index: number, qty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
}

export const CafeCartDrawer: React.FC<CafeCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  subtotal,
  tax,
  total,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-zinc-950/80 backdrop-blur-md">
        <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-screen max-w-md bg-zinc-900 border-l border-zinc-800 p-6 flex flex-col justify-between text-white shadow-2xl"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-5 h-5 text-amber-400" />
                  <h2 className="font-display text-xl font-semibold">Your Order</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Cart List */}
              <div className="divide-y divide-zinc-800 max-h-[60vh] overflow-y-auto no-scrollbar py-4 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto" />
                    <p className="text-sm text-zinc-400">Your cart is currently empty.</p>
                    <span className="text-xs font-mono text-amber-400 block">Select drinks or bites from the menu to start!</span>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <div key={idx} className="pt-4 flex justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <h4 className="font-medium text-sm text-white">{item.product.name}</h4>
                        {item.selectedMilk && (
                          <span className="text-[11px] font-mono text-zinc-400 block">Milk: {item.selectedMilk}</span>
                        )}
                        {item.specialInstructions && (
                          <span className="text-[11px] font-mono text-amber-400/80 block italic">Note: {item.specialInstructions}</span>
                        )}
                        <span className="text-xs font-mono font-bold text-amber-400 block pt-1">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-2 p-1 rounded-lg bg-zinc-950 border border-zinc-800">
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                            className="p-1 hover:text-white text-zinc-400"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold px-1">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            className="p-1 hover:text-white text-zinc-400"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Footer & Checkout Trigger */}
            {cart.length > 0 && (
              <div className="border-t border-zinc-800 pt-4 space-y-4">
                <div className="space-y-1.5 text-xs font-mono text-zinc-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                    <span>Total Amount</span>
                    <span className="text-amber-400">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={onProceedToCheckout}
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>Proceed to Express Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </m.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
