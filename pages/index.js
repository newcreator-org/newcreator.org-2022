import Header from "../components/header";
import Hero from "../components/hero";
// import Board from "../components/board";
import Footer from "../components/footer";
// import Withus from "../components/with-us";
import Heads from "./_head";
import dayjs from "dayjs";

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
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500  mb-1">
                                        Vision
                                    </h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                        IT教育を全国の子どもたちに格差なく届ける
                                    </h1>
                                    <p className="leading-relaxed mb-3 italic">
                                        Delivering IT education to all children
                                        without disparity
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
                                    Whatever cardigan tote bag tumblr hexagon
                                    brooklyn asymmetrical gentrify, subway tile
                                    poke farm-to-table. Franzen you probably
                                    haven't heard of them man bun deep jianbing
                                    selfies heirloom prism food truck ugh squid
                                    celiac humblebrag.
                                </p>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                <div className="xl:w-1/2 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img
                                            className="h-60 rounded w-full object-cover object-center mb-6"
                                            src="https://dummyimage.com/720x400"
                                            alt="content"
                                        />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                            プログラミング体験ワークショップ開催
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            2017年より、子ども向けのプログラミング教室「newCreator（ニュークリエイター）」を開催・運営してきました。
                                            <br />
                                            有名企業とのコラボレーションイベントや、地域でのワークショップなどを通して、多くの子どもたちにプログラミング教育を提供しています。
                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/2 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img
                                            className="h-60 rounded w-full object-cover object-center mb-6"
                                            src="https://dummyimage.com/720x400"
                                            alt="content"
                                        />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                            プログラミング体験ワークショップ開催
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            2017年より、子ども向けのプログラミング教室「newCreator（ニュークリエイター）」を開催・運営してきました。
                                            <br />
                                            有名企業とのコラボレーションイベントや、地域でのワークショップなどを通して、多くの子どもたちにプログラミング教育を提供しています。
                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/2 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img
                                            className="h-60 rounded w-full object-cover object-center mb-6"
                                            src="https://dummyimage.com/720x400"
                                            alt="content"
                                        />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                            プログラミング体験ワークショップ開催
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            2017年より、子ども向けのプログラミング教室「newCreator（ニュークリエイター）」を開催・運営してきました。
                                            <br />
                                            有名企業とのコラボレーションイベントや、地域でのワークショップなどを通して、多くの子どもたちにプログラミング教育を提供しています。
                                        </p>
                                    </div>
                                </div>
                                <div className="xl:w-1/2 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img
                                            className="h-60 rounded w-full object-cover object-center mb-6"
                                            src="https://dummyimage.com/720x400"
                                            alt="content"
                                        />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                            プログラミング体験ワークショップ開催
                                        </h2>
                                        <p className="leading-relaxed text-base">
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
                                        className="py-8 flex flex-wrap md:flex-no-wrap border-b-2 "
                                        key={news.id}
                                    >
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="mt-1 text-gray-500 text-sm">
                                                {dayjs(news.create_at).format(
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
                    <section className="text-gray-700 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-col text-center w-full mb-20">
                                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                                    Sponsers
                                </h2>
                                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                                    支援者の方々
                                </h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                    当法人はさまざまな団体、個人にご支援いただき成り立っています。
                                    <br />
                                    あなたもその一員になりませんか？
                                </p>
                            </div>
                            <div className="flex flex-wrap -m-4">
                                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                    <a
                                        className="block relative h-48 rounded overflow-hidden"
                                        href="https://logy.app"
                                    >
                                        <img
                                            alt="sponser"
                                            className="object-cover object-center w-full h-full block rounded-lg border-2 "
                                            src="/img/sponser/logy.png"
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
                                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="sponser"
                                            className="object-cover object-center w-full h-full block rounded-lg border-2 "
                                            src="/img/sponser/iteens-lab.png"
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
                                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="sponser"
                                            className="object-cover object-center w-full h-full block rounded-lg border-2 "
                                            src="/img/sponser/kamiyama-kousen.png"
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
                                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="sponser"
                                            className="object-cover object-center w-full h-full block rounded-lg border-2 "
                                            src="/img/sponser/nakamura.png"
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
                                <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="sponser"
                                            className="object-cover object-center w-full h-full block rounded-lg border-2 "
                                            src="/img/sponser/morikawa.png"
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
                                    <span className="text-gray-500">
                                        法人名
                                    </span>
                                    <span className="ml-auto text-gray-900">
                                        特定非営利活動法人ニュークリエイター・オルグ
                                    </span>
                                </div>
                                <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                                    <span className="text-gray-500">
                                        法人番号
                                    </span>
                                    <span className="ml-auto text-gray-900">
                                        3120905005839
                                    </span>
                                </div>
                                <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                                    <span className="text-gray-500">
                                        代表者名
                                    </span>
                                    <span className="ml-auto text-gray-900">
                                        改野 由尚
                                    </span>
                                </div>
                                <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                                    <span className="text-gray-500">設立</span>
                                    <span className="ml-auto text-gray-900">
                                        2017年より活動、2019年1月法人化
                                    </span>
                                </div>
                                <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                                    <span className="text-gray-500">
                                        従業員数
                                    </span>
                                    <span className="ml-auto text-gray-900">
                                        7名
                                    </span>
                                </div>
                                <div className="lg:px-20 px-2 flex border-t border-gray-200 py-4">
                                    <span className="text-gray-500">
                                        事業内容
                                    </span>
                                    <span className="ml-auto text-gray-900">
                                        IT教育事業及び啓発事業
                                        <br />
                                        次世代人材の育成に関する情報提供事業
                                    </span>
                                </div>
                                <div className="lg:px-20 px-2 flex border-t border-b mb-6 border-gray-200 py-4">
                                    <span className="text-gray-500">
                                        所在地
                                    </span>
                                    <span className="ml-auto text-gray-900">
                                        大阪府豊中市桜の町 3-7-7
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <Board /> */}
                    {/* <Withus /> */}
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
