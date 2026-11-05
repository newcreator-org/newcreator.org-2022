export type HistoryItem = { year: string; title: string; desc: string };

/** 沿革。年月・出来事・説明を罫線で区切って縦に並べる */
export function History({ items }: { items: HistoryItem[] }) {
    return (
        <ol>
            {items.map((item) => (
                <li key={item.year} className="grid gap-1 border-b border-rule py-5 md:grid-cols-[10rem_1fr] md:gap-8 md:py-6">
                    <p className="nc-num text-small font-bold text-brand">{item.year}</p>
                    <div>
                        <p className="font-bold text-ink">{item.title}</p>
                        <p className="mt-1 text-small">{item.desc}</p>
                    </div>
                </li>
            ))}
        </ol>
    );
}
