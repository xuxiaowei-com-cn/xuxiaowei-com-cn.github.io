# metrics-server 镜像 {id=metrics-server}

|            | 地址                                                             |
|------------|----------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/metrics-server         |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/metrics-server/-/pipelines |

## 说明 {id=description}

- 本镜像仅仅是将 `registry.k8s.io/metrics-server/metrics-server` 同步到 `xuxiaoweicomcn/metrics-server`
- 未修改镜像内容
- 由于国内用户可能无法访问 `registry.k8s.io` 域名，所以才将 `registry.k8s.io/metrics-server/metrics-server`
  镜像同步到 `xuxiaoweicomcn/metrics-server`
- 此镜像同步的初衷是为了辅助以下内容：
    - GitLab/Kubernetes 知识库：https://gitlab-k8s.xuxiaowei.com.cn
    - Kubernetes（k8s）自动安装配置脚本：https://gitee.com/xuxiaowei-com-cn/k8s.sh

## 镜像列表 {id=image-list}

- 此处仅列举了 v0.7.1 的镜像，其他版本未列出

| 镜像                                   | 说明           |
|--------------------------------------|--------------|
| xuxiaoweicomcn/metrics-server:v0.7.1 | v0.7.1 代表版本号 |

<style>

._image_xuxiaoweicomcn_metrics-server #metrics-server + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_metrics-server #metrics-server + table tr td:nth-child(1) {
    min-width: 115px;
}

._image_xuxiaoweicomcn_metrics-server #metrics-server + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_metrics-server #metrics-server + table tr td:nth-child(2) {
    min-width: 455px;
}

._image_xuxiaoweicomcn_metrics-server table tr th:nth-child(1), 
._image_xuxiaoweicomcn_metrics-server table tr td:nth-child(1) {
    min-width: 275px;
}

._image_xuxiaoweicomcn_metrics-server table tr th:nth-child(2), 
._image_xuxiaoweicomcn_metrics-server table tr td:nth-child(2) {
    min-width: 130px;
}

</style>