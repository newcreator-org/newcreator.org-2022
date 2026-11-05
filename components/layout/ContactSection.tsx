import { Button, Section, SectionHeading } from "../ui";
import { SITE } from "../../libs/site";

/** お問い合わせ。窓口はメール 1 本（フォームは置いていない） */
export function ContactSection() {
    return (
        <Section id="contact" aria-labelledby="contact-heading">
            <SectionHeading
                id="contact-heading"
                title="まずは、話しかけてください。"
                lead={
                    <>
                        <p>
                            「うちの学校でも使えますか？」「寄付したいのですが」「ボランティアに興味があります」——どんな入口でも構いません。
                        </p>
                        <p className="mt-6 text-small text-sub">通常2〜3営業日以内にご返信します。</p>
                    </>
                }
                action={
                    <Button href={`mailto:${SITE.email}`} size="lg" arrow>
                        {SITE.email} にメールする
                    </Button>
                }
            />
        </Section>
    );
}
