# sonatype/nexus3 镜像 {id=nexus}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `sonatype/nexus3` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/r/sonatype/nexus3)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/sonatype/nexus-public/-/pipelines
- 部署镜像流水线：https://gitlab.xuxiaowei.com.cn/docker-compose/nexus/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- [Sonatype Nexus Repository 3.71.0 发行说明](https://help.sonatype.com/en/sonatype-nexus-repository-3-71-0-release-notes.html)
- [升级到 Nexus Repository 3.71.0 及更高版本](https://help.sonatype.com/en/upgrading-to-nexus-repository-3-71-0-and-beyond.html)
- [配置并运行备份任务](https://help.sonatype.com/en/configure-and-run-the-backup-task.html)
- [nexus-db-migrator-3.70.1-03.jar](https://download.sonatype.com/nexus/nxrm3-migrator/nexus-db-migrator-3.70.1-03.jar)
- 镜像部署脚本

::: details docker-compose.yml 脚本

::: code-group

```yaml
#
# mkdir -p /srv/nexus
#
# export NEXUS_HOME=/srv/nexus  && chown -R 200 $NEXUS_HOME && docker compose up -d
# export NEXUS_HOME=`pwd`       && chown -R 200 $NEXUS_HOME && echo $NEXUS_HOME && docker compose up -d
# 默认密码位置：
# cat /srv/nexus/nexus-data/admin.password && echo
# cat ./nexus-data/admin.password && echo
#
services:
  nexus:
    # image: 'sonatype/nexus3:3.71.0'
    image: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.71.0'
    restart: always
    ports:
      - '48081:8081'
      - '48443:8443'
      - '48500-48550:48500-48550'
    volumes:
      - '$NEXUS_HOME/nexus-data:/nexus-data'
    container_name: nexus
```

:::

| 镜像                                                            | 说明                                                                                                      |
|---------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.71.0 | 3.71.0 代表版本号，[不兼容升级](https://help.sonatype.com/en/upgrading-to-nexus-repository-3-71-0-and-beyond.html) |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.70.1 | 3.70.1 代表版本号                                                                                            |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.70.0 |                                                                                                         |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.69.0 |                                                                                                         |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.68.1 |                                                                                                         |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.67.1 |                                                                                                         |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.66.0 |                                                                                                         |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.60.0 |                                                                                                         |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.59.0 |                                                                                                         |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.58.1 |                                                                                                         |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.38.1 |                                                                                                         |

::: code-group

```shell [创建容器]
sudo mkdir -p /nexus-data
sudo chown -R 200 /nexus-data

sudo docker run \
  -itd \
  --restart always \
  --name nexus3-3.71.0 \
  -p 48081:8081 \
  -p 48443:8443 \
  -p 48500-48550:48500-48550 \
  -v /nexus-data:/nexus-data \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3:3.71.0

# 默认密码位置：cat /nexus-data/admin.password && echo
```

:::

## author

| Name                       | Format | Type   | HTTP  | HTTPS | Version policy | Remote storage                                                      |
|----------------------------|--------|--------|-------|-------|----------------|---------------------------------------------------------------------|
| docker-hosted              | docker | hosted | 48500 | 48501 |                |                                                                     |
| maven-aliyun               | maven2 | proxy  |       |       | Release        | https://maven.aliyun.com/repository/public                          |
| maven-apache               | maven2 | proxy  |       |       | Release        | https://repo.maven.apache.org/maven2/                               |
| maven-apache-releases      | maven2 | proxy  |       |       | Release        | https://repository.apache.org/content/repositories/releases/        |
| maven-apache-snapshots     | maven2 | proxy  |       |       | Snapshot       | https://repository.apache.org/content/repositories/snapshots/       |
| maven-central              | maven2 | proxy  |       |       | Release        | https://repo1.maven.org/maven2/                                     |
| maven-huaweicloud          | maven2 | proxy  |       |       | Release        | https://mirrors.huaweicloud.com/repository/maven/                   |
| maven-public               | maven2 | group  |       |       | Mixed          |                                                                     |
| maven-releases             | maven2 | hosted |       |       | Release        |                                                                     |
| maven-shibboleth-releases  | maven2 | proxy  |       |       | Release        | https://build.shibboleth.net/maven/releases/                        |
| maven-shibboleth-snapshots | maven2 | proxy  |       |       | Snapshot       | https://build.shibboleth.net/maven/snapshots/                       |
| maven-snapshots            | maven2 | hosted |       |       | Snapshot       |                                                                     |
| maven-sonatype-public      | maven2 | proxy  |       |       | Mixed          | https://oss.sonatype.org/content/repositories/public/               |
| maven-sonatype-public-s01  | maven2 | proxy  |       |       | Mixed          | https://s01.oss.sonatype.org/content/repositories/public/           |
| maven-spring-snapshots     | maven2 | proxy  |       |       | Snapshot       | https://repo.spring.io/snapshot                                     |
| maven-tencent              | maven2 | proxy  |       |       | Release        | https://mirrors.cloud.tencent.com/nexus/repository/maven-public     |
| maven-topiam               | maven2 | proxy  |       |       | Mixed          | https://pingfangushi-maven.pkg.coding.net/repository/topiam/public/ |
| raw                        | raw    | hosted |       |       |                |                                                                     |
| raw-gradle                 | raw    | proxy  |       |       |                | https://mirrors.cloud.tencent.com/gradle                            |

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 table tr td:nth-child(1) {
    min-width: 455px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 table tr td:nth-child(2) {
    min-width: 215px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 #author + table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 #author + table tr td:nth-child(1) {
    min-width: 215px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 #author + table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 #author + table tr td:nth-child(2) {
    min-width: 70px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 #author + table tr th:nth-child(7), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nexus3 #author + table tr td:nth-child(7) {
    min-width: 490px;
}
</style>