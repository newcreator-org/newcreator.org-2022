import { Column, DefinitionList, PageHeader, Reveal, RuledColumns, Section, SectionHeading, TextLink } from "../../../components/ui";
import { pageMetadata } from "../../../libs/metadata";
import { SITE } from "../../../libs/site";
import { History } from "./History";
import { RelatedLinks } from "./RelatedLinks";

export const metadata = pageMetadata({ title: "私たちについて", path: "/about/" });

const VALUES = [
    { name: "格差ゼロ", desc: "生まれた場所・環境を問わない" },
    { name: "創造性", desc: "自由な発想を大切に" },
    { name: "協働", desc: "共に学び、共に成長" },
    { name: "挑戦", desc: "失敗を恐れず、新しいことに挑む" },
];

const GAPS = [
    {
        tag: "不登校・学びの多様化",
        heading: "35万人の子どもが、学校に行けていない",
        body: "2024年度の文科省調査では、小中学生の不登校が過去最多の35万3,970人に達しました（12年連続増加）。「学びたくない」のではなく、「学びたいのに場所がない」子がたくさんいます。学校という場所に縛られない、一人ひとりに合った学びの選択肢が必要です。",
        source: "文部科学省「令和6年度 児童生徒の問題行動・不登校等調査」",
    },
    {
        tag: "ジェンダーギャップ",
        heading: "「理系は男の子のもの」という思い込みが、女の子の選択肢を狭めている",
        body: "日本のIT・情報処理分野で働く女性の割合は約20%にとどまり、OECD諸国の中でも最低水準です。「女の子にプログラミングは難しい」という先入観は、周りの大人の言葉や社会の空気を通して、子どもの頃から刷り込まれていきます。小学生のうちに、性別に関係なく「自分にもできる」と感じる体験を積み重ねることが、その先入観を少しずつ変えていくと信じています。",
        source: "田中・大谷「日本のSTEM人材におけるジェンダーギャップ」科学教育研究 2024",
    },
    {
        tag: "地域格差",
        heading: "地方に生まれただけで、選択肢が少なくなる",
        body: "東京にいれば当たり前の環境が、地方では整っていないことが多い。近くに教室がない、身近にロールモデルがいない——そんな子どもたちにこそ、私たちは山を越えてでも届けに行きたい。",
        source: "文部科学省「プログラミング教育に関する調査」",
    },
];

const HISTORY = [
    { year: "2018年6月", title: "初のワークショップ開催", desc: "東京都内で初のプログラミングワークショップを開催、30名が参加" },
    { year: "2019年1月", title: "特定非営利活動法人として設立", desc: "子どもたちにプログラミング教育を届けるため、NPOとして活動を開始" },
    {
        year: "2020年3月",
        title: "オンライン講座開始",
        desc: "コロナ禍を受け、全国どこからでも参加できるオンライン講座を開始。地域格差解消へ",
    },
    { year: "2023年1月", title: "生成AI教育プログラム開始", desc: "ChatGPTなどの生成AIを活用した教育プログラムを日本で初めて開始" },
    {
        year: "2024年4月",
        title: "不登校支援プログラム開始",
        desc: "学校に行けない子どもたちを対象にしたオンライン学習支援プログラムを開始",
    },
];

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="私たちについて"
                breadcrumb={[{ label: "私たちについて" }]}
                lead={
                    <>
                        「作れた！」という体験は、すべての子どもに届くべきだ。
                        <br />
                        地域格差・不登校・ジェンダーギャップ——3つの教育格差をなくすために動いています。
                    </>
                }
            />

            <Section aria-labelledby="mission-heading">
                <SectionHeading id="mission-heading" index="01" title="ミッション・ビジョン" />
                <RuledColumns columns={2}>
                    <Column label="ミッション" title="すべての子どもたちに、創造的な学びの機会を届ける">
                        <p>地域・経済状況・性別・学校への適応状況に関わらず、誰もがSTEAM教育にアクセスできる社会を目指します。</p>
                    </Column>
                    <Column label="ビジョン" title="STEAM教育を全国の子どもたちに格差なく">
                        <p>子ども一人ひとりが自分の可能性を信じ、新しい価値を生み出せる力を育みます。</p>
                    </Column>
                </RuledColumns>
                <div className="mt-16">
                    <p className="text-small font-bold text-brand">バリュー</p>
                    <RuledColumns columns={4} weight="light" className="mt-4">
                        {VALUES.map((v) => (
                            <Column key={v.name} title={v.name}>
                                <p className="text-small text-sub">{v.desc}</p>
                            </Column>
                        ))}
                    </RuledColumns>
                </div>
            </Section>

            <Section tone="muted" aria-labelledby="gaps-heading">
                <SectionHeading
                    id="gaps-heading"
                    index="02"
                    title="私たちが向き合う3つの教育格差"
                    lead="数字ではなく、一人ひとりの子どもの話として考えてほしい。"
                />
                <Reveal>
                    <RuledColumns columns={3}>
                        {GAPS.map((g) => (
                            <Column key={g.tag} label={g.tag} title={g.heading} note={`出典: ${g.source}`}>
                                <p>{g.body}</p>
                            </Column>
                        ))}
                    </RuledColumns>
                </Reveal>
            </Section>

            <Section aria-labelledby="profile-heading">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <SectionHeading id="profile-heading" index="03" title="法人概要" layout="stack" rule={false} className="mb-8" />
                        <DefinitionList
                            items={[
                                { term: "法人名", detail: SITE.name },
                                { term: "設立", detail: "2019年1月18日" },
                                { term: "理事長", detail: "改野 由尚" },
                                { term: "所在地", detail: "大阪府豊中市桜の町３丁目７番７号" },
                                {
                                    term: "連絡先",
                                    detail: (
                                        <a href={`mailto:${SITE.email}`} className="text-brand underline underline-offset-[0.3em]">
                                            {SITE.email}
                                        </a>
                                    ),
                                },
                            ]}
                        />
                        <div className="mt-8">
                            <TextLink href="/about/company/">詳細な法人概要を見る</TextLink>
                        </div>
                    </div>
                    <div>
                        <SectionHeading id="history-heading" index="04" title="沿革" layout="stack" rule={false} className="mb-8" />
                        <History items={HISTORY} />
                    </div>
                </div>
            </Section>

            <Section tone="muted" aria-labelledby="team-heading">
                <SectionHeading id="team-heading" index="05" title="代表" />
                <div className="max-w-narrow">
                    <p className="text-small font-bold text-brand">理事長</p>
                    <p className="mt-2 text-h3 font-bold tracking-[0.12em] text-ink">改野 由尚</p>
                    <p className="mt-3">
                        プログラミング教育の普及に取り組む。全国の学校・自治体と連携し、子どもたちに「作れた！」の体験を届けている。
                    </p>
                </div>
            </Section>

            <Section aria-labelledby="related-heading">
                <SectionHeading id="related-heading" title="関連情報" rule={false} className="mb-8" />
                <RelatedLinks
                    links={[
                        { href: "/about/company/", label: "法人概要の詳細" },
                        { href: "/about/transparency/", label: "情報公開・透明性" },
                        { href: "/activities/", label: "活動実績" },
                        { href: "/#contact", label: "お問い合わせ" },
                    ]}
                />
            </Section>
        </>
    );
}
