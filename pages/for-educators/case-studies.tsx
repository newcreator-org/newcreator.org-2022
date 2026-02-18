import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";
import { getAllEducatorCaseStudies } from "../../libs/markdown";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import dayjs from "dayjs";

const schoolTypeColor = (schoolType: string) => {
  switch (schoolType) {
    case "私立高等学校":
      return "bg-purple-100 text-purple-700";
    case "公立高等学校":
    case "公立商業高等学校":
      return "bg-blue-100 text-blue-700";
    case "私立中学校":
      return "bg-green-100 text-green-700";
    case "公立中学校":
      return "bg-teal-100 text-teal-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function CaseStudies({ caseStudies }) {
  return (
    <>
      <Heads 
        child={{
          title: "導入事例 | 先生・学校関係者の方へ | 特定非営利活動法人ニュークリエイター・オルグ",
          description: "全国の学校でのAI導入事例をご紹介します。具体的な活用方法や成果、導入のポイントなど、実践的な情報をお届けします。",
          ogUrl: "https://newcreator.org/for-educators/case-studies",
        }} 
      />
      <>
        <Header />
        <main className="mx-auto">
          <ScrollFadeIn>
            <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    導入事例
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    全国の学校でのAI導入事例をご紹介します。<br />
                    具体的な活用方法や成果、導入のポイントなど、実践的な情報をお届けします。
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
                      <Link key={caseStudy.id} href={`/for-educators/case-studies/${caseStudy.id}`}>
                        <a className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                          <div className="p-8">
                            <div className="flex items-center justify-between mb-4">
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${schoolTypeColor(caseStudy.schoolType)}`}>
                                {caseStudy.schoolType}
                              </span>
                              <span className="text-xs text-gray-500">
                                {dayjs(caseStudy.date).format("YYYY.MM")}
                              </span>
                            </div>
                            <h3 className="text-sm text-gray-600 mb-2">
                              {caseStudy.school}
                            </h3>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">
                              {caseStudy.title}
                            </h2>
                            <p className="text-gray-600 text-sm line-clamp-3">
                              {caseStudy.description}
                            </p>
                          </div>
                        </a>
                      </Link>
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
                  学校の規模や状況に合わせて、最適なプランをご提案いたします。<br />
                  まずはお気軽にご相談ください。
                </p>
                <Link href="/apply">
                  <a className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    お問い合わせフォームへ
                  </a>
                </Link>
              </div>
            </section>
          </ScrollFadeIn>
        </main>
        <Footer />
      </>
    </>
  );
}

export async function getStaticProps() {
  const caseStudies = await getAllEducatorCaseStudies();
  
  return {
    props: {
      caseStudies,
    },
  };
}
