"use client"

import { motion } from "framer-motion"
import { Target, Flame, BookOpen, Clock } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const weeklyData = [
  { day: "Mon", minutes: 45 },
  { day: "Tue", minutes: 60 },
  { day: "Wed", minutes: 30 },
  { day: "Thu", minutes: 75 },
  { day: "Fri", minutes: 50 },
  { day: "Sat", minutes: 90 },
  { day: "Sun", minutes: 40 },
]

const maxMinutes = Math.max(...weeklyData.map((d) => d.minutes))

export function SeriousLearners() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background blobs - diffuse for smooth transitions */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-accent/[0.03] blur-[80px]" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Built for serious learners
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Goal-oriented study
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Prepare for JLPT N5-N1 with structured lessons that follow
                    your textbook curriculum, from Genki to Tobira and beyond.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-10 rounded-xl bg-warning/10 flex items-center justify-center shrink-0">
                  <Flame className="size-5 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Daily goals & streaks
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Set personalized study targets and build momentum with daily
                    streaks that keep you motivated and accountable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-10 rounded-xl bg-indigo-accent/10 flex items-center justify-center shrink-0">
                  <BookOpen className="size-5 text-indigo-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Weak-spot detection
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Our AI identifies patterns in your mistakes—particles, verb
                    conjugations, kanji readings—and creates targeted practice.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* Stats row */}
                <div className="grid grid-cols-2 divide-x divide-white/5">
                  {/* Today's Goal */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-text-secondary font-medium">
                        Today&apos;s Goal
                      </span>
                      <Target className="size-4 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-text-primary mb-2">
                      45 / 60
                    </div>
                    <div className="text-xs text-text-secondary mb-3">
                      minutes
                    </div>
                    <div className="h-2 bg-surface-alt rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>

                  {/* Streak */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-text-secondary font-medium">
                        Streak
                      </span>
                      <Flame className="size-4 text-warning" />
                    </div>
                    <div className="text-3xl font-bold text-text-primary mb-2">
                      12
                    </div>
                    <div className="text-xs text-text-secondary">days</div>
                    <div className="mt-3 text-xs text-text-secondary">
                      Personal best:{" "}
                      <span className="text-warning font-medium">21 days</span>
                    </div>
                  </div>
                </div>

                {/* Words learned */}
                <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="size-4 text-success" />
                    <span className="text-sm text-text-secondary">
                      Words learned
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-text-primary">
                      248
                    </span>
                    <span className="text-xs text-success font-medium">
                      +12 this week
                    </span>
                  </div>
                </div>

                {/* Weekly chart */}
                <div className="px-6 py-6 border-t border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="size-4 text-text-secondary" />
                    <span className="text-sm font-medium text-text-primary">
                      Weekly Study Minutes
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-24">
                    {weeklyData.map((data, index) => (
                      <div
                        key={data.day}
                        className="flex-1 flex flex-col items-center gap-2"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{
                            height: `${(data.minutes / maxMinutes) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className="w-full bg-primary/80 rounded-t-sm min-h-[4px]"
                        />
                        <span className="text-[10px] text-text-secondary">
                          {data.day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

