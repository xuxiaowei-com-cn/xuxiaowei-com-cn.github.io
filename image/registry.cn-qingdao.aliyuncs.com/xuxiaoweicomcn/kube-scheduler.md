# registry.k8s.io/kube-scheduler 镜像 {id=kube-scheduler}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `registry.k8s.io/kube-scheduler` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-scheduler`
- 未修改镜像内容
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/kubernetes/kubernetes/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- 说明：并非所有版本均存在 amd64、arm、arm64、ppc64le、s390x 平台，取决于原始仓库是否构建上传
    1. 使用 `docker manifest inspect registry.k8s.io/kube-scheduler:1.30.2` 查看原始仓库某个版本所有支持的架构
    2. 使用 `docker manifest inspect registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-scheduler:1.30.2` 查看作者仓库某个版本所有支持的架构

| 镜像                                                                    | 说明                                               |
|-----------------------------------------------------------------------|--------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-scheduler:1.30.2 | 1.30.2 代表版本号，支持：amd64、arm、arm64、ppc64le、s390x 平台 |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_kube-scheduler table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_kube-scheduler table tr td:nth-child(1) {
    min-width: 510px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_kube-scheduler table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_kube-scheduler table tr td:nth-child(2) {
    min-width: 485px;
}

</style>