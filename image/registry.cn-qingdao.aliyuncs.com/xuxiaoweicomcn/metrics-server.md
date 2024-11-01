# registry.k8s.io/metrics-server/metrics-server 镜像 {id=metrics-server}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `registry.k8s.io/metrics-server/metrics-server` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server`
- 未修改镜像内容
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/kubernetes-sigs/metrics-server/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- 说明：并非所有版本均存在 `amd64`、`arm64`、`ppc64le`、`s390x` 平台，取决于原始仓库是否构建上传
    1. 使用 `docker manifest inspect registry.k8s.io/metrics-server/metrics-server:v0.7.2` 查看原始仓库某个版本所有支持的架构
    2. 使用 `docker manifest inspect registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.7.2` 查看作者仓库某个版本所有支持的架构

| 镜像                                                                    | 说明                                          |
|-----------------------------------------------------------------------|---------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.7.2 | 0.7.2 代表版本号，支持：amd64、arm64、ppc64le、s390x 平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.7.1 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.7.0 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.6.4 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.6.3 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.6.2 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.6.1 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.6.0 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.5.2 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.5.1 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.5.0 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.4.5 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.4.4 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.4.3 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.4.2 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.4.1 |                                             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server:v0.4.0 |                                             |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_metrics-server table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_metrics-server table tr td:nth-child(1) {
    min-width: 510px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_metrics-server table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_metrics-server table tr td:nth-child(2) {
    min-width: 455px;
}

</style>