import Header from "../components/header";
import Footer from "../components/footer";
import Heads from "../components/customHead";
import Link from "next/link";
import ScrollFadeIn from "../components/ScrollFadeIn";

export default function About() {
  return (
    <>
      <Heads child={null} />
      <Header />
      <main className="mx-auto">
        {/* ヒーロー */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 animate-fade-in-up">
                私たちについて
              </h1>
              <p className="mb-8 leading-7 text-lg text-gray-500 animate-fade-in-up-delay">
                すべての子どもたちに創造的な学びの機会を届ける
              </p>
            </div>
          </div>
        </section>

        {/* 法人概要 */}
        <ScrollFadeIn>
          <section className="text-gray-600 body-font bg-gray-50">
            <div className="container px-5 py-20 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12 text-center">
                法人概要
              </h1>
              <div className="lg:w-2/3 mx-auto">
                <div className="bg-white rounded-lg overflow-hidden">
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 px-6 font-medium text-gray-500 w-1/3 bg-gray-50">法人名</th>
                        <td className="py-4 px-6 text-gray-700">特定非営利活動法人ニュークリエイター・オルグ</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 px-6 font-medium text-gray-500 bg-gray-50">設立</th>
                        <td className="py-4 px-6 text-gray-700">2019年1月18日</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 px-6 font-medium text-gray-500 bg-gray-50">代表理事</th>
                        <td className="py-4 px-6 text-gray-700">改野 由尚</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 px-6 font-medium text-gray-500 bg-gray-50">所在地</th>
                        <td className="py-4 px-6 text-gray-700">大阪府豊中市桜の町３丁目７番７号</td>
                      </tr>
                      <tr>
                        <th className="py-4 px-6 font-medium text-gray-500 bg-gray-50">連絡先</th>
                        <td className="py-4 px-6 text-gray-700">contact@newcreator.org</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* ミッション・ビジョン */}
        <ScrollFadeIn>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12 text-center">
                ミッション・ビジョン
              </h1>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="h-full pl-6 border-l-2 border-orange-400">
                    <h2 className="text-gray-900 text-xl font-bold mb-3">ミッション</h2>
                    <p className="leading-7 text-base text-gray-700">
                      すべての子どもたちに、創造的な学びの機会を届けます。地域や経済状況に関わらず、誰もがSTEAM教育にアクセスできる社会を目指します。
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full pl-6 border-l-2 border-orange-400">
                    <h2 className="text-gray-900 text-xl font-bold mb-3">ビジョン</h2>
                    <p className="leading-7 text-base text-gray-700">
                      創造的な学びで未来を切り拓く。子どもたち一人ひとりが、自分の可能性を信じ、新しい価値を生み出せる力を育みます。
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full pl-6 border-l-2 border-orange-400">
                    <h2 className="text-gray-900 text-xl font-bold mb-3">バリュー</h2>
                    <p className="leading-7 text-base text-gray-700">
                      <strong>創造性</strong>: 自由な発想を大切に<br />
                      <strong>協働</strong>: 共に学び、共に成長<br />
                      <strong>挑戦</strong>: 失敗を恐れず、新しいことに挑む
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 沿革 */}
        <ScrollFadeIn>
          <section className="text-gray-600 body-font bg-gray-50">
            <div className="container px-5 py-20 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12 text-center">
                沿革
              </h1>
              <div className="lg:w-2/3 mx-auto space-y-4">
                <div className="bg-white rounded-lg border-l-2 border-orange-400 p-6">
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="text-orange-500 font-bold text-sm whitespace-nowrap">2019年1月</span>
                    <h3 className="text-gray-900 font-bold">特定非営利活動法人として設立</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-0 md:pl-24">
                    子どもたちにプログラミング教育を届けるため、NPOとして活動を開始
                  </p>
                </div>
                <div className="bg-white rounded-lg border-l-2 border-gray-300 p-6">
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="text-gray-500 font-bold text-sm whitespace-nowrap">2018年6月</span>
                    <h3 className="text-gray-900 font-bold">初のワークショップ開催</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-0 md:pl-24">
                    東京都内で初のプログラミングワークショップを開催、30名が参加
                  </p>
                </div>
                <div className="bg-white rounded-lg border-l-2 border-orange-400 p-6">
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="text-orange-500 font-bold text-sm whitespace-nowrap">2020年3月</span>
                    <h3 className="text-gray-900 font-bold">オンライン講座開始</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-0 md:pl-24">
                    コロナ禍を受け、全国どこからでも参加できるオンライン講座を開始
                  </p>
                </div>
                <div className="bg-white rounded-lg border-l-2 border-gray-300 p-6">
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="text-gray-500 font-bold text-sm whitespace-nowrap">2023年1月</span>
                    <h3 className="text-gray-900 font-bold">生成AI教育プログラム開始</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-0 md:pl-24">
                    ChatGPTなどの生成AIを活用した教育プログラムを日本で初めて開始
                  </p>
                </div>
                <div className="bg-white rounded-lg border-l-2 border-orange-400 p-6">
                  <div className="flex items-baseline gap-4 mb-1">
                    <span className="text-orange-500 font-bold text-sm whitespace-nowrap">2024年現在</span>
                    <h3 className="text-gray-900 font-bold">全国10都道府県で活動展開</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-0 md:pl-24">
                    累計1,000名以上の子どもたちに学びの機会を提供
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* CTA */}
        <section className="text-gray-600 body-font bg-orange-500">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
                一緒に子どもたちの未来を創りませんか?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-7 text-base text-orange-100 mb-8">
                寄付やボランティアなど、様々な形でご支援いただけます
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link href="/#donation">
                  <a className="inline-flex text-orange-600 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-orange-50 rounded-lg text-base font-bold transition-colors">
                    寄付で支援
                  </a>
                </Link>
                <Link href="/#contact">
                  <a className="inline-flex text-white border-2 border-white py-3 px-8 focus:outline-none hover:bg-white hover:text-orange-600 rounded-lg text-base font-bold transition-colors">
                    お問い合わせ
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
