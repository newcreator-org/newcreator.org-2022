import type { ReactNode } from "react";
import { cn } from "./cn";
import { Icon } from "./Icon";

export type FaqItem = { question: string; answer: ReactNode };

/** よくある質問。details/summary で開閉（JS 不要） */
export function Faq({ items, className }: { items: FaqItem[]; className?: string }) {
    return (
        <div className={cn("", className)}>
            {items.map((item, i) => (
                <details key={i} className="group border-b border-rule">
                    <summary className="flex cursor-pointer list-none items-start gap-4 py-5 font-bold text-ink marker:hidden hover:text-brand [&::-webkit-details-marker]:hidden">
                        <span className="nc-num text-brand">Q</span>
                        <span className="flex-1">{item.question}</span>
                        <Icon name="plus" className="mt-1 shrink-0 transition-transform duration-nc group-open:rotate-45" />
                    </summary>
                    <div className="flex gap-4 pb-6 pr-8">
                        <span className="nc-num font-bold text-sub">A</span>
                        <div className="flex-1 text-body">{item.answer}</div>
                    </div>
                </details>
            ))}
        </div>
    );
}
