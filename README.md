# OpenAgricultureDiary Landing Page

[OpenAgricultureDiary](https://github.com/cyrus07424/openAgricultureDiary)の公式ランディングページです。

## 概要

このプロジェクトは、オープンソース農業日誌管理ツール「OpenAgricultureDiary」のランディングページを提供します。サービスの紹介、機能説明、利用規約、プライバシーポリシー、よくある質問などのコンテンツが含まれています。

## 特徴

- **レスポンシブデザイン**: デスクトップ、タブレット、モバイルデバイスに対応
- **空をモチーフとしたデザイン**: 青と緑を基調とした美しいグラデーション
- **SEO最適化**: 適切なメタタグとtitleタグの設定
- **アクセシビリティ**: 使いやすいナビゲーションとレイアウト
- **高性能**: Next.js 15とTailwind CSS v4を使用した最新技術

## 技術スタック

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: Node.js

## セットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/cyrus07424/openAgricultureDiary-lp.git

# ディレクトリに移動
cd openAgricultureDiary-lp

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 環境変数の設定

`.env.example`を参考に`.env.local`ファイルを作成し、必要な環境変数を設定してください。

```bash
# .env.local
NEXT_PUBLIC_APP_URL=https://example.com
```

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクション用にビルド
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードをチェック

## デプロイ

### Vercel（推奨）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cyrus07424/openAgricultureDiary-lp)

### その他のプラットフォーム

- Netlify
- AWS Amplify
- Cloudflare Pages

など、任意の静的サイトホスティングサービスにデプロイできます。

## ページ構成

- `/` - ホームページ（サービス紹介）
- `/terms` - 利用規約
- `/privacy` - プライバシーポリシー
- `/faq` - よくある質問

## カスタマイズ

### アプリケーションURLの設定

環境変数`NEXT_PUBLIC_APP_URL`を設定することで、メインアプリケーションへのリンクをカスタマイズできます。

### デザインのカスタマイズ

Tailwind CSSの設定は`app/globals.css`で行えます。カラーパレットやその他のデザイン要素を変更できます。

## 貢献

このプロジェクトへの貢献を歓迎します！

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルをご覧ください。

## 関連リンク

- [OpenAgricultureDiary メインリポジトリ](https://github.com/cyrus07424/openAgricultureDiary)
- [Next.js ドキュメント](https://nextjs.org/docs)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
