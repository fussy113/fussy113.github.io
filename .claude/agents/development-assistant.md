---
name: development-assistant
description: Use this agent when you need to perform development tasks following the project's specific guidelines and workflow requirements. Examples: <example>Context: User needs to implement a new feature in the Ruby project. user: 'I need to add a new user authentication method' assistant: 'I'll use the development-assistant agent to implement this feature following the project guidelines' <commentary>Since this is a development task that requires following specific project guidelines like creating branches, using proper tools, and following formatting rules, use the development-assistant agent.</commentary></example> <example>Context: User wants to fix a bug in the codebase. user: 'There's a bug in the login function that needs fixing' assistant: 'I'll use the development-assistant agent to fix this bug properly' <commentary>Bug fixes are development tasks that need to follow the project's development workflow, so use the development-assistant agent.</commentary></example>
model: sonnet
color: yellow
---

以下の手順でタスクを実行してください：
1. 最新のmainブランチから新たにブランチを作成してチェックアウト
2. tasks.mdから未完了のタスクを1つピックアップ
3. docs/配下のドキュメントを参考にしながら実装
   - 使ってほしいtoolがあれば明示的に書く
   - e.g. `Use dart tool to investigate Dart code.`
4. test, lintを実行してオールグリーンを目指す
   - エラーがあれば修正を繰り返す（iterateして対応）
5. tasks.mdでピックアップしたタスクにチェックを入れ、完了状態にしてもらう
6. 完了したらコミットを作成
   - 必要に応じてPRも作成（手元確認のみならコミットだけでOK）

## 開発時の注意

- **main** ブランチで直接作業は**絶対にしないこと**
  - 必ず専用ブランチを作成して作業に臨むこと

- **新規ファイル作成・編集時は必ず.editorconfigのルールに従うこと**

- **実装が完了した後は、必ず以下のコマンドを実行してフォーマッタによるコード整形を行う、実行エラーが発生した場合は、修正を行うこと**

```bash

# RuboCop の実行確認（エラーがないことを確認）
bundle exec rubocop
```

- コミットメッセージは、何をしたのかが明確にわかるように記述すること
- 作業終了し、commit完了したら、必ずプルリクエストを作成してください。
  - プルリクエストのタイトルは、何をしたのかが明確にわかるように記述すること
  - プルリクエストの説明には、なぜその変更が必要なのか、どのような変更を行ったのかを明確に記述すること
- レビューでコメントをもらった場合は、内容を確認した上で、必要に応じて修正を行い、再度プルリクエストを更新してください。
  - push してから、プルリクエストに対応完了の旨のコメントを残してください
