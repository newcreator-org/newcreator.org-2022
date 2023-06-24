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
                        backgroundImage: `url(/img/event/at-google/google-event-thumb-3206.jpg)`,
                    }}
                >
                    <div class={component.hero__subpage_cover_container}>
                        <h1 className={component.hero__subpage_cover_title}>
                            newCreator at Google 2023
                        </h1>
                        <h2 className={component.hero__subpage_cover_subtitle}>
                            ジェネレーティブAIを使って、将来の夢を叶えよう
                        </h2>
                        <div className={component.hero__subpage_cover_text}>
                            2023年7月23日（大阪）・7月30日（東京）
                            <br />
                            会場：Google 大阪オフィス、東京オフィス
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
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                最先端のテクノロジーの力で自分たちの将来の夢について考えよう
                            </h1>
                        </div>
                        <div className="text-left w-full">
                            <p className="leading-loose text-base">
                                2022年後半から急激に注目を集めている対話形式でまるで人間と話しているように会話できる技術を持った生成系AIに注目が集まっています。
                                newCreater at Google
                                では、Googleの有志社員と一緒にジェネレーティブAIを使ったワークショップを開催します。
                            </p>
                            <br />
                            <p className="leading-loose text-base">
                                ジェネレーティブAIは、私たちの生活を大きく変える可能性を秘めています。しかし、その一方で、ジェネレーティブAIが悪用される可能性も懸念されています。本ワークショップでは、ジェネレーティブAIの利便性だけでなく、危険性やリスク、情報セキュリティーについても学びます。また、ジェネレーティブAIを安全に、かつ効果的に活用するための方法についても学びます。
                            </p>
                            <p className="leading-loose text-base">
                                本ワークショップは、高校1年生〜高校3年生であれば、プログラミングに関する知識は一切問わず、どなたでもご参加いただけます。参加費無料です。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-7">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                タイムテーブル
                            </h1>
                        </div>
                        <div className="px-2 flex-initial w-1/1 sm:w-1/1 md:w-0 lg:w-0 xl:w-0">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src="/img/event/at-google/CVG-94-black.jpg"
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
                                                    [実演]
                                                    様々なジェネレーティブAIの活用方法について知ろう
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-7">13:45</td>
                                            <td>
                                                <span className="font-bold">
                                                    [実践]
                                                    ジェネレーティブAIを使ったワークショップ
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-7">16:20</td>
                                            <td>
                                                <span className="font-bold">
                                                    [発表]
                                                    AIを活用して広がった夢を叶えるためのステップをプレゼンテーション
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-7">17:00</td>
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
                                        src="/img/event/at-google/CVG-94-black.jpg"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-3 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-5">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                コンプライアンス遵守への取り組み
                            </h1>
                        </div>
                        <div className="text-left w-full">
                            <p className="leading-relaxed text-base">
                                ジェネレーティブAI（生成AI）のワークショップでは、利便性だけでなく、危険性やリスク、情報セキュリティについても学びます。
                                ワークショップでは、各AIサービス提供事業者の利用規約に従い、利用範囲や年齢制限に沿った形でAIサービスを利用します。
                                一部のAIサービスについては、指導者が代わりにプロンプトを入力し、出力結果を他の方法で提供する場合もあります。
                                ジェネレーティブAIの利用については、社会情勢により様々な意見がありますが、ニュークリエイター・オルグでは、参加者は保護者の同意書を提出する必要があります。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
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
                                            <td className="pr-5 w-24">開催日時</td>
                                            <td>
                                                2023年7月23日
                                                12:30〜17:00（大阪）
                                                <br />
                                                2023年7月30日
                                                12:30〜17:00（東京）
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">会場</td>
                                            <td>
                                                Google
                                                大阪オフィス、渋谷オフィス{" "}
                                                <br />
                                                ※会場住所ならび集合場所は、セキュリティーの都合上、参加が決定した方にメールでご案内させていただきます。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">参加費</td>
                                            <td>無償</td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">参加定員</td>
                                            <td>
                                                各会場15名〜20名程度（応募者多数の場合には抽選）
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 w-24">一次締切</td>
                                            <td>2023年7月14日（金）20:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="https://microbit.org/">
                                    <button className="mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                        参加申込する
                                    </button>
                                </a>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-10 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-5 leading-relaxed text-base">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                企画・運営
                            </h1>
                            <p>
                                主催：特定非営利活動法人ニュークリエイター・オルグ
                            </p>
                            <p>共催：NPO法人クリッパー</p>
                            <p>お問い合わせ：<a href="mailto:contact@newcreator.org">contact@newcreator.org</a></p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
