"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressBarProps {
  value: number // 0-100
  variant?: "primary" | "success" | "warning" | "indigo"
  size?: "sm" | "md"
  showAnimation?: boolean
  className?: string
}

const variantColors = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  indigo: "bg-indigo-accent",
}

export function ProgressBar({
  value,
  variant = "primary",
  size = "sm",
  showAnimation = true,
  className,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value))

  return (
    <div
      className={cn(
        "w-full bg-surface rounded-full overflow-hidden",
        size === "sm" ? "h-1.5" : "h-2.5",
        className
      )}
    >
      <motion.div
        initial={showAnimation ? { width: 0 } : { width: `${clampedValue}%` }}
        animate={{ width: `${clampedValue}%` }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut" as const,
        }}
        className={cn("h-full rounded-full", variantColors[variant])}
      />
    </div>
  )
}

