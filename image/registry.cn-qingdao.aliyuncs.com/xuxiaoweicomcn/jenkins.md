# Jenkins 镜像 {id=jenkins}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `xuxiaoweicomcn/jenkins` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins`
- 基于 `jenkins/jenkins` 镜像，增加了 docker 客户端程序
- [docker hub 镜像](https://hub.docker.com/r/xuxiaoweicomcn/jenkins)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/gitlab.com/xuxiaowei-com-cn/jenkins/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- [Weekly](https://www.jenkins.io/download/weekly/) - 频繁发布，包括所有新功能、改进和错误修复。
- [Long-Term Support (LTS)](https://www.jenkins.io/download/lts/) - 较旧的发布行，通过bug修复后台端口定期更新。

| 镜像                                                                    | 说明                      |
|-----------------------------------------------------------------------|-------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.462-jdk17   | Weekly                  |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins:2.452.2-jdk17 | Long-Term Support (LTS) |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_jenkins table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_jenkins table tr td:nth-child(1) {
    min-width: 505px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_jenkins table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_jenkins table tr td:nth-child(2) {
    min-width: 190px;
}

</style>