import Header from "../components/header";
import Footer from "../components/footer";
import Heads from "../components/customHead";
import { useState } from "react";
import ScrollFadeIn from "../components/ScrollFadeIn";

export default function Activities() {
  const [filter, setFilter] = useState("all");

  const activities = [
    {
      id: 1,
      year: 2024,
      category: "workshop",
      title: "生成AIワークショップ 2024冬",
      date: "2024年2月",
      location: "東京都渋谷区",
      participants: 50,
      description:
        "ChatGPTやStable Diffusionを使った創作活動。子どもたちが自由にAIを活用して作品を制作しました。",
    },
    {
      id: 2,
      year: 2023,
      category: "online",
      title: "オンラインプログラミング講座",
      date: "2023年12月",
      location: "オンライン",
      participants: 80,
      description:
        "全国から参加できるオンライン講座。Scratchを使った基礎から応用まで学びました。",
    },
    {
      id: 3,
      year: 2023,
      category: "outreach",
      title: "地方出張授業 in 北海道",
      date: "2023年10月",
      location: "北海道札幌市",
      participants: 30,
      description:
        "地方の子どもたちにもSTEAM教育を。札幌市内の小学校で出張授業を実施しました。",
    },
    {
      id: 4,
      year: 2023,
      category: "event",
      title: "夏休みプログラミングキャンプ",
      date: "2023年8月",
      location: "神奈川県鎌倉市",
      participants: 40,
      description:
        "3日間の集中プログラミングキャンプ。チームでゲームを制作し、最終日に発表会を行いました。",
    },
    {
      id: 5,
      year: 2023,
      category: "workshop",
      title: "親子プログラミング体験会",
      date: "2023年6月",
      location: "大阪府大阪市",
      participants: 60,
      description:
        "親子で一緒にプログラミングを体験。保護者の方々にもSTEAM教育の重要性を理解していただきました。",
    },
    {
      id: 6,
      year: 2022,
      category: "workshop",
      title: "ロボットプログラミング教室",
      date: "2022年11月",
      location: "東京都品川区",
      participants: 35,
      description:
        "レゴマインドストームを使ったロボットプログラミング。センサーを活用した自律走行ロボットを制作しました。",
    },
  ];

  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter((activity) => activity.category === filter);

  const testimonials = [
    {
      id: 1,
      name: "小学5年生",
      role: "参加者",
      content:
        "AIを使って自分のアイデアを形にできて楽しかった! 学校では教えてくれないことをたくさん学べました。",
    },
    {
      id: 2,
      name: "保護者",
      role: "参加者の保護者",
      content:
        "子どもが夢中になって取り組んでいる姿を見て、参加させて本当に良かったと思いました。スタッフの方々も親切で安心できました。",
    },
    {
      id: 3,
      name: "中学2年生",
      role: "参加者",
      content:
        "プログラミングだけじゃなくて、AIの仕組みも学べて勉強になった。将来はエンジニアになりたいと思うようになりました。",
    },
  ];

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
                活動実績
              </h1>
              <p className="mb-8 leading-7 text-lg text-gray-500 animate-fade-in-up-delay">
                これまでの活動とイベントの記録
              </p>
            </div>
          </div>
        </section>

        {/* 統計 */}
        <ScrollFadeIn>
          <section className="text-gray-600 body-font border-b border-gray-100">
            <div className="container px-5 py-16 mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    1,000<span className="text-lg font-normal text-gray-400">+</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">累計参加者数</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    50<span className="text-lg font-normal text-gray-400">+</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">開催イベント数</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    10<span className="text-lg font-normal text-gray-400">+</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">都道府県</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    8<span className="text-lg font-normal text-gray-400">年</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">活動実績</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 過去のイベント */}
        <ScrollFadeIn>
          <section className="text-gray-600 body-font bg-gray-50">
            <div className="container px-5 py-20 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12 text-center">
                過去のイベント
              </h1>

              {/* フィルターボタン */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  { key: "all", label: "すべて" },
                  { key: "workshop", label: "ワークショップ" },
                  { key: "online", label: "オンライン講座" },
                  { key: "outreach", label: "出張授業" },
                  { key: "event", label: "イベント" },
                ].map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setFilter(btn.key)}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === btn.key
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* イベント一覧 */}
              <div className="flex flex-wrap -m-4">
                {filteredActivities.map((activity) => (
                  <div key={activity.id} className="p-4 md:w-1/2 lg:w-1/3">
                    <div className="h-full bg-white rounded-lg overflow-hidden">
                      <div className="p-6">
                        <p className="text-orange-500 text-xs font-medium mb-2">
                          {activity.date}
                        </p>
                        <h2 className="title-font text-lg font-bold text-gray-900 mb-3">
                          {activity.title}
                        </h2>
                        <p className="leading-7 mb-4 text-gray-600 text-sm">
                          {activity.description}
                        </p>
                        <div className="flex items-center gap-4 text-gray-500 text-xs">
                          <span>{activity.location}</span>
                          <span>{activity.participants}名参加</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 参加者の声 */}
        <ScrollFadeIn>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12 text-center">
                参加者の声
              </h1>
              <div className="flex flex-wrap -m-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="p-4 md:w-1/3">
                    <div className="h-full bg-gray-50 rounded-lg p-8">
                      <p className="leading-7 mb-6 text-gray-700">
                        「{testimonial.content}」
                      </p>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* CTA */}
        <section className="text-gray-600 body-font bg-orange-500">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
                次回のイベントに参加しませんか?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-7 text-base text-orange-100 mb-8">
                最新のイベント情報はお知らせページでご確認ください
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="/information"
                  className="inline-flex text-orange-600 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-orange-50 rounded-lg text-base font-bold transition-colors"
                >
                  お知らせを見る
                </a>
                <a
                  href="/#contact"
                  className="inline-flex text-white border-2 border-white py-3 px-8 focus:outline-none hover:bg-white hover:text-orange-600 rounded-lg text-base font-bold transition-colors"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
