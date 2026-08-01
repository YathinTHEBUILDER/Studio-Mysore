"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { GymMembershipTier, GymClassSession } from "../types";
import { X, CheckCircle2, Zap } from "lucide-react";

interface GymTrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier?: GymMembershipTier;
  selectedClass?: GymClassSession;
  onComplete: (name: string, phone: string, email: string) => void;
}

export const GymTrialBookingModal: React.FC<GymTrialBookingModalProps> = ({
  isOpen,
  onClose,
  tier,
  selectedClass,
  onComplete,
}) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;
    onComplete(name, phone, email);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md rounded-3xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl text-white space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <h3 className="font-display text-xl font-semibold">Claim 1-Day Trial Pass</h3>
              <span className="text-xs font-mono text-indigo-400">Pulse Fitness Studio</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs font-mono text-zinc-300">
            {tier && (
              <div className="flex justify-between">
                <span className="text-zinc-500">Selected Tier:</span>
                <span className="text-white font-bold">{tier.name} (${tier.priceMonthly}/mo)</span>
              </div>
            )}
            {selectedClass && (
              <div className="flex justify-between">
                <span className="text-zinc-500">Class Reservation:</span>
                <span className="text-indigo-400 font-bold">{selectedClass.title}</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Reed"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Mobile Phone (For Turnstile QR Code)</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
            >
              <Zap className="w-4 h-4" />
              <span>Generate Digital QR Entry Pass</span>
            </button>
          </form>
        </m.div>
      </div>
    </AnimatePresence>
  );
};
