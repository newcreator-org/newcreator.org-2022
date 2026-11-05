import { ContactSection } from "../components/layout";
import {
    ArticleList,
    Button,
    Column,
    Container,
    DefinitionList,
    Feature,
    LogoMarquee,
    Message,
    Reveal,
    RuledColumns,
    Section,
    SectionHeading,
    Stat,
    StatGrid,
    TextLink,
} from "../components/ui";
import { getAllArchives, getAllMedia, getAllNews } from "../libs/markdown";
import { pageMetadata } from "../libs/metadata";
import { SITE } from "../libs/site";

export const metadata = pageMetadata({ path: "/" });

const ISSUES = [
    {
        label: "不登校",
        title: "35万人を超える子どもが、居場所を失っている",
        body: "学校に行けなくなった子の中には、「学びたくない」のではなく、「学びたいのに場所がない」子がたくさんいます。オンラインで、自分のペースで、安心できる場所で学べる環境をつくることが、私たちの役割だと思っています。",
        note: "文部科学省「令和6年度 児童生徒の問題行動・不登校等調査」より",
    },
    {
        label: "ジェンダーギャップ",
        title: "「理系は男の子のもの」と思っている女の子がいる",
        body: "「女の子にプログラミングは難しい」という先入観は、子どもの頃から形成されます。小学生のうちに「自分にもできる」と感じる体験を積み重ねることが、その先入観を少しずつ変えていくと信じています。",
        note: "日本のIT分野の女性比率は約20%（OECD最低水準）：科学教育研究 2024より",
    },
    {
        label: "地域格差",
        title: "地方に生まれただけで、選択肢が少なくなる",
        body: "東京にいれば当たり前の環境が、地方では整っていないことが多い。近くに教室がない、身近にロールモデルがいない——そんな子どもたちにこそ、私たちは山を越えてでも届けに行きたい。",
        note: "文部科学省「プログラミング教育に関する調査」より",
    },
];

const SERVICES = [
    {
        title: "AI導入支援サービス",
        image: "/img/works/school-plus.png",
        body: "教育現場への生成AI導入を、計画策定から運用定着まで一貫してサポート。活用方針の策定、教員向け研修、ガイドライン整備など学校のニーズに合わせた支援を行います。",
    },
    {
        title: "プライベートGPT",
        image: "/img/works/gpt.jpg",
        body: "教育機関向けに、安全な生成AI利用環境を提供。生徒数単位の課金、契約期間の縛りなし、請求書ベースでの契約が可能です。",
    },
    {
        title: "プログラミング教育",
        image: "/img/works/workshop.jpg",
        body: "企業や行政と連携したワークショップの開催、講師派遣による出張授業を2017年度より全国各地で実施。",
    },
    {
        title: "オンラインスクール",
        image: "/img/works/school.jpg",
        body: "小中学生向けプログラミング教室「newCreator School」を1対1のオンライン授業でリーズナブルに提供。",
    },
    {
        title: "学校支援",
        image: "/img/works/logy.jpg",
        body: "「newCreator School +」としてカリキュラムや教職員向けマニュアルを提供。兵庫県たつの市立龍野西中学校等で導入実績あり。",
    },
];

const DONATIONS = [
    { amount: "3,000", body: "1人の子どもが1ヶ月間プログラミング教室に参加できます" },
    { amount: "10,000", body: "地方での出張授業1回分の交通費になります" },
    { amount: "30,000", body: "新しい教材の開発費に充てられます" },
];

export default function HomePage() {
    const news = getAllNews().slice(0, 5);
    const archives = getAllArchives().slice(0, 4);
    const media = getAllMedia().slice(0, 3);

    return (
        <>
            {/* ---- ファーストビュー ---- */}
            <section aria-labelledby="hero-heading" className="bg-paper pb-14 pt-10 md:pb-20 md:pt-16">
                <Container>
                    <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
                        <div className="lg:col-span-5 lg:pb-4">
                            <p className="text-small font-bold text-brand">{SITE.name}</p>
                            <h1 id="hero-heading" className="mt-6 text-display font-bold">
                                学びは、
                                <br />
                                <span className="nc-marker">どこにいても</span>
                                <br />
                                届くべきだ。
                            </h1>
                            <div className="mt-8 space-y-1 text-lead">
                                <p>学校に行けない子がいる。</p>
                                <p>地方に生まれただけで選択肢が狭まる子がいる。</p>
                                <p>「理系は男の子のもの」と思い込んでいる女の子がいる。</p>
                                <p className="pt-4 font-bold text-ink">そういう現実を変えたくて、私たちは動いています。</p>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-3">
                                <Button href="#social-issues" size="lg" arrow>
                                    私たちが向き合う現実
                                </Button>
                                <Button href={SITE.donateUrl} variant="donate" size="lg" arrow>
                                    活動を支援する
                                </Button>
                            </div>
                        </div>
                        <figure className="m-0 lg:col-span-7">
                            <div className="aspect-[4/3] overflow-hidden bg-hair">
                                <img
                                    src="/img/hero1.webp"
                                    alt="ワークショップでタブレットを囲む子どもたちと講師"
                                    width={1201}
                                    height={901}
                                    fetchPriority="high"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <figcaption className="mt-3 text-caption text-sub">2016年から、全国10都道府県以上・累計1,000人以上の子どもたちと。</figcaption>
                        </figure>
                    </div>
                </Container>
            </section>

            {/* ---- 協力企業・団体 ---- */}
            <section aria-label="これまでに協力いただいた企業・学校" className="border-y border-rule bg-white py-6">
                <LogoMarquee
                    src="/img/partner.png"
                    width={15137}
                    height={401}
                    displayHeight={52}
                    label="これまでに協力いただいた企業・財団・学校のロゴ"
                />
            </section>

            {/* ---- 実績 ---- */}
            <Section spacing="compact">
                <StatGrid>
                    <Stat value="1,000" unit="人以上" label="累計参加生徒数" />
                    <Stat value="50" unit="回以上" label="ワークショップ実施回数" />
                    <Stat value="10" unit="都道府県" label="活動地域" />
                    <Stat value="2016" unit="年から" label="活動開始" />
                </StatGrid>
            </Section>

            {/* ---- なぜやっているのか ---- */}
            <Section tone="muted" aria-labelledby="why-heading">
                <Reveal>
                    <div className="grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-5">
                            <h2 id="why-heading" className="border-t-2 border-ink pt-5 text-h2 font-bold">
                                なぜ、私たちは
                                <br className="hidden md:block" />
                                これをやっているのか
                            </h2>
                        </div>
                        <div className="space-y-6 text-lead md:col-span-7 md:pt-5">
                            <p>
                                初めてプログラミングに触れたときのことを覚えている子どもは、いまもたくさんいます。「作れた！」と目が輝く子どもたちの顔は、何年たっても忘れられません。
                            </p>
                            <p>
                                でも、その機会は平等に届いていない。学校に行けない子、地方に住む子、「私には無理」と思い込んでいる女の子……そういった子たちにこそ、「作れた！」の体験を届けたい。それが、私たちの出発点です。
                            </p>
                            <p className="border-l-2 border-brand pl-5 text-h3 font-bold text-ink">「STEAM教育を、全国の子どもたちに格差なく」</p>
                        </div>
                    </div>
                </Reveal>
            </Section>

            {/* ---- 社会課題 ---- */}
            <Section id="social-issues" aria-labelledby="issues-heading">
                <SectionHeading
                    id="issues-heading"
                    index="01"
                    title="いま、日本の子どもたちに起きていること"
                    lead="数字ではなく、一人ひとりの子どもの話として考えてほしい。"
                />
                <RuledColumns columns={3}>
                    {ISSUES.map((issue) => (
                        <Column key={issue.label} label={issue.label} title={issue.title} note={issue.note}>
                            <p>{issue.body}</p>
                        </Column>
                    ))}
                </RuledColumns>
                <div className="mt-12">
                    <TextLink href="/about/">私たちについて詳しく見る</TextLink>
                </div>
            </Section>

            {/* ---- 事業 ---- */}
            <Section id="services" tone="muted" aria-labelledby="services-heading">
                <SectionHeading
                    id="services-heading"
                    index="02"
                    title="事業"
                    lead="教育機関・自治体向けに、生成AIの研修から導入支援、プログラミング教育まで一貫して提供しています。"
                />
                <Feature
                    layout="wide"
                    meta="10都道府県 22校で実施"
                    title="学校向け出張授業・登壇"
                    image="/img/works/otsumajyoshi.jpg"
                    imageAlt="学校での生成AI活用研修の様子"
                    action={<TextLink href="/#contact">研修を依頼する</TextLink>}
                >
                    <p>
                        全国の学校・教育機関へ講師を派遣し、生徒向け・教員向けの生成AI活用研修を実施します。学校のカリキュラムや目的に応じたプログラムを設計し、実践的な内容をお届けします。
                    </p>
                </Feature>
                <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s) => (
                        <Feature key={s.title} title={s.title} image={s.image} imageAlt="">
                            <p className="text-small">{s.body}</p>
                        </Feature>
                    ))}
                    <div className="flex flex-col justify-between border-t-2 border-ink bg-white p-6 sm:col-span-2 lg:col-span-1">
                        <div>
                            <p className="text-h3 font-bold text-ink">先生・学校関係者の方へ</p>
                            <p className="mt-3 text-small">
                                「導入したいけど、何から始めればいいかわからない」——そんな先生の相談相手になれるよう、私たちはいます。
                            </p>
                        </div>
                        <div className="mt-6">
                            <Button href="/for-educators/" arrow fullWidth>
                                教育機関向けの支援を見る
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ---- 活動・メディア・お知らせ ---- */}
            <Section aria-labelledby="activities-heading">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <SectionHeading
                            id="activities-heading"
                            index="03"
                            title="最近の活動"
                            layout="stack"
                            action={<TextLink href="/archives/">すべて見る</TextLink>}
                        />
                        <ArticleList
                            items={archives.map((a) => ({ href: `/archives/${a.id}/`, title: a.title, date: a.date }))}
                        />
                    </div>
                    <div>
                        <SectionHeading
                            id="news-heading"
                            index="04"
                            title="お知らせ"
                            layout="stack"
                            action={<TextLink href="/information/">すべて見る</TextLink>}
                        />
                        <ArticleList
                            items={news.map((n) => ({ href: `/information/${n.id}/`, title: n.title, date: n.date }))}
                        />
                    </div>
                </div>
            </Section>

            <Section tone="muted" aria-labelledby="media-heading">
                <SectionHeading
                    id="media-heading"
                    index="05"
                    title="メディア"
                    lead="教育とテクノロジーについて、現場で考えていることを書いています。"
                    action={<TextLink href="/media/">すべての記事を見る</TextLink>}
                />
                <ArticleList
                    items={media.map((m) => ({ href: `/media/${m.id}/`, title: m.title, date: m.date, category: m.category }))}
                />
                <div className="mt-16 border-t border-rule pt-10">
                    <p className="text-small font-bold text-ink">これまでの掲載</p>
                    <img
                        src="/img/media.png"
                        alt="これまでに取り上げていただいた新聞・テレビ・Web メディアのロゴ"
                        width={849}
                        height={173}
                        loading="lazy"
                        className="mt-6 w-full max-w-[720px]"
                    />
                </div>
            </Section>

            {/* ---- 理事長メッセージ・法人情報 ---- */}
            <Section aria-labelledby="message-heading">
                <div className="grid gap-16 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <h2 id="message-heading" className="border-t-2 border-ink pt-5 text-h2 font-bold">
                            想い
                        </h2>
                        <Message name="改野 由尚" role="理事長" photo="/img/member/yoshi.jpg" className="mt-10">
                            <p>
                                不登校の子どもも、地方に住む子どもも、「ITは自分には関係ない」と思っている女の子も——どんな子どもにも、学ぶ機会は平等にあるべきだと思っています。
                            </p>
                            <p>
                                教育の「届かない」をなくすために、地域・行政・企業の皆さまと協力し、子どもたちの可能性を広げる学びの場をつくり続けます。
                            </p>
                            <p>AI時代だからこそ、「誰でも、どこでも、自分らしく」学べる社会を、一緒につくりませんか。</p>
                        </Message>
                    </div>
                    <div className="lg:col-span-6">
                        <h2 className="border-t-2 border-ink pt-5 text-h2 font-bold">法人情報</h2>
                        <DefinitionList
                            className="mt-10 border-t-0"
                            items={[
                                { term: "法人名", detail: SITE.name },
                                { term: "法人番号", detail: <span className="nc-num">3120905005839</span> },
                                { term: "設立", detail: "2016年より活動、2019年1月法人化" },
                                {
                                    term: "事業内容",
                                    detail: (
                                        <>
                                            STEAM教育事業及び啓発事業
                                            <br />
                                            次世代人材の育成に関する情報提供事業
                                        </>
                                    ),
                                },
                                { term: "所在地", detail: "大阪府豊中市桜の町3丁目7番7号" },
                            ]}
                        />
                        <div className="mt-8">
                            <TextLink href="/about/company/">法人概要を見る</TextLink>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ---- 寄付 ---- */}
            <Section id="donation" tone="pale" aria-labelledby="donation-heading">
                <SectionHeading
                    id="donation-heading"
                    title="活動を応援してください"
                    lead="私たちの活動は300円から応援いただけます。皆さまの寄付が、子どもたちの未来を切り開く力になります。"
                />
                <RuledColumns columns={3}>
                    {DONATIONS.map((d) => (
                        <Column key={d.amount}>
                            <p className="nc-num text-[2.5rem] font-semibold leading-none text-ink">
                                <span className="mr-1 text-[0.6em]">¥</span>
                                {d.amount}
                            </p>
                            <p className="mt-4">{d.body}</p>
                        </Column>
                    ))}
                </RuledColumns>
                <div className="mt-14 flex flex-col gap-8 border-t border-rule pt-10 md:flex-row md:items-center md:justify-between">
                    <Button href={SITE.donateUrl} variant="donate" size="lg" arrow>
                        クレジットカードで寄付する
                    </Button>
                    <div className="text-small">
                        <p className="font-bold text-ink">銀行振込でもご支援いただけます</p>
                        <p className="mt-1">
                            GMOあおぞらネット銀行 法人営業部（101） <span className="nc-num">1193846</span>
                            <br />
                            トクヒ）ニュークリエイターオルグ
                        </p>
                    </div>
                </div>
            </Section>

            <ContactSection />
        </>
    );
}
