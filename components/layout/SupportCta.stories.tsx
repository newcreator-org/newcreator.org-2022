import type { Meta, StoryObj } from "@storybook/nextjs";
import { SupportCta } from "./SupportCta";

const meta = { title: "Layout/SupportCta", component: SupportCta, tags: ["autodocs"], parameters: { layout: "fullscreen" } } satisfies Meta<
    typeof SupportCta
>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
