import Head from "next/head";

const image = "/img/internal/lightning-login-background.webp";

export default function LightningLogin() {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <main>
                <div className="w-full h-screen bg-cover bg-center" style={{backgroundImage: `url(${image})`}} />
            </main>
        </>
    );
}