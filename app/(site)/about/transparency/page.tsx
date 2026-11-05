import { Button, DefinitionList, PageHeader, Section, SectionHeading, TextLink } from "../../../../components/ui";
import { pageMetadata } from "../../../../libs/metadata";
import { RelatedLinks } from "../RelatedLinks";

export const metadata = pageMetadata({
    title: "情報公開・透明性",
    description: "特定非営利活動法人ニュークリエイター・オルグの情報公開について。定款・事業報告書・計算書類・役員名簿の閲覧方法。",
    path: "/about/transparency/",
});

export default function TransparencyPage() {
    return (
        <>
            <PageHeader
                title="情報公開・透明性"
                breadcrumb={[{ label: "私たちについて", href: "/about/" }, { label: "情報公開・透明性" }]}
                lead="NPOとして、活動の透明性を確保し、支援してくださる皆さんに信頼していただける組織であり続けます。"
            />

            <Section aria-labelledby="documents-heading">
                <SectionHeading
                    id="documents-heading"
                    index="01"
                    title="法定書類の公開"
                    lead={
                        <p>
                            定款・事業報告書・計算書類・役員名簿は、特定非営利活動促進法に基づき所轄庁（豊中市）に提出しており、所轄庁で閲覧できます。内閣府の「NPO法人ポータルサイト」でも法人情報を検索できます。
                        </p>
                    }
                    action={<TextLink href="https://www.npo-homepage.go.jp/">NPO法人ポータルサイト（内閣府）</TextLink>}
                />
                <DefinitionList
                    items={[
                        { term: "定款", detail: "法人の目的、事業内容、組織体制などを定めています。" },
                        { term: "事業報告書", detail: "事業年度ごとの活動実績をまとめています。" },
                        { term: "計算書類", detail: "活動計算書・貸借対照表・財産目録など、事業年度ごとの財務状況です。" },
                        { term: "役員名簿", detail: "事業年度ごとの役員の氏名・役職・任期です。" },
                    ]}
                />
            </Section>

            <Section tone="muted" aria-labelledby="policies-heading">
                <SectionHeading id="policies-heading" index="02" title="規約・方針" rule={false} className="mb-8" />
                <RelatedLinks
                    links={[
                        { href: "/legal/privacy-policy/", label: "プライバシーポリシー" },
                        { href: "/legal/terms/", label: "各種サービス利用規約" },
                        { href: "/legal/tokushoho/", label: "特定商取引法に基づく表記" },
                        { href: "/legal/rule/", label: "提供にあたってのルール" },
                    ]}
                />
            </Section>

            <Section aria-labelledby="transparency-contact-heading">
                <SectionHeading
                    id="transparency-contact-heading"
                    title="公開情報についてご不明な点は、お気軽に"
                    lead="取材・連携・寄付などのご相談もこちらから。"
                    action={
                        <Button href="/#contact" size="lg" arrow>
                            お問い合わせ
                        </Button>
                    }
                />
            </Section>
        </>
    );
}
