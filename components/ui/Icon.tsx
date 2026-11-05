import type { ReactElement, SVGProps } from "react";

type IconName = "download" | "arrow-right" | "external" | "menu" | "close" | "x" | "facebook" | "line" | "mail" | "plus";

const paths: Record<IconName, ReactElement> = {
    "arrow-right": <path d="M4 12h15m-6-6 6 6-6 6" />,
    download: <path d="M12 4v11m-5-5 5 5 5-5M5 20h14" />,
    external: <path d="M14 4h6v6m0-6-9 9M10 6H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" />,
    menu: <path d="M3 7h18M3 12h18M3 17h18" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    mail: <path d="M3 6h18v12H3zM3 6l9 7 9-7" />,
    plus: <path d="M12 5v14M5 12h14" />,
    x: (
        <path
            fill="currentColor"
            stroke="none"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
    ),
    facebook: (
        <path
            fill="currentColor"
            stroke="none"
            d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"
        />
    ),
    line: (
        <path
            fill="currentColor"
            stroke="none"
            d="M12 3C6.48 3 2 6.63 2 11.1c0 4 3.55 7.36 8.35 8 .33.07.77.22.88.5.1.25.07.65.03.9l-.14.86c-.04.25-.2.99.87.54 1.07-.45 5.76-3.39 7.86-5.8C21.3 14.5 22 12.88 22 11.1 22 6.63 17.52 3 12 3M8.1 13.5H6.12a.53.53 0 0 1-.53-.53V9.03a.53.53 0 1 1 1.06 0v3.42H8.1a.53.53 0 1 1 0 1.05m2.05-.53a.53.53 0 1 1-1.06 0V9.03a.53.53 0 1 1 1.06 0zm4.76 0a.53.53 0 0 1-.95.32l-2.03-2.76v2.44a.53.53 0 1 1-1.06 0V9.03a.53.53 0 0 1 .95-.32l2.03 2.76V9.03a.53.53 0 1 1 1.06 0zm3.2-2.5a.53.53 0 1 1 0 1.06h-1.45v.92h1.45a.53.53 0 1 1 0 1.05h-1.98a.53.53 0 0 1-.53-.53V9.03c0-.29.24-.53.53-.53h1.98a.53.53 0 1 1 0 1.06h-1.45v.92z"
        />
    ),
};

export type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

/** 線のアイコン（1.6px）。装飾なので aria-hidden */
export function Icon({ name, size = 18, ...rest }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            {...rest}
        >
            {paths[name]}
        </svg>
    );
}
