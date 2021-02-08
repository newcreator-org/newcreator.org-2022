export default function Sponser() {
    return(
          <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">SPONSERED
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">支援者の方々</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">当法人はさまざまな団体、個人にご支援いただき成り立っています。<br/>
              あなたもその一員になりませんか？</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden" href="https://logy.app">
                <img alt="sponser" className="object-cover object-center w-full h-full block"
                  src="/img/sponser/logy.png"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">プログラミング教室
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">LOGYさま</h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="sponser" className="object-cover object-center w-full h-full block"
                  src="/img/sponser/iteens-lab.png"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">子どもプログラミング教室</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">ITeens Labさま</h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden" href="https://www.kidsweekend.jp/portal">
                <img alt="sponser" className="object-cover object-center w-full h-full block"
                  src="/img/sponser/kids-weekend.png"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">子供向け教室検索・予約サービス
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Kids Weekendさま</h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden" href="https://geolonia.com/">
                <img alt="sponser" className="object-cover object-center w-full h-full block"
                  src="/img/sponser/geolonia.png"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">地図サービス</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">株式会社Geoloniaさま</h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="sponser" className="object-cover object-center w-full h-full block"
                  src="/img/sponser/kamiyama-kousen.png"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">神山まるごと高専設立委員会</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">池田 朋弘さま</h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="sponser" className="object-cover object-center w-full h-full block"
                  src="/img/sponser/nakamura.png"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">京都産業大学 非常勤講師
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">中村 亮太さま</h2>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="sponser" className="object-cover object-center w-full h-full block"
                  src="/img/sponser/morikawa.png"/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">micro:bitプログラミング研究室 運営
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">森川 治雄さま</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
