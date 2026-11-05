import type { ReactNode } from "react";
import { cn } from "./cn";

export type StatProps = {
    value: string;
    unit?: string;
    label: ReactNode;
    className?: string;
};

/** 実績の数字。数字は Inter、単位は小さく */
export function Stat({ value, unit, label, className }: StatProps) {
    return (
        <div className={cn("border-t border-rule pt-4", className)}>
            <p className="nc-num text-[clamp(2rem,1.5rem+1.8vw,2.875rem)] font-semibold leading-none tracking-tight text-ink">
                {value}
                {unit && <span className="ml-1 font-sans text-[0.38em] font-bold tracking-normal text-body">{unit}</span>}
            </p>
            <p className="mt-3 text-small text-sub">{label}</p>
        </div>
    );
}

export function StatGrid({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn("grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-10", className)}>{children}</div>;
}
