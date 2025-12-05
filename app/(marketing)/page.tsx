import { HeroSection } from "@/components/landing/hero-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { FeatureGrid } from "@/components/landing/feature-grid"
import { SeriousLearners } from "@/components/landing/serious-learners"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeatureGrid />
      <SeriousLearners />
      <CTASection />
      <Footer />
    </>
  )
}

