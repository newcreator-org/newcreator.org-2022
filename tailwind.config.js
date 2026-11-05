/**
 * newCreator.org Design System — Tailwind config v3
 * 値の正本は styles/tokens.css。ここは CSS 変数を Tailwind のクラス名に割り当てるだけ。
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./stories/**/*.{js,ts,jsx,tsx,mdx}",
        "./.storybook/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: "var(--nc-ink)",
                body: "var(--nc-body)",
                sub: "var(--nc-sub)",
                rule: "var(--nc-rule)",
                hair: "var(--nc-hair)",
                paper: { DEFAULT: "var(--nc-paper)", 2: "var(--nc-paper-2)" },
                brand: {
                    DEFAULT: "var(--nc-blue)",
                    2: "var(--nc-blue-2)",
                    deep: "var(--nc-blue-deep)",
                    light: "var(--nc-light)",
                    pale: "var(--nc-pale)",
                },
                marker: { DEFAULT: "var(--nc-yellow)", deep: "var(--nc-yellow-deep)" },
            },
            fontFamily: {
                sans: ["var(--nc-font-ja)"],
                num: ["var(--nc-font-num)"],
            },
            fontSize: {
                display: ["var(--nc-text-display)", { lineHeight: "1.32", letterSpacing: "0.01em" }],
                h1: ["var(--nc-text-h1)", { lineHeight: "1.4", letterSpacing: "0.01em" }],
                h2: ["var(--nc-text-h2)", { lineHeight: "1.45", letterSpacing: "0.01em" }],
                h3: ["var(--nc-text-h3)", { lineHeight: "1.55" }],
                lead: ["var(--nc-text-lead)", { lineHeight: "1.95" }],
                body: ["var(--nc-text-body)", { lineHeight: "1.9" }],
                small: ["var(--nc-text-small)", { lineHeight: "1.8" }],
                caption: ["var(--nc-text-caption)", { lineHeight: "1.6" }],
            },
            maxWidth: {
                container: "var(--nc-container)",
                narrow: "var(--nc-container-narrow)",
            },
            spacing: {
                gutter: "var(--nc-gutter)",
                section: "var(--nc-section)",
                header: "var(--nc-header-h)",
            },
            transitionTimingFunction: { nc: "var(--nc-ease)" },
            transitionDuration: { nc: "var(--nc-duration)" },
            typography: () => ({
                nc: {
                    css: {
                        "--tw-prose-body": "var(--nc-body)",
                        "--tw-prose-headings": "var(--nc-ink)",
                        "--tw-prose-links": "var(--nc-blue)",
                        "--tw-prose-bold": "var(--nc-ink)",
                        "--tw-prose-counters": "var(--nc-sub)",
                        "--tw-prose-bullets": "var(--nc-ink)",
                        "--tw-prose-hr": "var(--nc-rule)",
                        "--tw-prose-quotes": "var(--nc-ink)",
                        "--tw-prose-quote-borders": "var(--nc-blue)",
                        "--tw-prose-captions": "var(--nc-sub)",
                        "--tw-prose-th-borders": "var(--nc-ink)",
                        "--tw-prose-td-borders": "var(--nc-rule)",
                        lineHeight: "1.95",
                        h2: {
                            borderTop: "2px solid var(--nc-ink)",
                            paddingTop: "0.9em",
                            marginTop: "2.4em",
                        },
                        a: { textUnderlineOffset: "0.2em" },
                        "a:hover": { color: "var(--nc-blue-deep)" },
                        blockquote: { fontStyle: "normal", fontWeight: "500" },
                        "blockquote p:first-of-type::before": { content: "none" },
                        "blockquote p:last-of-type::after": { content: "none" },
                        img: { borderRadius: "0" },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
