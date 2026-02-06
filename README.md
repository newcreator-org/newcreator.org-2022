# ニュークリエイター・オルグ Webサイト

特定非営利活動法人ニュークリエイター・オルグの公式Webサイトです。

## 技術スタック

- **フレームワーク**: Next.js 12
- **言語**: TypeScript
- **スタイリング**: TailwindCSS, Sass
- **コンテンツ管理**: Markdown (gray-matter)
- **デプロイ**: Cloudflare Pages

## 開発環境のセットアップ

### 必要な環境

- Node.js 16以上
- Yarn

### インストール

```bash
yarn install
```

### 環境変数の設定

`.env.local`ファイルを作成して以下を設定:

```
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-N8C929R
```

### 開発サーバーの起動

```bash
yarn dev
```

ブラウザで `http://localhost:3000` を開いてください。

## コンテンツ管理

### ニュース記事の追加

`content/news/` ディレクトリに Markdown ファイルを作成します。

**ファイル名の形式**: `YYYY-MM-DD-slug.md`

**Frontmatter の形式**:

```markdown
---
title: "記事のタイトル"
date: "2024-02-06T00:00:00.000Z"
id: "unique-id"
link: "https://example.com/external-link"  # オプション
---

記事の本文をここに書きます。

## 見出し

段落や見出しを自由に追加できます。
```

### アーカイブ記事の追加

`content/archives/` ディレクトリに Markdown ファイルを作成します。

**ファイル名の形式**: `YYYY-MM-DD-slug.md`

**Frontmatter の形式**:

```markdown
---
title: "活動のタイトル"
date: "2024-02-06T00:00:00.000Z"
id: "unique-id"
description: "活動の簡単な説明"
link: "https://example.com/external-link"  # オプション
---

活動の詳細をここに書きます。
```

## ビルド

### 本番ビルド

```bash
yarn build
```

ビルド成果物は `out/` ディレクトリに生成されます。

### ローカルでプレビュー

```bash
# serveをインストール（初回のみ）
npm install -g serve

# プレビュー
serve out
```

## デプロイ

### Cloudflare Pages

このプロジェクトは Cloudflare Pages にデプロイされます。

**ビルド設定**:
- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `yarn build`
- **Build output directory**: `out`
- **Root directory**: `/`

詳細は [CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md) を参照してください。

## プロジェクト構造

```
.
├── components/          # Reactコンポーネント
├── content/            # Markdownコンテンツ
│   ├── news/          # ニュース記事
│   └── archives/      # 活動アーカイブ
├── libs/              # ユーティリティ関数
├── pages/             # Next.jsページ
├── public/            # 静的ファイル
├── styles/            # スタイルシート
└── out/               # ビルド成果物（生成される）
```

## ライセンス

© 2024 特定非営利活動法人ニュークリエイター・オルグ

---

<a target="_blank" rel="noopener noreferrer" href="https://vercel.com?utm_source=newcreator-org&utm_campaign=oss">
  <img
    alt="Powered by Vercel"
    style="margin-top: 8px"
    height="32"
    src="https://raw.githubusercontent.com/newcreator-org/newcreator.org/master/public/powered-by-vercel.svg"
  />
</a>
