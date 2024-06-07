# Ingress Nginx Controller Chroot 镜像

|            | 地址                                                                      |
|------------|-------------------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/ingress-nginx-controller-chroot |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/ingress-nginx/-/pipelines           |

## 说明

- 本镜像仅仅是将 `registry.k8s.io/ingress-nginx/controller-chroot`
  同步到 `xuxiaoweicomcn/ingress-nginx-controller-chroot`
- 未修改镜像内容
- 由于国内用户可能无法访问 `registry.k8s.io` 域名，所以才将 `registry.k8s.io/ingress-nginx/controller-chroot`
  镜像同步到 `xuxiaoweicomcn/ingress-nginx-controller-chroot`
- 此镜像同步的初衷是为了辅助以下内容：
    - GitLab/Kubernetes 知识库：https://gitlab-k8s.xuxiaowei.com.cn
    - Kubernetes（k8s）自动安装配置脚本：https://gitee.com/xuxiaowei-com-cn/k8s.sh

## 镜像列表

- 此处仅列举了 v1.9.6 的镜像，其他版本未列出，现已存在 `130+` 个镜像（2024-06-07 统计）

| 镜像                                                          | 说明                                       |
|-------------------------------------------------------------|------------------------------------------|
| xuxiaoweicomcn/ingress-nginx-controller-chroot:v1.9.6       | v1.9.6 代表版本号，支持：amd64、arm、arm64、s390x 平台 |
| xuxiaoweicomcn/ingress-nginx-controller-chroot:v1.9.6-arm64 | v1.9.6 代表版本号，arm64 代表平台                  |
| xuxiaoweicomcn/ingress-nginx-controller-chroot:v1.9.6-arm   | v1.9.6 代表版本号，arm 代表平台                    |
| xuxiaoweicomcn/ingress-nginx-controller-chroot:v1.9.6-amd64 | v1.9.6 代表版本号，amd64 代表平台                  |
| xuxiaoweicomcn/ingress-nginx-controller-chroot:v1.9.6-s390x | v1.9.6 代表版本号，s390x 代表平台                  |
