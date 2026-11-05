import type { Meta, StoryObj } from "@storybook/nextjs";
import { SiteHeader } from "./SiteHeader";

const meta = {
    title: "Layout/SiteHeader",
    component: SiteHeader,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SiteHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
/** 今いるページのナビに下線が付く */
export const CurrentPage: Story = { parameters: { nextjs: { navigation: { pathname: "/about/company/" } } } };
/** 1280px 未満はメニューボタンに切り替わる */
export const Mobile: Story = { globals: { viewport: { value: "sp" } } };
