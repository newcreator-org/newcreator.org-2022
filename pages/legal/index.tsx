import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";

const legalPages = [
  {
    href: "/legal/privacy-policy",
    title: "プライバシーポリシー",
    description: "個人情報の取り扱いについて定めています。",
    updated: "2020年6月9日 制定",
  },
  {
    href: "/legal/terms",
    title: "利用規約",
    description: "newCreator School および関連サービスの利用規約です。",
    updated: "2020年6月9日 制定・2020年10月18日 更新",
  },
  {
    href: "/legal/tokushoho",
    title: "特定商取引法に基づく表記",
    description: "特定商取引法に基づく事業者情報・返金ポリシーを掲載しています。",
    updated: "2020年6月9日 制定",
  },
  {
    href: "/legal/rule",
    title: "提供にあたってのルール",
    description: "micro:bit プレゼント企画における提供ルールです。",
    updated: "2020年6月9日 制定",
  },
];

export default function LegalIndex() {
  return (
    <>
      <Heads child="法的情報" />
      <Header />
      <main>
        <section style={{ background: "#F8FCFF" }}>
          <div className="container mx-auto px-5 py-20">
            <div className="max-w-2xl">
              <p
                className="text-xs font-bold tracking-widest mb-4"
                style={{ color: "#1476A6" }}
              >
                LEGAL
              </p>
              <h1
                className="page-title mb-4"
                style={{ color: "#1A202C" }}
              >
                法的情報
              </h1>
              <p className="text-base leading-7" style={{ color: "#4A5568" }}>
                特定非営利活動法人ニュークリエイター・オルグが定める各種規約・ポリシーの一覧です。
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-5 py-20 max-w-2xl">
          <ul className="divide-y" style={{ borderColor: "#E2E8F0" }}>
            {legalPages.map((page) => (
              <li key={page.href} className="py-12">
                <Link href={page.href}>
                  <a className="group block">
                    <p
                      className="text-xs mb-2"
                      style={{ color: "#718096" }}
                    >
                      {page.updated}
                    </p>
                    <h2
                      className="section-title mb-2 group-hover:underline"
                      style={{ color: "#1476A6" }}
                    >
                      {page.title}
                    </h2>
                    <p className="text-sm leading-6" style={{ color: "#4A5568" }}>
                      {page.description}
                    </p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
