import Header from "../components/header";
import Footer from "../components/footer";
import Heads from "../components/customHead";
import Link from "next/link";
import ScrollFadeIn from "../components/ScrollFadeIn";

export default function About() {
  return (
    <>
      <Heads child="私たちについて" />
      <Header />
      <main className="mx-auto">

        {/* ヒーロー — シンプルに。英語ラベル廃止 */}
        <section className="body-font bg-white border-b border-[rgba(20,118,166,0.10)]">
          <div className="container mx-auto px-5 py-20">
            <div className="max-w-2xl">
              <h1 className="page-title font-bold leading-tight mb-6 animate-fade-in-up" style={{ color: '#1A202C' }}>
                私たちについて
              </h1>
              <p className="text-lg leading-8 animate-fade-in-up-delay" style={{ color: '#4A5568' }}>
                「作れた！」という体験は、すべての子どもに届くべきだ。
                <br />
                地域格差・不登校・ジェンダーギャップ——3つの教育格差をなくすために動いています。
              </p>
            </div>
          </div>
        </section>

        {/* ミッション・ビジョン・バリュー — 左ボーダー廃止、テキストブロックに */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-12" style={{ color: '#1A202C' }}>
                  ミッション・ビジョン
                </h2>
                <div className="space-y-12">
                  <div>
                    <p className="text-xs font-bold mb-3" style={{ color: '#1476A6' }}>ミッション</p>
                    <p className="text-xl font-bold leading-relaxed mb-3" style={{ color: '#1A202C' }}>
                      すべての子どもたちに、創造的な学びの機会を届ける
                    </p>
                    <p className="leading-8 text-base" style={{ color: '#4A5568' }}>
                      地域・経済状況・性別・学校への適応状況に関わらず、誰もがSTEAM教育にアクセスできる社会を目指します。
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(20,118,166,0.10)' }} className="pt-12">
                    <p className="text-xs font-bold mb-3" style={{ color: '#1476A6' }}>ビジョン</p>
                    <p className="text-xl font-bold leading-relaxed mb-3" style={{ color: '#1A202C' }}>
                      STEAM教育を全国の子どもたちに格差なく
                    </p>
                    <p className="leading-8 text-base" style={{ color: '#4A5568' }}>
                      子ども一人ひとりが自分の可能性を信じ、新しい価値を生み出せる力を育みます。
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(20,118,166,0.10)' }} className="pt-12">
                    <p className="text-xs font-bold mb-3" style={{ color: '#1476A6' }}>バリュー</p>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                      {[
                        { name: '格差ゼロ', desc: '生まれた場所・環境を問わない' },
                        { name: '創造性', desc: '自由な発想を大切に' },
                        { name: '協働', desc: '共に学び、共に成長' },
                        { name: '挑戦', desc: '失敗を恐れず、新しいことに挑む' },
                      ].map(({ name, desc }) => (
                        <div key={name}>
                          <p className="font-bold text-base" style={{ color: '#1A202C' }}>{name}</p>
                          <p className="text-sm mt-1" style={{ color: '#718096' }}>{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 3つの教育格差 — 丸アイコン・hover:-translate-y・シャドウカード廃止 */}
        <ScrollFadeIn>
          <section className="body-font" style={{ background: '#F8FCFF' }}>
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-4" style={{ color: '#1A202C' }}>
                  私たちが向き合う3つの教育格差
                </h2>
                <p className="text-base leading-7 mb-12" style={{ color: '#718096' }}>
                  数字ではなく、一人ひとりの子どもの話として考えてほしい。
                </p>
                <div className="space-y-0">
                  {[
                    {
                      tag: '不登校・学びの多様化',
                      heading: '35万人の子どもが、学校に行けていない',
                      body: '2024年度の文科省調査では、小中学生の不登校が過去最多の35万3,970人に達しました（12年連続増加）。「学びたくない」のではなく、「学びたいのに場所がない」子がたくさんいます。学校という場所に縛られない、一人ひとりに合った学びの選択肢が必要です。',
                      source: '文部科学省「令和6年度 児童生徒の問題行動・不登校等調査」',
                    },
                    {
                      tag: 'ジェンダーギャップ',
                      heading: '「理系は男の子のもの」と思っている女の子がいる',
                      body: '日本のIT・情報処理分野で働く女性の割合は約20%にとどまり、OECD諸国の中でも最低水準です。「女の子にプログラミングは難しい」という先入観は、子どもの頃から形成されます。小学生のうちに「自分にもできる」と感じる体験を積み重ねることが、その先入観を少しずつ変えていくと信じています。',
                      source: '田中・大谷「日本のSTEM人材におけるジェンダーギャップ」科学教育研究 2024',
                    },
                    {
                      tag: '地域格差',
                      heading: '地方に生まれただけで、選択肢が少なくなる',
                      body: '東京にいれば当たり前の環境が、地方では整っていないことが多い。近くに教室がない、身近にロールモデルがいない——そんな子どもたちにこそ、私たちは山を越えてでも届けに行きたい。',
                      source: '文部科学省「プログラミング教育に関する調査」',
                    },
                  ].map(({ tag, heading, body, source }) => (
                    <div
                      key={tag}
                      className="issue-card"
                    >
                      <p className="text-xs font-bold mb-3" style={{ color: '#1476A6' }}>{tag}</p>
                      <h3 className="card-title mb-4" style={{ color: '#1A202C' }}>{heading}</h3>
                      <p className="leading-8 text-base mb-3" style={{ color: '#4A5568' }}>{body}</p>
                      <p className="text-xs" style={{ color: '#A0AEC0' }}>出典: {source}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 法人概要 */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-8" style={{ color: '#1A202C' }}>法人概要</h2>
                <div className="overflow-hidden" style={{ border: '1px solid rgba(20,118,166,0.12)', borderRadius: '4px' }}>
                  <table className="w-full text-left">
                    <tbody>
                      {[
                        { label: '法人名', value: '特定非営利活動法人ニュークリエイター・オルグ' },
                        { label: '設立', value: '2019年1月18日' },
                        { label: '代表理事', value: '改野 由尚' },
                        { label: '所在地', value: '大阪府豊中市桜の町３丁目７番７号' },
                        { label: '連絡先', value: 'contact@newcreator.org' },
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
                          <td className="py-4 px-6 text-sm" style={{ color: '#1A202C' }}>
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6">
                  <Link href="/about/company">
                    <a className="link-brand">
                      詳細な法人概要を見る →
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 沿革 */}
        <ScrollFadeIn>
          <section className="body-font" style={{ background: '#F8FCFF' }}>
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-12" style={{ color: '#1A202C' }}>沿革</h2>
                <div className="space-y-0">
                  {[
                    { year: '2018年6月', title: '初のワークショップ開催', desc: '東京都内で初のプログラミングワークショップを開催、30名が参加' },
                    { year: '2019年1月', title: '特定非営利活動法人として設立', desc: '子どもたちにプログラミング教育を届けるため、NPOとして活動を開始', highlight: true },
                    { year: '2020年3月', title: 'オンライン講座開始', desc: 'コロナ禍を受け、全国どこからでも参加できるオンライン講座を開始。地域格差解消へ' },
                    { year: '2023年1月', title: '生成AI教育プログラム開始', desc: 'ChatGPTなどの生成AIを活用した教育プログラムを日本で初めて開始' },
                    { year: '2024年4月', title: '不登校支援プログラム開始', desc: '学校に行けない子どもたちを対象にしたオンライン学習支援プログラムを開始' },
                  ].map(({ year, title, desc, highlight }, i, arr) => (
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

        {/* チーム */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="max-w-4xl mx-auto">
                <h2 className="section-title mb-12" style={{ color: '#1A202C' }}>チーム</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { name: '改野 由尚', role: '代表理事', bio: 'プログラミング教育の普及に取り組む。全国の学校・自治体と連携し、子どもたちに「作れた！」の体験を届けている。' },
                    { name: '（メンバー名）', role: '理事', bio: '教育現場での経験を活かし、カリキュラム開発を担当。' },
                    { name: '（メンバー名）', role: '理事', bio: '企業・行政との連携を担当。社会課題解決に向けたパートナーシップを構築。' },
                  ].map(({ name, role, bio }) => (
                    <div key={name}>
                      <div className="w-16 h-16 mb-4 bg-[#EDF6FB] flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#CBD5E0]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <p className="font-bold text-base mb-1" style={{ color: '#1A202C' }}>{name}</p>
                      <p className="text-xs font-bold mb-3" style={{ color: '#1476A6' }}>{role}</p>
                      <p className="text-sm leading-7" style={{ color: '#4A5568' }}>{bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 関連ページ */}
        <ScrollFadeIn>
          <section className="body-font" style={{ background: '#F8FCFF' }}>
            <div className="container px-5 py-16 mx-auto">
              <div className="max-w-3xl mx-auto">
                <h2 className="section-title mb-8" style={{ color: '#1A202C' }}>関連情報</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { href: '/about/company', label: '法人概要の詳細' },
                    { href: '/about/transparency', label: '情報公開・透明性' },
                    { href: '/activities', label: '活動実績' },
                    { href: '/#contact', label: 'お問い合わせ' },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href}>
                      <a
                        className="flex items-center justify-between py-4 px-5 text-sm font-medium border-b transition-colors"
                        style={{ borderColor: 'rgba(20,118,166,0.15)', color: '#1476A6' }}
                      >
                        {label}
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
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
