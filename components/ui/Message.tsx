import type { ReactNode } from "react";
import { cn } from "./cn";

export type MessageProps = {
    children: ReactNode;
    name: string;
    role: string;
    photo?: string;
    className?: string;
};

/** 代表者などの言葉。本文＋署名 */
export function Message({ children, name, role, photo, className }: MessageProps) {
    return (
        <figure className={cn("m-0", className)}>
            <blockquote className="m-0 space-y-5 text-lead text-ink">{children}</blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-rule pt-6">
                {photo && (
                    <img
                        src={photo}
                        alt=""
                        width={64}
                        height={64}
                        loading="lazy"
                        className="h-16 w-16 rounded-full object-cover grayscale-[15%]"
                    />
                )}
                <span>
                    <span className="block text-small text-sub">{role}</span>
                    <span className="block text-h3 font-bold tracking-[0.12em] text-ink">{name}</span>
                </span>
            </figcaption>
        </figure>
    );
}
