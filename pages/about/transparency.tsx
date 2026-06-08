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
      <main className="mx-auto">

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
                定款・財務情報・役員名簿をこちらで公開しています。
              </p>
            </div>
          </div>
        </section>

        {/* パンくず */}
        <div className="container mx-auto px-5 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "#718096" }}>
            <Link href="/"><a className="link-brand">ホーム</a></Link>
            <span>/</span>
            <Link href="/about"><a className="link-brand">私たちについて</a></Link>
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
                  法人の目的・事業内容・組織体制を定めた文書を公開しています。
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "定款",
                      desc: "特定非営利活動法人newCreator.orgの定款です。法人の目的、事業内容、組織体制などを定めています。",
                      note: "最終改定：2023年4月",
                    },
                    {
                      title: "活動規約",
                      desc: "ワークショップやイベントにおける参加規約、行動規範などを定めています。",
                      note: "最終改定：2023年4月",
                    },
                    {
                      title: "プライバシーポリシー",
                      desc: "個人情報の取り扱いについて定めたプライバシーポリシーです。",
                      note: "最終改定：2023年4月",
                    },
                  ].map(({ title, desc, note }) => (
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
                      <p className="text-sm leading-7 mb-3" style={{ color: "#4A5568" }}>{desc}</p>
                      <p className="text-xs mb-4" style={{ color: "#A0AEC0" }}>{note}</p>
                      <button
                        className="link-brand"
                      >
                        PDFをダウンロード
                        <DownloadIcon />
                      </button>
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
                  収支報告・寄付金の使途を公開しています。数字は実際の報告書に基づき更新します。
                </p>

                {/* 収支報告テーブル */}
                <div className="bg-white rounded-sm p-6 mb-6 border" style={{ borderColor: "rgba(20,118,166,0.12)" }}>
                  <h3 className="card-title mb-6" style={{ color: "#1A202C" }}>
                    2023年度 収支報告
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr style={{ borderBottom: "2px solid rgba(20,118,166,0.15)" }}>
                          <th className="py-3 px-4 text-sm font-bold" style={{ color: "#1A202C" }}>項目</th>
                          <th className="py-3 px-4 text-sm font-bold text-right" style={{ color: "#1A202C" }}>金額（円）</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 text-sm font-bold text-[#1476A6]">【収入の部】</td>
                          <td />
                        </tr>
                        {[
                          { label: "寄付金収入", value: "3,500,000", indent: true },
                          { label: "助成金収入", value: "2,000,000", indent: true },
                          { label: "事業収入", value: "1,500,000", indent: true },
                        ].map(({ label, value, indent }) => (
                          <tr key={label} style={{ borderBottom: "1px solid rgba(20,118,166,0.08)" }}>
                            <td className={`py-3 px-4 text-sm ${indent ? "pl-8" : ""}`} style={{ color: "#4A5568" }}>{label}</td>
                            <td className="py-3 px-4 text-sm text-right" style={{ color: "#4A5568" }}>{value}</td>
                          </tr>
                        ))}
                        <tr style={{ background: "#EDF6FB", borderBottom: "1px solid rgba(20,118,166,0.12)" }}>
                          <td className="py-3 px-4 text-sm font-bold" style={{ color: "#1A202C" }}>収入合計</td>
                          <td className="py-3 px-4 text-sm font-bold text-right" style={{ color: "#1A202C" }}>7,000,000</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-sm font-bold pt-5 text-[#1476A6]">【支出の部】</td>
                          <td />
                        </tr>
                        {[
                          { label: "事業費", value: "5,000,000", indent: true },
                          { label: "管理費", value: "1,500,000", indent: true },
                        ].map(({ label, value, indent }) => (
                          <tr key={label} style={{ borderBottom: "1px solid rgba(20,118,166,0.08)" }}>
                            <td className={`py-3 px-4 text-sm ${indent ? "pl-8" : ""}`} style={{ color: "#4A5568" }}>{label}</td>
                            <td className="py-3 px-4 text-sm text-right" style={{ color: "#4A5568" }}>{value}</td>
                          </tr>
                        ))}
                        <tr style={{ background: "#EDF6FB", borderBottom: "1px solid rgba(20,118,166,0.12)" }}>
                          <td className="py-3 px-4 text-sm font-bold" style={{ color: "#1A202C" }}>支出合計</td>
                          <td className="py-3 px-4 text-sm font-bold text-right" style={{ color: "#1A202C" }}>6,500,000</td>
                        </tr>
                        <tr style={{ background: "#DBEAFE" }}>
                          <td className="py-3 px-4 text-sm font-bold text-[#1476A6]">当期収支差額</td>
                          <td className="py-3 px-4 text-sm font-bold text-right text-[#1476A6]">500,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6">
                    <button className="link-brand">
                      詳細な財務諸表をダウンロード
                      <DownloadIcon />
                    </button>
                  </div>
                </div>

                {/* 寄付金の使途 */}
                <div className="bg-white rounded-sm p-6 mb-6 border" style={{ borderColor: "rgba(20,118,166,0.12)" }}>
                  <h3 className="card-title mb-6" style={{ color: "#1A202C" }}>
                    寄付金の使途内訳（2023年度）
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { pct: "60%", label: "ワークショップ\n運営費" },
                      { pct: "20%", label: "教材開発費" },
                      { pct: "15%", label: "広報・\nマーケティング" },
                      { pct: "5%",  label: "管理費" },
                    ].map(({ pct, label }) => (
                      <div
                        key={pct + label}
                        className="rounded-sm p-6 text-center"
                        style={{ background: "#EDF6FB" }}
                      >
                        <p className="text-3xl font-bold mb-2" style={{ color: "#1476A6" }}>{pct}</p>
                        <p className="text-sm whitespace-pre-line" style={{ color: "#4A5568" }}>{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 年次報告書 */}
                <div className="bg-white rounded-sm p-6 border" style={{ borderColor: "rgba(20,118,166,0.12)" }}>
                  <h3 className="card-title mb-6" style={{ color: "#1A202C" }}>
                    年次報告書
                  </h3>
                  <div className="space-y-3">
                    {["2023年度", "2022年度", "2021年度"].map((year) => (
                      <div
                        key={year}
                        className="flex items-center justify-between p-6 rounded-sm"
                        style={{ background: "#F8FCFF" }}
                      >
                        <div>
                          <p className="font-bold text-sm" style={{ color: "#1A202C" }}>{year} 年次報告書</p>
                          <p className="text-xs mt-0.5" style={{ color: "#718096" }}>活動実績、財務報告、今後の展望</p>
                        </div>
                        <button className="link-brand">
                          ダウンロード
                          <DownloadIcon />
                        </button>
                      </div>
                    ))}
                  </div>
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
                  特定非営利活動促進法の規定に基づき公開しています。
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
                        { role: "代表理事", name: "吉久 良平", term: "2023年4月〜2025年3月" },
                        { role: "理事",     name: "（氏名）", term: "2023年4月〜2025年3月" },
                        { role: "理事",     name: "（氏名）", term: "2023年4月〜2025年3月" },
                        { role: "監事",     name: "（氏名）", term: "2023年4月〜2025年3月" },
                      ].map(({ role, name, term }, i) => (
                        <tr
                          key={i}
                          style={{
                            borderBottom: "1px solid rgba(20,118,166,0.08)",
                            background: i % 2 !== 0 ? "#F8FCFF" : "#fff",
                          }}
                        >
                          <td className="py-3 px-5 text-sm font-bold text-[#1476A6]">{role}</td>
                          <td className="py-3 px-5 text-sm" style={{ color: "#4A5568" }}>{name}</td>
                          <td className="py-3 px-5 text-sm" style={{ color: "#718096" }}>{term}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-3" style={{ color: "#A0AEC0" }}>
                  ※ 氏名欄は順次更新します。最新情報はお問い合わせください。
                </p>
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
