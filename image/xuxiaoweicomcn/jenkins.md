# 包含 Docker 客户端的 Jenkins 镜像

|            | 地址                                                      |
|------------|---------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/jenkins         |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/jenkins/-/pipelines |
| 镜像部署网站     | https://jenkins.xuxiaowei.com.cn                        |

## 说明

- 基于 `jenkins/jenkins` 镜像，增加了 docker 客户端程序

## 镜像列表

- 此处仅列举了 2.461 的镜像，其他版本未列出

| 镜像                                        | 说明                             |
|-------------------------------------------|--------------------------------|
| xuxiaoweicomcn/jenkins:2.461-jdk17        | 2.461 代表版本号                    |
| xuxiaoweicomcn/jenkins:2.461-jdk17-xxxxxx | 2.461 代表版本号，xxxxxx 代表构建时的流水线编号 |
