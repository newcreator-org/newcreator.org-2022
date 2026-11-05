import type { Meta, StoryObj } from "@storybook/nextjs";
import { SectionHeading } from "./SectionHeading";
import { TextLink } from "./TextLink";

const meta = {
    title: "UI/SectionHeading",
    component: SectionHeading,
    tags: ["autodocs"],
    args: {
        index: "01",
        title: "いま、日本の子どもたちに起きていること",
        lead: "数字ではなく、一人ひとりの子どもの話として考えてほしい。",
        layout: "split",
    },
    argTypes: { layout: { control: "inline-radio", options: ["split", "stack"] } },
} satisfies Meta<typeof SectionHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Split: Story = {};
export const Stack: Story = { args: { layout: "stack" } };
export const WithAction: Story = {
    args: {
        index: "04",
        title: "お知らせ",
        lead: undefined,
        layout: "stack",
        action: <TextLink href="/information/">すべて見る</TextLink>,
    },
};
export const NoIndex: Story = {
    args: { index: undefined, title: "活動を応援してください", lead: "私たちの活動は300円から応援いただけます。" },
};
