"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { LogOut, User, Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/app/dashboard", label: "Dashboard" },
  { href: "/app/tutor", label: "Tutor" },
  { href: "/app/textbook", label: "Textbook" },
  { href: "/app/progress", label: "Progress" },
]

export function AppNavbar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [userMenuOpen, setUserMenuOpen] = React.useState(false)
  const userMenuRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    signOut({ callbackUrl: "/" })
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-white/5">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/app/dashboard" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-white">言</span>
            </div>
            <span className="text-lg font-semibold text-text-primary">
              KotobaSensei
            </span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <motion.div key={link.href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm rounded-lg transition-colors",
                    isActive
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-text-secondary hover:text-text-primary hover:bg-surface-alt/50"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden sm:block relative" ref={userMenuRef}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary"
            >
              <div className="flex size-7 items-center justify-center rounded-full bg-primary/20 text-primary">
                <User className="size-4" />
              </div>
              <span className="hidden lg:inline max-w-[120px] truncate">
                {session?.user?.name || session?.user?.email?.split("@")[0] || "User"}
              </span>
              <ChevronDown className={cn("size-4 transition-transform", userMenuOpen && "rotate-180")} />
            </Button>

            <AnimatePresence>
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-surface border border-white/10 shadow-lg shadow-black/20"
                >
                  <div className="p-2">
                    <div className="px-3 py-2 border-b border-white/5 mb-2">
                      <p className="text-sm font-medium text-text-primary truncate">
                        {session?.user?.name || "User"}
                      </p>
                      <p className="text-xs text-text-secondary truncate">
                        {session?.user?.email}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-alt rounded-lg transition-colors"
                    >
                      <LogOut className="size-4" />
                      Log out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden text-text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-surface"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 text-sm rounded-lg transition-colors",
                      isActive
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-alt"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              
              <div className="pt-4 mt-4 border-t border-white/5">
                <div className="px-4 py-2 mb-2">
                  <p className="text-sm font-medium text-text-primary truncate">
                    {session?.user?.name || "User"}
                  </p>
                  <p className="text-xs text-text-secondary truncate">
                    {session?.user?.email}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-text-secondary hover:text-text-primary"
                  onClick={handleLogout}
                >
                  <LogOut className="size-4 mr-2" />
                  Log out
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

