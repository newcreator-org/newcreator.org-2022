# newcreator.org

特定非営利活動法人ニュークリエイター・オルグの公式サイト（https://newcreator.org/）。

| 項目 | 内容 |
|---|---|
| フレームワーク | Next.js 16（App Router）＋ React 19 ＋ TypeScript。`output: "export"` で静的に書き出す |
| スタイル | Tailwind CSS 3。値の正本は `styles/tokens.css`（デザイントークン） |
| デザインシステム | `components/ui`（部品）と `components/layout`（ヘッダー・フッター等）。Storybook で一覧できる |
| コンテンツ | `content/` の Markdown（gray-matter ＋ marked） |
| 配信 | Cloudflare Workers の静的アセット（アカウント newcreator-org、Worker `newcreator-org`） |
| デザインシステムの公開先 | https://newcreator-org.github.io/newcreator.org-2022/ （Storybook） |

## 開発

Node.js 22 以上（`.node-version`）。

```bash
npm ci
npm run dev              # http://localhost:3000
npm run storybook        # http://localhost:6006（部品とトークンの一覧）
```

公開前に CI と同じ検査を手元で回すとき:

```bash
npm run typecheck        # 型チェック
npm run build            # 静的書き出し（out/）
npm run check-links      # out/ のサイト内リンク切れ・sitemap の検査
npm run build-storybook  # Storybook のビルド
```

## ディレクトリ

```
app/                 # ページ（App Router）。page.tsx が 1 ページ
  layout.tsx         # 全ページ共通の枠（フォント・ヘッダー・支援の案内・フッター・GTM）
  sitemap.ts         # sitemap.xml を app/ と content/ から自動生成
components/ui/       # デザインシステムの部品（Button, Section, SectionHeading, ArticleList …）
components/layout/   # SiteHeader, SiteFooter, SupportCta, ContactSection
content/             # Markdown（news / archives / media / for-educators）
libs/                # site.ts（リンク先などの固定値）, metadata.ts, markdown.ts
styles/              # tokens.css（トークン）, globals.css（土台）
stories/             # Storybook のドキュメント（はじめに・Foundations）
public/_headers      # セキュリティヘッダー・キャッシュ
public/_redirects    # リダイレクト
scripts/             # check-links.mjs
```

## ページの作り方

1. `app/<パス>/page.tsx` を作る。`export const metadata = pageMetadata({ title, description, path })` を必ず書く。
2. 下層ページは先頭に `PageHeader`（パンくず付き）、本文は `Section` と `SectionHeading` で区切る。
3. 色・文字サイズ・余白はトークン（`text-ink` `text-h2` `py-section` など）だけで指定する。inline style と生の色コードは書かない。
4. お知らせ・記事を足すだけなら `content/` に Markdown を置けばよい（一覧・詳細・sitemap は自動）。

デザインの方針（紙面型・やらないこと）は Storybook の「はじめに」と [`docs/design-system.md`](docs/design-system.md)。

## リリース

`master` に入ると Cloudflare Workers Builds が自動でビルドしてデプロイする。作業はブランチで行い、PR の CI（`.github/workflows/ci.yml`）が通ってからマージする。詳細は [`docs/deploy.md`](docs/deploy.md)。

## セキュリティ

Dependabot（`.github/dependabot.yml`）、Secret scanning ＋ push protection、CodeQL（default setup）、CI での `npm audit` を有効にしている。方針は法人リポジトリの `docs/security-scanning-policy.md`。
