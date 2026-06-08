import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import FooterCta from "../components/footerCta";
import Heads from "../components/customHead";
import dayjs, { Dayjs } from "dayjs";
import Contact from "../components/contact";
import Link from "next/link";
import { getAllNews, getAllArchives, getAllMedia } from "../libs/markdown";
import ScrollFadeIn from "../components/ScrollFadeIn";

const categoryColor = (category: string) => {
  switch (category) {
    case "AI教育":
      return "bg-[#EDF6FB] text-[#1476A6]";
    case "IT教育":
      return "bg-[#EDF6FB] text-[#1476A6]";
    case "キャリア教育":
      return "bg-[#EDF6FB] text-[#1476A6]";
    default:
      return "bg-[#EDF6FB] text-[#1A202C]";
  }
};

export default function Home({ news, archives, media }) {
  return (
    <>
      <Heads child={null} />
      <>
        <Header />
        <Hero />
        <main id="main-content" className="mx-auto">
          {/* 実績 */}
          <ScrollFadeIn>
            <section className="border-b border-[rgba(20,118,166,0.10)]">
              <div className="container px-5 py-20 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  <div className="text-center">
                    <p className="page-title font-bold text-[#1A202C] tracking-tight">
                      1,000<span className="text-lg font-normal text-[#718096]">+</span>
                    </p>
                    <p className="mt-2 text-sm text-[#718096]">累計参加生徒数</p>
                  </div>
                  <div className="text-center">
                    <p className="page-title font-bold text-[#1A202C] tracking-tight">
                      50<span className="text-lg font-normal text-[#718096]">+</span>
                    </p>
                    <p className="mt-2 text-sm text-[#718096]">ワークショップ実施回数</p>
                  </div>
                  <div className="text-center">
                    <p className="page-title font-bold text-[#1A202C] tracking-tight">
                      10<span className="text-lg font-normal text-[#718096]">+</span>
                    </p>
                    <p className="mt-2 text-sm text-[#718096]">都道府県で活動</p>
                  </div>
                  <div className="text-center">
                    <p className="page-title font-bold text-[#1A202C] tracking-tight">
                      8<span className="text-lg font-normal text-[#718096]">年</span>
                    </p>
                    <p className="mt-2 text-sm text-[#718096]">活動実績</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto flex flex-wrap">
                <div className="mb-6 md:w-1/3">
                  <h1 className="page-title font-bold title-font text-[#1A202C]">
                    なぜ、私たちはこれをやっているのか
                  </h1>
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <p className="leading-8 text-base text-[#4A5568]">
                    初めてプログラミングに触れたときのことを覚えている子どもは、いまもたくさんいます。「作れた！」と目が輝く子どもたちの顔は、何年たっても忘れられません。
                  </p>
                  <p className="leading-8 text-base text-[#4A5568] mt-4">
                    でも、その機会は平等に届いていない。学校に行けない子、地方に住む子、「私には無理」と思い込んでいる女の子……そういった子たちにこそ、「作れた！」の体験を届けたい。それが、私たちの出発点です。
                  </p>
                </div>
              </div>
              <div className="container px-5 mx-auto pb-16">
                <div className="py-12" style={{ borderTop: '1px solid rgba(20,118,166,0.12)' }}>
                  <p className="sm:text-xl text-lg font-bold text-[#1A202C] leading-relaxed">
                    「STEAM教育を、全国の子どもたちに格差なく」
                  </p>
                  <p className="text-sm mt-2" style={{ color: '#718096' }}>
                    —— newCreator.org のビジョン
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font bg-[#F8FCFF]" id="activities">
              <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-wrap w-full mb-12">
                  <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
                    <h1 className="page-title font-bold title-font text-[#1A202C]">
                      サービス
                    </h1>
                  </div>
                  <p className="lg:w-2/3 w-full leading-7 text-[#718096]">
                    教育機関・自治体向けに、生成AIの研修から導入支援、プログラミング教育まで一貫して提供しています。
                  </p>
                </div>

                {/* メインサービス */}
                <div className="flex flex-wrap -m-4 mb-8">
                  <div className="w-full p-6">
                    <div className="bg-white md:flex overflow-hidden" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                      <img
                        className="h-64 md:h-auto md:w-1/2 w-full object-cover object-center"
                        src="/img/works/otsumajyoshi.jpg"
                        alt="学校向け出張授業・登壇"
                      />
                      <div className="p-6 md:p-6 flex flex-col justify-center">
                        <p className="text-xs font-bold tracking-wider mb-2" style={{ color: '#1476A6' }}>10都道府県 22校で実施</p>
                        <h2 className="section-title text-[#1A202C] title-font mb-3">
                          学校向け出張授業・登壇
                        </h2>
                        <p className="leading-7 text-base text-[#4A5568] mb-4">
                          全国の学校・教育機関へ講師を派遣し、生徒向け・教員向けの生成AI活用研修を実施します。学校のカリキュラムや目的に応じたプログラムを設計し、実践的な内容をお届けします。
                        </p>
                        <a href="/#contact" className="font-medium text-sm transition-colors" style={{ color: '#1476A6' }}>
                          研修のご依頼はこちら →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap -m-4 mb-8">
                  <div className="xl:w-1/2 md:w-1/2 p-6">
                    <div className="bg-white overflow-hidden h-full" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                      <img
                        className="h-48 w-full object-cover object-center"
                        src="/img/works/school-plus.png"
                        alt="AI導入支援サービス"
                      />
                      <div className="p-6">
                        <h2 className="section-title text-[#1A202C] title-font mb-3">
                          AI導入支援サービス
                        </h2>
                        <p className="leading-7 text-base text-[#4A5568] mb-4">
                          教育現場への生成AI導入を、計画策定から運用定着まで一貫してサポート。活用方針の策定、教員向け研修、ガイドライン整備など学校のニーズに合わせた支援を行います。
                        </p>
                        <a href="/#contact" className="font-medium text-sm transition-colors" style={{ color: '#1476A6' }}>
                          導入相談はこちら →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/2 md:w-1/2 p-6">
                    <div className="bg-white overflow-hidden h-full" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                      <img
                        className="h-48 w-full object-cover object-center"
                        src="/img/works/gpt.jpg"
                        alt="プライベートGPT"
                      />
                      <div className="p-6">
                        <h2 className="section-title text-[#1A202C] title-font mb-3">
                          プライベートGPT
                        </h2>
                        <p className="leading-7 text-base text-[#4A5568]">
                          教育機関向けに、安全な生成AI利用環境を提供。生徒数単位の課金、契約期間の縛りなし、請求書ベースでの契約が可能です。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* その他のサービス */}
                <div className="flex flex-wrap -m-4">
                  <div className="xl:w-1/3 md:w-1/3 p-6">
                    <div className="bg-white overflow-hidden h-full" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                      <img
                        className="h-40 w-full object-cover object-center"
                        src="/img/works/workshop.jpg"
                        alt="プログラミング教育"
                      />
                      <div className="p-6">
                        <h2 className="section-title text-[#1A202C] title-font mb-2">
                          プログラミング教育
                        </h2>
                        <p className="leading-relaxed text-sm text-[#4A5568]">
                          企業や行政と連携したワークショップの開催、講師派遣による出張授業を2017年度より全国各地で実施。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/3 p-6">
                    <div className="bg-white overflow-hidden h-full" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                      <img
                        className="h-40 w-full object-cover object-center"
                        src="/img/works/school.jpg"
                        alt="オンラインスクール"
                      />
                      <div className="p-6">
                        <h2 className="section-title text-[#1A202C] title-font mb-2">
                          オンラインスクール
                        </h2>
                        <p className="leading-relaxed text-sm text-[#4A5568]">
                          小中学生向けプログラミング教室「newCreator School」を1対1のオンライン授業でリーズナブルに提供。
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xl:w-1/3 md:w-1/3 p-6">
                    <div className="bg-white overflow-hidden h-full" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                      <img
                        className="h-40 w-full object-cover object-center"
                        src="/img/works/logy.jpg"
                        alt="学校支援"
                      />
                      <div className="p-6">
                        <h2 className="section-title text-[#1A202C] title-font mb-2">
                          学校支援
                        </h2>
                        <p className="leading-relaxed text-sm text-[#4A5568]">
                          「newCreator School +」としてカリキュラムや教職員向けマニュアルを提供。兵庫県たつの市立龍野西中学校等で導入実績あり。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 先生・学校向けCTA */}
          <ScrollFadeIn>
            <section className="text-white py-20" style={{ background: '#1476A6' }}>
              <div className="container px-5 mx-auto max-w-5xl">
                <div className="text-center mb-8">
                  <h2 className="page-title font-bold mb-4">
                    先生・学校関係者の方へ
                  </h2>
                  <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    「導入したいけど、何から始めればいいかわからない」<br />
                    そんな先生の相談相手になれるよう、私たちはいます。
                  </p>
                </div>
                <div className="flex flex-col gap-4 mb-8 max-w-2xl mx-auto">
                  {[
                    { title: '出張研修', desc: '10都道府県22校で実施。生徒向け・教員向け、実践ベースの研修。' },
                    { title: 'AI導入支援', desc: '「何から手をつければいいか」の相談から、運用定着まで一緒に考えます。' },
                    { title: 'プライベートGPT', desc: '安心して使える生成AI環境。生徒数単位の課金で柔軟に導入。' },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-4">
                      <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#FDCA60' }} />
                      <div>
                        <p className="font-bold text-white">{title}</p>
                        <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link href="/for-educators">
                    <a
                      className="inline-block px-8 py-4 rounded-sm font-bold transition-colors"
                      style={{ background: '#FDCA60', color: '#1A202C' }}
                    >
                      詳しく見る
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 社会課題セクション */}
          <ScrollFadeIn>
            <section className="text-gray-600 body-font" id="social-issues">
              <div className="container px-5 py-20 mx-auto">
                <div className="text-center mb-4">
                  <h2 className="page-title font-bold title-font text-[#1A202C] mb-6">
                    いま、日本の子どもたちに起きていること
                  </h2>
                  <p className="text-base text-[#718096] max-w-2xl mx-auto leading-8">
                    数字ではなく、一人ひとりの子どもの話として考えてほしい。
                  </p>
                </div>

                <div className="mt-12 max-w-3xl mx-auto">
                  {/* 不登校 */}
                  <div className="issue-card">
                    <p className="text-xs font-bold mb-3" style={{ color: '#1476A6' }}>不登校</p>
                    <h3 className="card-title text-[#1A202C] mb-4">35万人を超える子どもが、居場所を失っている</h3>
                    <p className="leading-8 text-base text-[#4A5568] mb-3">
                      学校に行けなくなった子の中には、「学びたくない」のではなく、「学びたいのに場所がない」子がたくさんいます。オンラインで、自分のペースで、安心できる場所で学べる環境をつくることが、私たちの役割だと思っています。
                    </p>
                    <p className="text-xs" style={{ color: '#A0AEC0' }}>文部科学省「令和6年度 児童生徒の問題行動・不登校等調査」より</p>
                  </div>

                  {/* ジェンダーギャップ */}
                  <div className="issue-card">
                    <p className="text-xs font-bold mb-3" style={{ color: '#1476A6' }}>ジェンダーギャップ</p>
                    <h3 className="card-title text-[#1A202C] mb-4">「理系は男の子のもの」と思っている女の子がいる</h3>
                    <p className="leading-8 text-base text-[#4A5568] mb-3">
                      「女の子にプログラミングは難しい」という先入観は、子どもの頃から形成されます。小学生のうちに「自分にもできる」と感じる体験を積み重ねることが、その先入観を少しずつ変えていくと信じています。
                    </p>
                    <p className="text-xs" style={{ color: '#A0AEC0' }}>日本のIT分野の女性比率は約20%（OECD最低水準）：科学教育研究 2024より</p>
                  </div>

                  {/* 地域格差 */}
                  <div className="issue-card">
                    <p className="text-xs font-bold mb-3" style={{ color: '#1476A6' }}>地域格差</p>
                    <h3 className="card-title text-[#1A202C] mb-4">地方に生まれただけで、選択肢が少なくなる</h3>
                    <p className="leading-8 text-base text-[#4A5568] mb-3">
                      東京にいれば当たり前の環境が、地方では整っていないことが多い。近くに教室がない、身近にロールモデルがいない——そんな子どもたちにこそ、私たちは山を越えてでも届けに行きたい。
                    </p>
                    <p className="text-xs" style={{ color: '#A0AEC0' }}>文部科学省「プログラミング教育に関する調査」より</p>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <a
                    href="/about"
                    className="inline-flex items-center font-medium transition-colors"
                    style={{ color: '#1476A6' }}
                  >
                    <span>私たちがやっていることを見る</span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          {/* 取り組み */}
          <ScrollFadeIn>
            <section className="text-gray-600 body-font bg-[#F8FCFF]">
              <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-wrap w-full mb-12">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="page-title font-bold title-font text-[#1A202C]">
                      私たちの取り組み
                    </h1>
                  </div>
                  <p className="lg:w-1/2 w-full leading-7 text-[#718096]">
                    最近の活動を紹介します。
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  {archives &&
                    archives.map((archive) => (
                      <div className="w-full xl:w-1/4 md:w-1/2 p-6" key={archive.title}>
                        <div className="bg-white overflow-hidden" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                          <img
                            className="h-40 w-full object-cover object-center"
                            src="/ogp.png"
                            alt="content"
                          />
                          <div className="p-6">
                            <p className="text-xs font-medium mb-1" style={{ color: '#1476A6' }}>
                              {dayjs(archive.date).format("YYYY.MM.DD")}
                            </p>
                            <h2 className="section-title text-[#1A202C] title-font mb-2">
                              {archive.title}
                            </h2>
                            <p className="leading-relaxed text-sm text-[#4A5568]">
                              {archive.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <Link href="/archives">
                  <a className="flex justify-center items-center mt-12 font-medium transition-colors" style={{ color: '#1476A6' }}>
                    <span>すべての活動を見る（更新中）</span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-[#1A202C] body-font" id="media">
              <div className="container px-5 py-20 mx-auto">
                <h1 className="page-title font-bold title-font text-[#1A202C] mb-12">
                  メディア
                </h1>
                <div className="flex flex-wrap -m-4">
                  {media &&
                    media.map((post) => (
                      <div className="w-full xl:w-1/3 md:w-1/2 p-6" key={post.id}>
                        <a href={`/media/${post.id}`}>
                          <div className="bg-white overflow-hidden h-full" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                            <div className="p-6">
                              <span
                                className={`inline-block text-xs font-medium px-3 py-1 rounded-sm mb-3 ${categoryColor(
                                  post.category
                                )}`}
                              >
                                {post.category}
                              </span>
                              <h2 className="section-title text-[#1A202C] title-font mb-2 group-hover:transition-colors" style={{ color: '#1476A6' }}>
                                {post.title}
                              </h2>
                              <p className="text-sm text-[#718096] mb-2">
                                {dayjs(post.date).format("YYYY.MM.DD")}
                              </p>
                              <p className="leading-relaxed text-sm text-[#4A5568]">
                                {post.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                </div>
                <Link href="/media">
                  <a className="flex justify-center items-center mt-12 font-medium transition-colors" style={{ color: '#1476A6' }}>
                    <span>すべての記事を見る</span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section
              className="text-[#1A202C] body-font"
              id="information"
            >
              <div className="container px-5 py-20 mx-auto">
                <h1 className="page-title font-bold title-font text-[#1A202C] mb-12">
                  お知らせ
                </h1>
                <div className="mx-auto">
                  {news &&
                    news.map((news) => (
                      <a
                        className="p-6 flex flex-col md:flex-no-wrap border-b border-[rgba(20,118,166,0.10)] hover:bg-[#F8FCFF] rounded-sm transition-colors"
                        key={news.id}
                        href={"/information/" + news.id}
                      >
                        <div className="md:w-64">
                          <span className="mt-1 text-[#718096] text-sm">
                            {dayjs(news.create_at).format("YYYY.MM.DD")}
                          </span>
                        </div>
                        <div className="mt-1">
                          <h2 className="section-title text-md text-[#1A202C] title-font mb-2">
                            {news.title}
                          </h2>
                        </div>
                      </a>
                    ))}
                </div>
                <Link href="/information">
                  <a className="flex justify-center items-center mt-12 font-medium transition-colors" style={{ color: '#1476A6' }}>
                    <span>すべてのお知らせを見る</span>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-[#1A202C] body-font bg-[#F8FCFF]">
              <div className="container px-5 py-20 mx-auto">
                <h1 className="page-title font-bold title-font text-[#1A202C] mb-8 text-center">
                  メディア掲載
                </h1>
                <div className="container mx-auto w-full">
                  <img src="/img/media.png" alt="media" className="mx-auto rounded-sm" />
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto">
                <h1 className="page-title font-bold title-font text-[#1A202C] mb-10">
                  想い
                </h1>
                <div className="max-w-3xl">
                  <p className="text-lg leading-8 mb-10 text-[#1A202C]">
                    不登校の子どもも、地方に住む子どもも、「ITは自分には関係ない」と思っている女の子も——どんな子どもにも、学ぶ機会は平等にあるべきだと思っています。
                    <br />
                    教育の「届かない」をなくすために、地域・行政・企業の皮さまと協力し、子どもたちの可能性を広げる学びの場をつくり続けます。
                    <br />
                    AI時代だからこそ、「誰でも、どこでも、自分らしく」学べる社会を、一緒につくりませんか。
                  </p>
                  <div className="flex items-center">
                    <img
                      alt="改野 由尚"
                      src="/img/member/yoshi.jpg"
                      className="w-14 h-14 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <div className="pl-4">
                      <p className="font-bold text-[#1A202C]">改野 由尚</p>
                      <p className="text-[#718096] text-sm">理事長 / Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font bg-[#F8FCFF]">
              <div className="container px-5 py-20 mx-auto">
                <h1 className="page-title font-bold title-font text-[#1A202C] mb-12 text-center">
                  法人情報
                </h1>
                <div className="lg:w-2/3 mx-auto">
                  <div className="bg-white overflow-hidden" style={{ border: '1px solid rgba(20,118,166,0.10)', borderRadius: '4px' }}>
                    <table className="w-full text-left">
                      <tbody>
                        <tr className="border-b border-[rgba(20,118,166,0.10)]">
                          <th className="py-4 px-6 font-medium text-[#718096] w-1/3 bg-[#F8FCFF]">法人名</th>
                          <td className="py-4 px-6 text-[#1A202C]">特定非営利活動法人ニュークリエイター・オルグ</td>
                        </tr>
                        <tr className="border-b border-[rgba(20,118,166,0.10)]">
                          <th className="py-4 px-6 font-medium text-[#718096] bg-[#F8FCFF]">法人番号</th>
                          <td className="py-4 px-6 text-[#1A202C]">3120905005839</td>
                        </tr>
                        <tr className="border-b border-[rgba(20,118,166,0.10)]">
                          <th className="py-4 px-6 font-medium text-[#718096] bg-[#F8FCFF]">設立</th>
                          <td className="py-4 px-6 text-[#1A202C]">2016年より活動、2019年1月法人化</td>
                        </tr>
                        <tr className="border-b border-[rgba(20,118,166,0.10)]">
                          <th className="py-4 px-6 font-medium text-[#718096] bg-[#F8FCFF]">事業内容</th>
                          <td className="py-4 px-6 text-[#1A202C]">
                            STEAM教育事業及び啓発事業<br />
                            次世代人材の育成に関する情報提供事業
                          </td>
                        </tr>
                        <tr>
                          <th className="py-4 px-6 font-medium text-[#718096] bg-[#F8FCFF]">所在地</th>
                          <td className="py-4 px-6 text-[#1A202C]">
                            大阪府豊中市桜の町３丁目７番７号
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto">
                <div className="text-center mb-12">
                  <h1 className="page-title font-bold title-font text-[#1A202C] mb-4">
                    活動を応援してください
                  </h1>
                  <p className="text-base leading-7 xl:w-3/4 lg:w-3/4 mx-auto text-[#718096]">
                    私たちの活動は300円から応援いただけます。
                    皆様の寄付が、子どもたちの未来を切り開く力になります。
                  </p>
                </div>
                <div className="lg:w-3/4 mx-auto mb-12">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-6 md:w-1/3 w-full">
                      <div className="border border-[#E2E8F0] rounded-sm p-6 h-full">
                        <p className="text-2xl font-bold mb-2" style={{ color: '#1476A6' }}>¥3,000</p>
                        <p className="text-[#4A5568] text-sm leading-relaxed">
                          1人の子どもが1ヶ月間プログラミング教室に参加できます
                        </p>
                      </div>
                    </div>
                    <div className="p-6 md:w-1/3 w-full">
                      <div className="border border-[#E2E8F0] rounded-sm p-6 h-full">
                        <p className="text-2xl font-bold mb-2" style={{ color: '#1476A6' }}>¥10,000</p>
                        <p className="text-[#4A5568] text-sm leading-relaxed">
                          地方での出張授業1回分の交通費になります
                        </p>
                      </div>
                    </div>
                    <div className="p-6 md:w-1/3 w-full">
                      <div className="border border-[#E2E8F0] rounded-sm p-6 h-full">
                        <p className="text-2xl font-bold mb-2" style={{ color: '#1476A6' }}>¥30,000</p>
                        <p className="text-[#4A5568] text-sm leading-relaxed">
                          新しい教材の開発費に充てられます
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="https://syncable.biz/associate/newcreator-org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button"
                      className="text-white border-0 py-3 px-12 focus:outline-none rounded-sm text-base font-medium transition-colors"
                      style={{ background: '#FDCA60', color: '#1A202C' }}
                    >
                      クレジットカードで寄付
                    </button>
                  </a>
                  <p className="mt-6 text-sm text-[#718096]">
                    GMOあおぞらネット銀行 法人営業部(101) 1193846
                    トクヒ）ニュークリエイターオルグ 宛
                  </p>
                  <p className="mt-1 text-sm text-[#718096]">
                    上記への振り込みでもご支援いただけます
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <Contact />
        </main>
        <FooterCta />
        <Footer />
      </>
    </>
  );
}

export const getStaticProps = async () => {
  const allNews = getAllNews();
  const allArchives = getAllArchives();
  const allMedia = getAllMedia();

  return {
    props: {
      news: allNews.slice(0, 5),
      archives: allArchives.slice(0, 4),
      media: allMedia.slice(0, 3),
    },
  };
};
