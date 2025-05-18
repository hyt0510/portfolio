import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ポートフォリオ | [杉本隼都]",
  description: "UI/UXデザインに情熱を持つ学生エンジニアのポートフォリオサイト",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
