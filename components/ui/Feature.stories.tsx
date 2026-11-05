import type { Meta, StoryObj } from "@storybook/nextjs";
import { Feature } from "./Feature";
import { TextLink } from "./TextLink";

const meta = {
    title: "UI/Feature",
    component: Feature,
    tags: ["autodocs"],
    args: {
        title: "プライベートGPT",
        image: "/img/works/gpt.jpg",
        children: <p>教育機関向けに、安全な生成AI利用環境を提供。生徒数単位の課金、契約期間の縛りなし、請求書ベースでの契約が可能です。</p>,
    },
    decorators: [(Story) => <div className="max-w-container">{Story()}</div>],
} satisfies Meta<typeof Feature>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Stack: Story = { decorators: [(Story) => <div className="max-w-sm">{Story()}</div>] };
export const Wide: Story = {
    args: {
        layout: "wide",
        meta: "10都道府県 22校で実施",
        title: "学校向け出張授業・登壇",
        image: "/img/works/otsumajyoshi.jpg",
        children: <p>全国の学校・教育機関へ講師を派遣し、生徒向け・教員向けの生成AI活用研修を実施します。</p>,
        action: <TextLink href="/#contact">研修を依頼する</TextLink>,
    },
};
export const WideReverse: Story = { args: { ...Wide.args, reverse: true } };
export const NoImage: Story = { args: { image: undefined }, decorators: [(Story) => <div className="max-w-sm">{Story()}</div>] };
