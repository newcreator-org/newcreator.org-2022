import type { Meta, StoryObj } from "@storybook/nextjs";
import { LogoMarquee } from "./LogoMarquee";

const meta = {
    title: "UI/LogoMarquee",
    component: LogoMarquee,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: {
        src: "/img/partner.png",
        width: 15137,
        height: 401,
        displayHeight: 52,
        label: "これまでに協力いただいた企業・財団・学校のロゴ",
    },
} satisfies Meta<typeof LogoMarquee>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
