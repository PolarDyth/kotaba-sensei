"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { VocabItem, getVocabStatusColor, getVocabStatusLabel } from "@/lib/tutor-data"
import { cn } from "@/lib/utils"

interface VocabListProps {
  vocab: VocabItem[]
}

export function VocabList({ vocab }: VocabListProps) {
  return (
    <div className="space-y-1.5">
      {vocab.length === 0 ? (
        <p className="text-xs text-text-secondary/60 text-center py-6">
          No vocabulary items yet
        </p>
      ) : (
        vocab.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
            className="flex items-center justify-between gap-2 p-2 rounded-lg bg-surface-alt/30 hover:bg-surface-alt/50 border border-transparent hover:border-white/5 transition-colors"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-1.5">
                <p className="text-xs font-medium text-text-primary truncate">
                  {item.word}
                </p>
                {item.partOfSpeech && (
                  <span className="text-[9px] text-text-secondary/40 shrink-0">
                    {item.partOfSpeech}
                  </span>
                )}
              </div>
              <p className="text-[10px] text-primary/60 italic mt-0.5 truncate">
                {item.reading}
              </p>
              <p className="text-[10px] text-text-secondary/60 mt-0.5 truncate">
                {item.meaning}
              </p>
            </div>
            <span
              className={cn(
                "text-[9px] font-medium px-1.5 py-0.5 rounded shrink-0",
                getVocabStatusColor(item.status)
              )}
            >
              {getVocabStatusLabel(item.status)[0]}
            </span>
          </motion.div>
        ))
      )}
    </div>
  )
}
