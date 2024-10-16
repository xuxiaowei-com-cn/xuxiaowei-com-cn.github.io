# ClamAV® 是一个开源的防病毒引擎 {id=ClamAV}

- 用于检测特洛伊木马、病毒、恶意软件和其他恶意威胁

[[toc]]

## 链接 {id=link}

| 名称     | 网站                                    |
|--------|---------------------------------------|
| GitHub | https://github.com/Cisco-Talos/clamav |
| 官网     | https://www.clamav.net/               |
| 下载     | https://www.clamav.net/downloads      |
| 文档     | https://docs.clamav.net/              |

## 安装 {id=install}

::: code-group

```shell [CentOS 7]
yum -y install epel-release
yum -y install clamav

# 安装完成创建的 Linux Service
# /usr/lib/systemd/system/clamav-freshclam.service
# /usr/lib/systemd/system/clamav-clamonacc.service

# 更新病毒库
freshclam
```

```shell [CentOS 8、使用 yum 安装指定版本]
# 其中 1.4.1 代表 clamav 的版本号
# 可在 https://www.clamav.net/downloads、https://github.com/Cisco-Talos/clamav/releases 查看已发布的版本号
yum -y install https://www.clamav.net/downloads/production/clamav-1.4.1.linux.x86_64.rpm

# 生成 clamonacc、freshclam 所需配置文件
clamconf -g clamd.conf > /usr/local/etc/clamd.conf
clamconf -g freshclam.conf > /usr/local/etc/freshclam.conf

# 取消示例
sed -i '/^Example/s/^/#/' /usr/local/etc/clamd.conf
sed -i '/^Example/s/^/#/' /usr/local/etc/freshclam.conf
# 设置国内 病毒数据库地址
sed -i '1i\DatabaseMirror db.cn.clamav.net' /usr/local/etc/freshclam.conf
# 设置数据库所属用户
sed -i '1i\DatabaseOwner root' /usr/local/etc/freshclam.conf

# 更新 病毒数据库
freshclam
```

:::

## 扫描病毒 {id=clamscan}

::: code-group

```shell [递归扫描指定文件夹下的病毒]
# 递归扫描 / 文件夹下，最大递归深度 5，将结果输出到 /root/clamscan.log 文件中
# 扫描时间与文件数量正相关
clamscan -r / --max-dir-recursion=5 -l /root/clamscan.log
```

:::

::: code-group

```shell [查看结果中的病毒]
grep -i ' FOUND$' /root/clamscan.log
```

:::
