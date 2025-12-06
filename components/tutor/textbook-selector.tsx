"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronDown, BookOpen, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Textbook, Chapter, textbooks } from "@/lib/tutor-data"
import { ProgressBar } from "@/components/app/progress-bar"

interface TextbookSelectorProps {
  currentTextbook: Textbook
  currentChapter: Chapter
  onTextbookChange: (textbook: Textbook) => void
  onChapterChange: (chapter: Chapter) => void
}

export function TextbookSelector({
  currentTextbook,
  currentChapter,
  onTextbookChange,
  onChapterChange,
}: TextbookSelectorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  return (
    <div>
      {/* Textbook Dropdown */}
      <div className="relative mb-3">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between gap-2 p-2.5 rounded-lg bg-surface-alt/50 border border-white/5 hover:border-white/10 hover:bg-surface-alt transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="size-6 rounded bg-primary/10 flex items-center justify-center shrink-0">
              <BookOpen className="size-3.5 text-primary" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs font-medium text-text-primary truncate">
                {currentTextbook.name}
              </p>
              {currentTextbook.nameJp && (
                <p className="text-[10px] text-text-secondary/70 truncate">
                  {currentTextbook.nameJp}
                </p>
              )}
            </div>
          </div>
          <ChevronDown
            className={cn(
              "size-3.5 text-text-secondary transition-transform shrink-0",
              isDropdownOpen && "rotate-180"
            )}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-1 bg-surface border border-white/10 rounded-lg shadow-lg z-10 overflow-hidden"
          >
            {textbooks.map((textbook) => (
              <button
                key={textbook.id}
                onClick={() => {
                  onTextbookChange(textbook)
                  setIsDropdownOpen(false)
                }}
                className={cn(
                  "w-full flex items-center gap-2 p-2.5 hover:bg-surface-alt transition-colors",
                  textbook.id === currentTextbook.id && "bg-primary/5"
                )}
              >
                <div className="size-5 rounded flex items-center justify-center shrink-0">
                  {textbook.id === currentTextbook.id ? (
                    <Check className="size-3 text-primary" />
                  ) : (
                    <BookOpen className="size-3 text-text-secondary/50" />
                  )}
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs text-text-primary truncate">{textbook.name}</p>
                  {textbook.nameJp && (
                    <p className="text-[10px] text-text-secondary/70 truncate">
                      {textbook.nameJp}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Chapter List */}
      <div>
        <p className="text-[10px] font-medium text-text-secondary/70 uppercase tracking-wider mb-2 px-1">
          Chapters
        </p>
        <div className="space-y-1 max-h-[320px] overflow-y-auto pr-1">
          {currentTextbook.chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => onChapterChange(chapter)}
              className={cn(
                "w-full flex items-start gap-2 p-2 rounded-lg transition-all text-left group",
                chapter.id === currentChapter.id
                  ? "bg-primary/5 border border-primary/20"
                  : "hover:bg-surface-alt/30 border border-transparent"
              )}
            >
              <span
                className={cn(
                  "size-5 rounded-full flex items-center justify-center text-[10px] font-medium shrink-0 mt-0.5",
                  chapter.id === currentChapter.id
                    ? "bg-primary text-white"
                    : chapter.progress === 100
                    ? "bg-success/15 text-success"
                    : "bg-surface text-text-secondary/50"
                )}
              >
                {chapter.progress === 100 ? (
                  <Check className="size-2.5" />
                ) : (
                  chapter.number
                )}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className={cn(
                    "text-xs font-medium truncate",
                    chapter.id === currentChapter.id
                      ? "text-primary"
                      : "text-text-primary/90 group-hover:text-text-primary"
                  )}
                >
                  {chapter.title}
                </p>
                {chapter.titleJp && (
                  <p className="text-[10px] text-text-secondary/60 truncate">
                    {chapter.titleJp}
                  </p>
                )}
                <div className="mt-1.5">
                  <ProgressBar
                    value={chapter.progress}
                    variant={chapter.id === currentChapter.id ? "primary" : "indigo"}
                    size="sm"
                    showAnimation={false}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
