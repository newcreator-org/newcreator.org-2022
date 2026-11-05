import { Button, Column, Feature, PageHeader, RuledColumns, Section, SectionHeading, TextLink } from "../../../components/ui";
import { pageMetadata } from "../../../libs/metadata";
import { SITE } from "../../../libs/site";

// 2020年のクラウドファンディング企画のページ。募集は終了しており、記録として残している
export const metadata = pageMetadata({
    title: "小学生に、おうちでプログラミングをはじめる機会を届けよう。",
    description: "小学生に、micro:bitをプレゼント。おうちでプログラミングをはじめる機会を届けよう。",
    path: "/apply/",
});

const FEATURES = ["LED", "ボタン", "無線", "モーションセンサー", "コンパス", "光・温度センサー"];

const STEPS = [
    {
        title: "下記項目を確認する",
        body: "すべてご確認ください。プレゼントにあたっての重要な事項が記載されています。",
        links: [
            { href: "/legal/rule/", label: "ルール" },
            { href: "/legal/terms/", label: "利用規約" },
        ],
    },
    {
        title: "下にあるフォームを記入",
        body: "このページの下部にフォームがございます。すべての項目に入力をよろしくお願いします。",
        links: [],
    },
    {
        title: "数日お待ち下さい。",
        body: "クラウドファンディングの状況により、審査などをいたします。審査後は結果に関わらず、メールでご案内いたします。",
        links: [],
    },
];

const SUPPORTERS: { role: string; name: string; image?: string; href?: string }[] = [
    { role: "プログラミング教室", name: "LOGYさま", image: "/img/apply/sponser/logy.png", href: "https://logy.app" },
    { role: "神山まるごと高専設立委員会", name: "池田 朋弘さま", image: "/img/apply/sponser/kamiyama-kousen.png" },
    {
        role: "子供向け教室・イベントの検索・予約サービス",
        name: "Kids Weekendさま",
        image: "/img/apply/sponser/kids-weekend.png",
        href: "https://www.kidsweekend.jp/portal",
    },
    { role: "micro:bitプログラミング研究室 運営", name: "森川 治雄さま", image: "/img/apply/sponser/morikawa.png" },
    { role: "京都産業大学 非常勤講師", name: "中村 亮太さま", image: "/img/apply/sponser/nakamura.png" },
    { role: "プログラミング学習塾", name: "(e) PROさま", image: "/img/apply/sponser/epro.png" },
    { role: "株式会社Yoki 代表取締役社長", name: "東出 風馬さま", image: "/img/apply/sponser/higashide.png" },
    { role: "子どもプログラミング教室", name: "ITeens Labさま", image: "/img/apply/sponser/iteens-lab.png" },
    { role: "ITeens Lab 代表", name: "近藤 悟さま", image: "/img/apply/sponser/kondo.png" },
    { role: "一般社団法人CRoots 理事", name: "白髭 直樹さま", image: "/img/apply/sponser/shirahige.png" },
    { role: "NPO法人ハックジャパン 代表理事", name: "小山 優輝さま", image: "/img/apply/sponser/koyama.png" },
    { role: "crossroads代表", name: "若林 健一さま", href: "https://crssrds.jp/aboutus/" },
    { role: "地図サービス", name: "株式会社Geoloniaさま", image: "/img/apply/sponser/geolonia.png", href: "https://geolonia.com/" },
];

export default function ApplyPage() {
    return (
        <>
            <PageHeader
                title={
                    <>
                        おうちでプログラミングをはじめよう。
                        <br />
                        全国の小学生に micro:bit プレゼント！
                    </>
                }
                lead={
                    <>
                        クラウドファンディングで集めた資金で、小学生のまなびをサポートします。
                        <br />
                        micro:bit でプログラミングをはじめてみませんか？
                    </>
                }
                breadcrumb={[{ label: "micro:bit プレゼント" }]}
            >
                <p className="mt-10 border-l-2 border-marker bg-paper-2 px-5 py-4 font-bold text-ink">
                    ご好評につき、募集は終了いたしました。
                    <br />
                    みなさまのご応募ありがとうございました！
                </p>
            </PageHeader>

            <Section width="narrow" aria-labelledby="intro-heading">
                <SectionHeading id="intro-heading" title="はじめに" layout="stack" />
                <div className="space-y-6 text-lead">
                    <p>
                        今、社会の情勢は大きく変わってきています。
                        <br />
                        外出自粛に加え、小学校の休校など、子どもたちの活動が大きく制限され、学びの幅はこれまでよりも格段に狭まったことでしょう。
                    </p>
                    <p>
                        こんな状況を少しでもよいものにしたい。子どもたちの学びたいことをとことん学べるような環境をつくりたい。
                        <br />
                        そんな願いからこのプロジェクトは始まりました。
                    </p>
                    <p>
                        実施しているクラウドファンディングで集めた資金で、教材を提供できるだけ提供していきます。
                        <br />
                        それで少しでもおうち時間を有意義に過ごしてもらえたら、
                        <br />
                        これ以上に幸せなことはありません。
                    </p>
                </div>
            </Section>

            <Section tone="muted" aria-labelledby="target-heading">
                <SectionHeading
                    id="target-heading"
                    title="対象"
                    lead={
                        <p>
                            日本在住の小学生とその保護者
                            <br />
                            また、ルールおよび利用規約をお守りいただける方
                        </p>
                    }
                    action={<TextLink href="/legal/rule/">ルールを確認する</TextLink>}
                />
            </Section>

            <Section aria-labelledby="contents-heading">
                <SectionHeading id="contents-heading" title="提供内容" />
                <div className="space-y-16">
                    <Feature
                        layout="wide"
                        title="micro:bit スターターキット"
                        image="/img/apply/microbit.png"
                        imageAlt="micro:bit スターターキット"
                        ratio="4/3"
                    >
                        <p>
                            micro:bit を手軽に始める際にあると便利なパーツが揃ったセットです。
                            <br />
                            はじめてのプログラミングにぴったりです。
                        </p>
                    </Feature>
                    <Feature
                        layout="wide"
                        reverse
                        title="オリジナル教材"
                        image="/img/apply/text.png"
                        imageAlt="当法人のオリジナル教材"
                        ratio="4/3"
                    >
                        <p>
                            当法人が作成した、オリジナルの教材をセットでお届けします。
                            <br />
                            スライドを印刷したものと、WEBでみれるものの２つを用意しています。
                        </p>
                    </Feature>
                </div>
                <p className="mt-12 text-small text-sub">
                    数には限りがございます。
                    <br />
                    また、これらの提供は一定の審査のもと行われます。
                </p>
            </Section>

            <Section tone="muted" aria-labelledby="microbit-heading">
                <div className="grid gap-12 md:grid-cols-12">
                    <div className="md:col-span-7">
                        <h2 id="microbit-heading" className="text-h2 font-bold">
                            micro:bit とは？
                        </h2>
                        <div className="mt-8 space-y-6">
                            <p>micro:bit(マイクロビット)は、イギリスの放送局BBCを中心に開発された子ども向けの教育用マイコンボードです。</p>
                            <p>
                                マイコンボードとは、小さなコンピュータのようなもので、プログラミングをすることで制御することができます。
                                <br />
                                現在は日本を含む多くの国々で利用されており、日本でも2021年度からのプログラミング教育必修化にともない、授業に使われる学校も増えています。
                            </p>
                            <p>micro:bitには数多くのプログラム可能な機能がついており、単体だけでも多くの機能を使用できます。</p>
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <p className="text-small font-bold text-ink">機能の一例</p>
                        <ul className="nc-list mt-5 text-ink">
                            {FEATURES.map((f) => (
                                <li key={f}>{f}</li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Button href="https://microbit.org/" variant="secondary" arrow>
                                詳しく見る
                            </Button>
                            <p className="mt-3 text-caption text-sub">※ 外部サイト (micro:bit 公式サイト) にジャンプします。</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section aria-labelledby="flow-heading">
                <SectionHeading id="flow-heading" title="ご応募の流れ" lead="利用規約、ルールをよくお読みの上ご応募ください。" />
                <RuledColumns columns={3}>
                    {STEPS.map((step, i) => (
                        <Column key={step.title} label={<span className="nc-num text-h3">{i + 1}</span>} title={step.title}>
                            <p>{step.body}</p>
                            {step.links.length > 0 && (
                                <ul className="mt-4 space-y-2">
                                    {step.links.map((l) => (
                                        <li key={l.href}>
                                            <TextLink href={l.href}>{l.label}</TextLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Column>
                    ))}
                </RuledColumns>
            </Section>

            <Section tone="muted" aria-labelledby="entry-heading">
                <SectionHeading
                    id="entry-heading"
                    title="ご応募はこちらから"
                    lead={
                        <>
                            <p>
                                利用規約、ルールをよくお読みの上ご応募ください。
                                <br />
                                <strong className="text-ink">一次締切は 6/30 23:59 までとなっております。</strong>
                            </p>
                            <p className="mt-6 font-bold text-ink">一次募集は終了いたしました。</p>
                        </>
                    }
                />
            </Section>

            <Section aria-labelledby="supporters-heading">
                <SectionHeading
                    id="supporters-heading"
                    title="支援者の方々"
                    lead={
                        <p>
                            このプロジェクトはさまざまな団体、個人にご支援いただき成り立っています。
                            <br />
                            あなたもその一員になりませんか？
                        </p>
                    }
                />
                <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {SUPPORTERS.map((s) => {
                        const body = (
                            <>
                                {s.image && (
                                    <img
                                        src={s.image}
                                        alt=""
                                        width={64}
                                        height={64}
                                        loading="lazy"
                                        className="h-16 w-16 shrink-0 bg-hair object-contain"
                                    />
                                )}
                                <span>
                                    <span className="block text-caption text-sub">{s.role}</span>
                                    <span className="mt-1 block font-bold text-ink">{s.name}</span>
                                </span>
                            </>
                        );
                        return (
                            <li key={s.name} className="border-t border-rule pt-5">
                                {s.href ? (
                                    <a
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 hover:text-brand [&:hover_span]:text-brand"
                                    >
                                        {body}
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-4">{body}</div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </Section>

            <Section tone="muted" aria-labelledby="crowdfunding-heading">
                <div className="grid gap-10 md:grid-cols-12">
                    <div className="md:col-span-6">
                        <h2 id="crowdfunding-heading" className="text-h2 font-bold">
                            お知らせ
                        </h2>
                        <p className="mt-6 text-lead">
                            クラウドファンディングは終了しました。
                            <br />
                            たくさんのご支援ありがとうございました！
                        </p>
                    </div>
                    <div className="md:col-span-6">
                        <iframe
                            title="CAMPFIRE のプロジェクト"
                            src="https://camp-fire.jp/projects/272924/widget"
                            height={365}
                            loading="lazy"
                            className="block w-full max-w-[320px] border-0"
                        >
                            読み込んでいます…
                        </iframe>
                    </div>
                </div>
            </Section>

            <Section aria-labelledby="organizer-heading">
                <SectionHeading id="organizer-heading" title="企画・運営" />
                <div className="grid gap-12 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-7">
                        <p className="text-h3 font-bold text-ink">{SITE.name}</p>
                        <p className="mt-4">
                            2019年1月に発足した次世代の学びをオープンに制作・提供する特定非営利活動法人です。
                            <br />
                            誰でも自由に使用や改変を行うことができ、無料で使える「オープンソース」という形で提供される教材の開発およびそれらを利用したイベントの開催を行っています。
                            <br />
                            現在、高校生・大学生を中心としたメンバーで活動しています。
                        </p>
                        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                            <TextLink href="/">コーポレートサイト</TextLink>
                            <TextLink href={`mailto:${SITE.email}`}>お問い合わせ</TextLink>
                        </div>
                    </div>
                    <div className="md:col-span-5">
                        <img src="/img/apply/nc.png" alt="" loading="lazy" className="w-full" />
                    </div>
                </div>
            </Section>
        </>
    );
}
