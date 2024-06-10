# playwright、dragonwell 镜像 {id=playwright-dragonwell}

|                | 地址                                                                                                                     | 说明                                                      |
|----------------|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Gitee 源码       | https://gitee.com/xuxiaowei-cloud/spring-cloud-xuxiaowei                                                               | `playwright/dragonwell/8`、`playwright/dragonwell/17` 分支 |
| GitHub 源码      | https://github.com/xuxiaowei-cloud/spring-cloud-xuxiaowei                                                              | `playwright/dragonwell/8`、`playwright/dragonwell/17` 分支 |
| docker hub     | https://hub.docker.com/r/springcloudxuxiaowei/playwright-dragonwell                                                    |                                                         |
| 构建镜像流水线 JDK 8  | https://jihulab.com/xuxiaowei-jihu/xuxiaowei-cloud/spring-cloud-xuxiaowei/-/pipelines?ref=playwright%2Fdragonwell%2F8  | `playwright/dragonwell/8` 分支                            |
| 构建镜像流水线 JDK 17 | https://jihulab.com/xuxiaowei-jihu/xuxiaowei-cloud/spring-cloud-xuxiaowei/-/pipelines?ref=playwright%2Fdragonwell%2F17 | `playwright/dragonwell/17` 分支                           |

## 说明 {id=description}

- 基于 `mcr.microsoft.com/playwright` 镜像，增加了 dragonwell
- 用于自动化 e2e 测试

## 镜像列表 {id=image-list}

| 镜像                                            | 说明                                                   |
|-----------------------------------------------|------------------------------------------------------|
| springcloudxuxiaowei/playwright-dragonwell:8  | 基于 mcr.microsoft.com/playwright 镜像，增加了 dragonwell 8  |
| springcloudxuxiaowei/playwright-dragonwell:17 | 基于 mcr.microsoft.com/playwright 镜像，增加了 dragonwell 17 |

<style>

._image_springcloudxuxiaowei_playwright-dragonwell #playwright-dragonwell + table tr th:nth-child(1), 
._image_springcloudxuxiaowei_playwright-dragonwell #playwright-dragonwell + table tr td:nth-child(1) {
    min-width: 166px;
}

._image_springcloudxuxiaowei_playwright-dragonwell #playwright-dragonwell + table tr th:nth-child(2), 
._image_springcloudxuxiaowei_playwright-dragonwell #playwright-dragonwell + table tr td:nth-child(2) {
    min-width: 865px;
}

._image_springcloudxuxiaowei_playwright-dragonwell #playwright-dragonwell + table tr th:nth-child(3), 
._image_springcloudxuxiaowei_playwright-dragonwell #playwright-dragonwell + table tr td:nth-child(3) {
    min-width: 405px;
}

._image_springcloudxuxiaowei_playwright-dragonwell #image-list + table tr th:nth-child(1), 
._image_springcloudxuxiaowei_playwright-dragonwell #image-list + table tr td:nth-child(1) {
    min-width: 340px;
}

._image_springcloudxuxiaowei_playwright-dragonwell #image-list + table tr th:nth-child(2), 
._image_springcloudxuxiaowei_playwright-dragonwell #image-list + table tr td:nth-child(2) {
    min-width: 435px;
}

</style>