import type { ReactNode } from "react";
import { cn } from "./cn";

export type FeatureProps = {
    title: ReactNode;
    children: ReactNode;
    /** 見出しの上の小さな補足（「10都道府県22校で実施」など）。日本語で書く */
    meta?: ReactNode;
    image?: string;
    imageAlt?: string;
    /** 画像の比率 */
    ratio?: "3/2" | "4/3" | "16/9";
    /** wide = PC で画像と文を左右に並べる */
    layout?: "stack" | "wide";
    /** wide のとき画像を右に置く */
    reverse?: boolean;
    action?: ReactNode;
    className?: string;
};

const ratioClass = { "3/2": "aspect-[3/2]", "4/3": "aspect-[4/3]", "16/9": "aspect-video" };

/** 事業・サービスの紹介。画像＋見出し＋本文＋リンク */
export function Feature({
    title,
    children,
    meta,
    image,
    imageAlt = "",
    ratio = "3/2",
    layout = "stack",
    reverse,
    action,
    className,
}: FeatureProps) {
    const wide = layout === "wide";
    return (
        <article className={cn(wide && "md:grid md:grid-cols-12 md:items-center md:gap-12", className)}>
            {image && (
                <div
                    className={cn(
                        "overflow-hidden bg-hair",
                        ratioClass[ratio],
                        wide ? cn("md:col-span-7", reverse && "md:order-2") : "mb-6",
                    )}
                >
                    <img src={image} alt={imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
            )}
            <div className={cn(wide && "mt-6 md:col-span-5 md:mt-0", "border-t border-ink pt-5")}>
                {meta && <p className="mb-2 text-small font-bold text-brand">{meta}</p>}
                <h3 className={cn("font-bold", wide ? "text-h2" : "text-h3")}>{title}</h3>
                <div className="mt-3 text-body text-body">{children}</div>
                {action && <div className="mt-5">{action}</div>}
            </div>
        </article>
    );
}
