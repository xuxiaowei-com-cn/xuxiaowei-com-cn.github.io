# playwright、dragonwell 镜像

|                | 地址                                                                                                                     | 说明                                                      |
|----------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Gitee 源码       | https://gitee.com/xuxiaowei-cloud/spring-cloud-xuxiaowei                                                               | `playwright/dragonwell/8`、`playwright/dragonwell/17` 分支 |
| GitHub 源码      | https://github.com/xuxiaowei-cloud/spring-cloud-xuxiaowei                                                              | `playwright/dragonwell/8`、`playwright/dragonwell/17` 分支 |
| docker hub     | https://hub.docker.com/r/springcloudxuxiaowei/playwright-dragonwell                                                    |                                                         |
| 构建镜像流水线 JDK 8  | https://jihulab.com/xuxiaowei-jihu/xuxiaowei-cloud/spring-cloud-xuxiaowei/-/pipelines?ref=playwright%2Fdragonwell%2F8  | `playwright/dragonwell/8` 分支                            |
| 构建镜像流水线 JDK 17 | https://jihulab.com/xuxiaowei-jihu/xuxiaowei-cloud/spring-cloud-xuxiaowei/-/pipelines?ref=playwright%2Fdragonwell%2F17 | `playwright/dragonwell/17` 分支                           |

## 说明

- 基于 `mcr.microsoft.com/playwright` 镜像，增加了 dragonwell
- 用于自动化 e2e 测试

## 镜像列表

| 镜像                                            | 说明                                                   |
|-----------------------------------------------|------------------------------------------------------|
| springcloudxuxiaowei/playwright-dragonwell:8  | 基于 mcr.microsoft.com/playwright 镜像，增加了 dragonwell 8  |
| springcloudxuxiaowei/playwright-dragonwell:17 | 基于 mcr.microsoft.com/playwright 镜像，增加了 dragonwell 17 |
