# Loguma with Succulents データベーススキーマ

## ER図

```mermaid
erDiagram
    users {
        bigint id PK
        string name
        string email UK
        timestamp email_verified_at
        string password
        string remember_token
        bigint prefecture_id FK
        timestamp created_at
        timestamp updated_at
    }

    areas {
        bigint id PK
        string name
        string slug UK
        timestamp created_at
        timestamp updated_at
    }

    prefectures {
        bigint id PK
        bigint area_id FK
        string name
        string slug UK
        timestamp created_at
        timestamp updated_at
    }

    genera {
        bigint id PK
        string name UK
        timestamp created_at
        timestamp updated_at
    }

    actions {
        bigint id PK
        string name
        text description
        timestamp created_at
        timestamp updated_at
    }

    reports {
        bigint id PK
        string cultivar
        string image
        text description
        tinyint season
        bigint user_id FK
        bigint genus_id FK
        tinyint visibility
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
    }

    logs {
        bigint id PK
        date date
        text note
        bigint user_id FK
        bigint action_id FK
        timestamp created_at
        timestamp updated_at
    }

    follows {
        bigint id PK
        bigint follower_id FK
        bigint followed_id FK
        timestamp created_at
        timestamp updated_at
    }

    likes {
        bigint id PK
        bigint user_id FK
        bigint report_id FK
        timestamp created_at
        timestamp updated_at
    }

    %% リレーションシップ
    users ||--o{ reports : "creates"
    users ||--o{ logs : "creates"
    users ||--o{ follows : "follows"
    users ||--o{ follows : "is_followed_by"
    users ||--o{ likes : "likes"
    users }o--|| prefectures : "lives_in"
    
    areas ||--o{ prefectures : "contains"
    prefectures ||--o{ users : "has_residents"
    
    genera ||--o{ reports : "categorizes"
    
    actions ||--o{ logs : "performed_in"
    
    reports ||--o{ likes : "receives"
    reports }o--|| genera : "belongs_to"
    reports }o--|| users : "created_by"
    
    logs }o--|| actions : "records"
    logs }o--|| users : "created_by"
    
    follows }o--|| users : "follower"
    follows }o--|| users : "followed"
    
    likes }o--|| users : "liked_by"
    likes }o--|| reports : "liked_report"
```

## テーブル詳細

### users（ユーザー）
- アプリケーションのユーザー情報
- 都道府県との関連付け

### areas（エリア）
- 地域区分（関東、関西など）
- 都道府県のグループ化

### prefectures（都道府県）
- 日本の都道府県情報
- エリアとの関連付け

### genera（属）
- 多肉植物の属分類
- レポートの分類に使用

### actions（アクション）
- お手入れの種類（水やり、植え替えなど）
- システム共通のアクション定義

### reports（レポート）
- 多肉植物の投稿・レポート
- 属、ユーザー、可視性設定
- ソフトデリート対応

### logs（ログ）
- お手入れの記録
- 日付、アクション、メモ
- ユーザーがアクションを実行した記録

### follows（フォロー）
- ユーザー間のフォロー関係
- 重複防止のユニーク制約

### likes（いいね）
- レポートへのいいね
- 重複防止のユニーク制約

## インデックス

- `users.email` - ユニーク
- `users.prefecture_id` - 外部キー
- `areas.slug` - ユニーク
- `prefectures.slug` - ユニーク
- `prefectures.area_id` - 外部キー
- `genera.name` - ユニーク
- `reports.user_id` - 外部キー
- `reports.genus_id` - 外部キー
- `logs.user_id` - 外部キー
- `logs.action_id` - 外部キー
- `follows.follower_id` - 外部キー
- `follows.followed_id` - 外部キー
- `follows.follower_id_followed_id` - ユニーク複合
- `likes.user_id` - 外部キー
- `likes.report_id` - 外部キー
- `likes.user_id_report_id` - ユニーク複合 