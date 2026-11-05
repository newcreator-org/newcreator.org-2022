import type { ReactNode } from "react";
import { SiteFooter, SiteHeader, SupportCta } from "../../components/layout";

/** 公開ページの枠：ヘッダー・本文・支援の案内・フッター */
export default function SiteLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <SiteHeader />
            <main id="main-content">{children}</main>
            <SupportCta />
            <SiteFooter />
        </>
    );
}
