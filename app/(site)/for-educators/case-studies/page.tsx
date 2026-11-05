import { ArticleCard, CardGrid, PageHeader, Section } from "../../../../components/ui";
import { getAllEducatorCaseStudies } from "../../../../libs/markdown";
import { pageMetadata } from "../../../../libs/metadata";
import { EducatorContactCta } from "../_components/EducatorContactCta";

const DESCRIPTION = "全国の学校でのAI導入事例をご紹介します。具体的な活用方法や成果、導入のポイントなど、実践的な情報をお届けします。";

export const metadata = pageMetadata({ title: "導入事例一覧", description: DESCRIPTION, path: "/for-educators/case-studies/" });

export default function CaseStudiesPage() {
    const caseStudies = getAllEducatorCaseStudies();
    return (
        <>
            <PageHeader
                breadcrumb={[{ label: "先生・学校の方へ", href: "/for-educators/" }, { label: "導入事例" }]}
                title="導入事例"
                lead={DESCRIPTION}
            />
            <Section>
                {caseStudies.length === 0 ? (
                    <p className="py-12 text-center text-sub">現在、事例を準備中です。</p>
                ) : (
                    <CardGrid columns={2}>
                        {caseStudies.map((c) => (
                            <ArticleCard
                                key={c.id}
                                href={`/for-educators/case-studies/${c.id}/`}
                                title={c.title}
                                description={c.description}
                                category={c.schoolType || "導入事例"}
                                footer={c.school ? <p className="text-small font-bold text-ink">{c.school}</p> : undefined}
                            />
                        ))}
                    </CardGrid>
                )}
            </Section>
            <EducatorContactCta
                title="貴校でも導入してみませんか"
                lead="学校の規模や状況に合わせて、最適なプランをご提案いたします。まずはお気軽にご相談ください。"
            />
        </>
    );
}
