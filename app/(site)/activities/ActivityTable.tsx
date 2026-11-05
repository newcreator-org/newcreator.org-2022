"use client";

import { useState } from "react";
import { cn } from "../../../components/ui";
import { ACTIVITIES, CATEGORY_LABELS, type ActivityCategory } from "./data";

const FILTERS: Array<{ key: "all" | ActivityCategory; label: string }> = [
    { key: "all", label: "すべて" },
    { key: "student", label: CATEGORY_LABELS.student },
    { key: "teacher", label: CATEGORY_LABELS.teacher },
    { key: "special", label: CATEGORY_LABELS.special },
];

/** 研修の実施一覧。種類で絞り込める */
export function ActivityTable() {
    const [filter, setFilter] = useState<"all" | ActivityCategory>("all");
    const rows = filter === "all" ? ACTIVITIES : ACTIVITIES.filter((a) => a.category === filter);

    return (
        <div>
            <div role="group" aria-label="研修の種類で絞り込む" className="mb-8 flex flex-wrap gap-2">
                {FILTERS.map((f) => {
                    const active = filter === f.key;
                    return (
                        <button
                            key={f.key}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setFilter(f.key)}
                            className={cn(
                                "min-h-[44px] px-4 text-small font-bold transition-colors duration-nc",
                                active
                                    ? "bg-ink text-white"
                                    : "bg-white text-ink shadow-[inset_0_0_0_1px_var(--nc-rule)] hover:shadow-[inset_0_0_0_1px_var(--nc-ink)]",
                            )}
                        >
                            {f.label}
                        </button>
                    );
                })}
            </div>
            <p className="mb-4 text-small text-sub" aria-live="polite">
                <span className="nc-num">{rows.length}</span>件
            </p>
            <ul>
                {rows.map((a, i) => (
                    <li
                        key={`${a.date}-${a.school}-${a.title}-${i}`}
                        className="grid gap-1 border-b border-rule py-5 md:grid-cols-[8rem_1fr_auto] md:items-baseline md:gap-8"
                    >
                        <p className="nc-num text-small text-sub">{a.date}</p>
                        <div>
                            <p className="font-bold text-ink">{a.school}</p>
                            <p className="mt-1 text-small">{a.title}</p>
                        </div>
                        <p className="text-caption font-bold text-brand">{CATEGORY_LABELS[a.category]}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
