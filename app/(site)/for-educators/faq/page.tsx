import { Column, Faq, PageHeader, RuledColumns, Section, SectionHeading, TextLink } from "../../../../components/ui";
import { pageMetadata } from "../../../../libs/metadata";
import { EducatorContactCta } from "../_components/EducatorContactCta";

export const metadata = pageMetadata({
    title: "よくある質問",
    description: "教育現場でのAI導入に関するよくある質問にお答えします。費用、セキュリティ、活用方法など、導入前の疑問を解消します。",
    path: "/for-educators/faq/",
});

const FAQ_DATA: { category: string; questions: { question: string; answer: string }[] }[] = [
    {
        category: "導入について",
        questions: [
            {
                question: "生成AIを授業で使うことに不安があります。どこから始めればよいですか。",
                answer: "まずは先生ご自身が生成AIを体験することをお勧めします。授業準備や校務での活用から始めることで、生成AIの特性や限界を理解できます。私たちの研修では、基礎から実践まで段階的に学べるプログラムを提供しています。",
            },
            {
                question: "費用はどのくらいかかりますか。",
                answer: "学校の規模やご要望に応じて柔軟に対応いたします。出張研修は交通費込みで10万円から、プライベートGPTは生徒数単位の課金で月額3万円からご利用いただけます。詳細はお問い合わせください。",
            },
            {
                question: "導入までにどのくらいの期間が必要ですか。",
                answer: "プライベートGPTの導入は最短1週間で可能です。出張研修は日程調整を含めて1ヶ月程度、AI導入支援サービスは計画策定から運用開始まで3ヶ月程度が目安です。",
            },
            {
                question: "小規模な学校でも導入できますか。",
                answer: "はい、可能です。生徒数や予算に応じて柔軟にプランを調整いたします。小規模校向けの特別プランもご用意しています。",
            },
        ],
    },
    {
        category: "セキュリティ・プライバシー",
        questions: [
            {
                question: "個人情報やデータのセキュリティは大丈夫ですか。",
                answer: "プライベートGPTでは、学校専用の環境を提供し、入力されたデータは学習に使用されません。また、アクセス制限やログ管理など、教育機関に必要なセキュリティ機能を備えています。",
            },
            {
                question: "生徒の利用状況を把握できますか。",
                answer: "はい、管理者画面から利用状況の統計情報を確認できます。プライバシーに配慮し、詳細な質問内容ではなく、利用時間や頻度などの統計データを提供します。",
            },
            {
                question: "一般的なChatGPTとの違いは何ですか。",
                answer: "プライベートGPTは教育機関向けに設計されており、データが学習に使用されない、アクセス制限が可能、利用ログの管理ができる、学校のネットワーク内で利用できるなどの特徴があります。",
            },
        ],
    },
    {
        category: "活用方法",
        questions: [
            {
                question: "他の学校ではどのように活用していますか。",
                answer: "授業での調べ学習支援、レポート作成のサポート、英語学習での対話練習、プログラミング教育での質問対応など、多様な場面で活用されています。導入事例ページで詳しくご紹介しています。",
            },
            {
                question: "どの教科で活用できますか。",
                answer: "国語、英語、社会、理科、数学、情報など、ほぼすべての教科で活用できます。各教科の特性に応じた活用方法を研修でご紹介します。",
            },
            {
                question: "生徒がAIに依存しすぎる心配はありませんか。",
                answer: "適切な指導とガイドラインの設定により、AIを補助ツールとして活用しながら、自分で考える力を育てることができます。情報リテラシー教育と並行して進めることが重要です。",
            },
            {
                question: "教員の業務効率化にも使えますか。",
                answer: "はい、授業準備、教材作成、保護者向け文書の作成など、様々な場面で活用できます。実践ガイドページで具体的な方法をご紹介しています。",
            },
        ],
    },
    {
        category: "研修・サポート",
        questions: [
            {
                question: "研修はどのような内容ですか。",
                answer: "生成AIの基礎知識、授業での活用方法、セキュリティとプライバシー、情報リテラシー教育など、学校のニーズに応じてカスタマイズします。教員向けと生徒向けの両方に対応しています。",
            },
            {
                question: "研修後のサポートはありますか。",
                answer: "はい、導入後も継続的にサポートいたします。メールやオンラインでの質問対応、追加研修の実施など、学校の状況に応じて柔軟に対応します。",
            },
            {
                question: "オンラインでの研修は可能ですか。",
                answer: "はい、オンライン研修にも対応しています。全国どこからでも参加でき、移動時間や交通費を削減できます。",
            },
        ],
    },
    {
        category: "契約・支払い",
        questions: [
            {
                question: "契約期間の縛りはありますか。",
                answer: "プライベートGPTは月単位での契約が可能で、長期契約の縛りはありません。学校の状況に応じて柔軟に対応いたします。",
            },
            {
                question: "支払い方法は何がありますか。",
                answer: "請求書払い、銀行振込に対応しています。学校の会計処理に合わせて柔軟に対応いたします。",
            },
            {
                question: "年度途中からの導入は可能ですか。",
                answer: "はい、可能です。いつでも導入を開始でき、年度途中での契約にも対応しています。",
            },
        ],
    },
];

const RELATED = [
    { title: "実践ガイド", body: "授業での活用方法や校務効率化のテクニックをご紹介", href: "/for-educators/guides/" },
    { title: "導入事例", body: "全国の学校での具体的な活用事例をご紹介", href: "/for-educators/case-studies/" },
    { title: "サービス一覧", body: "研修、導入支援、プライベートGPTなどのサービス", href: "/for-educators/" },
];

export default function FaqPage() {
    return (
        <>
            <PageHeader
                breadcrumb={[{ label: "先生・学校の方へ", href: "/for-educators/" }, { label: "よくある質問" }]}
                title="よくある質問"
                lead={
                    <>
                        教育現場でのAI導入に関するよくある質問にお答えします。
                        <br />
                        こちらに掲載されていない質問は、お気軽にお問い合わせください。
                    </>
                }
            />
            <Section width="narrow">
                <div className="space-y-16">
                    {FAQ_DATA.map((group) => (
                        <section key={group.category} aria-labelledby={`faq-${group.category}`}>
                            <h2 id={`faq-${group.category}`} className="mb-6 text-h2 font-bold">
                                {group.category}
                            </h2>
                            <Faq items={group.questions} />
                        </section>
                    ))}
                </div>
            </Section>
            <EducatorContactCta
                title="その他のご質問はこちら"
                lead="掲載されていない質問や、より詳しい情報をお求めの方は、お気軽にお問い合わせください。"
            />
            <Section aria-labelledby="related-heading">
                <SectionHeading id="related-heading" title="関連情報" layout="stack" />
                <RuledColumns columns={3} weight="light">
                    {RELATED.map((r) => (
                        <Column key={r.href} title={r.title}>
                            <p>{r.body}</p>
                            <div className="mt-5">
                                <TextLink href={r.href}>見る</TextLink>
                            </div>
                        </Column>
                    ))}
                </RuledColumns>
            </Section>
        </>
    );
}
