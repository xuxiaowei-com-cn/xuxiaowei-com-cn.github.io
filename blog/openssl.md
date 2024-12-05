# 源码安装 OpenSSL {id=openssl}

[[toc]]

## 源码仓库 {id=openssl-repo}

- [GitHub](https://github.com/openssl/openssl)
    - [下载地址](https://github.com/openssl/openssl/tags)

## 说明 {id=openssl-desc}

::: warning 警告

1. 原则上 `仅安装必要的软件`（`最小化安装所需软件`，`对系统影响最小`）

:::

## CentOS 系列编译安装 1.1.1w {id=centos-openssl-install-1.1.1w}

### 说明 {id=centos-openssl-install-1.1.1w-desc}

::: warning 警告

1. `CentOS` `7.9.2009` 的安装源中，截止 `2024-12-04` `yum` 只能下载到 `OpenSSL` `1.0.2k-fips`

:::

- 源码文档
    - [GitHub: INSTALL](https://github.com/openssl/openssl/blob/OpenSSL_1_1_1w/INSTALL#L80)
- 根据仓库源码中的文档可知，需要使用以下命令才能安装
    ```shell
    ./config
    make
    make test
    make install
    ```

### 下载源码 {id=centos-openssl-build-download}

::: code-group

```shell [使用 curl 下载]
curl -L -o openssl-1.1.1w.tar.gz https://github.com/openssl/openssl/releases/download/OpenSSL_1_1_1w/openssl-1.1.1w.tar.gz
ls -lh openssl-1.1.1w.tar.gz
```

```shell [使用 wget 下载]
wget -o openssl-1.1.1w.tar.gz https://github.com/openssl/openssl/releases/download/OpenSSL_1_1_1w/openssl-1.1.1w.tar.gz
ls -lh openssl-1.1.1w.tar.gz
```

:::

### 解压源码 {id=centos-openssl-build-tar}

::: code-group

```shell [解压]
# yum -y install tar
tar -zxvf openssl-1.1.1w.tar.gz
```

:::

::: code-group

```shell [进入解压后的目录]
cd openssl-1.1.1w
```

:::

### 可选安装 perl {id=centos-openssl-build-install-perl}

::: code-group

```shell [执行 ./config 时报错]
[root@centos7-9 openssl-1.1.1w]# ./config 
Operating system: x86_64-whatever-linux2
You need Perl 5.
[root@centos7-9 openssl-1.1.1w]# 
```

:::

::: code-group

```shell [安装 ./config 命令所需依赖]
yum -y install perl

# 安装完成，即可正常执行 ./config 命令
```

:::

### 可选安装 gcc {id=centos-openssl-build-install-gcc}

::: code-group

```shell [执行 make 时报错]
[root@centos7-9 openssl-1.1.1w]# make

......

/bin/sh: gcc: command not found
make[1]: *** [apps/app_rand.o] Error 127
make[1]: Leaving directory `/root/openssl-1.1.1w'
make: *** [all] Error 2
[root@centos7-9 openssl-1.1.1w]# 
```

:::

::: code-group

```shell [安装 make 命令所需依赖]
yum -y install gcc

# 安装完成，即可正常执行 make 命令
```

:::

### 完整安装命令 {id=centos-openssl-build-full}

::: code-group

```shell
yum -y install perl gcc
./config
make && make install
openssl version
```

:::

### 安装完成配置 /etc/ld.so.conf {id=centos-openssl-build-etc-ld.so.conf}

::: code-group

```shell [执行 openssl version 时报错]
[root@centos7-9 openssl-1.1.1w]# openssl version
openssl: error while loading shared libraries: libssl.so.1.1: cannot open shared object file: No such file or directory
[root@centos7-9 openssl-1.1.1w]#
```

:::

::: code-group

```shell [配置 /etc/ld.so.conf]
echo "/usr/local/lib64" > /etc/ld.so.conf.d/openssl.conf
ldconfig
```

:::

::: code-group

```shell [正常执行 openssl version]
[root@centos7-9 openssl-1.1.1w]# openssl version
OpenSSL 1.1.1w  11 Sep 2023
[root@centos7-9 openssl-1.1.1w]# 
```

:::
