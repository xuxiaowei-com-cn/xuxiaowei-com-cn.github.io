# Maven、MySQL 客户端 镜像 {id=maven-mysql-client}

|            | 地址                                                                 |
|------------|--------------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/maven-mysql-client         |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/maven-mysql-client/-/pipelines |

## 说明 {id=description}

- 基于 `maven` 镜像制作，安装了 MySQL 客户端程序
- 用于自动化流水线
    - 使用 Maven 镜像测试时，初始化 MySQL 表结构和数据

## 镜像列表 {id=image-list}

| 镜像                                                 | 说明                                             |
|----------------------------------------------------|------------------------------------------------|
| xuxiaoweicomcn/maven-mysql-client:3.8.7-openjdk-18 | 基于 maven:3.8.7-openjdk-18 镜像制作，安装了 MySQL 客户端程序 |
| xuxiaoweicomcn/maven-mysql-client:3.6.3-openjdk-17 | 基于 maven:3.6.3-openjdk-17 镜像制作，安装了 MySQL 客户端程序 |
| xuxiaoweicomcn/maven-mysql-client:3.6.3-openjdk-11 | 基于 maven:3.6.3-openjdk-11 镜像制作，安装了 MySQL 客户端程序 |
| xuxiaoweicomcn/maven-mysql-client:3.6.3-jdk-8      | 基于 maven:3.6.3-jdk-8 镜像制作，安装了 MySQL 客户端程序      |

<style>

._image_xuxiaoweicomcn_maven-mysql-client #maven-mysql-client + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_maven-mysql-client #maven-mysql-client + table tr td:nth-child(1) {
    min-width: 115px;
}

._image_xuxiaoweicomcn_maven-mysql-client #maven-mysql-client + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_maven-mysql-client #maven-mysql-client + table tr td:nth-child(2) {
    min-width: 490px;
}

._image_xuxiaoweicomcn_maven-mysql-client table tr th:nth-child(1), 
._image_xuxiaoweicomcn_maven-mysql-client table tr td:nth-child(1) {
    min-width: 390px;
}

._image_xuxiaoweicomcn_maven-mysql-client table tr th:nth-child(2), 
._image_xuxiaoweicomcn_maven-mysql-client table tr td:nth-child(2) {
    min-width: 455px;
}

</style>