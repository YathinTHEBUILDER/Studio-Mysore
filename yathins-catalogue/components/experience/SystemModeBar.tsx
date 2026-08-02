"use client";

import * as React from "react";
import { m } from "framer-motion";
import { Globe, ShieldCheck, Sparkles } from "lucide-react";

interface SystemModeBarProps {
  viewMode: "customer" | "owner";
  onToggleViewMode: (mode: "customer" | "owner") => void;
  industryName: string;
  badgeText?: string;
  activeAccentColor?: string;
}

export const SystemModeBar: React.FC<SystemModeBarProps> = ({
  viewMode,
  onToggleViewMode,
  industryName,
  badgeText = "Complete Business System",
}) => {
  return (
    <div className="sticky top-[80px] z-30 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-4 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        {/* Left: System Title */}
        <div className="flex items-center gap-4 text-zinc-400 font-mono">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-white uppercase tracking-wider">{industryName} SYSTEM</span>
          <span className="hidden md:inline-block text-zinc-600">•</span>
          <span className="hidden md:inline-block text-zinc-500">{badgeText}</span>
        </div>

        {/* Right: Dual View Mode Switcher */}
        <div className="flex items-center gap-2 bg-zinc-900/90 p-2 rounded-full border border-zinc-800 shadow-inner">
          <button
            onClick={() => onToggleViewMode("customer")}
            className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
              viewMode === "customer"
                ? "bg-white text-zinc-950 shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Customer Website</span>
          </button>

          <button
            onClick={() => onToggleViewMode("owner")}
            className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
              viewMode === "owner"
                ? "bg-amber-400 text-zinc-950 shadow-md font-bold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Owner Dashboard System</span>
          </button>
        </div>
      </div>
    </div>
  );
};
