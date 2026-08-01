/**
 * cn — className utility
 *
 * Merges Tailwind classes with clsx + tailwind-merge.
 * This prevents class conflicts (e.g., "p-4 p-8" → "p-8").
 *
 * Usage:
 *   cn("base-class", condition && "conditional-class", props.className)
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
