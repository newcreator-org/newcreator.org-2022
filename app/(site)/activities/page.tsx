import { Button, PageHeader, Section, SectionHeading, Stat, StatGrid } from "../../../components/ui";
import { pageMetadata } from "../../../libs/metadata";
import { ActivityTable } from "./ActivityTable";
import { ACTIVITIES } from "./data";

export const metadata = pageMetadata({
    title: "活動実績",
    description: "特定非営利活動法人ニュークリエイター・オルグのこれまでの活動とイベントの記録。生成AI活用研修の実施一覧。",
    path: "/activities/",
});

export default function ActivitiesPage() {
    const count = (c: string) => ACTIVITIES.filter((a) => a.category === c).length;

    return (
        <>
            <PageHeader title="活動実績" breadcrumb={[{ label: "活動実績" }]} lead="これまでの活動とイベントの記録" />

            <Section spacing="compact">
                <StatGrid>
                    <Stat value={String(ACTIVITIES.length)} unit="件" label="生成AI研修実施数" />
                    <Stat value="10" unit="都道府県以上" label="都道府県" />
                    <Stat value={String(count("student"))} unit="件" label="生徒向け研修" />
                    <Stat value={String(count("teacher"))} unit="件" label="教員向け研修" />
                </StatGrid>
            </Section>

            <Section tone="muted" aria-labelledby="list-heading">
                <SectionHeading id="list-heading" index="01" title="生成AI活用研修 実施一覧" />
                <ActivityTable />
            </Section>

            <Section aria-labelledby="request-heading">
                <SectionHeading
                    id="request-heading"
                    title="研修・ワークショップのご依頼"
                    lead="学校・教育委員会向けの生成AI活用研修を全国で実施しています"
                    action={
                        <Button href="/#contact" size="lg" arrow>
                            お問い合わせ
                        </Button>
                    }
                />
            </Section>
        </>
    );
}
