# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

**注意:** このプロジェクトはpackage.jsonで指定されている通りnpm（yarnではない）を使用します。yarnではなくnpmコマンドを使用してください。

### 開発

- `npm run dev` - ホットリロード付きの開発サーバーを開始
- `npm run preview` - プロダクションビルドをローカルでプレビュー

### ビルド

- `npm run build` - 型チェックとプロダクション用ビルド（`type-check`と`build-only`を並列実行）
- `npm run build-only` - 型チェックなしでビルド

### コード品質とリント

- `npm run lint` - 全ファイルでESLintを実行
- `npm run lint:fix` - 自動修正付きでESLintを実行
- `npm run type-check` - vue-tscでTypeScript型チェックを実行
- `npm run format` - Prettierでコードをフォーマット（src/ディレクトリのみ）
- `npm run stylelint` - VueとSCSSファイルでStylelintを実行
- `npm run stylelint:fix` - 自動修正付きでStylelintを実行
- `npm run markuplint` - VueファイルでMarkuplintを実行
- `npm run markuplint:fix` - 自動修正付きでMarkuplintを実行

### テスト

- `npm run test:unit` - Vitestでユニットテストを実行

## アーキテクチャ

これはVite で構築されたVue 3 + TypeScriptのシングルページアプリケーションで、個人ブログ/ポートフォリオサイトです。

### 技術スタック

- **フレームワーク**: Vue 3 with Composition API（`<script setup>`構文）
- **ビルドツール**: Vite 6.2.7
- **言語**: TypeScript 5.8.2
- **ルーティング**: Vue Router 4.5.1
- **スタイリング**:
  - TailwindCSS 4.0.17（主要CSSフレームワーク）
  - コンポーネント固有スタイル用SCSS/Sass
  - テーマ用CSSカスタムプロパティ
- **テスト**: jsdom環境でのVitest
- **開発ツール**: Vue DevToolsプラグインが有効

### プロジェクト構造

```
src/
├── assets/          # 静的アセット（CSS、画像など）
│   ├── tailwind.css # Tailwindインポート
│   ├── main.css     # グローバルスタイル
│   ├── base.css     # ベーススタイリング
│   └── logo.svg     # アプリロゴ
├── components/      # 再利用可能なVueコンポーネント
│   ├── __tests__/   # コンポーネントのユニットテスト
│   ├── icons/       # アイコンコンポーネント
│   └── *.vue        # コンポーネントファイル
├── views/           # ページレベルコンポーネント
│   └── HomeView.vue
├── router/          # Vue Router設定
│   └── index.ts     # ルート定義
├── App.vue          # ルートコンポーネント
└── main.ts          # アプリケーションエントリーポイント
```

### 主要設定ファイル

- `vite.config.ts` - Vueプラグイン、DevTools、TailwindCSS付きのVite設定
- `vitest.config.ts` - Vite設定とマージするテスト設定
- `eslint.config.js` - JS/TS/Vueファイル用のFlat ESLint設定（日本語コメント）
- `tsconfig.json` - メインTypeScript設定
- `tsconfig.app.json` - アプリ固有のTypeScript設定
- `tsconfig.node.json` - Node.js TypeScript設定

### 開発パターン

- **コンポーネント**: `<script setup lang="ts">`構文でVue 3 Composition APIを使用
- **スタイリング**: シングルファイルコンポーネント内のスコープ付きSCSS、ユーティリティ用TailwindCSS
- **パスエイリアス**: srcディレクトリ用に`@/`を使用（vite.config.tsで設定）
- **アイコン**: `src/components/icons/`内のカスタムアイコンコンポーネント

### リントとコード品質

プロジェクトでは複数のリンターが連携して動作：

- **ESLint**: Flat設定でのJavaScript/TypeScript/Vueリント
- **Stylelint**: Vueとrecess-order設定でのCSS/SCSSリント
- **Markuplint**: VueテンプレートでのHTMLマークアップ検証
- **Prettier**: コードフォーマット
- **TypeScript**: vue-tscでの厳密な型チェック

### Node.jsバージョン管理

- Node.jsバージョン管理にVoltaを使用（22.19.0）
- package.jsonのenginesでnpm 10.9.3を強制
