import type { Meta, StoryObj } from "@storybook/nextjs";
import { Stat, StatGrid } from "./Stat";

const meta = {
    title: "UI/Stat",
    component: Stat,
    tags: ["autodocs"],
    args: { value: "1,000", unit: "人以上", label: "累計参加生徒数" },
} satisfies Meta<typeof Stat>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Grid: Story = {
    render: () => (
        <StatGrid>
            <Stat value="1,000" unit="人以上" label="累計参加生徒数" />
            <Stat value="50" unit="回以上" label="ワークショップ実施回数" />
            <Stat value="10" unit="都道府県" label="活動地域" />
            <Stat value="2016" unit="年から" label="活動開始" />
        </StatGrid>
    ),
};
