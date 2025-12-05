"use client"

import { motion } from "framer-motion"
import {
  BookMarked,
  Languages,
  Mic,
  Layers,
  BarChart3,
  GraduationCap,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: BookMarked,
    title: "Textbook-aware tutoring",
    description:
      "Your AI tutor knows exactly what chapter you're on and teaches accordingly.",
  },
  {
    icon: Languages,
    title: "Gradual English → Japanese UI",
    description:
      "Watch your interface slowly transition to Japanese as you level up.",
  },
  {
    icon: Mic,
    title: "Voice chat (STT/TTS)",
    description:
      "Practice speaking and listening with natural voice conversations.",
  },
  {
    icon: Layers,
    title: "SRS with Anki export",
    description:
      "Built-in spaced repetition, or export your cards to Anki for offline study.",
  },
  {
    icon: BarChart3,
    title: "Progress dashboard & streaks",
    description:
      "Track study time, word counts, and maintain your daily streak.",
  },
  {
    icon: GraduationCap,
    title: "Built for serious learners",
    description:
      "JLPT prep, grammar deep-dives, and structured study for real results.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export function FeatureGrid() {
  return (
    <section className="py-20 sm:py-28 bg-surface-alt/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Everything you need to learn Japanese
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Powerful features designed for motivated self-learners
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants}>
              <Card className="h-full hover:border-primary/20 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                <CardContent>
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="size-5 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3 className="text-base font-semibold text-text-primary mb-1">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
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

