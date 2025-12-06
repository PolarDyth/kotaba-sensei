"use client"

import { motion } from "framer-motion"
import { BookOpen, ChevronRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const textbooks = [
  {
    id: "genki-1",
    title: "Genki I",
    description: "An Integrated Course in Elementary Japanese",
    chapters: 12,
    level: "Beginner",
  },
  {
    id: "genki-2",
    title: "Genki II",
    description: "An Integrated Course in Elementary Japanese",
    chapters: 11,
    level: "Elementary",
  },
  {
    id: "tobira",
    title: "Tobira",
    description: "Gateway to Advanced Japanese",
    chapters: 15,
    level: "Intermediate",
  },
  {
    id: "minna",
    title: "Minna no Nihongo",
    description: "Japanese for Everyone",
    chapters: 25,
    level: "Beginner",
  },
]

export default function TextbookPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-text-primary">Textbooks</h1>
        <p className="mt-2 text-text-secondary">
          Choose a textbook to study with your AI tutor
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {textbooks.map((textbook, index) => (
          <motion.div
            key={textbook.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          >
            <Card className="group hover:border-primary/20 transition-all cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <BookOpen className="size-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {textbook.level}
                  </span>
                </div>
                <CardTitle className="text-xl">{textbook.title}</CardTitle>
                <CardDescription>{textbook.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    {textbook.chapters} chapters
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Start learning
                    <ChevronRight className="size-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Card className="border-dashed border-white/10">
          <CardContent className="py-8 text-center">
            <p className="text-text-secondary">
              More textbooks coming soon! Request your favorite textbook to be added.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

