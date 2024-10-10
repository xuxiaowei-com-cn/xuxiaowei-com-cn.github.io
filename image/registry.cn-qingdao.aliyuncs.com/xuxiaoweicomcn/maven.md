# Maven 镜像 {id=maven}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `maven` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/maven)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/carlossg/docker-maven/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                            | 说明                                  |
|-------------------------------------------------------------------------------|-------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8             | 3.6.3 代表 Maven 版本号，jdk-8 代表 JDK 版本号 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8-slim        |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17        |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17-slim   |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.9.8-amazoncorretto-17 |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.9.9-amazoncorretto-21 |                                     |

::: code-group

```shell [maven:3.6.3-jdk-8]
sudo docker run \
  -itd \
  --restart always \
  --name maven-3.6.3-jdk-8 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8 \
  sleep infinity
```

```shell [maven:3.6.3-openjdk-17]
sudo docker run \
  -itd \
  --restart always \
  --name maven-3.6.3-openjdk-17 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17 \
  sleep infinity
```

```shell [maven:3.9.8-amazoncorretto-17]
sudo docker run \
  -itd \
  --restart always \
  --name maven-3.9.8-amazoncorretto-17 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.9.8-amazoncorretto-17 \
  sleep infinity
```

:::

::: code-group

```shell [本地仓库位置]
export MAVEN_OPTS="-Dmaven.repo.local=/software/apache-maven-repository"
```

:::

::: code-group

```shell [下载源码]
mvn clean -U package dependency:sources -DskipTests=true
```

```shell [下载文档]
mvn clean -U package dependency:resolve -Dclassifier=javadoc -DskipTests=true
```

```shell [依赖分析]
mvn dependency:tree
```

```shell [插件依赖分析]
mvn dependency:resolve-plugins
```

:::

::: code-group

```shell [刪除快照]
find /software/apache-maven-repository -type d -name '*-SNAPSHOT' -print -exec rm -r {} +
```

:::

::: code-group

```shell [上传 jar]
# -Dfile：指定 文件位置
# -DgroupId：指定 groupId
# -DartifactId：指定 artifactId
# -Dversion：指定 version
# -Dpackaging：指定 文件类型，可选值：jar、war、pom、rar 等
# -DrepositoryId：指定 仓库 ID（与 settings.xml 文件中 server id 相同）
# -Durl：指定 仓库 URL
# -Dclassifier：分类器，可选值：空、sources、javadoc 等
mvn deploy:deploy-file \
	-Dfile=/tmp/abc-0.0.1-SNAPSHOT.jar \
	-DgroupId=cn.com.xuxiaowei \
    -DartifactId=abc \
    -Dversion=0.0.1-SNAPSHOT \
    -Dpackaging=jar \
    -DrepositoryId=rdc-snapshots \
    -Durl=https://packages.aliyun.com/maven/repository/xuxiaowei-snapshot-Jltnfj/
```

:::

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_maven table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_maven table tr td:nth-child(1) {
    min-width: 575px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_maven table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_maven table tr td:nth-child(2) {
    min-width: 335px;
}

</style>