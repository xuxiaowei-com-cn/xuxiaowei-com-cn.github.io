# calico/cni 镜像 {id=calico-cni}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `calico/cni` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/r/calico/cni)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/projectcalico/calico/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- 说明：并非所有版本均存在 amd64、arm64、ppc64le、s390x 平台，取决于原始仓库是否构建上传
    1. 使用 `docker manifest inspect calico/cni:v3.27.3` 查看原始仓库某个版本所有支持的架构
    2. 使用 `docker manifest inspect registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.27.3` 查看作者仓库某个版本所有支持的架构

| 镜像                                                                 | 说明                                            |
|--------------------------------------------------------------------|-----------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.29.1 | v3.29.1 代表版本号，支持：amd64、arm64、ppc64le、s390x 平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.29.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.28.2 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.28.1 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.28.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.27.4 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.27.3 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.27.2 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.27.1 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.27.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.26.5 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.26.4 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.26.3 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.26.2 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.26.1 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.26.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.25.2 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.25.1 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.25.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.24.6 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.24.5 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.24.4 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.24.3 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.24.2 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.24.1 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.24.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.23.5 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.23.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.22.5 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.22.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.21.6 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.21.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.20.6 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.20.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.19.4 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.19.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.18.6 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.18.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.17.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.16.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.15.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.14.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.13.0 |                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni:v3.12.0 |                                               |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_calico-cni table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_calico-cni table tr td:nth-child(1) {
    min-width: 485px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_calico-cni table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_calico-cni table tr td:nth-child(2) {
    min-width: 455px;
}

</style>