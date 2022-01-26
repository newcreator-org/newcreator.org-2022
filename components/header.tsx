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
                </nav>
            </header>
        </>
    );
}
