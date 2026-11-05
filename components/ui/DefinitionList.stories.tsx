import type { Meta, StoryObj } from "@storybook/nextjs";
import { DefinitionList } from "./DefinitionList";

const meta = {
    title: "UI/DefinitionList",
    component: DefinitionList,
    tags: ["autodocs"],
    args: {
        items: [
            { term: "法人名", detail: "特定非営利活動法人ニュークリエイター・オルグ" },
            { term: "法人番号", detail: <span className="nc-num">3120905005839</span> },
            { term: "設立", detail: "2016年より活動、2019年1月法人化" },
            {
                term: "事業内容",
                detail: (
                    <>
                        STEAM教育事業及び啓発事業
                        <br />
                        次世代人材の育成に関する情報提供事業
                    </>
                ),
            },
            { term: "所在地", detail: "大阪府豊中市桜の町3丁目7番7号" },
        ],
    },
} satisfies Meta<typeof DefinitionList>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
