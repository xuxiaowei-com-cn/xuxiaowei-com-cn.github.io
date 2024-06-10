# 包含 Docker 客户端的 Jenkins 镜像 {id=jenkins}

|            | 地址                                                      |
|------------|---------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/jenkins         |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/jenkins/-/pipelines |
| 镜像部署网站     | https://jenkins.xuxiaowei.com.cn                        |

## 说明 {id=description}

- 基于 `jenkins/jenkins` 镜像，增加了 docker 客户端程序

## 镜像列表 {id=image-list}

- 此处仅列举了 2.461 的镜像，其他版本未列出

| 镜像                                        | 说明                             |
|-------------------------------------------|--------------------------------|
| xuxiaoweicomcn/jenkins:2.461-jdk17        | 2.461 代表版本号                    |
| xuxiaoweicomcn/jenkins:2.461-jdk17-xxxxxx | 2.461 代表版本号，xxxxxx 代表构建时的流水线编号 |

<style>

._image_xuxiaoweicomcn_jenkins #jenkins + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_jenkins #jenkins + table tr td:nth-child(1) {
    min-width: 115px;
}

._image_xuxiaoweicomcn_jenkins #jenkins + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_jenkins #jenkins + table tr td:nth-child(2) {
    min-width: 405px;
}

._image_xuxiaoweicomcn_jenkins table tr th:nth-child(1), 
._image_xuxiaoweicomcn_jenkins table tr td:nth-child(1) {
    min-width: 315px;
}

._image_xuxiaoweicomcn_jenkins table tr th:nth-child(2), 
._image_xuxiaoweicomcn_jenkins table tr td:nth-child(2) {
    min-width: 350px;
}

</style>