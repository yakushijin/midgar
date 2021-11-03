FROM php:7.4-fpm-alpine AS php-runtime

USER root

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN set -eux \
    && apk add --update --no-cache tzdata nginx supervisor curl git autoconf g++ libtool make libzip-dev libpng-dev libjpeg-turbo-dev freetype-dev \
    && pecl install redis \
    && docker-php-ext-configure gd --with-jpeg=/usr \
    && docker-php-ext-configure opcache --enable-opcache \
    && docker-php-ext-install opcache bcmath pdo_mysql gd exif zip \
    && docker-php-ext-enable redis \
    && apk del autoconf g++ libtool make \
    && rm -f /etc/nginx/conf.d/default.conf \
    && rm -rf /tmp/*

ENV TZ=Asia/Tokyo

# 【オプション】
# 必要に応じて DEBUG="install" を与える
ARG DEBUG=""
ARG TEST=""
RUN set -eux \
    && apk add --update --no-cache autoconf g++ libtool make \
    && if [ "$DEBUG" = "install" ]; then \
    pecl install xdebug && docker-php-ext-enable xdebug \
    && apk add --update --no-cache npm graphviz \
    && curl -O https://noto-website.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip \
    && mkdir -p /usr/share/fonts/NotoSansCJKjp \
    && unzip NotoSansCJKjp-hinted.zip -d /usr/share/fonts/NotoSansCJKjp/ \
    && rm NotoSansCJKjp-hinted.zip \
    && fc-cache -fv ;\
    fi \
    && if [ "$TEST" = "install" ]; then \
    pecl install pcov && docker-php-ext-enable pcov ;\
    fi \
    && apk del autoconf g++ libtool make \
    && rm -rf /tmp/*

# Configure nginx
COPY docker/config/nginx.conf /etc/nginx/nginx.conf

# Configure PHP-FPM
COPY docker/config/php.ini /etc/php7/conf.d/custom.ini

RUN mkdir -p /var/run/php-fpm/ \
    && sed -i "s/user = www-data/user = nobody/" /usr/local/etc/php-fpm.d/www.conf \
    && sed -i "s/group = www-data/group = nobody/" /usr/local/etc/php-fpm.d/www.conf \
    && sed -i "s/expose_php = On/expose_php = Off/" /usr/local/etc/php/php.ini-development \
    && sed -i "s/;catch_workers_output = yes/catch_workers_output = yes/g" /usr/local/etc/php-fpm.d/www.conf \
    && sed -i "s/listen = 127.0.0.1:9000/listen = \/var\/run\/php-fpm\/php-fpm.sock/g" /usr/local/etc/php-fpm.d/www.conf \
    && sed -i "s/listen = 9000/listen = \/var\/run\/php-fpm\/php-fpm.sock/g" /usr/local/etc/php-fpm.d/zz-docker.conf \
    && sed -i "s/;listen.owner = www-data/listen.owner = nobody/g" /usr/local/etc/php-fpm.d/www.conf \
    && sed -i "s/;listen.group = nginx/listen.group = nobody/g" /usr/local/etc/php-fpm.d/www.conf \
    && sed -i "s/;listen.mode = 0660/listen.mode = 0660/g" /usr/local/etc/php-fpm.d/www.conf

# Configure supervisord
COPY docker/config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

WORKDIR /var/www/portweb

FROM php-runtime AS app-mounted

# Expose the port nginx is reachable on
EXPOSE 80

# Make sure files/folders needed by the processes are accessable when they run under the nobody user
RUN chown -R nobody.nobody /var/www/portweb && \
    chown -R nobody.nobody /run && \
    chown -R nobody.nobody /var/lib/nginx && \
    chown -R nobody.nobody /var/log/nginx

# Switch to use a non-root user from here on
USER nobody

# Let supervisord start nginx & php-fpm
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

FROM app-mounted AS app-bundled

# Composer 依存パッケージ定義のコピー
COPY src/portweb/composer.* /var/www/portweb/

# Composer 依存パッケージをアプリケーションから分離して先にインストール（ビルド時間短縮のため）
RUN composer install --working-dir=/var/www/portweb --no-scripts --no-autoloader --no-dev

# アプリケーションのコードをコピー（.dockerignore で vendor や .git は除外されている）
COPY src /var/www

USER root
# オートロードファイルの生成とストレージディレクトリのパーミッションの変更
RUN mkdir -p /var/www/portweb/storage /var/www/portweb/bootstrap/cache \
    && set -eux \
    && composer dump-autoload --optimize --working-dir=/var/www/portweb \
    && php artisan config:cache \
    && chmod -R a=rwX /var/www/portweb/storage /var/www/portweb/bootstrap/cache

USER nobody
