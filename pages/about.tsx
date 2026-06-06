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

        {/* ヒーロー */}
        <section className="body-font" style={{ background: 'linear-gradient(160deg, #EDF6FB 0%, #ffffff 70%)' }}>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <p className="text-xs font-bold tracking-widest mb-4 animate-fade-in-up" style={{ color: '#1476A6' }}>
                ABOUT US
              </p>
              <h1 className="title-font sm:text-5xl text-4xl mb-5 font-bold animate-fade-in-up" style={{ color: '#1A202C' }}>
                私たちについて
              </h1>
              <p className="mb-4 leading-7 text-lg animate-fade-in-up-delay" style={{ color: '#4A5568' }}>
                すべての子どもたちに、学ぶ権利を。
              </p>
              <p className="leading-7 text-base max-w-xl mx-auto animate-fade-in-delay" style={{ color: '#718096' }}>
                地域格差・不登校・ジェンダーギャップ——3つの教育格差をなくすために、
                <br />
                私たちはSTEAM教育で動き続けます。
              </p>
            </div>
          </div>
        </section>

        {/* ミッション・ビジョン・バリュー */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="text-center mb-14">
                <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#1476A6' }}>MISSION &amp; VISION</p>
                <h2 className="sm:text-3xl text-2xl font-bold" style={{ color: '#1A202C' }}>
                  ミッション・ビジョン
                </h2>
                <div className="mt-3 mx-auto" style={{
                  height: '3px', width: '3rem', borderRadius: '9999px',
                  background: 'linear-gradient(90deg, #1476A6 0%, #95D4E8 100%)'
                }} />
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                  <div className="h-full rounded-xl p-8" style={{
                    borderLeft: '3px solid #1476A6',
                    background: '#F8FCFF',
                  }}>
                    <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#1476A6' }}>MISSION</p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A202C' }}>ミッション</h3>
                    <p className="leading-7 text-base" style={{ color: '#4A5568' }}>
                      すべての子どもたちに、創造的な学びの機会を届けます。地域・経済状況・性別・学校への適応状況に関わらず、誰もがSTEAM教育にアクセスできる社会を目指します。
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full rounded-xl p-8" style={{
                    borderLeft: '3px solid #2789B9',
                    background: '#F8FCFF',
                  }}>
                    <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#2789B9' }}>VISION</p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A202C' }}>ビジョン</h3>
                    <p className="leading-7 text-base" style={{ color: '#4A5568' }}>
                      STEAM教育を全国の子どもたちに格差なく届ける。子ども一人ひとりが自分の可能性を信じ、新しい価値を生み出せる力を育みます。
                    </p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3">
                  <div className="h-full rounded-xl p-8" style={{
                    borderLeft: '3px solid #95D4E8',
                    background: '#F8FCFF',
                  }}>
                    <p className="text-xs font-bold tracking-widest mb-2" style={{ color: '#95D4E8', filter: 'brightness(0.75)' }}>VALUES</p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A202C' }}>バリュー</h3>
                    <ul className="space-y-2 text-base" style={{ color: '#4A5568' }}>
                      <li><strong style={{ color: '#1476A6' }}>格差ゼロ</strong>：生まれた場所・環境を問わない</li>
                      <li><strong style={{ color: '#1476A6' }}>創造性</strong>：自由な発想を大切に</li>
                      <li><strong style={{ color: '#1476A6' }}>協働</strong>：共に学び、共に成長</li>
                      <li><strong style={{ color: '#1476A6' }}>挑戦</strong>：失敗を恐れず、新しいことに挑む</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 私たちが向き合う3つの課題 */}
        <ScrollFadeIn>
          <section className="body-font" style={{ background: '#F8FCFF' }}>
            <div className="container px-5 py-20 mx-auto">
              <div className="text-center mb-14">
                <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#1476A6' }}>SOCIAL ISSUES</p>
                <h2 className="sm:text-3xl text-2xl font-bold mb-4" style={{ color: '#1A202C' }}>
                  私たちが向き合う3つの教育格差
                </h2>
                <p className="text-base max-w-2xl mx-auto leading-7" style={{ color: '#718096' }}>
                  日本の教育には、まだ解決されていない深刻な格差が存在します。
                  newCreator.orgは、STEAM教育を通じてこれらの格差に正面から取り組みます。
                </p>
              </div>

              <div className="flex flex-wrap -m-4">
                {/* 不登校 */}
                <div className="p-4 md:w-1/3">
                  <div className="h-full bg-white rounded-xl p-8 transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: '0 4px 12px rgba(20,118,166,0.10)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                      style={{ background: '#EDF6FB' }}>
                      <svg className="w-6 h-6" fill="none" stroke="#1476A6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <p className="text-xs font-bold tracking-wider mb-2" style={{ color: '#1476A6' }}>不登校・学びの多様化</p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A202C' }}>
                      35万人の子どもが<br />学校に行けていない
                    </h3>
                    <p className="leading-7 text-sm mb-4" style={{ color: '#4A5568' }}>
                      2024年度の文科省調査では、小中学生の不登校が過去最多の35万3,970人に達しました（12年連続増加）。学校という場所に縛られない、一人ひとりに合った学びの選択肢が必要です。
                    </p>
                    <p className="text-xs" style={{ color: '#A0AEC0' }}>出典: 文部科学省「令和6年度 児童生徒の問題行動・不登校等調査」</p>
                  </div>
                </div>

                {/* ジェンダーギャップ */}
                <div className="p-4 md:w-1/3">
                  <div className="h-full bg-white rounded-xl p-8 transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: '0 4px 12px rgba(20,118,166,0.10)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                      style={{ background: '#EDF6FB' }}>
                      <svg className="w-6 h-6" fill="none" stroke="#1476A6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-xs font-bold tracking-wider mb-2" style={{ color: '#1476A6' }}>ジェンダーギャップ</p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A202C' }}>
                      IT・STEM分野の<br />女性比率は依然低い
                    </h3>
                    <p className="leading-7 text-sm mb-4" style={{ color: '#4A5568' }}>
                      日本のIT・情報処理分野で働く女性の割合は約20%にとどまり、OECD諸国の中でも最低水準です。幼少期からのSTEAM教育で「自分にもできる」という自己効力感を育てることが、格差解消への第一歩です。
                    </p>
                    <p className="text-xs" style={{ color: '#A0AEC0' }}>出典: 田中・大谷「日本のSTEM人材におけるジェンダーギャップ」科学教育研究 2024</p>
                  </div>
                </div>

                {/* 地域格差 */}
                <div className="p-4 md:w-1/3">
                  <div className="h-full bg-white rounded-xl p-8 transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: '0 4px 12px rgba(20,118,166,0.10)' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                      style={{ background: '#EDF6FB' }}>
                      <svg className="w-6 h-6" fill="none" stroke="#1476A6" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-xs font-bold tracking-wider mb-2" style={{ color: '#1476A6' }}>地域格差</p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A202C' }}>
                      生まれた場所で<br />学びの機会が変わる
                    </h3>
                    <p className="leading-7 text-sm mb-4" style={{ color: '#4A5568' }}>
                      STEAM教育の環境は都市部と地方で大きく異なります。身近にロールモデルがいない、質の高い教室が近くにない——そんな地方の子どもたちにも、最先端の学びを届けます。
                    </p>
                    <p className="text-xs" style={{ color: '#A0AEC0' }}>出典: 文部科学省「プログラミング教育に関する調査」</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 法人概要 */}
        <ScrollFadeIn>
          <section className="body-font bg-white">
            <div className="container px-5 py-20 mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#1476A6' }}>ORGANIZATION</p>
                <h2 className="sm:text-3xl text-2xl font-bold" style={{ color: '#1A202C' }}>法人概要</h2>
              </div>
              <div className="lg:w-2/3 mx-auto">
                <div className="bg-white rounded-xl overflow-hidden" style={{
                  border: '1px solid rgba(20,118,166,0.12)',
                  boxShadow: '0 4px 12px rgba(20,118,166,0.08)',
                }}>
                  <table className="w-full text-left">
                    <tbody>
                      {[
                        { label: '法人名', value: '特定非営利活動法人ニュークリエイター・オルグ' },
                        { label: '設立', value: '2019年1月18日' },
                        { label: '代表理事', value: '改野 由尚' },
                        { label: '所在地', value: '大阪府豊中市桜の町３丁目７番７号' },
                        { label: '連絡先', value: 'contact@newcreator.org' },
                      ].map((row, i, arr) => (
                        <tr key={row.label} className={i < arr.length - 1 ? 'border-b' : ''}
                          style={{ borderColor: 'rgba(20,118,166,0.08)' }}>
                          <th className="py-4 px-6 font-medium w-1/3 text-sm"
                            style={{ background: '#F8FCFF', color: '#4A5568' }}>
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
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* 沿革 */}
        <ScrollFadeIn>
          <section className="body-font" style={{ background: '#F8FCFF' }}>
            <div className="container px-5 py-20 mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#1476A6' }}>HISTORY</p>
                <h2 className="sm:text-3xl text-2xl font-bold" style={{ color: '#1A202C' }}>沿革</h2>
              </div>
              <div className="lg:w-2/3 mx-auto space-y-4">
                {[
                  { year: '2018年6月', title: '初のワークショップ開催', desc: '東京都内で初のプログラミングワークショップを開催、30名が参加', highlight: false },
                  { year: '2019年1月', title: '特定非営利活動法人として設立', desc: '子どもたちにプログラミング教育を届けるため、NPOとして活動を開始', highlight: true },
                  { year: '2020年3月', title: 'オンライン講座開始', desc: 'コロナ禍を受け、全国どこからでも参加できるオンライン講座を開始。地域格差解消へ', highlight: false },
                  { year: '2023年1月', title: '生成AI教育プログラム開始', desc: 'ChatGPTなどの生成AIを活用した教育プログラムを日本で初めて開始', highlight: true },
                  { year: '2024年現在', title: '全国10都道府県で活動展開', desc: '累計1,000名以上の子どもたちに学びの機会を提供。不登校支援・ジェンダー平等教育にも注力', highlight: true },
                ].map((item) => (
                  <div key={item.year} className="bg-white rounded-xl p-6"
                    style={{
                      borderLeft: `3px solid ${item.highlight ? '#1476A6' : '#95D4E8'}`,
                      boxShadow: '0 2px 8px rgba(20,118,166,0.06)',
                    }}>
                    <div className="flex items-baseline gap-4 mb-1">
                      <span className="font-bold text-sm whitespace-nowrap"
                        style={{ color: item.highlight ? '#1476A6' : '#718096' }}>
                        {item.year}
                      </span>
                      <h3 className="font-bold" style={{ color: '#1A202C' }}>{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed md:pl-24" style={{ color: '#718096' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollFadeIn>

        {/* CTA */}
        <section className="body-font" style={{ background: 'linear-gradient(135deg, #1476A6 0%, #2789B9 100%)' }}>
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full">
              <p className="text-xs font-bold tracking-widest mb-4" style={{ color: '#95D4E8' }}>JOIN US</p>
              <h2 className="sm:text-3xl text-2xl font-bold mb-4 text-white">
                一緒に、教育格差をなくしませんか？
              </h2>
              <p className="lg:w-2/3 mx-auto leading-7 text-base mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
                寄付・ボランティア・学校連携など、様々な形でご参加いただけます。
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://syncable.biz/associate/newcreator-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-bold py-3 px-8 rounded-lg text-base transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: '#FDCA60', color: '#1A202C', boxShadow: '0 4px 12px rgba(253,202,96,0.40)' }}
                >
                  寄付で支援する
                </a>
                <Link href="/#contact">
                  <a className="inline-flex items-center font-bold py-3 px-8 rounded-lg text-base text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ border: '2px solid rgba(255,255,255,0.7)' }}>
                    お問い合わせ
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
