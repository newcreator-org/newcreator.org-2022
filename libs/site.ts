/** サイト全体で使う固定値。リンク先を変えるときはここだけ直す */
export const SITE = {
    name: "特定非営利活動法人ニュークリエイター・オルグ",
    shortName: "newCreator.org",
    url: "https://newcreator.org",
    description:
        "地域格差・不登校・ジェンダーギャップ——教育の「届かない」をなくすために。特定非営利活動法人ニュークリエイター・オルグは、全国の子どもたちにSTEAM教育を格差なく届けるため、学校向け出張授業・AI導入支援・オンラインスクールを展開しています。",
    email: "contact@newcreator.org",
    donateUrl: "https://syncable.biz/associate/newcreator-org",
    xUrl: "https://x.com/nC_org",
    xHandle: "@nC_org",
    githubUrl: "https://github.com/newcreator-org",
    themeColor: "#1476A6",
} as const;

export const NAV_LINKS = [
    { href: "/about/", label: "私たちについて" },
    { href: "/activities/", label: "活動実績" },
    { href: "/for-educators/", label: "先生・学校の方へ" },
    { href: "/media/", label: "メディア" },
    { href: "/information/", label: "お知らせ" },
] as const;

export const FOOTER_LINKS = [
    {
        heading: "法人について",
        links: [
            { href: "/about/", label: "私たちについて" },
            { href: "/about/company/", label: "法人概要" },
            { href: "/about/transparency/", label: "情報公開" },
            { href: "/activities/", label: "活動実績" },
            { href: "/archives/", label: "活動アーカイブ" },
        ],
    },
    {
        heading: "先生・学校の方へ",
        links: [
            { href: "/for-educators/", label: "教育機関向けの支援" },
            { href: "/for-educators/guides/", label: "AI 教育ガイド" },
            { href: "/for-educators/case-studies/", label: "導入事例" },
            { href: "/for-educators/resources/", label: "資料ダウンロード" },
            { href: "/for-educators/faq/", label: "よくある質問" },
        ],
    },
    {
        heading: "読む・知る",
        links: [
            { href: "/information/", label: "お知らせ" },
            { href: "/media/", label: "メディア" },
            { href: "/#contact", label: "お問い合わせ" },
        ],
    },
    {
        heading: "規約・方針",
        links: [
            { href: "/legal/privacy-policy/", label: "プライバシーポリシー" },
            { href: "/legal/terms/", label: "各種サービス利用規約" },
            { href: "/legal/tokushoho/", label: "特定商取引法に基づく表記" },
            { href: "/legal/rule/", label: "提供にあたってのルール" },
        ],
    },
] as const;
