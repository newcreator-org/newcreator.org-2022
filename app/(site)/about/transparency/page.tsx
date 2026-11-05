import { Button, Icon, PageHeader, Section, SectionHeading, TextLink } from "../../../../components/ui";
import { pageMetadata } from "../../../../libs/metadata";

export const metadata = pageMetadata({
    title: "情報公開・透明性",
    description:
        "特定非営利活動法人ニュークリエイター・オルグの情報公開。定款・規約、2025年度活動計算書の概要、貸借対照表の公告（2020〜2025年度）、役員名簿を掲載しています。",
    path: "/about/transparency/",
});

// 所轄庁（豊中市）に提出した事業報告書等に基づく。2026-11-05 掲載（master の #57 から移植）
const INCOME = [
    { label: "受取寄附金", value: "10,119" },
    { label: "事業収益", value: "5,610,000" },
    { label: "その他収益", value: "5,446" },
];
const EXPENSES = [
    { label: "事業費", value: "2,758,719" },
    { label: "管理費", value: "135,208" },
];

const BALANCE_SHEETS = [
    { year: "2025（令和7）年度", date: "2026年5月31日現在", net: "4,063,120", file: "bs-fy2025.pdf" },
    { year: "2024（令和6）年度", date: "2025年5月31日現在", net: "1,331,482", file: "bs-fy2024.pdf" },
    { year: "2023（令和5）年度", date: "2024年5月31日現在", net: "2,939,683", file: "bs-fy2023.pdf" },
    { year: "2022（令和4）年度", date: "2023年5月31日現在", net: "2,387,735", file: "bs-fy2022.pdf" },
    { year: "2021（令和3）年度", date: "2022年5月31日現在", net: "740,953", file: "bs-fy2021.pdf" },
    { year: "2020（令和2）年度", date: "2021年5月31日現在", net: "251,425", file: "bs-fy2020.pdf" },
];

const OFFICERS = [
    { role: "理事長", name: "改野 由尚" },
    { role: "副理事長", name: "小山 優輝" },
    { role: "理事", name: "衛藤 泰地" },
    { role: "監事", name: "山下 真歩" },
];
const OFFICER_TERM = "2026年10月20日〜2028年10月19日";

function AmountRow({ label, value, total }: { label: string; value: string; total?: boolean }) {
    return (
        <tr className={total ? "border-b border-ink font-bold text-ink" : "border-b border-rule"}>
            <td className={total ? "py-3" : "py-3 pl-4"}>{label}</td>
            <td className="nc-num py-3 text-right">{value}</td>
        </tr>
    );
}

export default function TransparencyPage() {
    return (
        <>
            <PageHeader
                title="情報公開・透明性"
                breadcrumb={[{ label: "私たちについて", href: "/about/" }, { label: "情報公開・透明性" }]}
                lead={
                    <>
                        <p>NPOとして、活動の透明性を確保し、支援してくださる皆さんに信頼していただける組織であり続けます。</p>
                        <p>定款・財務情報・貸借対照表の公告・役員名簿をこちらで公開しています。</p>
                    </>
                }
            />

            <Section aria-labelledby="documents-heading">
                <SectionHeading
                    id="documents-heading"
                    index="01"
                    title="定款・規約"
                    lead="法人の目的・事業内容・組織体制を定めた文書と、サービス提供に関する規約です。"
                />
                <div className="grid gap-10 md:grid-cols-3">
                    {[
                        {
                            title: "定款",
                            desc: "特定非営利活動法人ニュークリエイター・オルグの定款です。法人の目的、事業内容、組織体制などを定めています。所轄庁（豊中市）および内閣府NPO法人ポータルサイトで閲覧できます。",
                            href: "https://www.npo-homepage.go.jp/npoportal/",
                            label: "NPO法人ポータルサイト",
                        },
                        {
                            title: "提供にあたってのルール",
                            desc: "当法人が提供する教材・サービスの利用条件を定めています。",
                            href: "/legal/rule/",
                            label: "ルールを見る",
                        },
                        {
                            title: "プライバシーポリシー",
                            desc: "個人情報の取り扱いについて定めたプライバシーポリシーです。",
                            href: "/legal/privacy-policy/",
                            label: "ポリシーを見る",
                        },
                    ].map((d) => (
                        <div key={d.title}>
                            <h3 className="text-h3 font-bold">{d.title}</h3>
                            <p className="mt-3 text-small">{d.desc}</p>
                            <div className="mt-5">
                                <TextLink href={d.href}>{d.label}</TextLink>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="finance" tone="muted" aria-labelledby="finance-heading">
                <SectionHeading
                    id="finance-heading"
                    index="02"
                    title="財務情報"
                    lead="所轄庁（豊中市）に提出した事業報告書等に基づいて掲載しています。事業年度は毎年6月1日から翌年5月31日までです。"
                />
                <div className="grid gap-16 lg:grid-cols-2">
                    <div>
                        <h3 className="text-h3 font-bold">2025（令和7）年度 活動計算書の概要</h3>
                        <p className="mt-2 text-small text-sub">2025年6月1日から2026年5月31日まで（単位：円）</p>
                        <table className="mt-6 w-full border-collapse text-small">
                            <thead>
                                <tr className="border-b border-rule text-left text-ink">
                                    <th className="py-2 font-bold">科目</th>
                                    <th className="py-2 text-right font-bold">金額（円）</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2} className="pb-1 pt-4 font-bold text-ink">
                                        【経常収益】
                                    </td>
                                </tr>
                                {INCOME.map((r) => (
                                    <AmountRow key={r.label} {...r} />
                                ))}
                                <AmountRow label="経常収益計" value="5,625,565" total />
                                <tr>
                                    <td colSpan={2} className="pb-1 pt-6 font-bold text-ink">
                                        【経常費用】
                                    </td>
                                </tr>
                                {EXPENSES.map((r) => (
                                    <AmountRow key={r.label} {...r} />
                                ))}
                                <AmountRow label="経常費用計" value="2,893,927" total />
                                <tr className="border-b border-rule bg-white font-bold text-ink">
                                    <td className="px-3 py-4">当期正味財産増減額</td>
                                    <td className="nc-num px-3 py-4 text-right">2,731,638</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="balance-sheet">
                        <h3 className="text-h3 font-bold">貸借対照表の公告</h3>
                        <p className="mt-2 text-small">特定非営利活動促進法第28条の2の規定に基づき、各事業年度の貸借対照表を公告します。</p>
                        <ul className="mt-6">
                            {BALANCE_SHEETS.map((b) => (
                                <li key={b.year} className="flex items-center justify-between gap-4 border-b border-rule py-4">
                                    <div>
                                        <p className="font-bold text-ink">{b.year} 貸借対照表</p>
                                        <p className="text-small text-sub">
                                            {b.date}　正味財産合計 <span className="nc-num">{b.net}</span>円
                                        </p>
                                    </div>
                                    <a
                                        href={`/downloads/koukoku/${b.file}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${b.year} 貸借対照表（PDF）`}
                                        className="inline-flex min-h-[44px] shrink-0 items-center gap-2 px-4 text-small font-bold text-ink shadow-[inset_0_0_0_1.5px_var(--nc-ink)] transition-colors duration-nc hover:bg-ink hover:text-white"
                                    >
                                        PDF
                                        <Icon name="download" size={16} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-caption text-sub">公告開始日：2026年11月5日</p>
                    </div>
                </div>
            </Section>

            <Section aria-labelledby="officers-heading">
                <SectionHeading
                    id="officers-heading"
                    index="03"
                    title="役員名簿"
                    lead="2026年9月30日の通常総会で選任された役員です（任期は2026年10月20日から。役員はいずれも無報酬）。"
                />
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-rule text-left text-small text-ink">
                            <th className="py-3 font-bold">役職</th>
                            <th className="py-3 font-bold">氏名</th>
                            <th className="hidden py-3 font-bold md:table-cell">任期</th>
                        </tr>
                    </thead>
                    <tbody>
                        {OFFICERS.map((o) => (
                            <tr key={o.role} className="border-b border-rule">
                                <td className="py-4 text-small font-bold text-ink">{o.role}</td>
                                <td className="py-4">
                                    <span className="font-bold tracking-[0.1em] text-ink">{o.name}</span>
                                    <span className="mt-1 block text-caption text-sub md:hidden">{OFFICER_TERM}</span>
                                </td>
                                <td className="hidden py-4 text-small md:table-cell">{OFFICER_TERM}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Section>

            <Section tone="muted" aria-labelledby="transparency-contact-heading">
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
