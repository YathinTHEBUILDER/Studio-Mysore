"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { TastingCourseItem } from "../types";
import { X, Calendar, CheckCircle2, ShieldCheck, Loader2, Check } from "lucide-react";
import { useInteractionRhythm } from "@/hooks/useInteractionRhythm";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { springs } from "@/lib/tokens/transitions";

interface RestaurantCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  partySize: number;
  selectedDate: string;
  seatingArea: string;
  selectedCourses: TastingCourseItem[];
  depositAmount: number;
  onComplete: (name: string, phone: string, email: string, notes?: string) => void;
}

export const RestaurantCheckoutModal: React.FC<RestaurantCheckoutModalProps> = ({
  isOpen,
  onClose,
  partySize,
  selectedDate,
  seatingArea,
  selectedCourses,
  depositAmount,
  onComplete,
}) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const { isLoading, isSuccess, execute } = useInteractionRhythm({ defaultDelayMs: 950, defaultSuccessMs: 500 });
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;
    execute(
      () => {
        onComplete(name, phone, email, notes);
      },
      { delayMs: 950, successMs: 500, resetAfter: false }
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
            className="relative z-10 w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl text-white space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <h3 className="font-display text-xl font-semibold">Confirm Table Reservation</h3>
                <span className="text-xs font-mono text-rose-400">Maison de Mysore Fine Dining</span>
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

            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs font-mono text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Party Size:</span>
                <span className="text-white font-bold">{partySize} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Date & Slot:</span>
                <span className="text-white font-bold">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Atmosphere:</span>
                <span className="text-rose-400 font-bold capitalize">{seatingArea.replace("_", " ")}</span>
              </div>
              {selectedCourses.length > 0 && (
                <div className="flex justify-between border-t border-zinc-800 pt-2">
                  <span className="text-zinc-500">Pre-ordered Courses:</span>
                  <span className="text-white font-bold">{selectedCourses.length} Dishes</span>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Guest Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikrant Rao"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Email Address (For Calendar Invite)</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vikrant@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Dietary Requirements / Special Request</label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Jain food option, birthday celebration..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>UPI / Card Table Deposit</span>
                </div>
                <span className="font-mono text-base font-bold text-rose-400">₹{depositAmount.toLocaleString('en-IN')}</span>
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
                    : "bg-rose-600 text-white hover:bg-rose-500 shadow-rose-600/20"
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Reserving Table...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-zinc-950" />
                    <span>Table Confirmed!</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm & Lock Table Reservation</span>
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
