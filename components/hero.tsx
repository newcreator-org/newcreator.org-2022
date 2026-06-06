export default function Hero() {
  return (
    <>
      <section
        className="pb-6 sm:pb-8 lg:pb-12 pt-10"
        style={{ background: "linear-gradient(160deg, #EDF6FB 0%, #ffffff 65%)" }}
      >
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-8 flex flex-wrap justify-between md:mb-16">

            {/* テキスト */}
            <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24 mt-10 lg:mt-0">

              <p
                className="text-xs font-bold tracking-widest mb-6 animate-fade-in-up"
                style={{ color: "#1476A6" }}
              >
                NPO法人ニュークリエイター・オルグ
              </p>

              {/* メインコピー: 短く、余白を持たせる */}
              <h1
                className="text-5xl font-bold leading-[1.2] mb-6 animate-fade-in-up"
                style={{ color: "#1A202C", letterSpacing: "-0.02em" }}
              >
                学びは、
                <br />
                <span style={{ color: "#1476A6" }}>どこにいても</span>
                <br />
                届くべきだ。
              </h1>

              {/* サブコピー: 体験ベースの言葉 */}
              <p
                className="max-w-sm leading-8 text-base mb-8 animate-fade-in-delay"
                style={{ color: "#4A5568" }}
              >
                学校に行けない子がいる。
                <br />
                地方に生まれただけで選択肢が狭まる子がいる。
                <br />
                「理系は男の子のもの」と思い込んでいる女の子がいる。
                <br />
                <br />
                そういう現実を変えたくて、私たちは動いています。
              </p>

              {/* CTAボタン */}
              <div className="flex flex-wrap gap-3 animate-fade-in-delay">
                <a
                  href="#social-issues"
                  className="inline-flex items-center rounded-lg px-6 py-3 text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: "#1476A6",
                    boxShadow: "0 4px 12px rgba(20,118,166,0.25)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#0F5A80"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1476A6"; }}
                >
                  私たちが向き合う現実
                </a>
                <a
                  href="https://syncable.biz/associate/newcreator-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg px-6 py-3 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: "#FDCA60",
                    color: "#1A202C",
                    boxShadow: "0 4px 12px rgba(253,202,96,0.30)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#F5B730"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#FDCA60"; }}
                >
                  活動を支援する
                </a>
              </div>

              {/* 実績: 数字より文脈を先に */}
              <p
                className="mt-10 text-xs leading-6 animate-fade-in-delay"
                style={{ color: "#A0AEC0" }}
              >
                2016年から活動 ／ 全国10都道府県以上 ／ 累計1,000人以上の子どもたちと
              </p>
            </div>

            {/* 画像 */}
            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div
                className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-2xl md:top-16 md:left-16 lg:ml-0"
                style={{ boxShadow: "0 12px 32px rgba(20,118,166,0.12)" }}
              >
                <img
                  src="/img/hero3.webp"
                  loading="lazy"
                  alt="子どもたちへのSTEAM教育の様子"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div
                className="overflow-hidden rounded-2xl"
                style={{ boxShadow: "0 12px 32px rgba(20,118,166,0.12)" }}
              >
                <img
                  src="/img/hero2.webp"
                  loading="lazy"
                  alt="全国各地でのワークショップ"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="slider" />
    </>
  );
}
