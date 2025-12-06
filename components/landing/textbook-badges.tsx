"use client"

import { motion } from "framer-motion"
import { fadeInUp, viewportOnce } from "@/lib/animations"

const textbooks = [
  { name: "Genki", popular: true },
  { name: "Tobira", popular: false },
  { name: "Minna no Nihongo", popular: false },
  { name: "JLPT Prep", popular: true },
]

export function TextbookBadges() {
  return (
    <section className="py-12 sm:py-16">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="text-text-secondary text-sm sm:text-base mb-4">
          Perfect companion for learners using
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {textbooks.map((textbook) => (
            <span
              key={textbook.name}
              className={`
                inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                transition-colors duration-200
                ${
                  textbook.popular
                    ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15"
                    : "bg-surface-alt text-text-secondary border border-white/5 hover:border-white/10"
                }
              `}
            >
              {textbook.name}
            </span>
          ))}
          <span className="text-text-secondary text-sm">and more</span>
        </div>
      </motion.div>
    </section>
  )
}

