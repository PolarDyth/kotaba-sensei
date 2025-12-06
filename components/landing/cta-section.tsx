"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeInUp, viewportOnce } from "@/lib/animations"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative blobs - extended and more diffuse for smooth transitions */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-accent/[0.03] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Ready to make your Japanese practice{" "}
            <span className="text-primary">consistent</span> and{" "}
            <span className="text-primary">fun</span>?
          </h2>

          <p className="text-lg sm:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Join thousands of learners who are making real progress with
            KotobaSensei.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button size="lg" className="gap-2 text-base px-10 h-14 shadow-lg shadow-primary/25" asChild>
                <Link href="/register">
                  Get started for free
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="ghost" size="lg" className="text-base px-8 h-14" asChild>
                <Link href="/login">Log in</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
