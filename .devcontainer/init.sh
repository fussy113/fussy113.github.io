#!/usr/bin/env bash

set -e

# mise.toml を信頼し、定義した Node.js / pnpm をインストール
mise trust
mise install

# プロジェクトの依存をインストール
mise exec -- pnpm install

# Claude Code を導入（mise が管理する Node 同梱の npm を使用）
mise exec -- npm install -g @anthropic-ai/claude-code

# install pinact
go install github.com/suzuki-shunsuke/pinact/cmd/pinact@latest
