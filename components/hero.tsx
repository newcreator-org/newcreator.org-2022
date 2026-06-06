// ============================================================
// Hero — newCreator.org Design System v2
// CSS Modules / SCSS 廃止 → Tailwind + CSS Custom Properties
// ============================================================

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
                className="text-xs font-bold tracking-widest mb-4 animate-fade-in-up"
                style={{ color: "#1476A6" }}
              >
                NPO法人ニュークリエイター・オルグ
              </p>

              <h1
                className="text-4xl font-bold sm:text-5xl md:mb-2 md:text-5xl leading-tight mt-2 animate-fade-in-up"
                style={{ color: "#1A202C" }}
              >
                すべての子どもに、
              </h1>
              <h1
                className="mb-4 text-4xl font-bold sm:text-5xl md:mb-6 md:text-5xl leading-tight animate-fade-in-up-delay"
                style={{ color: "#1476A6" }}
              >
                学ぶ権利を。
              </h1>

              <p
                className="max-w-md leading-7 xl:text-lg animate-fade-in-delay"
                style={{ color: "#4A5568" }}
              >
                地域格差・不登校・ジェンダーギャップ——
                <br />
                教育の「届かない」をなくすために、
                <br />
                私たちはSTEAM教育で動き続けます。
              </p>

              {/* KPI バッジ */}
              <div className="flex flex-wrap gap-4 mt-6 animate-fade-in-delay">
                {[
                  { value: "1,000+", label: "受講者数" },
                  { value: "10+",    label: "都道府県" },
                  { value: "2016",   label: "活動開始" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="rounded-lg px-4 py-2 text-center"
                    style={{
                      background: "rgba(20,118,166,0.07)",
                      border: "1px solid rgba(20,118,166,0.15)",
                    }}
                  >
                    <p className="text-xl font-bold" style={{ color: "#1476A6" }}>{value}</p>
                    <p className="text-xs" style={{ color: "#718096" }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAボタン */}
              <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-delay">
                <a
                  href="#social-issues"
                  className="inline-flex items-center rounded-lg px-6 py-3 text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: "#1476A6",
                    boxShadow: "0 4px 12px rgba(20,118,166,0.30)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#0F5A80"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#1476A6"; }}
                >
                  私たちが向き合う課題
                </a>
                <a
                  href="https://syncable.biz/associate/newcreator-org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg px-6 py-3 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: "#FDCA60",
                    color: "#1A202C",
                    boxShadow: "0 4px 12px rgba(253,202,96,0.35)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#F5B730"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#FDCA60"; }}
                >
                  活動を支援する
                </a>
              </div>
            </div>

            {/* 画像 */}
            <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div
                className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-2xl md:top-16 md:left-16 lg:ml-0"
                style={{ boxShadow: "0 8px 24px rgba(20,118,166,0.15)" }}
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
                style={{ boxShadow: "0 8px 24px rgba(20,118,166,0.15)" }}
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
