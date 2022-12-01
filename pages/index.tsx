import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Heads from "./_head";
import dayjs from "dayjs";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import Contact from "../components/contact";

export default function Home({ news }) {
    return (
      <>
        <Heads child={null} />
        <body>
          <Header />
          <main>
            <Hero />
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="mb-2 md:w-1/3">
                  <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    About
                  </h2>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                    newCreator.org とは？
                  </h1>
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <p className="leading-relaxed text-base">
                    特定非営利活動法人ニュークリエイター・オルグは、「全国の子どもたちにIT教育を格差なく届ける」というビジョンのもと活動を行っております。
                    <br />
                    とりわけIT教育は、都市部と地方部で大きな環境の差があります。
                    <br />
                    文部科学省の調査でもプログラミング教育の趣旨、目的、基本的な考え方などの情報が不足していることから都市部と比較して地方部でのプログラミング・ITに関する教育が遅れていることがわかっていることのほか、子どもが進路や将来を考えるときに参考となるロールモデルが身近にいないことなど、地方が抱える課題は大きい
                    と考えます。
                    <br />
                    そのような課題の解決に向け、全国の子どもたちが隔てなくITに親しみ、利活用できるようにするために、オンライン及び全国各地でのイベントを実施しています。
                  </p>
                </div>
              </div>
              <div className="container mx-auto">
                <div className="p-4 lg:w-full">
                  <div className="h-full bg-gray-100 bg-opacity-75 px-8 p-16 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500  mb-1">
                      Vision
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      IT教育を全国の子どもたちに格差なく届ける
                    </h1>
                    <p className="leading-relaxed mb-3 italic">
                      Delivering IT education to all children without disparity
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-12">
                  <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                      Activities
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                      主な活動内容
                    </h1>
                  </div>
                  <p className="lg:w-2/3 w-full leading-relaxed text-gray-500">
                    子どもたちに高い品質の教育・体験を届けるために、さまざまな形での活動を行っています。
                    <br />
                    ニュークリエイター・オルグではNPO法人という立場を活かし、民間企業と行政、そして参加者をつなぐイベント・プログラムを
                    行っています。これによりステークホルダーに左右されず、内容の濃いプログラムを提供できます。
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="xl:w-1/2 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        className="h-60 rounded w-full object-cover object-center mb-6"
                        src="/img/works/workshop.jpg"
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        プログラミング体験ワークショップ開催
                      </h2>
                      <p className="leading-relaxed text-base">
                        これからの子どもたちが必ず必要とされる技術の１つでもあるプログラミング教育を企業や行政とコラボして提供しています。自社主催のワークショップに限らず講師の派遣などにより2017年度より全国各地での教室を随時開講。
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/2 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        className="h-60 rounded w-full object-cover object-center mb-6"
                        src="/img/works/microbit.jpg"
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        教材提供（子ども向け）
                      </h2>
                      <p className="leading-relaxed text-base">
                        教育用マイコンボード「micro:bit」とニュークリエイター・オルグが制作したテキスト教材を配布するプロジェクトを企画・実施。
                        クラウドファンディングを通じて資金の調達をおこない、多くの子どもたちにプログラミングを体験してもらう機会をとどけることができました。
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/2 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        className="h-60 rounded w-full object-cover object-center mb-6"
                        src="/img/works/logy.jpg"
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        教材提供（法人向け）
                      </h2>
                      <p className="leading-relaxed text-base">
                        教材提供を行うことで安価でより多くの子どもたちにプログラミングを学ぶ機会を提供できるようになりました。
                        micro:bitを使ったマンツーマンオンラインレッスンの提供や、共同でのイベントの企画および運営を行っています。
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/2 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        className="h-60 rounded w-full object-cover object-center mb-6"
                        src="/img/works/school.jpg"
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        オンライン・プログラミング教室
                      </h2>
                      <p className="leading-relaxed text-base">
                        小学生・中学生向けのプログラミング教室「newCreator
                        School（ニュークリエイター
                        スクール）」を、他社のプランよりもリーズナブルな価格で、１対１のオンライン授業という形で提供しております。
                      </p>
                    </div>
                  </div>
                  <div className="xl:w-1/2 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <img
                        className="h-60 rounded w-full object-cover object-center mb-6"
                        src="/img/works/school-plus.png"
                        alt="content"
                      />
                      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        学校へのカリキュラム・授業導入
                      </h2>
                      <p className="leading-relaxed text-base">
                        「newCreator School
                        +」という名称でプログラミング教育支援としてカリキュラムや教職員向けのマニュアルなどを提供しています。
                        <br />
                        2021年4月より兵庫県たつの市立龍野西中学校の特別支援学級にてオンライン授業とマニュアルの提供を行っています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="text-gray-700 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    Information
                  </h2>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                    最新のお知らせ
                  </h1>
                </div>
                <div className="-my-8">
                  {news.map((news) => (
                    <div
                      className="py-8 flex flex-wrap md:flex-no-wrap border-b-2 "
                      key={news.id}
                    >
                      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="mt-1 text-gray-500 text-sm">
                          {dayjs(news.create_at).format("YYYY.MM.DD")}
                        </span>
                      </div>
                      <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 leading-relaxed">
                          {news.title}
                        </h2>
                        <a
                          className="text-indigo-500 inline-flex items-center mt-4"
                          href={"/information/" + news.id}
                        >
                          詳しく見る
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <section className="text-gray-700 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    Partner
                  </h2>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    支援・協力企業
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    当法人はさまざまな団体、個人にご支援いただき成り立っています。
                    <br />
                    あなたもその一員になりませんか？
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/noevir.png"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        ノエビアグリーン財団
                      </h2>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/google.jpg"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        グーグル合同会社<small>（イベントパートナー）</small>
                      </h2>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/lenovo.png"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        レノボ・ジャパン合同会社
                        <small>（イベントパートナー）</small>
                      </h2>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/sakura.png"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        さくらインターネット株式会社
                        <small>（イベントパートナー）</small>
                      </h2>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/gmo.jpg"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        GMOインターネット株式会社
                        <small>（イベントパートナー）</small>
                      </h2>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/epara.png"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        株式会社ePARA
                      </h2>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/eduo.png"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        株式会社Yoki / eduo
                      </h2>
                    </div>
                  </div>
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/yukai.png"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        ユカイ工学株式会社
                        <small>（イベントパートナー）</small>
                      </h2>
                    </div>
                  </div>
                  {/* <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <img
                      alt="sponser"
                      className="object-cover object-center w-full block rounded-lg border-2 h-48 rounded "
                      src="/img/sponser/noimage.png"
                    />
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        株式会社ゼロディバイド
                      </h2>
                    </div>
                  </div> */}
                  <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="sponser"
                        className="object-cover object-center w-full h-full block rounded-lg border-2 "
                        src="/img/sponser/osaka.png"
                      />
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                        大阪市
                      </h2>
                    </div>
                  </div>
                  {/* <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="sponser"
                                            className="object-cover object-center w-full h-full block rounded-lg border-2 "
                                            src="/img/sponser/nakamura.png"
                                        />
                                    </a>
                                    <div className="mt-4">
                                        <h2 className="text-gray-900 title-font text-lg font-medium mb-2">
                                            中村 亮太
                                        </h2>
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font">
                                            京都産業大学 非常勤講師
                                        </h3>
                                    </div>
                                </div> */}
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                  <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    Message
                  </h2>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                    想い
                  </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed mb-12">
                        近年インターネットなどの情報通信技術により、社会はこれまでにない速度で変化し続けていますが、教育の内容はそう大きくは変わっていないのが現状です。
                        <br />
                        そのため、最新の情報にあわせた、最新の教育を提供していくことが我々の使命ではないかと考えています。
                        <br />
                        地域の方々、行政・企業の皆さまと協力し、よりよい「まなび」をつくっていくことはもちろん、すべての子どもたちに楽しく学習に取り組んでもらえる社会をめざします。
                      </p>
                      <a className="flex items-center">
                        <img
                          alt="testimonial"
                          src="/img/member/yoshi.jpg"
                          className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-6">
                          <span className="title-font font-medium text-gray-900">
                            改野 由尚
                          </span>
                          <span className="text-gray-500 text-sm">
                            理事長 / Co-Founder
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                      Detail
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                      法人情報
                    </h1>
                  </div>
                  <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                    <span className="text-gray-500">法人名</span>
                    <span className="ml-auto text-gray-900">
                      特定非営利活動法人ニュークリエイター・オルグ
                    </span>
                  </div>
                  <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                    <span className="text-gray-500">法人番号</span>
                    <span className="ml-auto text-gray-900">3120905005839</span>
                  </div>
                  <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                    <span className="text-gray-500">代表者名</span>
                    <span className="ml-auto text-gray-900">改野 由尚</span>
                  </div>
                  <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                    <span className="text-gray-500">設立</span>
                    <span className="ml-auto text-gray-900">
                      2017年より活動、2019年1月法人化
                    </span>
                  </div>
                  <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                    <span className="text-gray-500">従業員数</span>
                    <span className="ml-auto text-gray-900">13名</span>
                  </div>
                  <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                    <span className="text-gray-500">事業内容</span>
                    <span className="ml-auto text-gray-900">
                      IT教育事業及び啓発事業
                      <br />
                      次世代人材の育成に関する情報提供事業
                    </span>
                  </div>
                  <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                    <span className="text-gray-500">所在地</span>
                    <span className="ml-auto text-gray-900">
                      〒560-0054<br/>
                      大阪府豊中市桜の町 3-7-7
                    </span>
                  </div>
                  <div className="lg:px-20 px-2 flex border-t border-b mb-6 border-gray-200 py-4">
                    <span className="text-gray-500">東京・五反田事業所</span>
                    <span className="ml-auto text-gray-900">
                      〒141-0031<br/>東京都品川区西五反田7-22 TOCビル12F-51
                    </span>
                  </div>
                    <small>※ 郵便物等は東京・五反田事業所へお願いいたします。</small>
                </div>
              </div>
            </section>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    Follow us
                  </h2>
                  <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                    私たちの活動を支援して頂けませんか？
                  </h1>
                  <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto">
                    私たちの活動は、300円より応援していただくことができます。
                    <br />
                    寄付いただいた資金は当法人の活動資金としてさまざまな活動に使われます。
                  </p>
                </div>
                <p className="w-full mx-auto text-center">
                  <small>
                    GMOあおぞら銀行 法人営業部(101) 1193846
                    トクヒ）ニュークリエイターオルグ 宛
                  </small>
                </p>

                <p className="mt-4 text-base leading-relaxed w-full mx-auto text-center">
                  <small>上記へ振り込みもしくは</small>
                </p>
                <a
                  href="https://syncable.biz/associate/newcreator-org"
                  target="_blank"
                >
                  <button className="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-3 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    クレジットカードで寄付
                  </button>
                </a>
                {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">
                                            Authentic Cliche Forage
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">
                                            Kinfolk Chips Snackwave
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">
                                            Coloring Book Ethical
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">
                                            Typewriter Polaroid Cray
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">
                                            Pack Truffaut Blue
                                        </span>
                                    </div>
                                </div>
                                <div className="p-2 sm:w-1/2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                            <path d="M22 4L12 14.01l-3-3"></path>
                                        </svg>
                                        <span className="title-font font-medium">
                                            The Catcher In The Rye
                                        </span>
                                    </div>
                                </div>
                            </div> */}
                {/* <div className="lg:w-1/2 md:w-2/3 mx-auto mt-12">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label
                                                for="email"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label
                                                for="message"
                                                className="leading-7 text-sm text-gray-600"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                       
                            </div> */}
              </div>
            </section>
            <Contact />
            {/* <section className="text-gray-600 body-font">
              <div className="container px-5 pt-24  pb-40 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                    With us
                  </h2>
                  <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                    一緒に新しい教育をつくりませんか？
                  </h1>
                  <p className="text-base leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto">
                    各種応募、コラボレーションのご提案などを積極的に募集しております。
                    <br />
                    ぜひご相談くださいませ。
                  </p>
                </div>
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                          企業スポンサー/コラボ
                        </h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base">
                          教育の行き届かない地域での、IT教育を広める取り組みに資金面や様々な形でのリソース提供・共同イベントにご協力ください。
                        </p><a
                                                className="mt-3 text-blue-500 inline-flex items-center"
                                                href="mailto:contact@newcreator.org"
                                            >
                                                問い合わせる
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a> *
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                          プロジェクトスタッフ
                        </h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base">
                          教材の企画やキャンプの計画など、直接的にnewCreatorを支えてくださる方を募集しています。
                        </p>
                        <a className="mt-3 text-blue-500 inline-flex items-center">
                                                詳しく見る
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                          </svg>
                        </div>
                        <h2 className="text-gray-900 text-lg title-font font-medium">
                          協力コミュニティー
                        </h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-base">
                          newCreator教材を活用した、プログラミング教室をあなたの街や学校で実施してくださる団体を募集しています。
                        </p>
                        <a className="mt-3 text-blue-500 inline-flex items-center">
                                                問い合わせる
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="mailto:contact@newcreator.org">
                  <button className="text-center flex flex-col justify-center mx-auto mt-12 text-white bg-indigo-500 border-0 py-3 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    <p className="text-center mx-auto">お問い合わせ</p>
                    <small className="text-center mx-auto">
                      contact@newcreator.org
                    </small>
                  </button>
                </a>
              </div>
            </section> */}
            <section className="text-gray-600 body-font relative">
              <div className="absolute inset-0 bg-gray-300">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.154364186492!2d135.46238851612793!3d34.802058080408514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000fa8dc4958889%3A0x9f74e5c550b052c9!2z44CSNTYwLTAwNTQg5aSn6Ziq5bqc6LGK5Lit5biC5qGc44Gu55S677yT5LiB55uu77yX4oiS77yX!5e0!3m2!1sja!2sjp!4v1620366469450!5m2!1sja!2sjp"
                  style={{
                    filter: "grayscale(0.2) contrast(1.0) opacity(0.6)",
                  }}
                ></iframe>
              </div>
              <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md h-96">
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="nc_org"
                    options={{ height: 150 }}
                  />
                  <div className="mt-4 flex items-center justify-center">
                    <TwitterFollowButton
                      screenName={"nC_org"}
                      style={{ margin: "0 auto" }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </body>
      </>
    );
}

export const getStaticProps = async () => {
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const data = await fetch(
        "https://newcreator-org.microcms.io/api/v1/news?orders=-create_at&limit=3",
        key
    )
        .then((res) => res.json())
        .catch(() => null);
    return {
        props: {
            news: data.contents,
        },
    };
};
