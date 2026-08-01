"use client";

import * as React from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  align = "left",
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const alignments = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  };

  return (
    <div ref={popoverRef} className="relative inline-block text-left">
      <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: -4 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.95, y: -4 }
            }
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute z-40 mt-2 w-64 p-4 rounded-[12px] bg-[#18181B] border border-[#27272A] shadow-2xl text-neutral-100 backdrop-blur-md",
              alignments[align],
              className
            )}
          >
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Popover.displayName = "Popover";
