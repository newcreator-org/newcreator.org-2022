import { SiteFooter, SiteHeader } from "../components/layout";
import { Button, Container, SmartLink } from "../components/ui";
import { pageMetadata } from "../libs/metadata";

export const metadata = pageMetadata({
    title: "ページが見つかりません",
    path: "/404/",
    noindex: true,
});

const LINKS = [
    { href: "/about/", label: "私たちについて" },
    { href: "/activities/", label: "活動実績" },
    { href: "/for-educators/", label: "先生・学校の方へ" },
    { href: "/media/", label: "メディア" },
    { href: "/#contact", label: "お問い合わせ" },
];

export default function NotFound() {
    // 存在しない URL はルートレイアウトだけで描かれるので、ヘッダー・フッターをここで出す
    return (
        <>
            <SiteHeader />
            <main id="main-content">
                <Container className="py-section">
                    <div className="border-b border-rule pb-12">
                        <p className="nc-num text-[clamp(4rem,3rem+5vw,7rem)] font-semibold leading-none text-brand">404</p>
                        <h1 className="mt-6 text-h1 font-bold">お探しのページは見つかりませんでした</h1>
                        <p className="mt-6 text-lead">
                            URLが変更されたか、ページが削除された可能性があります。
                            <br />
                            以下のリンクからご希望のページをお探しください。
                        </p>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <Button href="/" size="lg" arrow>
                                トップページに戻る
                            </Button>
                            <Button href="/information/" variant="secondary" size="lg">
                                お知らせ一覧
                            </Button>
                        </div>
                    </div>
                    <nav aria-label="主要ページへのリンク" className="mt-10">
                        <ul className="flex flex-wrap gap-x-8 gap-y-3">
                            {LINKS.map(({ href, label }) => (
                                <li key={href}>
                                    <SmartLink
                                        href={href}
                                        className="font-bold text-brand underline underline-offset-[0.3em] hover:text-brand-deep"
                                    >
                                        {label}
                                    </SmartLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Container>
            </main>
            <SiteFooter />
        </>
    );
}
