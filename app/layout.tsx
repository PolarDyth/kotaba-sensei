import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "KotobaSensei - AI Japanese Learning Tutor",
  description:
    "An AI Japanese tutor that knows your textbook, tracks your progress, and slowly turns your interface into Japanese.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
