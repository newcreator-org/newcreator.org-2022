import type { ReactNode } from "react";
import { Container, formatDate, PageHeader, Prose, ShareLinks, Tag, TextLink, SmartLink } from "../../../components/ui";
import type { BreadcrumbItem } from "../../../components/ui";
import { SITE } from "../../../libs/site";

export type ArticleDetailProps = {
    title: string;
    date?: string;
    category?: string;
    /** 一覧のページ（パンくずと「一覧に戻る」に使う） */
    section: { label: string; href: string };
    /** "/information/xxx/" のようなこのページのパス */
    path: string;
    /** renderMarkdown 済みの HTML */
    html: string;
    /** frontmatter の link（関連リンク） */
    link?: string | null;
    backLabel: string;
    children?: ReactNode;
};

/** お知らせ・活動アーカイブ・メディアの記事詳細。本文は読みやすい幅（narrow）で組む */
export function ArticleDetail({ title, date, category, section, path, html, link, backLabel, children }: ArticleDetailProps) {
    const breadcrumb: BreadcrumbItem[] = [{ label: section.label, href: section.href }, { label: title }];
    const hasBody = html.trim().length > 0;
    return (
        <article>
            <PageHeader
                title={title}
                width="narrow"
                breadcrumb={breadcrumb}
                meta={
                    (date || category) && (
                        <>
                            {category && <Tag>{category}</Tag>}
                            {date && (
                                <time className="nc-num" dateTime={date}>
                                    {formatDate(date)}
                                </time>
                            )}
                        </>
                    )
                }
            />
            <Container width="narrow" className="py-section">
                {hasBody && <Prose html={html} />}
                {children}
                {link && (
                    <p className={hasBody ? "mt-12 border-t border-rule pt-6 text-small" : "text-small"}>
                        <span className="mr-3 font-bold text-ink">関連リンク</span>
                        <SmartLink
                            href={link}
                            className="break-all font-bold text-brand underline underline-offset-[0.3em] hover:text-brand-deep"
                        >
                            {link}
                        </SmartLink>
                    </p>
                )}
                <div className="mt-12 flex flex-col gap-8 pt-8 md:flex-row md:items-center md:justify-between">
                    <ShareLinks url={`${SITE.url}${path}`} title={`${SITE.name}｜${title}`} />
                    <TextLink href={section.href}>{backLabel}</TextLink>
                </div>
            </Container>
        </article>
    );
}
