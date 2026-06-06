import Footer from "../../components/footer";
import Header from "../../components/header";
import Heads from "./_head";


export default function Apply() {
    return (
        <>
            <Heads />
            <Header />
            <main>
                <section
                  style={{
                    background: '#1476A6',
                    padding: '80px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                    <div style={{ maxWidth: '800px', color: '#fff' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', lineHeight: 1.4, marginBottom: '1rem' }}>
                            おうちでプログラミングをはじめよう。
                            <br />
                            全国の小学生に micro:bit プレゼント！
                        </h1>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.7, opacity: 0.9 }}>
                            クラウドファンディングで集めた資金で、小学生のまなびをサポートします。
                            <br />
                            micro:bit でプログラミングをはじめてみませんか？
                        </h2>
                    </div>
                </section>
                <footer style={{
                    backgroundColor: "#53B1F0",
                    height: 80,
                    width: "100%",
                    textAlign: "center",
                    display: "table",
                    zIndex: 1
                }}>
                    <p style={{
                          color: "#FFFFFF",
                          display: "table-cell",
                          verticalAlign: "middle",
                    }}>
                        ご好評につき、募集は終了いたしました。
                        <br />
                        みなさまのご応募ありがとうございました！
                    </p>
                </footer>
                <section className="text-[#1A202C] body-font">
                    <div className="container px-5 py-20 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="page-title font-medium title-font text-[#1A202C]">
                                はじめに
                            </h1>
                        </div>
                        <div className="text-center w-full">
                            <p className="leading-relaxed text-base">
                                今、社会の情勢は大きく変わってきています。
                                <br />
                                外出自粛に加え、小学校の休校など、子どもたちの活動が大きく制限され、学びの幅はこれまでよりも格段に狭まったことでしょう。
                                <br />
                                <br />
                                こんな状況を少しでもよいものにしたい。子どもたちの学びたいことをとことん学べるような環境をつくりたい。
                                <br />
                                そんな願いからこのプロジェクトは始まりました。
                                <br />
                                <br />
                                実施しているクラウドファンディングで集めた資金で、教材を提供できるだけ提供していきます。
                                <br />
                                それで少しでもおうち時間を有意義に過ごしてもらえたら、
                                <br />
                                これ以上に幸せなことはありません。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-[#1A202C] body-font">
                    <div className="container px-5 py-20 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="page-title font-medium title-font text-[#1A202C]">
                                対象
                            </h1>
                        </div>
                        <div className="text-center w-full">
                            <p className="leading-relaxed text-base">
                                日本在住の小学生とその保護者
                                <br />
                                また、ルールおよび利用規約をお守りいただける方
                            </p>
                            <p className="leading-relaxed text-base mt-4">
                                <a
                                    className="text-[#1476A6] inline-flex items-center md:mb-2 lg:mb-0"
                                    href="/legal/rule"
                                >
                                    ルールを確認する
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
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-[#1A202C] body-font mt-10">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="page-title font-medium title-font text-[#1A202C]">
                            提供内容
                        </h1>
                    </div>
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font page-title mb-4 font-medium text-[#1A202C]">
                                micro:bit スターターキット
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                micro:bit
                                を手軽に始める際にあると便利なパーツが揃ったセットです。
                                <br />
                                はじめてのプログラミングにぴったりです。
                            </p>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                className="object-cover object-center rounded-sm"
                                alt="hero"
                                src="/img/apply/microbit.png"
                            />
                        </div>
                    </div>
                </section>

                <section className="text-[#1A202C] body-font">
                    <div className="container mx-auto flex px-5 mb-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                className="object-cover object-center rounded-sm"
                                alt="hero"
                                src="/img/apply/text.png"
                            />
                        </div>
                        <div className="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font page-title mb-4 font-medium text-[#1A202C]">
                                オリジナル教材
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                当法人が作成した、オリジナルの教材をセットでお届けします。
                                <br />
                                スライドを印刷したものと、WEBでみれるものの２つを用意しています。
                            </p>
                        </div>
                    </div>
                    <p className="text-center">
                        <small>
                            数には限りがございます。
                            <br />
                            また、これらの提供は一定の審査のもと行われます。
                        </small>
                    </p>
                </section>
                <section className="text-[#1A202C] body-font mt-10">
                    <div className="container px-5 py-20 mx-auto text-center">
                        <div className="text-center mb-20">
                            <h1 className="page-title font-medium text-center title-font text-[#1A202C] mb-4">
                                micro:bit とは？
                            </h1>
                            <p className="leading-relaxed text-base">
                                micro:bit(マイクロビット)は、イギリスの放送局BBCを中心に開発された子ども向けの教育用マイコンボードです。
                                <br />
                                <br />
                                マイコンボードとは、小さなコンピュータのようなもので、プログラミングをすることで制御することができます。
                                <br />
                                現在は日本を含む多くの国々で利用されており、日本でも2021年度からのプログラミング教育必修化にともない、授業に使われる学校も増えています。
                                <br />
                                <br />
                                micro:bitには数多くのプログラム可能な機能がついており、単体だけでも多くの機能を使用できます。
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className=" text-center w-full">
                                <p className="leading-relaxed text-base mb-4">
                                    機能の一例
                                </p>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-[#E2E8F0] rounded-sm flex p-6 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-[#1476A6] w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        LED
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-[#E2E8F0] rounded-sm flex p-6 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-[#1476A6] w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        ボタン
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-[#E2E8F0] rounded-sm flex p-6 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-[#1476A6] w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        無線
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-[#E2E8F0] rounded-sm flex p-6 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-[#1476A6] w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        モーションセンサー
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-[#E2E8F0] rounded-sm flex p-6 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-[#1476A6] w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        コンパス
                                    </span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-[#E2E8F0] rounded-sm flex p-6 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        className="text-[#1476A6] w-6 h-6 flex-shrink-0 mr-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">
                                        光・温度センサー
                                    </span>
                                </div>
                            </div>
                        </div>
                        <a href="https://microbit.org/">
                            <button className="btn-primary mx-auto mt-16">
                                詳しく見る
                            </button>
                        </a>
                        <small>
                            ※ 外部サイト (micro:bit 公式サイト)
                            にジャンプします。
                        </small>
                    </div>
                </section>
                <section className="text-[#1A202C] body-font">
                    <div className="container px-5 py-20 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="page-title font-medium title-font mb-4 text-[#1A202C]">
                                ご応募の流れ
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                利用規約、ルールをよくお読みの上ご応募ください。
                            </p>
                        </div>
                        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-[#E2E8F0] pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 mt-10 sm:mt-0 inline-flex items-center justify-center text-[#1476A6] relative z-10 title-font font-bold text-base">
                                1
                            </div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-20 h-20 bg-[#EDF6FB] text-[#1476A6] inline-flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="section-title title-font text-[#1A202C] mb-1">
                                        下記項目を確認する
                                    </h2>
                                    <p className="leading-relaxed">
                                        すべてご確認ください。プレゼントにあたっての重要な事項が記載されています。
                                    </p>
                                    <p className="leading-relaxed">
                                        <a
                                            className="text-[#1476A6] inline-flex items-center md:mb-2 lg:mb-0"
                                            href="/legal/rule"
                                        >
                                            ルール
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
                                    </p>
                                    <p className="leading-relaxed">
                                        <a
                                            className="text-[#1476A6] inline-flex items-center md:mb-2 lg:mb-0"
                                            href="/legal/terms"
                                        >
                                            利用規約
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
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-[#E2E8F0] pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 mt-10 sm:mt-0 inline-flex items-center justify-center text-[#1476A6] relative z-10 title-font font-bold text-base">
                                2
                            </div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-20 h-20 bg-[#EDF6FB] text-[#1476A6] inline-flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="section-title title-font text-[#1A202C] mb-1">
                                        下にあるフォームを記入
                                    </h2>
                                    <p className="leading-relaxed">
                                        このページの下部にフォームがございます。すべての項目に入力をよろしくお願いします。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-[#E2E8F0] pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 mt-10 sm:mt-0 inline-flex items-center justify-center text-[#1476A6] relative z-10 title-font font-bold text-base">
                                3
                            </div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-20 h-20 bg-[#EDF6FB] text-[#1476A6] inline-flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="section-title title-font text-[#1A202C] mb-1">
                                        数日お待ち下さい。
                                    </h2>
                                    <p className="leading-relaxed">
                                        クラウドファンディングの状況により、審査などをいたします。審査後は結果に関わらず、メールでご案内いたします。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-[#1A202C] body-font relative">
                    <div className="container px-5 py-20 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="page-title font-medium title-font mb-4 text-[#1A202C]">
                                ご応募はこちらから
                            </h1>
                            <p
                                className="lg:w-2/3 mx-auto leading-relaxed text-base"
                                style={{ textDecoration: "line-through" }}
                            >
                                利用規約、ルールをよくお読みの上ご応募ください。
                                <br />
                                <strong>
                                    一次締切は 6/30 23:59 までとなっております。
                                </strong>
                            </p>
                            <br />
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                一次募集は終了いたしました。
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto"></div>
                    </div>
                </section>
                <section className="text-[#1A202C] body-font">
                    <div className="container px-5 py-20 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="page-title font-medium title-font mb-4 text-[#1A202C]">
                                支援者の方々
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                このプロジェクトはさまざまな団体、個人にご支援いただき成り立っています。
                                <br />
                                あなたもその一員になりませんか？
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a
                                    className="block relative h-48 rounded-sm overflow-hidden"
                                    href="https://logy.app"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/logy.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        プログラミング教室
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        LOGYさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/kamiyama-kousen.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        神山まるごと高専設立委員会
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        池田 朋弘さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a
                                    className="block relative h-48 rounded-sm overflow-hidden"
                                    href="https://www.kidsweekend.jp/portal"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/kids-weekend.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        子供向け教室・イベントの検索・予約サービス
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        Kids Weekendさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/morikawa.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        micro:bitプログラミング研究室 運営
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        森川 治雄さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/nakamura.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        京都産業大学 非常勤講師
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        中村 亮太さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="img/apply/sponser/ePRO.png"
                                    />
                                </a>
                                <div className=" mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        プログラミング学習塾
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        (e) PROさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/higashide.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        株式会社Yoki 代表取締役社長
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        東出 風馬さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/iteens-lab.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        子どもプログラミング教室
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        ITeens Labさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/kondo.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        ITeens Lab 代表
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        近藤 悟さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/shirahige.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        一般社団法人CRoots 理事
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        白髭 直樹さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/koyama.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        NPO法人ハックジャパン 代表理事
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        小山 優輝さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a
                                    className="block relative h-48 rounded-sm overflow-hidden"
                                    href="https://crssrds.jp/aboutus/"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="https://crssrds.jp/assets/images/banner/crossroads.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        crossroads代表
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        若林 健一さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a
                                    className="block relative h-48 rounded-sm overflow-hidden"
                                    href="https://geolonia.com/"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/geolonia.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1">
                                        地図サービス
                                    </h3>
                                    <h2 className="section-title text-[#1A202C] title-font">
                                        株式会社Geoloniaさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-6 w-full">
                                <a className="block relative h-48 rounded-sm overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/coming.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="card-title text-[#718096] tracking-widest title-font mb-1"></h3>
                                    <h2 className="section-title text-[#1A202C] title-font"></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-[#1A202C] body-font relative">
                    <div className="container px-5 py-20 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="page-title font-medium title-font mb-4 text-[#1A202C]">
                                お知らせ
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                クラウドファンディングは終了しました。
                                <br />
                                たくさんのご支援ありがとうございました！
                            </p>
                        </div>
                        <div
                            className="lg:w-1/2 md:w-2/3 mx-auto"
                            style={{ width: "100%" }}
                        >
                            <iframe
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                                height="365"
                                scrolling="no"
                                style={{ margin: "0 auto" }}
                                src="https://camp-fire.jp/projects/272924/widget"
                            >
                                読み込んでいます…
                            </iframe>
                        </div>
                    </div>
                </section>
                <section className="text-[#1A202C] body-font">
                    <div className="container px-5 py-20 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="page-title font-medium title-font mb-4 text-[#1A202C]">
                                企画・運営
                            </h1>
                        </div>
                        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-6 px-4 mb-6">
                                <h1 className="page-title title-font mb-2 text-[#1A202C]">
                                    特定非営利活動法人ニュークリエイター・オルグ
                                </h1>
                                <div className="leading-relaxed">
                                    <p className="leading-relaxed">
                                        2019年1月に発足した次世代の学びをオープンに制作・提供する特定非営利活動法人です。
                                        <br />
                                        誰でも自由に使用や改変を行うことができ、無料で使える「オープンソース」という形で提供される教材の開発およびそれらを利用したイベントの開催を行っています。
                                        <br />
                                        現在、高校生・大学生を中心としたメンバーで活動しています。
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        <a
                                            className="text-[#1476A6] inline-flex items-center md:mb-2 lg:mb-0"
                                            href="/"
                                        >
                                            コーポレートサイト
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
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        <a
                                            className="text-[#1476A6] inline-flex items-center md:mb-2 lg:mb-0"
                                            href="mailto:contact@newcreator.org"
                                        >
                                            お問い合わせ
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
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-sm overflow-hidden mt-6 sm:mt-0">
                            <img
                                className="object-cover object-center w-full h-full"
                                src="/img/apply/nc.png"
                                alt="stats"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
