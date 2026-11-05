"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "./cn";

export type RevealProps = { children: ReactNode; className?: string; delay?: number };

/**
 * 画面に入ったら静かに現れる。JS が動かない・動きを減らす設定のときは最初から見える。
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<"idle" | "hidden" | "visible">("idle");

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        // すでに画面内にあるものは隠さない（ちらつき防止）
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        setState("hidden");
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState("visible");
                    io.disconnect();
                }
            },
            { rootMargin: "0px 0px -10% 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={cn(state !== "idle" && "nc-reveal", state === "visible" && "is-visible", className)}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
