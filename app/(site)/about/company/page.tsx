import { DefinitionList, PageHeader, Section, SectionHeading } from "../../../../components/ui";
import { pageMetadata } from "../../../../libs/metadata";
import { SITE } from "../../../../libs/site";
import { History } from "../History";
import { RelatedLinks } from "../RelatedLinks";

export const metadata = pageMetadata({
    title: "法人概要",
    description: "特定非営利活動法人ニュークリエイター・オルグの基本情報・設立の経緯・沿革。",
    path: "/about/company/",
});

const HISTORY = [
    {
        year: "2016年9月",
        title: "ワークショップ「newCreator」開始",
        desc: "全国各地で子ども向けプログラミング・ITワークショップを開始。Googleやさくらインターネットなどとコラボレーション。",
    },
    {
        year: "2019年1月",
        title: "特定非営利活動法人として設立",
        desc: "「IT教育を全国の子どもたちに格差なく届ける」ことを目指し、特定非営利活動法人ニュークリエイター・オルグを設立。",
    },
    {
        year: "2020年3月",
        title: "オンライン講座開始",
        desc: "コロナ禍を受け、全国どこからでも参加できるオンライン講座を開始。地域格差解消への取り組みを加速。",
    },
    {
        year: "2023年1月",
        title: "生成AI教育プログラム開始",
        desc: "ChatGPTなどの生成AIを活用した教育プログラムを開始。学校・自治体向けに展開。",
    },
    {
        year: "2024年4月",
        title: "不登校支援プログラム開始",
        desc: "学校に行けない子どもたちを対象にしたオンライン学習支援プログラムを開始。",
    },
];

const linkClass = "text-brand underline underline-offset-[0.3em] hover:text-brand-deep";

export default function CompanyPage() {
    return (
        <>
            <PageHeader
                title="法人概要"
                breadcrumb={[{ label: "私たちについて", href: "/about/" }, { label: "法人概要" }]}
                lead="特定非営利活動法人ニュークリエイター・オルグの基本情報をまとめています。"
            />

            <Section aria-labelledby="basic-heading">
                <SectionHeading id="basic-heading" index="01" title="基本情報" rule={false} className="mb-8" />
                <DefinitionList
                    items={[
                        { term: "法人名", detail: SITE.name },
                        { term: "設立", detail: "2019年1月18日（2016年より活動開始）" },
                        { term: "理事長", detail: "改野 由尚" },
                        { term: "所在地", detail: "大阪府豊中市桜の町３丁目７番７号" },
                        {
                            term: "事業内容",
                            detail: (
                                <>
                                    インターネットを使用したIT教育事業
                                    <br />
                                    青少年及び若者を対象としたIT教育イベント、IT教室及び啓発事業
                                    <br />
                                    次世代人材の育成に関する情報提供事業
                                </>
                            ),
                        },
                        {
                            term: "連絡先",
                            detail: (
                                <a href={`mailto:${SITE.email}`} className={linkClass}>
                                    {SITE.email}
                                </a>
                            ),
                        },
                        {
                            term: "Webサイト",
                            detail: (
                                <a href={SITE.url} className={linkClass}>
                                    {SITE.url}
                                </a>
                            ),
                        },
                    ]}
                />
            </Section>

            <Section tone="muted" aria-labelledby="origin-heading">
                <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-5">
                        <h2 id="origin-heading" className="text-h2 font-bold">
                            <span className="nc-num mr-4 inline-block align-[0.12em] text-[0.6em] font-bold text-brand">02</span>
                            設立の経緯
                        </h2>
                    </div>
                    <div className="space-y-6 text-lead md:col-span-7 md:pt-5">
                        <p>
                            兵庫県の小さな町で生まれ育った代表の改野は、幼いころよりITの分野に興味があったものの、それらを気軽に学べる機会はほとんどありませんでした。大阪の高校に進学した際に地方と都市部での機会格差を目の当たりにし、住んでいる場所によって将来の選択の幅を狭められてしまう人たちも多くいるのではないかと考えました。
                        </p>
                        <p>
                            そんな人たちを少しでも減らしたい。その思いから、2016年に子ども向けのプログラミング・ITワークショップ「newCreator（ニュークリエイター）」を全国各地で始め、2019年1月に特定非営利活動法人として設立しました。
                        </p>
                        <p>
                            活動を続ける中で、地域格差だけでなく、不登校の子どもたちにも、「理系は男の子のもの」という社会の思い込みにさらされる女の子たちにも、同じ壁があることが見えてきました。STEAM教育を通じて、地域・不登校・ジェンダーという3つの教育格差をなくすことが、私たちのミッションです。
                        </p>
                    </div>
                </div>
            </Section>

            <Section aria-labelledby="history-heading">
                <SectionHeading id="history-heading" index="03" title="沿革" rule={false} className="mb-8" />
                <History items={HISTORY} />
            </Section>

            <Section tone="muted" aria-labelledby="related-heading">
                <SectionHeading id="related-heading" title="関連情報" rule={false} className="mb-8" />
                <RelatedLinks
                    links={[
                        { href: "/about/", label: "私たちについて" },
                        { href: "/about/transparency/", label: "情報公開・透明性" },
                        { href: "/activities/", label: "活動実績" },
                        { href: "/#contact", label: "お問い合わせ" },
                    ]}
                />
            </Section>
        </>
    );
}
