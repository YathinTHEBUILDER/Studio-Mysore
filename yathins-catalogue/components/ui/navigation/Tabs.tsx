"use client";

import * as React from "react";
import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  className?: string;
  layoutId?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeId,
  defaultActiveId,
  onChange,
  className,
  layoutId = "activeTabIndicator",
}) => {
  const isControlled = activeId !== undefined;
  const [uncontrolledId, setUncontrolledId] = React.useState<string>(
    defaultActiveId ?? (tabs[0]?.id || "")
  );
  const selectedId = isControlled ? activeId : uncontrolledId;
  const shouldReduceMotion = useReducedMotion();
  const tabRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());

  const handleSelect = (id: string) => {
    if (!isControlled) {
      setUncontrolledId(id);
    }
    if (onChange) onChange(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const enabledTabs = tabs.filter((t) => !t.disabled);
    const currentIndex = enabledTabs.findIndex((t) => t.id === tabs[index].id);

    let targetTab: TabItem | undefined;

    if (e.key === "ArrowRight") {
      targetTab = enabledTabs[(currentIndex + 1) % enabledTabs.length];
    } else if (e.key === "ArrowLeft") {
      targetTab = enabledTabs[(currentIndex - 1 + enabledTabs.length) % enabledTabs.length];
    } else if (e.key === "Home") {
      targetTab = enabledTabs[0];
    } else if (e.key === "End") {
      targetTab = enabledTabs[enabledTabs.length - 1];
    }

    if (targetTab) {
      e.preventDefault();
      handleSelect(targetTab.id);
      const btn = tabRefs.current.get(targetTab.id);
      if (btn) btn.focus();
    }
  };

  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center gap-1 p-1 bg-[#111111] border border-[#27272A] rounded-[12px] max-w-full overflow-x-auto",
        className
      )}
    >
      {tabs.map((tab, idx) => {
        const isActive = selectedId === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            disabled={tab.disabled}
            ref={(el) => {
              if (el) tabRefs.current.set(tab.id, el);
              else tabRefs.current.delete(tab.id);
            }}
            onClick={() => handleSelect(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={cn(
              "relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-[8px] transition-colors outline-none select-none cursor-pointer whitespace-nowrap",
              "focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-1 focus-visible:ring-offset-neutral-950",
              isActive ? "text-neutral-100 font-semibold" : "text-neutral-400 hover:text-neutral-200",
              tab.disabled && "opacity-40 cursor-not-allowed pointer-events-none"
            )}
          >
            {isActive && (
              <m.div
                layoutId={shouldReduceMotion ? undefined : layoutId}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="absolute inset-0 bg-[#18181B] border border-neutral-700/60 rounded-[8px] shadow-sm -z-0"
              />
            )}
            <span className="relative z-10">{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  "relative z-10 px-1.5 py-0.5 text-[10px] font-mono rounded-full",
                  isActive ? "bg-neutral-100 text-neutral-950" : "bg-neutral-800 text-neutral-400"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

Tabs.displayName = "Tabs";
