// Mock data for dashboard - structured to map easily to real database fields later

export interface WeeklyMinutes {
  day: string
  minutes: number
}

export interface RecentMistake {
  id: string
  jp: string
  reading?: string
  explanation: string
}

export type StudyMode = "free-chat" | "correction" | "quiz" | "listening"

export interface LastSession {
  textbook: string
  chapter: string
  chapterNumber: number
  mode: StudyMode
  timestamp: Date
}

export interface TodaySummary {
  minutesStudied: number
  messagesExchanged: number
  mistakesCorrected: number
  newWordsLearned: number
}

export interface WeeklyFocus {
  topic: string
  category: string
  description: string
  suggestion: string
  mistakeCount: number
}

export interface DashboardData {
  // Today's goal
  dailyGoalMinutes: number
  minutesStudiedToday: number

  // Streak
  streakCurrent: number
  streakBest: number

  // Next chapter
  nextTextbookName: string
  nextChapterTitle: string
  nextChapterNumber: number
  nextChapterProgress: number

  // Words learned
  wordsLearnedTotal: number
  wordsLearnedThisWeek: number

  // Weekly study data
  weeklyMinutes: WeeklyMinutes[]

  // Recent mistakes
  recentMistakes: RecentMistake[]

  // Last session for resume
  lastSession: LastSession

  // Today's summary
  todaySummary: TodaySummary

  // Weekly focus insight
  weeklyFocus: WeeklyFocus
}

// Mock data for a user - can be replaced with real API calls later
export function getMockDashboardData(): DashboardData {
  return {
    // Today's goal
    dailyGoalMinutes: 60,
    minutesStudiedToday: 45,

    // Streak
    streakCurrent: 12,
    streakBest: 21,

    // Next chapter
    nextTextbookName: "Genki I",
    nextChapterTitle: "Making a Date",
    nextChapterNumber: 3,
    nextChapterProgress: 45,

    // Words learned
    wordsLearnedTotal: 248,
    wordsLearnedThisWeek: 12,

    // Weekly study data (last 7 days)
    weeklyMinutes: [
      { day: "Mon", minutes: 45 },
      { day: "Tue", minutes: 60 },
      { day: "Wed", minutes: 30 },
      { day: "Thu", minutes: 75 },
      { day: "Fri", minutes: 50 },
      { day: "Sat", minutes: 90 },
      { day: "Sun", minutes: 45 },
    ],

    // Recent mistakes
    recentMistakes: [
      {
        id: "1",
        jp: "食べる → 食べた",
        reading: "taberu → tabeta",
        explanation: "Wrong tense: used past tense instead of present",
      },
      {
        id: "2",
        jp: "学校に行きます",
        reading: "gakkou ni ikimasu",
        explanation: "Particle error: used に instead of へ for direction",
      },
      {
        id: "3",
        jp: "私は本が好きです",
        reading: "watashi wa hon ga suki desu",
        explanation: "Correct! This was actually right - good job!",
      },
      {
        id: "4",
        jp: "明日、友達を会います",
        reading: "ashita, tomodachi wo aimasu",
        explanation: "Particle error: 会う takes に not を (友達に会います)",
      },
      {
        id: "5",
        jp: "コーヒーを飲むたい",
        reading: "koohii wo nomutai",
        explanation: "Conjugation error: 飲みたい not 飲むたい (-tai form)",
      },
    ],

    // Last session for resume functionality
    lastSession: {
      textbook: "Genki I",
      chapter: "Making a Date",
      chapterNumber: 3,
      mode: "free-chat",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    },

    // Today's study summary
    todaySummary: {
      minutesStudied: 45,
      messagesExchanged: 23,
      mistakesCorrected: 7,
      newWordsLearned: 5,
    },

    // Weekly focus insight
    weeklyFocus: {
      topic: "Particles: に vs へ",
      category: "Grammar",
      description:
        "You've made 8 particle errors this week, mostly confusing に and へ when expressing direction or destination.",
      suggestion:
        "Try practicing sentences with movement verbs like 行く, 来る, and 帰る. Remember: へ emphasizes direction, に emphasizes destination.",
      mistakeCount: 8,
    },
  }
}

// Utility: Get study mode display info
export function getStudyModeInfo(mode: StudyMode) {
  const modes = {
    "free-chat": { label: "Free Chat", icon: "MessageSquare" },
    correction: { label: "Correction", icon: "CheckCircle" },
    quiz: { label: "Quiz", icon: "HelpCircle" },
    listening: { label: "Listening", icon: "Headphones" },
  }
  return modes[mode]
}

// Utility: Format relative time
export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMins < 60) {
    return `${diffMins} min ago`
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`
  } else {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`
  }
}

// Utility: Get time-based greeting
export function getTimeBasedGreeting(): { japanese: string; romaji: string } {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return { japanese: "おはよう", romaji: "Ohayou" }
  } else if (hour >= 12 && hour < 18) {
    return { japanese: "こんにちは", romaji: "Konnichiwa" }
  } else {
    return { japanese: "こんばんは", romaji: "Konbanwa" }
  }
}
