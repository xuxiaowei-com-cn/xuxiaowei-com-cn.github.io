# kube-state-metrics 镜像

|            | 地址                                                                 |
|------------|--------------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/kube-state-metrics         |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/kube-state-metrics/-/pipelines |

## 说明

- 本镜像仅仅是将 `registry.k8s.io/kube-state-metrics/kube-state-metrics` 同步到 `xuxiaoweicomcn/kube-state-metrics`
- 未修改镜像内容
- 由于国内用户可能无法访问 `registry.k8s.io` 域名，所以才将 `registry.k8s.io/kube-state-metrics/kube-state-metrics`
  镜像同步到 `xuxiaoweicomcn/kube-state-metrics`
- 此镜像同步的初衷是为了辅助以下内容：
    - GitLab/Kubernetes 知识库：https://gitlab-k8s.xuxiaowei.com.cn
    - Kubernetes（k8s）自动安装配置脚本：https://gitee.com/xuxiaowei-com-cn/k8s.sh

## 镜像列表

- 此处仅列举了 v2.12.0 的镜像，其他版本未列出

| 镜像                                        | 说明            |
|-------------------------------------------|---------------|
| xuxiaoweicomcn/kube-state-metrics:v2.12.0 | v2.12.0 代表版本号 |
