"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "/app/dashboard", label: "Dashboard" },
  { href: "/app/tutor", label: "Tutor" },
  { href: "/app/textbook", label: "Textbook" },
  { href: "/app/progress", label: "Progress" },
]

export function SiteNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-white/5">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={link.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-surface-alt/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Language toggle placeholder */}
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-text-secondary hover:text-text-primary"
          >
            <Globe className="size-4" />
            <span className="sr-only">Change language</span>
          </Button>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Auth buttons - Desktop */}
          <div className="hidden sm:flex items-center gap-2 ml-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Log in</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button size="sm" asChild>
                <Link href="/register">Get started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden text-text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-alt rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2 border-t border-white/5">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button className="justify-start" asChild>
                  <Link href="/register">Get started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
