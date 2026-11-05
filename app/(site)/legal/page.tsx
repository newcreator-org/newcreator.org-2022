import { Container, PageHeader, SmartLink } from "../../../components/ui";
import { pageMetadata } from "../../../libs/metadata";

export const metadata = pageMetadata({ title: "法的情報", path: "/legal/" });

const legalPages = [
    {
        href: "/legal/privacy-policy/",
        title: "プライバシーポリシー",
        description: "個人情報の取り扱いについて定めています。",
        updated: "2020年6月9日 制定",
    },
    {
        href: "/legal/terms/",
        title: "利用規約",
        description: "newCreator School および関連サービスの利用規約です。",
        updated: "2020年6月9日 制定・2020年10月18日 更新",
    },
    {
        href: "/legal/tokushoho/",
        title: "特定商取引法に基づく表記",
        description: "特定商取引法に基づく事業者情報・返金ポリシーを掲載しています。",
        updated: "2020年6月9日 制定",
    },
    {
        href: "/legal/rule/",
        title: "提供にあたってのルール",
        description: "micro:bit プレゼント企画における提供ルールです。",
        updated: "2020年6月9日 制定",
    },
];

export default function LegalIndexPage() {
    return (
        <>
            <PageHeader
                title="法的情報"
                lead="特定非営利活動法人ニュークリエイター・オルグが定める各種規約・ポリシーの一覧です。"
                breadcrumb={[{ label: "法的情報" }]}
            />
            <Container className="py-section">
                <ul className="border-t-2 border-ink">
                    {legalPages.map((page) => (
                        <li key={page.href} className="border-b border-rule">
                            <SmartLink
                                href={page.href}
                                className="group grid gap-2 py-6 md:grid-cols-[1fr_16rem] md:items-baseline md:gap-10"
                            >
                                <span>
                                    <span className="block text-h3 font-bold text-ink transition-colors duration-nc group-hover:text-brand group-hover:underline group-hover:underline-offset-[0.3em]">
                                        {page.title}
                                    </span>
                                    <span className="mt-2 block text-small">{page.description}</span>
                                </span>
                                <span className="text-caption text-sub md:text-right">{page.updated}</span>
                            </SmartLink>
                        </li>
                    ))}
                </ul>
            </Container>
        </>
    );
}
