export default function News() {
    return(
            <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">NEWS</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">お知らせ</h1>
          </div>
          <div className="-my-8">
            <div className="py-8 flex flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

                <span className="mt-1 text-gray-500 text-sm">2020.10.18</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  newCreator Schoolを一般公開、生徒の募集を開始しました。</h2>
                <a className="text-indigo-500 inline-flex items-center mt-4" href="https://school.newcreator.org">詳しく見る
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-no-wrap border-t-2 ">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">2020.06.30</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  クラウドファンディングで目標金額を達成しました。</h2>
                <a className="text-indigo-500 inline-flex items-center mt-4"
                  href="https://camp-fire.jp/projects/view/272924">詳しく見る
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-no-wrap  border-t-2 ">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

                <span className="mt-1 text-gray-500 text-sm">2020.06.25</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">いつでも学べるオンライン教室「LOGY
                  ロジー」と連携し非営利事業を開始しました</h2>
                <a className="text-indigo-500 inline-flex items-center mt-4"
                  href="https://prtimes.jp/main/html/rd/p/000000008.000049141.html">詳しく見る
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-no-wrap  border-t-2 ">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

                <span className="mt-1 text-gray-500 text-sm">2020.06.09</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">micro:bit プレゼントキャンペーン
                  配布ページの公開を行いました。
                </h2>
                <a className="text-indigo-500 inline-flex items-center mt-4" href="/apply.html">詳しく見る
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

                <span className="mt-1 text-gray-500 text-sm">2020.06.09</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">ホームページをリニューアルいたしました。</h2>
                <p className="leading-relaxed"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
