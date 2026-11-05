import type { ReactNode } from "react";
import { cn } from "./cn";

export type DefinitionItem = { term: ReactNode; detail: ReactNode };

/** 法人情報などの表。項目名と内容を罫線で区切る */
export function DefinitionList({ items, className }: { items: DefinitionItem[]; className?: string }) {
    return (
        <dl className={cn("border-t-2 border-ink", className)}>
            {items.map((item, i) => (
                <div key={i} className="grid gap-1 border-b border-rule py-4 md:grid-cols-[12rem_1fr] md:gap-8 md:py-5">
                    <dt className="text-small font-bold text-ink">{item.term}</dt>
                    <dd className="m-0 text-body">{item.detail}</dd>
                </div>
            ))}
        </dl>
    );
}
