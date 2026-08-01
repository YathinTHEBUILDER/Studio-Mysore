"use client";

import * as React from "react";

export type IndustryType = "cafe" | "restaurant" | "dental" | "clinic" | "gym";

export type WorkflowStep =
  | "menu"
  | "coffee"
  | "latte"
  | "cart"
  | "checkout"
  | "confirmed";

export interface DemoItem {
  id: string;
  category: string;
  name: string;
  desc: string;
  price: number;
  priceFormatted: string;
  tag?: string;
  color: string;
  badge?: string;
}

export interface DemoCategory {
  id: string;
  name: string;
  icon?: string;
}

export interface CartItem {
  item: DemoItem;
  quantity: number;
  selectedMilk?: string;
  selectedSize?: string;
  customPrice?: number;
}

export interface CartState {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  tax: number;
  total: number;
}

export interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  statusBarTime?: string;
  showDynamicIsland?: boolean;
  aspectRatio?: "phone" | "tablet";
}

export interface WorkflowStepConfig {
  id: WorkflowStep;
  label: string;
  description: string;
}

export interface IndustryDemoConfig {
  id: IndustryType;
  name: string;
  tagline: string;
  badgeText: string;
  primaryColor: string;
  accentColor: string;
  categories: string[];
  workflowSteps: WorkflowStepConfig[];
}
