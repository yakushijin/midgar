# OSセットアップ

```sh
#リポジトリアップデート
yum -y update && yum clean all

#SElinux無効化
sed -i "s/\(^SELINUX=\).*/\1disabled/" /etc/selinux/config

#汎用ツールインストール
yum install -y net-tools dstat telnet traceroute tcpdump wget bind-utils nmap unzip

#ファイルディスクリプタ変更
echo "* soft nofile 65536" >> /etc/security/limits.conf
echo "* hard nofile 65536" >> /etc/security/limits.conf

#カーネルパラメータ変更
echo "vm.swappiness = 10" >> /etc/sysctl.conf
echo "net.core.somaxconn = 1024" >> /etc/sysctl.conf

#history設定変更
sed -i -e "s/HISTSIZE=1000/#HISTSIZE=1000/g" /etc/profile
sed -i -e "/#HISTSIZE=1000/a HISTSIZE=10000" /etc/profile
echo "HISTTIMEFORMAT='%F %T '" >> /etc/profile
echo "unset HISTCONTROL" >> /etc/profile
echo "export HISTSIZE HISTTIMEFORMAT" >> /etc/profile

#日本時間設定
echo 'ZONE="Asia/Tokyo"' > /etc/sysconfig/clock
rm -f /etc/localtime
ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

#日本語設定
yum -y install glibc-locale-source glibc-langpack-en
localedef -i /usr/share/i18n/locales/ja_JP -f UTF-8 /usr/lib/locale/ja_JP.UTF-8
```