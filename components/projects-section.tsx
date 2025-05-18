import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#324E7B]">プロジェクト</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-[#86A6DF] hover:shadow-md transition-shadow overflow-hidden flex flex-col">
            <div className="h-48 bg-[#324E7B] relative">
              <img
                src="/placeholder.svg?height=300&width=600"
                alt="Clear Talk RPG プロジェクト画像"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#324E7B] to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white">Clear Talk RPG</h3>
                <p className="text-white/80 text-sm">テキストベースRPGアプリケーション</p>
              </div>
            </div>

            <CardContent className="flex-grow py-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#324E7B] hover:bg-[#324E7B]/90">Kotlin</Badge>
                <Badge className="bg-[#5068A9] hover:bg-[#5068A9]/90">Jetpack Compose</Badge>
                <Badge className="bg-[#86A6DF] hover:bg-[#86A6DF]/90 text-[#324E7B]">SQLite</Badge>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-[#324E7B]">概要</h4>
                  <p className="text-gray-600">
                    ユーザーが複数のシナリオを選択してプレイできるテキストベースのRPGアプリケーション。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#324E7B]">役割</h4>
                  <p className="text-gray-600">UIデザイン＆開発（シナリオ選択画面）</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#324E7B]">ハイライト</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>各シナリオの特徴と推定所要時間を明確に表示するUIを設計</li>
                    <li>直感的なナビゲーションを向上させるためのカードベースのレイアウトとカラーコーディングを採用</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[#324E7B]">チームワーク</h4>
                  <p className="text-gray-600">役割分担のあるチームの一員として働き、主にUI実装を担当。</p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t pt-4">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#324E7B] border-[#324E7B] hover:bg-[#324E7B] hover:text-white"
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-[#324E7B] border-[#324E7B] hover:bg-[#324E7B] hover:text-white"
                >
                  <ExternalLinkIcon className="mr-2 h-4 w-4" />
                  デモ
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* 追加のプロジェクトカードをここに追加できます */}
          <div className="flex items-center justify-center p-8 border-2 border-dashed border-[#86A6DF] rounded-lg bg-[#86A6DF]/5">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[#324E7B] mb-2">次のプロジェクト</h3>
              <p className="text-gray-600 mb-4">現在進行中のプロジェクトや将来の計画がここに表示されます。</p>
              <Button variant="outline" className="border-[#324E7B] text-[#324E7B] hover:bg-[#324E7B] hover:text-white">
                お問い合わせ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
