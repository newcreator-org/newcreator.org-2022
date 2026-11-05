import {
    ArticleCard,
    Button,
    CardGrid,
    Column,
    Faq,
    PageHeader,
    RuledColumns,
    Section,
    SectionHeading,
    Stat,
    StatGrid,
    TextLink,
} from "../../../components/ui";
import { getAllEducatorCaseStudies, getAllEducatorGuides } from "../../../libs/markdown";
import { pageMetadata } from "../../../libs/metadata";
import { EducatorContactCta } from "./_components/EducatorContactCta";

export const metadata = pageMetadata({
    title: "先生・学校向けAI活用支援",
    description:
        "学校でのAI導入を完全サポート。全国22校の実績をもとに、教員研修、授業での活用方法、セキュリティ対策まで、教育現場に寄り添った支援を提供します。ChatGPT、生成AI活用の実践ガイドと導入事例を多数掲載。",
    path: "/for-educators/",
});

const CHALLENGES = [
    {
        title: "情報不足",
        body: "生成AIの教育活用について、信頼できる情報や実践事例が不足しています。どこから始めればよいか分からない先生方が多くいらっしゃいます。",
    },
    {
        title: "時間の制約",
        body: "日々の授業準備や校務に追われる中で、新しい技術を学び、授業に取り入れる時間を確保することが困難です。",
    },
    {
        title: "セキュリティ懸念",
        body: "個人情報保護やデータセキュリティの観点から、一般的な生成AIサービスを学校で使用することに不安を感じる声が多く聞かれます。",
    },
];

const SERVICES = [
    {
        title: "学校向け出張研修",
        meta: "全国10都道府県22校の実績",
        body: "生徒向け・教員向けの生成AI活用研修を実施します。学校のカリキュラムや目的に応じたプログラムを設計し、実践的な内容をお届けします。",
        link: { href: "#contact", label: "研修のご依頼はこちら" },
    },
    {
        title: "AI導入支援",
        meta: "計画策定から運用定着まで",
        body: "活用方針の策定、教員向け研修、ガイドライン整備など、学校のニーズに合わせた支援を行います。",
        link: { href: "#contact", label: "導入相談はこちら" },
    },
    {
        title: "プライベートGPT",
        meta: "セキュアな学校専用AI環境",
        body: "生徒数単位の課金・契約期間の縛りなし・請求書払い対応。情報セキュリティに対応した環境で安心してご利用いただけます。",
        link: { href: "#contact", label: "詳細・お問い合わせ" },
    },
    {
        title: "プログラミング教育",
        meta: "2017年から続く実績",
        body: "企業・行政と連携したワークショップ、講師派遣による出張授業を全国各地で実施。STEAM教育を通じて子どもたちの創造性を育みます。",
        link: { href: "/activities/", label: "活動実績を見る" },
    },
];

const FAQ_ITEMS = [
    {
        question: "研修の費用はどのくらいですか？",
        answer: "学校の規模や研修内容によって異なります。まずはお気軽にお問い合わせください。貴校の状況に合わせた最適なプランをご提案いたします。",
    },
    {
        question: "オンラインでの研修も可能ですか？",
        answer: "はい、可能です。対面とオンラインの両方に対応しており、学校の状況に応じて最適な形式をご提案します。",
    },
    {
        question: "プライベートGPTの料金体系を教えてください",
        answer: "生徒数単位の課金制で、契約期間の縛りはありません。請求書ベースでの契約が可能です。詳細はお問い合わせください。",
    },
    {
        question: "小規模な学校でも導入できますか？",
        answer: "はい、学校の規模に関わらず導入可能です。小規模校向けのプランもご用意しておりますので、お気軽にご相談ください。",
    },
];

export default function ForEducatorsPage() {
    const guides = getAllEducatorGuides().slice(0, 6);
    const caseStudies = getAllEducatorCaseStudies().slice(0, 4);

    return (
        <>
            <PageHeader
                breadcrumb={[{ label: "先生・学校の方へ" }]}
                title={
                    <>
                        教育現場でのAI活用を
                        <br className="hidden md:block" />
                        全力でサポートします
                    </>
                }
                lead="生成AIの登場により、教育現場は大きな転換期を迎えています。私たちは全国10都道府県22校での実績をもとに、先生方のAI活用を研修から導入まで一貫して支援します。"
            >
                <div className="mt-10 flex flex-wrap gap-3">
                    <Button href="/for-educators/guides/" size="lg" arrow>
                        実践ガイドを見る
                    </Button>
                    <Button href="#contact" variant="secondary" size="lg">
                        導入相談をする
                    </Button>
                </div>
            </PageHeader>

            <Section spacing="compact">
                <StatGrid>
                    <Stat value="22" unit="校" label="導入実績" />
                    <Stat value="10" label="都道府県" />
                    <Stat value="1,000" unit="+" label="参加生徒数" />
                    <Stat value="2016" unit="年から" label="活動開始" />
                </StatGrid>
            </Section>

            <Section tone="muted" aria-labelledby="challenges-heading">
                <SectionHeading
                    id="challenges-heading"
                    index="01"
                    title="教育現場が直面する課題"
                    lead="生成AIの急速な普及により、教育現場では新たな課題が生まれています。私たちはこれらの課題に対して、実践的な解決策を提供します。"
                />
                <RuledColumns columns={3}>
                    {CHALLENGES.map((c) => (
                        <Column key={c.title} title={c.title}>
                            <p>{c.body}</p>
                        </Column>
                    ))}
                </RuledColumns>
            </Section>

            <Section aria-labelledby="services-heading">
                <SectionHeading
                    id="services-heading"
                    index="02"
                    title="私たちのサービス"
                    lead="研修から導入支援まで、学校のニーズに合わせて対応します。"
                />
                <RuledColumns columns={2}>
                    {SERVICES.map((s) => (
                        <Column key={s.title} label={s.meta} title={s.title}>
                            <p>{s.body}</p>
                            <div className="mt-5">
                                <TextLink href={s.link.href}>{s.link.label}</TextLink>
                            </div>
                        </Column>
                    ))}
                </RuledColumns>
            </Section>

            {guides.length > 0 && (
                <Section tone="muted" aria-labelledby="guides-heading">
                    <SectionHeading
                        id="guides-heading"
                        index="03"
                        title="実践ガイド"
                        lead="すぐに使える実践的なガイドを提供しています"
                        action={<TextLink href="/for-educators/guides/">すべて見る</TextLink>}
                    />
                    <CardGrid>
                        {guides.map((g) => (
                            <ArticleCard
                                key={g.id}
                                href={`/for-educators/guides/${g.id}/`}
                                title={g.title}
                                description={g.description}
                                category={g.category}
                            />
                        ))}
                    </CardGrid>
                </Section>
            )}

            {caseStudies.length > 0 && (
                <Section aria-labelledby="cases-heading">
                    <SectionHeading
                        id="cases-heading"
                        index="04"
                        title="導入事例"
                        lead="全国の学校での導入事例をご紹介します"
                        action={<TextLink href="/for-educators/case-studies/">すべて見る</TextLink>}
                    />
                    <CardGrid columns={2}>
                        {caseStudies.map((c) => (
                            <ArticleCard
                                key={c.id}
                                href={`/for-educators/case-studies/${c.id}/`}
                                title={c.title}
                                description={c.description}
                                category={c.schoolType || "導入事例"}
                            />
                        ))}
                    </CardGrid>
                </Section>
            )}

            <Section tone="muted" aria-labelledby="downloads-heading">
                <SectionHeading
                    id="downloads-heading"
                    index="05"
                    title="無料ダウンロード資料"
                    lead="学校でのAI導入に役立つ資料を無料で提供しています。会議や研修でご活用ください。"
                />
                <RuledColumns columns={2}>
                    <Column title="学校でのAI導入完全ガイド">
                        <p>計画策定から運用まで、学校でのAI導入の全プロセスを詳しく解説したガイドブックです。</p>
                        <div className="mt-6">
                            <Button href="/for-educators/resources/" arrow>
                                ダウンロード
                            </Button>
                        </div>
                    </Column>
                    <Column title="学校AI活用チェックリスト">
                        <p>AI導入前に確認すべき項目をまとめたチェックリスト。導入計画の策定に役立ちます。</p>
                        <div className="mt-6">
                            <Button href="/for-educators/resources/" arrow>
                                ダウンロード
                            </Button>
                        </div>
                    </Column>
                </RuledColumns>
            </Section>

            <Section width="narrow" aria-labelledby="faq-heading">
                <SectionHeading id="faq-heading" index="06" title="よくある質問" layout="stack" rule={false} />
                <Faq items={FAQ_ITEMS} />
                <div className="mt-10">
                    <TextLink href="/for-educators/faq/">すべてのFAQを見る</TextLink>
                </div>
            </Section>

            <EducatorContactCta
                id="contact"
                title="まずはお気軽にご相談ください"
                lead="貴校の状況に合わせた最適なプランをご提案いたします"
                secondary={{ href: "/for-educators/resources/", label: "資料をダウンロード" }}
            />
        </>
    );
}
