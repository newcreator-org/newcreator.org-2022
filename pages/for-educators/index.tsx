import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterCta from "../../components/footerCta";
import Heads from "../../components/customHead";
import Link from "next/link";
import { getAllEducatorGuides, getAllEducatorCaseStudies } from "../../libs/markdown";
import ScrollFadeIn from "../../components/ScrollFadeIn";

const categoryColor = (category: string) => {
  switch (category) {
    case "授業実践":
      return "bg-blue-100 text-blue-700";
    case "校務効率化":
      return "bg-green-100 text-green-700";
    case "導入事例":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function ForEducators({ guides, caseStudies }) {
  return (
    <>
      <Heads 
        child={{
          title: "先生・学校向けAI活用支援 | 研修・導入・実践ガイド | ニュークリエイター・オルグ",
          description: "学校でのAI導入を完全サポート。全国22校の実績をもとに、教員研修、授業での活用方法、セキュリティ対策まで、教育現場に寄り添った支援を提供します。ChatGPT、生成AI活用の実践ガイドと導入事例を多数掲載。",
          ogUrl: "https://newcreator.org/for-educators",
          keywords: "学校AI導入,教員AI研修,生成AI教育,ChatGPT授業活用,学校DX,教育AI,AI導入支援,教員研修,授業改善,業務効率化",
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
                    教育現場でのAI活用を<br className="md:hidden" />全力でサポートします
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    生成AIの登場により、教育現場は大きな転換期を迎えています。私たちは全国22校での実績をもとに、先生方のAI活用を研修から導入まで一貫して支援します。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/for-educators/guides">
                      <a className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        実践ガイドを見る
                      </a>
                    </Link>
                    <Link href="#contact">
                      <a className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                        導入相談をする
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 実績セクション */}
          <ScrollFadeIn>
            <section className="py-16 border-b border-gray-100">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900">22校</p>
                    <p className="mt-2 text-sm text-gray-600">導入実績</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900">10</p>
                    <p className="mt-2 text-sm text-gray-600">都道府県</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900">1,000+</p>
                    <p className="mt-2 text-sm text-gray-600">参加生徒数</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-gray-900">8年</p>
                    <p className="mt-2 text-sm text-gray-600">活動実績</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 課題セクション */}
          <ScrollFadeIn>
            <section className="py-20 bg-gray-50">
              <div className="container px-5 mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                  教育現場が直面する課題
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  生成AIの急速な普及により、教育現場では新たな課題が生まれています。私たちはこれらの課題に対して、実践的な解決策を提供します。
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">情報不足</h3>
                    <p className="text-gray-600 leading-relaxed">
                      生成AIの教育活用について、信頼できる情報や実践事例が不足しています。どこから始めればよいか分からない先生方が多くいらっしゃいます。
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">時間の制約</h3>
                    <p className="text-gray-600 leading-relaxed">
                      日々の授業準備や校務に追われる中で、新しい技術を学び、授業に取り入れる時間を確保することが困難です。
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">セキュリティ懸念</h3>
                    <p className="text-gray-600 leading-relaxed">
                      個人情報保護やデータセキュリティの観点から、一般的な生成AIサービスを学校で使用することに不安を感じる声が多く聞かれます。
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* サービスセクション */}
          <ScrollFadeIn>
            <section className="py-20">
              <div className="container px-5 mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                  私たちのサービス
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                  教育機関のニーズに合わせて、研修から導入支援まで一貫したサポートを提供します。
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">学校向け出張研修</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      生徒向け・教員向けの生成AI活用研修を実施します。学校のカリキュラムや目的に応じたプログラムを設計し、実践的な内容をお届けします。全国10都道府県22校での実績があります。
                    </p>
                    <Link href="/apply">
                      <a className="text-blue-600 font-semibold hover:text-blue-700">
                        研修のご依頼はこちら →
                      </a>
                    </Link>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">AI導入支援サービス</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      教育現場への生成AI導入を、計画策定から運用定着まで一貫してサポート。活用方針の策定、教員向け研修、ガイドライン整備など、学校のニーズに合わせた支援を行います。
                    </p>
                    <Link href="/apply">
                      <a className="text-blue-600 font-semibold hover:text-blue-700">
                        導入相談はこちら →
                      </a>
                    </Link>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">プライベートGPT</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      教育機関向けに、安全な生成AI利用環境を提供。生徒数単位の課金、契約期間の縛りなし、請求書ベースでの契約が可能です。情報セキュリティに対応した環境で安心してご利用いただけます。
                    </p>
                    <Link href="/apply">
                      <a className="text-blue-600 font-semibold hover:text-blue-700">
                        詳細を見る →
                      </a>
                    </Link>
                  </div>
                  <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">プログラミング教育</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      企業や行政と連携したワークショップの開催、講師派遣による出張授業を2017年度より全国各地で実施。STEAM教育を通じて、子どもたちの創造性と問題解決能力を育みます。
                    </p>
                    <Link href="/activities">
                      <a className="text-blue-600 font-semibold hover:text-blue-700">
                        活動実績を見る →
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 実践ガイドセクション */}
          {guides && guides.length > 0 && (
            <ScrollFadeIn>
              <section className="py-20 bg-gray-50">
                <div className="container px-5 mx-auto max-w-6xl">
                  <div className="flex justify-between items-center mb-12">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        実践ガイド
                      </h2>
                      <p className="text-gray-600">
                        すぐに使える実践的なガイドを提供しています
                      </p>
                    </div>
                    <Link href="/for-educators/guides">
                      <a className="text-blue-600 font-semibold hover:text-blue-700">
                        すべて見る →
                      </a>
                    </Link>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {guides.slice(0, 3).map((guide) => (
                      <Link key={guide.id} href={`/for-educators/guides/${guide.id}`}>
                        <a className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                          <div className="p-6">
                            <div className="mb-3">
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColor(guide.category)}`}>
                                {guide.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                              {guide.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-3">
                              {guide.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollFadeIn>
          )}

          {/* 導入事例セクション */}
          {caseStudies && caseStudies.length > 0 && (
            <ScrollFadeIn>
              <section className="py-20">
                <div className="container px-5 mx-auto max-w-6xl">
                  <div className="flex justify-between items-center mb-12">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        導入事例
                      </h2>
                      <p className="text-gray-600">
                        全国の学校での導入事例をご紹介します
                      </p>
                    </div>
                    <Link href="/for-educators/case-studies">
                      <a className="text-blue-600 font-semibold hover:text-blue-700">
                        すべて見る →
                      </a>
                    </Link>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {caseStudies.slice(0, 4).map((caseStudy) => (
                      <Link key={caseStudy.id} href={`/for-educators/case-studies/${caseStudy.id}`}>
                        <a className="block border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                          <div className="mb-3">
                            <span className="text-sm text-gray-500">{caseStudy.school}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {caseStudy.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3">
                            {caseStudy.description}
                          </p>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            </ScrollFadeIn>
          )}

          {/* 資料ダウンロードセクション */}
          <ScrollFadeIn>
            <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    無料ダウンロード資料
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    学校でのAI導入に役立つ資料を無料で提供しています
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      学校でのAI導入完全ガイド
                    </h3>
                    <p className="text-gray-600 mb-4">
                      計画から実践まで、ステップバイステップで解説。全８章・約４０ページのPDF資料です。
                    </p>
                    <a
                      href="/downloads/for-educators/ai-implementation-guide.pdf"
                      download
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      ダウンロード
                    </a>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      学校AI活用チェックリスト
                    </h3>
                    <p className="text-gray-600 mb-4">
                      導入前の準備から定着まで、各段階で確認すべきポイントをまとめたチェックリスト。
                    </p>
                    <a
                      href="/downloads/for-educators/ai-checklist.pdf"
                      download
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      ダウンロード
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/for-educators/resources">
                    <a className="text-blue-600 font-semibold hover:text-blue-700">
                      すべての資料を見る →
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* よくある質問セクション */}
          <ScrollFadeIn>
            <section className="py-20 bg-gray-50">
              <div className="container px-5 mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                  よくある質問
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      生成AIを授業で使うことに不安があります。どこから始めればよいですか。
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      まずは先生ご自身が生成AIを体験することをお勧めします。授業準備や校務での活用から始めることで、生成AIの特性や限界を理解できます。私たちの研修では、基礎から実践まで段階的に学べるプログラムを提供しています。
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      費用はどのくらいかかりますか。
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      学校の規模やご要望に応じて柔軟に対応いたします。出張研修は交通費込みで10万円から、プライベートGPTは生徒数単位の課金で月額3万円からご利用いただけます。詳細はお問い合わせください。
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      個人情報やデータのセキュリティは大丈夫ですか。
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      プライベートGPTでは、学校専用の環境を提供し、入力されたデータは学習に使用されません。また、アクセス制限やログ管理など、教育機関に必要なセキュリティ機能を備えています。
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      他の学校ではどのように活用していますか。
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      授業での調べ学習支援、レポート作成のサポート、英語学習での対話練習、プログラミング教育での質問対応など、多様な場面で活用されています。導入事例ページで詳しくご紹介しています。
                    </p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Link href="/for-educators/faq">
                    <a className="text-blue-600 font-semibold hover:text-blue-700">
                      さらに質問を見る →
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* CTAセクション */}
          <ScrollFadeIn>
            <section className="py-20 bg-blue-600" id="contact">
              <div className="container px-5 mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  まずはお気軽にご相談ください
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  研修のご依頼、導入相談、その他のお問い合わせはこちらから承ります。<br />
                  貴校の状況に合わせた最適なプランをご提案いたします。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply">
                    <a className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      お問い合わせフォームへ
                    </a>
                  </Link>
                  <a 
                    href="mailto:contact@newcreator.org" 
                    className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    メールで相談する
                  </a>
                </div>
              </div>
            </section>
          </ScrollFadeIn>
        </main>
        <Footer />
      </>
    </>
  );
}

export async function getStaticProps() {
  try {
    const guides = await getAllEducatorGuides();
    const caseStudies = await getAllEducatorCaseStudies();
    
    return {
      props: {
        guides: guides || [],
        caseStudies: caseStudies || [],
      },
    };
  } catch (error) {
    return {
      props: {
        guides: [],
        caseStudies: [],
      },
    };
  }
}
