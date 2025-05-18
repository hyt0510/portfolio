"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "自己紹介" },
    { href: "#skills", label: "スキル" },
    { href: "#projects", label: "プロジェクト" },
    { href: "#experience", label: "経験" },
    { href: "#goals", label: "目標" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#324E7B]">
          Portfolio
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? "text-[#324E7B]" : "text-white"}`}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-2 px-4 text-[#324E7B] hover:bg-[#86A6DF]/10 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-2 bg-[#324E7B] hover:bg-[#324E7B]/90">お問い合わせ</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#324E7B] hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className={`ml-4 ${
                isScrolled ? "bg-[#324E7B] hover:bg-[#324E7B]/90" : "bg-white text-[#324E7B] hover:bg-white/90"
              }`}
            >
              お問い合わせ
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
