import type { Meta, StoryObj } from "@storybook/nextjs";
import { Faq } from "./Faq";

const meta = {
    title: "UI/Faq",
    component: Faq,
    tags: ["autodocs"],
    args: {
        items: [
            {
                question: "生成AIを授業で使うことに不安があります。どこから始めればよいですか。",
                answer: (
                    <p>
                        まずは先生ご自身が生成AIを体験することをお勧めします。授業準備や校務での活用から始めることで、生成AIの特性や限界を理解できます。
                    </p>
                ),
            },
            {
                question: "費用はどのくらいかかりますか。",
                answer: (
                    <p>
                        学校の規模やご要望に応じて柔軟に対応いたします。出張研修は交通費込みで10万円から、プライベートGPTは生徒数単位の課金で月額3万円からご利用いただけます。
                    </p>
                ),
            },
            {
                question: "導入までにどのくらいの期間が必要ですか。",
                answer: <p>プライベートGPTの導入は最短1週間で可能です。出張研修は日程調整を含めて1ヶ月程度が目安です。</p>,
            },
        ],
    },
    decorators: [(Story) => <div className="max-w-narrow">{Story()}</div>],
} satisfies Meta<typeof Faq>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
