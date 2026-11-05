import type { Metadata } from "next";
import { SITE } from "./site";

export const SITE_TITLE = `${SITE.name}｜${SITE.shortName}`;

export type PageMetaInput = {
    /** ページ名。トップは省略 */
    title?: string;
    description?: string;
    /** "/about/" のようなパス（末尾スラッシュ付き） */
    path: string;
    /** /ogp.png のようなサイト内パス */
    ogImage?: string;
    type?: "website" | "article";
    noindex?: boolean;
};

/** 各ページの metadata を作る。canonical・OGP・X カードをそろえる */
export function pageMetadata({ title, description, path, ogImage, type = "website", noindex }: PageMetaInput): Metadata {
    const normalized = path.endsWith("/") ? path : `${path}/`;
    const fullTitle = title ? `${title}｜${SITE_TITLE}` : SITE_TITLE;
    const desc = description || SITE.description;
    const images = [{ url: ogImage || "/ogp.png", width: 1200, height: 630 }];
    return {
        title: { absolute: fullTitle },
        description: desc,
        alternates: { canonical: normalized },
        openGraph: {
            title: fullTitle,
            description: desc,
            url: normalized,
            siteName: SITE_TITLE,
            locale: "ja_JP",
            type,
            images,
        },
        twitter: { card: "summary_large_image", site: SITE.xHandle, title: fullTitle, description: desc, images: images.map((i) => i.url) },
        ...(noindex ? { robots: { index: false, follow: true } } : {}),
    };
}
