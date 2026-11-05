import { PageHeader, Section } from "../../../../components/ui";
import { getAllEducatorGuides } from "../../../../libs/markdown";
import { pageMetadata } from "../../../../libs/metadata";
import { EducatorContactCta } from "../_components/EducatorContactCta";
import { GuideList } from "../_components/GuideList";

export const metadata = pageMetadata({
    title: "実践ガイド一覧",
    description:
        "学校でのAI活用に役立つ実践ガイドを多数掲載。授業での活用方法、業務効率化、セキュリティ対策など、教育現場で今すぐ使える情報を提供します。",
    path: "/for-educators/guides/",
});

export default function GuidesPage() {
    const guides = getAllEducatorGuides().map(({ id, title, description, category }) => ({ id, title, description, category }));
    return (
        <>
            <PageHeader
                breadcrumb={[{ label: "先生・学校の方へ", href: "/for-educators/" }, { label: "実践ガイド" }]}
                title="実践ガイド"
                lead="教育現場で今すぐ使える実践的なガイドを提供しています。授業での活用方法から業務効率化まで、様々なテーマをカバーしています。"
            />
            <Section spacing="compact">
                <GuideList guides={guides} />
            </Section>
            <EducatorContactCta title="導入のご相談はこちら" lead="研修のご依頼や導入相談など、お気軽にお問い合わせください。" />
        </>
    );
}
