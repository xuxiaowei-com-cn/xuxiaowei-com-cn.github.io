# mvnd 镜像 {id=mvnd}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `xuxiaoweicomcn/mvnd` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd`，
- 基于 [apache/maven-mvnd](https://github.com/apache/maven-mvnd/) 制作的镜像，
  [Dockerfile](https://gitlab.com/xuxiaowei-com-cn/mvnd/-/blob/main/Dockerfile)
- [docker hub 镜像](https://hub.docker.com/r/xuxiaoweicomcn/mvnd)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/gitlab.com/xuxiaowei-com-cn/mvnd/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)
- `mvnd 2.0.0-beta-1` 使用了 `maven 4.0.0-beta-3`，而 `maven 4.0.0-beta-3` 仅支持 JDK `17+`，
  参见：[Maven Releases History](https://maven.apache.org/docs/history.html)，故 `mvnd 2.x` 只能提供 JDK `17`、`21`，
  无法提供 JDK `8`
- 如果 package 中包含中文文件名的文件，可能存在打包异常，请执行 `LANG=C.UTF-8` 命令后再打包（PS. 查看字符命令 `locale`）
- `multiple`
    - 代表多 JDK 镜像，包含 JDK `8`/`11`/`17`/`21`，默认 `21`
    - 基础镜像：https://gitee.com/xuxiaowei-com-cn/dragonwell

| 镜像                                                                                     | 说明                              |
|----------------------------------------------------------------------------------------|---------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:2.0.0-rc-1-dragonwell-17-anolis   |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:2.0.0-rc-1-dragonwell-21-anolis   |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:2.0.0-beta-1-dragonwell-17-anolis |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:2.0.0-beta-1-dragonwell-21-anolis |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.2-dragonwell-8-anolis         | 1.0.2 代表 mvnd 版本                |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.2-dragonwell-11-anolis        | anolis 代表是阿里云的龙蜥系统，兼容 CentOS    |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.2-dragonwell-17-anolis        | dragonwell-17 代表使用的是阿里巴巴 JDK 17 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.2-dragonwell-21-anolis        |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.2-multiple-anolis-23          | 多 dragonwell JDK 镜像             |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.1-dragonwell-8-anolis         |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.1-dragonwell-11-anolis        |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.1-dragonwell-17-anolis        |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.1-dragonwell-21-anolis        |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-8-anolis         |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-11-anolis        |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-17-anolis        |                                 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-21-anolis        |                                 |

::: code-group

```shell [mvnd:1.0.2-dragonwell-8-anolis]
sudo docker run \
  -itd \
  --restart always \
  --name mvnd-1.0.2-dragonwell-8-anolis \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.2-dragonwell-8-anolis
```

```shell [mvnd:1.0.2-dragonwell-17-anolis]
sudo docker run \
  -itd \
  --restart always \
  --name mvnd-1.0.2-dragonwell-17-anolis \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.2-dragonwell-17-anolis
```

:::

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_mvnd table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_mvnd table tr td:nth-child(1) {
    min-width: 630px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_mvnd table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_mvnd table tr td:nth-child(2) {
    min-width: 315px;
}

</style>