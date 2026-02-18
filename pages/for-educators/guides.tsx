import Header from "../../components/header";
import Footer from "../../components/footer";
import Heads from "../../components/customHead";
import Link from "next/link";
import { getAllEducatorGuides } from "../../libs/markdown";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import dayjs from "dayjs";

const categoryColor = (category: string) => {
  switch (category) {
    case "授業実践":
      return "bg-blue-100 text-blue-700";
    case "校務効率化":
      return "bg-green-100 text-green-700";
    case "導入計画":
      return "bg-purple-100 text-purple-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function Guides({ guides }) {
  return (
    <>
      <Heads 
        child={{
          title: "実践ガイド | 先生・学校関係者の方へ | 特定非営利活動法人ニュークリエイター・オルグ",
          description: "教育現場でのAI活用に関する実践的なガイドを提供しています。授業での活用方法から校務効率化まで、すぐに使える情報が満載です。",
          ogUrl: "https://newcreator.org/for-educators/guides",
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
                    実践ガイド
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    教育現場でのAI活用に関する実践的なガイドを提供しています。<br />
                    授業での活用方法から校務効率化まで、すぐに使える情報が満載です。
                  </p>
                </div>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-16">
              <div className="container px-5 mx-auto max-w-6xl">
                {guides.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600">現在、ガイドを準備中です。</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides.map((guide) => (
                      <Link key={guide.id} href={`/for-educators/guides/${guide.id}`}>
                        <a className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColor(guide.category)}`}>
                                {guide.category}
                              </span>
                              <span className="text-xs text-gray-500">
                                {dayjs(guide.date).format("YYYY.MM.DD")}
                              </span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                              {guide.title}
                            </h2>
                            <p className="text-gray-600 text-sm line-clamp-3">
                              {guide.description}
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
                  導入のご相談はこちら
                </h2>
                <p className="text-gray-600 mb-8">
                  研修のご依頼や導入相談など、お気軽にお問い合わせください。
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
  const guides = await getAllEducatorGuides();
  
  return {
    props: {
      guides,
    },
  };
}
