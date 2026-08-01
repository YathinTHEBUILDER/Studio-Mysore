---
title: UI System
version: 1.0
status: Approved
owner: Studio Mysore
project: Yathin's Catalogue
last_updated: 2026-08-01
---

# UI System

## Purpose

This document defines every reusable user interface component used throughout Yathin's Catalogue.

Every component should be modular, reusable, accessible and consistent with the Studio Mysore Design System.

Components are designed once and reused everywhere.

---

# UI Principles

Every component must:

* Solve one problem.
* Have one clear responsibility.
* Be responsive.
* Be accessible.
* Support dark mode.
* Follow the Motion System.
* Follow the Visual Design System.

No component should exist without a purpose.

---

# Component Categories

## Layout

* Navigation
* Footer
* Section Container
* Content Container
* Grid System
* Sticky Section
* Split Layout
* CTA Section

---

## Navigation

### Purpose

Help visitors move through the experience without distraction.

### Behaviour

* Transparent on hero.
* Solid background after scrolling.
* Smooth transition.
* Mobile navigation drawer.
* Active page indicator.

### Components

* Logo
* Navigation Links
* WhatsApp CTA
* Mobile Menu

---

## Buttons

### Variants

* Primary
* Secondary
* Ghost
* WhatsApp
* Icon Button

---

### States

* Default
* Hover
* Focus
* Active
* Disabled
* Loading

---

### Rules

Buttons should describe the next action.

Examples:

* Chat on WhatsApp
* Try the Demo
* Explore Café Experience

Avoid generic text like:

* Click Here
* Submit
* Learn More

---

## Cards

### Experience Card

Used on the homepage.

Displays:

* Industry
* Image
* Short description

Interaction:

Hover or touch reveals additional information.

---

### Feature Card

Displays one business benefit.

* One headline.
* One sentence.
* One icon.

---

### Process Card

Used in "How We Work".

Simple and sequential.

---

## Hero Components

### Hero Headline

Maximum two lines.

Clear.

Confident.

---

### Supporting Text

One or two short sentences.

Avoid long paragraphs.

---

### Hero Device

* Phone
* Tablet
* Laptop

Supports subtle motion.

---

### Hero CTA

Primary action only: Chat on WhatsApp.

---

# Story Components

## Problem Block

Explains one business problem.

* Short headline
* Short description
* Supporting visual

---

## Solution Block

Demonstrates the solution.

Connected to an animation.

---

## Benefit Block

Explains the business outcome.

Focus on value—not features.

---

# Interactive Components

## QR Menu

Interactive restaurant and café demonstration.

---

## Booking Calendar

Clinic appointment flow.

---

## Membership Card

Gym onboarding.

---

## Shopping Cart

Ordering experience.

---

## Dashboard Preview

Owner-facing interface.

Shows how the business benefits.

---

## WhatsApp Preview

Visual confirmation before opening WhatsApp.

---

# Form Components

* Contact Form (Future use; current priority is WhatsApp).
* Keep forms minimal.

---

# Feedback Components

* Toast Notification
* Confirmation Dialog
* Loading Skeleton
* Success State
* Error State
* Empty State

---

# FAQ Components

## Accordion

* Simple animation.
* Accessible.
* One question open at a time.

---

# Footer

Contains:

* Studio Mysore branding
* Navigation
* Contact details
* Copyright

Simple and free of clutter.

---

# Section Templates

Every page is assembled using reusable section templates:

* Hero
* Problem
* Story
* Demo
* Benefits
* Process
* FAQ
* CTA
* Footer

---

# Component Behaviour

Every component should define:

* Purpose
* Variants
* States
* Accessibility
* Responsive Behaviour
* Animation
* Performance Notes

This information should accompany every future component specification.

---

# Accessibility

All components must support:

* Keyboard navigation.
* Visible focus indicators.
* Screen readers (ARIA attributes).
* Reduced motion preferences.
* High contrast ratios.
* Touch target sizing (minimum 44x44px).

---

# Performance

Components should:

* Render efficiently.
* Avoid unnecessary re-renders.
* Use lazy loading where appropriate.
* Support code splitting.

---

# Naming Convention

Component names should describe their responsibility:

* `HeroSection`
* `ExperienceCard`
* `WhatsAppButton`
* `BookingCalendar`
* `DashboardPreview`

Avoid generic names like `Box`, `Card1`, `Wrapper`.

---

# Reusability

A component should never be created for a single page if it can be shared.

Before building a new component, ask:

Can an existing component be adapted instead?

---

# Component Approval Checklist

Before adding a new component:

* Does it solve a real problem?
* Can it be reused?
* Does it follow the Design System?
* Does it follow the Motion System?
* Is it accessible?
* Is it responsive?
* Does it improve the user experience?

If not, redesign it.

---

# Decisions Made

* Component-first architecture.
* Shared section templates.
* WhatsApp-first CTA.
* Mobile-first interactions.
* Reusable layouts.
* Accessibility built into every component.

---

# Open Questions

* Final logo component.
* Theme switcher (currently excluded).
* Command menu (future).
* Component documentation tooling.

---

# Next Document

07-homepage-spec.md
