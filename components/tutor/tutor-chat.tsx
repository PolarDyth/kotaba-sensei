"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { ChatMessage as ChatMessageType, Textbook, Chapter, StudyMode, getStudyModeInfo } from "@/lib/tutor-data"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"

interface TutorChatProps {
  messages: ChatMessageType[]
  currentTextbook: Textbook
  currentChapter: Chapter
  currentMode: StudyMode
  onSendMessage: (message: string) => void
}

export function TutorChat({
  messages,
  currentTextbook,
  currentChapter,
  currentMode,
  onSendMessage,
}: TutorChatProps) {
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const modeInfo = getStudyModeInfo(currentMode)

  // Auto-scroll to bottom when messages change
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col h-full bg-surface rounded-2xl border border-white/5 overflow-hidden"
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-surface-alt/50">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageSquare className="size-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">
              {modeInfo.label}
            </p>
            <p className="text-xs text-text-secondary">
              {currentTextbook.name} – Chapter {currentChapter.number}:{" "}
              {currentChapter.title}
            </p>
          </div>
        </div>
        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
          {modeInfo.labelJp}
        </span>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageSquare className="size-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Start a Conversation
            </h3>
            <p className="text-sm text-text-secondary max-w-md">
              Type a message below to begin your {modeInfo.label.toLowerCase()}{" "}
              session. Your AI tutor is ready to help you practice!
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <ChatMessage key={message.id} message={message} index={index} />
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={onSendMessage} />
    </motion.div>
  )
}

