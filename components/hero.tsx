import style from "./hero.module.scss";

export default function Hero() {
    return (
      <>
        {/* <section className={style.hero__cover}>
          <div>
            <h1 className={style.hero__title}>new Creator();</h1>
            <h2 className={style.hero__subtitle}>
              STEAM教育を全国の子どもたちに格差なく届ける。
              <br />
              特定非営利活動法人ニュークリエイター・オルグは、子どもたちの「まなび」をサポートします。
            </h2>
          </div>
        </section> */}
        <section className={`${style.hero__cover} bg-white pb-6 sm:pb-8 lg:pb-12 pt-10`}>
          <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
              <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24 mt-10 lg:mt-0">

                <h1 className="text-black-800 text-4xl font-bold sm:text-5xl md:mb-4 md:text-5xl  leading-relaxed mt-4">
                  STEAM教育
                  <small className="text-gray-900">における</small>
                </h1>
                <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-5xl  leading-relaxed md:mt-0">
                  格差ゼロ
                  <small className="text-gray-900">をめざす</small>
                </h1>
                <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                  ITスキルは21世紀の基本スキルとも言われていますが、
                  全ての子どもたちにはまだまだ広がっていません
                </p>
              </div>
              <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
                  <img
                    src="/img/hero3.webp"
                    loading="lazy"
                    alt="イベント画像"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                  <img
                    src="/img/hero2.webp"
                    loading="lazy"
                    alt="イベント画像"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        <div className="slider"></div>
      </>
    );
}
