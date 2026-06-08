import Header from "../../../components/header";
import Footer from "../../../components/footer";
import FooterCta from "../../../components/footerCta";
import Heads from "../../../components/customHead";
import Breadcrumb from "../../../components/Breadcrumb";
import Link from "next/link";
import { getAllEducatorGuides, getEducatorGuideById } from "../../../libs/markdown";
import dayjs from "dayjs";
import { marked } from "marked";



const categoryColor = (category: string) => {
  switch (category) {
    case "基礎・導入編":
    case "教科別":
      return "bg-[#EDF6FB] text-[#1476A6]";
    case "組織・運営編":
    case "学校種別":
      return "bg-[#EDF6FB] text-[#1476A6]";
    case "トレンド・展望編":
      return "bg-[#EDF6FB] text-[#1476A6]";
    case "管理職・ICT担当者向け":
      return "bg-[#EDF6FB] text-[#1A202C]";
    default:
      return "bg-[#EDF6FB] text-[#1476A6]";
  }
};

export default function GuideDetail({ guide }) {
  if (!guide) {
    return (
      <>
        <Header />
        <main className="container px-5 py-20 mx-auto max-w-4xl text-center">
          <h1 className="page-title text-[#1A202C] mb-4">ガイドが見つかりません</h1>
          <Link href="/for-educators/guides">
            <a className="link-brand">ガイド一覧に戻る</a>
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
        <Breadcrumb 
          items={[
            { label: "ホーム", href: "/" },
            { label: "先生・学校の方へ", href: "/for-educators" },
            { label: "実践ガイド", href: "/for-educators/guides" },
            { label: guide.title },
          ]}
        />
        <main className="mx-auto">
          <article className="py-20">
            <div className="container px-5 mx-auto max-w-4xl">


              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-sm text-xs font-bold ${categoryColor(guide.category)}`}>
                    {guide.category}
                  </span>
                  <span className="text-sm text-[#718096]">
                    {dayjs(guide.date).format("YYYY年MM月DD日")}
                  </span>
                </div>
                <h1 className="page-title font-bold text-[#1A202C] mb-4">
                  {guide.title}
                </h1>
                <p className="text-lg text-[#4A5568]">
                  {guide.description}
                </p>
              </div>

              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#1A202C] prose-a:text-[#1476A6]"
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />

              <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
                <div className="rounded-sm p-6" style={{ background: '#EDF6FB' }}>
                  <h2 className="section-title text-[#1A202C] mb-4">
                    導入のご相談はこちら
                  </h2>
                  <p className="text-[#1A202C] mb-6">
                    研修のご依頼や導入相談など、お気軽にお問い合わせください。貴校の状況に合わせた最適なプランをご提案いたします。
                  </p>
                  <Link href="/apply">
                    <a
                      className="btn-primary"
                    >
                      お問い合わせフォームへ
                    </a>
                  </Link>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/for-educators/guides">
                  <a className="link-brand">
                    ← ガイド一覧に戻る
                  </a>
                </Link>
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
