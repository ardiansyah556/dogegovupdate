import HeroSection from "@/components/HeroSection";
import MandateSection from "@/components/MandateSection";
import WhatIsDogegov from "@/components/WhatIsDogegov";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";
import PhilosophySection from "@/components/PhilosophySection";
import LogoMeaningSection from "@/components/LogoMeaningSection";
import OfficialNoticeSection from "@/components/OfficialNoticeSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

/**
 * DESIGN PHILOSOPHY: Minimalist Bureaucratic Formalism
 * - Asymmetric layout with left-aligned content
 * - Navy, White, Gold, and Red color palette
 * - Official government document aesthetic
 * - Emphasis on radical efficiency and self-deletion
 * - NO EMOJIS anywhere on the website
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main>
        <HeroSection />
        <MandateSection />
        <WhatIsDogegov />
        <TokenomicsSection />
        <RoadmapSection />
        <PhilosophySection />
        <LogoMeaningSection />
        <OfficialNoticeSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
