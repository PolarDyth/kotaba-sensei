"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Target } from "lucide-react"

interface DailyGoalRingProps {
  minutesStudied: number
  goalMinutes: number
}

export function DailyGoalRing({
  minutesStudied,
  goalMinutes,
}: DailyGoalRingProps) {
  const progress = Math.min((minutesStudied / goalMinutes) * 100, 100)
  const circumference = 2 * Math.PI * 40 // radius = 40
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="bg-surface-alt rounded-xl p-4 border border-white/5">
      <div className="flex items-center gap-2 mb-3">
        <Target className="size-4 text-primary" />
        <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">
          Daily Goal
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Ring */}
        <div className="relative size-20">
          <svg className="size-20 -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-surface"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className="text-primary"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                strokeDasharray: circumference,
              }}
            />
          </svg>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-text-primary">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex-1">
          <p className="text-2xl font-bold text-text-primary">
            {minutesStudied}
            <span className="text-sm font-normal text-text-secondary ml-1">
              / {goalMinutes} min
            </span>
          </p>
          <p className="text-xs text-text-secondary mt-1">
            {goalMinutes - minutesStudied > 0
              ? `${goalMinutes - minutesStudied} min remaining`
              : "Goal complete! 🎉"}
          </p>
        </div>
      </div>
    </div>
  )
}

