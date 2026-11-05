import { LegalDocument } from "../LegalDocument";
import { pageMetadata } from "../../../../libs/metadata";

export const metadata = pageMetadata({ title: "提供にあたってのルール", path: "/legal/rule/" });

export default function RulePage() {
    return (
        <LegalDocument title="提供にあたってのルール" meta={<span>2020年6月9日 制定</span>} lead="micro:bit プレゼント企画">
            <p>
                本ルールは、特定非営利活動法人ニュークリエイター・オルグ（以下「当法人」といいます）が実施する micro:bit
                プレゼント企画における提供条件を定めるものです。
            </p>

            <section>
                <h2>第1条（定義）</h2>
                <p>本ルールにおいて使用する用語の定義は以下の通りとします。</p>
                <dl>
                    <div>
                        <dt>A.</dt>
                        <dd>「本企画」とは、当法人が実施する micro:bit プレゼント企画をいいます。</dd>
                    </div>
                    <div>
                        <dt>B.</dt>
                        <dd>「提供品」とは、本企画において当法人が提供する micro:bit 本体およびその付属品をいいます。</dd>
                    </div>
                    <div>
                        <dt>C.</dt>
                        <dd>「受領者」とは、本企画に応募し、提供品を受け取った方をいいます。</dd>
                    </div>
                </dl>
            </section>

            <section>
                <h2>第2条（提供条件）</h2>
                <p>本企画への参加および提供品の受領にあたっては、以下の条件に同意いただく必要があります。</p>
                <dl>
                    <div>
                        <dt>A.</dt>
                        <dd>提供品は、当法人が提供するプログラムへの参加を目的として使用すること</dd>
                    </div>
                    <div>
                        <dt>B.</dt>
                        <dd>提供品を転売・譲渡しないこと</dd>
                    </div>
                    <div>
                        <dt>C.</dt>
                        <dd>提供品を適切に管理し、破損・紛失した場合は速やかに当法人へ連絡すること</dd>
                    </div>
                    <div>
                        <dt>D.</dt>
                        <dd>当法人が定める利用規約およびプライバシーポリシーに同意すること</dd>
                    </div>
                </dl>
            </section>

            <section>
                <h2>第3条（所有権）</h2>
                <p>
                    提供品の所有権は、当法人が別途定める条件を満たした場合に受領者に移転します。条件を満たさない場合、当法人は提供品の返還を求めることができます。
                </p>
            </section>

            <section>
                <h2>第4条（免責）</h2>
                <p>
                    当法人は、提供品の使用に起因して生じた損害について、当法人の故意または重大な過失による場合を除き、一切の責任を負いません。
                </p>
            </section>

            <section>
                <h2>第5条（ルールの変更）</h2>
                <p>
                    当法人は、必要に応じて本ルールを変更することができます。変更後のルールは、当法人のウェブサイトに掲載した時点で効力を生じるものとします。
                </p>
            </section>

            <section>
                <h2>第6条（お問い合わせ）</h2>
                <p>本ルールに関するお問い合わせは、下記までお願いいたします。</p>
                <p>
                    メールアドレス：<a href="mailto:contact@newcreator.org">contact@newcreator.org</a>
                </p>
            </section>
        </LegalDocument>
    );
}
