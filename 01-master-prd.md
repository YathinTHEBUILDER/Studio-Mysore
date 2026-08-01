---
title: Master Product Requirement Document (PRD)
version: 1.0
status: Approved
owner: Studio Mysore
last_updated: 2026-08-01
---

# Studio Mysore — Master PRD

## 1. Executive Summary & Product Vision

**Product Name:** Yathin's Catalogue (Studio Mysore Digital Showroom)  
**Type:** Interactive Digital Showcase & Conversion Engine  
**Primary Goal:** Transform prospect interest into active WhatsApp inquiries with Studio Mysore by delivering immersive, industry-tailored live demonstrations.

Instead of presenting static portfolios or generic agency proposals, Studio Mysore provides local business owners with direct, interactive experiences of custom digital solutions designed for their specific industry.

---

## 2. Target Personas & Industry Verticals

### Target Audiences
1. **Café Owners:** Focus on digital menu browsing, pre-ordering, loyalty highlights, and ambient aesthetic presentation.
2. **Restaurant Owners:** Focus on dynamic table reservations, interactive menu showcases, special dietary filtering, and online order readiness.
3. **Dental Clinic Managers:** Focus on automated patient scheduling, treatment visualizers, doctor availability, and service clarity.
4. **Medical Clinic Directors:** Focus on appointment booking, doctor profiles, patient intake readiness, and clinic trust building.
5. **Gym & Fitness Club Owners:** Focus on class scheduling, trainer profiles, trial booking, and membership tier comparisons.

---

## 3. Key Features & Functional Requirements

### 3.1 Global Experience Framework
* **Hero Experience:** High-impact hero section introducing Studio Mysore's value proposition with subtle micro-animations and smooth scroll guidance.
* **Industry Showcase Navigator:** Seamless tabbed/card UI allowing users to switch between industry experiences (Café, Restaurant, Dental, Medical, Gym).
* **Contextual Lead Generation (WhatsApp Integration):**
  * Persistent, floating "Start Conversation" CTA button.
  * Context-aware pre-filled WhatsApp messaging (e.g., `"Hi Yathin, I just explored the Dental Clinic experience on Studio Mysore and would like to discuss a custom build for my clinic."`).
* **Interactive Live Demos:** Embedded, state-aware mini-applications for each target industry with real-time UI reactions.

### 3.2 Industry Experience Breakdown

| Vertical | Core Demo Interactive Feature | Primary Value Demonstrated |
| :--- | :--- | :--- |
| **Café** | Dynamic menu builder, order customizer & instant cart summary | Speed of ordering & visual menu appeal |
| **Restaurant** | Table booking flow & visual dish preview modal | Frictionless reservations & premium presentation |
| **Dental Clinic** | Interactive appointment booker & treatment overview | Patient trust & booking convenience |
| **Medical Clinic** | Doctor directory & instant appointment request | Operational efficiency & patient clarity |
| **Gym** | Class schedule viewer & instant trial pass generator | Lead capture & membership conversion |

---

## 4. Design System & Aesthetics

* **Brand Vibe:** Calm, Premium, Honest, Thoughtful, Approachable, Detail-oriented.
* **Color Palette:** Tailored dark/light mode accents, glassmorphism containers, smooth subtle gradients.
* **Typography:** Modern typography stack (Inter / Outfit / Roboto).
* **Motion & Animation:**
  * **Lenis:** Smooth scrolling experience across device viewports.
  * **Framer Motion & GSAP:** Micro-interactions, scroll-driven reveals, hover states, and smooth layout transitions.
* **Iconography:** Lucide Icons for clean, accessible visual cues.

---

## 5. Technical Stack & Infrastructure

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS + shadcn/ui components
* **Motion:** Framer Motion, GSAP, Lenis
* **Icons:** Lucide React
* **Deployment:** Vercel

---

## 6. Non-Functional Requirements & Performance Targets

* **Performance:** Core Web Vitals (LCP < 2.5s, FID/INP < 200ms, CLS < 0.1).
* **Responsive Design:** Native fluid design across Mobile, Tablet, Laptop, and Desktop viewports.
* **Accessibility:** WCAG 2.1 AA compliant (semantic HTML, proper ARIA attributes, keyboard nav support).
* **SEO Best Practices:** Unique page titles, meta descriptions, single `<h1>` tag structure, OpenGraph cards.

---

## 7. Roadmap & Milestones

1. **Milestone 1: Project Foundation & UI System** — Tech setup, global design tokens, shared layout components.
2. **Milestone 2: Navigation & Hero Experience** — Brand narrative, dynamic industry switcher, persistent CTAs.
3. **Milestone 3: Café Interactive Experience** — First live showcase demo (menu + order builder).
4. **Milestone 4: Remaining Industry Demos** — Restaurant, Dental, Medical, Gym interactive modules.
5. **Milestone 5: Optimization & Final Polish** — Speed audit, SEO tags, responsive fine-tuning, deployment.

---

## 8. Definition of Success

* Visitor understands Studio Mysore's value within **30 seconds**.
* Visitor interacts with at least **one live demo**.
* Conversion step triggers a direct **WhatsApp conversation** with pre-populated industry context.
