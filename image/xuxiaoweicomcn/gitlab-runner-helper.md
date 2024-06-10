# GitLab Runner 帮助镜像 {id=gitlab-runner-helper}

|            | 地址                                                                   |
|------------|----------------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/gitlab-runner-helper         |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/gitlab-runner-helper/-/pipelines |

## 说明 {id=description}

- 本镜像仅仅是将 `registry.gitlab.com/gitlab-org/gitlab-runner/gitlab-runner-helper`
  同步到 `xuxiaoweicomcn/gitlab-runner-helper`
- 未修改镜像内容
- 由于 GitLab Runner 有段时间没有将镜像推送到 `gitlab/gitlab-runner-helper`，而国内用户可能无法访问 `registry.gitlab.com`
  域名，所以才将 `registry.gitlab.com/gitlab-org/gitlab-runner/gitlab-runner-helper`
  镜像同步到 `xuxiaoweicomcn/gitlab-runner-helper`
- 每周自动同步一次，任务计划 https://gitlab.com/xuxiaowei-com-cn/gitlab-runner-helper/-/pipeline_schedules
- 此镜像同步的初衷是为了辅助以下内容：
    - GitLab/Kubernetes 知识库：https://gitlab-k8s.xuxiaowei.com.cn

## 镜像列表 {id=image-list}

- 此处仅列举了 v16.9.1 的镜像，其他版本未列出，现已存在 `1000+` 个镜像（2024-06-07 统计）

| 镜像                                                  | 说明                         |
|-----------------------------------------------------|----------------------------|
| xuxiaoweicomcn/gitlab-runner-helper:x86_64-v16.9.1  | v16.9.1 代表版本号，x86_64 代表平台  |
| xuxiaoweicomcn/gitlab-runner-helper:arm-v16.9.1     | v16.9.1 代表版本号，arm 代表平台     |
| xuxiaoweicomcn/gitlab-runner-helper:arm64-v16.9.1   | v16.9.1 代表版本号，arm64 代表平台   |
| xuxiaoweicomcn/gitlab-runner-helper:s390x-v16.9.1   | v16.9.1 代表版本号，s390x 代表平台   |
| xuxiaoweicomcn/gitlab-runner-helper:ppc64le-v16.9.1 | v16.9.1 代表版本号，ppc64le 代表平台 |

<style>

._image_xuxiaoweicomcn_gitlab-runner-helper #gitlab-runner-helper + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_gitlab-runner-helper #gitlab-runner-helper + table tr td:nth-child(1) {
    min-width: 115px;
}

._image_xuxiaoweicomcn_gitlab-runner-helper #gitlab-runner-helper + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_gitlab-runner-helper #gitlab-runner-helper + table tr td:nth-child(2) {
    min-width: 490px;
}

._image_xuxiaoweicomcn_gitlab-runner-helper table tr th:nth-child(1), 
._image_xuxiaoweicomcn_gitlab-runner-helper table tr td:nth-child(1) {
    min-width: 385px;
}

._image_xuxiaoweicomcn_gitlab-runner-helper table tr th:nth-child(2), 
._image_xuxiaoweicomcn_gitlab-runner-helper table tr td:nth-child(2) {
    min-width: 265px;
}

</style>