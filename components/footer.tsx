// ============================================================
// Footer — newCreator.org Design System v2
// CSS Modules / SCSS 廃止 → Tailwind + CSS Custom Properties
// ============================================================

// X (旧Twitter) アイコン SVG
function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <footer
        className="flex flex-col md:flex-row justify-between items-center px-5 py-5 md:py-4"
        style={{
          color: "#718096",
          borderTop: "1px solid rgba(20,118,166,0.08)",
          background: "#fff",
        }}
      >
        {/* Left: copyright */}
        <p style={{ fontSize: "0.775rem" }}>
          © 2019-{new Date().getFullYear()},{" "}
          <a
            href="/"
            className="ml-1 hover:underline transition-colors duration-200"
            style={{ color: "#1476A6" }}
          >
            newCreator.org
          </a>
        </p>

        {/* Center: SNS links */}
        <div className="flex items-center mt-4 md:mt-0" style={{ gap: "0.75rem" }}>
          <a
            href="https://x.com/nC_org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X（旧Twitter）公式アカウント @nC_org"
            className="hover:opacity-70 transition-opacity duration-200"
            style={{ color: "#718096" }}
          >
            <XIcon size={18} />
          </a>
        </div>

        {/* Right: legal links */}
        <div
          className="flex items-center mt-4 md:mt-0"
          style={{ gap: "0.5rem" }}
        >
          {[
            { href: "/legal/privacy-policy", label: "プライバシーポリシー" },
            { href: "/legal/terms",          label: "各種サービス利用規約" },
          ].map(({ href, label }) => (
            <p key={href} style={{ fontSize: "0.775rem", margin: "0 4px" }}>
              <a
                href={href}
                className="text-muted hover:text-brand-blue hover:underline transition-colors duration-200"
              >
                {label}
              </a>
            </p>
          ))}
        </div>
      </footer>
    </>
  );
}
