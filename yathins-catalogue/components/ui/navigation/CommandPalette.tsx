"use client";

import * as React from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { Search, Command, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CommandItem {
  id: string;
  label: string;
  category?: string;
  shortcut?: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  items?: CommandItem[];
  placeholder?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  items = [],
  placeholder = "Type a command or search...",
}) => {
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // Command palette architecture ready
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? Math.max(0, filteredItems.length - 1) : prev - 1
      );
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      if (filteredItems[selectedIndex].onSelect) {
        filteredItems[selectedIndex].onSelect!();
      }
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <m.div
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl bg-[#111111] border border-[#27272A] rounded-[16px] shadow-2xl overflow-hidden text-neutral-100"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 border-b border-[#27272A] gap-3">
              <Search className="w-5 h-5 text-neutral-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="w-full h-14 bg-transparent text-sm text-neutral-100 placeholder:text-neutral-500 outline-none"
              />
              <kbd className="px-2 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 rounded select-none">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-xs text-neutral-500">
                  No command results found.
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (item.onSelect) item.onSelect();
                        onClose();
                      }}
                      className={cn(
                        "flex items-center justify-between px-3 py-2.5 rounded-[10px] text-xs transition-colors cursor-pointer select-none",
                        isSelected
                          ? "bg-neutral-800 text-white font-medium"
                          : "text-neutral-300 hover:bg-neutral-900"
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        {item.icon || <Command className="w-4 h-4 text-neutral-400" />}
                        <span>{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.shortcut && (
                          <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-neutral-400 bg-neutral-900 rounded">
                            {item.shortcut}
                          </kbd>
                        )}
                        {isSelected && <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};

CommandPalette.displayName = "CommandPalette";
