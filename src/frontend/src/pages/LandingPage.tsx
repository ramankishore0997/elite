import { BenefitCardsSection } from "@/components/BenefitCardsSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MembersGetSection } from "@/components/MembersGetSection";
import { Navbar } from "@/components/Navbar";
import { StatsSection } from "@/components/StatsSection";
import { StickyCtaButton } from "@/components/StickyCtaButton";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyJoinSection } from "@/components/WhyJoinSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <MembersGetSection />
        <BenefitCardsSection />
        <StatsSection />
        <WhyJoinSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <StickyCtaButton />
    </div>
  );
}
