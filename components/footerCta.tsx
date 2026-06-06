import Link from "next/link";

export default function FooterCta() {
  return (
    <section
      className="body-font"
      style={{ background: 'linear-gradient(135deg, #1476A6 0%, #2789B9 100%)' }}
    >
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* 左側: 寄付の呼びかけ */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#95D4E8' }}>
              DONATION
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              あなたの支援が、
              <br />子どもの「作れた！」になる
            </h2>
            <p className="text-base mb-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              学校に行けない子も、地方に住む子も、
              <br />「私には無理」と思っている女の子も。
            </p>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
              300円から支援できます。
            </p>
            <a
              href="https://syncable.biz/associate/newcreator-org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bold py-3 px-8 rounded-lg text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: '#FDCA60',
                color: '#1A202C',
                boxShadow: '0 4px 12px rgba(253,202,96,0.40)',
              }}
            >
              今すぐ寄付する
            </a>
          </div>

          {/* 区切り線 */}
          <div
            className="hidden lg:block w-px self-stretch"
            style={{ background: 'rgba(255,255,255,0.2)' }}
          />

          {/* 右側: 協力・参加の呼びかけ */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-xs font-bold tracking-widest mb-3" style={{ color: '#95D4E8' }}>
              VOLUNTEER &amp; PARTNER
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              スキルより、
              <br />気持ちを持ってきてほしい
            </h2>
            <p className="text-base mb-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              講師でも、エンジニアでも、広報でも。
              <br />「子どもの将来を少しでもよくしたい」と思ったら、それで十分です。
            </p>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
              学校・自治体・企業との連携も大歓迎。
            </p>
            <Link href="/#contact">
              <a
                className="inline-flex items-center font-bold py-3 px-8 rounded-lg text-base transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '2px solid rgba(255,255,255,0.7)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.12)';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#ffffff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.7)';
                }}
              >
                話を聞いてみる
              </a>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
