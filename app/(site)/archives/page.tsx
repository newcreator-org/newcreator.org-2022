import { ArticleList, Container, PageHeader } from "../../../components/ui";
import { getAllArchives } from "../../../libs/markdown";
import { pageMetadata } from "../../../libs/metadata";

export const metadata = pageMetadata({ title: "活動アーカイブ", path: "/archives/" });

export default function ArchivesPage() {
    const archives = getAllArchives();
    return (
        <>
            <PageHeader title="活動アーカイブ" breadcrumb={[{ label: "活動アーカイブ" }]} />
            <Container className="py-section">
                <ArticleList items={archives.map((a) => ({ href: `/archives/${a.id}/`, title: a.title, date: a.date }))} />
            </Container>
        </>
    );
}
