"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/animations"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "Finally, an AI tutor that actually knows what chapter I'm on. It's like having a study buddy who's read my textbook.",
    name: "Sarah K.",
    label: "JLPT N4 student",
  },
  {
    quote:
      "The SRS integration is brilliant. My vocab retention went through the roof once I started using the flashcard export.",
    name: "Marcus L.",
    label: "Self-studying with Genki II",
  },
  {
    quote:
      "I love how the interface gradually becomes more Japanese. It's a clever way to build reading confidence naturally.",
    name: "Yuki T.",
    label: "Intermediate learner",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            What learners are saying
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Join thousands of students making real progress
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={staggerItem}>
              <Card className="h-full group">
                <CardContent className="flex flex-col h-full">
                  <Quote className="size-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
                  <blockquote className="text-text-primary text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-white/5 pt-4">
                    <div className="font-semibold text-text-primary text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-text-secondary mt-1">
                      {testimonial.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

