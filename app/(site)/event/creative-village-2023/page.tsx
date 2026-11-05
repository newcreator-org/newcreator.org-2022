import { Button, Container, DefinitionList, Section, SectionHeading, TextLink } from "../../../../components/ui";
import { pageMetadata } from "../../../../libs/metadata";
import { SITE } from "../../../../libs/site";

export const metadata = pageMetadata({
    title: "Creative Village 2023",
    description: "身近な課題をテクノロジーを使って解決するアイデアを考えよう",
    path: "/event/creative-village-2023/",
    ogImage: "/img/event/at-google/CV201906-90.jpg",
});

const TIMETABLE = [
    { time: "12:30", items: ["受付開始"] },
    {
        time: "13:00",
        items: [
            "[学び] オリエンテーション・アイスブレイク",
            "・クリエイティブな考え方のヒント",
            "・身近な最新テクノロジーの進化について知ろう",
        ],
    },
    {
        time: "13:45",
        items: [
            "[ワークショップ] デジタルで身近な課題を解決する方法を考えよう",
            "・IT企業で働くメンターと一緒に身近な課題をITを使って解決するアイディアを考えよう",
        ],
    },
    { time: "16:00", items: ["[発表] アイディアを共有しよう", "・撮影した1分間の縦型動画を共有/紹介"] },
    { time: "16:40頃", items: ["解散"] },
];

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfbIg1GD8oSiQ2CUexsCOFHrX5zEkc5euXEIdlk5CnfxextKQ/viewform?usp=sf_link";

export default function CreativeVillage2023Page() {
    return (
        <>
            {/* 写真の上に文字を載せる。写真は暗く加工済みの版を使う */}
            <section aria-labelledby="event-heading" data-tone="ink" className="relative overflow-hidden bg-ink text-white/85">
                <img
                    src="/img/event/at-google/CV201906-90-black.jpg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-70"
                />
                <Container className="relative py-section">
                    <h1 id="event-heading" className="max-w-[22em] text-h1 font-bold text-white">
                        【中高校生向け/参加費無料】
                        <br />
                        クリエイティブ Village 2023
                    </h1>
                    <p className="mt-6 text-lead text-white">身近な課題をテクノロジーを使って解決するアイデアを考えよう</p>
                    <p className="mt-8 border-t border-white/40 pt-5 text-small">
                        日時：2023年7月30日（東京）
                        <br />
                        会場：Google 渋谷オフィス
                    </p>
                </Container>
            </section>

            <div className="border-b border-rule bg-paper-2">
                <Container className="py-4">
                    <p className="text-small font-bold text-ink">このイベントは2023年7月30日に開催しました。</p>
                </Container>
            </div>

            <Section aria-labelledby="about-heading">
                <SectionHeading
                    id="about-heading"
                    title="身近な課題を解決するアイデアを考えよう！"
                    lead={
                        <>
                            <p>
                                Creative
                                Villageは1日という短いプログラムながら、身近な課題を発掘し、解決策を模索、メンターからのフィードバックを受けながら最終的に身近な課題を解決するアイディアを動画に編集し発表を行います。
                                メンターにはIT業界で働く社会人がチームの一員として参加し、一緒身近な課題をもとに数年後には未来を変えることが出来るテクノロジーを生かしたアイディアを作り上げていきます。
                                <br />
                                ワークショップの最後では、縦型動画（Shorts）の1分動画を撮影し、全参加者とメンターによる投票で優勝チームを決定します。
                            </p>
                            <p className="mt-6">
                                本ワークショップは、中学1年生〜高校3年生（高専など相当年齢であれば学校種別は問いません）であれば、どなたでもご参加いただけます。参加費無料です。
                            </p>
                        </>
                    }
                />
            </Section>

            <Section tone="muted" aria-labelledby="timetable-heading">
                <SectionHeading id="timetable-heading" title="タイムテーブル" />
                <div className="grid gap-12 lg:grid-cols-12">
                    <ol className="lg:col-span-7">
                        {TIMETABLE.map((row) => (
                            <li key={row.time} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-rule py-5">
                                <span className="nc-num font-bold text-brand">{row.time}</span>
                                <span>
                                    {row.items.map((item, i) => (
                                        <span key={item} className={i === 0 ? "block font-bold text-ink" : "mt-1 block text-small"}>
                                            {item}
                                        </span>
                                    ))}
                                </span>
                            </li>
                        ))}
                    </ol>
                    <div className="aspect-[4/3] overflow-hidden bg-hair lg:col-span-5">
                        <img
                            src="/img/event/at-google/CV201906-90.jpg"
                            alt="ワークショップの様子"
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </Section>

            <Section aria-labelledby="entry-heading">
                <SectionHeading id="entry-heading" title="参加申込" />
                <DefinitionList
                    items={[
                        { term: "開催日時", detail: "2023年7月30日 12:30〜17:00（東京）" },
                        { term: "対象", detail: "高校１年生から高校３年生" },
                        {
                            term: "会場",
                            detail: (
                                <>
                                    Google 渋谷オフィス
                                    <br />
                                    <span className="text-small text-sub">
                                        ※会場住所ならび集合場所は、セキュリティーの都合上、参加が決定した方にメールでご案内させていただきます。
                                    </span>
                                </>
                            ),
                        },
                        {
                            term: "持ち物",
                            detail: (
                                <ul className="nc-list">
                                    <li>PC / タブレット（あれば）</li>
                                    <li>スマホ / 携帯電話</li>
                                    <li>筆記用具</li>
                                    <li>生徒手帳 / 学生証</li>
                                    <li>参加同意書</li>
                                </ul>
                            ),
                        },
                        { term: "参加費", detail: "無償" },
                        { term: "参加定員", detail: "15名〜20名程度（先着順）" },
                    ]}
                />
                <div className="mt-10">
                    <Button href={FORM_URL} size="lg" arrow>
                        参加申込する
                    </Button>
                </div>
            </Section>

            <Section tone="muted" aria-labelledby="organizer-heading">
                <SectionHeading id="organizer-heading" title="企画・運営" />
                <DefinitionList
                    items={[
                        { term: "主催", detail: SITE.name },
                        { term: "共催", detail: "NPO法人クリッパー" },
                        {
                            term: "お問い合わせ",
                            detail: (
                                <TextLink href={`mailto:${SITE.email}`} arrow={false}>
                                    {SITE.email}
                                </TextLink>
                            ),
                        },
                    ]}
                />
            </Section>
        </>
    );
}
