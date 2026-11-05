import { Button, Container } from "../ui";
import { SITE } from "../../libs/site";

/** ページ下の「支援する・参加する」。全ページ共通 */
export function SupportCta() {
    return (
        <section aria-labelledby="support-cta" data-tone="brand" className="bg-brand-deep text-white/85">
            <Container className="py-section">
                <h2 id="support-cta" className="sr-only">
                    活動に参加する
                </h2>
                <div className="grid gap-14 md:grid-cols-2 md:gap-0">
                    <div className="md:pr-14">
                        <p className="border-t-2 border-white pt-5 text-small font-bold text-brand-light">寄付する</p>
                        <p className="mt-4 text-h2 font-bold text-white">
                            あなたの支援が、
                            <br />
                            子どもの「作れた！」になる。
                        </p>
                        <p className="mt-5">学校に行けない子も、地方に住む子も、「私には無理」と思っている女の子も。毎月300円から支援できます。</p>
                        <div className="mt-8">
                            <Button href={SITE.donateUrl} variant="donate" size="lg" arrow>
                                寄付で支援する
                            </Button>
                        </div>
                    </div>
                    <div className="md:border-l md:border-white/25 md:pl-14">
                        <p className="border-t-2 border-white pt-5 text-small font-bold text-brand-light">参加する・連携する</p>
                        <p className="mt-4 text-h2 font-bold text-white">
                            スキルより、
                            <br />
                            気持ちを持ってきてほしい。
                        </p>
                        <p className="mt-5">講師でも、エンジニアでも、広報でも。学校・自治体・企業との連携も歓迎しています。</p>
                        <div className="mt-8">
                            <Button href="/#contact" variant="inverse-outline" size="lg" arrow>
                                話を聞いてみる
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
