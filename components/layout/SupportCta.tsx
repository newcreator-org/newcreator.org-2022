import { Button, Container } from "../ui";
import { SITE } from "../../libs/site";

const DONATIONS = [
    { amount: "3,000", body: "1人の子どもが1ヶ月間プログラミング教室に参加できます" },
    { amount: "10,000", body: "地方での出張授業1回分の交通費になります" },
    { amount: "30,000", body: "新しい教材の開発費に充てられます" },
];

/** ページ下の「支援する・参加する」。全ページ共通 */
export function SupportCta() {
    return (
        <section id="donation" aria-labelledby="support-cta" data-tone="brand" className="bg-brand-deep text-white/85">
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
                        <p className="mt-5">
                            学校に行けない子も、地方に住む子も、「私には無理」と思っている女の子も。毎月300円から支援できます。
                        </p>
                        <dl className="mt-8 grid gap-3 border-t border-white/25 pt-6 text-small">
                            {DONATIONS.map((d) => (
                                <div key={d.amount} className="flex items-baseline gap-4">
                                    <dt className="nc-num w-[5.5rem] shrink-0 text-h3 font-semibold text-white">¥{d.amount}</dt>
                                    <dd className="m-0">{d.body}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-8">
                            <Button href={SITE.donateUrl} variant="donate" size="lg" arrow>
                                クレジットカードで寄付する
                            </Button>
                        </div>
                        <p className="mt-5 text-caption text-white/70">
                            銀行振込でもご支援いただけます：GMOあおぞらネット銀行 法人営業部（101） <span className="nc-num">1193846</span>{" "}
                            トクヒ）ニュークリエイターオルグ
                        </p>
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
