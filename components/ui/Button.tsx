import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";

export type ButtonVariant = "primary" | "secondary" | "donate" | "inverse" | "inverse-outline";
export type ButtonSize = "md" | "lg";

type Common = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    /** 右に矢印を出す。外部リンクは自動で外部アイコンになる */
    arrow?: boolean;
    fullWidth?: boolean;
    className?: string;
    children: ReactNode;
};

/** href を渡すとリンク、渡さないと <button> */
export type ButtonProps = Common & { href?: string } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

const variantClass: Record<ButtonVariant, string> = {
    // 主ボタン：ロゴの青
    primary: "bg-brand text-white hover:bg-brand-deep",
    // 副ボタン：枠線だけ
    secondary: "bg-transparent text-ink shadow-[inset_0_0_0_1.5px_var(--nc-ink)] hover:bg-ink hover:text-white",
    // 寄付だけに使う黄色
    donate: "bg-marker text-ink hover:bg-marker-deep",
    // 濃色面の上
    inverse: "bg-white text-ink hover:bg-brand-pale",
    "inverse-outline": "bg-transparent text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.8)] hover:bg-white hover:text-ink",
};

const sizeClass: Record<ButtonSize, string> = {
    md: "min-h-[44px] px-5 text-small",
    lg: "min-h-[56px] px-7 text-body",
};

/**
 * ボタン。角は丸めない（紙面型）。押せる高さは最低 44px。
 * 寄付は donate、それ以外の主な行動は primary を 1 画面に 1 つまで。
 */
export function Button({ variant = "primary", size = "md", arrow, fullWidth, className, children, ...rest }: ButtonProps) {
    const classes = cn(
        "inline-flex items-center justify-center gap-2.5 font-bold leading-snug tracking-[0.04em] no-underline",
        "transition-colors duration-nc ease-nc disabled:cursor-not-allowed disabled:opacity-50",
        variantClass[variant],
        sizeClass[size],
        fullWidth && "w-full",
        className,
    );
    const { href, type = "button", ...buttonRest } = rest;
    const icon = arrow ? <Icon name={href && /^https?:/.test(href) ? "external" : "arrow-right"} size={size === "lg" ? 20 : 17} /> : null;

    if (href !== undefined) {
        return (
            <SmartLink href={href} className={classes}>
                <span>{children}</span>
                {icon}
            </SmartLink>
        );
    }
    return (
        <button type={type} className={classes} {...buttonRest}>
            <span>{children}</span>
            {icon}
        </button>
    );
}
