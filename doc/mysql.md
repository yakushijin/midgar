# mysql設定

```sh
#mariaDB削除
yum remove -y mariadb-libs

#デフォルトmysqlモジュール無効化
yum -y module disable mysql

#インストール
yum -y install https://dev.mysql.com/get/mysql80-community-release-el8-1.noarch.rpm
yum install -y mysql-community-server mysql-community-devel

#mysql認証方法変更
sed -i -e "/# default-authentication-plugin=mysql_native_password/a default-authentication-plugin=mysql_native_password" /etc/my.cnf

#自動起動
systemctl enable mysqld.service

#conf設定
echo "max_connections        = 100" >> /etc/my.cnf

#起動
systemctl start mysqld.service

#root初期パスワード表示
grep password /var/log/mysqld.log

#接続
mysql_secure_installation
#初期パスワードでログイン、その後、新パスワードを設定。
#（新パスワード例）devPassword1!

#mysqlにログイン
mysql -u root -p
```

```sql
CREATE DATABASE dev_app_db character set utf8 collate utf8_bin;
CREATE USER dev_app_db@localhost IDENTIFIED WITH mysql_native_password BY 'devappPassword1!';
GRANT ALL ON dev_app_db.* TO dev_app_db@localhost;
--※開発用
--CREATE USER dev@'%' IDENTIFIED WITH mysql_native_password BY 'devPassword1!';
--GRANT ALL ON *.* TO dev@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
exit
```
