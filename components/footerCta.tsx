import Link from "next/link";

export default function FooterCta() {
  return (
    <section className="text-gray-600 body-font bg-orange-500">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* 左側: 寄付の呼びかけ */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              寄付で子どもたちの未来を支援
            </h2>
            <p className="text-orange-100 text-lg mb-6">
              あなたの寄付が、子どもたちに学びの機会を届けます。
              <br />
              300円から支援が可能です。
            </p>
            <a
              href="https://syncable.biz/associate/newcreator-org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-orange-600 bg-white border-0 py-3 px-8 focus:outline-none hover:bg-orange-50 rounded-lg text-base font-bold transition-colors"
            >
              今すぐ寄付する
            </a>
          </div>

          {/* 右側: ボランティア募集 */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ボランティアとして参加
            </h2>
            <p className="text-orange-100 text-lg mb-6">
              講師、運営スタッフ、広報など、様々な形でご協力いただけます。
              <br />
              一緒に子どもたちの未来を創りませんか?
            </p>
            <Link href="/#contact">
              <a className="inline-flex text-white border-2 border-white py-3 px-8 focus:outline-none hover:bg-white hover:text-orange-600 rounded-lg text-base font-bold transition-colors">
                お問い合わせ
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
