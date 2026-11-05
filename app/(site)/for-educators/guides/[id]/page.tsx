import dayjs from "dayjs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader, Prose, Section, ShareLinks, Tag, TextLink } from "../../../../../components/ui";
import { getAllEducatorGuides, getEducatorGuideById, renderMarkdown } from "../../../../../libs/markdown";
import { pageMetadata } from "../../../../../libs/metadata";
import { SITE } from "../../../../../libs/site";
import { EducatorContactCta } from "../../_components/EducatorContactCta";

type Params = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllEducatorGuides().map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { id } = await params;
    const guide = getEducatorGuideById(id);
    if (!guide) return {};
    return pageMetadata({
        title: `${guide.title} | 実践ガイド`,
        description: guide.description,
        path: `/for-educators/guides/${guide.id}/`,
        type: "article",
    });
}

export default async function GuidePage({ params }: Params) {
    const { id } = await params;
    const guide = getEducatorGuideById(id);
    if (!guide) notFound();
    const path = `/for-educators/guides/${guide.id}/`;

    return (
        <>
            <PageHeader
                width="narrow"
                breadcrumb={[
                    { label: "先生・学校の方へ", href: "/for-educators/" },
                    { label: "実践ガイド", href: "/for-educators/guides/" },
                    { label: guide.title },
                ]}
                meta={
                    <>
                        {guide.category && <Tag>{guide.category}</Tag>}
                        {guide.date && (
                            <time className="nc-num" dateTime={dayjs(guide.date).format("YYYY-MM-DD")}>
                                {dayjs(guide.date).format("YYYY年MM月DD日")}
                            </time>
                        )}
                    </>
                }
                title={guide.title}
                lead={guide.description}
            />
            <Section width="narrow" spacing="compact">
                <article>
                    <Prose html={renderMarkdown(guide.content, { breaks: true })} />
                </article>
                <ShareLinks url={`${SITE.url}${path}`} title={guide.title} className="mt-14 border-t border-rule pt-8" />
                <div className="mt-10">
                    <TextLink href="/for-educators/guides/">ガイド一覧に戻る</TextLink>
                </div>
            </Section>
            <EducatorContactCta
                title="導入のご相談はこちら"
                lead="研修のご依頼や導入相談など、お気軽にお問い合わせください。貴校の状況に合わせた最適なプランをご提案いたします。"
            />
        </>
    );
}
