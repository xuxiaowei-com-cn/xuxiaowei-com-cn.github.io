# Docker 镜像 {id=docker}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `docker` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/docker)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/docker/cli/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                 | 说明                                             |
|--------------------------------------------------------------------|------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.3.1      | 27.2.0 代表版本号，支持：amd64、arm64 平台                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.3.1-cli  | 27.2.0 代表版本号，支持：amd64、arm64 平台，提供 docker 命令行工具 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.3.1-dind | 27.2.0 代表版本号，支持：amd64、arm64 平台，提供 docker 服务    |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.3.0      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.3.0-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.3.0-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.2.1      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.2.1-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.2.1-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.2.0      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.2.0-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.2.0-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.1.2      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.1.2-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.1.2-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.1.1      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.1.1-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.1.1-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.3      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.3-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.3-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.2      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.2-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.2-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.1      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.1-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:27.0.1-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.4      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.4-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.4-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.3      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.3-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.3-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.1      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.1-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:26.1.1-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:24.0.5      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:24.0.5-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:24.0.5-dind |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:24.0.4      |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:24.0.4-cli  |                                                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker:24.0.4-dind |                                                |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_docker table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_docker table tr td:nth-child(1) {
    min-width: 485px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_docker table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_docker table tr td:nth-child(2) {
    min-width: 480px;
}

</style>