# mvnd 镜像 {id=mvnd}

|            | 地址                                                   |
|------------|------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/mvnd         |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/mvnd/-/pipelines |

## 说明 {id=description}

- 基于 [apache/maven-mvnd](https://github.com/apache/maven-mvnd/) 制作的镜像
- 如果 package 中包含中文文件名的文件，可能存在打包异常，请执行 `LANG=C.UTF-8` 命令后再打包（PS. 查看字符命令 `locale`）

## 镜像列表 {id=image-list}

| 镜像                                                    | 说明                            |
|-------------------------------------------------------|-------------------------------|
| xuxiaoweicomcn/mvnd:1.0.1-dragonwell-8-anolis         | 1.0.1 代表 mvnd 版本              |
| xuxiaoweicomcn/mvnd:1.0.1-dragonwell-8-anolis-xxxxxx  | dragonwell-8 代表使用的是阿里巴巴 JDK 8 |
| xuxiaoweicomcn/mvnd:1.0.1-dragonwell-11-anolis        | anolis 代表是阿里云的龙蜥系统，兼容 CentOS  |
| xuxiaoweicomcn/mvnd:1.0.1-dragonwell-11-anolis-xxxxxx | xxxxxx 代表构建时的流水线编号            |
| xuxiaoweicomcn/mvnd:1.0.1-dragonwell-17-anolis        |                               |
| xuxiaoweicomcn/mvnd:1.0.1-dragonwell-17-anolis-xxxxxx |                               |
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-8-anolis         |                               |
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-8-anolis-xxxxxx  |                               |
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-11-anolis        |                               |
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-11-anolis-xxxxxx |                               |
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-17-anolis        |                               |
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-17-anolis-xxxxxx |                               |

<style>

._image_xuxiaoweicomcn_mvnd #mvnd + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_mvnd #mvnd + table tr td:nth-child(1) {
    min-width: 115px;
}

._image_xuxiaoweicomcn_mvnd #mvnd + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_mvnd #mvnd + table tr td:nth-child(2) {
    min-width: 405px;
}

._image_xuxiaoweicomcn_mvnd table tr th:nth-child(1), 
._image_xuxiaoweicomcn_mvnd table tr td:nth-child(1) {
    min-width: 405px;
}

._image_xuxiaoweicomcn_mvnd table tr th:nth-child(2), 
._image_xuxiaoweicomcn_mvnd table tr td:nth-child(2) {
    min-width: 315px;
}

</style>