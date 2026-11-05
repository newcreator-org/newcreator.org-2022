import type { Meta, StoryObj } from "@storybook/nextjs";
import { Prose } from "./Prose";

const html = `
<p>生成AIが当たり前になった時代、子どもはいつからAIに触れるべきでしょうか。<a href="#">文部科学省のガイドライン</a>も参考にしながら、年齢ごとの目安をまとめました。</p>
<h2>小学校低学年</h2>
<p>まずは「AIは道具である」ことを、大人と一緒に体験するところから始めます。</p>
<ul><li>大人と一緒に使う</li><li>答えをそのまま信じない</li><li>個人情報を入れない</li></ul>
<h3>家庭でできること</h3>
<p>子どもが作ったものを、<strong>結果ではなく過程</strong>でほめてください。</p>
<blockquote><p>「作れた！」と目が輝く子どもたちの顔は、何年たっても忘れられません。</p></blockquote>
<table><thead><tr><th>学年</th><th>目安</th></tr></thead><tbody><tr><td>低学年</td><td>大人と一緒に</td></tr><tr><td>高学年</td><td>ルールを決めて</td></tr></tbody></table>
`;

const meta = {
    title: "UI/Prose",
    component: Prose,
    tags: ["autodocs"],
    args: { html },
    decorators: [(Story) => <div className="max-w-narrow">{Story()}</div>],
} satisfies Meta<typeof Prose>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
