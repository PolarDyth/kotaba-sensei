"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Lightbulb, AlertTriangle, ArrowRight } from "lucide-react"
import { WeeklyFocus as WeeklyFocusData } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"

interface WeeklyFocusProps {
  data: WeeklyFocusData
  delay?: number
}

export function WeeklyFocus({ data, delay = 0 }: WeeklyFocusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface rounded-2xl border border-white/5 p-5 sm:p-6 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-primary/5 h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-warning/10 flex items-center justify-center">
            <Lightbulb className="size-4 text-warning" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-text-secondary">
              This Week&apos;s Focus
            </h3>
            <span className="text-xs text-text-secondary/70">
              {data.category}
            </span>
          </div>
        </div>
        <span className="flex items-center gap-1 text-xs text-danger bg-danger/10 px-2 py-1 rounded-full">
          <AlertTriangle className="size-3" />
          {data.mistakeCount} errors
        </span>
      </div>

      {/* Topic highlight */}
      <div className="bg-surface-alt rounded-xl p-4 mb-4">
        <p className="text-lg font-semibold text-text-primary mb-2">
          {data.topic}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Suggestion */}
      <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
        <p className="text-xs font-medium text-primary mb-1">💡 Suggestion</p>
        <p className="text-sm text-text-secondary leading-relaxed">
          {data.suggestion}
        </p>
      </div>

      {/* Practice button */}
      <Button
        variant="ghost"
        className="w-full mt-4 text-primary hover:text-primary-hover hover:bg-primary/10"
      >
        Practice this topic
        <ArrowRight className="size-4 ml-2" />
      </Button>
    </motion.div>
  )
}

