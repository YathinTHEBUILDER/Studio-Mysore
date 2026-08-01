"use client";

import * as React from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastType = "default" | "success" | "error" | "warning" | "info";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextValue {
  toast: (options: Omit<ToastMessage, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback(
    ({ title, description, type = "default", duration = 4000 }: Omit<ToastMessage, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastMessage = { id, title, description, type, duration };
      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          dismiss(id);
        }, duration);
      }
    },
    [dismiss]
  );

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />;
      case "info":
        return <Info className="w-5 h-5 text-blue-400 shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-neutral-300 shrink-0" />;
    }
  };

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      >
        <AnimatePresence mode="sync">
          {toasts.map((t) => (
            <m.div
              key={t.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "pointer-events-auto flex items-start gap-3 p-4 rounded-[12px] bg-[#18181B] border border-[#27272A] shadow-xl text-neutral-100 backdrop-blur-md"
              )}
            >
              {getIcon(t.type || "default")}
              <div className="flex-1 flex flex-col gap-0.5 text-left">
                <p className="text-sm font-medium text-neutral-100 leading-tight">
                  {t.title}
                </p>
                {t.description && (
                  <p className="text-xs text-neutral-400 leading-normal">
                    {t.description}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => dismiss(t.id)}
                className="text-neutral-400 hover:text-neutral-200 transition-colors p-1 rounded-md"
                aria-label="Dismiss toast"
              >
                <X className="w-4 h-4" />
              </button>
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
