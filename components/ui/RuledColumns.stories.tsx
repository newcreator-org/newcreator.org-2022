import type { Meta, StoryObj } from "@storybook/nextjs";
import { Column, RuledColumns } from "./RuledColumns";

const meta = {
    title: "UI/RuledColumns",
    component: RuledColumns,
    tags: ["autodocs"],
    args: { columns: 3, weight: "none", children: null },
    argTypes: {
        columns: { control: "inline-radio", options: [2, 3, 4] },
        weight: { control: "inline-radio", options: ["none", "light"] },
    },
    render: (args) => (
        <RuledColumns {...args}>
            <Column
                label="不登校"
                title="35万人を超える子どもが、居場所を失っている"
                note="文部科学省「令和6年度 児童生徒の問題行動・不登校等調査」より"
            >
                <p>学校に行けなくなった子の中には、「学びたくない」のではなく、「学びたいのに場所がない」子がたくさんいます。</p>
            </Column>
            <Column label="ジェンダーギャップ" title="「理系は男の子のもの」と思っている女の子がいる">
                <p>小学生のうちに「自分にもできる」と感じる体験を積み重ねることが、その先入観を少しずつ変えていくと信じています。</p>
            </Column>
            <Column label="地域格差" title="地方に生まれただけで、選択肢が少なくなる">
                <p>近くに教室がない、身近にロールモデルがいない——そんな子どもたちにこそ届けに行きたい。</p>
            </Column>
        </RuledColumns>
    ),
} satisfies Meta<typeof RuledColumns>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Strong: Story = {};
export const Light: Story = { args: { weight: "light" } };
export const OnDark: Story = {
    decorators: [
        (Story) => (
            <div data-tone="ink" className="bg-ink p-8 text-white/80 [&_h3]:text-white">
                {Story()}
            </div>
        ),
    ],
};
