import type { ReactNode } from "react";
import { Button, Section } from "../../../../components/ui";
import { SITE } from "../../../../libs/site";

export type EducatorContactCtaProps = {
    title: ReactNode;
    lead: ReactNode;
    /** 2つ目のボタン（資料ダウンロードなど） */
    secondary?: { href: string; label: string };
    id?: string;
    tone?: "default" | "muted" | "pale";
};

/** 先生・学校向けページの末尾に置く相談の案内。窓口はメール */
export function EducatorContactCta({ title, lead, secondary, id, tone = "pale" }: EducatorContactCtaProps) {
    return (
        <Section id={id} tone={tone} spacing="compact">
            <div className="border-t-2 border-ink pt-6 md:grid md:grid-cols-12 md:gap-10">
                <h2 className="text-h2 font-bold md:col-span-5">{title}</h2>
                <div className="mt-4 md:col-span-7 md:mt-1">
                    <p className="text-lead">{lead}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button href={`mailto:${SITE.email}`} size="lg" arrow>
                            メールで相談する
                        </Button>
                        {secondary && (
                            <Button href={secondary.href} variant="secondary" size="lg">
                                {secondary.label}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
}
