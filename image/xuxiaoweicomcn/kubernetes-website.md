# kubernetes-website 镜像 {id=kubernetes-website}

|            | 地址                                                                                                          |
|------------|-------------------------------------------------------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/kubernetes-website                                                  |
| 构建镜像流水线    | https://framagit.org/xuxiaowei-com-cn/kubernetes-website/-/pipelines                                        |
| 同步镜像到国内流水线 | https://gitlab.xuxiaowei.com.cn/hub.docker.com/framagit.org/xuxiaowei-com-cn/kubernetes-website/-/pipelines |
| 部署镜像流水线    | https://gitlab.xuxiaowei.com.cn/xuxiaowei-com-cn/kubernetes-website/-/pipelines                             |

## 说明 {id=description}

- 本镜像是将 Kubernetes 文档 [kubernetes/website](https://github.com/kubernetes/website) 编译构建并部署到国内
- 由于 Kubernetes 文档 https://kubernetes.io 国内用户可能无法正常访问，所以才部署到国内
- 由于 Kubernetes 文档 https://kubernetes.io 仅提供最新版与最近的4个版本，更早的历史版本不会提供，所以作者构建了从 1.21
  到最新版的文档

## 镜像列表 {id=image-list}

1. `release-x.y` 均包含 `release-x.y-xxxxxx`，下表不再重复列出
    1. `release` 代表正式发布版
    2. `x.y` 代表版本号
    3. `xxxxxx` 历史版本，`xxxxxx` 代表构建时的流水线编号
2. `dev-x.y` 代表正在开发的版本，下表不再列出
3. `snapshot-initial-x.y` 代表初始化完成的版本，下表不再列出
4. `snapshot-final-x.y` 代表定稿版本，下表不再列出
5. 如需使用，只需要关注 `main`、`release-x.y` 即可，其他版本无需关注

| 镜像                                             | 部署地址                                             | 说明                             |
|------------------------------------------------|--------------------------------------------------|--------------------------------|
| xuxiaoweicomcn/kubernetes-website:main         | https://kubernetes.xuxiaowei.com.cn/zh-cn/       | `main` 从源代码的 `main` 分支构建，代表最新版 |
| xuxiaoweicomcn/kubernetes-website:main-xxxxxx  |                                                  | 历史版本，`xxxxxx` 代表构建时的流水线编号      |
| xuxiaoweicomcn/kubernetes-website:release-1.29 | https://kubernetes-v1-29.xuxiaowei.com.cn/zh-cn/ | `release` 代表正式发布版，`1.29` 代表版本号 |
| xuxiaoweicomcn/kubernetes-website:release-1.28 | https://kubernetes-v1-28.xuxiaowei.com.cn/zh-cn/ |                                |
| xuxiaoweicomcn/kubernetes-website:release-1.27 | https://kubernetes-v1-27.xuxiaowei.com.cn/zh-cn/ |                                |
| xuxiaoweicomcn/kubernetes-website:release-1.26 | https://kubernetes-v1-26.xuxiaowei.com.cn/zh-cn/ |                                |
| xuxiaoweicomcn/kubernetes-website:release-1.25 | https://kubernetes-v1-25.xuxiaowei.com.cn/zh-cn/ |                                |
| xuxiaoweicomcn/kubernetes-website:release-1.24 | https://kubernetes-v1-24.xuxiaowei.com.cn/zh-cn/ |                                |
| xuxiaoweicomcn/kubernetes-website:release-1.23 | https://kubernetes-v1-23.xuxiaowei.com.cn/zh-cn/ |                                |
| xuxiaoweicomcn/kubernetes-website:release-1.22 | https://kubernetes-v1-22.xuxiaowei.com.cn/zh-cn/ |                                |
| xuxiaoweicomcn/kubernetes-website:release-1.21 | https://kubernetes-v1-21.xuxiaowei.com.cn/zh-cn/ |                                |

<style>

._image_xuxiaoweicomcn_kubernetes-website #kubernetes-website + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_kubernetes-website #kubernetes-website + table tr td:nth-child(1) {
    min-width: 160px;
}

._image_xuxiaoweicomcn_kubernetes-website #kubernetes-website + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_kubernetes-website #kubernetes-website + table tr td:nth-child(2) {
    min-width: 785px;
}

._image_xuxiaoweicomcn_kubernetes-website table tr th:nth-child(1), 
._image_xuxiaoweicomcn_kubernetes-website table tr td:nth-child(1) {
    min-width: 355px;
}

._image_xuxiaoweicomcn_kubernetes-website table tr th:nth-child(2), 
._image_xuxiaoweicomcn_kubernetes-website table tr td:nth-child(2) {
    min-width: 365px;
}

._image_xuxiaoweicomcn_kubernetes-website table tr th:nth-child(3), 
._image_xuxiaoweicomcn_kubernetes-website table tr td:nth-child(3) {
    min-width: 320px;
}
</style>