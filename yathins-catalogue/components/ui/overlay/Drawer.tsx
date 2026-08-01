"use client";

import * as React from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { springs } from "@/lib/tokens/transitions";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  position?: "right" | "bottom";
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  description,
  position = "right",
  children,
  footer,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const titleId = React.useId();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const variants = {
    right: {
      initial: shouldReduceMotion ? { opacity: 0 } : { x: "100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: shouldReduceMotion ? { opacity: 0 } : { x: "100%", opacity: 0 },
    },
    bottom: {
      initial: shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: shouldReduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0 },
    },
  };

  const containerPosition = {
    right: "top-0 right-0 h-full w-full max-w-md border-l border-[#27272A]",
    bottom: "bottom-0 inset-x-0 max-h-[85vh] w-full rounded-t-[20px] border-t border-[#27272A]",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Drawer Container */}
          <m.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            initial={variants[position].initial}
            animate={variants[position].animate}
            exit={variants[position].exit}
            transition={springs.gentle}
            className={cn(
              "fixed z-10 bg-[#111111] shadow-2xl flex flex-col text-neutral-100 overflow-hidden",
              containerPosition[position],
              className
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#27272A]/60">
              <div className="flex flex-col gap-1 text-left">
                {title && (
                  <h3 id={titleId} className="text-lg font-semibold text-neutral-100">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="text-xs text-neutral-400">{description}</p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1 text-left">
              {children}
            </div>

            {/* Footer */}
            {footer && (
              <div className="flex items-center justify-end gap-3 p-6 border-t border-[#27272A]/60 bg-[#18181B]/40">
                {footer}
              </div>
            )}
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};

Drawer.displayName = "Drawer";
