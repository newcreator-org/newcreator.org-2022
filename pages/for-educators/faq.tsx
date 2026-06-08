import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";
import ScrollFadeIn from "../../components/ScrollFadeIn";

const faqData = [
  {
    category: "導入について",
    questions: [
      {
        q: "生成AIを授業で使うことに不安があります。どこから始めればよいですか。",
        a: "まずは先生ご自身が生成AIを体験することをお勧めします。授業準備や校務での活用から始めることで、生成AIの特性や限界を理解できます。私たちの研修では、基礎から実践まで段階的に学べるプログラムを提供しています。"
      },
      {
        q: "費用はどのくらいかかりますか。",
        a: "学校の規模やご要望に応じて柔軟に対応いたします。出張研修は交通費込みで10万円から、プライベートGPTは生徒数単位の課金で月額3万円からご利用いただけます。詳細はお問い合わせください。"
      },
      {
        q: "導入までにどのくらいの期間が必要ですか。",
        a: "プライベートGPTの導入は最短1週間で可能です。出張研修は日程調整を含めて1ヶ月程度、AI導入支援サービスは計画策定から運用開始まで3ヶ月程度が目安です。"
      },
      {
        q: "小規模な学校でも導入できますか。",
        a: "はい、可能です。生徒数や予算に応じて柔軟にプランを調整いたします。小規模校向けの特別プランもご用意しています。"
      }
    ]
  },
  {
    category: "セキュリティ・プライバシー",
    questions: [
      {
        q: "個人情報やデータのセキュリティは大丈夫ですか。",
        a: "プライベートGPTでは、学校専用の環境を提供し、入力されたデータは学習に使用されません。また、アクセス制限やログ管理など、教育機関に必要なセキュリティ機能を備えています。"
      },
      {
        q: "生徒の利用状況を把握できますか。",
        a: "はい、管理者画面から利用状況の統計情報を確認できます。プライバシーに配慮し、詳細な質問内容ではなく、利用時間や頻度などの統計データを提供します。"
      },
      {
        q: "一般的なChatGPTとの違いは何ですか。",
        a: "プライベートGPTは教育機関向けに設計されており、データが学習に使用されない、アクセス制限が可能、利用ログの管理ができる、学校のネットワーク内で利用できるなどの特徴があります。"
      }
    ]
  },
  {
    category: "活用方法",
    questions: [
      {
        q: "他の学校ではどのように活用していますか。",
        a: "授業での調べ学習支援、レポート作成のサポート、英語学習での対話練習、プログラミング教育での質問対応など、多様な場面で活用されています。導入事例ページで詳しくご紹介しています。"
      },
      {
        q: "どの教科で活用できますか。",
        a: "国語、英語、社会、理科、数学、情報など、ほぼすべての教科で活用できます。各教科の特性に応じた活用方法を研修でご紹介します。"
      },
      {
        q: "生徒がAIに依存しすぎる心配はありませんか。",
        a: "適切な指導とガイドラインの設定により、AIを補助ツールとして活用しながら、自分で考える力を育てることができます。情報リテラシー教育と並行して進めることが重要です。"
      },
      {
        q: "教員の業務効率化にも使えますか。",
        a: "はい、授業準備、教材作成、保護者向け文書の作成など、様々な場面で活用できます。実践ガイドページで具体的な方法をご紹介しています。"
      }
    ]
  },
  {
    category: "研修・サポート",
    questions: [
      {
        q: "研修はどのような内容ですか。",
        a: "生成AIの基礎知識、授業での活用方法、セキュリティとプライバシー、情報リテラシー教育など、学校のニーズに応じてカスタマイズします。教員向けと生徒向けの両方に対応しています。"
      },
      {
        q: "研修後のサポートはありますか。",
        a: "はい、導入後も継続的にサポートいたします。メールやオンラインでの質問対応、追加研修の実施など、学校の状況に応じて柔軟に対応します。"
      },
      {
        q: "オンラインでの研修は可能ですか。",
        a: "はい、オンライン研修にも対応しています。全国どこからでも参加でき、移動時間や交通費を削減できます。"
      }
    ]
  },
  {
    category: "契約・支払い",
    questions: [
      {
        q: "契約期間の縛りはありますか。",
        a: "プライベートGPTは月単位での契約が可能で、長期契約の縛りはありません。学校の状況に応じて柔軟に対応いたします。"
      },
      {
        q: "支払い方法は何がありますか。",
        a: "請求書払い、銀行振込に対応しています。学校の会計処理に合わせて柔軟に対応いたします。"
      },
      {
        q: "年度途中からの導入は可能ですか。",
        a: "はい、可能です。いつでも導入を開始でき、年度途中での契約にも対応しています。"
      }
    ]
  }
];

export default function FAQ() {
  return (
    <>
      <Heads 
        child={{
          title: "よくある質問 | 先生・学校関係者の方へ | 特定非営利活動法人ニュークリエイター・オルグ",
          description: "教育現場でのAI導入に関するよくある質問にお答えします。費用、セキュリティ、活用方法など、導入前の疑問を解消します。",
          ogUrl: "https://newcreator.org/for-educators/faq",
        }} 
      />
      <>
        <Header />
        <main id="main-content" className="mx-auto">
          <ScrollFadeIn>
            <section className="bg-[#F8FCFF] py-20 md:py-20">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="text-center">
                  <h1 className="page-title font-bold text-[#1A202C] mb-4">
                    よくある質問
                  </h1>
                  <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
                    教育現場でのAI導入に関するよくある質問にお答えします。<br />
                    こちらに掲載されていない質問は、お気軽にお問い合わせください。
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-20">
              <div className="container px-5 mx-auto max-w-4xl">
                {faqData.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-12">
                    <h2 className="section-title text-[#1A202C] mb-6 pb-3 border-b-2 border-[#1476A6]">
                      {category.category}
                    </h2>
                    <div className="space-y-6">
                      {category.questions.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-white rounded-sm p-6 border border-[rgba(20,118,166,0.10)]">
                          <h3 className="card-title text-[#1A202C] mb-3 flex items-start">
                            <span className="inline-block text-[#1476A6] font-bold mr-3 mt-0.5 flex-shrink-0 text-base">
                              Q
                            </span>
                            <span>{item.q}</span>
                          </h3>
                          <div className="flex items-start">
                            <span className="inline-block text-[#1476A6] font-bold mr-3 mt-0.5 flex-shrink-0 text-base">
                              A
                            </span>
                            <p className="text-[#1A202C] leading-relaxed">{item.a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-20 bg-[#F8FCFF]">
              <div className="container px-5 mx-auto max-w-4xl text-center">
                <h2 className="section-title text-[#1A202C] mb-4">
                  その他のご質問はこちら
                </h2>
                <p className="text-[#4A5568] mb-8">
                  掲載されていない質問や、より詳しい情報をお求めの方は、<br />
                  お気軽にお問い合わせください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/apply">
                    <a className="btn-primary-lg">
                      お問い合わせフォームへ
                    </a>
                  </Link>
                  <a 
                    href="mailto:contact@newcreator.org" 
                    className="inline-block bg-white text-[#1476A6] px-8 py-4 rounded-sm font-bold border-2 border-[#1476A6] hover:bg-[#F8FCFF] transition-colors"
                  >
                    メールで相談する
                  </a>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-20">
              <div className="container px-5 mx-auto max-w-6xl">
                <h2 className="section-title text-[#1A202C] mb-8 text-center">
                  関連情報
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/for-educators/guides">
                    <a className="block bg-white rounded-sm p-6 border border-[rgba(20,118,166,0.10)]">
                      <h3 className="card-title text-[#1A202C] mb-2">実践ガイド</h3>
                      <p className="text-[#4A5568] text-sm">
                        授業での活用方法や校務効率化のテクニックをご紹介
                      </p>
                    </a>
                  </Link>
                  <Link href="/for-educators/case-studies">
                    <a className="block bg-white rounded-sm p-6 border border-[rgba(20,118,166,0.10)]">
                      <h3 className="card-title text-[#1A202C] mb-2">導入事例</h3>
                      <p className="text-[#4A5568] text-sm">
                        全国の学校での具体的な活用事例をご紹介
                      </p>
                    </a>
                  </Link>
                  <Link href="/for-educators">
                    <a className="block bg-white rounded-sm p-6 border border-[rgba(20,118,166,0.10)]">
                      <h3 className="card-title text-[#1A202C] mb-2">サービス一覧</h3>
                      <p className="text-[#4A5568] text-sm">
                        研修、導入支援、プライベートGPTなどのサービス
                      </p>
                    </a>
                  </Link>
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
