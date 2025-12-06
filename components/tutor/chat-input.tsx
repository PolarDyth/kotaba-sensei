"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mic, Send, Lightbulb, CheckSquare, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ChatInputProps {
  onSendMessage: (message: string) => void
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = React.useState("")
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage("")
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  // Auto-resize textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    const textarea = e.target
    textarea.style.height = "auto"
    textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-surface border-t border-white/5"
    >
      {/* Quick action buttons */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs gap-1.5 text-text-secondary hover:text-warning"
        >
          <Lightbulb className="size-3.5" />
          Hint
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs gap-1.5 text-text-secondary hover:text-success"
        >
          <CheckSquare className="size-3.5" />
          Answer
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs gap-1.5 text-text-secondary hover:text-indigo-accent"
        >
          <BookOpen className="size-3.5" />
          Grammar
        </Button>
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-end gap-3">
          {/* Microphone button */}
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="shrink-0 text-text-secondary hover:text-primary"
            title="Voice input (coming soon)"
          >
            <Mic className="size-5" />
          </Button>

          {/* Text input */}
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Type in English or Japanese..."
              rows={1}
              className={cn(
                "w-full resize-none rounded-xl bg-surface-alt border border-white/5",
                "px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50",
                "focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10",
                "transition-colors"
              )}
              style={{ minHeight: "48px", maxHeight: "150px" }}
            />
          </div>

          {/* Send button */}
          <Button
            type="submit"
            size="icon"
            disabled={!message.trim()}
            className="shrink-0"
          >
            <Send className="size-4" />
          </Button>
        </div>

        <p className="text-xs text-text-secondary/50 mt-2 text-center">
          Press Enter to send, Shift+Enter for new line
        </p>
      </form>
    </motion.div>
  )
}

