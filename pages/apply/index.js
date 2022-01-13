import Footer from "../../components/footer";
import Header from "../../components/header";
import Heads from "./_head";
import component from "../../styles/components/hero.module.scss";

export default function Apply() {
    return (
        <>
            <Heads />
            <Header />
            <main>
                <section className={component.hero__cover}>
                    <div>
                        <h1 className={component.hero__title__apply}>
                            おうちでプログラミングをはじめよう。
                            <br />
                            全国の小学生に micro:bit プレゼント！
                        </h1>
                        <h2 className={component.hero__subtitle}>
                            クラウドファンディングで集めた資金で、小学生のまなびをサポートします。
                            <br />
                            micro:bit でプログラミングをはじめてみませんか？
                        </h2>
                    </div>
                </section>
                <footer className="footer--sticky">
                    <p className="footer--sticky__text">
                        ご好評につき、募集は終了いたしました。
                        <br />
                        みなさまのご応募ありがとうございました！
                    </p>
                </footer>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
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

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
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
                                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                    href="https://legal.new.or.jp/rule"
                                >
                                    ルールを確認する
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font mt-10">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            提供内容
                        </h1>
                    </div>
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
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
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="/img/apply/microbit.png"
                            />
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container mx-auto flex px-5 mb-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="/img/apply/text.png"
                            />
                        </div>
                        <div className="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
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
                <section className="text-gray-700 body-font mt-10">
                    <div className="container px-5 py-24 mx-auto text-center">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
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
                                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="3"
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
                                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="3"
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
                                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="3"
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
                                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="3"
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
                                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="3"
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
                                <div className="bg-gray-200 rounded flex p-4 h-full items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="3"
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
                            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                詳しく見る
                            </button>
                        </a>
                        <small>
                            ※ 外部サイト (micro:bit 公式サイト)
                            にジャンプします。
                        </small>
                    </div>
                </section>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                ご応募の流れ
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                利用規約、ルールをよくお読みの上ご応募ください。
                            </p>
                        </div>
                        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                                1
                            </div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                                        下記項目を確認する
                                    </h2>
                                    <p className="leading-relaxed">
                                        すべてご確認ください。プレゼントにあたっての重要な事項が記載されています。
                                    </p>
                                    <p className="leading-relaxed">
                                        <a
                                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                            href="https://legal.new.or.jp/rule"
                                        >
                                            ルール
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </p>
                                    <p className="leading-relaxed">
                                        <a
                                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                            href="https://legal.new.or.jp/tos/"
                                        >
                                            利用規約
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
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
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                                2
                            </div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
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
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
                                3
                            </div>
                            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        className="w-12 h-12"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
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
                <section className="text-gray-700 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
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
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                支援者の方々
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                このプロジェクトはさまざまな団体、個人にご支援いただき成り立っています。
                                <br />
                                あなたもその一員になりませんか？
                            </p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a
                                    className="block relative h-48 rounded overflow-hidden"
                                    href="https://logy.app"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/logy.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        プログラミング教室
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        LOGYさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/kamiyama-kousen.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        神山まるごと高専設立委員会
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        池田 朋弘さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a
                                    className="block relative h-48 rounded overflow-hidden"
                                    href="https://www.kidsweekend.jp/portal"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/kids-weekend.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        子供向け教室・イベントの検索・予約サービス
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        Kids Weekendさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/morikawa.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        micro:bitプログラミング研究室 運営
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        森川 治雄さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/nakamura.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        京都産業大学 非常勤講師
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        中村 亮太さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="img/apply/sponser/ePRO.png"
                                    />
                                </a>
                                <div className=" mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        プログラミング学習塾
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        (e) PROさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/higashide.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        株式会社Yoki 代表取締役社長
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        東出 風馬さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/iteens-lab.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        子どもプログラミング教室
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        ITeens Labさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/kondo.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        ITeens Lab 代表
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        近藤 悟さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/shirahige.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        一般社団法人CRoots 理事
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        白髭 直樹さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/koyama.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        NPO法人ハックジャパン 代表理事
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        小山 優輝さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a
                                    className="block relative h-48 rounded overflow-hidden"
                                    href="https://crssrds.jp/aboutus/"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="https://crssrds.jp/assets/images/banner/crossroads.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        crossroads代表
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        若林 健一さま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a
                                    className="block relative h-48 rounded overflow-hidden"
                                    href="https://geolonia.com/"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/geolonia.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        地図サービス
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        株式会社Geoloniaさま
                                    </h2>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src="/img/apply/sponser/coming.png"
                                    />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1"></h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-700 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
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
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                企画・運営
                            </h1>
                        </div>
                        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                                    特定非営利活動法人ニュークリエイター・オルグ
                                </h1>
                                <div className="leading-relaxed">
                                    <p className="leading-relaxed">
                                        2019年1月に発足した次世代の学びをオープンに制作・提供するNPO法人です。
                                        <br />
                                        誰でも自由に使用や改変を行うことができ、無料で使える「オープンソース」という形で提供される教材の開発およびそれらを利用したイベントの開催を行っています。
                                        <br />
                                        現在、高校生・大学生を中心としたメンバーで活動しています。
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        <a
                                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                            href="/"
                                        >
                                            コーポレートサイト
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        <a
                                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                            href="mailto:contact@newcreator.org"
                                        >
                                            お問い合わせ
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
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
