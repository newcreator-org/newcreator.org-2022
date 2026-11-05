import type { ReactNode } from "react";
import { cn } from "./cn";
import { Container } from "./Container";

export type SectionTone = "default" | "muted" | "pale" | "ink" | "brand";

export type SectionProps = {
    id?: string;
    /** 地の色。ink・brand は白文字になる */
    tone?: SectionTone;
    /** 上下の余白。none は自分で組むとき */
    spacing?: "default" | "compact" | "none";
    width?: "default" | "narrow";
    /** 上に罫線を引く（同じ地のセクションが続くとき） */
    ruled?: boolean;
    className?: string;
    "aria-labelledby"?: string;
    children: ReactNode;
};

const toneClass: Record<SectionTone, string> = {
    default: "bg-paper",
    muted: "bg-paper-2",
    pale: "bg-brand-pale",
    ink: "bg-ink text-white/80 [&_h2]:text-white [&_h3]:text-white",
    brand: "bg-brand-deep text-white/85 [&_h2]:text-white [&_h3]:text-white",
};

/** ページを縦に区切る単位。中身は Container で横幅がそろう */
export function Section({
    id,
    tone = "default",
    spacing = "default",
    width = "default",
    ruled = false,
    className,
    children,
    ...rest
}: SectionProps) {
    return (
        <section
            id={id}
            data-tone={tone}
            className={cn(
                toneClass[tone],
                spacing === "default" && "py-section",
                spacing === "compact" && "py-[calc(var(--nc-section)*0.6)]",
                className,
            )}
            {...rest}
        >
            <Container width={width} className={cn(ruled && "border-t border-rule pt-section -mt-px")}>
                {children}
            </Container>
        </section>
    );
}
