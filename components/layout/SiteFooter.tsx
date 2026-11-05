import { Container, Icon, SmartLink } from "../ui";
import { FOOTER_LINKS, SITE } from "../../libs/site";

export function SiteFooter() {
    return (
        <footer className="bg-ink text-white/70">
            <Container className="py-16 md:py-20">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <p className="text-h3 font-bold text-white">{SITE.name}</p>
                        <p className="mt-4 text-small">
                            大阪府豊中市桜の町3丁目7番7号
                            <br />
                            <a href={`mailto:${SITE.email}`} className="underline underline-offset-[0.3em] hover:text-white">
                                {SITE.email}
                            </a>
                        </p>
                        <a
                            href={SITE.xUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`X（旧Twitter）公式アカウント ${SITE.xHandle}`}
                            className="mt-6 inline-flex h-11 w-11 items-center justify-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-colors hover:bg-white hover:text-ink"
                        >
                            <Icon name="x" size={18} />
                        </a>
                    </div>
                    <nav aria-label="サイトマップ" className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:col-span-8">
                        {FOOTER_LINKS.map((group) => (
                            <div key={group.heading}>
                                <p className="text-small font-bold text-white">{group.heading}</p>
                                <ul className="mt-4 space-y-2.5">
                                    {group.links.map((l) => (
                                        <li key={l.href}>
                                            <SmartLink
                                                href={l.href}
                                                className="text-small transition-colors hover:text-white hover:underline hover:underline-offset-[0.3em]"
                                            >
                                                {l.label}
                                            </SmartLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
                <p className="nc-num mt-16 border-t border-white/20 pt-6 text-caption text-white/50">
                    © 2019–{new Date().getFullYear()} newCreator.org
                </p>
            </Container>
        </footer>
    );
}
