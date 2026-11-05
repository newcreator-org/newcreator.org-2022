import type { ElementType, ReactNode } from "react";
import { cn } from "./cn";

export type ContainerProps = {
    /** default = 1200px、narrow = 760px（読み物） */
    width?: "default" | "narrow";
    as?: ElementType;
    className?: string;
    children: ReactNode;
};

/** 横幅と画面端の余白をそろえる箱。ページの横位置はすべてこれで決める */
export function Container({ width = "default", as: Tag = "div", className, children }: ContainerProps) {
    return (
        <Tag
            className={cn(
                "mx-auto w-full px-gutter",
                width === "narrow" ? "max-w-[calc(var(--nc-container-narrow)+var(--nc-gutter)*2)]" : "max-w-[calc(var(--nc-container)+var(--nc-gutter)*2)]",
                className,
            )}
        >
            {children}
        </Tag>
    );
}
