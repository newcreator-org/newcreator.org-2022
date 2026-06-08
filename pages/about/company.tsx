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
      <main id="main-content" className="mx-auto">

        {/* ヒーロー */}
        <section className="body-font bg-white border-b border-[rgba(20,118,166,0.10)]">
          <div className="container mx-auto px-5 py-20">
            <div className="max-w-2xl">
              <h1 className="page-title font-bold leading-tight mb-6 animate-fade-in-up" style={{ color: '#1A202C' }}>
                法人概要
              </h1>
              <p className="text-lg leading-8 animate-fade-in-up-delay" style={{ color: '#4A5568' }}>
                特定非営利活動法人ニュークリエイター・オルグの基本情報をまとめています。
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
            <span>法人概要</span>
          </nav>
        </div>

        {/* 基本情報テーブル */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-8" style={{ color: '#1A202C' }}>
                  基本情報
                </h2>
                <div className="overflow-hidden" style={{ border: '1px solid rgba(20,118,166,0.12)', borderRadius: '4px' }}>
                  <table className="w-full text-left">
                    <tbody>
                      {[
                        { label: '法人名', value: '特定非営利活動法人ニュークリエイター・オルグ' },
                        { label: '設立', value: '2019年1月18日（2016年より活動開始）' },
                        { label: '代表理事', value: '改野 由尚' },
                        { label: '所在地', value: '大阪府豊中市桜の町３丁目７番７号' },
                        { label: '事業内容', value: 'IT教育事業及び啓発事業・次世代人材の育成に関する情報提供事業' },
                        { label: '連絡先', value: 'contact@newcreator.org' },
                        { label: 'Webサイト', value: 'https://newcreator.org' },
                      ].map((row, i, arr) => (
                        <tr
                          key={row.label}
                          style={{
                            borderBottom: i < arr.length - 1 ? '1px solid rgba(20,118,166,0.08)' : 'none',
                          }}
                        >
                          <th className="py-4 px-6 text-sm font-bold w-1/3 align-top" style={{ background: '#F8FCFF', color: '#1476A6' }}>
                            {row.label}
                          </th>
                          <td className="py-4 px-6 text-sm leading-7" style={{ color: '#1A202C' }}>
                            {row.label === '連絡先' ? (
                              <a href={`mailto:${row.value}`} className="link-brand">{row.value}</a>
                            ) : row.label === 'Webサイト' ? (
                              <a href={row.value} target="_blank" rel="noopener noreferrer" className="link-brand">{row.value}</a>
                            ) : row.value}
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
          <section className="body-font" style={{ background: '#F8FCFF' }}>
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-8" style={{ color: '#1A202C' }}>
                  設立の経緯
                </h2>
                <div className="space-y-6 text-base leading-8" style={{ color: '#4A5568' }}>
                  <p>
                    兵庫県の小さな町で生まれ育った代表の改野は、幼いころよりITの分野に興味があったものの、
                    それらを気軽に学べる機会はほとんどありませんでした。
                    大阪の高校に進学した際に地方と都市部での機会格差を目の当たりにし、
                    住んでいる場所によって将来の選択の幅を狭められてしまう人たちも多くいるのではないかと考えました。
                  </p>
                  <p>
                    そんな人たちを少しでも減らしたい。その思いから、2016年に子ども向けのプログラミング・ITワークショップ
                    「newCreator（ニュークリエイター）」を全国各地で始め、2019年1月に特定非営利活動法人として設立しました。
                  </p>
                  <p>
                    活動を続ける中で、地域格差だけでなく、不登校の子どもたちや「理系は男の子のもの」と思い込んでいる
                    女の子たちにも同じ壁があることが見えてきました。
                    STEAM教育を通じて、地域・不登校・ジェンダーという3つの教育格差をなくすことが、
                    私たちのミッションです。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 沿革 */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-12" style={{ color: '#1A202C' }}>沿革</h2>
                <div className="space-y-0">
                  {[
                    { year: '2016年9月', title: 'ワークショップ「newCreator」開始', desc: '全国各地で子ども向けプログラミング・ITワークショップを開始。Googleやさくらインターネットなどとコラボレーション。' },
                    { year: '2019年1月', title: '特定非営利活動法人として設立', desc: '「IT教育を全国の子どもたちに格差なく届ける」ことを目指し、特定非営利活動法人ニュークリエイター・オルグを設立。', highlight: true },
                    { year: '2020年3月', title: 'オンライン講座開始', desc: 'コロナ禍を受け、全国どこからでも参加できるオンライン講座を開始。地域格差解消への取り組みを加速。' },
                    { year: '2023年1月', title: '生成AI教育プログラム開始', desc: 'ChatGPTなどの生成AIを活用した教育プログラムを開始。学校・自治体向けに展開。' },
                    { year: '2024年4月', title: '不登校支援プログラム開始', desc: '学校に行けない子どもたちを対象にしたオンライン学習支援プログラムを開始。' },
                  ].map(({ year, title, desc, highlight }) => (
                    <div
                      key={year}
                      className="flex gap-8 py-6"
                      style={{ borderTop: '1px solid rgba(20,118,166,0.10)' }}
                    >
                      <div className="flex-shrink-0 w-28">
                        <p className="text-sm font-bold" style={{ color: highlight ? '#1476A6' : '#718096' }}>{year}</p>
                      </div>
                      <div>
                        <p className="font-bold text-base mb-1" style={{ color: '#1A202C' }}>{title}</p>
                        <p className="text-sm leading-7" style={{ color: '#4A5568' }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 関連情報 */}
        <ScrollFadeIn>
          <section className="body-font" style={{ background: '#F8FCFF' }}>
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-8" style={{ color: '#1A202C' }}>関連情報</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { href: '/about', label: '私たちについて' },
                    { href: '/about/transparency', label: '情報公開・透明性' },
                    { href: '/activities', label: '活動実績' },
                    { href: '/#contact', label: 'お問い合わせ' },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center justify-between py-4 px-5 text-sm font-medium border-b transition-colors"
                      style={{ borderColor: 'rgba(20,118,166,0.15)', color: '#1476A6' }}
                    >
                      {label}
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
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
