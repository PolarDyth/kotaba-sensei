"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp } from "lucide-react"
import { WeeklyMinutes } from "@/lib/mock-data"

interface WeeklyChartProps {
  data: WeeklyMinutes[]
  delay?: number
}

// Custom tooltip component
function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface border border-white/10 rounded-lg px-3 py-2 shadow-lg">
        <p className="text-xs text-text-secondary">{label}</p>
        <p className="text-sm font-semibold text-text-primary">
          {payload[0].value} min
        </p>
      </div>
    )
  }
  return null
}

export function WeeklyChart({ data, delay = 0 }: WeeklyChartProps) {
  const totalMinutes = data.reduce((sum, d) => sum + d.minutes, 0)
  const avgMinutes = Math.round(totalMinutes / data.length)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            Weekly Study Minutes
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            {totalMinutes} total • {avgMinutes} min avg/day
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-success">
          <TrendingUp className="size-4" />
          <span>+15% vs last week</span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E45A7A" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#E45A7A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A5A5B5", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A5A5B5", fontSize: 12 }}
              tickFormatter={(value) => `${value}`}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="minutes"
              stroke="#E45A7A"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorMinutes)"
              dot={{
                fill: "#E45A7A",
                strokeWidth: 0,
                r: 4,
              }}
              activeDot={{
                fill: "#E45A7A",
                strokeWidth: 2,
                stroke: "#fff",
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

