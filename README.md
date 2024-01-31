# 開発段階、最小限、番号表示機能だけ付けれたから公開

# 開発環境立ち上げ

開発環境立ち上げ中、以下の記事のようなエラーにあった。nodeのバージョン下げて記事のコマンド打ったら何とかなった

https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e

参考：開発者のバージョン：node20.11.0、npm10.4.0、PHP8、Laravel10.42.0


### 具体的なコマンド
```
// このリポジトリをクローン
// このリポジトリをクローンした場所にカレントディレクトリを移動

// 必要なパッケージをインストール
npm install
composer install

// sailを利用したコンテナ立ち上げ
// 参照URL：https://readouble.com/laravel/9.x/ja/sail.html
./vendor/bin/sail up -d
./vendor/bin/sail npm install
./vendor/bin/sail composer install
./vendor/bin/sail php artisan migrate
./vendor/bin/sail npm run dev
```

# 認証について
`database/migrations/2014_10_12_000000_create_users_table`で変更可能
`./vendor/bin/sail php artisan migrate:fresh`で初めて変更が反映される。
register用のルーティングは消してあるので、ブラウザを通じて管理者登録はできない。

デフォルト値は
```
'name' => 'your_name',
'email' => 'your_email@test.com',
'password' => Hash::make('your_password'),
```

# ルーティングについて
'(ドメイン名)/'に来場客用のページを、'(ドメイン名)/admin'に管理者用ページを配置する予定
