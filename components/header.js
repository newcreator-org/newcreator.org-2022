import component from '../styles/components/header.module.scss';

export default function Header() {
    return (
        <>
            <header>
                <nav className={component.header__nav}>
                    <a href="/">
                        <h1 className={component.header__logo}>
                            特定非営利活動法人ニュークリエイター・オルグ
                        </h1>
                    </a>
                </nav>
            </header>
        </>
    );
}
