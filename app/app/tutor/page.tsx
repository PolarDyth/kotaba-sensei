"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronLeft,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react"
import {
  getMockTutorState,
  Textbook,
  Chapter,
  StudyMode,
  JLPTLevel,
  ChatMessage,
} from "@/lib/tutor-data"
import { StudyControls } from "@/components/tutor/study-controls"
import { TutorChat } from "@/components/tutor/tutor-chat"
import { StudyPanel } from "@/components/tutor/study-panel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function TutorPage() {
  // Initialize state from mock data
  const initialState = getMockTutorState()

  const [currentTextbook, setCurrentTextbook] = React.useState<Textbook>(
    initialState.currentTextbook
  )
  const [currentChapter, setCurrentChapter] = React.useState<Chapter>(
    initialState.currentChapter
  )
  const [currentMode, setCurrentMode] = React.useState<StudyMode>(
    initialState.currentMode
  )
  const [difficultyLevel, setDifficultyLevel] = React.useState<JLPTLevel>(
    initialState.difficultyLevel
  )
  const [uiJapaneseLevel, setUIJapaneseLevel] = React.useState<number>(
    initialState.uiJapaneseLevel
  )
  const [messages, setMessages] = React.useState<ChatMessage[]>(
    initialState.messages
  )
  const [notes, setNotes] = React.useState<string>(initialState.notes)

  // Sidebar states
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = React.useState(false) // Mobile overlay
  const [isRightSidebarOpen, setIsRightSidebarOpen] = React.useState(false) // Mobile overlay
  const [isLeftCollapsed, setIsLeftCollapsed] = React.useState(false) // Desktop collapse
  const [isRightCollapsed, setIsRightCollapsed] = React.useState(false) // Desktop collapse

  // Handle textbook change - also update current chapter
  const handleTextbookChange = (textbook: Textbook) => {
    setCurrentTextbook(textbook)
    setCurrentChapter(textbook.chapters[0])
  }

  // Handle sending a message
  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      timestamp: new Date(),
      content,
    }
    setMessages([...messages, newMessage])

    // Simulate AI response (in real app, this would call an API)
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        timestamp: new Date(),
        japanese: "いい質問ですね！",
        romaji: "Ii shitsumon desu ne!",
        english: "That's a good question! Let me help you with that.",
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {/* Mobile Header Bar */}
      <div className="lg:hidden flex items-center justify-between p-3 bg-surface border-b border-white/5">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setIsLeftSidebarOpen(true)}
          className="text-text-secondary"
        >
          <Menu className="size-5" />
        </Button>
        <span className="text-sm font-medium text-text-primary">
          {currentTextbook.name} – Ch. {currentChapter.number}
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setIsRightSidebarOpen(true)}
          className="text-text-secondary"
        >
          <ChevronLeft className="size-5" />
        </Button>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Desktop */}
        <div
          className={cn(
            "hidden lg:flex flex-col border-r border-white/5 bg-surface/30 transition-all duration-300",
            isLeftCollapsed ? "w-12" : "w-64 xl:w-72"
          )}
        >
          {/* Collapse toggle */}
          <div className="flex items-center justify-end p-2 border-b border-white/5">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
              className="text-text-secondary hover:text-text-primary"
              title={isLeftCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isLeftCollapsed ? (
                <PanelLeftOpen className="size-4" />
              ) : (
                <PanelLeftClose className="size-4" />
              )}
            </Button>
          </div>

          {/* Content */}
          {!isLeftCollapsed && (
            <div className="flex-1 overflow-y-auto p-4">
              <StudyControls
                currentTextbook={currentTextbook}
                currentChapter={currentChapter}
                currentMode={currentMode}
                difficultyLevel={difficultyLevel}
                uiJapaneseLevel={uiJapaneseLevel}
                onTextbookChange={handleTextbookChange}
                onChapterChange={setCurrentChapter}
                onModeChange={setCurrentMode}
                onDifficultyChange={setDifficultyLevel}
                onUIJapaneseChange={setUIJapaneseLevel}
              />
            </div>
          )}

          {/* Collapsed state icons */}
          {isLeftCollapsed && (
            <div className="flex-1 flex flex-col items-center gap-2 py-4">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setIsLeftCollapsed(false)}
                className="text-text-secondary hover:text-primary"
                title="Study Controls"
              >
                <Menu className="size-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Left Sidebar - Mobile Overlay */}
        <AnimatePresence>
          {isLeftSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsLeftSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-background border-r border-white/5 z-50 p-4 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Study Controls
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setIsLeftSidebarOpen(false)}
                  >
                    <X className="size-5" />
                  </Button>
                </div>
                <StudyControls
                  currentTextbook={currentTextbook}
                  currentChapter={currentChapter}
                  currentMode={currentMode}
                  difficultyLevel={difficultyLevel}
                  uiJapaneseLevel={uiJapaneseLevel}
                  onTextbookChange={handleTextbookChange}
                  onChapterChange={setCurrentChapter}
                  onModeChange={setCurrentMode}
                  onDifficultyChange={setDifficultyLevel}
                  onUIJapaneseChange={setUIJapaneseLevel}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Center - Chat Area */}
        <div className="flex-1 p-4 overflow-hidden min-w-0">
          <TutorChat
            messages={messages}
            currentTextbook={currentTextbook}
            currentChapter={currentChapter}
            currentMode={currentMode}
            onSendMessage={handleSendMessage}
          />
        </div>

        {/* Right Sidebar - Desktop */}
        <div
          className={cn(
            "hidden lg:flex flex-col border-l border-white/5 bg-surface/30 transition-all duration-300",
            isRightCollapsed ? "w-12" : "w-56 xl:w-64"
          )}
        >
          {/* Collapse toggle */}
          <div className="flex items-center justify-start p-2 border-b border-white/5">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setIsRightCollapsed(!isRightCollapsed)}
              className="text-text-secondary hover:text-text-primary"
              title={isRightCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isRightCollapsed ? (
                <PanelRightOpen className="size-4" />
              ) : (
                <PanelRightClose className="size-4" />
              )}
            </Button>
          </div>

          {/* Content */}
          {!isRightCollapsed && (
            <div className="flex-1 overflow-y-auto p-4">
              <StudyPanel
                dailyGoalMinutes={initialState.dailyGoalMinutes}
                minutesStudiedToday={initialState.minutesStudiedToday}
                vocab={initialState.vocab}
                grammar={initialState.grammar}
                notes={notes}
                onNotesChange={setNotes}
              />
            </div>
          )}

          {/* Collapsed state icons */}
          {isRightCollapsed && (
            <div className="flex-1 flex flex-col items-center gap-2 py-4">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setIsRightCollapsed(false)}
                className="text-text-secondary hover:text-primary"
                title="Study Panel"
              >
                <ChevronLeft className="size-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Right Sidebar - Mobile Overlay */}
        <AnimatePresence>
          {isRightSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsRightSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="lg:hidden fixed right-0 top-0 bottom-0 w-80 bg-background border-l border-white/5 z-50 p-4 overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Study Panel
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setIsRightSidebarOpen(false)}
                  >
                    <X className="size-5" />
                  </Button>
                </div>
                <StudyPanel
                  dailyGoalMinutes={initialState.dailyGoalMinutes}
                  minutesStudiedToday={initialState.minutesStudiedToday}
                  vocab={initialState.vocab}
                  grammar={initialState.grammar}
                  notes={notes}
                  onNotesChange={setNotes}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
