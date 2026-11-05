import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter, Zen_Kaku_Gothic_New } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader, SupportCta } from "../components/layout";
import { SITE_TITLE } from "../libs/metadata";
import { SITE } from "../libs/site";
import "../styles/globals.css";

// 和文は Zen Kaku Gothic New、数字・欧文は Inter（スライドと同じ組み合わせ）。
// next/font がビルド時に取得して自前で配信するので、外部のフォント配信が落ちても崩れない。
const zenKaku = Zen_Kaku_Gothic_New({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    preload: false,
    variable: "--font-zen-kaku",
});
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

// GTM のコンテナ ID は公開値。ビルド環境に変数が無くても計測が止まらないよう既定値を持つ
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || "GTM-N8C929R";

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: SITE_TITLE,
    description: SITE.description,
    icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }], apple: "/favicon.png" },
    manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: SITE.themeColor, width: "device-width", initialScale: 1 };

const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/img/logo.svg`,
    email: SITE.email,
    address: {
        "@type": "PostalAddress",
        addressRegion: "大阪府",
        addressLocality: "豊中市",
        streetAddress: "桜の町3丁目7番7号",
        addressCountry: "JP",
    },
    sameAs: [SITE.xUrl, SITE.githubUrl],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ja" className={`${zenKaku.variable} ${inter.variable}`}>
            <body>
                <SiteHeader />
                <main id="main-content">{children}</main>
                <SupportCta />
                <SiteFooter />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
            </body>
            <GoogleTagManager gtmId={GTM_ID} />
        </html>
    );
}
