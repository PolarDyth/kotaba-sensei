"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { CustomSlider } from "@/components/ui/custom-slider"

interface UIJapaneseSliderProps {
  level: number // 0-100
  onLevelChange: (level: number) => void
}

export function UIJapaneseSlider({
  level,
  onLevelChange,
}: UIJapaneseSliderProps) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-3 px-1">
        <Languages className="size-3 text-indigo-accent/70" />
        <p className="text-[10px] font-medium text-text-secondary/70 uppercase tracking-wider">
          UI Japanese
        </p>
      </div>

      {/* Custom Slider */}
      <div className="px-1">
        <CustomSlider
          value={level}
          min={0}
          max={100}
          step={5}
          onChange={onLevelChange}
          variant="indigo"
        />
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between mt-2 text-[10px] text-text-secondary/60 px-1">
        <span>English</span>
        <span className="text-indigo-accent/80 font-medium">{level}%</span>
        <span>日本語</span>
      </div>

      {/* Helper text */}
      <p className="text-[10px] text-text-secondary/50 mt-2 leading-relaxed px-1">
        Interface switches from English to Japanese as you progress
      </p>
    </div>
  )
}
