import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";

export default function Tokushoho() {
  return (
    <>
      <Heads child="特定商取引法に基づく表記" />
      <Header />
      <main>
        <section style={{ background: "#F8FCFF" }}>
          <div className="container mx-auto px-5 py-20">
            <div className="max-w-2xl">
              <h1
                className="page-title"
                style={{ color: "#1A202C" }}
              >
                特定商取引法に基づく表記
              </h1>
            </div>
          </div>
        </section>

        <article className="container mx-auto px-5 py-20 max-w-2xl legal-body">
          <p className="mb-10 leading-8" style={{ color: "#4A5568" }}>
            特定商取引法（旧称「訪問販売法」）は、訪問販売や通信販売等、消費者トラブルを生じやすい取引類型を対象に、事業者が守るべきルールと、クーリング・オフ等の消費者を守るルールを定めています。当法人においても、コンプライアンスの観点から、関連法規を遵守し、以下に「特定商取引法に基づく表示」を掲載します。
          </p>

          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <tbody>
              {[
                { label: "会社名", value: "特定非営利活動法人ニュークリエイター・オルグ" },
                { label: "代表責任者", value: "理事長　改野 由尚" },
                { label: "本社所在地", value: "大阪府豊中市桜の町３丁目７番７号" },
                { label: "電話番号", value: "〈非公開〉" },
                {
                  label: "メールアドレス",
                  value: (
                    <>
                      <span className="block">本社：<a href="mailto:contact@newcreator.org" className="legal-link">contact@newcreator.org</a></span>
                      <span className="block">School事務局：<a href="mailto:school@newcreator.org" className="legal-link">school@newcreator.org</a></span>
                    </>
                  ),
                },
                {
                  label: "ウェブサイトURL",
                  value: (
                    <>
                      <span className="block">本社：<a href="https://newcreator.org" className="legal-link">https://newcreator.org</a></span>
                      <span className="block">School：<a href="https://school.newcreator.org" className="legal-link">https://school.newcreator.org</a></span>
                    </>
                  ),
                },
                { label: "販売価格", value: "「料金・割引」のページをご参照ください。" },
                {
                  label: "商品代金以外の必要料金",
                  value: "料金プランにより異なります。詳細は「料金・割引」のページに記載しておりますので、ご確認ください。料金の表示は税抜表示となっておりますので、料金の他に別途消費税がかかります。",
                },
                { label: "ご利用開始", value: "ご契約日以降で、お客様がご希望する日" },
                { label: "お支払い方法", value: "クレジットカードなど（決済サービスに依存する）" },
              ].map(({ label, value }) => (
                <tr key={label} style={{ borderBottom: "1px solid #E2E8F0" }}>
                  <th
                    className="py-4 pr-6 text-left align-top font-bold whitespace-nowrap"
                    style={{ color: "#2D3748", width: "40%" }}
                  >
                    {label}
                  </th>
                  <td className="py-4 leading-7" style={{ color: "#4A5568" }}>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <section className="mt-12 mb-10">
            <h2 className="section-title legal-h2">キャンセル等（クーリングオフ）</h2>
            <p className="legal-p">
              サービスの性質上、原則として返品・返金はお受けしておりません。ただし、当法人サービスは特定商取引法の対象であるため、『契約書を受け取った日』から数えて8日以内であれば、クーリングオフが可能となり、以下の金額が返金されます。
            </p>

            <div className="mt-6 space-y-6">
              <div className="p-6" style={{ background: "#F8FCFF", border: "1px solid #E2E8F0" }}>
                <p className="font-bold mb-2" style={{ color: "#2D3748" }}>契約解除がサービス開始前（クーリングオフ期間は経過したが、まだ授業を受けていない）</p>
                <p className="text-sm leading-6" style={{ color: "#4A5568" }}>
                  通常必要とする費用の額（初期費用）3,500円＋税
                </p>
              </div>
              <div className="p-6" style={{ background: "#F8FCFF", border: "1px solid #E2E8F0" }}>
                <p className="font-bold mb-2" style={{ color: "#2D3748" }}>契約解除がサービス開始後（すでに何回か授業を受けている場合）</p>
                <p className="text-sm leading-6" style={{ color: "#4A5568" }}>
                  ① 初期費用の具体的な内容が明示されていたら初期費用<br />
                  ② 既に授業を受けた分の費用<br />
                  ③ １ヶ月分の授業料<br />
                  <span className="font-bold">①＋②＋③の金額</span>
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7" style={{ color: "#4A5568" }}>
              クーリングオフをお考えの際は、当法人までお電話・メールにてご連絡をお願い致します。
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
