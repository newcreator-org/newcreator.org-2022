import dayjs from "dayjs";
import type { ReactNode } from "react";
import { cn } from "./cn";
import { Icon } from "./Icon";
import { SmartLink } from "./SmartLink";
import { Tag } from "./Tag";

export type ArticleListItem = {
    href: string;
    title: string;
    date?: string;
    category?: string;
};

/** 日付の表記はサイト全体で YYYY.MM.DD */
export function formatDate(date?: string): string {
    if (!date) return "";
    const d = dayjs(date);
    return d.isValid() ? d.format("YYYY.MM.DD") : "";
}

/** お知らせなどの一覧。1 行 1 件、罫線で区切る */
export function ArticleList({ items, className }: { items: ArticleListItem[]; className?: string }) {
    return (
        <ul className={cn("border-t border-ink", className)}>
            {items.map((item) => (
                <li key={item.href} className="border-b border-rule">
                    <SmartLink
                        href={item.href}
                        className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 py-5 md:grid-cols-[7.5rem_1fr_auto] md:py-6"
                    >
                        <span className="nc-num text-small text-sub md:row-auto">{formatDate(item.date)}</span>
                        <span className="col-span-2 row-start-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 md:col-span-1 md:row-start-auto">
                            {item.category && <Tag>{item.category}</Tag>}
                            <span className="font-bold text-ink transition-colors duration-nc group-hover:text-brand group-hover:underline group-hover:underline-offset-[0.3em]">
                                {item.title}
                            </span>
                        </span>
                        <Icon
                            name="arrow-right"
                            className="row-start-1 text-sub transition-transform duration-nc group-hover:translate-x-1 group-hover:text-brand md:col-start-3"
                        />
                    </SmartLink>
                </li>
            ))}
        </ul>
    );
}

export type ArticleCardProps = {
    href: string;
    title: string;
    date?: string;
    category?: string;
    description?: string;
    /** 画像。無いときは画像の枠を出さない（ロゴの使い回しはしない） */
    image?: string;
    imageAlt?: string;
    footer?: ReactNode;
    className?: string;
};

/** 記事・事例のカード。浮かせず、上の罫線で区切る */
export function ArticleCard({ href, title, date, category, description, image, imageAlt = "", footer, className }: ArticleCardProps) {
    return (
        <article className={cn("group relative border-t border-ink pt-5", className)}>
            {image && (
                <div className="mb-5 aspect-[3/2] overflow-hidden bg-hair">
                    <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 ease-nc group-hover:scale-[1.02]"
                    />
                </div>
            )}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-small text-sub">
                {category && <Tag>{category}</Tag>}
                {date && (
                    <time className="nc-num" dateTime={date}>
                        {formatDate(date)}
                    </time>
                )}
            </div>
            <h3 className="mt-3 text-h3 font-bold">
                <SmartLink
                    href={href}
                    className="transition-colors duration-nc after:absolute after:inset-0 group-hover:text-brand group-hover:underline group-hover:underline-offset-[0.3em]"
                >
                    {title}
                </SmartLink>
            </h3>
            {description && <p className="mt-3 line-clamp-3 text-small text-body">{description}</p>}
            {footer && <div className="mt-4">{footer}</div>}
        </article>
    );
}

export function CardGrid({ children, columns = 3, className }: { children: ReactNode; columns?: 2 | 3 | 4; className?: string }) {
    return (
        <div
            className={cn(
                "grid gap-x-8 gap-y-14 sm:grid-cols-2",
                columns === 3 && "lg:grid-cols-3",
                columns === 4 && "lg:grid-cols-4",
                className,
            )}
        >
            {children}
        </div>
    );
}
