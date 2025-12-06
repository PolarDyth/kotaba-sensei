"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Target, BookMarked, Sparkles, StickyNote } from "lucide-react"
import { cn } from "@/lib/utils"
import { VocabItem, GrammarPoint } from "@/lib/tutor-data"
import { VocabList } from "./vocab-list"
import { GrammarList } from "./grammar-list"
import { NotesPanel } from "./notes-panel"

interface StudyPanelProps {
  dailyGoalMinutes: number
  minutesStudiedToday: number
  vocab: VocabItem[]
  grammar: GrammarPoint[]
  notes: string
  onNotesChange: (notes: string) => void
}

type TabId = "vocab" | "grammar" | "notes"

export function StudyPanel({
  dailyGoalMinutes,
  minutesStudiedToday,
  vocab,
  grammar,
  notes,
  onNotesChange,
}: StudyPanelProps) {
  const [activeTab, setActiveTab] = React.useState<TabId>("vocab")

  const progress = Math.min(
    Math.round((minutesStudiedToday / dailyGoalMinutes) * 100),
    100
  )

  const tabs = [
    { id: "vocab" as TabId, label: "Vocab", icon: BookMarked, count: vocab.length },
    { id: "grammar" as TabId, label: "Grammar", icon: Sparkles, count: grammar.length },
    { id: "notes" as TabId, label: "Notes", icon: StickyNote },
  ]

  return (
    <div className="space-y-4">
      {/* Daily Goal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-3 rounded-lg bg-surface-alt/30 border border-white/5"
      >
        <div className="flex items-center gap-2 mb-3">
          <Target className="size-3.5 text-primary/70" />
          <p className="text-[10px] font-medium text-text-secondary/70 uppercase tracking-wider">
            Daily Goal
          </p>
        </div>

        {/* Progress Ring */}
        <div className="flex items-center gap-3">
          <div className="relative size-12 shrink-0">
            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
              {/* Background ring */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-surface"
              />
              {/* Progress ring */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray={`${progress} ${100 - progress}`}
                className="text-primary transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-semibold text-primary">
                {progress}%
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-text-primary">
              {minutesStudiedToday} / {dailyGoalMinutes} min
            </p>
            <p className="text-[10px] text-text-secondary/60 mt-0.5">
              {dailyGoalMinutes - minutesStudiedToday > 0
                ? `${dailyGoalMinutes - minutesStudiedToday} min to go`
                : "Goal reached!"}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center gap-1 mb-3 px-1">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-medium transition-all flex-1",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary/60 hover:text-text-secondary hover:bg-surface-alt/30"
                )}
              >
                <Icon className="size-3" />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={cn(
                      "ml-auto text-[9px] font-medium px-1 py-0.5 rounded",
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "bg-surface text-text-secondary/50"
                    )}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="max-h-[420px] overflow-y-auto px-1">
          {activeTab === "vocab" && <VocabList vocab={vocab} />}
          {activeTab === "grammar" && <GrammarList grammar={grammar} />}
          {activeTab === "notes" && (
            <NotesPanel notes={notes} onNotesChange={onNotesChange} />
          )}
        </div>
      </motion.div>
    </div>
  )
}
