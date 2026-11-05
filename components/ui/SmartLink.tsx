import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { isExternal } from "./cn";

export type SmartLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    children: ReactNode;
};

/**
 * サイト内は next/link、外部（http・mailto）は <a>。
 * http の外部リンクは新しいタブで開き、rel を付ける。
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
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
