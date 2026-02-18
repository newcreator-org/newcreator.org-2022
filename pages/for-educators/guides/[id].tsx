import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Heads from "../../../components/customHead";
import Link from "next/link";
import { getAllEducatorGuides, getEducatorGuideById } from "../../../libs/markdown";
import dayjs from "dayjs";
import { marked } from "marked";
import markdownStyles from "../../../styles/markdown.module.css";


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

export default function GuideDetail({ guide }) {
  if (!guide) {
    return (
      <>
        <Header />
        <main className="container px-5 py-20 mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ガイドが見つかりません</h1>
          <Link href="/for-educators/guides">
            <a className="text-blue-600 hover:text-blue-700">ガイド一覧に戻る</a>
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Heads 
        child={{
          title: `${guide.title} | 実践ガイド | 特定非営利活動法人ニュークリエイター・オルグ`,
          description: guide.description,
          ogUrl: `https://newcreator.org/for-educators/guides/${guide.id}`,
        }} 
      />
      <>
        <Header />
        <main className="mx-auto">
          <article className="py-16">
            <div className="container px-5 mx-auto max-w-4xl">
              <div className="mb-8">
                <Link href="/for-educators/guides">
                  <a className="text-blue-600 hover:text-blue-700 text-sm">
                    ← ガイド一覧に戻る
                  </a>
                </Link>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColor(guide.category)}`}>
                    {guide.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {dayjs(guide.date).format("YYYY年MM月DD日")}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {guide.title}
                </h1>
                <p className="text-lg text-gray-600">
                  {guide.description}
                </p>
              </div>

              <div 
                className={markdownStyles.markdown}
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-blue-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    導入のご相談はこちら
                  </h2>
                  <p className="text-gray-700 mb-6">
                    研修のご依頼や導入相談など、お気軽にお問い合わせください。貴校の状況に合わせた最適なプランをご提案いたします。
                  </p>
                  <Link href="/apply">
                    <a className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      お問い合わせフォームへ
                    </a>
                  </Link>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/for-educators/guides">
                  <a className="text-blue-600 hover:text-blue-700">
                    ← ガイド一覧に戻る
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </>
    </>
  );
}

export async function getStaticPaths() {
  const guides = await getAllEducatorGuides();
  const paths = guides.map((guide) => ({
    params: { id: guide.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const guide = await getEducatorGuideById(params.id);

  if (!guide) {
    return {
      props: {
        guide: null,
      },
    };
  }

  // MarkdownをHTMLに変換
  const htmlContent = marked(guide.content, {
    breaks: true,
    gfm: true,
  });

  return {
    props: {
      guide: {
        ...guide,
        content: htmlContent,
      },
    },
  };
}
