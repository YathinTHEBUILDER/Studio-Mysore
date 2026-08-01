"use client";

import * as React from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultExpandedIds?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultExpandedIds = [],
  className,
}) => {
  const [expandedIds, setExpandedIds] = React.useState<string[]>(defaultExpandedIds);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className={cn("w-full flex flex-col gap-3", className)}>
      {items.map((item) => {
        const isExpanded = expandedIds.includes(item.id);
        const titleId = `accordion-title-${item.id}`;
        const contentId = `accordion-content-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-[12px] bg-[#111111] border border-[#27272A] transition-colors overflow-hidden text-left",
              isExpanded && "border-neutral-700 bg-[#141414]"
            )}
          >
            <button
              type="button"
              id={titleId}
              aria-expanded={isExpanded}
              aria-controls={contentId}
              disabled={item.disabled}
              onClick={() => toggleItem(item.id)}
              className={cn(
                "w-full flex items-center justify-between p-5 text-left text-sm font-medium text-neutral-100 transition-colors cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-inset",
                "hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              <span className="pr-4">{item.title}</span>
              <m.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                }
                className="shrink-0 text-neutral-400"
              >
                <ChevronDown className="w-4 h-4" />
              </m.div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <m.div
                  id={contentId}
                  role="region"
                  aria-labelledby={titleId}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { height: "auto", opacity: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 text-xs text-neutral-400 leading-relaxed border-t border-[#27272A]/40 mt-1">
                    {item.content}
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = "Accordion";
