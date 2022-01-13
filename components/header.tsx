import component from "./header.module.scss";

export default function Header() {
    return (
        <>
            <header className={component.header}>
                <nav className={component.nav}>
                    <a href="/">
                        <h1 className={component.logo}>
                            特定非営利活動法人ニュークリエイター・オルグ
                        </h1>
                    </a>
                </nav>
            </header>
        </>
    );
}
