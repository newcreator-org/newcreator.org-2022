import type { StorybookConfig } from "@storybook/nextjs";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../components/**/*.stories.@(ts|tsx)"],
    addons: [
        // MDX の表（GFM）を使うため remark-gfm を通す
        { name: "@storybook/addon-docs", options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } } },
        "@storybook/addon-a11y",
    ],
    framework: { name: "@storybook/nextjs", options: {} },
    staticDirs: ["../public"],
    docs: { defaultName: "使い方" },
};

export default config;
