# Redis 镜像 {id=redis}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `redis` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/redis)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/redis/redis/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                    | 说明                                                           |
|-----------------------------------------------------------------------|--------------------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:7.4.0           | 7.2.4 代表版本号，支持：386、amd64、arm、arm64、mips64le、ppc64le、s390x 平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:7.2.5-anolis-23 |                                                              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:7.2.5           |                                                              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:7.2.4           |                                                              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:7.0.15          |                                                              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:6.2.14          |                                                              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:6.0.20          |                                                              |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:6.0.0           |                                                              |

::: code-group

```shell [使用固定密码创建 Redis]
REDIS_PASSWORD=8d4fa85e314b49c8bc6ab63d898a7597

echo $REDIS_PASSWORD

sudo docker run \
  -itd \
  --restart always \
  --name redis-7.2.4 \
  -p 6379:6379 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:7.2.4 \
  --requirepass $REDIS_PASSWORD
```

```shell [使用随机密码创建 Redis]
REDIS_PASSWORD=$(tr -dc A-Za-z0-9 </dev/urandom | head -c 32 ; echo '')

echo $REDIS_PASSWORD

sudo docker run \
  -itd \
  --restart always \
  --name redis-7.2.4 \
  -p 6379:6379 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis:7.2.4 \
  --requirepass $REDIS_PASSWORD
```

:::

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_redis table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_redis table tr td:nth-child(1) {
    min-width: 500px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_redis table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_redis table tr td:nth-child(2) {
    min-width: 595px;
}

</style>