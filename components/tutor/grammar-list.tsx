"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { GrammarPoint } from "@/lib/tutor-data"
import { cn } from "@/lib/utils"

interface GrammarListProps {
  grammar: GrammarPoint[]
}

export function GrammarList({ grammar }: GrammarListProps) {
  const [expandedId, setExpandedId] = React.useState<string | null>(null)

  return (
    <div className="space-y-1.5">
      {grammar.length === 0 ? (
        <p className="text-xs text-text-secondary/60 text-center py-6">
          No grammar points yet
        </p>
      ) : (
        grammar.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
            className="rounded-lg bg-surface-alt/30 border border-transparent hover:border-white/5 overflow-hidden transition-colors"
          >
            <button
              onClick={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
              className="w-full flex items-center justify-between gap-2 p-2 hover:bg-surface-alt/50 transition-colors text-left"
            >
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-primary/90 truncate">
                  {item.structure}
                </p>
                {item.structureReading && (
                  <p className="text-[10px] text-text-secondary/50 italic truncate">
                    {item.structureReading}
                  </p>
                )}
                <p className="text-[10px] text-text-secondary/60 mt-0.5 truncate">
                  {item.description}
                </p>
              </div>
              <ChevronRight
                className={cn(
                  "size-3 text-text-secondary/50 shrink-0 transition-transform",
                  expandedId === item.id && "rotate-90"
                )}
              />
            </button>

            {/* Expanded content */}
            {expandedId === item.id && item.example && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-white/5"
              >
                <div className="p-2 bg-surface/30">
                  <p className="text-[9px] font-medium text-text-secondary/60 uppercase tracking-wide mb-1.5">
                    Example
                  </p>
                  <p className="text-[11px] text-text-primary">{item.example}</p>
                  {item.exampleReading && (
                    <p className="text-[10px] text-primary/60 italic mt-0.5">
                      {item.exampleReading}
                    </p>
                  )}
                  {item.exampleMeaning && (
                    <p className="text-[10px] text-text-secondary/60 mt-0.5">
                      {item.exampleMeaning}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))
      )}
    </div>
  )
}
