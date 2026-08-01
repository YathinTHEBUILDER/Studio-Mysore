"use client";

import * as React from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { DeviceFrameProps } from "./types";

export function LiveDeviceFrame({
  children,
  className,
  title = "Studio Mysore Live Demo",
  statusBarTime,
  showDynamicIsland = true,
  aspectRatio = "phone",
}: DeviceFrameProps) {
  // Real-time time formatting if none supplied
  const [timeStr, setTimeStr] = React.useState(statusBarTime || "09:41");

  React.useEffect(() => {
    if (statusBarTime) {
      setTimeStr(statusBarTime);
      return;
    }

    const updateClock = () => {
      const d = new Date();
      const hrs = String(d.getHours()).padStart(2, "0");
      const mins = String(d.getMinutes()).padStart(2, "0");
      setTimeStr(`${hrs}:${mins}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, [statusBarTime]);

  return (
    <div
      role="region"
      aria-label={title}
      className={cn(
        "relative mx-auto w-full select-none font-sans text-stone-100",
        aspectRatio === "phone"
          ? "max-w-[340px] sm:max-w-[375px]"
          : "max-w-[640px]",
        className
      )}
    >
      {/* Outer Glow & Hardware Chassis */}
      <div className="relative rounded-[48px] bg-gradient-to-b from-stone-800/80 via-stone-900 to-black p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(255,255,255,0.03)] ring-1 ring-white/10 backdrop-blur-md">
        {/* Physical hardware side buttons */}
        <div
          className="absolute -left-[12px] top-[100px] h-[34px] w-[3px] rounded-l-md bg-stone-700/80 shadow-sm"
          aria-hidden="true"
        />
        <div
          className="absolute -left-[12px] top-[148px] h-[52px] w-[3px] rounded-l-md bg-stone-700/80 shadow-sm"
          aria-hidden="true"
        />
        <div
          className="absolute -left-[12px] top-[210px] h-[52px] w-[3px] rounded-l-md bg-stone-700/80 shadow-sm"
          aria-hidden="true"
        />
        <div
          className="absolute -right-[12px] top-[130px] h-[72px] w-[3px] rounded-r-md bg-stone-700/80 shadow-sm"
          aria-hidden="true"
        />

        {/* Screen Bezel & Screen Glass */}
        <div className="relative flex h-[680px] w-full flex-col overflow-hidden rounded-[40px] bg-stone-950 ring-1 ring-black shadow-inner">
          {/* Top Status Bar */}
          <header
            className="absolute top-0 left-0 right-0 z-30 flex h-11 items-center justify-between px-6 pt-2 text-[11px] font-semibold tracking-tight text-white/80"
            aria-label="Device status bar"
          >
            {/* Clock */}
            <span className="w-12 font-medium tracking-normal">{timeStr}</span>

            {/* Dynamic Island Notch */}
            {showDynamicIsland && (
              <div
                className="absolute left-1/2 top-2.5 -translate-x-1/2 flex h-5 w-24 items-center justify-between rounded-full bg-black px-2.5 ring-1 ring-white/10 shadow-sm"
                aria-hidden="true"
              >
                <div className="h-2 w-2 rounded-full bg-stone-900 ring-1 ring-stone-800" />
                <div className="flex items-center space-x-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                  <div className="h-2.5 w-2.5 rounded-full bg-stone-950 ring-1 ring-stone-800" />
                </div>
              </div>
            )}

            {/* Status Icons: Cellular, Wifi, Battery */}
            <div
              className="flex items-center space-x-1.5 text-white/70"
              aria-hidden="true"
            >
              {/* Cellular Signal SVG */}
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <rect x="1" y="11" width="2" height="4" rx="0.5" />
                <rect x="5" y="8" width="2" height="7" rx="0.5" />
                <rect x="9" y="5" width="2" height="10" rx="0.5" />
                <rect x="13" y="1" width="2" height="14" rx="0.5" />
              </svg>
              {/* Wifi SVG */}
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M15.3 4.7C13.2 2.6 10.3 1.4 7.2 1.4S1.2 2.6-.9 4.7l1.4 1.4c1.7-1.7 4.1-2.7 6.7-2.7s5 1 6.7 2.7l1.4-1.4zm-2.8 2.8C11.3 6.3 9.3 5.4 7.2 5.4S3.1 6.3 1.9 7.5l1.4 1.4c.9-.9 2.3-1.5 3.9-1.5s3 0.6 3.9 1.5l1.4-1.4zm-2.8 2.8c-.7-.7-1.6-1.1-2.5-1.1s-1.8.4-2.5 1.1l2.5 2.6 2.5-2.6z" />
              </svg>
              {/* Battery Indicator */}
              <div className="relative flex h-3 w-5 items-center rounded-[3px] border border-white/60 p-0.5">
                <div className="h-full w-3.5 rounded-[1px] bg-white/90" />
                <div className="absolute -right-1 top-1/2 h-1.5 w-0.5 -translate-y-1/2 rounded-r-sm bg-white/60" />
              </div>
            </div>
          </header>

          {/* Device Screen Application Container */}
          <main className="relative flex-1 overflow-hidden pt-11">
            {children}
          </main>

          {/* Bottom Gesture Bar */}
          <footer
            className="absolute bottom-1 left-0 right-0 z-30 flex h-4 items-center justify-center"
            aria-hidden="true"
          >
            <div className="h-1 w-28 rounded-full bg-white/30" />
          </footer>
        </div>
      </div>
    </div>
  );
}
