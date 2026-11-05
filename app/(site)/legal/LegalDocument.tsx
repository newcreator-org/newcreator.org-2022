import type { ReactNode } from "react";
import { Container, PageHeader, Prose, TextLink } from "../../../components/ui";

export type LegalDocumentProps = {
    title: string;
    /** 制定日・更新日 */
    meta?: ReactNode;
    lead?: ReactNode;
    children: ReactNode;
};

/** 規約・方針のページ。条文は Prose で組み、dl（A. B. …の号）は項目名と本文を横に並べる */
export function LegalDocument({ title, meta, lead, children }: LegalDocumentProps) {
    return (
        <>
            <PageHeader
                title={title}
                meta={meta}
                lead={lead}
                width="narrow"
                breadcrumb={[{ label: "法的情報", href: "/legal/" }, { label: title }]}
            />
            <Container width="narrow" className="py-section">
                <Prose
                    className={[
                        "prose-h2:text-h3 prose-dl:my-4 prose-dt:mt-0 prose-dd:mt-0 prose-dd:ps-0",
                        "[&_dl>div+div]:mt-2 [&_dl>div]:flex [&_dl>div]:gap-3 [&_dt]:min-w-[1.5rem] [&_dt]:shrink-0",
                        "prose-th:w-[38%] prose-th:align-top prose-th:font-bold prose-th:text-ink",
                    ].join(" ")}
                >
                    {children}
                </Prose>
                <div className="mt-16 border-t border-rule pt-8">
                    <TextLink href="/legal/">法的情報一覧に戻る</TextLink>
                </div>
            </Container>
        </>
    );
}
