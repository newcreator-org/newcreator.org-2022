import Header from '../components/header';
import Hero from '../components/hero';
import Philosophy from '../components/philosophy';
import Board from '../components/board';
import Sponser from '../components/sponser';
import Footer from '../components/footer';
import Font from '../components/font';
import News from '../components/news';
import Withus from '../components/with-us';
import Heads from './_head';

export default function Home({news}) {
    return (
        <>
            <Heads/>
            <Header />
            <main>
                <Hero />
                <Philosophy />
                <Board />
                <Sponser />
                <Font />
                <News news={news}/>
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
        "https://newcreator-org.microcms.io/api/v1/news?orders=-create_at",
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