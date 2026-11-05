import { cn } from "./cn";
import { Icon } from "./Icon";

export type ShareLinksProps = { url: string; title: string; className?: string };

/** SNS で共有。外部スクリプトは読み込まず、各サービスの共有 URL を開くだけ */
export function ShareLinks({ url, title, className }: ShareLinksProps) {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);
    const links = [
        { name: "X", icon: "x" as const, href: `https://x.com/intent/post?url=${u}&text=${t}` },
        { name: "Facebook", icon: "facebook" as const, href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
        { name: "LINE", icon: "line" as const, href: `https://social-plugins.line.me/lineit/share?url=${u}` },
    ];
    return (
        <div className={cn("flex flex-wrap items-center gap-3", className)}>
            <span className="mr-1 text-small font-bold text-ink">この記事を共有</span>
            {links.map((l) => (
                <a
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${l.name}で共有`}
                    className="inline-flex h-11 w-11 items-center justify-center text-ink shadow-[inset_0_0_0_1px_var(--nc-rule)] transition-colors duration-nc hover:bg-ink hover:text-white"
                >
                    <Icon name={l.icon} size={18} />
                </a>
            ))}
        </div>
    );
}
