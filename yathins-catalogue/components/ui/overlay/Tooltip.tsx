"use client";

import * as React from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement<Record<string, unknown>>;
  position?: "top" | "bottom" | "left" | "right";
  delayMs?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delayMs = 200,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const tooltipId = React.useId();

  const show = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);
  };

  const hide = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {React.cloneElement(children as React.ReactElement<{ "aria-describedby"?: string }>, {
        "aria-describedby": isVisible ? tooltipId : undefined,
      })}

      <AnimatePresence>
        {isVisible && (
          <m.div
            id={tooltipId}
            role="tooltip"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.12 }}
            className={cn(
              "absolute z-50 px-2.5 py-1 text-xs font-medium text-neutral-100 bg-[#18181B] border border-[#27272A] rounded-md shadow-lg whitespace-nowrap pointer-events-none",
              positions[position],
              className
            )}
          >
            {content}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Tooltip.displayName = "Tooltip";
