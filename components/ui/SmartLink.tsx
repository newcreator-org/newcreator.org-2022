import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isExternal } from "./cn";

export type SmartLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    children: ReactNode;
};

/**
 * リンク先に使ってよい形だけを通す（javascript: などのスキームを弾く）。
 * Markdown の frontmatter（link 欄）由来の値もここを通る。
 */
export function safeHref(href: string): string {
    const v = (href || "").trim();
    if (/^(https?:|mailto:|tel:)/i.test(v) || /^[/#?]/.test(v) || /^\.\.?\//.test(v)) return v;
    return "#";
}

/**
 * サイト内は next/link、外部（http・mailto）は <a>。
 * http の外部リンクは新しいタブで開き、rel を付ける。
 */
export function SmartLink({ href: rawHref, children, ...rest }: SmartLinkProps) {
    const href = safeHref(rawHref);
    if (isExternal(href)) {
        const newTab = /^(https?:)?\/\//.test(href);
        return (
            <a href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} {...rest}>
            {children}
        </Link>
    );
}
