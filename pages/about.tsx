import Header from "../components/header";
import Footer from "../components/footer";
import Heads from "../components/customHead";
import Link from "next/link";

export default function About() {
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
                私たちについて
              </h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-700">
                すべての子どもたちに創造的な学びの機会を届ける
              </p>
            </div>
          </div>
        </section>

        {/* 法人概要セクション */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
                Organization
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                法人概要
              </h1>
            </div>
            <div className="lg:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="bg-gray-50 rounded-lg p-8">
                    <table className="w-full text-left">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <th className="py-4 px-4 font-medium text-gray-900 w-1/3">
                            法人名
                          </th>
                          <td className="py-4 px-4 text-gray-700">
                            特定非営利活動法人ニュークリエイター・オルグ
                          </td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="py-4 px-4 font-medium text-gray-900">
                            設立
                          </th>
                          <td className="py-4 px-4 text-gray-700">2019年1月18日</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="py-4 px-4 font-medium text-gray-900">
                            代表理事
                          </th>
                          <td className="py-4 px-4 text-gray-700">改野 由尚</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <th className="py-4 px-4 font-medium text-gray-900">
                            所在地
                          </th>
                          <td className="py-4 px-4 text-gray-700">
                            大阪府豊中市桜の町３丁目７番７号
                          </td>
                        </tr>
                        <tr>
                          <th className="py-4 px-4 font-medium text-gray-900">
                            連絡先
                          </th>
                          <td className="py-4 px-4 text-gray-700">
                            contact@newcreator.org
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ミッション・ビジョンセクション */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                Mission & Vision
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                ミッション・ビジョン
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-xl font-medium">
                      ミッション
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base text-gray-700">
                    すべての子どもたちに、創造的な学びの機会を届けます。地域や経済状況に関わらず、誰もがSTEAM教育にアクセスできる社会を目指します。
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-xl font-medium">
                      ビジョン
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base text-gray-700">
                    創造的な学びで未来を切り拓く。子どもたち一人ひとりが、自分の可能性を信じ、新しい価値を生み出せる力を育みます。
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-xl font-medium">
                      バリュー
                    </h2>
                  </div>
                  <p className="leading-relaxed text-base text-gray-700">
                    <strong>創造性</strong>: 自由な発想を大切に<br />
                    <strong>協働</strong>: 共に学び、共に成長<br />
                    <strong>挑戦</strong>: 失敗を恐れず、新しいことに挑む
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 沿革セクション */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
                History
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                沿革
              </h1>
            </div>
            <div className="lg:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="bg-white rounded-lg border-l-4 border-orange-500 p-6 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-orange-500 font-bold text-lg mr-4">
                        2019年1月
                      </span>
                      <h3 className="text-gray-900 font-medium">
                        特定非営利活動法人として設立
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      子どもたちにプログラミング教育を届けるため、NPOとして活動を開始
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border-l-4 border-blue-500 p-6 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-blue-500 font-bold text-lg mr-4">
                        2018年6月
                      </span>
                      <h3 className="text-gray-900 font-medium">
                        初のワークショップ開催
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      東京都内で初のプログラミングワークショップを開催、30名が参加
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border-l-4 border-orange-500 p-6 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-orange-500 font-bold text-lg mr-4">
                        2020年3月
                      </span>
                      <h3 className="text-gray-900 font-medium">
                        オンライン講座開始
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      コロナ禍を受け、全国どこからでも参加できるオンライン講座を開始
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border-l-4 border-blue-500 p-6 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-blue-500 font-bold text-lg mr-4">
                        2023年1月
                      </span>
                      <h3 className="text-gray-900 font-medium">
                        生成AI教育プログラム開始
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      ChatGPTなどの生成AIを活用した教育プログラムを日本で初めて開始
                    </p>
                  </div>
                  <div className="bg-white rounded-lg border-l-4 border-orange-500 p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-orange-500 font-bold text-lg mr-4">
                        2024年現在
                      </span>
                      <h3 className="text-gray-900 font-medium">
                        全国10都道府県で活動展開
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      累計1,000名以上の子どもたちに学びの機会を提供
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* パートナー・スポンサーセクション */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
                Partners
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                支援企業・団体
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 mt-4">
                私たちの活動を支援してくださっている企業・団体の皆様です
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center -m-4">
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="h-full flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all">
                  <p className="text-gray-400 text-lg font-medium">
                    パートナー企業ロゴ
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="h-full flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all">
                  <p className="text-gray-400 text-lg font-medium">
                    パートナー企業ロゴ
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="h-full flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all">
                  <p className="text-gray-400 text-lg font-medium">
                    パートナー企業ロゴ
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2">
                <div className="h-full flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all">
                  <p className="text-gray-400 text-lg font-medium">
                    パートナー企業ロゴ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-orange-500 to-orange-400">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                一緒に子どもたちの未来を創りませんか?
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white mb-8">
                寄付やボランティアなど、様々な形でご支援いただけます
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/#donation">
                  <a className="inline-flex text-orange-500 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-gray-100 rounded-full text-lg font-medium shadow-lg transition-all">
                    寄付で支援
                  </a>
                </Link>
                <Link href="/#contact">
                  <a className="inline-flex text-white bg-orange-600 border-0 py-3 px-8 focus:outline-none hover:bg-orange-700 rounded-full text-lg font-medium shadow-lg transition-all">
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
