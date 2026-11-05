import type { Meta, StoryObj } from "@storybook/nextjs";
import { TextLink } from "./TextLink";

const meta = {
    title: "UI/TextLink",
    component: TextLink,
    tags: ["autodocs"],
    args: { href: "/about/", children: "私たちについて詳しく見る" },
} satisfies Meta<typeof TextLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const External: Story = { args: { href: "https://github.com/newcreator-org", children: "GitHubで開発に参加" } };
export const NoArrow: Story = { args: { arrow: false, children: "contact@newcreator.org", href: "mailto:contact@newcreator.org" } };
