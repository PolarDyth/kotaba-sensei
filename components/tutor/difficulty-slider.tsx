"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { JLPTLevel, jlptLevels } from "@/lib/tutor-data"

interface DifficultySliderProps {
  level: JLPTLevel
  onLevelChange: (level: JLPTLevel) => void
}

export function DifficultySlider({
  level,
  onLevelChange,
}: DifficultySliderProps) {
  const currentIndex = jlptLevels.indexOf(level)

  return (
    <div>
      <p className="text-[10px] font-medium text-text-secondary/70 uppercase tracking-wider mb-2 px-1">
        Difficulty
      </p>

      {/* Custom stepped slider */}
      <div className="relative py-2 px-1">
        {/* Track background */}
        <div className="relative h-1.5 bg-surface-alt/50 rounded-full">
          {/* Progress fill */}
          <div
            className="absolute inset-y-0 left-0 bg-primary/40 rounded-full transition-all duration-200"
            style={{
              width: `${(currentIndex / (jlptLevels.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Step dots */}
        <div className="absolute inset-x-1 top-1/2 -translate-y-1/2 flex items-center justify-between">
          {jlptLevels.map((l, index) => {
            const isActive = index === currentIndex
            const isPast = index < currentIndex

            return (
              <button
                key={l}
                onClick={() => onLevelChange(l)}
                className={cn(
                  "relative size-3 rounded-full transition-all duration-200",
                  "hover:scale-110 focus:outline-none",
                  isActive
                    ? "bg-primary shadow-md shadow-primary/30 scale-110"
                    : isPast
                    ? "bg-primary/50"
                    : "bg-surface border border-white/10"
                )}
              />
            )
          })}
        </div>
      </div>

      {/* Level labels */}
      <div className="flex items-center justify-between mt-2 px-1">
        {jlptLevels.map((l, index) => (
          <button
            key={l}
            onClick={() => onLevelChange(l)}
            className={cn(
              "text-[10px] font-medium transition-colors",
              index === currentIndex
                ? "text-primary"
                : "text-text-secondary/50 hover:text-text-secondary"
            )}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Current level description */}
      <p className="text-center text-[11px] text-text-secondary/60 mt-2">
        {level === "N5" && "Beginner"}
        {level === "N4" && "Elementary"}
        {level === "N3" && "Intermediate"}
        {level === "N2" && "Upper-Intermediate"}
        {level === "N1" && "Advanced"}
      </p>
    </div>
  )
}
