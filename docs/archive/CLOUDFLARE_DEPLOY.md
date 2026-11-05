# Cloudflare Pages デプロイガイド

このドキュメントでは、ニュークリエイター・オルグのWebサイトをCloudflare Pagesにデプロイする方法を説明します。

## デプロイ方法

### 方法1: GitHubからの自動デプロイ（推奨）

#### 1. Cloudflare Dashboardにアクセス

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)にログイン
2. **Workers & Pages** セクションに移動
3. **Create application** をクリック
4. **Pages** タブを選択
5. **Connect to Git** をクリック

#### 2. GitHubリポジトリを接続

1. GitHubアカウントを認証
2. `newcreator-org/newcreator.org-2022` リポジトリを選択
3. **Begin setup** をクリック

#### 3. ビルド設定

以下の設定を入力してください:

| 設定項目 | 値 |
|---------|-----|
| **Framework preset** | `Next.js (Static HTML Export)` |
| **Production branch** | `master` |
| **Build command** | `npm install --legacy-peer-deps && npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `/` |

#### 4. 環境変数の設定

以下の環境変数を設定してください：

| 変数名 | 値 | 説明 |
|--------|-----|------|
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` | `GTM-N8C929R` | Google Tag Manager ID |

**重要**: `.npmrc`ファイルがリポジトリに含まれているため、`legacy-peer-deps=true`が自動的に適用されます。

#### 5. デプロイ

**Save and Deploy** をクリックすると、自動的にビルドとデプロイが開始されます。

### 方法2: Wrangler CLIを使用したデプロイ

#### 1. Wranglerのインストール

```bash
npm install -g wrangler
```

#### 2. Cloudflareにログイン

```bash
wrangler login
```

#### 3. ビルド

```bash
npm run build
```

#### 4. デプロイ

```bash
wrangler pages deploy out --project-name=newcreator-org
```

## ローカルでのビルド確認

デプロイ前に、ローカルでビルドが正常に完了することを確認してください:

```bash
# 依存関係のインストール
npm install

# ビルド
npm run build

# ビルド結果の確認
ls -la out/
```

ビルドが成功すると、`out/` ディレクトリに静的ファイルが生成されます。

## ローカルプレビュー

ビルドした静的ファイルをローカルでプレビューする場合:

```bash
# serveをインストール（初回のみ）
npm install -g serve

# プレビュー
serve out
```

ブラウザで `http://localhost:3000` を開いてプレビューできます。

## カスタムドメインの設定

### 1. Cloudflare Pagesダッシュボードでドメインを追加

1. デプロイしたプロジェクトを開く
2. **Custom domains** タブを選択
3. **Set up a custom domain** をクリック
4. ドメイン名を入力（例: `newcreator.org`）
5. DNS設定を確認

### 2. DNS設定

Cloudflareがドメインを管理している場合は、自動的にDNSレコードが追加されます。

外部DNSを使用している場合は、以下のCNAMEレコードを追加してください:

```
CNAME @ newcreator-org.pages.dev
```

## 環境変数の管理

### 本番環境

Cloudflare Pagesダッシュボードで設定:

1. プロジェクトを開く
2. **Settings** → **Environment variables**
3. **Production** タブで変数を追加

### プレビュー環境

プルリクエストのプレビュー環境用に別の環境変数を設定できます:

1. **Settings** → **Environment variables**
2. **Preview** タブで変数を追加

## デプロイの自動化

### GitHub Actionsとの連携

GitHubにプッシュすると、Cloudflare Pagesが自動的にビルドとデプロイを実行します。

- **本番デプロイ**: `master` ブランチへのプッシュ
- **プレビューデプロイ**: プルリクエストの作成

### デプロイ通知

Cloudflare Pagesは以下の通知をサポートしています:

- Email
- Slack
- Discord
- Webhook

**Settings** → **Notifications** で設定できます。

## トラブルシューティング

### ビルドエラー

#### `Error: Image Optimization using Next.js' default loader is not compatible with export.`

**原因:** Next.jsの画像最適化がStatic Exportと互換性がありません。

**解決策:** `next.config.js` で `images.unoptimized: true` を設定してください（すでに設定済み）。

#### `Error: getStaticPaths is required for dynamic SSG pages`

**原因:** 動的ルートで `getStaticPaths` が定義されていません。

**解決策:** 動的ルートのページで `getStaticPaths` を実装してください。

### デプロイ後の404エラー

#### ページが見つからない

**原因:** `trailingSlash: true` が設定されているため、URLの末尾に `/` が必要です。

**解決策:** URLの末尾に `/` を追加してアクセスしてください（例: `/about/`）。

### 環境変数が反映されない

**原因:** 環境変数の設定後、再デプロイが必要です。

**解決策:**
1. Cloudflare Pagesダッシュボードで **Deployments** を開く
2. 最新のデプロイを選択
3. **Retry deployment** をクリック

## パフォーマンス最適化

### キャッシュ設定

Cloudflare Pagesは自動的に静的ファイルをキャッシュします。キャッシュの動作を変更する場合は、`_headers` ファイルを作成してください:

```
/out/_headers

/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

### 画像の最適化

Static Exportでは Next.js の画像最適化が使用できないため、以下の方法で画像を最適化してください:

1. **事前に最適化**: ビルド前に画像を圧縮
2. **Cloudflare Images**: Cloudflare Imagesサービスを使用
3. **外部CDN**: ImgixやCloudinaryなどの画像CDNを使用

## 料金

Cloudflare Pagesの料金プラン:

| プラン | 料金 | ビルド数 | 帯域幅 |
|--------|------|----------|--------|
| **Free** | $0/月 | 500回/月 | 無制限 |
| **Pro** | $20/月 | 5,000回/月 | 無制限 |

このプロジェクトは **Free** プランで十分運用できます。

## サポート

問題が発生した場合は、以下のリソースを参照してください:

- [Cloudflare Pages ドキュメント](https://developers.cloudflare.com/pages/)
- [Next.js Static Export ドキュメント](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare Community](https://community.cloudflare.com/)

## 更新履歴

- **2026-02-06**: Cloudflare Pages対応の初期設定完了
  - `next.config.js` に `output: 'export'` を追加
  - `images.unoptimized: true` を設定
  - ビルドコマンドを簡略化
