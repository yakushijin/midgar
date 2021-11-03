# php-fpm設定
```sh
#リポジトリ準備
yum install -y epel-release
yum -y install http://rpms.famillecollet.com/enterprise/remi-release-8.rpm

sed -i "/remi\/mirror/a enabled=1" /etc/yum.repos.d/remi.repo
sed -i '/enabled=1/{n;d;}' /etc/yum.repos.d/remi.repo

#php関連パッケージインストール
yum install -y php74-php-fpm php74-php-mysqlnd php74-php-pecl-zip php74-php php74-php-devel php74-php-mbstring php74-php-pdo php74-php-gd php74-php-xml php74-php-mcrypt php74-php-opcache

#パス設定
phppath="export PATH=/opt/remi/php74/root/usr/bin:/opt/remi/php74/root/usr/sbin\${PATH:+:\${PATH}}\nexport LD_LIBRARY_PATH=/opt/remi/php74/root/usr/lib64\${LD_LIBRARY_PATH:+:\${LD_LIBRARY_PATH}}\nexport MANPATH=/opt/remi/php74/root/usr/share/man:\${MANPATH}"
sed -i -e "/User specific environment and startup program/a ${phppath}" /root/.bash_profile

#conf設定
sed -i "s/user = apache/user = nginx/" /etc/opt/remi/php74/php-fpm.d/www.conf
sed -i "s/group = apache/group = nginx/" /etc/opt/remi/php74/php-fpm.d/www.conf

sed -i "s/pm.max_children = 50/pm.max_children = 200/" /etc/opt/remi/php74/php-fpm.d/www.conf
sed -i "s/pm.start_servers = 5/pm.start_servers = 50/" /etc/opt/remi/php74/php-fpm.d/www.conf
sed -i "s/pm.min_spare_servers = 5/pm.min_spare_servers = 20/" /etc/opt/remi/php74/php-fpm.d/www.conf
sed -i "s/pm.max_spare_servers = 35/pm.max_spare_servers = 100/" /etc/opt/remi/php74/php-fpm.d/www.conf
echo "listen.backlog = -1" >> /etc/opt/remi/php74/php-fpm.d/www.conf

sed -i "s/expose_php = On/expose_php = Off/" /etc/opt/remi/php74/php.ini
sed -i "s/ememory_limit = 128M/memory_limit = 1024M/" /etc/opt/remi/php74/php.ini
sed -i "s/upload_max_filesize = 2M/upload_max_filesize = 128M/" /etc/opt/remi/php74/php.ini
sed -i "s/post_max_size = 8M/post_max_size = 128M/" /etc/opt/remi/php74/php.ini

#ソケット通信用設定
mkdir /var/run/php-fpm/
echo "d /var/run/php-fpm 0755 nginx nginx -" > /usr/lib/tmpfiles.d/php-fpm.conf 
sed -i "s/listen = \/var\/opt\/remi\/php74\/run\/php-fpm\/www.sock/listen = \/var\/run\/php-fpm\/php-fpm.sock/g" /etc/opt/remi/php74/php-fpm.d/www.conf
sed -i "s/;listen.owner = nobody/listen.owner = nginx/g" /etc/opt/remi/php74/php-fpm.d/www.conf
sed -i "s/;listen.group = nobody/listen.group = nginx/g" /etc/opt/remi/php74/php-fpm.d/www.conf
sed -i "s/;listen.mode = 066/listen.mode = 066/g" /etc/opt/remi/php74/php-fpm.d/www.conf
sed -i "s/listen.acl_users/;listen.acl_users/g" /etc/opt/remi/php74/php-fpm.d/www.conf

#開発環境のみデバッグ設定
yum install -y php74-php-pecl-xdebug
echo "xdebug.remote_enable=on" >> /etc/opt/remi/php74/php.d/15-xdebug.ini
echo "xdebug.remote_host=host.docker.internal" >> /etc/opt/remi/php74/php.d/15-xdebug.ini
echo "xdebug.remote_autostart=on" >> /etc/opt/remi/php74/php.d/15-xdebug.ini
echo "xdebug.remote_handler=dbgp" >> /etc/opt/remi/php74/php.d/15-xdebug.ini
echo "xdebug.remote_port=9000" >> /etc/opt/remi/php74/php.d/15-xdebug.ini

#再起動
systemctl restart php74-php-fpm
systemctl enable php74-php-fpm.service
```