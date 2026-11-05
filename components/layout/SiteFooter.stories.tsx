import type { Meta, StoryObj } from "@storybook/nextjs";
import { SiteFooter } from "./SiteFooter";

const meta = { title: "Layout/SiteFooter", component: SiteFooter, tags: ["autodocs"], parameters: { layout: "fullscreen" } } satisfies Meta<
    typeof SiteFooter
>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
