import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UsersIcon, CodeIcon, TrophyIcon } from "lucide-react"

export default function TeamExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#324E7B]">チームプロジェクト＆大会</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-[#86A6DF] hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-[#324E7B]">
                <UsersIcon className="mr-2 h-5 w-5 text-[#5068A9]" />
                授業チームプロジェクト
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5068A9] mr-2">•</span>
                  <span>学校のカリキュラムの一環としてGitを使用した共同開発に参加</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5068A9] mr-2">•</span>
                  <span>チーム環境でのコードレビューと責任共有に従事</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#86A6DF] hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-[#324E7B]">
                <CodeIcon className="mr-2 h-5 w-5 text-[#5068A9]" />
                ハッカソン経験
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#5068A9] mr-2">•</span>
                  <span>複数のハッカソンに参加</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5068A9] mr-2">•</span>
                  <span>迅速なプロトタイピング、設計、実装の経験を獲得</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5068A9] mr-2">•</span>
                  <span>UIデザインとユーザビリティ改善に焦点</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#86A6DF] hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-[#324E7B]">
                <TrophyIcon className="mr-2 h-5 w-5 text-[#5068A9]" />
                PCコンテスト
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-medium mb-1">PC甲子園（全国高校プログラミングコンテスト）</h4>
                <p className="text-gray-700 mb-2">この全国大会に参加</p>
                <Badge className="bg-[#324E7B]">決勝進出</Badge>
              </div>

              {/* 他のコンテストがあれば追加できます */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
