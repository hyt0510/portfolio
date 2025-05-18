import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeIcon, LayoutIcon, SmartphoneIcon, DatabaseIcon, GitBranchIcon } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    {
      category: "プログラミング",
      icon: <CodeIcon className="h-6 w-6" />,
      items: [
        { name: "C++", note: "学校で3年間使用", level: 4 },
        { name: "Python", note: "スクリプト作成に時々使用", level: 2 },
      ],
    },
    {
      category: "フロントエンド",
      icon: <LayoutIcon className="h-6 w-6" />,
      items: [{ name: "React", note: "数回使用、UIデザインに興味あり", level: 3 }],
    },
    {
      category: "モバイル",
      icon: <SmartphoneIcon className="h-6 w-6" />,
      items: [
        { name: "Kotlin", note: "授業プロジェクトとハッカソンで使用", level: 3 },
        { name: "Jetpack Compose", note: "授業プロジェクトとハッカソンで使用", level: 3 },
      ],
    },
    {
      category: "データベース",
      icon: <DatabaseIcon className="h-6 w-6" />,
      items: [{ name: "SQLite", note: "Jetpack Composeと組み合わせて使用", level: 2 }],
    },
    {
      category: "その他",
      icon: <GitBranchIcon className="h-6 w-6" />,
      items: [
        { name: "Git", note: "チーム開発で使用", level: 3 },
        { name: "GitHub", note: "チーム開発で使用", level: 3 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#324E7B]">スキル</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border-[#86A6DF] hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-[#324E7B]">
                  <span className="mr-2 text-[#5068A9]">{skillGroup.icon}</span>
                  {skillGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex flex-col">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="bg-[#86A6DF]/10 text-[#324E7B] border-[#86A6DF]">
                          {skill.note}
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#324E7B] to-[#5068A9] h-2 rounded-full"
                          style={{ width: `${skill.level * 25}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
