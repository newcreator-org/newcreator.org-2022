import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterCta from "../../components/footerCta";
import Heads from "../../components/customHead";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";
import Link from "next/link";
import { getAllEducatorCaseStudies } from "../../libs/markdown";
import ScrollFadeIn from "../../components/ScrollFadeIn";

const schoolTypeColor = (schoolType: string) => {
  switch (schoolType) {
    case "私立高等学校":
      return "orange";
    case "公立高等学校":
    case "公立商業高等学校":
      return "blue";
    case "私立小学校":
      return "green";
    case "私立中学校":
      return "green";
    case "公立中学校":
      return "blue";
    default:
      return "gray";
  }
};

export default function CaseStudies({ caseStudies }) {
  return (
    <>
      <Heads 
        child={{
          title: "導入事例一覧 | 先生・学校向けAI活用支援 | ニュークリエイター・オルグ",
          description: "全国の学校でのAI導入事例をご紹介します。具体的な活用方法や成果、導入のポイントなど、実践的な情報をお届けします。",
          ogUrl: "https://newcreator.org/for-educators/case-studies",
        }} 
      />
      <>
        <Header />
        <Breadcrumb 
          items={[
            { label: "ホーム", href: "/" },
            { label: "先生・学校の方へ", href: "/for-educators" },
            { label: "導入事例" },
          ]}
        />
        <main className="mx-auto">
          <ScrollFadeIn>
            <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    導入事例
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    全国の学校でのAI導入事例をご紹介します。具体的な活用方法や成果、導入のポイントなど、実践的な情報をお届けします。
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-16">
              <div className="container px-5 mx-auto max-w-6xl">
                {caseStudies.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600">現在、事例を準備中です。</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-8">
                    {caseStudies.map((caseStudy) => (
                      <Card
                        key={caseStudy.id}
                        title={caseStudy.title}
                        description={caseStudy.description}
                        badge={caseStudy.schoolType}
                        badgeColor={schoolTypeColor(caseStudy.schoolType)}
                        category={caseStudy.school}
                        href={`/for-educators/case-studies/${caseStudy.id}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-16 bg-gray-50">
              <div className="container px-5 mx-auto max-w-4xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  貴校でも導入してみませんか
                </h2>
                <p className="text-gray-600 mb-8">
                  学校の規模や状況に合わせて、最適なプランをご提案いたします。まずはお気軽にご相談ください。
                </p>
                <Link href="/apply">
                  <a className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-md">
                    お問い合わせフォームへ
                  </a>
                </Link>
              </div>
            </section>
          </ScrollFadeIn>
        </main>
        <FooterCta />
        <Footer />
      </>
    </>
  );
}

export async function getStaticProps() {
  const caseStudies = getAllEducatorCaseStudies();
  
  return {
    props: {
      caseStudies: caseStudies || [],
    },
  };
}
