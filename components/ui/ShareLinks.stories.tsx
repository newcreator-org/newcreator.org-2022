import type { Meta, StoryObj } from "@storybook/nextjs";
import { ShareLinks } from "./ShareLinks";

const meta = {
    title: "UI/ShareLinks",
    component: ShareLinks,
    tags: ["autodocs"],
    args: { url: "https://newcreator.org/media/ai-education-for-kids/", title: "子どものAI教育はいつから始めるべき？年齢別ガイド" },
} satisfies Meta<typeof ShareLinks>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
