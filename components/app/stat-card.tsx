"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  icon: LucideIcon
  iconColor?: string
  children: React.ReactNode
  className?: string
  delay?: number
}

export function StatCard({
  title,
  icon: Icon,
  iconColor = "text-primary",
  children,
  className,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "bg-surface-alt rounded-xl p-4 border border-white/5",
        "transition-all duration-300",
        "hover:border-white/10 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">
          {title}
        </span>
        <Icon className={cn("size-4", iconColor)} />
      </div>
      {children}
    </motion.div>
  )
}

