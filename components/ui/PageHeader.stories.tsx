import type { Meta, StoryObj } from "@storybook/nextjs";
import { PageHeader } from "./PageHeader";
import { Tag } from "./Tag";

const meta = {
    title: "UI/PageHeader",
    component: PageHeader,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: {
        title: "私たちについて",
        lead: "「作れた！」という体験は、すべての子どもに届くべきだ。地域格差・不登校・ジェンダーギャップ——3つの教育格差をなくすために動いています。",
        breadcrumb: [{ label: "私たちについて" }],
    },
} satisfies Meta<typeof PageHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Article: Story = {
    args: {
        width: "narrow",
        title: "子どものAI教育はいつから始めるべき？年齢別ガイド",
        lead: undefined,
        breadcrumb: [{ label: "メディア", href: "/media/" }, { label: "子どものAI教育はいつから始めるべき？" }],
        meta: (
            <>
                <Tag>AI教育</Tag>
                <time className="nc-num">2025.12.01</time>
            </>
        ),
    },
};
