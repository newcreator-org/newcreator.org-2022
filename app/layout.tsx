import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import type { ReactNode } from "react";
import { SITE_TITLE } from "../libs/metadata";
import { SITE } from "../libs/site";
import "../styles/globals.css";

// 和文は Noto Sans JP、数字は Inter（2026-11-05 改野の判断で Zen Kaku Gothic New から変更）。
// next/font がビルド時に取得して自前で配信するので、外部のフォント配信が落ちても崩れない。
const notoSans = Noto_Sans_JP({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    preload: false,
    variable: "--font-noto-sans-jp",
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

// ヘッダー・フッターは app/(site)/layout.tsx。ここは html・フォント・計測だけ
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ja" className={`${notoSans.variable} ${inter.variable}`}>
            <body>
                {children}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
            </body>
            <GoogleTagManager gtmId={GTM_ID} />
        </html>
    );
}
