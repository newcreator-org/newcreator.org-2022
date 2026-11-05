# デプロイとリリース

最終更新: 2026-11-05

## 流れ

1. ブランチを切って作業し、PR を出す。
2. PR で GitHub Actions の CI（`.github/workflows/ci.yml`）が走る: 型チェック → `next build` → サイト内リンク切れ検査 → `npm audit`（本番依存の high 以上）→ Storybook ビルド。
3. CI が通ったら `master` にマージする。
4. `master` への push で **Cloudflare Workers Builds**（Cloudflare 側の Git 連携）がビルドし、Worker `newcreator-org` に静的アセット（`out/`）をデプロイする。結果は PR／コミットのチェック「Workers Builds: newcreator-org」で見える。
5. 同じく `master` への push で、Storybook が GitHub Pages に公開される（`.github/workflows/storybook-pages.yml`）。

> 2026-06-08 に、PR 段階の検査が無いまま `master` に入ったコミットで本番ビルドが 2 回失敗した。CI はこれを防ぐために入れた。

## Cloudflare

- アカウント: **newcreator-org**（`1cb25a1203fa529d54e53fcb6bdb72b5`）。`wrangler.toml` に `account_id` を明記してある（誤デプロイ防止。法人リポジトリの `docs/cloudflare-deploy.md`）。
- 配信設定は `wrangler.toml` の `[assets] directory = "./out"`。
- ヘッダーは `public/_headers`、リダイレクトは `public/_redirects`（ビルドで `out/` にコピーされ、Workers の静的アセットが読む）。

## 手元から緊急デプロイするとき

通常は使わない。Workers Builds が止まっているときだけ。

```bash
npm ci && npm run build
npx wrangler whoami          # newcreator-org アカウントであることを確認
npx wrangler deploy
```

`wrangler login` は叩かない（default profile を上書きしてしまう）。認証が切れていたら改野に確認する。

## 戻すとき

Cloudflare ダッシュボード → Workers & Pages → `newcreator-org` → Deployments から、前のバージョンに Rollback できる。あわせて `master` で該当コミットを `git revert` する。
