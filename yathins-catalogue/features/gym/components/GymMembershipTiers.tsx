"use client";

import * as React from "react";
import { GymMembershipTier } from "../types";
import { Check, ArrowRight } from "lucide-react";

interface GymMembershipTiersProps {
  tiers: GymMembershipTier[];
  selectedTier: GymMembershipTier;
  onSelectTier: (tier: GymMembershipTier) => void;
  onJoinTier: (tier: GymMembershipTier) => void;
}

export const GymMembershipTiers: React.FC<GymMembershipTiersProps> = ({
  tiers,
  selectedTier,
  onSelectTier,
  onJoinTier,
}) => {
  return (
    <section className="py-12 bg-zinc-950 space-y-8">
      <div className="text-center space-y-3 max-w-xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block">
          Membership Passes
        </span>
        <h2 className="text-3xl font-display font-semibold text-white">
          Flexible memberships with zero lock-in.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => {
          const isSelected = selectedTier.id === tier.id;
          return (
            <div
              key={tier.id}
              onClick={() => onSelectTier(tier)}
              className={`p-6 rounded-3xl bg-zinc-900/60 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "border-indigo-500 bg-indigo-950/20 shadow-xl shadow-indigo-950/30"
                  : "border-zinc-800/80 hover:border-indigo-500/40"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-white">{tier.name}</h3>
                  {tier.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-bold text-white">${tier.priceMonthly}</span>
                  <span className="text-xs font-mono text-zinc-400">/ month</span>
                </div>

                <ul className="space-y-2.5 border-t border-zinc-800/60 pt-4">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onJoinTier(tier);
                }}
                className="w-full mt-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <span>Select Membership</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
