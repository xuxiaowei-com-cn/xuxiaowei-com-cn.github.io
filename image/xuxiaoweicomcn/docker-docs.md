# docker-docs 镜像 {id=docker-docs}

|            | 地址                                                                       |
|------------|--------------------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/docker-docs                      |
| 流水线        | https://gitlab.xuxiaowei.com.cn/xuxiaowei-com-cn/docker-docs/-/pipelines |

## 说明 {id=description}

- 本镜像是将 docker 文档 [docker/docs](https://github.com/docker/docs) 编译构建并部署到国内
- 由于 docker 文档 https://kubernetes.io 国内用户可能无法正常访问，所以才部署到国内

## 镜像列表 {id=image-list}

| 镜像                                     | 部署地址                                 | 说明                             |
|----------------------------------------|--------------------------------------|--------------------------------|
| xuxiaoweicomcn/docker-docs:main        | https://docker-docs.xuxiaowei.com.cn | `main` 从源代码的 `main` 分支构建，代表最新版 |
| xuxiaoweicomcn/docker-docs:main-xxxxxx |                                      | `xxxxxx` 代表构建时的流水线编号           |

<style>

._image_xuxiaoweicomcn_docker-docs #docker-docs + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_docker-docs #docker-docs + table tr td:nth-child(1) {
    min-width: 160px;
}

._image_xuxiaoweicomcn_docker-docs #docker-docs + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_docker-docs #docker-docs + table tr td:nth-child(2) {
    min-width: 535px;
}

._image_xuxiaoweicomcn_docker-docs table tr th:nth-child(1), 
._image_xuxiaoweicomcn_docker-docs table tr td:nth-child(1) {
    min-width: 310px;
}

._image_xuxiaoweicomcn_docker-docs table tr th:nth-child(2), 
._image_xuxiaoweicomcn_docker-docs table tr td:nth-child(2) {
    min-width: 280px;
}

._image_xuxiaoweicomcn_docker-docs table tr th:nth-child(3), 
._image_xuxiaoweicomcn_docker-docs table tr td:nth-child(3) {
    min-width: 320px;
}
</style>