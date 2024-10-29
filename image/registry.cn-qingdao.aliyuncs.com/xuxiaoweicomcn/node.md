# Node 镜像 {id=node}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `node` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/node)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/nodejs/node/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                           | 说明                                               |
|--------------------------------------------------------------|--------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:20.18.0 | 20.18.0 代表版本号，支持：amd64、arm、arm64、ppc64le、s390x平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:20.15.0 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:20.12.0 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:18.20.3 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:16.20.2 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:16.19.1 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.21.3 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.17.5 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.17.0 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.16.1 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.16.0 |                                                  |

::: code-group

```shell [20.x]
sudo docker run \
  -itd \
  --restart always \
  --name node-20.15.0 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:20.15.0
```

```shell [18.x]
sudo docker run \
  -itd \
  --restart always \
  --name node-18.20.3 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:18.20.3
```

```shell [16.x]
sudo docker run \
  -itd \
  --restart always \
  --name node-16.20.2 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:16.20.2
```

```shell [14.x]
sudo docker run \
  -itd \
  --restart always \
  --name node-14.21.3 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.21.3
```

:::

::: code-group

```shell [使用阿里云镜像]
cat /etc/apt/sources.list
sed -i "s#deb.debian.org#mirrors.aliyun.com#" /etc/apt/sources.list
sed -i "s#security.debian.org#mirrors.aliyun.com#" /etc/apt/sources.list
cat /etc/apt/sources.list
apt update
```

:::

::: code-group

```shell [查看配置]
npm config list
```

:::

::: code-group

```shell [查看全局安装目录]
npm config get prefix
```

:::

::: code-group

```shell [查看代理]
npm config get proxy
npm config get https-proxy
```

```shell [设置代理]
npm config set proxy http://localhost:1085
npm config set https-proxy http://localhost:1085
```

```shell [删除代理]
npm config delete proxy
npm config delete https-proxy
```

:::

::: code-group

```shell [查看代理]
npm config get registry
```

```shell [设置代理]
npm config set registry https://registry.npmmirror.com
```

```shell [删除代理]
npm config delete registry
```

:::

::: code-group

```shell [查看缓存路径]
# 默认：C:\Users\%USERNAME%\AppData\Local\npm-cache、~/.npm
npm config get cache
# 默认：C:\Users\%USERNAME%\AppData\Local\Yarn\Cache\v6、/usr/local/share/.cache/yarn/v6
yarn cache dir
# 默认：C:\Users\%USERNAME%\AppData\Local\pnpm-cache、~/.cache/pnpm
pnpm config get store-dir
```

```shell [设置缓存路径]
npm config set cache D:\nodejs\npm_cache
yarn config set cache-folder D:\nodejs\yarn_cache
pnpm config set store-dir D:\\nodejs\\pnpm_cache
```

```shell [清理缓存]
npm cache clean --force
yarn cache clean
pnpm store prune
```

```shell [删除缓存路径]
npm config delete cache
yarn config delete cache-folder
pnpm config delete store-dir
```

:::

::: code-group

```shell [跳过证书验证]
npm install --unsafe-perm=true --no-verify-ssl
```

:::

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_node table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_node table tr td:nth-child(1) {
    min-width: 450px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_node table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_node table tr td:nth-child(2) {
    min-width: 490px;
}

</style>