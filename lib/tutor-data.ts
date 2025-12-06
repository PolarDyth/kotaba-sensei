// Mock data for Tutor page - structured for easy connection to real data later

// ============================================
// TYPES
// ============================================

export type StudyMode = "free-chat" | "correction" | "quiz" | "listening"
export type VocabStatus = "known" | "learning" | "difficult"
export type MessageSender = "ai" | "user"
export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1"

export interface Chapter {
  id: string
  number: number
  title: string
  titleJp?: string
  progress: number // 0-100
}

export interface Textbook {
  id: string
  name: string
  nameJp?: string
  chapters: Chapter[]
}

export interface StudyModeInfo {
  id: StudyMode
  label: string
  labelJp: string
  description: string
  icon: string // Icon name from lucide-react
}

export interface ChatMessage {
  id: string
  sender: MessageSender
  timestamp: Date
  // For AI messages
  japanese?: string
  romaji?: string
  english?: string
  // For user messages
  content?: string
  // Optional correction info
  isCorrection?: boolean
  correctedText?: string
  explanation?: string
}

export interface VocabItem {
  id: string
  word: string
  reading: string
  meaning: string
  status: VocabStatus
  partOfSpeech?: string
}

export interface GrammarPoint {
  id: string
  structure: string
  structureReading?: string
  description: string
  example?: string
  exampleReading?: string
  exampleMeaning?: string
}

export interface TutorState {
  currentTextbook: Textbook
  currentChapter: Chapter
  currentMode: StudyMode
  difficultyLevel: JLPTLevel
  uiJapaneseLevel: number // 0-100
  dailyGoalMinutes: number
  minutesStudiedToday: number
  messages: ChatMessage[]
  vocab: VocabItem[]
  grammar: GrammarPoint[]
  notes: string
}

// ============================================
// MOCK DATA
// ============================================

export const studyModes: StudyModeInfo[] = [
  {
    id: "free-chat",
    label: "Free Chat",
    labelJp: "自由会話",
    description: "Practice natural conversation with your AI tutor",
    icon: "MessageSquare",
  },
  {
    id: "correction",
    label: "Correction",
    labelJp: "添削",
    description: "Write sentences and get detailed corrections",
    icon: "CheckCircle",
  },
  {
    id: "quiz",
    label: "Quiz",
    labelJp: "クイズ",
    description: "Test your knowledge with interactive drills",
    icon: "HelpCircle",
  },
  {
    id: "listening",
    label: "Listening",
    labelJp: "リスニング",
    description: "Practice listening comprehension",
    icon: "Headphones",
  },
]

export const textbooks: Textbook[] = [
  {
    id: "genki-1",
    name: "Genki I",
    nameJp: "げんき I",
    chapters: [
      { id: "g1-1", number: 1, title: "New Friends", titleJp: "あたらしいともだち", progress: 100 },
      { id: "g1-2", number: 2, title: "Shopping", titleJp: "かいもの", progress: 100 },
      { id: "g1-3", number: 3, title: "Making a Date", titleJp: "デートのやくそく", progress: 45 },
      { id: "g1-4", number: 4, title: "The First Date", titleJp: "はじめてのデート", progress: 0 },
      { id: "g1-5", number: 5, title: "A Trip to Okinawa", titleJp: "おきなわりょこう", progress: 0 },
      { id: "g1-6", number: 6, title: "A Day in Robert's Life", titleJp: "ロバートさんのいちにち", progress: 0 },
    ],
  },
  {
    id: "genki-2",
    name: "Genki II",
    nameJp: "げんき II",
    chapters: [
      { id: "g2-13", number: 13, title: "Looking for a Part-time Job", progress: 0 },
      { id: "g2-14", number: 14, title: "Valentine's Day", progress: 0 },
      { id: "g2-15", number: 15, title: "A Trip to Nagano", progress: 0 },
    ],
  },
  {
    id: "tobira",
    name: "Tobira",
    nameJp: "とびら",
    chapters: [
      { id: "t-1", number: 1, title: "Japanese Geography", progress: 0 },
      { id: "t-2", number: 2, title: "Japanese Language", progress: 0 },
    ],
  },
]

export const mockVocab: VocabItem[] = [
  { id: "v1", word: "約束", reading: "やくそく", meaning: "promise, appointment", status: "known", partOfSpeech: "noun" },
  { id: "v2", word: "映画", reading: "えいが", meaning: "movie, film", status: "known", partOfSpeech: "noun" },
  { id: "v3", word: "時間", reading: "じかん", meaning: "time, hour", status: "learning", partOfSpeech: "noun" },
  { id: "v4", word: "場所", reading: "ばしょ", meaning: "place, location", status: "learning", partOfSpeech: "noun" },
  { id: "v5", word: "待つ", reading: "まつ", meaning: "to wait", status: "difficult", partOfSpeech: "verb" },
  { id: "v6", word: "会う", reading: "あう", meaning: "to meet", status: "learning", partOfSpeech: "verb" },
  { id: "v7", word: "楽しい", reading: "たのしい", meaning: "fun, enjoyable", status: "known", partOfSpeech: "i-adj" },
  { id: "v8", word: "忙しい", reading: "いそがしい", meaning: "busy", status: "difficult", partOfSpeech: "i-adj" },
]

export const mockGrammar: GrammarPoint[] = [
  {
    id: "gr1",
    structure: "～ましょう",
    structureReading: "mashou",
    description: "Let's do ~ (suggestion/invitation)",
    example: "映画を見ましょう",
    exampleReading: "eiga wo mimashou",
    exampleMeaning: "Let's watch a movie",
  },
  {
    id: "gr2",
    structure: "～ませんか",
    structureReading: "masen ka",
    description: "Won't you ~? / Would you like to ~? (polite invitation)",
    example: "一緒に食べませんか",
    exampleReading: "issho ni tabemasen ka",
    exampleMeaning: "Would you like to eat together?",
  },
  {
    id: "gr3",
    structure: "～たい",
    structureReading: "tai",
    description: "Want to do ~ (expressing desire)",
    example: "日本に行きたいです",
    exampleReading: "nihon ni ikitai desu",
    exampleMeaning: "I want to go to Japan",
  },
  {
    id: "gr4",
    structure: "～てください",
    structureReading: "te kudasai",
    description: "Please do ~ (polite request)",
    example: "ここに書いてください",
    exampleReading: "koko ni kaite kudasai",
    exampleMeaning: "Please write here",
  },
]

export const mockMessages: ChatMessage[] = [
  {
    id: "m1",
    sender: "ai",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    japanese: "こんにちは！今日は何を勉強しましょうか？",
    romaji: "Konnichiwa! Kyou wa nani wo benkyou shimashou ka?",
    english: "Hello! What shall we study today?",
  },
  {
    id: "m2",
    sender: "user",
    timestamp: new Date(Date.now() - 4 * 60 * 1000),
    content: "I want to practice making plans with friends",
  },
  {
    id: "m3",
    sender: "ai",
    timestamp: new Date(Date.now() - 3 * 60 * 1000),
    japanese: "いいですね！では、約束を作る練習をしましょう。まず、「～ましょう」と「～ませんか」を使ってみましょう。",
    romaji: "Ii desu ne! Dewa, yakusoku wo tsukuru renshuu wo shimashou. Mazu, '~mashou' to '~masen ka' wo tsukatte mimashou.",
    english: "Great! Let's practice making appointments. First, let's try using '~mashou' (let's do) and '~masen ka' (won't you).",
  },
  {
    id: "m4",
    sender: "user",
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    content: "週末に映画を見ますか？",
  },
  {
    id: "m5",
    sender: "ai",
    timestamp: new Date(Date.now() - 1 * 60 * 1000),
    japanese: "いい文章ですね！でも、誘うときは「～ませんか」を使うともっと自然です。",
    romaji: "Ii bunshou desu ne! Demo, sasou toki wa '~masen ka' wo tsukau to motto shizen desu.",
    english: "Good sentence! But when inviting someone, using '~masen ka' sounds more natural.",
    isCorrection: true,
    correctedText: "週末に映画を見ませんか？",
    explanation: "When making invitations, ～ませんか is more polite and natural than ～ますか, which sounds more like a simple question.",
  },
]

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getMockTutorState(): TutorState {
  const currentTextbook = textbooks[0]
  const currentChapter = currentTextbook.chapters[2] // Chapter 3

  return {
    currentTextbook,
    currentChapter,
    currentMode: "free-chat",
    difficultyLevel: "N5",
    uiJapaneseLevel: 30,
    dailyGoalMinutes: 60,
    minutesStudiedToday: 45,
    messages: mockMessages,
    vocab: mockVocab,
    grammar: mockGrammar,
    notes: "Remember: ～ませんか is for invitations, ～ましょう is for suggestions.\n\nPractice making plans for this weekend!",
  }
}

export function getStudyModeInfo(mode: StudyMode): StudyModeInfo {
  return studyModes.find((m) => m.id === mode) || studyModes[0]
}

export function getVocabStatusColor(status: VocabStatus): string {
  switch (status) {
    case "known":
      return "bg-success/20 text-success"
    case "learning":
      return "bg-warning/20 text-warning"
    case "difficult":
      return "bg-danger/20 text-danger"
  }
}

export function getVocabStatusLabel(status: VocabStatus): string {
  switch (status) {
    case "known":
      return "Known"
    case "learning":
      return "Learning"
    case "difficult":
      return "Difficult"
  }
}

export const jlptLevels: JLPTLevel[] = ["N5", "N4", "N3", "N2", "N1"]

export function getJLPTLevelIndex(level: JLPTLevel): number {
  return jlptLevels.indexOf(level)
}

