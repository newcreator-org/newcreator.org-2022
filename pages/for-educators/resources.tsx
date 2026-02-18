import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterCta from "../../components/footerCta";
import Heads from "../../components/customHead";
import Link from "next/link";
import ScrollFadeIn from "../../components/ScrollFadeIn";

const resources = [
  {
    title: "学校でのAI導入完全ガイド",
    description: "計画から実践まで、学校でAIを導入する際のステップバイステップガイド。推進体制の構築、研修の実施、保護者との連携まで、成功するためのポイントを網羅的に解説します。",
    pages: "全8章・約40ページ",
    format: "PDF",
    downloadUrl: "/downloads/for-educators/ai-implementation-guide.pdf",
    category: "導入計画",
  },
  {
    title: "学校AI活用チェックリスト",
    description: "導入前の準備から定着まで、各段階で確認すべきポイントをチェックリスト形式でまとめました。進捗管理や振り返りに活用できます。",
    pages: "全10セクション・約20ページ",
    format: "PDF",
    downloadUrl: "/downloads/for-educators/ai-checklist.pdf",
    category: "導入計画",
  },
];

export default function Resources() {
  return (
    <>
      <Heads 
        child={{
          title: "ダウンロード資料 | 先生・学校向けAI活用支援 | ニュークリエイター・オルグ",
          description: "学校でのAI導入に役立つ資料を無料でダウンロードできます。導入完全ガイド、チェックリスト、活用事例集など、実践的な資料を多数ご用意しています。",
          ogUrl: "https://newcreator.org/for-educators/resources",
          keywords: "AI導入ガイド,学校AI資料,教員研修資料,AI活用チェックリスト,教育DX資料,無料ダウンロード",
        }} 
      />
      <>
        <Header />
        <main className="mx-auto">
          {/* ヒーローセクション */}
          <ScrollFadeIn>
            <section className="bg-gradient-to-b from-blue-50 to-white py-20 md:py-28">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    ダウンロード資料
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    学校でのAI導入に役立つ資料を無料でダウンロードできます。導入計画の策定、教員研修、保護者説明など、様々な場面でご活用ください。
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 資料一覧 */}
          <ScrollFadeIn>
            <section className="py-16 md:py-20">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="grid gap-8 md:gap-10">
                  {resources.map((resource, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                              {resource.category}
                            </span>
                            <span className="text-sm text-gray-500">
                              {resource.format}
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            {resource.title}
                          </h2>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {resource.description}
                          </p>
                          <p className="text-sm text-gray-500">
                            {resource.pages}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <a
                            href={resource.downloadUrl}
                            download
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                          >
                            ダウンロード
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 関連リンク */}
          <ScrollFadeIn>
            <section className="py-16 md:py-20 bg-gray-50">
              <div className="container px-5 mx-auto max-w-6xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  その他のリソース
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/for-educators/guides">
                    <a className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        実践ガイド
                      </h3>
                      <p className="text-gray-600 mb-4">
                        授業での活用方法、導入計画、セキュリティ対策など、実践的なガイドを多数掲載しています。
                      </p>
                      <span className="text-blue-600 font-semibold">
                        ガイドを見る →
                      </span>
                    </a>
                  </Link>
                  <Link href="/for-educators/case-studies">
                    <a className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        導入事例
                      </h3>
                      <p className="text-gray-600 mb-4">
                        実際に学校でAIを導入した事例を詳しく紹介しています。成功のポイントや課題への対応を学べます。
                      </p>
                      <span className="text-blue-600 font-semibold">
                        事例を見る →
                      </span>
                    </a>
                  </Link>
                  <Link href="/for-educators/faq">
                    <a className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        よくある質問
                      </h3>
                      <p className="text-gray-600 mb-4">
                        学校でのAI活用に関するよくある質問と回答をまとめています。
                      </p>
                      <span className="text-blue-600 font-semibold">
                        FAQを見る →
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* お問い合わせCTA */}
          <ScrollFadeIn>
            <section className="py-16 md:py-20">
              <div className="container px-5 mx-auto max-w-4xl">
                <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    導入支援のご相談はこちら
                  </h2>
                  <p className="text-lg mb-8 opacity-90">
                    貴校の状況に合わせた導入計画の策定から、教員研修、実践サポートまで、一貫して支援いたします。
                  </p>
                  <Link href="/contact">
                    <a className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      お問い合わせ
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <FooterCta />
        </main>
        <Footer />
      </>
    </>
  );
}
