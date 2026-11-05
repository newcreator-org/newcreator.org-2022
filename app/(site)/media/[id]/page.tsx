import { notFound } from "next/navigation";
import { ArticleDetail } from "../../_shared/ArticleDetail";
import { getAllMedia, getMediaById, renderMarkdown } from "../../../../libs/markdown";
import { pageMetadata } from "../../../../libs/metadata";

type Params = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllMedia().map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Params) {
    const { id } = await params;
    const post = getMediaById(id);
    return pageMetadata({
        title: post?.title ?? "メディア",
        description: post?.description || undefined,
        path: `/media/${id}/`,
        type: "article",
    });
}

export default async function MediaDetailPage({ params }: Params) {
    const { id } = await params;
    const post = getMediaById(id);
    if (!post) notFound();
    return (
        <ArticleDetail
            title={post.title}
            date={post.date}
            category={post.category || undefined}
            section={{ label: "メディア", href: "/media/" }}
            path={`/media/${post.id}/`}
            html={renderMarkdown(post.content)}
            backLabel="メディア一覧に戻る"
        />
    );
}
