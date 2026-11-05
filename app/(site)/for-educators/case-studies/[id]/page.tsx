import dayjs from "dayjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader, Prose, Section, ShareLinks, Tag, TextLink } from "../../../../../components/ui";
import { getAllEducatorCaseStudies, getEducatorCaseStudyById, renderMarkdown } from "../../../../../libs/markdown";
import { pageMetadata } from "../../../../../libs/metadata";
import { SITE } from "../../../../../libs/site";
import { EducatorContactCta } from "../../_components/EducatorContactCta";

type Params = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllEducatorCaseStudies().map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { id } = await params;
    const c = getEducatorCaseStudyById(id);
    if (!c) return {};
    return pageMetadata({
        title: [c.title, c.school, "導入事例"].filter(Boolean).join(" | "),
        description: c.description,
        path: `/for-educators/case-studies/${c.id}/`,
        type: "article",
    });
}

export default async function CaseStudyPage({ params }: Params) {
    const { id } = await params;
    const c = getEducatorCaseStudyById(id);
    if (!c) notFound();
    const path = `/for-educators/case-studies/${c.id}/`;

    return (
        <>
            <PageHeader
                width="narrow"
                breadcrumb={[
                    { label: "先生・学校の方へ", href: "/for-educators/" },
                    { label: "導入事例", href: "/for-educators/case-studies/" },
                    { label: c.school || c.title },
                ]}
                meta={
                    <>
                        <Tag>{c.schoolType || "導入事例"}</Tag>
                        {c.date && (
                            <time className="nc-num" dateTime={dayjs(c.date).format("YYYY-MM")}>
                                {dayjs(c.date).format("YYYY年MM月")}
                            </time>
                        )}
                        {c.school && <span className="font-bold text-ink">{c.school}</span>}
                    </>
                }
                title={c.title}
                lead={c.description}
            />
            <Section width="narrow" spacing="compact">
                <article>
                    <Prose html={renderMarkdown(c.content, { breaks: true })} />
                </article>
                <ShareLinks url={`${SITE.url}${path}`} title={c.title} className="mt-14 border-t border-rule pt-8" />
                <div className="mt-10">
                    <TextLink href="/for-educators/case-studies/">事例一覧に戻る</TextLink>
                </div>
            </Section>
            <EducatorContactCta
                title="貴校でも導入してみませんか"
                lead="学校の規模や状況に合わせて、最適なプランをご提案いたします。まずはお気軽にご相談ください。"
            />
        </>
    );
}
