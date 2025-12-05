"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Ready to make your Japanese practice{" "}
            <span className="text-primary">consistent</span> and{" "}
            <span className="text-primary">fun</span>?
          </h2>

          <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
            Join thousands of learners who are making real progress with
            KotobaSensei.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="gap-2 text-base px-8">
                Get started for free
                <ArrowRight className="size-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="secondary" size="lg" className="text-base px-8">
                Log in
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

