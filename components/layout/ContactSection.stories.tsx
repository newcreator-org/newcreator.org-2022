import type { Meta, StoryObj } from "@storybook/nextjs";
import { ContactSection } from "./ContactSection";

const meta = {
    title: "Layout/ContactSection",
    component: ContactSection,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ContactSection>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
