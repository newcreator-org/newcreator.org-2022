import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import FooterCta from "../components/footerCta";
import Heads from "../components/customHead";
import dayjs, { Dayjs } from "dayjs";
import Contact from "../components/contact";
import Link from "next/link";
import { getAllNews, getAllArchives, getAllMedia } from "../libs/markdown";
import ScrollFadeIn from "../components/ScrollFadeIn";

const categoryColor = (category: string) => {
  switch (category) {
    case "AI教育":
      return "bg-blue-100 text-blue-700";
    case "IT教育":
      return "bg-green-100 text-green-700";
    case "キャリア教育":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function Home({ news, archives, media }) {
  return (
    <>
      <Heads child={null} />
      <>
        <Header />
        <Hero />
        <main className="mx-auto">
          {/* 実績 */}
          <ScrollFadeIn>
            <section className="border-b border-gray-100">
              <div className="container px-5 py-16 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                      1,000<span className="text-lg font-normal text-gray-400">+</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-500">累計参加生徒数</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                      50<span className="text-lg font-normal text-gray-400">+</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-500">ワークショップ実施回数</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                      10<span className="text-lg font-normal text-gray-400">+</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-500">都道府県で活動</p>
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

          <ScrollFadeIn>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto flex flex-wrap">
                <div className="mb-6 md:w-1/3">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
                    newCreator.org とは？
                  </h1>
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <p className="leading-7 text-base">
                    特定非営利活動法人ニュークリエイター・オルグは、「全国の子どもたちにSTEAM教育を格差なく届ける」というビジョンのもと活動を行っております。
                    <br />
                    とりわけSTEAM教育は、都市部と地方部で大きな環境の差があります。
                    <br />
                    文部科学省の調査でもプログラミング教育の趣旨、目的、基本的な考え方などの情報が不足していることから都市部と比較して地方部でのプログラミング・STEAMに関する教育が遅れていることがわかっていることのほか、子どもが進路や将来を考えるときに参考となるロールモデルが身近にいないことなど、地方が抱える課題は大きい
                    と考えます。
                    <br />
                    そのような課題の解決に向け、全国の子どもたちが隔てなくSTEAMに親しみ、利活用できるようにするために、オンライン及び全国各地でのイベントを実施しています。
                  </p>
                </div>
              </div>
              <div className="container px-5 mx-auto pb-16">
                <div className="bg-gray-50 px-8 py-12 rounded-lg text-center">
                  <p className="text-xs text-orange-500 font-bold tracking-widest mb-3">VISION</p>
                  <h2 className="sm:text-2xl text-xl font-bold text-gray-900 mb-2">
                    STEAM教育を全国の子どもたちに格差なく届ける
                  </h2>
                  <p className="text-gray-400 text-sm italic">
                    Delivering STEAM education to all children without disparity
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font bg-gray-50" id="activities">
              <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-wrap w-full mb-12">
                  <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
                      サービス
                    </h1>
                  </div>
                  <p className="lg:w-2/3 w-full leading-7 text-gray-500">
                    教育機関・自治体向けに、生成AIの研修から導入支援、プログラミング教育まで一貫して提供しています。
                  </p>
                </div>

                {/* メインサービス */}
                <div className="flex flex-wrap -m-4 mb-8">
                  <div className="w-full p-4">
                    <div className="bg-white rounded-lg overflow-hidden md:flex">
                      <img
                        className="h-64 md:h-auto md:w-1/2 w-full object-cover object-center"
                        src="/img/works/otsumajyoshi.jpg"
                        alt="学校向け出張授業・登壇"
                      />
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <p className="text-orange-500 text-xs font-bold tracking-wider mb-2">10都道府県 22校で実施</p>
                        <h2 className="text-xl text-gray-900 font-bold title-font mb-3">
                          学校向け出張授業・登壇
                        </h2>
                        <p className="leading-7 text-base text-gray-600 mb-4">
                          全国の学校・教育機関へ講師を派遣し、生徒向け・教員向けの生成AI活用研修を実施します。学校のカリキュラムや目的に応じたプログラムを設計し、実践的な内容をお届けします。
                        </p>
                        <a href="/#contact" className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
                          研修のご依頼はこちら →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -m-4 mb-8">
                  <div className="xl:w-1/2 md:w-1/2 p-4">
                    <div className="bg-white rounded-lg overflow-hidden h-full">
                      <img
                        className="h-48 w-full object-cover object-center"
                        src="/img/works/school-plus.png"
                        alt="AI導入支援サービス"
                      />
                      <div className="p-6">
                        <h2 className="text-lg text-gray-900 font-bold title-font mb-3">
                          AI導入支援サービス
                        </h2>
                        <p className="leading-7 text-base text-gray-600 mb-4">
                          教育現場への生成AI導入を、計画策定から運用定着まで一貫してサポート。活用方針の策定、教員向け研修、ガイドライン整備など学校のニーズに合わせた支援を行います。
                        </p>
                        <a href="/#contact" className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
                          導入相談はこちら →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/2 md:w-1/2 p-4">
                    <div className="bg-white rounded-lg overflow-hidden h-full">
                      <img
                        className="h-48 w-full object-cover object-center"
                        src="/img/works/gpt.jpg"
                        alt="プライベートGPT"
                      />
                      <div className="p-6">
                        <h2 className="text-lg text-gray-900 font-bold title-font mb-3">
                          プライベートGPT
                        </h2>
                        <p className="leading-7 text-base text-gray-600">
                          教育機関向けに、安全な生成AI利用環境を提供。生徒数単位の課金、契約期間の縛りなし、請求書ベースでの契約が可能です。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* その他のサービス */}
                <div className="flex flex-wrap -m-4">
                  <div className="xl:w-1/3 md:w-1/3 p-4">
                    <div className="bg-white rounded-lg overflow-hidden h-full">
                      <img
                        className="h-40 w-full object-cover object-center"
                        src="/img/works/workshop.jpg"
                        alt="プログラミング教育"
                      />
                      <div className="p-5">
                        <h2 className="text-base text-gray-900 font-bold title-font mb-2">
                          プログラミング教育
                        </h2>
                        <p className="leading-relaxed text-sm text-gray-600">
                          企業や行政と連携したワークショップの開催、講師派遣による出張授業を2017年度より全国各地で実施。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/3 p-4">
                    <div className="bg-white rounded-lg overflow-hidden h-full">
                      <img
                        className="h-40 w-full object-cover object-center"
                        src="/img/works/school.jpg"
                        alt="オンラインスクール"
                      />
                      <div className="p-5">
                        <h2 className="text-base text-gray-900 font-bold title-font mb-2">
                          オンラインスクール
                        </h2>
                        <p className="leading-relaxed text-sm text-gray-600">
                          小中学生向けプログラミング教室「newCreator School」を1対1のオンライン授業でリーズナブルに提供。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/3 p-4">
                    <div className="bg-white rounded-lg overflow-hidden h-full">
                      <img
                        className="h-40 w-full object-cover object-center"
                        src="/img/works/logy.jpg"
                        alt="学校支援"
                      />
                      <div className="p-5">
                        <h2 className="text-base text-gray-900 font-bold title-font mb-2">
                          学校支援
                        </h2>
                        <p className="leading-relaxed text-sm text-gray-600">
                          「newCreator School +」としてカリキュラムや教職員向けマニュアルを提供。兵庫県たつの市立龍野西中学校等で導入実績あり。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 課題提起 */}
          <ScrollFadeIn>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12">
                  日本の教育が直面する課題
                </h1>
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3">
                    <div className="h-full pl-6 border-l-2 border-orange-400">
                      <h2 className="text-gray-900 text-lg font-bold mb-3">地域格差</h2>
                      <p className="leading-7 text-base text-gray-600">
                        都市部と地方では、STEAM教育を受ける機会に大きな格差があります。すべての子どもたちに平等な学びの機会を届けることが必要です。
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3">
                    <div className="h-full pl-6 border-l-2 border-orange-400">
                      <h2 className="text-gray-900 text-lg font-bold mb-3">変化の速さ</h2>
                      <p className="leading-7 text-base text-gray-600">
                        AIやテクノロジーの進化は加速していますが、教育現場での対応は追いついていません。最新の技術を学ぶ機会が求められています。
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3">
                    <div className="h-full pl-6 border-l-2 border-orange-400">
                      <h2 className="text-gray-900 text-lg font-bold mb-3">経済的負担</h2>
                      <p className="leading-7 text-base text-gray-600">
                        プログラミング教室やSTEAM教育は費用が高く、経済的な理由で参加できない子どもたちがいます。低コストで質の高い教育が必要です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 取り組み */}
          <ScrollFadeIn>
            <section className="text-gray-600 body-font bg-gray-50">
              <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-wrap w-full mb-12">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900">
                      私たちの取り組み
                    </h1>
                  </div>
                  <p className="lg:w-1/2 w-full leading-7 text-gray-500">
                    具体的な活動を通じて、ビジョンを実現しています。
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  {archives &&
                    archives.map((archive) => (
                      <div className="w-full xl:w-1/4 md:w-1/2 p-4" key={archive.title}>
                        <div className="bg-white rounded-lg overflow-hidden">
                          <img
                            className="h-40 w-full object-cover object-center"
                            src="/ogp.png"
                            alt="content"
                          />
                          <div className="p-5">
                            <p className="text-orange-500 text-xs font-medium mb-1">
                              {dayjs(archive.date).format("YYYY.MM.DD")}
                            </p>
                            <h2 className="text-base text-gray-900 font-bold title-font mb-2">
                              {archive.title}
                            </h2>
                            <p className="leading-relaxed text-sm text-gray-600">
                              {archive.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <Link href="/archives">
                  <a className="flex justify-center items-center text-orange-500 mt-12 hover:text-orange-600 font-medium transition-colors">
                    <span>すべての活動を見る（更新中）</span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-700 body-font" id="media">
              <div className="container px-5 py-20 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12">
                  メディア
                </h1>
                <div className="flex flex-wrap -m-4">
                  {media &&
                    media.map((post) => (
                      <div className="w-full xl:w-1/3 md:w-1/2 p-4" key={post.id}>
                        <a href={`/media/${post.id}`}>
                          <div className="bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden group h-full">
                            <div className="p-6">
                              <span
                                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${categoryColor(
                                  post.category
                                )}`}
                              >
                                {post.category}
                              </span>
                              <h2 className="text-base text-gray-900 font-bold title-font mb-2 group-hover:text-orange-500 transition-colors">
                                {post.title}
                              </h2>
                              <p className="text-sm text-gray-500 mb-2">
                                {dayjs(post.date).format("YYYY.MM.DD")}
                              </p>
                              <p className="leading-relaxed text-sm text-gray-600">
                                {post.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                </div>
                <Link href="/media">
                  <a className="flex justify-center items-center text-orange-500 mt-12 hover:text-orange-600 font-medium transition-colors">
                    <span>すべての記事を見る</span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section
              className="text-gray-700 body-font"
              id="information"
            >
              <div className="container px-5 py-20 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12">
                  お知らせ
                </h1>
                <div className="mx-auto">
                  {news &&
                    news.map((news) => (
                      <a
                        className="p-4 flex flex-col md:flex-no-wrap border-b border-gray-100 hover:bg-gray-50 rounded-lg transition-colors"
                        key={news.id}
                        href={"/information/" + news.id}
                      >
                        <div className="md:w-64">
                          <span className="mt-1 text-gray-500 text-sm">
                            {dayjs(news.create_at).format("YYYY.MM.DD")}
                          </span>
                        </div>
                        <div className="mt-1">
                          <h2 className="text-md text-gray-900 title-font mb-2 leading-relaxed font-medium">
                            {news.title}
                          </h2>
                        </div>
                      </a>
                    ))}
                </div>
                <Link href="/information">
                  <a className="flex justify-center items-center text-orange-500 mt-12 hover:text-orange-600 font-medium transition-colors">
                    <span>すべてのお知らせを見る</span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-700 body-font bg-gray-50">
              <div className="container px-5 py-16 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-8 text-center">
                  メディア掲載
                </h1>
                <div className="container mx-auto w-full">
                  <img src="/img/media.png" alt="media" className="mx-auto rounded-lg" />
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-10">
                  想い
                </h1>
                <div className="max-w-3xl">
                  <p className="text-lg leading-8 mb-10 text-gray-700">
                    近年インターネットなどの情報通信技術により、社会はこれまでにない速度で変化し続けていますが、教育の内容はそう大きくは変わっていないのが現状です。
                    <br />
                    そのため、最新の情報にあわせた、最新の教育を提供していくことが我々の使命ではないかと考えています。
                    <br />
                    地域の方々、行政・企業の皆さまと協力し、よりよい「まなび」をつくっていくことはもちろん、すべての子どもたちに楽しく学習に取り組んでもらえる社会をめざします。
                  </p>
                  <div className="flex items-center">
                    <img
                      alt="改野 由尚"
                      src="/img/member/yoshi.jpg"
                      className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <div className="pl-4">
                      <p className="font-bold text-gray-900">改野 由尚</p>
                      <p className="text-gray-500 text-sm">理事長 / Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font bg-gray-50">
              <div className="container px-5 py-20 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-12 text-center">
                  法人情報
                </h1>
                <div className="lg:w-2/3 mx-auto">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <table className="w-full text-left">
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <th className="py-4 px-6 font-medium text-gray-500 w-1/3 bg-gray-50">法人名</th>
                          <td className="py-4 px-6 text-gray-900">特定非営利活動法人ニュークリエイター・オルグ</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <th className="py-4 px-6 font-medium text-gray-500 bg-gray-50">法人番号</th>
                          <td className="py-4 px-6 text-gray-900">3120905005839</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <th className="py-4 px-6 font-medium text-gray-500 bg-gray-50">設立</th>
                          <td className="py-4 px-6 text-gray-900">2016年より活動、2019年1月法人化</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <th className="py-4 px-6 font-medium text-gray-500 bg-gray-50">事業内容</th>
                          <td className="py-4 px-6 text-gray-900">
                            STEAM教育事業及び啓発事業<br />
                            次世代人材の育成に関する情報提供事業
                          </td>
                        </tr>
                        <tr>
                          <th className="py-4 px-6 font-medium text-gray-500 bg-gray-50">所在地</th>
                          <td className="py-4 px-6 text-gray-900">
                            〒101-0054<br />
                            東京都千代田区神田錦町三丁目７番地２<br />
                            東京堂錦町ビル９階
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto">
                <div className="text-center mb-12">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
                    活動を応援してください
                  </h1>
                  <p className="text-base leading-7 xl:w-3/4 lg:w-3/4 mx-auto text-gray-500">
                    私たちの活動は300円から応援いただけます。
                    皆様の寄付が、子どもたちの未来を切り開く力になります。
                  </p>
                </div>
                <div className="lg:w-3/4 mx-auto mb-12">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3 w-full">
                      <div className="border border-gray-200 rounded-lg p-6 h-full">
                        <p className="text-orange-500 text-2xl font-bold mb-2">¥3,000</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          1人の子どもが1ヶ月間プログラミング教室に参加できます
                        </p>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full">
                      <div className="border border-gray-200 rounded-lg p-6 h-full">
                        <p className="text-orange-500 text-2xl font-bold mb-2">¥10,000</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          地方での出張授業1回分の交通費になります
                        </p>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full">
                      <div className="border border-gray-200 rounded-lg p-6 h-full">
                        <p className="text-orange-500 text-2xl font-bold mb-2">¥30,000</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          新しい教材の開発費に充てられます
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="https://syncable.biz/associate/newcreator-org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-white bg-orange-500 border-0 py-3 px-12 focus:outline-none hover:bg-orange-600 rounded-lg text-base font-medium transition-colors">
                      クレジットカードで寄付
                    </button>
                  </a>
                  <p className="mt-6 text-sm text-gray-400">
                    GMOあおぞらネット銀行 法人営業部(101) 1193846
                    トクヒ）ニュークリエイターオルグ 宛
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    上記への振り込みでもご支援いただけます
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <Contact />
        </main>
        <FooterCta />
        <Footer />
      </>
    </>
  );
}

export const getStaticProps = async () => {
  const allNews = getAllNews();
  const allArchives = getAllArchives();
  const allMedia = getAllMedia();

  return {
    props: {
      news: allNews.slice(0, 5),
      archives: allArchives.slice(0, 4),
      media: allMedia.slice(0, 3),
    },
  };
};
