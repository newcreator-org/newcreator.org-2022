export default function Philosophy() {

    const messageEnglish = {
        fontFamily: 'Ubuntu',
        fontStyle: 'italic',
        fontWeight: 400,
        letterSpacing: '.08em'
    };

    return (
        <section classNameName="text-gray-700 body-font overflow-hidden">

            <div classNameName="container px-5 py-24 mx-auto">
                <div classNameName="flex flex-col text-center w-full mb-20">
                    <h2 classNameName="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PHILOSOPHY</h2>
                    <h1 classNameName="sm:text-3xl text-2xl font-medium title-font text-gray-900">基本情報・理念</h1>
                </div>
                <div classNameName="flex flex-wrap -m-12 justify-center">
                    <p classNameName="leading-relaxed text-base text-center">
                        「特定非営利活動法人ニュークリエイター・オルグ」は、<br />2019年1月に発足した次世代の学びをオープンに制作・提供するNPO法人です。<br />
                            誰でも自由に使用や改変を行うことができ、無料で使えるオープンソースという形で提供される教材の<br />開発およびそれらを利用したイベントの開催を行っています。</p>
                    <div classNameName="p-12 md:w-full xl:w-1/2 flex flex-col items-center text-center">
                        <span
                            classNameName="inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">VISION</span>
                        <h2 classNameName="text-xl title-font font-medium text-gray-900 mt-4 mb-4">
                            IT教育を全国の子どもたちに<br />格差なく届ける
              </h2>
                        <p classNameName="leading-relaxed mb-8" style={messageEnglish}>Delivering IT education to
                all children without disparity</p>
                    </div>
                    <div classNameName="p-12 md:w-full xl:w-1/2 flex flex-col items-center text-center">
                        <span
                            classNameName="inline-block py-1 px-3 rounded bg-indigo-100 text-indigo-500 text-sm font-medium tracking-widest">MISSION</span>
                        <h2 classNameName="text-xl title-font font-medium text-gray-900 mt-4 mb-4">
                            オープンソース教材の提供を通して<br />
                                            教育の変革を促進する</h2>
                        <p classNameName="leading-relaxed mb-8" style={messageEnglish}>Promoting educational reforms
                by providing open source materials</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
