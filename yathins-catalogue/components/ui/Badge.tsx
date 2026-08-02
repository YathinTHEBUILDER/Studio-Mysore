import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — Studio Mysore Editorial Tag & Badge Primitive
 */

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-mono tracking-[0.2em] uppercase font-medium transition-all duration-300 rounded-sm select-none",
  {
    variants: {
      variant: {
        default: "bg-zinc-900/90 text-zinc-300 border border-zinc-800 shadow-sm",
        film: "bg-zinc-950/95 text-zinc-400 border border-white/10 text-[9px]",
        cafe: "bg-amber-950/80 text-amber-300 border border-amber-500/30",
        restaurant: "bg-rose-950/80 text-rose-300 border border-rose-500/30",
        dental: "bg-sky-950/80 text-sky-300 border border-sky-500/30",
        medical: "bg-teal-950/80 text-teal-300 border border-teal-500/30",
        gym: "bg-zinc-950 text-lime-400 border border-lime-500/40 font-bold",
        success: "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30",
        warning: "bg-amber-950/80 text-amber-300 border border-amber-500/30",
      },
      size: {
        sm: "px-2 py-0.5 text-[9px] leading-none",
        md: "px-3 py-1 text-[10px] leading-none",
        lg: "px-4 py-1.5 text-xs leading-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  as?: React.ElementType;
  dot?: boolean;
  dotClassName?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, dot, dotClassName, children, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        {dot && (
          <span className={cn("w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0", dotClassName)} />
        )}
        {children}
      </Component>
    );
  }
);

Badge.displayName = "Badge";
