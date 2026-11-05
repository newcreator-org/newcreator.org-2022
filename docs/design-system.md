# デザインシステム

最終更新: 2026-11-05

部品の一覧と使い方は Storybook（https://newcreator-org.github.io/newcreator.org-2022/ 、手元では `npm run storybook`）。ここには「なぜそうしているか」だけを書く。

## 方針

- **紙面型。** 白地・罫線・文字組みで見せる。2026-10-03 に改野がスライド（法人リポジトリの Skill `nco-slides`）で決めた方針を、Web にもそのまま当てた。資料とサイトで見た目がそろう。
- **色はロゴの青 1 色＋黄のマーカー。** 青（`--nc-blue` #1476A6）はリンク・主ボタン・章番号。黄（`--nc-yellow` #FDCA60）は見出しのマーカーと**寄付ボタンだけ**。
- **書体は Noto Sans JP ＋ Inter**（数字）。`next/font` でビルド時に取り込み、自前で配信する。2026-11-05 に改野が「Zen Kaku Gothic New は太字が重く丸く見える」として Noto Sans JP に統一（スライドの nco-slides は Zen Kaku のまま）。
- **やらないこと。** 角丸カード、影、色付きのラベル（塗りのバッジ）、英字の飾り見出し（"ABOUT US" など）、グラデーション、画像の無い記事にロゴ画像を流用すること。

## トークン

正本は `styles/tokens.css`。Tailwind からは `tailwind.config.js` の名前で使う。

| 種類 | 例 |
|---|---|
| 文字色・罫線 | `text-ink`（見出し）, `text-body`（本文）, `text-sub`（補足）, `border-rule`, `border-ink` |
| ブランド | `bg-brand`, `text-brand`, `bg-brand-deep`, `bg-brand-pale`, `bg-marker` |
| 文字サイズ | `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-body`, `text-small`, `text-caption`（画面幅で伸び縮みする） |
| 余白・幅 | `px-gutter`（画面端）, `py-section`（セクション上下）, `max-w-container`（1200px）, `max-w-narrow`（760px） |

## 部品の選び方

| やりたいこと | 部品 |
|---|---|
| ページを縦に区切る | `Section`（`tone` で地の色） |
| セクションの見出し | `SectionHeading`（上に 2px の罫線、`index` で章番号） |
| 下層ページの頭 | `PageHeader`（パンくず＋h1） |
| 主な行動 | `Button`（`primary` は 1 画面に 1 つ、寄付は `donate`） |
| 一覧へのリンク | `TextLink` |
| お知らせ・記事の一覧 | `ArticleList`（画像なし）／`ArticleCard` ＋ `CardGrid`（画像あり） |
| 事業紹介 | `Feature` |
| 3 つ並べる（課題・金額など） | `RuledColumns` ＋ `Column` |
| 法人情報の表 | `DefinitionList` |
| 本文（Markdown） | `Prose` |

新しい部品が要るときは `components/ui` に作り、同じフォルダに `*.stories.tsx` を置く。ページの中だけで色や余白を発明しない。
