/**
 * Home Page — Studio Mysore Entrance
 *
 * Sequence:
 *  1. Hero (HeroSection)
 *  2. What We Build (WhatWeBuild) — accordion, 4 capabilities
 *  3. Browse Experiences (IndustryCatalogue)
 *  4. How We Work (HowWeWork)
 *  5. Let's Talk (FinalCTA)
 *  6. Footer (Footer)
 */

import { HeroSection } from "@/components/hero";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { IndustryCatalogue } from "@/components/experience";
import { HowWeWork } from "@/components/home/HowWeWork";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Footer } from "@/components/layout";

export default function HomePage() {
  return (
    <main className="bg-background min-h-dvh flex flex-col justify-between">
      <HeroSection />
      <WhatWeBuild />
      <IndustryCatalogue />
      <HowWeWork />
      <FinalCTA />
      <Footer />
    </main>
  );
}
