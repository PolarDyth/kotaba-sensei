"use client"

import { motion } from "framer-motion"
import { TrendingUp, Calendar, Target, Award } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function ProgressPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-text-primary">Progress</h1>
        <p className="mt-2 text-text-secondary">
          Track your Japanese learning journey
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="size-5 text-primary" />
                Weekly Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-32">
                {weekDays.map((day) => (
                  <div key={day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-surface-alt rounded-t-lg h-4" />
                    <span className="text-xs text-text-secondary">{day}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-text-secondary text-center">
                Start studying to see your activity here
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="size-5 text-primary" />
                Daily Goal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center py-4">
                <div className="relative size-32">
                  <svg className="size-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="text-surface-alt"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray="352"
                      strokeDashoffset="352"
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-text-primary">0%</span>
                    <span className="text-xs text-text-secondary">completed</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-text-secondary">
                  Set your daily goal to track progress
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="size-5 text-primary" />
                Learning Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Words learned</span>
                  <span className="font-semibold text-text-primary">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Grammar points</span>
                  <span className="font-semibold text-text-primary">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Conversations</span>
                  <span className="font-semibold text-text-primary">0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Study time</span>
                  <span className="font-semibold text-text-primary">0 min</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="size-5 text-primary" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="size-14 rounded-xl bg-surface-alt border border-white/5 flex items-center justify-center"
                  >
                    <Award className="size-6 text-text-secondary/30" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                Complete lessons to unlock achievements
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

