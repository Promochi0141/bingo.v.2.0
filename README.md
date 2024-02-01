# β版

# 開発環境立ち上げ

開発環境立ち上げ中、以下の記事のようなエラーにあった。nodeのバージョン下げて記事のコマンド打ったら何とかなった

https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e

参考：開発者のバージョン：node20.11.0、npm10.4.0、PHP8、Laravel10.42.0


### 具体的なコマンド
```bash
# このリポジトリをクローン
# このリポジトリをクローンした場所にカレントディレクトリを移動

# 必要なパッケージをインストール
$ npm install
$ composer install

# sailを利用したコンテナ立ち上げ
# 参照URL：https://readouble.com/laravel/9.x/ja/sail.html

# エイリアス化（今のコンソールを抜けるとリセットされる）
$ alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'

# sail ~ でコンテナ内に直接命令を送れる

$ sail up -d
$ sail npm install
$ sail composer install
$ sail cp .env.example .env
$ sail php artisan key:generate
$ sail php artisan migrate
$ sail npm run dev

# 終了させたいときはCtrl+Cとsail down
```

# 認証について
`database/migrations/2014_10_12_000000_create_users_table`で変更可能
`sail php artisan migrate:fresh`で初めて変更が反映される。
register用のルーティングは消してあるので、ブラウザを通じて管理者登録はできない。

デフォルト値は
```php
'name' => 'your_name',
'email' => 'your_email@test.com',
'password' => Hash::make('your_password'),
```

# ルーティングについて
`localhost/`に来場客用のページを、`localhost/admin`に管理者用ページを配置

# 年度、リンクの書き換え
`localhost/`のリンクなどの編集は`resources/js/Components/NavHomepage.jsx`と`resources/js/Layouts/VisitorFooter.jsx`に対して行って下さい。
