import type { ReactNode } from "react";
import { cn } from "./cn";

export type RuledColumnsProps = {
    columns?: 2 | 3 | 4;
    /** strong = 2px の墨、light = 1px の罫線 */
    weight?: "strong" | "light";
    className?: string;
    children: ReactNode;
};

/** 段組み。各段の頭に罫線を引く（スライドの .cols と同じ） */
export function RuledColumns({ columns = 3, weight = "strong", className, children }: RuledColumnsProps) {
    return (
        <div
            className={cn(
                "grid gap-x-10 gap-y-12 md:grid-cols-2",
                columns === 3 && "lg:grid-cols-3",
                columns === 4 && "lg:grid-cols-4",
                weight === "strong" ? "[&>*]:border-t-2 [&>*]:border-ink" : "[&>*]:border-t [&>*]:border-rule",
                "[[data-tone=ink]_&>*]:border-white/70 [[data-tone=brand]_&>*]:border-white/70",
                "[&>*]:pt-5",
                className,
            )}
        >
            {children}
        </div>
    );
}

export type ColumnProps = {
    /** 見出しの上の小さな分類（日本語） */
    label?: ReactNode;
    title?: ReactNode;
    children?: ReactNode;
    /** 出典など */
    note?: ReactNode;
    className?: string;
};

export function Column({ label, title, children, note, className }: ColumnProps) {
    return (
        <div className={cn("min-w-0", className)}>
            {label && (
                <p className="mb-2 text-small font-bold text-brand [[data-tone=ink]_&]:text-brand-light [[data-tone=brand]_&]:text-brand-light">
                    {label}
                </p>
            )}
            {title && <h3 className="text-h3 font-bold">{title}</h3>}
            {children && <div className={cn(title && "mt-3")}>{children}</div>}
            {note && <p className="mt-4 text-caption text-sub [[data-tone=ink]_&]:text-white/60 [[data-tone=brand]_&]:text-white/60">{note}</p>}
        </div>
    );
}
