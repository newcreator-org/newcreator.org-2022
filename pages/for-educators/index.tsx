import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterCta from "../../components/footerCta";
import Heads from "../../components/customHead";
import Link from "next/link";
import { getAllEducatorGuides, getAllEducatorCaseStudies } from "../../libs/markdown";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import Card from "../../components/Card";

const categoryColor = (category: string) => {
  switch (category) {
    case "授業実践":
    case "基礎・導入編":
    case "教科別":
      return "orange";
    case "校務効率化":
    case "組織・運営編":
    case "学校種別":
      return "green";
    case "導入事例":
      return "blue";
    case "管理職・ICT担当者向け":
      return "gray";
    default:
      return "blue";
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
            <section className="py-20 md:py-28" style={{ background: '#F8FCFF' }}>
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="text-center">
                  <h1 className="page-title font-bold text-[#1A202C] mb-6 leading-tight">
                    教育現場でのAI活用を<br className="md:hidden" />全力でサポートします
                  </h1>
                  <p className="text-lg md:text-xl text-[#4A5568] mb-8 max-w-3xl mx-auto leading-relaxed">
                    生成AIの登場により、教育現場は大きな転換期を迎えています。私たちは全国10都道府県22校での実績をもとに、先生方のAI活用を研修から導入まで一貫して支援します。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/for-educators/guides">
                      <a className="btn-primary-lg">
                        実践ガイドを見る
                      </a>
                    </Link>
                    <Link href="#contact">
                      <a className="btn-outline-lg">
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
            <section className="py-16 border-b border-[rgba(20,118,166,0.10)]">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <p className="page-title font-bold" style={{ color: '#1476A6' }}>22校</p>
                    <p className="mt-2 text-sm text-[#4A5568]">導入実績</p>
                  </div>
                  <div className="text-center">
                    <p className="page-title font-bold" style={{ color: '#1476A6' }}>10</p>
                    <p className="mt-2 text-sm text-[#4A5568]">都道府県</p>
                  </div>
                  <div className="text-center">
                    <p className="page-title font-bold" style={{ color: '#1476A6' }}>1,000+</p>
                    <p className="mt-2 text-sm text-[#4A5568]">参加生徒数</p>
                  </div>
                  <div className="text-center">
                    <p className="page-title font-bold" style={{ color: '#1476A6' }}>8年</p>
                    <p className="mt-2 text-sm text-[#4A5568]">活動実績</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 課題セクション */}
          <ScrollFadeIn>
            <section className="py-20 bg-[#F8FCFF]">
              <div className="container px-5 mx-auto max-w-6xl">
                <h2 className="page-title font-bold text-center text-[#1A202C] mb-4">
                  教育現場が直面する課題
                </h2>
                <p className="text-center text-[#4A5568] mb-12 max-w-2xl mx-auto">
                  生成AIの急速な普及により、教育現場では新たな課題が生まれています。私たちはこれらの課題に対して、実践的な解決策を提供します。
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-sm border border-[rgba(20,118,166,0.10)]">
                    <h3 className="card-title text-[#1A202C] mb-4">情報不足</h3>
                    <p className="text-[#4A5568] leading-relaxed">
                      生成AIの教育活用について、信頼できる情報や実践事例が不足しています。どこから始めればよいか分からない先生方が多くいらっしゃいます。
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-sm border border-[rgba(20,118,166,0.10)]">
                    <h3 className="card-title text-[#1A202C] mb-4">時間の制約</h3>
                    <p className="text-[#4A5568] leading-relaxed">
                      日々の授業準備や校務に追われる中で、新しい技術を学び、授業に取り入れる時間を確保することが困難です。
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-sm border border-[rgba(20,118,166,0.10)]">
                    <h3 className="card-title text-[#1A202C] mb-4">セキュリティ懸念</h3>
                    <p className="text-[#4A5568] leading-relaxed">
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
              <div className="container px-5 mx-auto max-w-4xl">
                <h2 className="section-title text-[#1A202C] mb-2">
                  私たちのサービス
                </h2>
                <p className="text-[#718096] mb-12 text-sm">
                  研修から導入支援まで、学校のニーズに合わせて対応します。
                </p>
                <div className="divide-y divide-[#E2E8F0]">
                  <div className="py-8">
                    <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                      <div className="md:w-1/3 mb-3 md:mb-0">
                        <h3 className="card-title text-[#1A202C]">学校向け出張研修</h3>
                        <p className="text-xs text-[#1476A6] mt-1">全国10都道府県22校の実績</p>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                          生徒向け・教員向けの生成AI活用研修を実施します。学校のカリキュラムや目的に応じたプログラムを設計し、実践的な内容をお届けします。
                        </p>
                        <Link href="/apply"><a className="text-sm text-[#1476A6] hover:underline">研修のご依頼はこちら →</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-8">
                    <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                      <div className="md:w-1/3 mb-3 md:mb-0">
                        <h3 className="card-title text-[#1A202C]">AI導入支援</h3>
                        <p className="text-xs text-[#1476A6] mt-1">計画策定から運用定着まで</p>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                          活用方針の策定、教員向け研修、ガイドライン整備など、学校のニーズに合わせた支援を行います。
                        </p>
                        <Link href="/apply"><a className="text-sm text-[#1476A6] hover:underline">導入相談はこちら →</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-8">
                    <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                      <div className="md:w-1/3 mb-3 md:mb-0">
                        <h3 className="card-title text-[#1A202C]">プライベートGPT</h3>
                        <p className="text-xs text-[#1476A6] mt-1">セキュアな学校専用AI環境</p>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                          生徒数単位の課金・契約期間の縛りなし・請求書払い対応。情報セキュリティに対応した環境で安心してご利用いただけます。
                        </p>
                        <Link href="/apply"><a className="text-sm text-[#1476A6] hover:underline">詳細・お問い合わせ →</a></Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-8">
                    <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                      <div className="md:w-1/3 mb-3 md:mb-0">
                        <h3 className="card-title text-[#1A202C]">プログラミング教育</h3>
                        <p className="text-xs text-[#1476A6] mt-1">2017年から続く実績</p>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                          企業・行政と連携したワークショップ、講師派遣による出張授業を全国各地で実施。STEAM教育を通じて子どもたちの創造性を育みます。
                        </p>
                        <Link href="/activities"><a className="text-sm text-[#1476A6] hover:underline">活動実績を見る →</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 実践ガイドセクション */}
          {guides && guides.length > 0 && (
            <ScrollFadeIn>
              <section className="py-20 bg-[#F8FCFF]">
                <div className="container px-5 mx-auto max-w-6xl">
                  <div className="flex justify-between items-center mb-12">
                    <div>
                      <h2 className="page-title font-bold text-[#1A202C] mb-2">
                        実践ガイド
                      </h2>
                      <p className="text-[#4A5568]">
                        すぐに使える実践的なガイドを提供しています
                      </p>
                    </div>
                    <Link href="/for-educators/guides">
                      <a className="font-bold transition-colors" style={{ color: '#1476A6' }}>
                        すべて見る →
                      </a>
                    </Link>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {guides.slice(0, 6).map((guide) => (
                      <Card
                        key={guide.id}
                        title={guide.title}
                        description={guide.description}
                        badge={guide.category}
                        badgeColor={categoryColor(guide.category)}
                        href={`/for-educators/guides/${guide.id}`}
                      />
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
                      <h2 className="page-title font-bold text-[#1A202C] mb-2">
                        導入事例
                      </h2>
                      <p className="text-[#4A5568]">
                        全国の学校での導入事例をご紹介します
                      </p>
                    </div>
                    <Link href="/for-educators/case-studies">
                      <a className="font-bold transition-colors" style={{ color: '#1476A6' }}>
                        すべて見る →
                      </a>
                    </Link>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {caseStudies.slice(0, 4).map((caseStudy) => (
                      <Card
                        key={caseStudy.id}
                        title={caseStudy.title}
                        description={caseStudy.description}
                        badge="導入事例"
                        badgeColor="blue"
                        category={caseStudy.category}
                        href={`/for-educators/case-studies/${caseStudy.id}`}
                      />
                    ))}
                  </div>
                </div>
              </section>
            </ScrollFadeIn>
          )}

          {/* 資料ダウンロードセクション */}
          <ScrollFadeIn>
            <section className="py-20" style={{ background: '#F8FCFF' }}>
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="text-center mb-12">
                  <h2 className="page-title font-bold text-[#1A202C] mb-4">
                    無料ダウンロード資料
                  </h2>
                  <p className="text-[#4A5568] max-w-2xl mx-auto">
                    学校でのAI導入に役立つ資料を無料で提供しています。会議や研修でご活用ください。
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white border border-[#E2E8F0] rounded-sm p-8">
                    <h3 className="card-title text-[#1A202C] mb-3">学校でのAI導入完全ガイド</h3>
                    <p className="text-[#4A5568] mb-6 text-sm leading-relaxed">
                      計画策定から運用まで、学校でのAI導入の全プロセスを詳しく解説したガイドブックです。
                    </p>
                    <Link href="/for-educators/resources">
<a className="btn-primary">
                      ダウンロード
                    </a>
                    </Link>
                  </div>
                  <div className="bg-white border border-[#E2E8F0] rounded-sm p-8">
                    <h3 className="card-title text-[#1A202C] mb-3">学校AI活用チェックリスト</h3>
                    <p className="text-[#4A5568] mb-6 text-sm leading-relaxed">
                      AI導入前に確認すべき項目をまとめたチェックリスト。導入計画の策定に役立ちます。
                    </p>
                    <Link href="/for-educators/resources">
                      <a className="btn-primary">
                        ダウンロード
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* FAQセクション */}
          <ScrollFadeIn>
            <section className="py-20 bg-[#F8FCFF]">
              <div className="container px-5 mx-auto max-w-4xl">
                <h2 className="page-title font-bold text-center text-[#1A202C] mb-12">
                  よくある質問
                </h2>
                <div className="space-y-6">
                  <details className="bg-white rounded-sm p-6 border border-[rgba(20,118,166,0.10)]">
                    <summary className="font-bold text-[#1A202C] cursor-pointer">
                      研修の費用はどのくらいですか？
                    </summary>
                    <p className="mt-4 text-[#4A5568] leading-relaxed">
                      学校の規模や研修内容によって異なります。まずはお気軽にお問い合わせください。貴校の状況に合わせた最適なプランをご提案いたします。
                    </p>
                  </details>
                  <details className="bg-white rounded-sm p-6 border border-[rgba(20,118,166,0.10)]">
                    <summary className="font-bold text-[#1A202C] cursor-pointer">
                      オンラインでの研修も可能ですか？
                    </summary>
                    <p className="mt-4 text-[#4A5568] leading-relaxed">
                      はい、可能です。対面とオンラインの両方に対応しており、学校の状況に応じて最適な形式をご提案します。
                    </p>
                  </details>
                  <details className="bg-white rounded-sm p-6 border border-[rgba(20,118,166,0.10)]">
                    <summary className="font-bold text-[#1A202C] cursor-pointer">
                      プライベートGPTの料金体系を教えてください
                    </summary>
                    <p className="mt-4 text-[#4A5568] leading-relaxed">
                      生徒数単位の課金制で、契約期間の縛りはありません。請求書ベースでの契約が可能です。詳細はお問い合わせください。
                    </p>
                  </details>
                  <details className="bg-white rounded-sm p-6 border border-[rgba(20,118,166,0.10)]">
                    <summary className="font-bold text-[#1A202C] cursor-pointer">
                      小規模な学校でも導入できますか？
                    </summary>
                    <p className="mt-4 text-[#4A5568] leading-relaxed">
                      はい、学校の規模に関わらず導入可能です。小規模校向けのプランもご用意しておりますので、お気軽にご相談ください。
                    </p>
                  </details>
                </div>
                <div className="text-center mt-12">
                  <Link href="/for-educators/faq">
                    <a className="font-bold transition-colors" style={{ color: '#1476A6' }}>
                      すべてのFAQを見る →
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* CTAセクション */}
          <ScrollFadeIn>
            <section id="contact" className="py-20">
              <div className="container px-5 mx-auto max-w-4xl">
                <div className="p-12 text-center text-white" style={{ background: "#1476A6" }}>
                  <h2 className="page-title font-bold mb-4">
                    まずはお気軽にご相談ください
                  </h2>
                  <p className="text-lg mb-8 opacity-90">
                    貴校の状況に合わせた最適なプランをご提案いたします
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/apply">
                      <a className="btn-accent-lg">
                        お問い合わせ
                      </a>
                    </Link>
                    <Link href="/for-educators/resources">
                      <a className="btn-ghost-white-lg">
                        資料をダウンロード
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>
        </main>
        <FooterCta />
        <Footer />
      </>
    </>
  );
}

export async function getStaticProps() {
  const guides = getAllEducatorGuides();
  const caseStudies = getAllEducatorCaseStudies();

  return {
    props: {
      guides: guides || [],
      caseStudies: caseStudies || [],
    },
  };
}
