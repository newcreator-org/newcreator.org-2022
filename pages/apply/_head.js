import Head from "next/head";

export default function Heads() {
    const title =
            "小学生に、おうちでプログラミングをはじめる機会を届けよう。｜特定非営利活動法人ニュークリエイター・オルグ",
        description =
            "小学生に、micro:bitをプレゼント。おうちでプログラミングをはじめる機会を届けよう。",
        image = "/ogp.png",
        url = "https://newcreator.org",
        twitter = "@nC_org",
        color = "#53B1F0";
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="blog" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={url + image} />
            <meta property="og:site_name" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:url" content={image} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={url + image} />
            <link rel="canonical" href={url} />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon.png"
            />
            {/* <link rel="manifest" href="/site.webmanifest" /> */}
            <meta name="msapplication-TileColor" content={color} />
            <meta name="theme-color" content={color} />
        </Head>
    );
}
