import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Heads from "../components/customHead";

export default function Custom404() {
  return (
    <>
      <Heads child="404 - ページが見つかりません" />
      <Header />
      <main
        className="flex flex-col items-center justify-center text-center px-5"
        style={{ minHeight: "60vh", paddingTop: "8rem", paddingBottom: "8rem" }}
      >
        <p
          className="font-bold mb-4"
          style={{ fontSize: "5rem", color: "#1476A6", lineHeight: 1 }}
        >
          404
        </p>
        <h1
          className="font-bold mb-6"
          style={{ fontSize: "1.5rem", color: "#1A202C" }}
        >
          お探しのページは見つかりませんでした
        </h1>
        <p className="mb-8" style={{ color: "#718096", maxWidth: "32rem" }}>
          URLが変更されたか、ページが削除された可能性があります。
          <br />
          以下のリンクからご希望のページをお探しください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/"
            style={{
              background: "#1476A6",
              color: "#fff",
              padding: "0.75rem 2rem",
              borderRadius: "0.375rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            トップページに戻る
          </Link>
          <Link
            href="/information"
            style={{
              border: "1px solid #1476A6",
              color: "#1476A6",
              padding: "0.75rem 2rem",
              borderRadius: "0.375rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            お知らせ一覧
          </Link>
        </div>
        <nav aria-label="主要ページへのリンク">
          <ul
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
            style={{ listStyle: "none", padding: 0, color: "#718096", fontSize: "0.875rem" }}
          >
            {[
              { href: "/about",         label: "私たちについて" },
              { href: "/activities",    label: "活動実績" },
              { href: "/for-educators", label: "先生・学校の方へ" },
              { href: "/media",         label: "メディア" },
              { href: "/#contact",      label: "お問い合わせ" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:underline"
                  style={{ color: "#1476A6" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
}
