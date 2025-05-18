import { Card, CardContent } from "@/components/ui/card"
import { RocketIcon, PenToolIcon, BriefcaseIcon } from "lucide-react"

export default function GoalsSection() {
  const goals = [
    {
      icon: <RocketIcon className="h-10 w-10 text-[#5068A9]" />,
      title: "ソロ開発プロジェクトを始める",
      description: "計画から公開まで、一人で開発プロジェクトを進める",
    },
    {
      icon: <PenToolIcon className="h-10 w-10 text-[#5068A9]" />,
      title: "フロントエンドスキルを深める",
      description: "ReactとFigmaなどのデザインツールを使用したフロントエンドスキルを向上させる",
    },
    {
      icon: <BriefcaseIcon className="h-10 w-10 text-[#5068A9]" />,
      title: "実践的な経験を得る",
      description: "インターンシップを通じて、実際のソフトウェア開発環境での実践的なスキルを磨く",
    },
  ]

  return (
    <section id="goals" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#324E7B]">将来の目標</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <Card key={index} className="border-[#86A6DF] hover:shadow-md transition-shadow text-center">
              <CardContent className="pt-8 pb-6 px-4 flex flex-col items-center">
                <div className="mb-4 p-4 rounded-full bg-[#86A6DF]/10">{goal.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#324E7B]">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
