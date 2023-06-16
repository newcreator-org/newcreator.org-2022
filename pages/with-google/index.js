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
                        backgroundImage: `url(/img/event/with-google/CVG-94-black.jpg)`,
                    }}>
                    <div class={component.hero__subpage_cover_container}>
                        <h1 className={component.hero__subpage_cover_title}>
                            newCreator at Google 2023
                        </h1>
                        <h2 className={component.hero__subpage_cover_subtitle}>
                        ◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯◯を実践
                        </h2>
                        <div className={component.hero__subpage_cover_text}>
                            2023年7月23日（大阪）・7月30日（東京）<br />
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
                                生成AIの最先端の世界に触れよう
                            </h1>
                        </div>
                        <div className="text-left w-full">
                            <p className="leading-relaxed text-base">
                                2022年後半から急激に注目を集めている対話形式でまるで人間と話しているように会話できる技術を持った生成系AIに注目が集まっています。
                                newCreater with Google では、Googleの有志社員と一緒にジェネレーティブAIを使ったワークショップを開催します。
                            </p>
                            <a href="https://microbit.org/">
                                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    詳しく見る
                                </button>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                タイムテーブル
                            </h1>
                        </div>
                        
                    </div>
                </section>                
                



                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-5">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                コンプライアンス遵守への取り組み
                            </h1>
                        </div>
                        <div className="text-left w-full">
                            <p className="leading-relaxed text-base">
                                本ワークショップでは、生成系AIの利便性だけでなく、危険性やリスク、情報セキュリティーについてもテーマとして取り扱います。
                                また、本ワークショップで取り扱うAIサービスBardの利用規約では18歳以下の利用を制限しています。
                                Bardへの入力操作については、指導者が代理でプロンプトを入力し出力結果を他の手段により書き出したものを提供する形で行われます。
                                また、生成系AIの利用については昨今の社会情勢の中で様々な意見があることから、親御様からの同意書についてもご提出をお願いしております。
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-12 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-5">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                参加・申込
                            </h1>
                        </div>
                        <div className="text-left w-full">
                            <p className="leading-relaxed text-base">
                                <table class="table-auto border-spacing-y-4 border-separate">
                                    <tbody>
                                        <tr>
                                            <td>開催日時　</td>
                                            <td>
                                                2023年7月23日 12:30〜17:00（大阪）<br/>
                                                2023年7月30日 12:30〜17:00（東京）
                                            </td>                                        
                                        </tr>
                                        <tr>
                                            <td>会場</td>
                                            <td>
                                                Google 大阪オフィス、渋谷オフィス <br/>
                                                ※会場住所ならび集合場所は、セキュリティーの都合上、参加が決定した方にメールでご案内させていただきます。
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>参加費</td>
                                            <td>無償</td>
                                        </tr>
                                        <tr>
                                            <td>参加定員</td>
                                            <td>各会場15名〜25名程度（抽選）
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>一次締切</td>
                                            <td>2023年7月14日（金）20:00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-10 mx-auto flex flex-wrap">
                        <div className="flex flex-col text-left w-full mb-5">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                企画・運営
                            </h1>
                        </div>
                        
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
