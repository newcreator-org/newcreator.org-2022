import Footer from "../../components/footer";
import Header from "../../components/header";
import Heads from "./_head";
import component from "../../components/hero.module.scss";

export default function Apply() {
    return (
        <>
            <Heads />
            <Header />
            <main>
                <section
                    className={component.hero__subpage_cover}
                    style={{
                        backgroundImage: `url(/img/event/with-google/DSC04306-black.jpg)`,
                    }}>
                    <div class={component.hero__subpage_cover_container}>
                        <h1 className={component.hero__subpage_cover_title}>
                            new Creator with Google 2023
                        </h1>
                        <h2 className={component.hero__subpage_cover_subtitle}>
                            Googlerと取り組む本気の生成AIを使って◯◯◯を実践
                        </h2>
                        <div className={component.hero__subpage_cover_text}>
                            2023年7月23日（大阪）・7月30日（東京）<br/>
                            会場：Google 大阪オフィス、東京オフィス</div>
                    </div>
                </section>
                {/*
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
                */}
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                はじめに
                            </h1>
                        </div>
                        <div className="text-left w-full">
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
                            <a href="https://microbit.org/">
                            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                詳しく見る
                            </button>
                        </a>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font relative">
                    <div className="container px-5 py-4 mx-auto">
                        <div className="flex flex-col text-left w-full mb-12">
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
                    </div>
                </section>
                
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-10 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-12">
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
