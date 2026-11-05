import type { ReactNode } from "react";
import { cn } from "./cn";

export type TagProps = { children: ReactNode; className?: string };

/** 分類（カテゴリ・課題名）。色の塗りは使わず、青の文字と細い線だけ */
export function Tag({ children, className }: TagProps) {
    return (
        <span
            className={cn(
                "inline-block border border-current px-2 py-[0.15em] text-caption font-bold leading-normal tracking-[0.06em] text-brand",
                className,
            )}
        >
            {children}
        </span>
    );
}
