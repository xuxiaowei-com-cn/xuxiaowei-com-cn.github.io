# 源码安装 OpenSSL {id=openssl}

[[toc]]

## 源码仓库 {id=openssl-repo}

- [GitHub](https://github.com/openssl/openssl)
    - [下载地址](https://github.com/openssl/openssl/releases)
- [作者云盘](https://xuxiaowei-my.sharepoint.com/:f:/g/personal/share_xuxiaowei_com_cn/EiBVhzqKnSdLpR42bKUXVUABzwfjjWcrl2EM25WlEgUOrQ)
    - 在文件夹 `openssl/openssl/releases/download` 中找到自己需要的版本

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
    - [GitHub: OpenSSL_1_1_1w INSTALL](https://github.com/openssl/openssl/blob/OpenSSL_1_1_1w/INSTALL#L80)
- 根据仓库源码中的文档可知，需要使用以下命令才能安装
    ```shell
    ./config
    make
    make test
    make install
    ```

### 下载源码 {id=centos-openssl-build-1.1.1w-download}

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

### 解压源码 {id=centos-openssl-build-1.1.1w-tar}

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

### 可选安装 perl {id=centos-openssl-build-1.1.1w-install-perl}

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

### 可选安装 gcc {id=centos-openssl-build-1.1.1w-install-gcc}

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

### 完整安装命令 {id=centos-openssl-build-1.1.1w-full}

::: code-group

```shell
yum -y install perl gcc
./config
make && make install
openssl version
```

:::

### 安装完成配置 /etc/ld.so.conf {id=centos-openssl-build-1.1.1w-etc-ld.so.conf}

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

## CentOS 系列编译安装 3.4.0 {id=centos-openssl-install-3.4.0}

### 说明 {id=centos-openssl-install-3.4.0-desc}

::: warning 警告

1. `CentOS` `7.9.2009` 的安装源中，截止 `2024-12-04` `yum` 只能下载到 `OpenSSL` `1.0.2k-fips`

:::

- 源码文档
    - [GitHub: 3.4.0 INSTALL](https://github.com/openssl/openssl/blob/openssl-3.4.0/INSTALL.md#building-openssl)
- 根据仓库源码中的文档可知，需要使用以下命令才能安装
    ```shell
    ./Configure
    make
    make test
    make install
    ```

### 下载源码 {id=centos-openssl-build-3.4.0-download}

::: code-group

```shell [使用 curl 下载]
curl -L -o openssl-3.4.0.tar.gz https://github.com/openssl/openssl/releases/download/openssl-3.4.0/openssl-3.4.0.tar.gz
ls -lh openssl-3.4.0.tar.gz
```

```shell [使用 wget 下载]
wget -o openssl-3.4.0.tar.gz https://github.com/openssl/openssl/releases/download/openssl-3.4.0/openssl-3.4.0.tar.gz
ls -lh openssl-3.4.0.tar.gz
```

:::

### 解压源码 {id=centos-openssl-build-3.4.0-tar}

::: code-group

```shell [解压]
# yum -y install tar
tar -zxvf openssl-3.4.0.tar.gz
```

:::

::: code-group

```shell [进入解压后的目录]
cd openssl-3.4.0
```

:::

### 可选安装 perl {id=centos-openssl-build-3.4.0-install-perl}

::: code-group

```shell [执行 ./Configure 时报错]
[root@centos7-9 openssl-3.4.0]# ./Configure 
/usr/bin/env: perl: No such file or directory
[root@centos7-9 openssl-3.4.0]# 
```

:::

::: code-group

```shell [安装 ./Configure 命令所需依赖]
yum -y install perl

# 安装完成，即可正常执行 ./Configure 命令
```

:::

### 可选安装 perl-IPC-Cmd {id=centos-openssl-build-3.4.0-install-perl-IPC-Cmd}

::: code-group

```shell [执行 ./Configure 时报错]
[root@centos7-9 openssl-3.4.0]# ./Configure 
Can't locate IPC/Cmd.pm in @INC (@INC contains: /root/openssl-3.4.0/util/perl /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 . /root/openssl-3.4.0/external/perl/Text-Template-1.56/lib) at /root/openssl-3.4.0/util/perl/OpenSSL/config.pm line 19.
BEGIN failed--compilation aborted at /root/openssl-3.4.0/util/perl/OpenSSL/config.pm line 19.
Compilation failed in require at ./Configure line 23.
BEGIN failed--compilation aborted at ./Configure line 23.
[root@centos7-9 openssl-3.4.0]# 
```

:::

::: code-group

```shell [安装 ./Configure 命令所需依赖]
yum -y install perl-IPC-Cmd

# 安装完成，即可正常执行 ./Configure 命令
```

:::

### 可选安装 gcc {id=centos-openssl-build-3.4.0-install-gcc}

::: code-group

```shell [执行 ./Configure 时报错]
[root@centos7-9 openssl-3.4.0]# ./Configure

Failure!  build file wasn't produced.
Please read INSTALL.md and associated NOTES-* files.  You may also have to
look over your available compiler tool chain or change your configuration.

ERROR!
No C compiler found, please specify one with the environment variable CC,
or configure with an explicit configuration target.
[root@centos7-9 openssl-3.4.0]# 
```

:::

::: code-group

```shell [安装 ./Configure 命令所需依赖]
yum -y install gcc

# 安装完成，即可正常执行 ./Configure 命令
```

:::

### 可选安装 perl-Data-Dumper {id=centos-openssl-build-3.4.0-install-perl-Data-Dumper}

::: code-group

```shell [执行 make 时报错]
[root@centos7-9 openssl-3.4.0]# make
/usr/bin/perl util/mkinstallvars.pl PREFIX=. BINDIR=apps APPLINKDIR=ms LIBDIR= INCLUDEDIR=include "INCLUDEDIR=./include" ENGINESDIR=engines MODULESDIR=providers "VERSION=3.4.0" "LDLIBS=-ldl -pthread " > builddata.pm
DEBUG: all keys: APPLINKDIR, BINDIR, CMAKECONFIGDIR, ENGINESDIR, INCLUDEDIR, LDLIBS, LIBDIR, MODULESDIR, PKGCONFIGDIR, PREFIX, VERSION, libdir
No value given for CMAKECONFIGDIR
No value given for PKGCONFIGDIR
No value given for libdir
DEBUG: PREFIX = . => PREFIX = /root/openssl-3.4.0
DEBUG: libdir = . => libdir = /root/openssl-3.4.0
DEBUG: BINDIR = apps => BINDIR = /root/openssl-3.4.0/apps, BINDIR_REL_PREFIX = apps
DEBUG: LIBDIR =  => LIBDIR = /root/openssl-3.4.0, LIBDIR_REL_PREFIX = 
DEBUG: INCLUDEDIR = [ include, ./include ] => INCLUDEDIR = [ /root/openssl-3.4.0/include, /root/openssl-3.4.0/include ], INCLUDEDIR_REL_PREFIX = [ include, ./include ]
DEBUG: APPLINKDIR = ms => APPLINKDIR = /root/openssl-3.4.0/ms, APPLINKDIR_REL_PREFIX = ms
DEBUG: ENGINESDIR = engines => ENGINESDIR = /root/openssl-3.4.0/engines, ENGINESDIR_REL_LIBDIR = engines
DEBUG: MODULESDIR = providers => MODULESDIR = /root/openssl-3.4.0/providers, MODULESDIR_REL_LIBDIR = providers
DEBUG: PKGCONFIGDIR = . => PKGCONFIGDIR = /root/openssl-3.4.0, PKGCONFIGDIR_REL_LIBDIR = .
DEBUG: CMAKECONFIGDIR = . => CMAKECONFIGDIR = /root/openssl-3.4.0, CMAKECONFIGDIR_REL_LIBDIR = .
/usr/bin/perl "-I." "-Mconfigdata" "-Mbuilddata" "util/dofile.pl" "-oMakefile" exporters/cmake/OpenSSLConfig.cmake.in > OpenSSLConfig.cmake
Can't locate Data/Dumper.pm in @INC (@INC contains: Configurations . /root/openssl-3.4.0/util/../Configurations /root/openssl-3.4.0/util/perl /root/openssl-3.4.0/Configurations /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 /root/openssl-3.4.0/external/perl/Text-Template-1.56/lib /root/openssl-3.4.0/util/../external/perl/Text-Template-1.56/lib) at exporters/cmake/OpenSSLConfig.cmake.in line 5.
BEGIN failed--compilation aborted at exporters/cmake/OpenSSLConfig.cmake.in line 5.
make: *** [OpenSSLConfig.cmake] Error 1
[root@centos7-9 openssl-3.4.0]# 
```

:::

::: code-group

```shell [安装 make 命令所需依赖]
yum -y install perl-Data-Dumper

# 安装完成，即可正常执行 make 命令
```

:::

### 完整安装命令 {id=centos-openssl-build-3.4.0-full}

::: code-group

```shell
yum -y install perl perl-IPC-Cmd perl-Data-Dumper gcc
make && make install
openssl version
```

:::

### 安装完成配置 /etc/ld.so.conf {id=centos-openssl-build-3.4.0-etc-ld.so.conf}

::: code-group

```shell [执行 openssl version 时报错]
[root@centos7-9 openssl-3.4.0]# openssl version
openssl: error while loading shared libraries: libssl.so.3: cannot open shared object file: No such file or directory
[root@centos7-9 openssl-3.4.0]# 
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
[root@centos7-9 openssl-3.4.0]# openssl version
OpenSSL 3.4.0 22 Oct 2024 (Library: OpenSSL 3.4.0 22 Oct 2024)
[root@centos7-9 openssl-3.4.0]# 
```

:::
