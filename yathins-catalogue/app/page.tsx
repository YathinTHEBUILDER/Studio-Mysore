/**
 * Home Page — Studio Mysore Catalogue
 *
 * Entrance architecture:
 *  1. HeroSection
 *  2. IndustryCatalogue
 *  3. HowWeWork
 *  4. FinalCTA
 *  5. Footer
 */

import { HeroSection } from "@/components/hero";
import { IndustryCatalogue } from "@/components/experience";
import { HowWeWork } from "@/components/home/HowWeWork";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/layout";

export default function HomePage() {
  return (
    <main className="bg-background min-h-dvh flex flex-col justify-between">
      <HeroSection />
      <IndustryCatalogue />
      <HowWeWork />
      <FinalCTA />
      <Footer />
    </main>
  );
}
