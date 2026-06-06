import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";
import ScrollFadeIn from "../../components/ScrollFadeIn";

export default function Company() {
  return (
    <>
      <Heads child="法人概要" />
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
                ORGANIZATION
              </p>
              <h1
                className="title-font page-title mb-5 font-bold animate-fade-in-up"
                style={{ color: "#1A202C" }}
              >
                法人概要
              </h1>
              <p
                className="leading-7 text-base max-w-xl mx-auto animate-fade-in-delay"
                style={{ color: "#718096" }}
              >
                特定非営利活動法人 newCreator.org の基本情報をまとめています。
              </p>
            </div>
          </div>
        </section>

        {/* パンくず */}
        <div className="container mx-auto px-5 py-4">
          <nav className="flex items-center gap-2 text-sm" style={{ color: "#718096" }}>
            <Link href="/"><a className="hover:underline" style={{ color: "#1476A6" }}>ホーム</a></Link>
            <span>/</span>
            <Link href="/about"><a className="hover:underline" style={{ color: "#1476A6" }}>私たちについて</a></Link>
            <span>/</span>
            <span>法人概要</span>
          </nav>
        </div>

        {/* 基本情報テーブル */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-16 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2
                  className="section-title mb-8"
                  style={{ color: "#1A202C" }}
                >
                  基本情報
                </h2>
                <div className="overflow-hidden rounded-sm border" style={{ borderColor: "rgba(20,118,166,0.15)" }}>
                  <table className="w-full text-left">
                    <tbody>
                      {[
                        { label: "法人名", value: "特定非営利活動法人 newCreator.org" },
                        { label: "英語名", value: "NPO newCreator.org" },
                        { label: "設立年月日", value: "2016年（活動開始）" },
                        { label: "所在地", value: "大阪府豊中市桜の町３丁目７番７号" },
                        { label: "代表者", value: "代表理事　吉久 良平" },
                        { label: "事業内容", value: "STEAM教育プログラムの開発・提供、学校・自治体向け研修、不登校・ジェンダーギャップ・地域格差に関する教育支援" },
                        { label: "連絡先", value: "contact@newcreator.org" },
                        { label: "Webサイト", value: "https://newcreator.org" },
                      ].map(({ label, value }, i) => (
                        <tr
                          key={label}
                          className={i % 2 === 0 ? "bg-white" : ""}
                          style={{ background: i % 2 !== 0 ? "#F8FCFF" : undefined }}
                        >
                          <th
                            className="py-4 px-6 text-sm font-bold w-40 align-top"
                            style={{ color: "#1476A6" }}
                          >
                            {label}
                          </th>
                          <td className="py-4 px-6 text-sm leading-7" style={{ color: "#4A5568" }}>
                            {label === "連絡先" ? (
                              <a href={`mailto:${value}`} className="underline" style={{ color: "#1476A6" }}>{value}</a>
                            ) : label === "Webサイト" ? (
                              <a href={value} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#1476A6" }}>{value}</a>
                            ) : value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 設立の経緯 */}
        <ScrollFadeIn>
          <section className="body-font" style={{ background: "#F8FCFF" }}>
            <div className="container px-5 py-16 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-6" style={{ color: "#1A202C" }}>
                  設立の経緯
                </h2>
                <div
                  className="pl-6 py-2 mb-8"
                  style={{ borderLeft: "4px solid #95D4E8" }}
                >
                  <p className="text-lg font-bold leading-relaxed" style={{ color: "#1A202C" }}>
                    「作れた！」という体験は、すべての子どもに届くべきだ。
                  </p>
                </div>
                <div className="space-y-5 text-base leading-8" style={{ color: "#4A5568" }}>
                  <p>
                    2016年、代表の吉久が地方の子どもたちにプログラミングを教える活動を始めたのがnewCreator.orgの出発点です。
                    東京では当たり前のように手に入る学習環境が、地方では整っていない——そのギャップを目の当たりにしたことが、活動の原点です。
                  </p>
                  <p>
                    活動を続ける中で、地域格差だけでなく、不登校の子どもたちや「理系は男の子のもの」と思い込んでいる女の子たちにも、
                    同じ壁があることが見えてきました。
                  </p>
                  <p>
                    STEAM教育を通じて、3つの教育格差——地域・不登校・ジェンダー——をなくすことが、
                    私たちのミッションです。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 関連ページリンク */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-16 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-8" style={{ color: "#1A202C" }}>
                  関連情報
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/about",
                      title: "私たちについて",
                      desc: "ミッション・ビジョン・バリュー、チームメンバーの紹介",
                    },
                    {
                      href: "/about/transparency",
                      title: "透明性・情報公開",
                      desc: "定款、予算・決算報告、役員名簿などの公開情報",
                    },
                    {
                      href: "/activities",
                      title: "活動実績",
                      desc: "これまでの取り組みや実績の紹介",
                    },
                    {
                      href: "/#contact",
                      title: "お問い合わせ",
                      desc: "取材・連携・寄付などのご相談はこちら",
                    },
                  ].map(({ href, title, desc }) => (
                    <Link key={href} href={href}>
                      <a
                        className="block p-6 rounded-sm border transition-all"
                        style={{
                          borderColor: "rgba(20,118,166,0.15)",
                          background: "#fff",
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1476A6";
                          (e.currentTarget as HTMLAnchorElement).style.background = "#F8FCFF";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(20,118,166,0.15)";
                          (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                        }}
                      >
                        <p className="font-bold mb-1" style={{ color: "#1476A6" }}>{title}</p>
                        <p className="text-sm" style={{ color: "#718096" }}>{desc}</p>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

      </main>
      <Footer />
    </>
  );
}
