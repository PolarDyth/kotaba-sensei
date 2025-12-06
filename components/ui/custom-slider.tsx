"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CustomSliderProps {
  value: number
  min?: number
  max?: number
  step?: number
  onChange: (value: number) => void
  variant?: "primary" | "indigo"
  className?: string
}

export function CustomSlider({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  variant = "primary",
  className,
}: CustomSliderProps) {
  const trackRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const percentage = ((value - min) / (max - min)) * 100

  const updateValue = React.useCallback(
    (clientX: number) => {
      if (!trackRef.current) return

      const rect = trackRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const newPercentage = Math.max(0, Math.min(1, x / rect.width))
      const rawValue = min + newPercentage * (max - min)
      const steppedValue = Math.round(rawValue / step) * step
      const clampedValue = Math.max(min, Math.min(max, steppedValue))

      onChange(clampedValue)
    },
    [min, max, step, onChange]
  )

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updateValue(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateValue(e.touches[0].clientX)
  }

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateValue(e.clientX)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updateValue(e.touches[0].clientX)
      }
    }

    const handleEnd = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleEnd)
      document.addEventListener("touchmove", handleTouchMove)
      document.addEventListener("touchend", handleEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleEnd)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging, updateValue])

  return (
    <div className={cn("relative py-2", className)}>
      {/* Track container */}
      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="relative h-2 bg-surface rounded-full cursor-pointer"
      >
        {/* Fill track */}
        <div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full transition-all duration-75",
            variant === "primary" ? "bg-primary" : "bg-indigo-accent"
          )}
          style={{ width: `${percentage}%` }}
        />

        {/* Thumb */}
        <motion.div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 size-5 rounded-full cursor-grab active:cursor-grabbing",
            "border-2 border-white/20",
            "transition-transform duration-75",
            variant === "primary"
              ? "bg-primary shadow-lg shadow-primary/40"
              : "bg-indigo-accent shadow-lg shadow-indigo-accent/40",
            isDragging && "scale-110"
          )}
          style={{
            left: `calc(${percentage}% - 10px)`,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.15 }}
        />
      </div>
    </div>
  )
}
