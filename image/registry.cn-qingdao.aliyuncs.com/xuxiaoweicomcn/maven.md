# Maven 镜像 {id=maven}

[[toc]]

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `maven` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/maven)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/carlossg/docker-maven/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                            | 说明                                  |
|-------------------------------------------------------------------------------|-------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.9.9-amazoncorretto-21 |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.9.8-amazoncorretto-17 |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17-slim   |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17        |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8-slim        |                                     |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8             | 3.6.3 代表 Maven 版本号，jdk-8 代表 JDK 版本号 |

## 创建容器 {id=container}

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

## 本地仓库位置 {id=maven.repo.local}

::: code-group

```shell [本地仓库位置]
export MAVEN_OPTS="-Dmaven.repo.local=/software/apache-maven-repository"
```

:::

## 命令 {id=command}

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

## 上传 jar 文件 {id=deploy-file}

::: code-group

```shell [上传 jar]
# -Dfile：指定 文件位置
# -Dfiles：指定 多个文件位置，使用英文 逗号 分隔，要与 -Dclassifiers、-Dtypes 的 数量、顺序 一致
# -DgroupId：指定 groupId
# -DartifactId：指定 artifactId
# -Dversion：指定 version
# -Dpackaging：指定 文件类型，可选值：jar、war、pom、rar、jar.asc、pom.asc 等
# -DrepositoryId：指定 仓库 ID（与 settings.xml 文件中 server id 相同）
# -Durl：指定 仓库 URL
# -Dclassifier：指定 分类器，可选值：空、sources、javadoc 等
# -Dclassifiers：指定 多个分类器，使用英文 逗号 分隔，要与 -Dfiles、-Dtypes 的 数量、顺序 一致，可为空
# -Dtypes：指定 多个文件后缀名，使用英文 逗号 分隔，要与 -Dclassifiers、-Dfiles 的 数量、顺序 一致
# -DpomFile：指定 pom.xml 文件位置，如果配置了此属性，可忽略 -DgroupId、-DartifactId、-Dversion
# -DgeneratePom：是否生成 pom，可选值：true、false
#
# 上传结果的文件名：
# 1. 当仅配置了 -DartifactId、-Dversion、-Dpackaging 时：${artifactId}-${version}.${packaging}
# 2. 不存在 classifiers 时：${artifactId}-${version}.${type}
# 3. 存在 classifiers 时：${artifactId}-${version}-${classifier}.${type}
mvn deploy:deploy-file \
	-Dfile=/tmp/abc-0.0.1-SNAPSHOT.jar \
	-DgroupId=cn.com.xuxiaowei \
    -DartifactId=abc \
    -Dversion=0.0.1-SNAPSHOT \
    -Dpackaging=jar \
    -DrepositoryId=rdc-snapshots \
    -Durl=https://packages.aliyun.com/maven/repository/xuxiaowei-snapshot-Jltnfj/
```

```shell [一次上传多个文件]
# 如果要上传的文件如下：
# ├── pom.xml
# └── target
#     ├── SF-CSIM-EXPRESS-SDK-V2.1.7.jar
#     ├── SF-CSIM-EXPRESS-SDK-V2.1.7.jar.asc
#     ├── SF-CSIM-EXPRESS-SDK-V2.1.7-javadoc.jar
#     ├── SF-CSIM-EXPRESS-SDK-V2.1.7-javadoc.jar.asc
#     ├── SF-CSIM-EXPRESS-SDK-V2.1.7.pom
#     ├── SF-CSIM-EXPRESS-SDK-V2.1.7.pom.asc
#     ├── SF-CSIM-EXPRESS-SDK-V2.1.7-sources.jar
#     └── SF-CSIM-EXPRESS-SDK-V2.1.7-sources.jar.asc
mvn deploy:deploy-file \
    -DpomFile=pom.xml \
    -Dfile=target/SF-CSIM-EXPRESS-SDK-V2.1.7.jar \
    -Dfiles=target/SF-CSIM-EXPRESS-SDK-V2.1.7.pom.asc,target/SF-CSIM-EXPRESS-SDK-V2.1.7.jar.asc,target/SF-CSIM-EXPRESS-SDK-V2.1.7-javadoc.jar,target/SF-CSIM-EXPRESS-SDK-V2.1.7-javadoc.jar.asc,target/SF-CSIM-EXPRESS-SDK-V2.1.7-sources.jar,target/SF-CSIM-EXPRESS-SDK-V2.1.7-sources.jar.asc \
    -Dclassifiers=,,javadoc,javadoc,sources,sources \
    -Dtypes=pom.asc,jar.asc,jar,jar.asc,jar,jar.asc \
    -DrepositoryId=ossrh \
    -Durl=https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/
```

:::

## 使用 Maven 编译 Node 项目 {id=node}

::: code-group

```xml [npm]
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>cn.com.xuxiaowei</groupId>
    <artifactId>xuxiaowei-com-cn</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <properties>
        <java.version>1.8</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

        <frontend-maven-plugin.version>1.15.1</frontend-maven-plugin.version>
        <maven-resources-plugin.version>3.3.1</maven-resources-plugin.version>

        <node.version>v20.18.0</node.version>
        <npm.version>10.8.2</npm.version>

        <!-- https://mirrors.aliyun.com/nodejs-release/v20.18.0/win-x64/node.exe -->
        <node-download-root>https://mirrors.aliyun.com/nodejs-release/</node-download-root>
        <!-- https://registry.npmmirror.com/npm/-/npm-10.8.1.tgz -->
        <npm-download-root>https://registry.npmmirror.com/npm/-/</npm-download-root>
    </properties>

    <build>
        <plugins>
            <plugin>
                <groupId>com.github.eirslett</groupId>
                <artifactId>frontend-maven-plugin</artifactId>
                <version>${frontend-maven-plugin.version}</version>
                <executions>
                    <execution>
                        <id>install node and npm</id>
                        <goals>
                            <goal>install-node-and-npm</goal>
                        </goals>
                        <configuration>
                            <nodeVersion>${node.version}</nodeVersion>
                            <npmVersion>${npm.version}</npmVersion>
                            <nodeDownloadRoot>${node-download-root}</nodeDownloadRoot>
                            <npmDownloadRoot>${npm-download-root}</npmDownloadRoot>
                        </configuration>
                    </execution>
                    <execution>
                        <id>npm install</id>
                        <goals>
                            <goal>npm</goal>
                        </goals>
                        <phase>generate-resources</phase>
                        <configuration>
                            <arguments>install --registry https://registry.npmmirror.com</arguments>
                        </configuration>
                    </execution>
                    <execution>
                        <id>npm build</id>
                        <goals>
                            <goal>npm</goal>
                        </goals>
                        <configuration>
                            <arguments>run docs:build</arguments>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <version>${maven-resources-plugin.version}</version>
                <executions>
                    <execution>
                        <id>copy-resources</id>
                        <phase>prepare-package</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${project.build.directory}/classes/static</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${basedir}/.vitepress/dist</directory>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>
```

```xml [pnpm]
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>cn.com.xuxiaowei</groupId>
    <artifactId>xuxiaowei-com-cn</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <properties>
        <java.version>1.8</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

        <frontend-maven-plugin.version>1.15.1</frontend-maven-plugin.version>
        <maven-resources-plugin.version>3.3.1</maven-resources-plugin.version>

        <node.version>v20.18.0</node.version>
        <pnpm.version>9.12.2</pnpm.version>

        <!-- https://mirrors.aliyun.com/nodejs-release/v20.18.0/win-x64/node.exe -->
        <node-download-root>https://mirrors.aliyun.com/nodejs-release/</node-download-root>
        <!-- https://registry.npmmirror.com/pnpm/-/pnpm-9.12.2.tgz -->
        <pnpm-download-root>https://registry.npmmirror.com/pnpm/-/</pnpm-download-root>
    </properties>

    <build>
        <plugins>
            <plugin>
                <groupId>com.github.eirslett</groupId>
                <artifactId>frontend-maven-plugin</artifactId>
                <version>${frontend-maven-plugin.version}</version>
                <executions>
                    <execution>
                        <id>install node and pnpm</id>
                        <goals>
                            <goal>install-node-and-pnpm</goal>
                        </goals>
                        <configuration>
                            <nodeVersion>${node.version}</nodeVersion>
                            <pnpmVersion>${pnpm.version}</pnpmVersion>
                            <nodeDownloadRoot>${node-download-root}</nodeDownloadRoot>
                            <pnpmDownloadRoot>${pnpm-download-root}</pnpmDownloadRoot>
                        </configuration>
                    </execution>
                    <execution>
                        <id>pnpm install</id>
                        <goals>
                            <goal>pnpm</goal>
                        </goals>
                        <phase>generate-resources</phase>
                        <configuration>
                            <arguments>install --registry https://registry.npmmirror.com</arguments>
                        </configuration>
                    </execution>
                    <execution>
                        <id>pnpm build</id>
                        <goals>
                            <goal>pnpm</goal>
                        </goals>
                        <configuration>
                            <arguments>run docs:build</arguments>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <version>${maven-resources-plugin.version}</version>
                <executions>
                    <execution>
                        <id>copy-resources</id>
                        <phase>prepare-package</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${project.build.directory}/classes/static</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${basedir}/.vitepress/dist</directory>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>
```

```xml [yarn]
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>cn.com.xuxiaowei</groupId>
    <artifactId>xuxiaowei-com-cn</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <properties>
        <java.version>1.8</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

        <frontend-maven-plugin.version>1.15.1</frontend-maven-plugin.version>
        <maven-resources-plugin.version>3.3.1</maven-resources-plugin.version>

        <node.version>v20.18.0</node.version>
        <yarn.version>v1.22.22</yarn.version>

        <!-- https://mirrors.aliyun.com/nodejs-release/v20.18.0/win-x64/node.exe -->
        <node-download-root>https://mirrors.aliyun.com/nodejs-release/</node-download-root>
        <!-- https://mirrors.huaweicloud.com/repository/toolkit/yarn/v1.22.22/yarn-v1.22.22.tar.gz -->
        <yarn-download-root>https://mirrors.huaweicloud.com/repository/toolkit/yarn/</yarn-download-root>
    </properties>

    <build>
        <plugins>
            <plugin>
                <groupId>com.github.eirslett</groupId>
                <artifactId>frontend-maven-plugin</artifactId>
                <version>${frontend-maven-plugin.version}</version>
                <executions>
                    <execution>
                        <id>install node and yarn</id>
                        <goals>
                            <goal>install-node-and-yarn</goal>
                        </goals>
                        <configuration>
                            <nodeVersion>${node.version}</nodeVersion>
                            <yarnVersion>${yarn.version}</yarnVersion>
                            <nodeDownloadRoot>${node-download-root}</nodeDownloadRoot>
                            <yarnDownloadRoot>${yarn-download-root}</yarnDownloadRoot>
                        </configuration>
                    </execution>
                    <execution>
                        <id>yarn install</id>
                        <goals>
                            <goal>yarn</goal>
                        </goals>
                        <phase>generate-resources</phase>
                        <configuration>
                            <arguments>install --registry https://registry.npmmirror.com</arguments>
                        </configuration>
                    </execution>
                    <execution>
                        <id>yarn build</id>
                        <goals>
                            <goal>yarn</goal>
                        </goals>
                        <configuration>
                            <arguments>run docs:build</arguments>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <version>${maven-resources-plugin.version}</version>
                <executions>
                    <execution>
                        <id>copy-resources</id>
                        <phase>prepare-package</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${project.build.directory}/classes/static</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${basedir}/.vitepress/dist</directory>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>
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