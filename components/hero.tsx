import style from "./hero.module.scss";

export default function Hero() {
    return (
      <>
        <section className={style.hero__cover}>
          <div>
            <h1 className={style.hero__title}>new Creator();</h1>
            <h2 className={style.hero__subtitle}>
              IT教育を全国の子どもたちに格差なく届ける。
              <br />
              特定非営利活動法人ニュークリエイター・オルグは、子どもたちの「まなび」をサポートします。
            </h2>
          </div>
        </section>
      </>
    );
}
