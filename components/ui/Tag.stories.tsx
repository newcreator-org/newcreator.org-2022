import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tag } from "./Tag";

const meta = { title: "UI/Tag", component: Tag, tags: ["autodocs"], args: { children: "AI教育" } } satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Several: Story = {
    render: () => (
        <div className="flex gap-2">
            <Tag>AI教育</Tag>
            <Tag>IT教育</Tag>
            <Tag>キャリア教育</Tag>
        </div>
    ),
};
