import Header from "../components/header";
import Footer from "../components/footer";
import Heads from "../components/customHead";
import { useState } from "react";

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
      image: "/images/activities/2024-winter.jpg",
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
      image: "/images/activities/2023-online.jpg",
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
      image: "/images/activities/2023-hokkaido.jpg",
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
      image: "/images/activities/2023-summer-camp.jpg",
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
      image: "/images/activities/2023-osaka.jpg",
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
      image: "/images/activities/2022-robot.jpg",
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
      avatar: "👦",
    },
    {
      id: 2,
      name: "保護者",
      role: "参加者の保護者",
      content:
        "子どもが夢中になって取り組んでいる姿を見て、参加させて本当に良かったと思いました。スタッフの方々も親切で安心できました。",
      avatar: "👩",
    },
    {
      id: 3,
      name: "中学2年生",
      role: "参加者",
      content:
        "プログラミングだけじゃなくて、AIの仕組みも学べて勉強になった。将来はエンジニアになりたいと思うようになりました。",
      avatar: "👧",
    },
  ];

  return (
    <>
      <Heads child={null} />
      <Header />
      <main className="mx-auto">
        {/* ヒーローセクション */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
                活動実績
              </h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-700">
                これまでの活動とイベントの記録
              </p>
            </div>
          </div>
        </section>

        {/* 統計セクション */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-orange-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    1,000+
                  </h2>
                  <p className="leading-relaxed">累計参加者数</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-blue-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    50+
                  </h2>
                  <p className="leading-relaxed">開催イベント数</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-orange-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    10+
                  </h2>
                  <p className="leading-relaxed">都道府県</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-blue-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    8年
                  </h2>
                  <p className="leading-relaxed">活動実績</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* フィルターセクション */}
        <section className="text-gray-600 body-font bg-gray-50">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
                Past Events
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                過去のイベント
              </h1>
            </div>

            {/* フィルターボタン */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === "all"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                すべて
              </button>
              <button
                onClick={() => setFilter("workshop")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === "workshop"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                ワークショップ
              </button>
              <button
                onClick={() => setFilter("online")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === "online"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                オンライン講座
              </button>
              <button
                onClick={() => setFilter("outreach")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === "outreach"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                出張授業
              </button>
              <button
                onClick={() => setFilter("event")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === "event"
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                イベント
              </button>
            </div>

            {/* イベント一覧 */}
            <div className="flex flex-wrap -m-4">
              {filteredActivities.map((activity) => (
                <div key={activity.id} className="p-4 md:w-1/2 lg:w-1/3">
                  <div className="h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-r from-orange-100 to-blue-100 flex items-center justify-center">
                      <p className="text-gray-400 text-sm">画像</p>
                    </div>
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-orange-500 mb-1">
                        {activity.date}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {activity.title}
                      </h1>
                      <p className="leading-relaxed mb-3 text-gray-600 text-sm">
                        {activity.description}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <span className="text-gray-500 inline-flex items-center text-sm mr-3">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          {activity.location}
                        </span>
                        <span className="text-gray-500 inline-flex items-center text-sm">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 mr-1"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                          </svg>
                          {activity.participants}名参加
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 参加者の声セクション */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                Testimonials
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                参加者の声
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-4 md:w-1/3">
                  <div className="h-full bg-gradient-to-br from-orange-50 to-blue-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{testimonial.avatar}</div>
                    <p className="leading-relaxed mb-6 text-gray-700">
                      「{testimonial.content}」
                    </p>
                    <div className="inline-flex items-center">
                      <span className="flex-grow flex flex-col">
                        <span className="title-font font-medium text-gray-900">
                          {testimonial.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {testimonial.role}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-orange-500 to-orange-400">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                次回のイベントに参加しませんか?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white mb-8">
                最新のイベント情報はお知らせページでご確認ください
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/information"
                  className="inline-flex text-orange-500 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-gray-100 rounded-full text-lg font-medium shadow-lg transition-all"
                >
                  お知らせを見る
                </a>
                <a
                  href="/#contact"
                  className="inline-flex text-white bg-orange-600 border-0 py-3 px-8 focus:outline-none hover:bg-orange-700 rounded-full text-lg font-medium shadow-lg transition-all"
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
