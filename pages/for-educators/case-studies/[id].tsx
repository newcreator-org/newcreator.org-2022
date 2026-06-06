import Header from "../../../components/header";
import Footer from "../../../components/footer";
import FooterCta from "../../../components/footerCta";
import Heads from "../../../components/customHead";
import Breadcrumb from "../../../components/Breadcrumb";
import Link from "next/link";
import { getAllEducatorCaseStudies, getEducatorCaseStudyById } from "../../../libs/markdown";
import dayjs from "dayjs";
import { marked } from "marked";



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

export default function CaseStudyDetail({ caseStudy }) {
  if (!caseStudy) {
    return (
      <>
        <Header />
        <main className="container px-5 py-20 mx-auto max-w-4xl text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">事例が見つかりません</h1>
          <Link href="/for-educators/case-studies">
            <a className="text-blue-600 hover:text-blue-700">事例一覧に戻る</a>
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
          title: `${caseStudy.title} | ${caseStudy.school} | 導入事例 | 特定非営利活動法人ニュークリエイター・オルグ`,
          description: caseStudy.description,
          ogUrl: `https://newcreator.org/for-educators/case-studies/${caseStudy.id}`,
        }} 
      />
      <>
        <Header />
        <Breadcrumb 
          items={[
            { label: "ホーム", href: "/" },
            { label: "先生・学校の方へ", href: "/for-educators" },
            { label: "導入事例", href: "/for-educators/case-studies" },
            { label: caseStudy.school },
          ]}
        />
        <main className="mx-auto">
          <article className="py-16">
            <div className="container px-5 mx-auto max-w-4xl">


              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${schoolTypeColor(caseStudy.schoolType)}`}>
                    {caseStudy.schoolType}
                  </span>
                  <span className="text-sm text-gray-500">
                    {dayjs(caseStudy.date).format("YYYY年MM月")}
                  </span>
                </div>
                <h2 className="text-lg text-gray-600 mb-2">
                  {caseStudy.school}
                </h2>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-lg text-gray-600">
                  {caseStudy.description}
                </p>
              </div>

              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-blockquote:border-l-brand-blue-400"
                dangerouslySetInnerHTML={{ __html: caseStudy.content }}
              />

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="rounded-xl p-8" style={{ background: '#EDF6FB' }}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    貴校でも導入してみませんか
                  </h2>
                  <p className="text-gray-700 mb-6">
                    学校の規模や状況に合わせて、最適なプランをご提案いたします。まずはお気軽にご相談ください。
                  </p>
                  <Link href="/apply">
                    <a
                      className="inline-block px-8 py-3 rounded-lg font-semibold transition-colors"
                      style={{ background: '#1476A6', color: '#fff', boxShadow: '0 4px 12px rgba(20,118,166,0.25)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#0F5A80'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1476A6'; }}
                    >
                      お問い合わせフォームへ
                    </a>
                  </Link>
                </div>
              </div>


            </div>
          </article>
        </main>
        <FooterCta />
        <Footer />
      </>
    </>
  );
}

export async function getStaticPaths() {
  const caseStudies = await getAllEducatorCaseStudies();
  const paths = caseStudies.map((caseStudy) => ({
    params: { id: caseStudy.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseStudy = await getEducatorCaseStudyById(params.id);

  if (!caseStudy) {
    return {
      props: {
        caseStudy: null,
      },
    };
  }

  // MarkdownをHTMLに変換
  const htmlContent = marked(caseStudy.content, {
    breaks: true,
    gfm: true,
  });

  return {
    props: {
      caseStudy: {
        ...caseStudy,
        content: htmlContent,
      },
    },
  };
}
