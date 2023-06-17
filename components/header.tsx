import style from "./header.module.scss";

export default function Header() {
    return (
        <>
            <header className={style.header}>
                <nav className={style.nav}>
                    <a href="/">
                        <h1 className={style.logo}>
                            特定非営利活動法人ニュークリエイター・オルグ
                        </h1>
                    </a>
                    <ul>
                        <li><a href="/#activities">活動内容</a></li>
                        <li><a href="/#information">お知らせ</a></li>
                        <li><a href="/#contact">お問い合わせ</a></li>
                    </ul>
                    <div className={style.cta}>
                        <a className={style.cta_button_blue} href="mailto:contact@newcreator.org">
                            <div className={style.cta_buton_contents}>ボランティアに<br/>参加する<span>VOLUNTEER</span></div>
                        </a>
                        <a className={style.cta_button_yello} href="https://syncable.biz/associate/newcreator-org">
                            <div className={style.cta_buton_contents}>寄付で活動を<br/>支援する<span>DONATION</span></div>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    );
}
