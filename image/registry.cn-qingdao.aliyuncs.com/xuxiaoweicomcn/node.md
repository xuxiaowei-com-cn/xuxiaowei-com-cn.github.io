# Node 镜像 {id=node}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `node` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/node)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/nodejs/node/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                           | 说明                                               |
|--------------------------------------------------------------|--------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:20.15.0 | 20.15.0 代表版本号，支持：amd64、arm、arm64、ppc64le、s390x平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:20.12.0 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:18.20.3 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:16.20.2 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.21.3 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.17.5 |                                                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node:14.16.1 |                                                  |

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
cat /etc/apt/sources.list
apt update
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