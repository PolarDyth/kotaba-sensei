"use client"

import { motion } from "framer-motion"
import { BookOpen, MessageCircle, Brain } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: BookOpen,
    title: "Choose your textbook",
    description:
      "Pick Genki, Tobira, or create custom lessons tailored to your learning path.",
  },
  {
    icon: MessageCircle,
    title: "Chat, practice, and speak",
    description:
      "AI tutor corrects your sentences, quizzes you on grammar, and supports voice input.",
  },
  {
    icon: Brain,
    title: "Review with SRS & Anki",
    description:
      "Automatically turn mistakes and vocab into flashcards for spaced repetition.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            How it works
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Three simple steps to transform your Japanese learning journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={cardVariants}>
              <Card className="h-full hover:border-primary/20 transition-colors group">
                <CardContent className="pt-2">
                  <div className="flex flex-col items-center text-center">
                    {/* Step number */}
                    <div className="mb-4 text-xs font-medium text-primary">
                      Step {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 size-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="size-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
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

