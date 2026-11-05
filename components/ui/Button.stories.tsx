import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./Button";

const meta = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    args: { children: "私たちが向き合う現実", variant: "primary", size: "md" },
    argTypes: {
        variant: { control: "inline-radio", options: ["primary", "secondary", "donate", "inverse", "inverse-outline"] },
        size: { control: "inline-radio", options: ["md", "lg"] },
    },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { href: "#social-issues", arrow: true } };
export const Secondary: Story = { args: { variant: "secondary", children: "お問い合わせ", href: "/#contact" } };
export const Donate: Story = {
    args: { variant: "donate", children: "寄付で支援する", href: "https://syncable.biz/associate/newcreator-org", arrow: true, size: "lg" },
};
export const Large: Story = { args: { size: "lg", arrow: true, href: "/for-educators/" } };
export const AsButton: Story = { args: { children: "送信する" } };
export const FullWidth: Story = {
    args: { fullWidth: true, size: "lg", children: "教育機関向けの支援を見る", href: "/for-educators/", arrow: true },
};

/** 濃色面（ブランドの紺）の上で使う 2 種 */
export const OnDark: Story = {
    render: () => (
        <div data-tone="brand" className="flex flex-wrap gap-3 bg-brand-deep p-8">
            <Button href={"https://syncable.biz/associate/newcreator-org"} variant="donate" arrow>
                寄付で支援する
            </Button>
            <Button href="/#contact" variant="inverse">
                話を聞いてみる
            </Button>
            <Button href="/#contact" variant="inverse-outline" arrow>
                話を聞いてみる
            </Button>
        </div>
    ),
};

/** PDF などのダウンロード。`download` を付けると <a download> になり、アイコンが下向きの矢印になる */
export const Download: Story = {
    args: { download: true, size: "lg", children: "ダウンロード", href: "/downloads/for-educators/ai-checklist.pdf" },
};
