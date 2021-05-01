import Header from "../components/header";
import Hero from "../components/hero";
import Board from "../components/board";
import Sponser from "../components/sponser";
import Footer from "../components/footer";
import Font from "../components/font";
import Withus from "../components/with-us";
import Heads from "./_head";
import moment from "moment";

export default function Home({ news }) {
    return (
        <>
            <Heads />
            <body>
                <Header />
                <main>
                    <Hero />
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div class="mb-2 md:w-1/3">
                                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                                    Activities
                                </h2>
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                    主な活動内容
                                </h1>
                            </div>
                            <div className="md:w-2/3 md:pl-6">
                                <p className="leading-relaxed text-base">
                                    2019年1月に発足した次世代の学びをオープンに制作・提供するNPO法人です。
                                    <br />
                                    誰でも自由に使用や改変を行うことができ、無料で使えるオープンソースという形で提供される教材の
                                    <br />
                                    開発およびそれらを利用したイベントの開催を行っています。
                                </p>
                            </div>
                        </div>
                        <div className="container mx-auto">
                            <div className="p-4 lg:w-full">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 p-16 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                        VISION
                                    </h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                        IT教育を全国の子どもたちに格差なく届ける
                                    </h1>
                                    <p className="leading-relaxed mb-3">
                                        DELIVERING IT EUCATION TO ALL CHILDREN
                                        WITHOUT DISPARITY
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-wrap w-full mb-12">
                                <div class="lg:w-1/3 w-full mb-6 lg:mb-0">
                                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                                        Activities
                                    </h2>
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                        主な活動内容
                                    </h1>
                                </div>
                                <p class="lg:w-2/3 w-full leading-relaxed text-gray-500">
                                    Whatever cardigan tote bag tumblr hexagon
                                    brooklyn asymmetrical gentrify, subway tile
                                    poke farm-to-table. Franzen you probably
                                    haven't heard of them man bun deep jianbing
                                    selfies heirloom prism food truck ugh squid
                                    celiac humblebrag.
                                </p>
                            </div>
                            <div class="flex flex-wrap -m-4">
                                <div class="xl:w-1/2 md:w-1/2 p-4">
                                    <div class="bg-gray-100 p-6 rounded-lg">
                                        <img
                                            class="h-60 rounded w-full object-cover object-center mb-6"
                                            src="https://dummyimage.com/720x400"
                                            alt="content"
                                        />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                            プログラミング体験ワークショップ開催
                                        </h2>
                                        <p class="leading-relaxed text-base">
                                            2017年より、子ども向けのプログラミング教室「newCreator（ニュークリエイター）」を開催・運営してきました。
                                            <br />
                                            有名企業とのコラボレーションイベントや、地域でのワークショップなどを通して、多くの子どもたちにプログラミング教育を提供しています。
                                        </p>
                                    </div>
                                </div>
                                <div class="xl:w-1/2 md:w-1/2 p-4">
                                    <div class="bg-gray-100 p-6 rounded-lg">
                                        <img
                                            class="h-60 rounded w-full object-cover object-center mb-6"
                                            src="https://dummyimage.com/720x400"
                                            alt="content"
                                        />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                            プログラミング体験ワークショップ開催
                                        </h2>
                                        <p class="leading-relaxed text-base">
                                            2017年より、子ども向けのプログラミング教室「newCreator（ニュークリエイター）」を開催・運営してきました。
                                            <br />
                                            有名企業とのコラボレーションイベントや、地域でのワークショップなどを通して、多くの子どもたちにプログラミング教育を提供しています。
                                        </p>
                                    </div>
                                </div>
                                <div class="xl:w-1/2 md:w-1/2 p-4">
                                    <div class="bg-gray-100 p-6 rounded-lg">
                                        <img
                                            class="h-60 rounded w-full object-cover object-center mb-6"
                                            src="https://dummyimage.com/720x400"
                                            alt="content"
                                        />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                            プログラミング体験ワークショップ開催
                                        </h2>
                                        <p class="leading-relaxed text-base">
                                            2017年より、子ども向けのプログラミング教室「newCreator（ニュークリエイター）」を開催・運営してきました。
                                            <br />
                                            有名企業とのコラボレーションイベントや、地域でのワークショップなどを通して、多くの子どもたちにプログラミング教育を提供しています。
                                        </p>
                                    </div>
                                </div>
                                <div class="xl:w-1/2 md:w-1/2 p-4">
                                    <div class="bg-gray-100 p-6 rounded-lg">
                                        <img
                                            class="h-60 rounded w-full object-cover object-center mb-6"
                                            src="https://dummyimage.com/720x400"
                                            alt="content"
                                        />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                                            プログラミング体験ワークショップ開催
                                        </h2>
                                        <p class="leading-relaxed text-base">
                                            2017年より、子ども向けのプログラミング教室「newCreator（ニュークリエイター）」を開催・運営してきました。
                                            <br />
                                            有名企業とのコラボレーションイベントや、地域でのワークショップなどを通して、多くの子どもたちにプログラミング教育を提供しています。
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
                                        className="py-8 flex flex-wrap md:flex-no-wrap border-t-2 "
                                        key={news.id}
                                    >
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="mt-1 text-gray-500 text-sm">
                                                {moment(news.create_at).format(
                                                    "YYYY.MM.DD"
                                                )}
                                            </span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                                {news.title}
                                            </h2>
                                            <a
                                                className="text-indigo-500 inline-flex items-center mt-4"
                                                href={news.link}
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
                    <Board />
                    <Sponser />
                    <Font />
                    <Withus />
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
