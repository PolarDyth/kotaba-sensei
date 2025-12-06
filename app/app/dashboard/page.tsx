"use client"

import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { Target, Flame, BookOpen, TrendingUp } from "lucide-react"

import { getMockDashboardData, getTimeBasedGreeting } from "@/lib/mock-data"
import { StatCard } from "@/components/app/stat-card"
import { ProgressBar } from "@/components/app/progress-bar"
import { WeeklyChart } from "@/components/app/weekly-chart"
import { RecentMistakes } from "@/components/app/recent-mistakes"
import { ResumeSession } from "@/components/app/resume-session"
import { TodaySummary } from "@/components/app/today-summary"
import { WeeklyFocus } from "@/components/app/weekly-focus"

export default function DashboardPage() {
  const { data: session } = useSession()
  const firstName = session?.user?.name?.split(" ")[0] || "Learner"

  // Get mock data (can be replaced with real API calls later)
  const dashboardData = getMockDashboardData()

  // Get time-based greeting
  const greeting = getTimeBasedGreeting()

  // Calculate progress percentage for Today's Goal
  const goalProgress = Math.round(
    (dashboardData.minutesStudiedToday / dashboardData.dailyGoalMinutes) * 100
  )

  return (
    <div className="space-y-6">
      {/* Welcome Section with Dynamic Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-2"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="text-primary">{greeting.japanese}</span>
          <span className="text-text-primary">, {firstName}!</span>
        </h1>
        <p className="text-text-secondary text-lg">
          Ready to continue your Japanese journey? Let&apos;s make today count.
        </p>
      </motion.div>

      {/* Resume Last Session Card */}
      <ResumeSession session={dashboardData.lastSession} delay={0.05} />

      {/* Stats Row - 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Today's Goal */}
        <StatCard
          title="Today's Goal"
          icon={Target}
          iconColor="text-primary"
          delay={0.1}
        >
          <div className="text-2xl font-bold text-text-primary">
            {dashboardData.minutesStudiedToday} / {dashboardData.dailyGoalMinutes}{" "}
            <span className="text-base font-normal text-text-secondary">min</span>
          </div>
          <ProgressBar value={goalProgress} variant="primary" className="mt-3" />
          <div className="mt-2 text-xs text-text-secondary">
            {goalProgress}% complete
          </div>
        </StatCard>

        {/* Streak */}
        <StatCard
          title="Streak"
          icon={Flame}
          iconColor="text-warning"
          delay={0.15}
        >
          <div className="text-2xl font-bold text-text-primary">
            {dashboardData.streakCurrent}{" "}
            <span className="text-base font-normal text-text-secondary">days</span>
          </div>
          <div className="mt-3 text-xs text-text-secondary">
            Personal best: {dashboardData.streakBest} days
          </div>
        </StatCard>

        {/* Next Chapter */}
        <StatCard
          title="Next Chapter"
          icon={BookOpen}
          iconColor="text-indigo-accent"
          delay={0.2}
        >
          <div className="text-sm font-semibold text-text-primary truncate">
            {dashboardData.nextTextbookName}
          </div>
          <div className="text-xs text-text-secondary mt-1 truncate">
            Ch. {dashboardData.nextChapterNumber}: {dashboardData.nextChapterTitle}
          </div>
          <ProgressBar
            value={dashboardData.nextChapterProgress}
            variant="indigo"
            className="mt-3"
          />
          <div className="mt-2 text-xs text-text-secondary">
            {dashboardData.nextChapterProgress}% complete
          </div>
        </StatCard>

        {/* Words Learned */}
        <StatCard
          title="Words Learned"
          icon={TrendingUp}
          iconColor="text-success"
          delay={0.25}
        >
          <div className="text-2xl font-bold text-text-primary">
            {dashboardData.wordsLearnedTotal}
          </div>
          <div className="mt-3 flex items-center gap-1 text-xs text-success">
            <span>+{dashboardData.wordsLearnedThisWeek}</span>
            <span className="text-text-secondary">this week</span>
          </div>
        </StatCard>
      </div>

      {/* Today's Summary - Full Width */}
      <TodaySummary data={dashboardData.todaySummary} delay={0.3} />

      {/* Analytics Section: Chart + Focus + Mistakes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Chart - takes 2 columns on desktop */}
        <div className="lg:col-span-2">
          <WeeklyChart data={dashboardData.weeklyMinutes} delay={0.35} />
        </div>

        {/* Weekly Focus Insight */}
        <div className="lg:col-span-1">
          <WeeklyFocus data={dashboardData.weeklyFocus} delay={0.4} />
        </div>
      </div>

      {/* Recent Mistakes - Full Width at bottom */}
      <RecentMistakes mistakes={dashboardData.recentMistakes} delay={0.45} />
    </div>
  )
}
