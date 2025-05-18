import { GraduationCapIcon, CodeIcon, PaletteIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#324E7B]">自己紹介</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-[#86A6DF] shadow-lg">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="プロフィール画像"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#324E7B]">[あなたの名前]</h3>
              <p className="text-gray-600 mb-4">3年生、[あなたの高校名]</p>
              <p className="text-gray-700 leading-relaxed">
                C++で3年間の経験を持ち、最近ではKotlinとReactの探求を始めた学生エンジニアです。UI/UXデザインに強い関心を持ち、インターンシップを通じて実践的な経験を得たいと考えています。チームベースの開発に貢献し、実際のソフトウェアエンジニアリング環境で必要なスキルを学ぶことに意欲的です。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="border-[#86A6DF] hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <GraduationCapIcon className="h-10 w-10 text-[#5068A9] mb-4" />
                  <h4 className="font-medium">学生</h4>
                </CardContent>
              </Card>

              <Card className="border-[#86A6DF] hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <CodeIcon className="h-10 w-10 text-[#5068A9] mb-4" />
                  <h4 className="font-medium">開発者</h4>
                </CardContent>
              </Card>

              <Card className="border-[#86A6DF] hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <PaletteIcon className="h-10 w-10 text-[#5068A9] mb-4" />
                  <h4 className="font-medium">UI/UXデザイン</h4>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
