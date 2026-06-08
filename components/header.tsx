import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// ============================================================
// Header — newCreator.org Design System v2
// CSS Modules / SCSS 廃止 → Tailwind + CSS Custom Properties
// ============================================================

const NAV_LINKS = [
  { href: "/about",         label: "私たちについて" },
  { href: "/activities",    label: "活動実績" },
  { href: "/media",         label: "メディア" },
  { href: "/for-educators", label: "先生・学校の方へ" },
  { href: "/information",   label: "お知らせ" },
  { href: "/#contact",      label: "お問い合わせ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const headerHeight = scrolled ? "60px" : "80px";

  return (
    <>
      {/* ---- Skip navigation (a11y) ---- */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:text-white focus:font-bold"
        style={{ background: "#1476A6" }}
      >
        メインコンテンツへスキップ
      </a>

      {/* ---- Header bar ---- */}
      <header
        className="sticky top-0 z-50 w-full bg-white transition-colors duration-200"
        style={{
          height: headerHeight,
          borderBottom: "1px solid rgba(20,118,166,0.08)",
          boxShadow: scrolled
            ? "0 2px 12px rgba(20,118,166,0.12)"
            : "0 1px 4px rgba(20,118,166,0.06)",
        }}
      >
        <nav
          className="flex items-center h-full mx-auto"
          style={{ width: "92%", maxWidth: "1400px", gap: "2rem" }}
        >
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/img/logo.svg"
              alt="特定非営利活動法人ニュークリエイター・オルグ"
              width={160}
              height={50}
              priority
            />
          </a>

          {/* Desktop nav links */}
          <ul
            className="hidden items-center list-none m-0 p-0 ml-2"
            style={{ display: "none" }}
            id="desktop-nav"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} style={{ marginRight: "1.5rem" }}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div
            className="items-center ml-auto flex-shrink-0"
            style={{ display: "none" }}
            id="desktop-cta"
          >
            <CtaLink
              href="mailto:contact@newcreator.org"
              variant="primary"
              height={headerHeight}
            >
              ボランティアに参加
              <span
                className="block text-center"
                style={{ fontSize: "10px", fontWeight: 700, fontStyle: "italic", letterSpacing: "0.05em", paddingTop: "2px", opacity: 0.8 }}
              >
                VOLUNTEER
              </span>
            </CtaLink>
            <CtaLink
              href="https://syncable.biz/associate/newcreator-org"
              variant="accent"
              height={headerHeight}
              external
            >
              寄付で支援する
              <span
                className="block text-center"
                style={{ fontSize: "10px", fontWeight: 700, fontStyle: "italic", letterSpacing: "0.05em", paddingTop: "2px", opacity: 0.7 }}
              >
                DONATION
              </span>
            </CtaLink>
          </div>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            className="hamburger-btn ml-auto flex flex-col justify-center items-center bg-transparent border-0 cursor-pointer flex-shrink-0"
            style={{ width: "44px", height: "44px", padding: "8px", zIndex: 60 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
            aria-expanded={menuOpen}
          >
            <HamburgerBar open={menuOpen} index={0} />
            <HamburgerBar open={menuOpen} index={1} />
            <HamburgerBar open={menuOpen} index={2} />
          </button>
        </nav>
      </header>

      {/* ---- Responsive styles via <style> tag ---- */}
      <style>{`
        @media (min-width: 1200px) {
          #desktop-nav { display: flex !important; }
          #desktop-cta { display: flex !important; }
          header button.hamburger-btn { display: none !important; }
        }
        .nav-link-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: #1476A6;
          transition: width 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link-underline:hover::after { width: 100%; }
        .nav-link-underline:hover { color: #1476A6; }
        .cta-link-primary:hover { background-color: #0F5A80 !important; }
        .cta-link-accent:hover { background-color: #F5B730 !important; }
        .drawer-cta-primary:hover { background-color: #0F5A80 !important; }
        .drawer-cta-accent:hover { background-color: #F5B730 !important; }
      `}</style>

      {/* ---- Mobile overlay ---- */}
      <div
        onClick={closeMenu}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "rgba(20,118,166,0.35)",
          backdropFilter: "blur(2px)",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 0.25s ease, visibility 0.25s ease",
        }}
      />

      {/* ---- Mobile drawer ---- */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "300px",
          maxWidth: "80vw",
          height: "100%",
          background: "#fff",
          zIndex: 45,
          overflowY: "auto",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <nav style={{ padding: "96px 1.75rem 2rem" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ href, label }) => (
              <li
                key={href}
                style={{ borderBottom: "1px solid rgba(20,118,166,0.08)" }}
              >
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block py-3.5 text-[0.9375rem] font-semibold text-heading hover:text-brand-blue transition-colors duration-200 no-underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <DrawerCtaLink href="mailto:contact@newcreator.org" variant="primary" onClick={closeMenu}>
              ボランティアに参加する
            </DrawerCtaLink>
            <DrawerCtaLink href="https://syncable.biz/associate/newcreator-org" variant="accent" onClick={closeMenu} external>
              寄付で活動を支援する
            </DrawerCtaLink>
          </div>
        </nav>
      </div>
    </>
  );
}

// ---- Sub-components ----

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="nav-link-underline relative text-heading hover:text-brand-blue font-semibold text-sm no-underline whitespace-nowrap transition-colors duration-200"
      style={{ paddingBottom: "4px" }}
    >
      {children}
    </a>
  );
}

function CtaLink({
  href, variant, height, external, children,
}: {
  href: string; variant: "primary" | "accent"; height: string;
  external?: boolean; children: React.ReactNode;
}) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const bg = variant === "primary" ? "#1476A6" : "#FDCA60";
  const textColor = variant === "primary" ? "#fff" : "#1A202C";
  const cls = variant === "primary" ? "cta-link-primary" : "cta-link-accent";
  return (
    <a
      href={href}
      {...props}
      className={`${cls} flex flex-col items-center justify-center font-bold text-[13px] text-center no-underline flex-shrink-0 transition-colors duration-200`}
      style={{
        height,
        padding: "0 1.5rem",
        color: textColor,
        background: bg,
      }}
    >
      {children}
    </a>
  );
}

function DrawerCtaLink({
  href, variant, onClick, external, children,
}: {
  href: string; variant: "primary" | "accent";
  onClick: () => void; external?: boolean; children: React.ReactNode;
}) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const bg = variant === "primary" ? "#1476A6" : "#FDCA60";
  const textColor = variant === "primary" ? "#fff" : "#1A202C";
  const cls = variant === "primary" ? "drawer-cta-primary" : "drawer-cta-accent";
  return (
    <a
      href={href}
      {...props}
      onClick={onClick}
      className={`${cls} block text-center font-bold text-sm no-underline transition-colors duration-200`}
      style={{
        padding: "0.875rem 1.5rem",
        borderRadius: "2px",
        color: textColor,
        background: bg,
      }}
    >
      {children}
    </a>
  );
}

function HamburgerBar({ open, index }: { open: boolean; index: number }) {
  const transforms: Record<number, string> = {
    0: open ? "translateY(0) rotate(45deg)" : "translateY(-6px)",
    1: "translateY(0)",
    2: open ? "translateY(-2px) rotate(-45deg)" : "translateY(6px)",
  };
  return (
    <span
      style={{
        display: "block",
        width: "24px",
        height: "2px",
        background: "#1476A6",
        borderRadius: "2px",
        transform: transforms[index],
        opacity: open && index === 1 ? 0 : 1,
        transition: "transform 0.25s ease, opacity 0.2s ease",
        transformOrigin: "center",
      }}
    />
  );
}
