// ============================================================
// Footer — newCreator.org Design System v2
// CSS Modules / SCSS 廃止 → Tailwind + CSS Custom Properties
// ============================================================

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
        {/* Left */}
        <p style={{ fontSize: "0.775rem" }}>
          © 2019-{new Date().getFullYear()},{" "}
          <a
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="ml-1 hover:underline transition-colors duration-200"
            style={{ color: "#1476A6" }}
          >
            newCreator.org
          </a>
        </p>

        {/* Right */}
        <div
          className="flex items-center mt-4 md:mt-0"
          style={{ gap: "0.5rem" }}
        >
          {[
            { href: "https://legal.newcreator.org/privacy-policy/", label: "プライバシーポリシー" },
            { href: "https://legal.newcreator.org/tos/",            label: "各種サービス利用規約" },
          ].map(({ href, label }) => (
            <p key={href} style={{ fontSize: "0.775rem", margin: "0 4px" }}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-colors duration-200"
                style={{ color: "#718096" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#1476A6"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#718096"; }}
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
