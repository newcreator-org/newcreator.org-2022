// import Head from 'next/head';
import Header from './components/header';
import Hero from './components/hero';
import Philosophy from './components/philosophy';
import Board from './components/board';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Philosophy />
                <Board />
            </main>
        </>
    )
}
