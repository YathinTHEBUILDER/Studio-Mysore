"use client";

/**
 * CafePhoneMockup — Hero Phone Mockup wrapper integrating LiveCafeDemo & LiveDeviceFrame
 *
 * Uses the reusable feature architecture from `@/features/demo`.
 */

import * as React from "react";
import { LiveDeviceFrame, LiveCafeDemo, CAFE_MENU_ITEMS, CAFE_CATEGORIES } from "@/features/demo";

export const CATEGORIES = CAFE_CATEGORIES;
export type Category = (typeof CAFE_CATEGORIES)[number];

export interface MenuItem {
  id: string;
  category: "Coffees" | "Teas" | "Bites";
  name: string;
  desc: string;
  price: number;
  priceFormatted: string;
  tag?: string;
  color: string;
}

export const MENU_ITEMS: MenuItem[] = CAFE_MENU_ITEMS as MenuItem[];

export function CafePhoneMockup({ className }: { className?: string }) {
  return (
    <LiveDeviceFrame className={className} title="Hero Café Interactive Demo">
      <LiveCafeDemo />
    </LiveDeviceFrame>
  );
}
