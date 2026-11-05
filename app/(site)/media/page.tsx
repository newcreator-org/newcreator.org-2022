import { ArticleCard, CardGrid, Container, PageHeader } from "../../../components/ui";
import { getAllMedia } from "../../../libs/markdown";
import { pageMetadata } from "../../../libs/metadata";

export const metadata = pageMetadata({
    title: "メディア",
    description: "AI教育・IT教育・キャリア教育に関するコラムをお届けします",
    path: "/media/",
});

export default function MediaPage() {
    const media = getAllMedia();
    return (
        <>
            <PageHeader
                title="メディア"
                lead="AI教育・IT教育・キャリア教育に関するコラムをお届けします"
                breadcrumb={[{ label: "メディア" }]}
            />
            <Container className="py-section">
                <h2 className="sr-only">記事一覧</h2>
                <CardGrid>
                    {media.map((post) => (
                        <ArticleCard
                            key={post.id}
                            href={`/media/${post.id}/`}
                            title={post.title}
                            date={post.date}
                            category={post.category || undefined}
                            description={post.description || undefined}
                        />
                    ))}
                </CardGrid>
            </Container>
        </>
    );
}
