import type { Preview } from "@storybook/nextjs";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "../styles/globals.css";

const notoSans = Noto_Sans_JP({ weight: ["400", "500", "700"], subsets: ["latin"], preload: false, variable: "--font-noto-sans-jp" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const preview: Preview = {
    parameters: {
        layout: "padded",
        controls: { expanded: true },
        nextjs: { appDirectory: true, navigation: { pathname: "/" } },
        a11y: { test: "error" },
        viewport: {
            options: {
                sp: { name: "SP 390", styles: { width: "390px", height: "844px" } },
                tablet: { name: "Tablet 834", styles: { width: "834px", height: "1112px" } },
                pc: { name: "PC 1440", styles: { width: "1440px", height: "900px" } },
            },
        },
        options: {
            storySort: { order: ["はじめに", "Foundations", "UI", "Layout"] },
        },
    },
    decorators: [
        (Story) => (
            <div className={`${notoSans.variable} ${inter.variable}`} style={{ fontFamily: "var(--nc-font-ja)" }}>
                <Story />
            </div>
        ),
    ],
};

export default preview;
