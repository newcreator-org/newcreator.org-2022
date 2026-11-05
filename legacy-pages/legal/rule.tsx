import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";

export default function Rule() {
  return (
    <>
      <Heads child="提供にあたってのルール" />
      <Header />
      <main>
        <section style={{ background: "#F8FCFF" }}>
          <div className="container mx-auto px-5 py-20">
            <div className="max-w-2xl">
              <p className="text-xs mb-2" style={{ color: "#718096" }}>
                2020年6月9日 制定
              </p>
              <h1
                className="page-title"
                style={{ color: "#1A202C" }}
              >
                提供にあたってのルール
              </h1>
              <p className="mt-3 text-sm" style={{ color: "#718096" }}>
                micro:bit プレゼント企画
              </p>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-5 py-20 max-w-2xl legal-body">
          <p className="mb-10 leading-8" style={{ color: "#4A5568" }}>
            本ルールは、特定非営利活動法人ニュークリエイター・オルグ（以下「当法人」といいます）が実施する micro:bit プレゼント企画における提供条件を定めるものです。
          </p>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第1条（定義）</h2>
            <p className="legal-p">本ルールにおいて使用する用語の定義は以下の通りとします。</p>
            <dl className="legal-dl">
              <div><dt>A.</dt><dd>「本企画」とは、当法人が実施する micro:bit プレゼント企画をいいます。</dd></div>
              <div><dt>B.</dt><dd>「提供品」とは、本企画において当法人が提供する micro:bit 本体およびその付属品をいいます。</dd></div>
              <div><dt>C.</dt><dd>「受領者」とは、本企画に応募し、提供品を受け取った方をいいます。</dd></div>
            </dl>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第2条（提供条件）</h2>
            <p className="legal-p">本企画への参加および提供品の受領にあたっては、以下の条件に同意いただく必要があります。</p>
            <dl className="legal-dl">
              <div><dt>A.</dt><dd>提供品は、当法人が提供するプログラムへの参加を目的として使用すること</dd></div>
              <div><dt>B.</dt><dd>提供品を転売・譲渡しないこと</dd></div>
              <div><dt>C.</dt><dd>提供品を適切に管理し、破損・紛失した場合は速やかに当法人へ連絡すること</dd></div>
              <div><dt>D.</dt><dd>当法人が定める利用規約およびプライバシーポリシーに同意すること</dd></div>
            </dl>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第3条（所有権）</h2>
            <p className="legal-p">
              提供品の所有権は、当法人が別途定める条件を満たした場合に受領者に移転します。条件を満たさない場合、当法人は提供品の返還を求めることができます。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第4条（免責）</h2>
            <p className="legal-p">
              当法人は、提供品の使用に起因して生じた損害について、当法人の故意または重大な過失による場合を除き、一切の責任を負いません。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第5条（ルールの変更）</h2>
            <p className="legal-p">
              当法人は、必要に応じて本ルールを変更することができます。変更後のルールは、当法人のウェブサイトに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第6条（お問い合わせ）</h2>
            <p className="legal-p">
              本ルールに関するお問い合わせは、下記までお願いいたします。
            </p>
            <p className="legal-p">
              メールアドレス：<a href="mailto:contact@newcreator.org" className="legal-link">contact@newcreator.org</a>
            </p>
          </section>

          <div className="mt-16 pt-8" style={{ borderTop: "1px solid #E2E8F0" }}>
            <Link href="/legal" className="text-sm" style={{ color: "#1476A6" }}>← 法的情報一覧に戻る</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
