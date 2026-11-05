import type { ReactNode } from "react";
import { cn } from "./cn";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export type TextLinkProps = {
    href: string;
    children: ReactNode;
    /** 矢印を付ける（「一覧を見る」など行き先を示すリンク） */
    arrow?: boolean;
    className?: string;
};

/** 文字のリンク。下線は常に出す（色だけに頼らない） */
export function TextLink({ href, children, arrow = true, className }: TextLinkProps) {
    const external = /^https?:/.test(href);
    return (
        <SmartLink
            href={href}
            className={cn(
                "group inline-flex items-center gap-2 font-bold text-brand underline decoration-1 underline-offset-[0.3em]",
                "transition-colors duration-nc hover:text-brand-deep hover:decoration-2",
                "[[data-tone=ink]_&]:text-white [[data-tone=brand]_&]:text-white",
                className,
            )}
        >
            {children}
            {arrow && (
                <Icon
                    name={external ? "external" : "arrow-right"}
                    size={16}
                    className="transition-transform duration-nc ease-nc group-hover:translate-x-0.5"
                />
            )}
        </SmartLink>
    );
}
