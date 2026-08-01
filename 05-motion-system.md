---
title: Motion System
version: 1.0
status: Approved
owner: Studio Mysore
project: Yathin's Catalogue
last_updated: 2026-08-01
---

# Motion System

## Purpose

This document defines the motion principles, animation curves, interactive behaviors, and scroll dynamics for **Studio Mysore** and **Yathin's Catalogue**.

Motion is not decorative element in our design system. It is a functional component that communicates hierarchy, provides spatial continuity, guides user attention, and reinforces our premium editorial aesthetic.

Every transition and animation must feel intentional, calm, and performant.

---

# Motion Philosophy

The motion system of Studio Mysore follows five core tenets:

* **Calm**: No frantic, distracting, or excessive movements.
* **Purposeful**: Every animation answers a functional visual request.
* **Synchronized**: Transitions across elements move in natural rhythm.
* **Tactile**: Interactions respond with subtle physical weight and feedback.
* **Performance-First**: Smooth 60/120 FPS delivery without layout thrashing.

---

# Motion Principles

## Intentionality

Never animate purely for decoration.

Motion should clarify spatial relationships, signal state changes, or direct focus to critical content.

---

## Spatial Consistency

Elements must enter and exit from logical locations.

If a modal originates from a trigger button, its exit trajectory should honor that spatial connection.

---

## Continuity & Flow

Transitions connect past and future states without breaking user context.

Page transitions and container morphs preserve layout context so the user never feels lost.

---

## Subtlety

Motion should feel like breathing—natural, subtle, and understated.

If a user explicitly notices an animation delay, it is too slow or too dramatic.

---

# Timing & Easing System

## Easing Curves

We rely on carefully tuned cubic-bezier curves and spring physics models.

### Smooth Out (Default Entrance)

`cubic-bezier(0.16, 1, 0.3, 1)` (Custom Quintic Out)

Used for UI component entrances, card reveals, and dropdowns. Quick start with an ultra-smooth deceleration.

---

### Editorial Smooth In-Out

`cubic-bezier(0.65, 0, 0.35, 1)` (Custom Cubic In-Out)

Used for hero section transitions, full-screen overlays, and page route changes.

---

### Spring Physics Models

For natural interactive feedback (hover, press, toggle), spring physics replace fixed durations.

#### Snappy Spring (Buttons, Toggles, Micro-Interactions)

* Mass: `0.8`
* Stiffness: `250`
* Damping: `25`

#### Gentle Spring (Cards, Modal Drawers, Layout Shifts)

* Mass: `1.0`
* Stiffness: `120`
* Damping: `20`

---

## Duration Scale

Use only approved timing tokens across CSS and Framer Motion transitions.

### Micro (100ms - 150ms)

* Button press feedback
* Icon hover shifts
* Tooltip appearance

---

### Quick (200ms - 300ms)

* Dropdown menus
* Modal backdrop reveals
* Tab indicator sliding

---

### Standard (400ms - 600ms)

* Scroll-triggered section reveals
* Card expansions
* Drawer slide-ins

---

### Extended (800ms - 1200ms)

* Hero initial page load choreography
* Multi-stage scroll storytelling (GSAP)
* Industry showcase transition sequences

---

# Technical Motion Stack

## Framer Motion

Primary library for React component-level animations, interactive states, layout transitions, and component mounting/unmounting.

### Key Responsibilities

* Component enter / exit states (`AnimatePresence`)
* Spring-based hover and press effects (`whileHover`, `whileTap`)
* Layout updates (`layoutId` shared element morphs)
* Staggered sequence list reveals

---

## GSAP & ScrollTrigger

Dedicated animation engine for complex timeline choreography, scroll pinning, and multi-stage interactive demonstrations.

### Key Responsibilities

* Hero scroll-bound pinning and parallax depth
* Interactive workflow and process showcases
* Complex SVG path morphing or drawing
* Horizontal timeline scrolling

---

## Lenis (Smooth Scroll)

Smooth scrolling library providing uniform physics and scroll momentum across devices.

### Key Responsibilities

* Scroll normalization across operating systems and input devices
* Scroll velocity tracking for dynamic skew / parallax effects
* Seamless integration with GSAP ScrollTrigger updates

---

# Interaction Choreography & Micro-Interactions

## Buttons & Interactive Controls

* **Hover**: Subtle scale (`1.02`), border glow transition (`300ms`), opacity increase.
* **Tap / Active**: Scale reduction (`0.98`), immediate spring response.
* **Focus State**: Smooth ring expansion with high-contrast outline.

---

## Cards & Showcase Items

* **Scroll Reveal**: Fade up with `20px` Y-axis offset, `500ms` duration, staggered by `0.08s` for child cards.
* **Hover State**: Elevate `Y: -4px`, subtle surface contrast shift (`#111111` to `#18181B`), border highlight.
* **Interactive Tilt**: Subtle 3D cursor-following tilt (max `5deg`) on spotlight items.

---

## Navigation & Header

* **Scroll Header**: Smooth transition from transparent to blurred glassmorphism (`backdrop-blur-md`, background `#09090B/80`) after scrolling `50px`.
* **Nav Links**: Underline sliding indicator using Framer Motion `layoutId="activeNav"`.
* **Mobile Drawer**: Slide in from right with subtle spring physics (`damping: 25`).

---

# Page & Route Transitions

Route transitions establish continuity between showcase pages and industry experiences.

## Route Transition Specification

* **Mode**: `AnimatePresence` with `mode="wait"`.
* **Exit Phase**: Fade out current page (`opacity: 0`, `Y: -10px`, duration `250ms`, easing `ease-in`).
* **Enter Phase**: Fade in target page (`opacity: 1`, `Y: 10px` to `0px`, duration `400ms`, easing `ease-out-smooth`).
* **Scroll Reset**: Reset Lenis smooth scroll position to top synchronously on route completion.

---

# Industry-Specific Motion Flavors

While foundation motion curves remain unified, each industry experience incorporates subtle movement nuances:

## ☕ Café & Bakery

* Fluid, organic stagger delays (`0.12s`).
* Warm, gentle spring dampening (`damping: 22`).
* Smooth image zoom on hover (`scale: 1.04`).

---

## 🍽 Restaurant & Dining

* Refined, editorial entrance reveals.
* Menu card slide-in with curtain opacity masking.
* Elegant image grid parallax scrolling.

---

## 🦷 Dental & 🏥 Medical Clinic

* Precise, crisp entrance animations.
* Immediate feedback for appointment booking workflows.
* Reassuring, calm transition speeds.

---

## 🏋️ Gym & Fitness

* Dynamic, energetic acceleration curves.
* Snappy interactive state responses (`stiffness: 300`).
* High-impact stat counter animations on scroll reveal.

---

# Accessibility & Reduced Motion

Motion must never compromise user comfort, health, or accessibility.

## Prefers-Reduced-Motion Compliance

* Detect user system setting `prefers-reduced-motion: reduce`.
* Automatically disable spatial movement (`Y-offset`, `parallax`, `scale morphing`).
* Replace movement with simple instant opacity cross-fades or static displays.

---

## Technical Implementation

```tsx
// Example Framer Motion integration
import { useReducedMotion } from "framer-motion";

const shouldReduceMotion = useReducedMotion();

const variants = {
  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
  visible: { opacity: 1, y: 0 }
};
```

---

## Lenis & Scroll Settings

Disallow smooth momentum scrolling when reduced motion is preferred, defaulting back to native browser scrolling.

---

# Performance & Hardware Acceleration

Animation must maintain seamless frame rates without causing layout shifts or CPU bottlenecks.

## Rules for Performant Motion

* **GPU-Accelerated Properties Only**: Animate exclusively `transform` (`translate3d`, `scale`, `rotate`) and `opacity`.
* **Avoid Layout Triggers**: Never animate `width`, `height`, `margin`, `padding`, `top`, or `left`.
* **Will-Change Strategy**: Use `will-change: transform` sparingly on active scrolling elements, removing it post-animation.
* **FPS Target**: Solid 60 FPS on mobile devices; 120 FPS on ProMotion displays.

---

# Motion Checklist

Before approving any motion or animation:

* Does the motion feel calm and intentional?
* Is the duration crisp without delaying user action?
* Are GPU-accelerated properties used exclusively?
* Is the animation fully responsive across mobile and desktop?
* Does it degrade gracefully when `prefers-reduced-motion` is enabled?
* Does it run smoothly at 60+ FPS?

---

# Decisions Made

* Unified Framer Motion + GSAP + Lenis technical motion stack.
* Custom quintic out easing (`cubic-bezier(0.16, 1, 0.3, 1)`) as primary entrance curve.
* Standardized spring physics models for interactive micro-animations.
* Mandatory `prefers-reduced-motion` accessibility support across all components.
* Strict GPU acceleration requirement (`transform` and `opacity` only).

---

# Open Questions

* Dynamic velocity-skew intensity limits on mobile web views.
* Custom canvas / WebGL hero motion integration (future enhancement).

---

# Next Document

[06-ui-system.md](file:///c:/Users/YATHIN/Desktop/Studio%20Mysore/06-ui-system.md)
