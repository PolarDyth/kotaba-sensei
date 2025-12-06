import { HeroSection } from "@/components/landing/hero-section"
import { TextbookBadges } from "@/components/landing/textbook-badges"
import { HowItWorks } from "@/components/landing/how-it-works"
import { FeatureGrid } from "@/components/landing/feature-grid"
import { Testimonials } from "@/components/landing/testimonials"
import { SeriousLearners } from "@/components/landing/serious-learners"
import { PricingTeaser } from "@/components/landing/pricing-teaser"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <TextbookBadges />
      <HowItWorks />
      <FeatureGrid />
      <Testimonials />
      <SeriousLearners />
      <PricingTeaser />
      <CTASection />
      <Footer />
    </>
  )
}