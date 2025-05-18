'use client'

import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import TeamExperienceSection from "@/components/team-experience-section"
import GoalsSection from "@/components/goals-section"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <main className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#324E7B] to-[#5068A9] text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat"></div>
        <div className="z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">こんにちは、</span>
            <span className="text-[#86A6DF]">杉本隼都</span> です
          </h1>
          <p className="text-xl md:text-2xl mb-8">UI/UXデザインに情熱を持つ学生エンジニア</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
            >
              <LinkedinIcon className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
            >
              <MailIcon className="mr-2 h-4 w-4" />
              お問い合わせ
            </Button>
          </div>
          <Link href="#about" className="animate-bounce inline-block">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-12 w-12 border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white"
            >
              <ArrowDownIcon className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 各セクション */}
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TeamExperienceSection />
      <GoalsSection />

      {/* フッター */}
      <footer className="bg-[#324E7B] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© {currentYear} 杉本隼都 - ポートフォリオ</p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="hover:text-[#86A6DF] transition-colors">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="hover:text-[#86A6DF] transition-colors">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-[#86A6DF] transition-colors">
              <MailIcon className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
