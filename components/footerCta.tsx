import Link from "next/link";

export default function FooterCta() {
  return (
    <section style={{ background: '#1476A6' }}>
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

          {/* 寄付の呼びかけ */}
          <div className="lg:w-1/2">
            <h2 className="section-title text-white mb-4 leading-snug">
              あなたの支援が、
              <br />子どもの「作れた！」になる
            </h2>
            <p className="body-text mb-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              学校に行けない子も、地方に住む子も、
              「私には無理」と思っている女の子も。
            </p>
            <p className="label-text mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              300円から支援できます。
            </p>
            <a
              href="https://syncable.biz/associate/newcreator-org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              今すぐ寄付する
            </a>
          </div>

          {/* 区切り線（PC） */}
          <div
            className="hidden lg:block w-px self-stretch"
            style={{ background: 'rgba(255,255,255,0.2)' }}
          />

          {/* ボランティア・パートナーの呼びかけ */}
          <div className="lg:w-1/2">
            <h2 className="section-title text-white mb-4 leading-snug">
              スキルより、
              <br />気持ちを持ってきてほしい
            </h2>
            <p className="body-text mb-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              講師でも、エンジニアでも、広報でも。
              「子どもの将来を少しでもよくしたい」と思ったら、それで十分です。
            </p>
            <p className="label-text mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              学校・自治体・企業との連携も大歓迎。
            </p>
            <Link href="/#contact" className="btn-ghost-white">
              話を聞いてみる
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
