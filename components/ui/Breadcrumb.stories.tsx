import type { Meta, StoryObj } from "@storybook/nextjs";
import { Breadcrumb } from "./Breadcrumb";

const meta = {
    title: "UI/Breadcrumb",
    component: Breadcrumb,
    tags: ["autodocs"],
    args: { items: [{ label: "私たちについて", href: "/about/" }, { label: "法人概要" }] },
} satisfies Meta<typeof Breadcrumb>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
export const OneLevel: StoryObj<typeof meta> = { args: { items: [{ label: "お知らせ" }] } };
