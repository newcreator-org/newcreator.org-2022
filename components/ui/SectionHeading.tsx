import type { ReactNode } from "react";
import { cn } from "./cn";

export type SectionHeadingProps = {
    /** 見出し。h2 で出す */
    title: ReactNode;
    /** 見出しの下（PC では右）に置く導入文 */
    lead?: ReactNode;
    /** 章番号（"01" など）。スライドの章番号と同じ扱い。英字の飾り見出しは使わない */
    index?: string;
    /** split = 見出し左・導入文右（PC）、stack = 縦積み */
    layout?: "split" | "stack";
    /** 見出しの上に細い罫線を引く（既定はなし。余白で区切る） */
    rule?: boolean;
    /** 右端に置くリンクなど */
    action?: ReactNode;
    id?: string;
    as?: "h1" | "h2";
    className?: string;
};

/**
 * セクションの見出し。上に 2px の罫線、左に章番号。
 * 濃色の Section の中では罫線と文字が自動で白になる。
 */
export function SectionHeading({
    title,
    lead,
    index,
    layout = "split",
    rule = false,
    action,
    id,
    as: Tag = "h2",
    className,
}: SectionHeadingProps) {
    return (
        <header
            className={cn(
                "mb-10 md:mb-14",
                rule && "border-t border-rule pt-5 [[data-tone=ink]_&]:border-white/30 [[data-tone=brand]_&]:border-white/30",
                layout === "split" && lead && "md:grid md:grid-cols-12 md:gap-10",
                className,
            )}
        >
            <div className={cn(layout === "split" && lead && "md:col-span-5", "flex items-start justify-between gap-6")}>
                <Tag id={id} className="text-h2 font-bold">
                    {index && (
                        <span className="nc-num mr-4 inline-block align-[0.12em] text-[0.6em] font-bold text-brand [[data-tone=ink]_&]:text-brand-light [[data-tone=brand]_&]:text-brand-light">
                            {index}
                        </span>
                    )}
                    {title}
                </Tag>
                {action && !lead && <div className="shrink-0 pt-2">{action}</div>}
            </div>
            {lead && (
                <div className={cn(layout === "split" ? "mt-5 md:col-span-7 md:mt-1" : "mt-5 max-w-narrow")}>
                    <div className="text-lead">{lead}</div>
                    {action && <div className="mt-5">{action}</div>}
                </div>
            )}
        </header>
    );
}
