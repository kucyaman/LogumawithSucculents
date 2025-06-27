# Loguma with Succulents 開発Issue一覧

## 🔐 認証・ユーザー管理（細分化）

### 1-1. ユーザー登録機能
```
Title: ユーザー登録フォームの実装
Description:
- [ ] メールアドレス・パスワードでの登録
- [ ] バリデーション機能
- [ ] 登録確認メールの送信
- [ ] 登録完了画面の作成
Priority: High
Labels: auth, frontend
```

### 1-2. ユーザーログイン機能
```
Title: ログインフォームの実装
Description:
- [ ] メールアドレス・パスワードでのログイン
- [ ] ログイン状態の管理（セッション）
- [ ] ログインエラーハンドリング
- [ ] ログイン後のリダイレクト処理
Priority: High
Labels: auth, frontend
```

### 1-3. パスワードリセット機能
```
Title: パスワードリセット機能の実装
Description:
- [ ] パスワードリセットメールの送信
- [ ] リセットトークンの生成・検証
- [ ] 新しいパスワード設定フォーム
- [ ] セキュリティ対策（トークン有効期限）
Priority: Medium
Labels: auth, security
```

### 1-4. プロフィール編集機能
```
Title: ユーザープロフィール編集機能の実装
Description:
- [ ] ユーザー名・メールアドレスの編集
- [ ] 都道府県の選択機能
- [ ] プロフィール画像のアップロード
- [ ] 変更内容の保存・反映
Priority: Medium
Labels: profile, frontend
```

## 📝 投稿機能（細分化）

### 2-1. 投稿作成フォーム
```
Title: 投稿作成フォームの実装
Description:
- [ ] 画像アップロード機能
- [ ] 属・品種の選択ドロップダウン
- [ ] 説明文の入力フィールド
- [ ] 可視性設定（公開/非公開）
Priority: High
Labels: posts, frontend
```

### 2-2. 画像アップロード機能
```
Title: 画像アップロード機能の実装
Description:
- [ ] ドラッグ&ドロップでの画像アップロード
- [ ] 画像のプレビュー表示
- [ ] 画像のリサイズ・圧縮
- [ ] 複数画像のアップロード対応
Priority: High
Labels: upload, frontend
```

### 2-3. 投稿一覧表示
```
Title: 投稿一覧ページの実装
Description:
- [ ] グリッド形式での投稿表示
- [ ] ページネーション機能
- [ ] 投稿の詳細表示（モーダル）
- [ ] いいね・コメント数の表示
Priority: High
Labels: posts, frontend
```

### 2-4. 投稿編集・削除機能
```
Title: 投稿の編集・削除機能の実装
Description:
- [ ] 自分の投稿の編集機能
- [ ] 投稿の削除機能（確認ダイアログ）
- [ ] 編集履歴の管理
- [ ] 権限チェック機能
Priority: Medium
Labels: posts, frontend
```

## 📊 ログ機能（細分化）

### 3-1. ログ記録フォーム
```
Title: お手入れログ記録フォームの実装
Description:
- [ ] 日付選択機能
- [ ] アクション選択ドロップダウン
- [ ] メモ入力フィールド
- [ ] 保存・キャンセル機能
Priority: High
Labels: logs, frontend
```

### 3-2. ログ一覧表示
```
Title: ログ一覧ページの実装
Description:
- [ ] カレンダー形式でのログ表示
- [ ] 日付別のログフィルター
- [ ] アクション別のフィルター
- [ ] ログの詳細表示
Priority: High
Labels: logs, frontend
```

### 3-3. ログ編集・削除機能
```
Title: ログの編集・削除機能の実装
Description:
- [ ] ログの編集機能
- [ ] ログの削除機能
- [ ] 編集履歴の管理
- [ ] 権限チェック機能
Priority: Medium
Labels: logs, frontend
```

## 👥 ソーシャル機能（細分化）

### 4-1. フォロー機能
```
Title: ユーザーフォロー機能の実装
Description:
- [ ] フォローボタンの実装
- [ ] フォロー状態の管理
- [ ] フォロー中のユーザー一覧
- [ ] フォロワー一覧の表示
Priority: Medium
Labels: social, frontend
```

### 4-2. いいね機能
```
Title: 投稿へのいいね機能の実装
Description:
- [ ] いいねボタンの実装
- [ ] いいね状態の管理
- [ ] いいね数の表示
- [ ] いいねした投稿の一覧
Priority: Medium
Labels: social, frontend
```

### 4-3. フィード機能
```
Title: フォロー中のユーザーの投稿フィード
Description:
- [ ] フォロー中のユーザーの投稿表示
- [ ] 投稿の時系列表示
- [ ] フィードの更新機能
- [ ] 無限スクロール対応
Priority: Medium
Labels: social, frontend
```

## 🔍 検索・フィルター（細分化）

### 5-1. 投稿検索機能
```
Title: 投稿のキーワード検索機能
Description:
- [ ] 検索フォームの実装
- [ ] キーワード検索の実装
- [ ] 検索結果の表示
- [ ] 検索履歴の管理
Priority: Medium
Labels: search, frontend
```

### 5-2. 属・品種フィルター
```
Title: 属・品種による投稿フィルター
Description:
- [ ] 属選択ドロップダウン
- [ ] 品種選択ドロップダウン
- [ ] フィルター結果の表示
- [ ] フィルター条件のリセット
Priority: Medium
Labels: filter, frontend
```

### 5-3. 地域フィルター
```
Title: 地域によるユーザー・投稿フィルター
Description:
- [ ] 都道府県選択機能
- [ ] 地域別ユーザー表示
- [ ] 地域別投稿表示
- [ ] 地域統計の表示
Priority: Low
Labels: filter, frontend
```

## 🎨 UI/UX改善（細分化）

### 6-1. ヘッダーナビゲーション改善
```
Title: ヘッダーナビゲーションの改善
Description:
- [ ] メニュー構造の最適化
- [ ] アクティブ状態の表示
- [ ] モバイル対応のハンバーガーメニュー
- [ ] ユーザーメニューの実装
Priority: Medium
Labels: ui, navigation
```

### 6-2. カードデザインの統一
```
Title: 投稿カードデザインの統一
Description:
- [ ] 投稿カードのデザイン統一
- [ ] ホバー効果の実装
- [ ] レスポンシブ対応
- [ ] アクセシビリティの向上
Priority: Medium
Labels: ui, design
```

### 6-3. フォームデザインの改善
```
Title: フォームデザインの改善
Description:
- [ ] 入力フィールドのデザイン統一
- [ ] バリデーションエラーの表示
- [ ] ローディング状態の表示
- [ ] フォーム送信のUX改善
Priority: Medium
Labels: ui, forms
```

## 🔧 バックエンドAPI（細分化）

### 7-1. ユーザーAPI
```
Title: ユーザー関連APIの実装
Description:
- [ ] ユーザー登録API
- [ ] ユーザーログインAPI
- [ ] プロフィール取得・更新API
- [ ] ユーザー一覧取得API
Priority: High
Labels: api, backend
```

### 7-2. 投稿API
```
Title: 投稿関連APIの実装
Description:
- [ ] 投稿作成API
- [ ] 投稿一覧取得API
- [ ] 投稿詳細取得API
- [ ] 投稿更新・削除API
Priority: High
Labels: api, backend
```

### 7-3. ログAPI
```
Title: ログ関連APIの実装
Description:
- [ ] ログ作成API
- [ ] ログ一覧取得API
- [ ] ログ更新・削除API
- [ ] ログ統計取得API
Priority: High
Labels: api, backend
```

### 7-4. ソーシャルAPI
```
Title: ソーシャル機能APIの実装
Description:
- [ ] フォロー・アンフォローAPI
- [ ] いいね・いいね解除API
- [ ] フォロー一覧取得API
- [ ] フィード取得API
Priority: Medium
Labels: api, backend
```

## 🗄️ データベース（細分化）

### 8-1. 初期データ投入
```
Title: 初期データの投入
Description:
- [ ] 都道府県データのシーダー作成
- [ ] 多肉植物の属データのシーダー作成
- [ ] サンプルユーザーの作成
- [ ] テストデータの準備
Priority: Medium
Labels: data, seeder
```

### 8-2. データベース最適化
```
Title: データベースの最適化
Description:
- [ ] インデックスの追加・最適化
- [ ] クエリの最適化
- [ ] パフォーマンス監視
- [ ] バックアップ設定
Priority: Medium
Labels: database, performance
```

## 🧪 テスト（細分化）

### 9-1. フロントエンドテスト
```
Title: フロントエンドのテスト実装
Description:
- [ ] コンポーネントのユニットテスト
- [ ] ユーザー操作のテスト
- [ ] フォームバリデーションテスト
- [ ] レスポンシブデザインテスト
Priority: Medium
Labels: test, frontend
```

### 9-2. バックエンドテスト
```
Title: バックエンドのテスト実装
Description:
- [ ] APIエンドポイントのテスト
- [ ] データベース操作のテスト
- [ ] 認証機能のテスト
- [ ] エラーハンドリングのテスト
Priority: Medium
Labels: test, backend
```

## 🚀 デプロイ・運用（細分化）

### 10-1. 本番環境構築
```
Title: 本番環境の構築
Description:
- [ ] 本番サーバーの設定
- [ ] ドメインの設定
- [ ] SSL証明書の設定
- [ ] 環境変数の設定
Priority: High
Labels: deployment, production
```

### 10-2. 監視・ログ設定
```
Title: 監視・ログ機能の実装
Description:
- [ ] アプリケーションログの設定
- [ ] エラー監視の実装
- [ ] パフォーマンス監視
- [ ] アラート機能の実装
Priority: Medium
Labels: monitoring, production
```

## 📋 開発ルール

### 作業フロー
1. **作業開始時**: 「次の作業」と指示されたら、まずこのファイル（development_rules.md）を参照する
2. **作業確認**: 「Issueを確認します！」と返事する
3. **作業完了時**: 対応するIssueのチェックボックスにチェックを入れる
4. **進捗管理**: 完了した作業はチェックボックスで管理し、進捗を可視化する
5. **完了報告**: チェックボックスを変更した場合は報告すること

### ブランチ戦略
- 機能開発は `feature/機能名` ブランチで実装
- バグ修正は `fix/修正内容` ブランチで実装
- リリース前は `release/バージョン` ブランチで統合テスト

### コミットメッセージ
- 形式: `種別: 変更内容の簡潔な説明`
- 例: `feat: ユーザー登録機能を実装`, `fix: ログインエラーの修正`

### プルリクエスト
- 各Issueに対応するプルリクエストを作成
- レビュー必須（最低1名の承認）
- テストが通ることを確認してからマージ

### 優先順位
- **High**: コア機能、セキュリティ関連
- **Medium**: ユーザビリティ向上、パフォーマンス
- **Low**: 追加機能、UI改善

### 完了条件
- [ ] 機能の実装完了
- [ ] テストの作成・実行
- [ ] ドキュメントの更新
- [ ] レビューの完了
- [ ] マージの完了 