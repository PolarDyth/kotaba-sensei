"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  MessageSquare,
  CheckCircle,
  HelpCircle,
  Headphones,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { StudyMode, studyModes } from "@/lib/tutor-data"

interface StudyModeSelectorProps {
  currentMode: StudyMode
  onModeChange: (mode: StudyMode) => void
}

const iconMap = {
  MessageSquare,
  CheckCircle,
  HelpCircle,
  Headphones,
}

export function StudyModeSelector({
  currentMode,
  onModeChange,
}: StudyModeSelectorProps) {
  return (
    <div>
      <p className="text-[10px] font-medium text-text-secondary/70 uppercase tracking-wider mb-2 px-1">
        Study Mode
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        {studyModes.map((mode) => {
          const Icon = iconMap[mode.icon as keyof typeof iconMap]
          const isActive = mode.id === currentMode

          return (
            <motion.button
              key={mode.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onModeChange(mode.id)}
              className={cn(
                "relative flex items-center gap-2 px-2.5 py-2 rounded-lg transition-all text-left",
                isActive
                  ? "bg-primary/10 border border-primary/20"
                  : "bg-surface-alt/30 border border-transparent hover:bg-surface-alt/50"
              )}
            >
              <div
                className={cn(
                  "size-6 rounded flex items-center justify-center shrink-0",
                  isActive ? "bg-primary/15" : "bg-surface/50"
                )}
              >
                <Icon
                  className={cn(
                    "size-3.5",
                    isActive ? "text-primary" : "text-text-secondary/60"
                  )}
                />
              </div>
              <div className="min-w-0">
                <p
                  className={cn(
                    "text-[11px] font-medium leading-tight truncate",
                    isActive ? "text-primary" : "text-text-primary/80"
                  )}
                >
                  {mode.label}
                </p>
                <p className="text-[9px] text-text-secondary/50 truncate">
                  {mode.labelJp}
                </p>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
