import { useState } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterCta from "../../components/footerCta";
import Heads from "../../components/customHead";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";
import { getAllEducatorGuides } from "../../libs/markdown";
import ScrollFadeIn from "../../components/ScrollFadeIn";
import Link from "next/link";

const categoryColor = (category: string) => {
  switch (category) {
    case "基礎・導入編":
      return "orange";
    case "組織・運営編":
      return "green";
    case "トレンド・展望編":
      return "blue";
    case "教科別":
      return "orange";
    case "学校種別":
      return "green";
    case "管理職・ICT担当者向け":
      return "gray";
    default:
      return "blue";
  }
};

export default function Guides({ guides }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("すべて");

  const categories: string[] = ["すべて", ...Array.from(new Set<string>(guides.map((g: any) => g.category)))];

  const filteredGuides = selectedCategory === "すべて" 
    ? guides 
    : guides.filter(g => g.category === selectedCategory);

  return (
    <>
      <Heads 
        child={{
          title: "実践ガイド一覧 | 先生・学校向けAI活用支援 | ニュークリエイター・オルグ",
          description: "学校でのAI活用に役立つ実践ガイドを多数掲載。授業での活用方法、業務効率化、セキュリティ対策など、教育現場で今すぐ使える情報を提供します。",
          ogUrl: "https://newcreator.org/for-educators/guides",
        }} 
      />
      <>
        <Header />
        <Breadcrumb 
          items={[
            { label: "ホーム", href: "/" },
            { label: "先生・学校の方へ", href: "/for-educators" },
            { label: "実践ガイド" },
          ]}
        />
        <main className="mx-auto">
          <ScrollFadeIn>
            <section className="py-16 bg-[#F8FCFF]">
              <div className="container px-5 mx-auto max-w-6xl">
                <h1 className="page-title font-bold text-[#1A202C] mb-4 text-center">
                  実践ガイド
                </h1>
                <p className="text-lg text-[#4A5568] text-center max-w-3xl mx-auto">
                  教育現場で今すぐ使える実践的なガイドを提供しています。授業での活用方法から業務効率化まで、様々なテーマをカバーしています。
                </p>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-12 border-b border-[rgba(20,118,166,0.10)]">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2 rounded-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'text-white bg-[#1476A6]'
                          : 'bg-white text-[#1A202C] border border-[#CBD5E0]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <p className="text-center text-[#4A5568] mt-6">
                  {filteredGuides.length}件のガイド
                </p>
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-16">
              <div className="container px-5 mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8">
                  {filteredGuides.map((guide) => (
                    <Card
                      key={guide.id}
                      title={guide.title}
                      description={guide.description}
                      badge={guide.category}
                      badgeColor={categoryColor(guide.category)}
                      href={`/for-educators/guides/${guide.id}`}
                    />
                  ))}
                </div>
                {filteredGuides.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-[#4A5568]">該当するガイドが見つかりませんでした。</p>
                  </div>
                )}
              </div>
            </section>
          </ScrollFadeIn>

          <ScrollFadeIn>
            <section className="py-16 bg-[#F8FCFF]">
              <div className="container px-5 mx-auto max-w-4xl text-center">
                <h2 className="section-title text-[#1A202C] mb-4">
                  導入のご相談はこちら
                </h2>
                <p className="text-[#4A5568] mb-8">
                  研修のご依頼や導入相談など、お気軽にお問い合わせください。
                </p>
                <Link href="/apply">
                  <a className="btn-primary-lg">
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
  const guides = getAllEducatorGuides();

  return {
    props: {
      guides: guides || [],
    },
  };
}
