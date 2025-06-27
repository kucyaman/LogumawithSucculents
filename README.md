# Laravel + React + MySQL Docker プロジェクト
## AI駆動開発　
- cursorを使用
- Reactを導入し学習と並行で開発
- 以前作成したLoguaをブラッシュアップ
- - https://github.com/kucyaman/LogumawithSucculentsJavaJspServlet
- - https://github.com/kucyaman/LogumawithSucculentsLaravel
- - https://github.com/kucyaman/Loguma_with_Succulents_ver1

## プロジェクトルール
- フロントエンドのUIコンポーネントにはMUI（Material-UI）を使用すること

このプロジェクトは、Dockerを使用してLaravel（バックエンド）、React（フロントエンド）、MySQL（データベース）の開発環境を構築します。

## 構成

- **Laravel**: PHP 8.2 + Nginx (ポート: 8000)
- **React**: Node.js 18 + TypeScript (ポート: 3000)
- **MySQL**: MySQL 8.0 (ポート: 3306)

## 前提条件

- Docker Desktop
- Windows 10/11 (winget対応)

## セットアップ

### 1. Node.jsのインストール

Windowsではwingetを使用してNode.jsをインストールします：

```bash
winget install OpenJS.NodeJS
```

インストール後、PowerShellの実行ポリシーを変更します：

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. Reactプロジェクトの初期化

```bash
cd front
npx create-react-app . --template typescript --yes
cd ..
```

### 3. プロジェクトをビルド

```bash
docker-compose build
```

### 4. コンテナを起動

```bash
docker-compose up -d
```

### 5. Laravelの初期設定

```bash
# Laravelコンテナに入る
docker-compose exec laravel bash

# アプリケーションキーを生成
php artisan key:generate

# データベースマイグレーションを実行
php artisan migrate

# コンテナから出る
exit
```

## アクセス方法

- **React (フロントエンド)**: http://localhost:3000
- **Laravel (バックエンド)**: http://localhost:8000
- **MySQL**: localhost:3306

## データベース設定

- **データベース名**: laravel_db
- **ユーザー名**: laravel_user
- **パスワード**: laravel_password
- **ルートパスワード**: root_password

## 開発用コマンド

### Laravel関連

```bash
# Laravelコンテナに入る
docker-compose exec laravel bash

# マイグレーション実行
php artisan migrate

# シーダー実行
php artisan db:seed

# キャッシュクリア
php artisan cache:clear
```

### React関連

```bash
# Reactコンテナに入る
docker-compose exec react sh

# 新しいパッケージをインストール
npm install package-name

# ビルド
npm run build
```

### 開発時の注意点

- Reactアプリはホットリロード対応です。`front/src`内のファイルを編集すると、ブラウザで自動的に更新されます。
- `node_modules`はコンテナ内で管理されるため、ホスト側の変更は反映されません。

## 停止・削除

```bash
# コンテナを停止
docker-compose down

# コンテナとボリュームを削除
docker-compose down -v
```

## ファイル構成

```
testPjt/
├── back/
│   ├── Dockerfile          # Laravel用Dockerfile
│   └── nginx.conf          # Nginx設定
├── front/
│   ├── src/                # Reactソースコード
│   ├── public/             # 静的ファイル
│   ├── package.json        # npm依存関係
│   └── Dockerfile          # React用Dockerfile
├── docker-compose.yml      # メインのDocker Compose設定
└── README.md              # このファイル
```

## トラブルシューティング

### Reactアプリが起動しない場合

1. Node.jsが正しくインストールされているか確認：
   ```bash
   node --version
   npm --version
   ```

2. Reactプロジェクトが正しく初期化されているか確認：
   ```bash
   ls front/
   # package.json, src/, public/ が存在することを確認
   ```

3. コンテナのログを確認：
   ```bash
   docker-compose logs react
   ```

### PowerShellの実行ポリシーエラー

npmコマンドで実行ポリシーエラーが発生した場合：
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
``` 