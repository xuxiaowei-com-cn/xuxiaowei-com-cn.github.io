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
