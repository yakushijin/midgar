# laravel/react初期設定
※初めてプロジェクトを作成するときのみ実施
```sh
#composer
ln -s /usr/bin/php74 /usr/bin/php
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

#laravel
composer create-project laravel/laravel --prefer-dist /var/www/webport "6.0.*" 
cd /var/www/webport
composer require laravel/ui 1.*
composer update
chmod -R 777 storage

#react
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
yum install -y nodejs
npm update -g
php artisan ui react --auth
npm install && npm run dev
npm install react-router-dom styled-components redux react-redux @material-ui/core @material-ui/icons
```

# gitクローン後初期設定
パッケージ管理ソフトインストール
```sh
#composer
ln -s /usr/bin/php74 /usr/bin/php
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

#nodejs
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
yum install -y nodejs
```

SMTPの設定（メールのテストを実施する場合必要）  
※適宜使用しているSMTPサーバを登録する
```sh
cp -p .env.example .env
vi .env
```
```sh
MAIL_HOST=[smtpサーバのホスト]
MAIL_USERNAME=[使用するメールのユーザ名]
MAIL_PASSWORD=[メールユーザのパスワード]
```

php、jsの各ライブラリインストール
```sh
cd /var/www/portweb/
composer install
npm install
cd ../../static/
npm install
```

APIキー設定
```sh
cd /var/www/portweb/
php artisan key:generate
```

DB構築
```sh
composer dump-autoload
php artisan migrate
#php artisan migrate:refresh --seed
```

storage設定
```sh
php artisan storage:link
chmod -R 777 storage/
```

jsビルド
```sh
#メインページ
npm run prod
#npm run watch-poll

#静的コンテンツページ
cd ../../static/
npm run build
#npm run dev
```

## laravelコマンド
DBリセット（テーブル再作成＆データ流し込み）
※絶対に開発環境以外でやらないこと
```sh
php artisan migrate:refresh --seed
```

マイグレーションファイル作成
```sh
tableName=
php artisan make:migration $tableName --create=$tableName
```

シーダーファイル作成
```sh
fileName=
php artisan make:seeder $fileName
```

composer dump-autoload

php artisan migrate:fresh
