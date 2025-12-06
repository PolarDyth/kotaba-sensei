"use client"

import * as React from "react"
import { TextbookSelector } from "./textbook-selector"
import { StudyModeSelector } from "./study-mode-selector"
import { DifficultySlider } from "./difficulty-slider"
import { UIJapaneseSlider } from "./ui-japanese-slider"
import { Textbook, Chapter, StudyMode, JLPTLevel } from "@/lib/tutor-data"

interface StudyControlsProps {
  currentTextbook: Textbook
  currentChapter: Chapter
  currentMode: StudyMode
  difficultyLevel: JLPTLevel
  uiJapaneseLevel: number
  onTextbookChange: (textbook: Textbook) => void
  onChapterChange: (chapter: Chapter) => void
  onModeChange: (mode: StudyMode) => void
  onDifficultyChange: (level: JLPTLevel) => void
  onUIJapaneseChange: (level: number) => void
}

export function StudyControls({
  currentTextbook,
  currentChapter,
  currentMode,
  difficultyLevel,
  uiJapaneseLevel,
  onTextbookChange,
  onChapterChange,
  onModeChange,
  onDifficultyChange,
  onUIJapaneseChange,
}: StudyControlsProps) {
  return (
    <div className="space-y-5">
      {/* Textbook & Chapters */}
      <div>
        <TextbookSelector
          currentTextbook={currentTextbook}
          currentChapter={currentChapter}
          onTextbookChange={onTextbookChange}
          onChapterChange={onChapterChange}
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* Study Mode */}
      <div>
        <StudyModeSelector
          currentMode={currentMode}
          onModeChange={onModeChange}
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* Difficulty */}
      <div>
        <DifficultySlider
          level={difficultyLevel}
          onLevelChange={onDifficultyChange}
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* UI Japanese Level */}
      <div>
        <UIJapaneseSlider
          level={uiJapaneseLevel}
          onLevelChange={onUIJapaneseChange}
        />
      </div>
    </div>
  )
}
