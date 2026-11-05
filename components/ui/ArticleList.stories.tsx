import type { Meta, StoryObj } from "@storybook/nextjs";
import { ArticleCard, ArticleList, CardGrid } from "./ArticleList";

const items = [
    {
        href: "/information/cross-curricular-generator/",
        title: "日本初、AIが1つのテーマから7領域の問題を同時生成する「領域横断型問題セットジェネレータ」をリリース",
        date: "2026-03-27",
    },
    {
        href: "/information/2kr03wyxi/",
        title: "ニュークリエイター・オルグ、生成AI×キャリア教育プログラム「社会問題をAIで解決」を名古屋市立名古屋商業高等学校で実施",
        date: "2024-02-12",
    },
    {
        href: "/information/ybq4choj6/",
        title: "ニュークリエイター・オルグ、情報セキュリティに対応した教育機関向けプライベートGPTを聖パウロ学園高等学校に提供開始",
        date: "2024-01-28",
    },
];

const meta = {
    title: "UI/ArticleList",
    component: ArticleList,
    tags: ["autodocs"],
    args: { items },
} satisfies Meta<typeof ArticleList>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithCategory: Story = {
    args: { items: items.map((i, n) => ({ ...i, category: ["お知らせ", "キャリア教育", "AI教育"][n] })) },
};

/** 記事・事例のカード。画像が無いときは枠ごと出さない */
export const Cards: StoryObj<typeof ArticleCard> = {
    render: () => (
        <CardGrid columns={3}>
            <ArticleCard
                href="/media/ai-education-for-kids/"
                title="子どものAI教育はいつから始めるべき？年齢別ガイド"
                date="2025-12-01"
                category="AI教育"
                description="生成AIが当たり前になった時代、子どもはいつからAIに触れるべきか。年齢ごとの目安をまとめました。"
                image="/img/works/workshop.jpg"
            />
            <ArticleCard
                href="/media/chatgpt-in-classroom/"
                title="教室でのChatGPT活用法 ― 教員が知っておきたい実践ポイント"
                date="2025-11-15"
                category="AI教育"
                description="授業での使い方と、気をつけたい点。"
                image="/img/works/otsumajyoshi.jpg"
            />
            <ArticleCard
                href="/media/career-education-future/"
                title="AI時代に子どもが身につけるべきスキルとは？"
                date="2025-09-15"
                category="キャリア教育"
                description="これからの社会で必要になる力について考えます。"
            />
        </CardGrid>
    ),
};
