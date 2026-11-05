"use client";

import { useState } from "react";
import { ArticleCard, CardGrid, cn } from "../../../../components/ui";

export type GuideSummary = { id: string; title: string; description: string; category: string };

const ALL = "すべて";

/** 実践ガイドの一覧。分類で絞り込める */
export function GuideList({ guides }: { guides: GuideSummary[] }) {
    const [selected, setSelected] = useState<string>(ALL);
    const categories = [ALL, ...Array.from(new Set(guides.map((g) => g.category).filter(Boolean)))];
    const filtered = selected === ALL ? guides : guides.filter((g) => g.category === selected);

    return (
        <>
            <div className="flex flex-wrap items-center gap-3 border-b border-rule pb-8" role="group" aria-label="分類で絞り込む">
                {categories.map((c) => (
                    <button
                        key={c}
                        type="button"
                        aria-pressed={selected === c}
                        onClick={() => setSelected(c)}
                        className={cn(
                            "min-h-[44px] px-5 text-small font-bold transition-colors duration-nc",
                            selected === c
                                ? "bg-ink text-white"
                                : "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--nc-rule)] hover:shadow-[inset_0_0_0_1.5px_var(--nc-ink)]",
                        )}
                    >
                        {c}
                    </button>
                ))}
                <p className="nc-num ml-auto text-small text-sub" aria-live="polite">
                    {filtered.length}件のガイド
                </p>
            </div>
            <CardGrid className="mt-12">
                {filtered.map((g) => (
                    <ArticleCard
                        key={g.id}
                        href={`/for-educators/guides/${g.id}/`}
                        title={g.title}
                        description={g.description}
                        category={g.category}
                    />
                ))}
            </CardGrid>
            {filtered.length === 0 && <p className="py-20 text-center text-sub">該当するガイドが見つかりませんでした。</p>}
        </>
    );
}
