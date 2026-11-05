import type { ReactNode } from "react";
import { Breadcrumb, type BreadcrumbItem } from "./Breadcrumb";
import { cn } from "./cn";
import { Container } from "./Container";

export type PageHeaderProps = {
    title: ReactNode;
    lead?: ReactNode;
    /** トップ以外の階層。最後が今のページ */
    breadcrumb?: BreadcrumbItem[];
    /** 日付・分類など、タイトルの上に置く情報 */
    meta?: ReactNode;
    width?: "default" | "narrow";
    className?: string;
    children?: ReactNode;
};

/** 下層ページの頭。パンくず＋h1＋導入文。下に墨の罫線 */
export function PageHeader({ title, lead, breadcrumb, meta, width = "default", className, children }: PageHeaderProps) {
    return (
        <div className={cn("bg-paper pt-8 md:pt-10", className)}>
            <Container width={width}>
                {breadcrumb && <Breadcrumb items={breadcrumb} />}
                <div className="border-b-2 border-ink pb-10 pt-12 md:pb-14 md:pt-20">
                    {meta && <div className="mb-4 flex flex-wrap items-center gap-3 text-small text-sub">{meta}</div>}
                    <h1 className="max-w-[24em] text-h1 font-bold">{title}</h1>
                    {lead && <div className="mt-6 max-w-[40em] text-lead">{lead}</div>}
                    {children}
                </div>
            </Container>
        </div>
    );
}
