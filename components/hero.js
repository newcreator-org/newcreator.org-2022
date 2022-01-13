import component from "../styles/components/hero.module.scss";

export default function Hero() {
    return (
        <>
            <section className={component.hero__cover}>
                <div>
                    <h1 className={component.hero__title}>new Creator();</h1>
                    <h2 className={component.hero__subtitle}>
                        いまの「まなび」がミライをつくる。
                        <br />
                        特定非営利活動法人ニュークリエイター・オルグは、子どもたちの「まなび」をサポートします。{" "}
                    </h2>
                </div>
            </section>
        </>
    );
}
