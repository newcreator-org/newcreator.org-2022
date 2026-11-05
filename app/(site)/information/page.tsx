import { ArticleList, Container, PageHeader } from "../../../components/ui";
import { getAllNews } from "../../../libs/markdown";
import { pageMetadata } from "../../../libs/metadata";

export const metadata = pageMetadata({ title: "お知らせ", path: "/information/" });

export default function InformationPage() {
    const news = getAllNews();
    return (
        <>
            <PageHeader title="お知らせ" breadcrumb={[{ label: "お知らせ" }]} />
            <Container className="py-section">
                <ArticleList items={news.map((n) => ({ href: `/information/${n.id}/`, title: n.title, date: n.date }))} />
            </Container>
        </>
    );
}
