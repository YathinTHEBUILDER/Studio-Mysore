"use client";

import * as React from "react";
import { Button, type ButtonProps } from "./Button";
import { cn } from "@/lib/utils";

export interface IconButtonProps extends Omit<ButtonProps, "leftIcon" | "rightIcon"> {
  "aria-label": string;
  icon: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, size = "md", variant = "ghost", "aria-label": ariaLabel, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-9 w-9 min-w-[36px] min-h-[36px] p-0",
      md: "h-11 w-11 min-w-[44px] min-h-[44px] p-0",
      lg: "h-13 w-13 min-w-[48px] min-h-[48px] p-0",
    };

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        aria-label={ariaLabel}
        className={cn(sizeClasses[size || "md"], className)}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";
