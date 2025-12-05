import { SiteNavbar } from "@/components/site-navbar"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main>{children}</main>
    </div>
  )
}

