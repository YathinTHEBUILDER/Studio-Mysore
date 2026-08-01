"use client";

import * as React from "react";
import { Button, type ButtonProps } from "./Button";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export interface WhatsAppButtonProps extends Omit<ButtonProps, "variant"> {
  phoneNumber?: string;
  message?: string;
  label?: string;
}

export const WhatsAppButton = React.forwardRef<HTMLButtonElement, WhatsAppButtonProps>(
  (
    {
      phoneNumber = siteConfig.whatsapp.number,
      message = siteConfig.whatsapp.defaultMessage,
      label = "Chat on WhatsApp",
      size = "md",
      fullWidth = false,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleWhatsAppRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      }
      const formattedPhone = phoneNumber.replace(/[^0-9]/g, "");
      const encodedMsg = encodeURIComponent(message);
      const waUrl = `https://wa.me/${formattedPhone}?text=${encodedMsg}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    };

    return (
      <Button
        ref={ref}
        variant="whatsapp"
        size={size}
        fullWidth={fullWidth}
        leftIcon={<MessageCircle className="h-4 w-4 shrink-0 fill-neutral-950 text-neutral-950" />}
        onClick={handleWhatsAppRedirect}
        className={cn("hover:shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-all", className)}
        {...props}
      >
        {label}
      </Button>
    );
  }
);

WhatsAppButton.displayName = "WhatsAppButton";
