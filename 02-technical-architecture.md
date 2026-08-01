---

title: Technical Architecture
version: 1.0
status: Approved
owner: Studio Mysore
project: Yathin's Catalogue
last_updated: 2026-08-01
------------------------

# Technical Architecture

## Purpose

This document defines the technical foundation, engineering standards, project structure, and development conventions for **Yathin's Catalogue**.

All implementation must follow this document unless a newer approved version exists.

---

# Engineering Goals

The system should be:

* Fast
* Scalable
* Maintainable
* Accessible
* Responsive
* Production-ready

The codebase should remain clean enough for a new developer to understand within a few hours.

---

# Technology Stack

## Framework

* Next.js 15 (App Router)

Reason:

* Server Components
* File-based routing
* Excellent performance
* Production ready

---

## Language

TypeScript

Requirements

* Strict Mode Enabled
* No `any` types
* Strong typing across the application

---

## Styling

Tailwind CSS

Requirements

* Utility-first styling
* Design tokens
* Consistent spacing
* Minimal custom CSS

---

## UI Components

shadcn/ui

Guidelines

* Use as a foundation.
* Customize to match Studio Mysore's design language.
* Never ship default component styles.

---

## Animations

### Framer Motion

Use for:

* Component animations
* Page transitions
* Hover interactions
* Small UI motion

---

### GSAP

Use for:

* Scroll storytelling
* Hero animations
* Timeline sequences
* Advanced motion

---

### Lenis

Use for:

* Smooth scrolling
* Scroll synchronization
* Premium scrolling experience

---

## Icons

Lucide React

Requirements

* Consistent icon weight
* Outline style
* Minimal usage

---

## Image Handling

Next.js Image

Requirements

* Lazy loading
* Responsive sizing
* Optimized delivery

---

## Fonts

Display Font

* Clash Display

Body Font

* Inter

---

## Deployment

Platform

Vercel

Requirements

* Production deployment
* Preview deployments
* Automatic builds
* Environment variable support

---

# Project Structure

```text
app/
components/
hooks/
lib/
styles/
public/
docs/
```

---

## Folder Responsibilities

### app/

Routing and pages.

---

### components/

Reusable UI components.

Suggested structure:

```text
components/

ui/
layout/
hero/
experience/
motion/
forms/
shared/
```

---

### hooks/

Reusable custom React hooks.

Examples

* useScrollProgress
* useMediaQuery
* useLenis
* useReducedMotion

---

### lib/

Utilities

Helpers

Constants

Configuration

---

### styles/

Global styles

Tailwind configuration

Animation utilities

---

### public/

Images

Icons

Videos

Fonts

---

### docs/

Project documentation

Specifications

Engineering references

---

# Coding Standards

## General

* Prefer Server Components.
* Use Client Components only when necessary.
* Keep components focused.
* Avoid large files.
* Avoid duplicated logic.

---

## Components

Each component should have one responsibility.

Large components should be broken into smaller reusable parts.

---

## Naming

Use descriptive names.

Good

HeroSection

ExperienceCard

WhatsAppButton

Bad

Component1

CardNew

TempSection

---

## Imports

Group imports consistently.

1. React

2. Next.js

3. Third-party libraries

4. Internal modules

---

## File Naming

Components

PascalCase

Example

HeroSection.tsx

Hooks

camelCase

Example

useScrollProgress.ts

Utilities

camelCase

Example

formatDate.ts

---

# Responsive Strategy

The website must be intentionally designed for:

## Mobile

Priority platform.

Requirements

* Touch-first
* Large tap targets
* Fast loading
* One-handed usability

---

## Tablet

Presentation device.

Requirements

* Optimized layouts
* Split sections where appropriate
* Comfortable touch interactions

---

## Laptop/Desktop

Immersive storytelling.

Requirements

* Rich animations
* Cursor interactions
* Larger editorial layouts

---

# Performance Standards

Target Lighthouse Score

95+

Requirements

* Lazy loading
* Code splitting
* Optimized fonts
* Optimized images
* GPU-friendly transforms
* Minimal layout shift

---

# Accessibility Standards

Target

WCAG AA

Requirements

* Semantic HTML
* Keyboard navigation
* Visible focus states
* High color contrast
* Reduced motion support
* Screen reader compatibility

Accessibility is mandatory.

---

# SEO Standards

Requirements

* Metadata
* Open Graph
* Twitter Cards
* Sitemap
* robots.txt
* Structured Data (Schema.org)

---

# State Management

Prefer local component state.

Introduce global state only when necessary.

Avoid unnecessary complexity.

---

# Data Strategy

Current Version

Static content.

Future Versions

CMS integration.

API integration.

Dynamic content.

---

# Git Workflow

Main Branch

Production-ready code.

Develop Branch

Integration branch.

Feature Branches

One feature per branch.

Examples

feature/navbar

feature/homepage

feature/cafe-experience

---

# Code Quality

Every pull request should satisfy:

* Type-safe
* Responsive
* Accessible
* Performance tested
* Matches Design System
* Matches Brand Principles

---

# Security

* Validate user input.
* Never expose secrets.
* Store environment variables securely.
* Follow Next.js security best practices.

---

# Future Expansion

The architecture should support:

* Additional industries
* CMS integration
* Case studies
* Analytics
* Client dashboard
* Blog (optional)

without requiring a major refactor.

---

# Engineering Principles

* Simplicity over cleverness.
* Reusability over duplication.
* Performance over unnecessary effects.
* Maintainability over shortcuts.
* Consistency over personal preference.

---

## Decisions Made

* Next.js App Router selected.
* TypeScript mandatory.
* Tailwind CSS adopted.
* shadcn/ui as component foundation.
* GSAP + Framer Motion + Lenis for motion.
* Vercel for deployment.
* Mobile-first responsive strategy.
* Static content for v1.

---

## Open Questions

* CMS selection (future).
* Analytics provider.
* Monitoring and error tracking.
* Image hosting strategy.

---

## Next Document

03-brand-principles.md
