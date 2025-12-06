"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NotesPanelProps {
  notes: string
  onNotesChange: (notes: string) => void
}

export function NotesPanel({ notes, onNotesChange }: NotesPanelProps) {
  return (
    <div className="h-full flex flex-col">
      <textarea
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
        placeholder="Add your study notes here..."
        className={cn(
          "flex-1 w-full resize-none rounded-lg bg-surface border border-white/5",
          "px-3 py-3 text-sm text-text-primary placeholder:text-text-secondary/50",
          "focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10",
          "transition-colors min-h-[200px]"
        )}
      />
      <p className="text-xs text-text-secondary/50 mt-2 text-center">
        Your notes are saved automatically
      </p>
    </div>
  )
}

