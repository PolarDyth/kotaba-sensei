"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight, Sparkles } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const tiers = [
  {
    name: "Free",
    description: "Get started with core features",
    features: [
      "AI tutor conversations",
      "Basic progress tracking",
      "Limited daily sessions",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "Unlock your full potential",
    features: [
      "Unlimited tutor sessions",
      "Voice chat & pronunciation",
      "SRS with Anki export",
      "Advanced analytics",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
]

export function PricingTeaser() {
  return (
    <section className="py-20 sm:py-28 bg-surface-alt/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Simple pricing for serious learners
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            Start free, upgrade when you&apos;re ready
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {tiers.map((tier) => (
            <motion.div key={tier.name} variants={staggerItem}>
              <Card
                className={`h-full relative ${
                  tier.highlighted
                    ? "border-primary/30 shadow-lg shadow-primary/10"
                    : ""
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-xs font-medium text-white">
                      <Sparkles className="size-3" />
                      Popular
                    </span>
                  </div>
                )}
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {tier.description}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-text-secondary"
                      >
                        <Check
                          className={`size-4 shrink-0 ${
                            tier.highlighted ? "text-primary" : "text-success"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={tier.highlighted ? "default" : "secondary"}
                    className="w-full"
                    asChild
                  >
                    <Link href="/pricing">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-8"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            View full pricing details
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

