import type { Meta, StoryObj } from "@storybook/nextjs";
import { Icon } from "./Icon";

const names = ["arrow-right", "external", "menu", "close", "mail", "plus", "x", "facebook", "line"] as const;

const meta = {
    title: "UI/Icon",
    component: Icon,
    tags: ["autodocs"],
    args: { name: "arrow-right", size: 24 },
    argTypes: { name: { control: "select", options: names } },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const All: Story = {
    render: () => (
        <ul className="grid grid-cols-3 gap-6 text-ink sm:grid-cols-5">
            {names.map((n) => (
                <li key={n} className="flex flex-col items-center gap-2 border-t border-rule pt-4">
                    <Icon name={n} size={24} />
                    <code className="text-caption text-sub">{n}</code>
                </li>
            ))}
        </ul>
    ),
};
