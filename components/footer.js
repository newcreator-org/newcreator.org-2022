import dayjs from 'dayjs';

export default function Footer() {
    return (
        <>
            <footer class="text-gray-600 body-font">
                <div class="container px-5  py-12 mx-auto">
                    <div class="flex flex-wrap md:text-left text-center order-first">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                CATEGORIES
                            </h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        First Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Second Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Third Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Fourth Link
                                    </a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                CATEGORIES
                            </h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        First Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Second Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Third Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Fourth Link
                                    </a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                CATEGORIES
                            </h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        First Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Second Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Third Link
                                    </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">
                                        Fourth Link
                                    </a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                Hosting:
                            </h2>
                            <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://vercel.com?utm_source=newcreator-org&utm_campaign=oss"
                                    >
                                        <img
                                            alt="Powered by Vercel"
                                            height="20"
                                            src="https://raw.githubusercontent.com/newcreator-org/newcreator.org/master/public/powered-by-vercel.svg"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                            © 2019 - {dayjs().format("YYYY")} -
                            <a
                                href="https://twitter.com/knyttneve"
                                rel="noopener noreferrer"
                                class="text-gray-600 ml-1"
                                target="_blank"
                            >
                                特定非営利活動法人 ニュークリエイター・オルグ
                            </a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a
                                className="text-gray-500"
                                href="https://www.facebook.com/newcreator.org/"
                            >
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>

                            <a
                                className="ml-3 text-gray-500"
                                href="https://twitter.com/nC_org"
                            >
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
            {/* // <!-- < footer className="footer" >
        //     <div className="has-text-centered">
        //         <p>特定非営利活動法人 ニュークリエイター・オルグ<br/>
        //             〒560-0054 大阪府豊中市桜の町3-7-7 ｜ 法人番号 3120905005839</p>
        //             <p className="copyright"><small lang="en">© 2020 newCreator.org</small></p>
        //   </div>
        // </footer> --> */}
        </>
    );
}
