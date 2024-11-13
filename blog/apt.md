# APT

[[toc]]

## 配置 {id=config}

### 设置代理 {id=95proxies}

```shell
vim /etc/apt/apt.conf.d/95proxies
```

```shell
Acquire::http::Proxy "http://172.25.25.4:13333";
```

### 仅使用 IPv4 {id=Acquire-ForceIPv4}

```shell
vim /etc/apt/apt.conf
```

```shell
Acquire::ForceIPv4 "true";
```

## Debian 切换源

::: code-group

```shell [阿里镜像]
cp /etc/apt/sources.list /etc/apt/sources.list.$(date +"%Y%m%d%H%M%S")

cat /etc/apt/sources.list
sed -i "s#deb.debian.org#mirrors.aliyun.com#" /etc/apt/sources.list
sed -i "s#security.debian.org#mirrors.aliyun.com#" /etc/apt/sources.list
cat /etc/apt/sources.list
apt update
```

```shell [腾讯镜像]
cp /etc/apt/sources.list /etc/apt/sources.list.$(date +"%Y%m%d%H%M%S")

cat /etc/apt/sources.list
sed -i "s#deb.debian.org#mirrors.tencent.com#" /etc/apt/sources.list
sed -i "s#security.debian.org#mirrors.tencent.com#" /etc/apt/sources.list
cat /etc/apt/sources.list
apt update
```

```shell [华为镜像]
cp /etc/apt/sources.list /etc/apt/sources.list.$(date +"%Y%m%d%H%M%S")

cat /etc/apt/sources.list
sed -i "s#deb.debian.org#mirrors.huaweicloud.com#" /etc/apt/sources.list
sed -i "s#security.debian.org#mirrors.huaweicloud.com#" /etc/apt/sources.list
cat /etc/apt/sources.list
apt update
```

:::

## Ubuntu 切换源

::: code-group

```shell [阿里镜像]
cp /etc/apt/sources.list /etc/apt/sources.list.$(date +"%Y%m%d%H%M%S")

cat /etc/apt/sources.list
sed -i "s#archive.ubuntu.com#mirrors.aliyun.com#" /etc/apt/sources.list
sed -i "s#security.ubuntu.com#mirrors.aliyun.com#" /etc/apt/sources.list
cat /etc/apt/sources.list
apt update
```

```shell [腾讯镜像]
cp /etc/apt/sources.list /etc/apt/sources.list.$(date +"%Y%m%d%H%M%S")

cat /etc/apt/sources.list
sed -i "s#archive.ubuntu.com#mirrors.tencent.com#" /etc/apt/sources.list
sed -i "s#security.ubuntu.com#mirrors.tencent.com#" /etc/apt/sources.list
cat /etc/apt/sources.list
apt update
```

```shell [华为镜像]
cp /etc/apt/sources.list /etc/apt/sources.list.$(date +"%Y%m%d%H%M%S")

cat /etc/apt/sources.list
sed -i "s#archive.ubuntu.com#mirrors.huaweicloud.com#" /etc/apt/sources.list
sed -i "s#security.ubuntu.com#mirrors.huaweicloud.com#" /etc/apt/sources.list
cat /etc/apt/sources.list
apt update
```

:::

## 关闭自动更新 {id=unattended-upgrades}

::: code-group

```shell [禁用指定更新]
vim /etc/apt/apt.conf.d/50unattended-upgrades

Unattended-Upgrade::Allowed-Origins {
  
  # 注释掉不想更新的软件
  
}

sudo systemctl stop unattended-upgrades
```

:::

::: code-group

```shell [停止 unattended-upgrades]
sudo systemctl disable unattended-upgrades
```

:::

::: code-group

```shell [关闭 unattended-upgrades 开机自启]
sudo systemctl disable unattended-upgrades
```

:::
