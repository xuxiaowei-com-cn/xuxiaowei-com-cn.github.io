# OpenJDK、MySQL 客户端 镜像 {id=openjdk-mysql-client}

|            | 地址                                                                   |
|------------|----------------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/openjdk-mysql-client         |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/openjdk-mysql-client/-/pipelines |

## 说明 {id=description}

- 基于 `openjdk` 镜像制作，安装了 MySQL 客户端程序
- 用于自动化流水线
    - 使用 `openjdk` 镜像测试时，初始化 MySQL 表结构和数据

## 镜像列表 {id=image-list}

| 镜像                                              | 说明                                          |
|-------------------------------------------------|---------------------------------------------|
| xuxiaoweicomcn/openjdk-mysql-client:17.0-buster | 基于 openjdk:17.0-buster 镜像制作，安装了 MySQL 客户端程序 |
| xuxiaoweicomcn/openjdk-mysql-client:8           | 基于 openjdk:8 镜像制作，安装了 MySQL 客户端程序           |

<style>

._image_xuxiaoweicomcn_openjdk-mysql-client #openjdk-mysql-client + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_openjdk-mysql-client #openjdk-mysql-client + table tr td:nth-child(1) {
    min-width: 115px;
}

._image_xuxiaoweicomcn_openjdk-mysql-client #openjdk-mysql-client + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_openjdk-mysql-client #openjdk-mysql-client + table tr td:nth-child(2) {
    min-width: 500px;
}

._image_xuxiaoweicomcn_openjdk-mysql-client table tr th:nth-child(1), 
._image_xuxiaoweicomcn_openjdk-mysql-client table tr td:nth-child(1) {
    min-width: 355px;
}

._image_xuxiaoweicomcn_openjdk-mysql-client table tr th:nth-child(2), 
._image_xuxiaoweicomcn_openjdk-mysql-client table tr td:nth-child(2) {
    min-width: 430px;
}

</style>