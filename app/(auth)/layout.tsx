import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { authOptions } from "@/lib/auth"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  // Redirect logged-in users to dashboard
  if (session) {
    redirect("/app/dashboard")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with logo */}
      <header className="py-6 px-4">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-white">言</span>
            </div>
            <span className="text-lg font-semibold text-text-primary">
              KotobaSensei
            </span>
          </Link>
        </div>
      </header>

      {/* Centered content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>

      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-accent/[0.04] blur-[80px]" />
      </div>
    </div>
  )
}
