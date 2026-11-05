import type { Meta, StoryObj } from "@storybook/nextjs";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { TextLink } from "./TextLink";

const meta = {
    title: "UI/Section",
    component: Section,
    tags: ["autodocs"],
    parameters: { layout: "fullscreen" },
    args: { tone: "default", spacing: "default", children: null },
    argTypes: {
        tone: { control: "inline-radio", options: ["default", "muted", "pale", "ink", "brand"] },
        spacing: { control: "inline-radio", options: ["default", "compact", "none"] },
    },
    render: (args) => (
        <Section {...args}>
            <SectionHeading
                index="02"
                title="事業"
                lead="教育機関・自治体向けに、生成AIの研修から導入支援、プログラミング教育まで一貫して提供しています。"
                action={<TextLink href="/for-educators/">教育機関向けの支援を見る</TextLink>}
            />
        </Section>
    ),
} satisfies Meta<typeof Section>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Muted: Story = { args: { tone: "muted" } };
export const Pale: Story = { args: { tone: "pale" } };
export const Ink: Story = { args: { tone: "ink" } };
export const Brand: Story = { args: { tone: "brand" } };
