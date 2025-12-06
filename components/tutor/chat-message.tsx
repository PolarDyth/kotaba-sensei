"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Volume2, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChatMessage as ChatMessageType } from "@/lib/tutor-data"

interface ChatMessageProps {
  message: ChatMessageType
  index: number
}

export function ChatMessage({ message, index }: ChatMessageProps) {
  const isAI = message.sender === "ai"

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn("flex gap-3 mb-6", isAI ? "justify-start" : "justify-end")}
    >
      {/* AI Avatar */}
      {isAI && (
        <div className="size-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
          <span className="text-[10px] font-semibold text-primary">AI</span>
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={cn(
          "max-w-[70%] rounded-2xl p-4",
          isAI
            ? "bg-surface-alt/80 border border-white/[0.03]"
            : "bg-primary/8 border border-primary/10"
        )}
      >
        {isAI ? (
          // AI Message with Japanese, romaji, English
          <div className="space-y-2.5">
            {/* Japanese */}
            {message.japanese && (
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-text-primary leading-relaxed">
                  {message.japanese}
                </p>
                <button className="shrink-0 p-1 rounded-md hover:bg-surface/50 transition-colors">
                  <Volume2 className="size-3.5 text-text-secondary/60 hover:text-primary" />
                </button>
              </div>
            )}

            {/* Romaji */}
            {message.romaji && (
              <p className="text-xs text-primary/60 italic leading-relaxed">
                {message.romaji}
              </p>
            )}

            {/* English */}
            {message.english && (
              <p className="text-xs text-text-secondary/70 leading-relaxed">
                {message.english}
              </p>
            )}

            {/* Correction block */}
            {message.isCorrection && message.correctedText && (
              <div className="mt-3 p-3 rounded-lg bg-surface/50 border border-white/[0.03]">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <CheckCircle2 className="size-3 text-success" />
                  <span className="text-[10px] font-medium text-success/90 uppercase tracking-wide">
                    Correction
                  </span>
                </div>
                <p className="text-sm font-medium text-success/90 mb-1">
                  {message.correctedText}
                </p>
                {message.explanation && (
                  <p className="text-[11px] text-text-secondary/70 leading-relaxed">
                    {message.explanation}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          // User Message
          <p className="text-sm text-text-primary">{message.content}</p>
        )}
      </div>

      {/* User Avatar placeholder */}
      {!isAI && (
        <div className="size-7 rounded-full bg-indigo-accent/15 flex items-center justify-center shrink-0">
          <span className="text-[10px] font-semibold text-indigo-accent">You</span>
        </div>
      )}
    </motion.div>
  )
}
