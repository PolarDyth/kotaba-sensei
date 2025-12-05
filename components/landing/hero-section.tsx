"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Volume2, Target, Flame, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-subtle/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="text-primary">おかえり</span>
              <span className="text-text-primary">, William!</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0"
            >
              An AI Japanese tutor that knows your textbook, tracks your
              progress, and slowly turns your interface into Japanese.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="gap-2">
                  Start learning
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="ghost" size="lg" className="gap-2">
                  <Play className="size-4" />
                  See how it works
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Mock app preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-surface border border-white/5 p-6 shadow-xl glow-primary">
              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Today's Goal */}
                <div className="bg-surface-alt rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-text-secondary">
                      Today&apos;s Goal
                    </span>
                    <Target className="size-4 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary">
                    45 / 60 min
                  </div>
                  <div className="mt-2 h-1.5 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-text-secondary">
                    75% complete
                  </div>
                </div>

                {/* Streak */}
                <div className="bg-surface-alt rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-text-secondary">Streak</span>
                    <Flame className="size-4 text-warning" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary">
                    12 days
                  </div>
                  <div className="mt-2 text-xs text-text-secondary">
                    Personal best: 21 days
                  </div>
                </div>
              </div>

              {/* Chat bubble preview */}
              <div className="bg-surface-alt rounded-xl p-4 border border-white/5">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-primary">AI</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-sm text-text-primary font-medium">
                        こんにちは！今日は何を勉強しましょうか？
                      </p>
                      <button className="text-text-secondary hover:text-text-primary transition-colors">
                        <Volume2 className="size-4" />
                      </button>
                    </div>
                    <p className="text-xs text-primary italic">
                      Konnichiwa! Kyou wa nani wo benkyou shimashou ka?
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      Hello! What shall we study today?
                    </p>
                  </div>
                </div>
              </div>

              {/* Words learned indicator */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-4 text-success" />
                  <span className="text-text-secondary">Words learned</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-text-primary">248</span>
                  <span className="text-xs text-success">+12 this week</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-primary/5 border border-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

