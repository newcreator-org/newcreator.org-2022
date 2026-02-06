import style from "./hero.module.scss";

export default function Hero() {
    return (
      <>
        <section className={`${style.hero__cover} bg-white pb-6 sm:pb-8 lg:pb-12 pt-10`}>
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
              <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24 mt-10 lg:mt-0">

                <h1 className="text-black-800 text-4xl font-bold sm:text-5xl md:mb-4 md:text-5xl leading-relaxed mt-4 animate-fade-in-up">
                  STEAM教育
                  <small className="text-gray-900">における</small>
                </h1>
                <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-5xl leading-relaxed md:mt-0 animate-fade-in-up-delay">
                  格差ゼロ
                  <small className="text-gray-900">をめざす</small>
                </h1>
                <p className="max-w-md leading-7 text-gray-500 xl:text-lg animate-fade-in-delay">
                  ITスキルは21世紀の基本スキルとも言われていますが、
                  全ての子どもたちにはまだまだ広がっていません
                </p>
                <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-delay">
                  <a
                    href="#activities"
                    className="inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 text-white font-medium text-sm hover:bg-orange-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    活動を見る
                  </a>
                  <a
                    href="https://syncable.biz/associate/newcreator-org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border-2 border-orange-500 px-6 py-3 text-orange-500 font-medium text-sm hover:bg-orange-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    寄付する
                  </a>
                </div>
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
          </div>
        </section>

        <div className="slider"></div>
      </>
    );
}
