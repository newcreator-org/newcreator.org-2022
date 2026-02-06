import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import style from "./header.module.scss";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 10);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      if (menuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    return (
      <>
        <header className={`${style.header} ${scrolled ? style.scrolled : ""}`}>
          <nav className={style.nav}>
            <a href="/">
              <Image
                src="/img/logo.svg"
                alt="特定非営利活動法人ニュークリエイター・オルグ"
                width={160}
                height={50}
              />
            </a>
            <ul className={style.navLinks}>
              <li>
                <a href="/about">私たちについて</a>
              </li>
              <li>
                <a href="/activities">活動実績</a>
              </li>
              <li>
                <a href="/media">メディア</a>
              </li>
              <li>
                <a href="/information">お知らせ</a>
              </li>
              <li>
                <a href="/#contact">お問い合わせ</a>
              </li>
            </ul>
            <div className={style.cta}>
              <a
                className={style.cta_button_blue}
                href="mailto:contact@newcreator.org"
              >
                ボランティアに参加
                <span>VOLUNTEER</span>
              </a>
              <a
                className={style.cta_button_yello}
                href="https://syncable.biz/associate/newcreator-org"
              >
                寄付で支援する
                <span>DONATION</span>
              </a>
            </div>

            {/* Hamburger button - mobile only */}
            <button
              className={`${style.hamburger} ${menuOpen ? style.hamburgerOpen : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </nav>
        </header>

        {/* Mobile drawer overlay */}
        <div
          className={`${style.overlay} ${menuOpen ? style.overlayVisible : ""}`}
          onClick={closeMenu}
        />

        {/* Mobile drawer */}
        <div className={`${style.drawer} ${menuOpen ? style.drawerOpen : ""}`}>
          <nav className={style.drawerNav}>
            <ul>
              <li><a href="/about" onClick={closeMenu}>私たちについて</a></li>
              <li><a href="/activities" onClick={closeMenu}>活動実績</a></li>
              <li><a href="/media" onClick={closeMenu}>メディア</a></li>
              <li><a href="/information" onClick={closeMenu}>お知らせ</a></li>
              <li><a href="/#contact" onClick={closeMenu}>お問い合わせ</a></li>
            </ul>
            <div className={style.drawerCta}>
              <a
                className={style.drawerCtaBlue}
                href="mailto:contact@newcreator.org"
                onClick={closeMenu}
              >
                ボランティアに参加する
              </a>
              <a
                className={style.drawerCtaYellow}
                href="https://syncable.biz/associate/newcreator-org"
                onClick={closeMenu}
              >
                寄付で活動を支援する
              </a>
            </div>
          </nav>
        </div>
      </>
    );
}
