import type { Meta, StoryObj } from "@storybook/nextjs";
import { Reveal } from "./Reveal";

const meta = {
    title: "UI/Reveal",
    component: Reveal,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "画面に入ったら静かに現れる。最初から画面内にあるもの・JS が動かない環境・「視差効果を減らす」設定では最初から見える。下にスクロールすると動きを確認できる。",
            },
        },
    },
    args: { children: null },
    render: () => (
        <div>
            <div className="flex h-[120vh] items-start text-small text-sub">↓ スクロール</div>
            <Reveal>
                <p className="border-t-2 border-ink pt-5 text-h2 font-bold text-ink">学びは、どこにいても届くべきだ。</p>
            </Reveal>
        </div>
    ),
} satisfies Meta<typeof Reveal>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
