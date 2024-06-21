# mvnd 镜像 {id=mvnd}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `xuxiaoweicomcn/mvnd` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd`，
- 基于 [apache/maven-mvnd](https://github.com/apache/maven-mvnd/) 制作的镜像，
  [Dockerfile](https://gitlab.com/xuxiaowei-com-cn/mvnd/-/blob/main/Dockerfile)
- [docker hub 镜像](https://hub.docker.com/r/xuxiaoweicomcn/mvnd)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/gitlab.com/xuxiaowei-com-cn/mvnd/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                              | 说明                              |
|---------------------------------------------------------------------------------|---------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-8-anolis  | 1.0.0 代表 mvnd 版本                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-11-anolis | anolis 代表是阿里云的龙蜥系统，兼容 CentOS    |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-17-anolis | dragonwell-17 代表使用的是阿里巴巴 JDK 17 |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_mvnd table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_mvnd table tr td:nth-child(1) {
    min-width: 580px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_mvnd table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_mvnd table tr td:nth-child(2) {
    min-width: 315px;
}

</style>