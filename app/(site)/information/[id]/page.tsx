import { notFound } from "next/navigation";
import { ArticleDetail } from "../../_shared/ArticleDetail";
import { getAllNews, getNewsById, renderMarkdown } from "../../../../libs/markdown";
import { pageMetadata } from "../../../../libs/metadata";

type Params = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllNews().map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: Params) {
    const { id } = await params;
    const post = getNewsById(id);
    return pageMetadata({ title: post?.title ?? "お知らせ", path: `/information/${id}/`, type: "article" });
}

export default async function InformationDetailPage({ params }: Params) {
    const { id } = await params;
    const post = getNewsById(id);
    if (!post) notFound();
    return (
        <ArticleDetail
            title={post.title}
            date={post.date}
            section={{ label: "お知らせ", href: "/information/" }}
            path={`/information/${post.id}/`}
            html={renderMarkdown(post.content, { breaks: true })}
            link={post.link}
            backLabel="お知らせ一覧に戻る"
        />
    );
}
