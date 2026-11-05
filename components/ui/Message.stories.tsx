import type { Meta, StoryObj } from "@storybook/nextjs";
import { Message } from "./Message";

const meta = {
    title: "UI/Message",
    component: Message,
    tags: ["autodocs"],
    args: {
        name: "改野 由尚",
        role: "理事長",
        photo: "/img/member/yoshi.jpg",
        children: (
            <>
                <p>
                    不登校の子どもも、地方に住む子どもも、「ITは自分には関係ない」と思っている女の子も——どんな子どもにも、学ぶ機会は平等にあるべきだと思っています。
                </p>
                <p>AI時代だからこそ、「誰でも、どこでも、自分らしく」学べる社会を、一緒につくりませんか。</p>
            </>
        ),
    },
    decorators: [(Story) => <div className="max-w-narrow">{Story()}</div>],
} satisfies Meta<typeof Message>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const NoPhoto: Story = { args: { photo: undefined } };
