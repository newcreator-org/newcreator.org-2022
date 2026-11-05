import { notFound } from "next/navigation";
import { ArticleDetail } from "../../_shared/ArticleDetail";
import { getAllArchives, getArchiveById, renderMarkdown } from "../../../../libs/markdown";
import { pageMetadata } from "../../../../libs/metadata";

type Params = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllArchives().map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: Params) {
    const { id } = await params;
    const post = getArchiveById(id);
    return pageMetadata({
        title: post?.title ?? "活動アーカイブ",
        description: post?.description || undefined,
        path: `/archives/${id}/`,
        type: "article",
    });
}

export default async function ArchiveDetailPage({ params }: Params) {
    const { id } = await params;
    const post = getArchiveById(id);
    if (!post) notFound();
    return (
        <ArticleDetail
            title={post.title}
            date={post.date}
            section={{ label: "活動アーカイブ", href: "/archives/" }}
            path={`/archives/${post.id}/`}
            html={renderMarkdown(post.content, { breaks: true })}
            link={post.link}
            backLabel="活動アーカイブ一覧に戻る"
        />
    );
}
