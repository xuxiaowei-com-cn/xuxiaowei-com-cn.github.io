# 源码安装 OpenSSH {id=openssh}

[[toc]]

## 源码仓库 {id=openssh-repo}

- [GitHub](https://github.com/openssh/openssh-portable)
    - [下载地址](https://github.com/openssh/openssh-portable/tags)
- [作者自建 GitLab](https://gitlab.xuxiaowei.com.cn/mirrors/github.com/openssh/openssh-portable)
    - [下载地址](https://gitlab.xuxiaowei.com.cn/mirrors/github.com/openssh/openssh-portable/-/tags)

## 说明 {id=openssh-desc}

::: warning 警告

1. 原则上 `仅安装必要的软件`（`最小化安装所需软件`，`对系统影响最小`）

:::

- 源码文档
    - [GitHub: building-from-git](https://github.com/openssh/openssh-portable?#building-from-git)
    - [作者自建 GitLab: building-from-git](https://gitlab.xuxiaowei.com.cn/mirrors/github.com/openssh/openssh-portable#building-from-git)
- 根据仓库源码中的文档可知，需要使用以下命令才能安装
    ```shell
    autoreconf
    ./configure
    make && make install
    ```

## CentOS 系列编译安装 {id=centos-openssh-build}

- 本示例以 `CentOS` `7.9.2009`、`OpenSSH` `V_9_3_P2` 为例

::: warning 警告

1. `CentOS` `7.9.2009` 的安装源中，截止 `2024-12-04` 只能下载到 `OpenSSL` `1.0.2k-fips`
2. `OpenSSH` `V_9_3_P2` 以后的版本（不包含）所需 `OpenSSL` 最低要求 `1.1.1`
3. 如果要安装 `OpenSSH` `V_9_3_P2` 以后的版本（不包含），可根据 [openssl.md](openssl.md) 安装 `OpenSSL` `1.1.1w`
    - 注意：`CentOS` `7.9.2009` 不支持 `OpenSSH` `V_9_9_P1` 及之后的版本

:::

### 下载源码 {id=centos-openssh-build-download}

- 下载所需安装版本的标签即可

### 解压 {id=centos-openssh-build-tar}

::: code-group

```shell [解压]
# yum -y install tar
tar -zxvf openssh-portable-V_9_3_P2.tar.gz
```

:::

::: code-group

```shell [进入解压后的目录]
cd openssh-portable-V_9_3_P2
```

:::

### 可选安装 autoconf {id=centos-openssh-build-install-autoconf}

::: code-group

```shell [执行 autoreconf 时报错]
[root@centos7-9 openssh-portable-V_9_3_P2]# autoreconf
-bash: autoreconf: command not found
[root@centos7-9 openssh-portable-V_9_3_P2]# 
```

:::

::: code-group

```shell [安装 autoreconf 命令所需依赖]
yum -y install autoconf

# 安装完成，即可正常执行 autoreconf 命令
```

:::

### 可选安装 automake {id=centos-openssh-build-install-automake}

::: code-group

```shell [执行 autoreconf 时报错]
[root@centos7-9 openssh-portable-V_9_3_P2]# autoreconf
Can't exec "aclocal": No such file or directory at /usr/share/autoconf/Autom4te/FileUtils.pm line 326.
autoreconf: failed to run aclocal: No such file or directory
[root@centos7-9 openssh-portable-V_9_3_P2]# 
```

:::

::: code-group

```shell [安装 autoreconf 命令所需依赖]
yum -y install automake

# 安装完成，即可正常执行 autoreconf 命令
```

:::

### 可选安装 gcc {id=centos-openssh-build-install-gcc}

::: code-group

```shell [执行 ./configure 时报错] 
[root@centos7-9 openssh-portable-V_9_3_P2]# ./configure 
checking for cc... no
checking for gcc... no
checking for clang... no
configure: error: in `/root/openssh-portable-V_9_3_P2':
configure: error: no acceptable C compiler found in $PATH
See `config.log' for more details
[root@centos7-9 openssh-portable-V_9_3_P2]# 
```

:::

::: code-group

```shell [安装 ./configure 命令所需依赖]
yum -y install gcc

# 安装完成，即可正常执行 ./configure 命令
```

:::

### 可选安装 zlib-devel {id=centos-openssh-build-install-zlib-devel}

::: code-group

```shell [执行 ./configure 时报错] 
[root@centos7-9 openssh-portable-V_9_3_P2]# ./configure 

......

configure: error: *** zlib.h missing - please install first or check config.log ***
[root@centos7-9 openssh-portable-V_9_3_P2]# 
```

:::

::: code-group

```shell [安装 ./configure 命令所需依赖]
yum -y install zlib-devel

# 安装完成，即可正常执行 ./configure 命令
```

:::

### 可选安装 openssl-devel {id=centos-openssh-build-install-openssl-devel}

::: code-group

```shell [执行 ./configure 时报错] 
[root@centos7-9 openssh-portable-V_9_3_P2]# ./configure 

......

checking for openssl... /usr/bin/openssl
configure: error: *** working libcrypto not found, check config.log
[root@centos7-9 openssh-portable-V_9_3_P2]# 
```

:::

::: code-group

```shell [安装 ./configure 命令所需依赖]
yum -y install openssl-devel

# 安装完成，即可正常执行 ./configure 命令
```

:::

### 完整安装命令 {id=centos-openssh-build-full}

::: code-group

```shell [不包含测试：耗时短]
yum -y install autoconf automake gcc zlib-devel openssl-devel
autoreconf
./configure
make && make install
source /etc/profile
ssh -V
```

```shell [包含测试：耗时长]
yum -y install autoconf automake gcc zlib-devel openssl-devel
autoreconf
./configure
make && make tests && make install
source /etc/profile
ssh -V
```

:::
