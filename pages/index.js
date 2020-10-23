// import Head from 'next/head';
import Header from './components/header';
import Hero from './components/hero';
import Philosophy from './components/philosophy';
import Board from './components/board';
import Footer from './components/footer';
import Font from './components/font';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Philosophy />
                <Board />
                <Font />
            </main>
            <Footer />
        </>
    )
}
