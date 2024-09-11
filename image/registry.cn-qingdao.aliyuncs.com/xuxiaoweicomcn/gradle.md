# gradle 镜像 {id=gradle}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `gradle` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gradle`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/gradle)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/gradle/gradle/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                 | 说明                                              |
|--------------------------------------------------------------------|-------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gradle/8.8.0-jdk8  | 8.8.0 代表版本号，支持：amd64、arm、arm64、ppc64le、s390x 平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gradle/8.8.0-jdk17 |                                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gradle/8.0.2-jdk8  |                                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gradle/8.0.2-jdk17 |                                                 |

::: code-group

```shell [本地仓库位置]
export GRADLE_USER_HOME="/software/.gradle"
```

:::

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_gradle table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_gradle table tr td:nth-child(1) {
    min-width: 485px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_gradle table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_gradle table tr td:nth-child(2) {
    min-width: 600px;
}

</style>