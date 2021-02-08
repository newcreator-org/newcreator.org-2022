export default function Board() {
    return (
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                        BOARD
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        役員
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="/img/member/yoshi.jpg"
                            />

                            <h2 className="text-gray-900 font-medium title-font tracking-wider">
                                改野 由尚
                            </h2>
                            <p className="text-gray-500 text-sm">理事長</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                            <p className="leading-relaxed text-left">
                                慶應義塾大学 在学中。
                                <br />
                                学業の傍らで行なったフリーランス、スタートアップ創業などを経て、2019年1月に特定非営利活動法人ニュークリエイター・オルグを設立。企画・開発などを主に行い、法人の中核を担う。
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="/img/member/asaga.jpeg"
                            />
                            <h2 className="text-gray-900 font-medium title-font tracking-wider">
                                浅賀 巧匠
                            </h2>
                            <p className="text-gray-500 text-sm">副理事長</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                            <p className="leading-relaxed text-left">
                                筑波大学 在学中。
                                <br />
                                NPO法人ハックジャパン時代より子ども向けプログラミング教室の運営に関わる。2019年5月よりニュークリエイター・オルグに参画。
                                バックオフィス構築から開発まで、幅広く業務を行う。
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="/img/member/koyama.jpg"
                            />
                            <h2 className="text-gray-900 font-medium title-font tracking-wider">
                                小山 優輝
                            </h2>
                            <p className="text-gray-500 text-sm">理事</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                            <p className="leading-relaxed text-left">
                                オーストラリア・アデレード大学 在学中。
                                <br />
                                NPO法人ハックジャパンの代表理事も兼務。幼少期よりグローバルに活動を行ってきた経験から、海外クライアントとのコミュニケーションを取り行う。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
