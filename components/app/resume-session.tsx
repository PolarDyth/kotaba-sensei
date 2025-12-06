"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare,
  CheckCircle,
  HelpCircle,
  Headphones,
  Play,
  BookOpen,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LastSession, formatRelativeTime, StudyMode } from "@/lib/mock-data"

interface ResumeSessionProps {
  session: LastSession
  delay?: number
}

const modeIcons: Record<StudyMode, React.ElementType> = {
  "free-chat": MessageSquare,
  correction: CheckCircle,
  quiz: HelpCircle,
  listening: Headphones,
}

const modeLabels: Record<StudyMode, string> = {
  "free-chat": "Free Chat",
  correction: "Correction",
  quiz: "Quiz",
  listening: "Listening",
}

const modeColors: Record<StudyMode, string> = {
  "free-chat": "text-primary",
  correction: "text-success",
  quiz: "text-warning",
  listening: "text-indigo-accent",
}

export function ResumeSession({ session, delay = 0 }: ResumeSessionProps) {
  const ModeIcon = modeIcons[session.mode]
  const modeLabel = modeLabels[session.mode]
  const modeColor = modeColors[session.mode]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface rounded-2xl border border-white/5 p-5 sm:p-6 transition-all duration-300 hover:border-white/10 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Session info */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
            <BookOpen className="size-6 text-primary" />
          </div>

          {/* Details */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-medium text-text-secondary">
                Resume Last Session
              </h3>
              <span className="flex items-center gap-1 text-xs text-text-secondary/70">
                <Clock className="size-3" />
                {formatRelativeTime(session.timestamp)}
              </span>
            </div>

            <p className="text-lg font-semibold text-text-primary truncate">
              {session.textbook} – Ch. {session.chapterNumber}:{" "}
              {session.chapter}
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span
                className={`inline-flex items-center gap-1.5 text-sm ${modeColor}`}
              >
                <ModeIcon className="size-4" />
                {modeLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Continue button */}
        <div className="sm:shrink-0">
          <Button asChild className="w-full sm:w-auto gap-2">
            <Link href="/app/tutor">
              <Play className="size-4" />
              Continue
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

