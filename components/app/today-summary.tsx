"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Clock, MessageSquare, CheckCircle, BookMarked } from "lucide-react"
import { TodaySummary as TodaySummaryData } from "@/lib/mock-data"

interface TodaySummaryProps {
  data: TodaySummaryData
  delay?: number
}

const metrics = [
  {
    key: "minutesStudied" as const,
    label: "Minutes",
    icon: Clock,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    key: "messagesExchanged" as const,
    label: "Messages",
    icon: MessageSquare,
    color: "text-indigo-accent",
    bgColor: "bg-indigo-accent/10",
  },
  {
    key: "mistakesCorrected" as const,
    label: "Corrected",
    icon: CheckCircle,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    key: "newWordsLearned" as const,
    label: "New Words",
    icon: BookMarked,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
]

export function TodaySummary({ data, delay = 0 }: TodaySummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface rounded-2xl border border-white/5 p-5 sm:p-6 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Header */}
      <h3 className="text-sm font-medium text-text-secondary mb-4">
        Today&apos;s Study Summary
      </h3>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          const value = data[metric.key]

          return (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.05 }}
              className="flex flex-col items-center text-center p-3 rounded-xl bg-surface-alt/50"
            >
              <div
                className={`size-10 rounded-lg ${metric.bgColor} flex items-center justify-center mb-2`}
              >
                <Icon className={`size-5 ${metric.color}`} />
              </div>
              <span className="text-2xl font-bold text-text-primary">
                {value}
              </span>
              <span className="text-xs text-text-secondary mt-0.5">
                {metric.label}
              </span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

