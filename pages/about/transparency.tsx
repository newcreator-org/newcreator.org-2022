import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";
import ScrollFadeIn from "../../components/ScrollFadeIn";

// ダウンロードアイコン
const DownloadIcon = () => (
  <svg className="w-4 h-4 ml-2 flex-shrink-0" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

// ドキュメントアイコン
const DocIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

export default function Transparency() {
  return (
    <>
      <Heads child="情報公開・透明性" />
      <Header />
      <main id="main-content" className="mx-auto">

        {/* ヒーロー */}
        <section
          className="body-font"
          style={{ background: "#F8FCFF" }}
        >
          <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <p
                className="text-xs font-bold tracking-widest mb-4 animate-fade-in-up"
                style={{ color: "#1476A6" }}
              >
                TRANSPARENCY
              </p>
              <h1
                className="title-font page-title mb-5 font-bold animate-fade-in-up"
                style={{ color: "#1A202C" }}
              >
                情報公開・透明性
              </h1>
              <p
                className="leading-7 text-base max-w-xl mx-auto animate-fade-in-delay"
                style={{ color: "#718096" }}
              >
                NPOとして、活動の透明性を確保し、支援してくださる皆さんに信頼していただける組織であり続けます。
                <br />
                定款・財務情報・貸借対照表の公告・役員名簿をこちらで公開しています。
              </p>
            </div>
          </div>
        </section>

        {/* パンくず */}
        <div className="container mx-auto px-5 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "#718096" }}>
            <Link href="/" className="link-brand">ホーム</Link>
            <span>/</span>
            <Link href="/about" className="link-brand">私たちについて</Link>
            <span>/</span>
            <span>情報公開・透明性</span>
          </nav>
        </div>

        {/* 定款・規約 */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-2" style={{ color: "#1A202C" }}>
                  定款・規約
                </h2>
                <p className="text-sm mb-8" style={{ color: "#718096" }}>
                  法人の目的・事業内容・組織体制を定めた文書と、サービス提供に関する規約です。
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "定款",
                      desc: "特定非営利活動法人ニュークリエイター・オルグの定款です。法人の目的、事業内容、組織体制などを定めています。所轄庁（豊中市）および内閣府NPO法人ポータルサイトで閲覧できます。",
                      href: "https://www.npo-homepage.go.jp/npoportal/",
                      label: "NPO法人ポータルサイト",
                      external: true,
                    },
                    {
                      title: "提供にあたってのルール",
                      desc: "当法人が提供する教材・サービスの利用条件を定めています。",
                      href: "/legal/rule",
                      label: "ルールを見る",
                      external: false,
                    },
                    {
                      title: "プライバシーポリシー",
                      desc: "個人情報の取り扱いについて定めたプライバシーポリシーです。",
                      href: "/legal/privacy-policy",
                      label: "ポリシーを見る",
                      external: false,
                    },
                  ].map(({ title, desc, href, label, external }) => (
                    <div
                      key={title}
                      className="p-6 rounded-sm border"
                      style={{ borderColor: "rgba(20,118,166,0.15)" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 flex items-center justify-center" style={{ color: "#1476A6" }}>
                          <DocIcon />
                        </div>
                        <h3 className="card-title" style={{ color: "#1A202C" }}>{title}</h3>
                      </div>
                      <p className="text-sm leading-7 mb-4" style={{ color: "#4A5568" }}>{desc}</p>
                      {external ? (
                        <a href={href} className="link-brand" target="_blank" rel="noopener noreferrer">
                          {label}
                        </a>
                      ) : (
                        <Link href={href} className="link-brand">
                          {label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 財務情報 */}
        <ScrollFadeIn>
          <section className="body-font" style={{ background: "#F8FCFF" }}>
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-2" style={{ color: "#1A202C" }}>
                  財務情報
                </h2>
                <p className="text-sm mb-8" style={{ color: "#718096" }}>
                  所轄庁（豊中市）に提出した事業報告書等に基づいて掲載しています。事業年度は毎年6月1日から翌年5月31日までです。
                </p>

                {/* 活動計算書の概要 */}
                <div className="bg-white rounded-sm p-6 mb-6 border" style={{ borderColor: "rgba(20,118,166,0.12)" }}>
                  <h3 className="card-title mb-2" style={{ color: "#1A202C" }}>
                    2025（令和7）年度 活動計算書の概要
                  </h3>
                  <p className="text-xs mb-6" style={{ color: "#718096" }}>
                    2025年6月1日から2026年5月31日まで（単位：円）
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr style={{ borderBottom: "2px solid rgba(20,118,166,0.15)" }}>
                          <th className="py-3 px-4 text-sm font-bold" style={{ color: "#1A202C" }}>科目</th>
                          <th className="py-3 px-4 text-sm font-bold text-right" style={{ color: "#1A202C" }}>金額（円）</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 text-sm font-bold text-[#1476A6]">【経常収益】</td>
                          <td />
                        </tr>
                        {[
                          { label: "受取寄附金", value: "10,119" },
                          { label: "事業収益", value: "5,610,000" },
                          { label: "その他収益", value: "5,446" },
                        ].map(({ label, value }) => (
                          <tr key={label} style={{ borderBottom: "1px solid rgba(20,118,166,0.08)" }}>
                            <td className="py-3 px-4 text-sm pl-8" style={{ color: "#4A5568" }}>{label}</td>
                            <td className="py-3 px-4 text-sm text-right" style={{ color: "#4A5568" }}>{value}</td>
                          </tr>
                        ))}
                        <tr style={{ background: "#EDF6FB", borderBottom: "1px solid rgba(20,118,166,0.12)" }}>
                          <td className="py-3 px-4 text-sm font-bold" style={{ color: "#1A202C" }}>経常収益計</td>
                          <td className="py-3 px-4 text-sm font-bold text-right" style={{ color: "#1A202C" }}>5,625,565</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-sm font-bold pt-5 text-[#1476A6]">【経常費用】</td>
                          <td />
                        </tr>
                        {[
                          { label: "事業費", value: "2,758,719" },
                          { label: "管理費", value: "135,208" },
                        ].map(({ label, value }) => (
                          <tr key={label} style={{ borderBottom: "1px solid rgba(20,118,166,0.08)" }}>
                            <td className="py-3 px-4 text-sm pl-8" style={{ color: "#4A5568" }}>{label}</td>
                            <td className="py-3 px-4 text-sm text-right" style={{ color: "#4A5568" }}>{value}</td>
                          </tr>
                        ))}
                        <tr style={{ background: "#EDF6FB", borderBottom: "1px solid rgba(20,118,166,0.12)" }}>
                          <td className="py-3 px-4 text-sm font-bold" style={{ color: "#1A202C" }}>経常費用計</td>
                          <td className="py-3 px-4 text-sm font-bold text-right" style={{ color: "#1A202C" }}>2,893,927</td>
                        </tr>
                        <tr style={{ background: "#DBEAFE" }}>
                          <td className="py-3 px-4 text-sm font-bold text-[#1476A6]">当期正味財産増減額</td>
                          <td className="py-3 px-4 text-sm font-bold text-right text-[#1476A6]">2,731,638</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 貸借対照表の公告 */}
                <div id="balance-sheet" className="bg-white rounded-sm p-6 border" style={{ borderColor: "rgba(20,118,166,0.12)" }}>
                  <h3 className="card-title mb-2" style={{ color: "#1A202C" }}>
                    貸借対照表の公告
                  </h3>
                  <p className="text-sm leading-7 mb-6" style={{ color: "#4A5568" }}>
                    特定非営利活動促進法第28条の2の規定に基づき、各事業年度の貸借対照表を公告します。
                  </p>
                  <div className="space-y-3">
                    {[
                      { year: "2025（令和7）年度", date: "2026年5月31日現在", net: "4,063,120", file: "bs-fy2025.pdf" },
                      { year: "2024（令和6）年度", date: "2025年5月31日現在", net: "1,331,482", file: "bs-fy2024.pdf" },
                      { year: "2023（令和5）年度", date: "2024年5月31日現在", net: "2,939,683", file: "bs-fy2023.pdf" },
                      { year: "2022（令和4）年度", date: "2023年5月31日現在", net: "2,387,735", file: "bs-fy2022.pdf" },
                      { year: "2021（令和3）年度", date: "2022年5月31日現在", net: "740,953", file: "bs-fy2021.pdf" },
                      { year: "2020（令和2）年度", date: "2021年5月31日現在", net: "251,425", file: "bs-fy2020.pdf" },
                    ].map(({ year, date, net, file }) => (
                      <div
                        key={year}
                        className="flex items-center justify-between p-6 rounded-sm"
                        style={{ background: "#F8FCFF" }}
                      >
                        <div>
                          <p className="font-bold text-sm" style={{ color: "#1A202C" }}>{year} 貸借対照表</p>
                          <p className="text-xs mt-0.5" style={{ color: "#718096" }}>{date}　正味財産合計 {net}円</p>
                        </div>
                        <a href={`/downloads/koukoku/${file}`} className="link-brand" target="_blank" rel="noopener noreferrer">
                          PDF
                          <DownloadIcon />
                        </a>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs mt-4" style={{ color: "#A0AEC0" }}>
                    公告開始日：2026年11月5日
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 役員名簿 */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-2" style={{ color: "#1A202C" }}>
                  役員名簿
                </h2>
                <p className="text-sm mb-8" style={{ color: "#718096" }}>
                  2026年9月30日の通常総会で選任された役員です（役員はいずれも無報酬）。
                </p>
                <div className="overflow-hidden rounded-sm border" style={{ borderColor: "rgba(20,118,166,0.15)" }}>
                  <table className="w-full text-left">
                    <thead>
                      <tr style={{ background: "#EDF6FB", borderBottom: "2px solid rgba(20,118,166,0.15)" }}>
                        <th className="py-3 px-5 text-sm font-bold text-[#1476A6]">役職</th>
                        <th className="py-3 px-5 text-sm font-bold text-[#1476A6]">氏名</th>
                        <th className="py-3 px-5 text-sm font-bold text-[#1476A6]">任期</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { role: "理事長", name: "改野 由尚" },
                        { role: "副理事長", name: "小山 優輝" },
                        { role: "理事", name: "衛藤 泰地" },
                        { role: "監事", name: "山下 真歩" },
                      ].map(({ role, name }, i) => (
                        <tr
                          key={i}
                          style={{
                            borderBottom: "1px solid rgba(20,118,166,0.08)",
                            background: i % 2 !== 0 ? "#F8FCFF" : "#fff",
                          }}
                        >
                          <td className="py-3 px-5 text-sm font-bold text-[#1476A6]">{role}</td>
                          <td className="py-3 px-5 text-sm" style={{ color: "#4A5568" }}>{name}</td>
                          <td className="py-3 px-5 text-sm" style={{ color: "#718096" }}>2026年9月30日〜2028年9月29日</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* お問い合わせCTA */}
        <section
          className="body-font"
          style={{ background: "#1476A6" }}
        >
          <div className="container px-5 py-20 mx-auto text-center">
            <h2 className="section-title text-white mb-4">
              公開情報についてご不明な点は、お気軽に
            </h2>
            <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.80)" }}>
              取材・連携・寄付などのご相談もこちらから。
            </p>
            <a
              href="/#contact"
              className="btn-white"
            >
              お問い合わせ
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
