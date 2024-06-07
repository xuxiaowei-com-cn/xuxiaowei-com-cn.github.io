# kaniko 镜像

|            | 地址                                                              |
|------------|-----------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/kaniko-project-executor |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/kaniko/-/pipelines          |

## 说明

- 本镜像仅仅是将 `gcr.io/kaniko-project/executor` 同步到 `xuxiaoweicomcn/kaniko-project-executor`
- 未修改镜像内容
- 由于 国内用户可能无法访问 `gcr.io` 域名，所以才将 `gcr.io/kaniko-project/executor`
  镜像同步到 `xuxiaoweicomcn/kaniko-project-executor`
- 每周自动同步一次，任务计划 https://gitlab.com/xuxiaowei-com-cn/kaniko/-/pipeline_schedules

## 镜像列表

- [国内镜像](../registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kaniko-project-executor.md)
- 此处仅列举了 v1.23.0 的镜像，其他版本未列出，现已存在 `400+` 个镜像（2024-06-07 统计）

| 镜像                                                          | 说明                                                  |
|-------------------------------------------------------------|-----------------------------------------------------|
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0              | v1.23.0 代表版本号，支持：amd64、arm64、ppc64le、s390x 平台       |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-arm64        | v1.23.0 代表版本号，arm64 代表平台                            |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-amd64        | v1.23.0 代表版本号，amd64 代表平台                            |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-ppc64le      | v1.23.0 代表版本号，ppc64le 代表平台                          |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-s390x        | v1.23.0 代表版本号，s390x 代表平台                            |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-debug        | v1.23.0 代表版本号，debug 版，可独立运行，支持：amd64、arm64、s390x 平台 |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-arm64-debug  | v1.23.0 代表版本号，debug 版，可独立运行，arm64 代表平台              |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-amd64-debug  | v1.23.0 代表版本号，debug 版，可独立运行，amd64 代表平台              |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-s390x-debug  | v1.23.0 代表版本号，debug 版，可独立运行，s390x 代表平台              |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-slim         | v1.23.0 代表版本号，微型版，支持：amd64、arm64、s390x 平台           |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-arm64-slim   | v1.23.0 代表版本号，微型版，arm64 代表平台                        |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-amd64-slim   | v1.23.0 代表版本号，微型版，amd64 代表平台                        |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-ppc64le-slim | v1.23.0 代表版本号，微型版，ppc64le 代表平台                      |
| xuxiaoweicomcn/kaniko-project-executor:v1.23.0-s390x-slim   | v1.23.0 代表版本号，微型版，s390x 代表平台                        |
