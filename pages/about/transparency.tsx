import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";

export default function Transparency() {
  return (
    <>
      <Heads child={null} />
      <Header />
      <main className="mx-auto">
        {/* ヒーローセクション */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-blue-50 to-orange-50">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900">
                情報公開・透明性
              </h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-700">
                NPOとして、活動の透明性を確保し、皆様に信頼していただける組織であり続けます
              </p>
            </div>
          </div>
        </section>

        {/* 定款・規約セクション */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
                Articles & Regulations
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                定款・規約
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      定款
                    </h2>
                    <p className="leading-relaxed text-base text-gray-600 mb-4">
                      特定非営利活動法人newCreator.orgの定款です。法人の目的、事業内容、組織体制などを定めています。
                    </p>
                    <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                      PDFをダウンロード
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-4">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </div>
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      活動規約
                    </h2>
                    <p className="leading-relaxed text-base text-gray-600 mb-4">
                      ワークショップやイベントにおける参加規約、行動規範などを定めています。
                    </p>
                    <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                      PDFをダウンロード
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                    </div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      プライバシーポリシー
                    </h2>
                    <p className="leading-relaxed text-base text-gray-600 mb-4">
                      個人情報の取り扱いについて定めたプライバシーポリシーです。
                    </p>
                    <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                      PDFをダウンロード
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 財務情報セクション */}
        <section className="text-gray-600 body-font bg-gray-50">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                Financial Information
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                財務情報
              </h1>
            </div>
            <div className="lg:w-4/5 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 w-full">
                  <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-6">
                      2023年度 収支報告
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b-2 border-gray-300">
                            <th className="py-3 px-4 font-medium text-gray-900">
                              項目
                            </th>
                            <th className="py-3 px-4 font-medium text-gray-900 text-right">
                              金額（円）
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-700 font-medium">
                              【収入の部】
                            </td>
                            <td className="py-3 px-4 text-right"></td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-600 pl-8">
                              寄付金収入
                            </td>
                            <td className="py-3 px-4 text-gray-600 text-right">
                              3,500,000
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-600 pl-8">
                              助成金収入
                            </td>
                            <td className="py-3 px-4 text-gray-600 text-right">
                              2,000,000
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-600 pl-8">
                              事業収入
                            </td>
                            <td className="py-3 px-4 text-gray-600 text-right">
                              1,500,000
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 bg-blue-50">
                            <td className="py-3 px-4 text-gray-900 font-medium">
                              収入合計
                            </td>
                            <td className="py-3 px-4 text-gray-900 font-medium text-right">
                              7,000,000
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-700 font-medium pt-6">
                              【支出の部】
                            </td>
                            <td className="py-3 px-4 text-right pt-6"></td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-600 pl-8">
                              事業費
                            </td>
                            <td className="py-3 px-4 text-gray-600 text-right">
                              5,000,000
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200">
                            <td className="py-3 px-4 text-gray-600 pl-8">
                              管理費
                            </td>
                            <td className="py-3 px-4 text-gray-600 text-right">
                              1,500,000
                            </td>
                          </tr>
                          <tr className="border-b border-gray-200 bg-orange-50">
                            <td className="py-3 px-4 text-gray-900 font-medium">
                              支出合計
                            </td>
                            <td className="py-3 px-4 text-gray-900 font-medium text-right">
                              6,500,000
                            </td>
                          </tr>
                          <tr className="bg-gray-100">
                            <td className="py-3 px-4 text-gray-900 font-bold">
                              当期収支差額
                            </td>
                            <td className="py-3 px-4 text-gray-900 font-bold text-right">
                              500,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6">
                      <button className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
                        詳細な財務諸表をダウンロード
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 寄付金の使途 */}
              <div className="flex flex-wrap -m-4 mt-8">
                <div className="p-4 w-full">
                  <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-6">
                      寄付金の使途内訳（2023年度）
                    </h3>
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 md:w-1/4 w-1/2">
                        <div className="bg-orange-50 rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-orange-500 mb-2">
                            60%
                          </p>
                          <p className="text-gray-600 text-sm">
                            ワークショップ<br />運営費
                          </p>
                        </div>
                      </div>
                      <div className="p-2 md:w-1/4 w-1/2">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-blue-500 mb-2">
                            20%
                          </p>
                          <p className="text-gray-600 text-sm">
                            教材開発費
                          </p>
                        </div>
                      </div>
                      <div className="p-2 md:w-1/4 w-1/2">
                        <div className="bg-orange-50 rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-orange-500 mb-2">
                            15%
                          </p>
                          <p className="text-gray-600 text-sm">
                            広報・<br />マーケティング
                          </p>
                        </div>
                      </div>
                      <div className="p-2 md:w-1/4 w-1/2">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-blue-500 mb-2">
                            5%
                          </p>
                          <p className="text-gray-600 text-sm">
                            管理費
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 過去の年次報告書 */}
              <div className="flex flex-wrap -m-4 mt-8">
                <div className="p-4 w-full">
                  <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-6">
                      過去の年次報告書
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            2023年度 年次報告書
                          </h4>
                          <p className="text-sm text-gray-600">
                            活動実績、財務報告、今後の展望
                          </p>
                        </div>
                        <button className="text-orange-500 hover:text-orange-600 font-medium">
                          ダウンロード
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            2022年度 年次報告書
                          </h4>
                          <p className="text-sm text-gray-600">
                            活動実績、財務報告、今後の展望
                          </p>
                        </div>
                        <button className="text-orange-500 hover:text-orange-600 font-medium">
                          ダウンロード
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            2021年度 年次報告書
                          </h4>
                          <p className="text-sm text-gray-600">
                            活動実績、財務報告、今後の展望
                          </p>
                        </div>
                        <button className="text-orange-500 hover:text-orange-600 font-medium">
                          ダウンロード
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 役員名簿セクション */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
                Board Members
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                役員名簿
              </h1>
            </div>
            <div className="lg:w-2/3 mx-auto">
              <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  理事会メンバー（2024年度）
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="py-3 px-4 font-medium text-gray-900">
                          役職
                        </th>
                        <th className="py-3 px-4 font-medium text-gray-900">
                          氏名
                        </th>
                        <th className="py-3 px-4 font-medium text-gray-900">
                          任期
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-gray-700">代表理事</td>
                        <td className="py-3 px-4 text-gray-700">吉久 良平</td>
                        <td className="py-3 px-4 text-gray-700">
                          2023年4月〜2025年3月
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-gray-700">理事</td>
                        <td className="py-3 px-4 text-gray-700">（氏名）</td>
                        <td className="py-3 px-4 text-gray-700">
                          2023年4月〜2025年3月
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-gray-700">理事</td>
                        <td className="py-3 px-4 text-gray-700">（氏名）</td>
                        <td className="py-3 px-4 text-gray-700">
                          2023年4月〜2025年3月
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4 text-gray-700">監事</td>
                        <td className="py-3 px-4 text-gray-700">（氏名）</td>
                        <td className="py-3 px-4 text-gray-700">
                          2023年4月〜2025年3月
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* お問い合わせCTA */}
        <section className="text-gray-600 body-font bg-gradient-to-r from-blue-500 to-blue-400">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                ご質問やご不明な点がございましたら
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white mb-8">
                お気軽にお問い合わせください
              </p>
              <div className="flex justify-center">
                <a
                  href="/#contact"
                  className="inline-flex text-blue-500 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-gray-100 rounded-full text-lg font-medium shadow-lg transition-all"
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
