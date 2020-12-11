// import Head from 'next/head';
import Header from './components/header';
import Hero from './components/hero';
import Philosophy from './components/philosophy';
import Board from './components/board';
import Sponser from './components/sponser';
import Footer from './components/footer';
import Font from './components/font';
// import News from './components/news';
import Withus from './components/with-us';

import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function Home({news}) {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Philosophy />
                <Board />
                <Sponser />
                <Font />
                <section className="text-gray-700 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                                NEWS
                            </h2>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                お知らせ
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
                                            {format(
                                                parseISO(news.create_at),
                                                "LLLL d, yyyy"
                                            )}
                                        </span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                            {news.title}
                                        </h2>
                                        <Link href={news.link}>
                                            <a className="text-indigo-500 inline-flex items-center mt-4">
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
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Withus />
            </main>
            <Footer />
        </>
    );
}

export const getStaticProps = async () => {
    const key = {
        headers: { "X-API-KEY": process.env.API_KEY },
    };
    const data = await fetch(
        "https://newcreator-org.microcms.io/api/v1/news",
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
