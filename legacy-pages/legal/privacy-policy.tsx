import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Heads child="プライバシーポリシー" />
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
                プライバシーポリシー
              </h1>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-5 py-20 max-w-2xl legal-body">
          <p className="mb-8 leading-8" style={{ color: "#4A5568" }}>
            特定非営利活動法人ニュークリエイター・オルグ（理事長　改野由尚、以下「当法人」といいます。）は、当法人が提供するサービスにおける利用者の個人情報の取扱いについて以下の通りプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
          </p>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第1条　個人情報の定義</h2>
            <p className="legal-p">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、および健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第2条　個人情報の収集方法</h2>
            <p className="legal-p">
              当法人は、利用者がサービスへの申込みをする際に、氏名、住所、電話番号、メールアドレス、銀行口座番号などの情報をお尋ねすることがあります。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第3条　個人情報の収集・利用目的</h2>
            <p className="legal-p">当法人が、利用者の個人情報を収集・利用する目的は以下の通りです。</p>
            <ul className="legal-list">
              <li>当法人のサービスの提供のため</li>
              <li>利用者からのお問い合わせに対応するため</li>
              <li>利用者に対してサービスに関する情報を提供するため</li>
              <li>有料サービスにおいて、利用者に利用料金を請求するため</li>
              <li>上記の利用目的に付随する目的</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第4条　未成年の利用者の個人情報</h2>
            <p className="legal-p">
              当法人は、未成年の利用者に関する個人情報の収集、保管および使用に適用される法令のすべてを遵守するよう努めます。もし、お子様が保護者または後見人の同意なく個人情報を当法人に提供したことに気付いた場合、保護者または後見人におかれましては、本ポリシーに定める問い合わせ先までご連絡ください。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第5条　個人情報の第三者提供</h2>
            <p className="legal-p">当法人は、以下に定める場合を除き、個人情報の第三者への提供を行いません。</p>
            <ul className="legal-list">
              <li>当法人が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
              <li>法令に定められる場合</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第6条　個人情報の開示、修正および削除</h2>
            <p className="legal-p">
              当法人は、利用者から当該本人の個人情報の開示を求められた場合には遅滞なく応じます。ただし、利用者または第三者の生命、身体、財産その他権利や利益を害するおそれがある場合、または他の法令に違反するおそれがある場合には開示範囲の限定や開示しない決定を行います。
            </p>
            <p className="legal-p">
              当法人は利用者から、個人情報が真実でないという理由によって、内容の訂正、追加または削除（以下「訂正等」といいます。）を求められた場合には、他の法令の規定により特別の手続きが定められている場合を除き、ご本人であることを確認させていただいた上で調査を行い、必要な訂正等を行います。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第7条　プライバシーポリシーの変更</h2>
            <p className="legal-p">
              当法人は、プライバシーポリシーの全部または一部を改定することがあります。重要な変更がある場合には、サイト上でお知らせします。
            </p>
          </section>

          <section className="mb-10">
            <h2 className="section-title legal-h2">第8条　個人情報に関する問い合わせ先</h2>
            <p className="legal-p">
              当法人へのプライバシーポリシーに関するお問い合わせは、下記までお願いいたします。
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
