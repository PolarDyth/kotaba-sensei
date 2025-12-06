"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2, History } from "lucide-react"
import { RecentMistake } from "@/lib/mock-data"

interface RecentMistakesProps {
  mistakes: RecentMistake[]
  delay?: number
}

export function RecentMistakes({ mistakes, delay = 0 }: RecentMistakesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface rounded-2xl border border-white/5 p-5 sm:p-6 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-danger/10 flex items-center justify-center">
            <History className="size-4 text-danger" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">
            Recent Mistakes
          </h3>
        </div>
        <span className="text-xs text-text-secondary bg-surface-alt px-2.5 py-1 rounded-full">
          {mistakes.length} items
        </span>
      </div>

      {/* Mistakes Grid - horizontal on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {mistakes.map((mistake, index) => {
          const isCorrect = mistake.explanation.toLowerCase().includes("correct")

          return (
            <motion.div
              key={mistake.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.05 }}
              className="bg-surface-alt rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 p-1 rounded-full shrink-0 ${
                    isCorrect ? "bg-success/20" : "bg-danger/20"
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="size-3.5 text-success" />
                  ) : (
                    <AlertCircle className="size-3.5 text-danger" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-text-primary text-sm truncate">
                    {mistake.jp}
                  </p>
                  {mistake.reading && (
                    <p className="text-xs text-primary/80 mt-0.5 italic truncate">
                      {mistake.reading}
                    </p>
                  )}
                  <p className="text-xs text-text-secondary mt-1.5 leading-relaxed line-clamp-2">
                    {mistake.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* View all link */}
      <button className="w-full mt-4 text-sm text-primary hover:text-primary-hover transition-colors text-center py-2 rounded-lg hover:bg-surface-alt">
        View all mistakes →
      </button>
    </motion.div>
  )
}
