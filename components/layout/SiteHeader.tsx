"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, cn, Icon, SmartLink } from "../ui";
import { NAV_LINKS, SITE } from "../../libs/site";

/** 今いるページのナビに印を付ける（/about/company/ なら「私たちについて」） */
function isCurrent(pathname: string, href: string) {
    const base = href.replace(/\/$/, "");
    return base !== "" && (pathname === base || pathname.startsWith(base + "/"));
}

export function SiteHeader() {
    const pathname = usePathname() || "/";
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ページを移ったらメニューを閉じる
    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
            >
                本文へ移動
            </a>
            <header
                className={cn(
                    "sticky top-0 z-50 h-header bg-white/95 backdrop-blur transition-shadow duration-nc",
                    scrolled ? "shadow-[0_1px_0_var(--nc-rule)]" : "shadow-[0_1px_0_transparent]",
                )}
            >
                <div className="mx-auto flex h-full max-w-[calc(var(--nc-container)+var(--nc-gutter)*2+160px)] items-center gap-8 px-gutter">
                    <SmartLink href="/" className="shrink-0" aria-label={`${SITE.name} トップへ`}>
                        <img src="/img/logo.svg" alt={SITE.name} width={168} height={52} className="h-[44px] w-auto" />
                    </SmartLink>

                    <nav aria-label="メインメニュー" className="ml-auto hidden xl:block">
                        <ul className="flex items-center gap-7">
                            {NAV_LINKS.map((l) => {
                                const current = isCurrent(pathname, l.href);
                                return (
                                    <li key={l.href}>
                                        <SmartLink
                                            href={l.href}
                                            aria-current={current ? "page" : undefined}
                                            className={cn(
                                                "relative py-2 text-small font-bold text-ink transition-colors duration-nc hover:text-brand",
                                                "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-nc hover:after:scale-x-100",
                                                current && "text-brand after:scale-x-100",
                                            )}
                                        >
                                            {l.label}
                                        </SmartLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="ml-auto hidden items-center gap-3 sm:flex xl:ml-0">
                        <Button href="/#contact" variant="secondary">
                            お問い合わせ
                        </Button>
                        <Button href={SITE.donateUrl} variant="donate">
                            寄付で支援する
                        </Button>
                    </div>

                    <button
                        type="button"
                        className="-mr-2 ml-auto inline-flex h-11 w-11 items-center justify-center text-ink sm:ml-0 xl:hidden"
                        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
                        aria-expanded={open}
                        aria-controls="site-drawer"
                        onClick={() => setOpen((v) => !v)}
                    >
                        <Icon name={open ? "close" : "menu"} size={26} />
                    </button>
                </div>
            </header>

            {/* SP・タブレットのメニュー */}
            <div
                id="site-drawer"
                className={cn(
                    "fixed inset-x-0 bottom-0 top-header z-40 overflow-y-auto bg-white transition-[opacity,visibility] duration-nc xl:hidden",
                    open ? "visible opacity-100" : "invisible opacity-0",
                )}
                aria-hidden={!open}
            >
                <nav aria-label="メインメニュー（モバイル）" className="px-gutter pb-12 pt-4">
                    <ul className="border-t-2 border-ink">
                        {[...NAV_LINKS, { href: "/#contact", label: "お問い合わせ" }].map((l) => (
                            <li key={l.href} className="border-b border-rule">
                                <SmartLink
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    tabIndex={open ? 0 : -1}
                                    className="flex items-center justify-between py-5 text-lead font-bold text-ink"
                                >
                                    {l.label}
                                    <Icon name="arrow-right" className="text-sub" />
                                </SmartLink>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 grid gap-3">
                        <Button href={SITE.donateUrl} variant="donate" size="lg" fullWidth arrow>
                            寄付で支援する
                        </Button>
                        <Button href={`mailto:${SITE.email}?subject=ボランティア参加について`} variant="secondary" size="lg" fullWidth>
                            ボランティアに参加する
                        </Button>
                    </div>
                </nav>
            </div>
        </>
    );
}
