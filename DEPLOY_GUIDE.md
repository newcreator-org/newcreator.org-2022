# デプロイガイド

## 🚀 本番環境へのデプロイ手順

### 前提条件
- GitHubリポジトリへのプッシュ権限
- Vercelアカウントとプロジェクトへのアクセス権
- microCMS APIキー

---

## ステップ1: GitHubへプッシュ

### 1-1. リモートリポジトリの確認
```bash
cd /path/to/newcreator.org-2022
git remote -v
```

### 1-2. プッシュ
```bash
git push origin master
```

**注意**: プッシュには認証が必要です。GitHub Personal Access Tokenを使用してください。

---

## ステップ2: Vercelでの環境変数設定

### 2-1. Vercelダッシュボードにアクセス
https://vercel.com/dashboard

### 2-2. プロジェクトを選択
`newcreator-org` プロジェクトを選択

### 2-3. 環境変数を設定
Settings → Environment Variables

以下の環境変数を追加：

| 変数名 | 値 | 環境 |
|--------|-----|------|
| `API_KEY` | microCMS APIキー | Production, Preview, Development |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` | GTM ID（オプション） | Production |

### 2-4. 保存
Save をクリック

---

## ステップ3: デプロイの確認

### 3-1. 自動デプロイの確認
Vercelは GitHubへのプッシュを検知して自動的にデプロイを開始します。

Deployments タブで進行状況を確認できます。

### 3-2. プレビューURL
デプロイが完了すると、プレビューURLが発行されます。

例: `https://newcreator-org-git-master-xxx.vercel.app`

### 3-3. 本番URLの確認
本番環境: `https://newcreator.org`

---

## ステップ4: 動作確認

### 4-1. 実績セクションの確認
✅ トップページに「数字で見る私たちの活動」セクションが表示されているか  
✅ 数字が正しく表示されているか（1,000+、50+、10+、8年）  
✅ グラデーション背景が適用されているか  
✅ ホバー時に影が表示されるか

### 4-2. 寄付セクションの確認
✅ 「あなたの寄付でできること」セクションが表示されているか  
✅ 3つの金額カード（¥3,000、¥10,000、¥30,000）が表示されているか  
✅ CTAボタンがオレンジ色になっているか  
✅ ボタンのホバー効果が動作するか

### 4-3. お知らせの確認
✅ 最新のお知らせが表示されているか（2024年2月の記事など）  
✅ 日付が正しく表示されているか

### 4-4. レスポンシブ対応の確認
✅ スマートフォン（375px）で正しく表示されるか  
✅ タブレット（768px）で正しく表示されるか  
✅ デスクトップ（1280px以上）で正しく表示されるか

---

## トラブルシューティング

### エラー: "parameter is required (check serviceDomain and apiKey)"

**原因**: microCMS APIキーが設定されていない

**解決方法**:
1. Vercelダッシュボードで環境変数 `API_KEY` を確認
2. 値が正しく設定されているか確認
3. 再デプロイ（Deployments → ... → Redeploy）

### エラー: ビルドが失敗する

**原因**: 依存関係の問題

**解決方法**:
```bash
# ローカルで確認
yarn install
yarn build

# エラーが出た場合
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### 表示が崩れる

**原因**: Tailwind CSSのビルドに問題がある

**解決方法**:
1. `.next` フォルダを削除
2. 再ビルド
```bash
rm -rf .next
yarn build
```

---

## ロールバック手順

### 方法1: Vercelダッシュボードから
1. Deployments タブを開く
2. 以前の正常なデプロイを選択
3. ... → Promote to Production

### 方法2: Gitから
```bash
# 直前のコミットに戻す
git revert HEAD
git push origin master

# 特定のコミットに戻す
git revert <commit-hash>
git push origin master
```

---

## 次のステップ

### デプロイ後にやるべきこと

#### 1. お知らせの更新（最優先）
microCMSにログインして、2024年3月以降の活動をお知らせとして投稿してください。

**推奨頻度**: 月1回以上

#### 2. 数字の精査
実装した数字（1,000+参加生徒など）が実際の数値と合っているか確認し、必要に応じて `pages/index.tsx` を修正してください。

#### 3. Google Analyticsの確認
- ページビュー数の変化
- 滞在時間の変化
- 寄付ページへの遷移率

#### 4. 寄付コンバージョンの追跡
- 寄付件数の変化
- 平均寄付額の変化
- 新規寄付者の増加率

---

## 連絡先

デプロイに関する質問や問題がある場合は、以下にお問い合わせください：

- **技術サポート**: contact@newcreator.org
- **GitHub Issues**: https://github.com/newcreator-org/newcreator.org-2022/issues

---

**作成日**: 2025年11月28日  
**バージョン**: 1.0  
**最終更新**: 2025年11月28日
