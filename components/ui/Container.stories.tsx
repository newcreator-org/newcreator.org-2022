import type { Meta, StoryObj } from "@storybook/nextjs";
import { Container } from "./Container";

const meta = {
    title: "UI/Container",
    component: Container,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: { width: "default", children: null },
    argTypes: { width: { control: "inline-radio", options: ["default", "narrow"] } },
    render: (args) => (
        <Container {...args}>
            <div className="border border-dashed border-brand bg-brand-pale p-6 text-small">
                {args.width === "narrow" ? "narrow = 760px（記事・規約などの読み物）" : "default = 1200px（ページの基本幅）"}。左右の余白は
                --nc-gutter。
            </div>
        </Container>
    ),
} satisfies Meta<typeof Container>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Narrow: Story = { args: { width: "narrow" } };
