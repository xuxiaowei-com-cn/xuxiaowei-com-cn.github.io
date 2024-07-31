# GraalVM 镜像

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `ghcr.io/graalvm/jdk-community`
  同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/graalvm-jdk-community`
- 由于 国内用户可能无法访问 `ghcr.io` 域名，所以才将 `ghcr.io/graalvm/jdk-community`
  镜像同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/graalvm-jdk-community`
- 未修改镜像内容
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/graalvm/graalvm-ce-builds/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                           | 说明                                  |
|------------------------------------------------------------------------------|-------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/graalvm-jdk-community:22.0.2 | 22.0.2 代表 JDK 版本号，支持：amd64、arm64 平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/graalvm-jdk-community:21.0.2 |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/graalvm-jdk-community:17.0.9 |                                     |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_graalvm table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_graalvm table tr td:nth-child(1) {
    min-width: 575px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_graalvm table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_graalvm table tr td:nth-child(2) {
    min-width: 365px;
}

</style>