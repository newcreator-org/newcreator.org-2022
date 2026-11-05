import { Button, Column, PageHeader, RuledColumns, Section, SectionHeading, Tag, TextLink } from "../../../../components/ui";
import { pageMetadata } from "../../../../libs/metadata";
import { EducatorContactCta } from "../_components/EducatorContactCta";

export const metadata = pageMetadata({
    title: "ダウンロード資料",
    description:
        "学校でのAI導入に役立つ資料を無料でダウンロードできます。導入完全ガイド、チェックリスト、活用事例集など、実践的な資料を多数ご用意しています。",
    path: "/for-educators/resources/",
});

const RESOURCES = [
    {
        title: "学校でのAI導入完全ガイド",
        description:
            "計画から実践まで、学校でAIを導入する際のステップバイステップガイド。推進体制の構築、研修の実施、保護者との連携まで、成功するためのポイントを網羅的に解説します。",
        pages: "全8章・約40ページ",
        format: "PDF",
        downloadUrl: "/downloads/for-educators/ai-implementation-guide.pdf",
        category: "導入計画",
    },
    {
        title: "学校AI活用チェックリスト",
        description:
            "導入前の準備から定着まで、各段階で確認すべきポイントをチェックリスト形式でまとめました。進捗管理や振り返りに活用できます。",
        pages: "全10セクション・約20ページ",
        format: "PDF",
        downloadUrl: "/downloads/for-educators/ai-checklist.pdf",
        category: "導入計画",
    },
];

const RELATED = [
    {
        title: "実践ガイド",
        body: "授業での活用方法、導入計画、セキュリティ対策など、実践的なガイドを多数掲載しています。",
        href: "/for-educators/guides/",
        label: "ガイドを見る",
    },
    {
        title: "導入事例",
        body: "実際に学校でAIを導入した事例を詳しく紹介しています。成功のポイントや課題への対応を学べます。",
        href: "/for-educators/case-studies/",
        label: "事例を見る",
    },
    {
        title: "よくある質問",
        body: "学校でのAI活用に関するよくある質問と回答をまとめています。",
        href: "/for-educators/faq/",
        label: "FAQを見る",
    },
];

export default function ResourcesPage() {
    return (
        <>
            <PageHeader
                breadcrumb={[{ label: "先生・学校の方へ", href: "/for-educators/" }, { label: "ダウンロード資料" }]}
                title="ダウンロード資料"
                lead="学校でのAI導入に役立つ資料を無料でダウンロードできます。導入計画の策定、教員研修、保護者説明など、様々な場面でご活用ください。"
            />
            <Section>
                <ul className="border-t-2 border-ink">
                    {RESOURCES.map((r) => (
                        <li key={r.downloadUrl} className="grid gap-6 border-b border-rule py-10 md:grid-cols-12 md:items-center md:gap-10">
                            <div className="md:col-span-8">
                                <div className="flex flex-wrap items-center gap-3 text-small text-sub">
                                    <Tag>{r.category}</Tag>
                                    <span className="nc-num">{r.format}</span>
                                    <span>{r.pages}</span>
                                </div>
                                <h2 className="mt-4 text-h2 font-bold">{r.title}</h2>
                                <p className="mt-3">{r.description}</p>
                            </div>
                            <div className="md:col-span-4 md:text-right">
                                <Button href={r.downloadUrl} size="lg" download>
                                    ダウンロード
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </Section>
            <Section tone="muted" aria-labelledby="related-heading">
                <SectionHeading id="related-heading" title="その他のリソース" layout="stack" />
                <RuledColumns columns={3} weight="light">
                    {RELATED.map((r) => (
                        <Column key={r.href} title={r.title}>
                            <p>{r.body}</p>
                            <div className="mt-5">
                                <TextLink href={r.href}>{r.label}</TextLink>
                            </div>
                        </Column>
                    ))}
                </RuledColumns>
            </Section>
            <EducatorContactCta
                tone="default"
                title="導入支援のご相談はこちら"
                lead="貴校の状況に合わせた導入計画の策定から、教員研修、実践サポートまで、一貫して支援いたします。"
            />
        </>
    );
}
