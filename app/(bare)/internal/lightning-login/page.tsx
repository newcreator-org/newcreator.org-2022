import type { Metadata } from "next";

// ログイン画面の背景として外部から読み込む画像だけのページ。検索にも出さない
export const metadata: Metadata = {
    title: { absolute: "lightning-login" },
    robots: { index: false, follow: false },
};

export default function LightningLoginPage() {
    return (
        <div aria-hidden="true" className="fixed inset-0 bg-[url('/img/internal/lightning-login-background.webp')] bg-cover bg-center" />
    );
}
