"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FilmFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "21/9" | "4/3" | "3/2" | "4/5" | "square" | "auto";
  frameLabel?: string;
  theme?: "amber" | "rose" | "teal" | "sky" | "lime" | "neutral";
  contrast?: "normal" | "subtle" | "high";
  vignette?: boolean;
  colorGrade?: "warm" | "cool" | "vibrant" | "cinematic" | "none";
  imageClassName?: string;
  containerClassName?: string;
  showFilmTicks?: boolean;
  children?: React.ReactNode;
}

const themeStyles = {
  amber: {
    border: "border-amber-500/30 hover:border-amber-400/60",
    glow: "shadow-[0_25px_60px_-15px_rgba(180,83,9,0.25)]",
    tick: "text-amber-400/70 border-amber-500/30 bg-amber-950/80",
    tint: "bg-amber-900/10 mix-blend-soft-light",
  },
  rose: {
    border: "border-rose-500/30 hover:border-rose-400/60",
    glow: "shadow-[0_25px_60px_-15px_rgba(225,29,72,0.25)]",
    tick: "text-rose-400/70 border-rose-500/30 bg-rose-950/80",
    tint: "bg-rose-900/10 mix-blend-soft-light",
  },
  teal: {
    border: "border-teal-500/30 hover:border-teal-400/60",
    glow: "shadow-[0_25px_60px_-15px_rgba(20,184,166,0.25)]",
    tick: "text-teal-400/70 border-teal-500/30 bg-teal-950/80",
    tint: "bg-teal-900/10 mix-blend-soft-light",
  },
  sky: {
    border: "border-sky-500/30 hover:border-sky-400/60",
    glow: "shadow-[0_25px_60px_-15px_rgba(56,189,248,0.25)]",
    tick: "text-sky-400/70 border-sky-500/30 bg-sky-950/80",
    tint: "bg-sky-900/10 mix-blend-soft-light",
  },
  lime: {
    border: "border-lime-500/30 hover:border-lime-400/60",
    glow: "shadow-[0_25px_60px_-15px_rgba(132,204,22,0.25)]",
    tick: "text-lime-400/70 border-lime-500/30 bg-zinc-950/90",
    tint: "bg-lime-900/10 mix-blend-soft-light",
  },
  neutral: {
    border: "border-white/15 hover:border-white/35",
    glow: "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]",
    tick: "text-zinc-400/80 border-white/15 bg-zinc-950/90",
    tint: "bg-white/5 mix-blend-soft-light",
  },
};

const aspectClasses = {
  "16/9": "aspect-[16/9]",
  "21/9": "aspect-[21/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  square: "aspect-square",
  auto: "",
};

const contrastClasses = {
  subtle: "contrast-[1.03] brightness-[0.99]",
  normal: "contrast-[1.07] brightness-[0.97] saturate-[1.05]",
  high: "contrast-[1.12] brightness-[0.95] saturate-[1.08]",
};

export const FilmFrame = React.forwardRef<HTMLDivElement, FilmFrameProps>(
  (
    {
      src,
      alt,
      aspectRatio = "auto",
      frameLabel,
      theme = "neutral",
      contrast = "normal",
      vignette = true,
      colorGrade = "cinematic",
      imageClassName,
      containerClassName,
      showFilmTicks = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const selectedTheme = themeStyles[theme];

    return (
      <div
        ref={ref}
        className={cn(
          "group relative select-none",
          "rounded-sm border p-1 transition-all duration-700 ease-out",
          "bg-zinc-950/90 backdrop-blur-md",
          selectedTheme.border,
          selectedTheme.glow,
          containerClassName,
          className
        )}
        {...props}
      >
        {/* Film Negative Tick Marks / Index Label */}
        {(frameLabel || showFilmTicks) && (
          <div className="flex items-center justify-between px-2.5 py-1 text-[9px] font-mono tracking-[0.25em] uppercase text-zinc-500 border-b border-white/5 mb-1 select-none">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-zinc-400 transition-colors" />
              {frameLabel || "35MM FILM • EXP 24"}
            </span>
            <span className="text-[8px] opacity-60">RAW // 4K</span>
          </div>
        )}

        {/* The Frame Image Container */}
        <div
          className={cn(
            "relative overflow-hidden rounded-none w-full bg-zinc-950",
            aspectClasses[aspectRatio]
          )}
        >
          {/* Main Image with Contrast Filter */}
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105",
              contrastClasses[contrast],
              imageClassName
            )}
          />

          {/* Natural Colour Grade Overlay */}
          {colorGrade !== "none" && (
            <div
              className={cn(
                "absolute inset-0 pointer-events-none transition-opacity duration-500",
                selectedTheme.tint
              )}
            />
          )}

          {/* Soft Radial Vignette Overlay */}
          {vignette && (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(9,9,11,0.75)_100%)] pointer-events-none" />
          )}

          {/* Smooth Vertical Depth Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

          {/* Overlay Children (e.g. floating captions / badges) */}
          {children && <div className="absolute inset-0 z-10 pointer-events-none">{children}</div>}
        </div>
      </div>
    );
  }
);

FilmFrame.displayName = "FilmFrame";
