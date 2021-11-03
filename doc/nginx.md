# nginx

```sh
#インストール
yum install -y nginx

#SSL
mkdir -p /etc/nginx/ssl
chmod 700 /etc/nginx/ssl
cd /etc/nginx/ssl
openssl genrsa -out cert.key 2048
openssl req -subj '/CN=common_name.example.com/O=ORGANIZATION/C=JP' -new -key cert.key > cert.csr
openssl x509 -in cert.csr -days 3650 -req -signkey cert.key > cert.crt
```

グローバル設定ファイル編集
```sh
vi /etc/nginx/nginx.conf
```
```sh
user  nginx;
worker_processes auto;
worker_rlimit_nofile 100000;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
        worker_connections 65535;
        multi_accept on;
        use epoll;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;

    keepalive_timeout  65;

    server_tokens off;
    add_header X-Frame-Options SAMEORIGIN;
    add_header X-XSS-Protection "1; mode=block";
    client_max_body_size 10K;

    fastcgi_read_timeout 120;

    include /etc/nginx/conf.d/*.conf;
}
```

個別設定ファイル編集
```sh
vi /etc/nginx/conf.d/portweb.conf
```
```sh
server {
    listen 80;
    server_name localhost;
    return 301 https://$host$request_uri;
}

 server {
        listen 443;
        ssl on;
        ssl_certificate /etc/nginx/ssl/cert.crt;
        ssl_certificate_key /etc/nginx/ssl/cert.key;
        server_name localhost;
        client_max_body_size 128M;
        index index.php ;
        root /var/www/portweb/public;
        etag off;
        try_files $uri $uri/ /index.php?q=$uri&$args;

        location / {
           root   /var/www/portweb/public;
           index  index.html index.htm index.php;
           try_files $uri $uri/ /index.php?$args;
        }

        location ~ \.php$ {
                try_files $uri /index.php =404;
                fastcgi_pass unix:/var/run/php-fpm/php-fpm.sock;
                fastcgi_index index.php;
                fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
                include fastcgi_params;
        }
    }
```

再起動
```sh
systemctl enable nginx.service
systemctl restart nginx
```
