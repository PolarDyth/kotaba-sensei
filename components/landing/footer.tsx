import Link from "next/link"

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">言</span>
            </div>
            <span className="text-sm text-text-secondary">
              © {new Date().getFullYear()} KotobaSensei. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

