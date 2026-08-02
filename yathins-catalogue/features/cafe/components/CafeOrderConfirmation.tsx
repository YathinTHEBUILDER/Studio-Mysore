"use client";

import * as React from "react";
import { m } from "framer-motion";
import { CafeOrderDetails } from "../types";
import { CheckCircle2, Clock, MapPin, Coffee, ArrowRight } from "lucide-react";

interface CafeOrderConfirmationProps {
  order: CafeOrderDetails;
  onReset: () => void;
}

export const CafeOrderConfirmation: React.FC<CafeOrderConfirmationProps> = ({
  order,
  onReset,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-xl mx-auto my-12 p-8 rounded-3xl bg-zinc-900/90 border border-amber-500/30 text-white shadow-2xl text-center space-y-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block">
          Order Received • {order.orderId}
        </span>
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Barista is Crafting Your Order!
        </h2>
        <p className="text-sm text-zinc-400 max-w-md mx-auto">
          Thank you, <strong className="text-white">{order.customerName}</strong>. We've sent live tracking updates to {order.customerPhone}.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-left p-4 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <span className="text-zinc-500 block text-[10px]">Estimated Time</span>
            <span className="text-white font-bold text-sm">{order.estimatedTime}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <span className="text-zinc-500 block text-[10px]">Pickup Location</span>
            <span className="text-white font-bold text-sm">Artisan Bar Counter</span>
          </div>
        </div>
      </div>

      {/* Order Item Summary */}
      <div className="text-left border-t border-zinc-800 pt-4 space-y-2">
        <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Ordered Items ({order.items.length})</h4>
        <div className="divide-y divide-zinc-800/60">
          {order.items.map((item, idx) => (
            <div key={idx} className="py-2 flex justify-between text-xs">
              <span className="text-zinc-300">
                {item.quantity}x {item.product.name} {item.selectedMilk && `(${item.selectedMilk})`}
              </span>
              <span className="font-mono text-amber-400">₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-mono text-sm font-bold pt-2 text-white border-t border-zinc-800">
          <span>Total Paid</span>
          <span className="text-amber-400">₹{order.total.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-zinc-950 hover:bg-amber-400 font-semibold text-xs transition-all shadow-md"
      >
        <Coffee className="w-4 h-4" />
        <span>Place Another Cafe Order</span>
      </button>
    </m.div>
  );
};
