import { Icon, SmartLink } from "../../../components/ui";

export type RelatedLink = { href: string; label: string };

/** ページ末尾の「関連情報」。罫線で区切ったリンクの一覧 */
export function RelatedLinks({ links }: { links: RelatedLink[] }) {
    return (
        <ul className="grid md:grid-cols-2 md:gap-x-10">
            {links.map((l) => (
                <li key={l.href} className="border-b border-rule">
                    <SmartLink
                        href={l.href}
                        className="group flex items-center justify-between gap-4 py-5 font-bold text-ink transition-colors duration-nc hover:text-brand"
                    >
                        {l.label}
                        <Icon
                            name="arrow-right"
                            className="text-sub transition-transform duration-nc group-hover:translate-x-1 group-hover:text-brand"
                        />
                    </SmartLink>
                </li>
            ))}
        </ul>
    );
}
