/**
 * Home Page — Studio Mysore Entrance
 *
 * Sequence:
 *  1. Hero (HeroSection)
 *  2. Browse Experiences (IndustryCatalogue)
 *  3. How We Work (HowWeWork)
 *  4. Let's Talk (FinalCTA)
 *  5. Footer (Footer)
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
