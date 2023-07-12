import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Heads from "./_head";
import component from "../../../components/hero.module.scss";

export default function Apply() {
    return (
        <>
            <Heads />
            <Header />
            <main>
                <section
                    className={component.hero__subpage_cover}
                    style={{
                        backgroundImage: `url(/img/event/at-google/CV201906-90-black.jpg)`,
                    }}
                >
                    <div className={`${component.hero__subpage_cover_container} container max-w-6xl`}>
                        <h1 className={component.hero__subpage_cover_title}>
                            【中高校生向け/参加費無料】<br/>Creative Village 2023
                        </h1>
                        <h2 className={component.hero__subpage_cover_subtitle}>
                        身近な課題をテクノロジーを使って解決するアイデアを考えよう
                        </h2>
                        <div className={component.hero__subpage_cover_text}>
                            日時：2023年7月30日（東京）
                            <br />
                            会場：Google 渋谷オフィス
                        </div>
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
                    <div className="container px-5 py-12 mx-auto flex flex-wrap max-w-6xl">
                        <div className="flex flex-col text-left w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                身近な課題を解決するアイデアを考えよう！
                            </h1>
                        </div>
                        <div className="text-left w-full">
                            <p className="leading-loose text-base">
                                Creative Villageは1日という短いプログラムながら、身近な課題を発掘し、解決策を模索、<br/>メンターからのフィードバックを受けながら最終的に身近な課題を解決するアイディアを動画に編集し発表を行います。
                                メンターにはIT業界で働く社会人がチームの一員として参加し、一緒身近な課題をもとに数年後には未来を変えることが出来るテクノロジーを生かしたアイディアを作り上げていきます。<br/>
                                ワークショップの最後では、縦型動画（Shorts）の1分動画を撮影し、全参加者とメンターによる投票で優勝チームを決定します。
                            </p>
                            <br />
                            <p className="leading-loose text-base">
                                本ワークショップは、中学1年生〜高校3年生（高専など相当年齢であれば学校種別は問いません）であれば、どなたでもご参加いただけます。参加費無料です。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap max-w-6xl">
                        <div className="flex flex-col text-left w-full mb-7">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                タイムテーブル
                            </h1>
                        </div>
                        <div className="px-2 flex-initial w-1/1 sm:w-1/1 md:w-0 lg:w-0 xl:w-0">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="/img/event/at-google/CV201906-90.jpg"
                                    className=""
                                />
                            </div>
                        </div>
                        <div className="flex text-left w-full mt-4 mb-10 items-center justify-center">
                            <div className="flex-initial px-2 w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2">
                                <table className="table-auto border-spacing-y-4 border-separate leading-relaxed">
                                    <tbody>
                                        <tr>
                                            <td className="pr-7">12:30</td>
                                            <td>
                                                <span className="font-bold">
                                                    受付開始
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13:00</td>
                                            <td>
                                                <span className="font-bold">
                                                [学び] オリエンテーション・アイスブレイク<br/>
                                                ・クリエイティブな考え方のヒント<br/>
                                                ・身近な最新テクノロジーの進化について知ろう<br/>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-7">13:45</td>
                                            <td>
                                                <span className="font-bold">
                                                [ワークショップ] デジタルで身近な課題を解決する方法を考えよう<br/>
                                                ・IT企業で働くメンターと一緒に身近な課題をITを使って解決するアイディアを考えよう
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-7">16:00</td>
                                            <td>
                                                <span className="font-bold">
                                                [発表] アイディアを共有しよう<br/>
                                                ・撮影した1分間の縦型動画を共有/紹介
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-7">16:40頃</td>
                                            <td>
                                                <span className="font-bold">
                                                    解散
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="lg:px-12 flex-initial w-0 sm:w-0 md:w-2/3 md:px-4 lg:w-1/2 xl:w-1/2">
                                <div className="overflow-hidden md:rounded-tl-extraLarge md:rounded-br-extraLarge lg:rounded-tl-extraLarge lg:rounded-br-extraLarge">
                                    <img
                                        src="/img/event/at-google/CV201906-90.jpg"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap max-w-6xl">
                        <div className="flex flex-col text-left w-full mb-5">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                参加申込
                            </h1>
                        </div>
                        <div className="text-left w-full">
                            <p className="leading-relaxed text-base">
                                <table className="table-fixed border-spacing-y-4 border-separate">
                                    <tbody>
                                        <tr>
                                            <td className="pr-5 w-24">
                                                開催日時
                                            </td>
                                            <td>
                                                2023年7月30日
                                                12:30〜17:00（東京）
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">対象</td>
                                            <td>
                                                高校１年生から高校３年生
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">会場</td>
                                            <td>
                                                Google
                                                渋谷オフィス
                                                <br />
                                                ※会場住所ならび集合場所は、セキュリティーの都合上、参加が決定した方にメールでご案内させていただきます。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">
                                                持ち物
                                            </td>
                                            <td>・PC / タブレット（あれば）<br />
                                            ・スマホ / 携帯電話 <br />
                                            ・筆記用具 <br />
                                            ・生徒手帳 / 学生証 <br />
                                            ・参加同意書
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">
                                                参加費
                                            </td>
                                            <td>無償</td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">
                                                参加定員
                                            </td>
                                            <td>
                                                15名〜20名程度（先着順）
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbIg1GD8oSiQ2CUexsCOFHrX5zEkc5euXEIdlk5CnfxextKQ/viewform?usp=sf_link">
                                    <button className="mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        参加申込する
                                    </button>
                                </a>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-10 mx-auto flex flex-wrap max-w-6xl">
                        <div className="flex flex-col text-left w-full mb-5 leading-relaxed text-base">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                企画・運営
                            </h1>
                            <p>
                                主催：特定非営利活動法人ニュークリエイター・オルグ
                            </p>
                            <p>共催：NPO法人クリッパー</p>
                            <p>
                                お問い合わせ：
                                <a href="mailto:contact@newcreator.org">
                                    contact@newcreator.org
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
