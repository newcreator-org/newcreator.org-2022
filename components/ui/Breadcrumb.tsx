import { cn } from "./cn";
import { SmartLink } from "./SmartLink";

export type BreadcrumbItem = { label: string; href?: string };

/** パンくず。先頭の「トップ」は自動で付ける */
export function Breadcrumb({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
    const all: BreadcrumbItem[] = [{ label: "トップ", href: "/" }, ...items];
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: all.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href ? { item: `https://newcreator.org${item.href}` } : {}),
        })),
    };
    return (
        <nav aria-label="パンくずリスト" className={cn("text-caption text-sub", className)}>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {all.map((item, i) => {
                    const last = i === all.length - 1;
                    return (
                        <li key={i} className="flex items-center gap-2">
                            {item.href && !last ? (
                                <SmartLink href={item.href} className="underline-offset-[0.3em] hover:text-brand hover:underline">
                                    {item.label}
                                </SmartLink>
                            ) : (
                                <span aria-current={last ? "page" : undefined} className={cn(last && "text-body")}>
                                    {item.label}
                                </span>
                            )}
                            {!last && <span aria-hidden="true">／</span>}
                        </li>
                    );
                })}
            </ol>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </nav>
    );
}
