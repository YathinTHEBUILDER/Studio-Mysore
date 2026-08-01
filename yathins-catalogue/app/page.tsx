/**
 * Home Page — Studio Mysore Catalogue
 *
 * Renders:
 *  1. HeroSection (100dvh)
 *  2. ExperienceSwitcher (Immediately below Hero)
 *
 * Source: 07-homepage-experience.md
 */

import { HeroSection } from "@/components/hero";
import { ExperienceSwitcher } from "@/components/experience";

export default function HomePage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <ExperienceSwitcher />
    </main>
  );
}
