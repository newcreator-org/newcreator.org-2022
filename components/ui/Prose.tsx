import type { ReactNode } from "react";
import { cn } from "./cn";

export type ProseProps = {
    /** Markdown から変換した HTML */
    html?: string;
    children?: ReactNode;
    className?: string;
};

/** 記事本文・規約などの長い文章。@tailwindcss/typography の nc テーマ */
export function Prose({ html, children, className }: ProseProps) {
    const classes = cn(
        "prose prose-nc max-w-none text-body",
        "prose-headings:font-bold prose-h2:text-h2 prose-h3:text-h3 prose-a:font-bold",
        "prose-img:mx-auto prose-li:my-1",
        className,
    );
    if (html !== undefined) {
        return <div className={classes} dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return <div className={classes}>{children}</div>;
}
