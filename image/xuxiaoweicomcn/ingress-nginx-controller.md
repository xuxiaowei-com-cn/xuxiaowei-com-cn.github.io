# Ingress Nginx Controller 镜像 {id=ingress-nginx-controller}

|            | 地址                                                               |
|------------|------------------------------------------------------------------|
| docker hub | https://hub.docker.com/r/xuxiaoweicomcn/ingress-nginx-controller |
| 构建镜像流水线    | https://gitlab.com/xuxiaowei-com-cn/ingress-nginx/-/pipelines    |

## 说明 {id=description}

- 本镜像仅仅是将 `registry.k8s.io/ingress-nginx/controller` 同步到 `xuxiaoweicomcn/ingress-nginx-controller`
- 未修改镜像内容
- 由于国内用户可能无法访问 `registry.k8s.io` 域名，所以才将 `registry.k8s.io/ingress-nginx/controller`
  镜像同步到 `xuxiaoweicomcn/ingress-nginx-controller`
- 此镜像同步的初衷是为了辅助以下内容：
    - GitLab/Kubernetes 知识库：https://gitlab-k8s.xuxiaowei.com.cn
    - Kubernetes（k8s）自动安装配置脚本：https://gitee.com/xuxiaowei-com-cn/k8s.sh

## 镜像列表 {id=image-list}

- 此处仅列举了 v1.10.1 的镜像，其他版本未列出，现已存在 `300+` 个镜像（2024-06-07 统计）

| 镜像                                                    | 说明                                  |
|-------------------------------------------------------|-------------------------------------|
| xuxiaoweicomcn/ingress-nginx-controller:v1.10.1       | v1.10.1 代表版本号，支持：amd64、arm、arm64 平台 |
| xuxiaoweicomcn/ingress-nginx-controller:v1.10.1-arm64 | v1.10.1 代表版本号，arm64 代表平台            |
| xuxiaoweicomcn/ingress-nginx-controller:v1.10.1-arm   | v1.10.1 代表版本号，arm 代表平台              |
| xuxiaoweicomcn/ingress-nginx-controller:v1.10.1-amd64 | v1.10.1 代表版本号，amd64 代表平台            |

<style>

._image_xuxiaoweicomcn_ingress-nginx-controller #ingress-nginx-controller + table tr th:nth-child(1), 
._image_xuxiaoweicomcn_ingress-nginx-controller #ingress-nginx-controller + table tr td:nth-child(1) {
    min-width: 115px;
}

._image_xuxiaoweicomcn_ingress-nginx-controller #ingress-nginx-controller + table tr th:nth-child(2), 
._image_xuxiaoweicomcn_ingress-nginx-controller #ingress-nginx-controller + table tr td:nth-child(2) {
    min-width: 475px;
}

._image_xuxiaoweicomcn_ingress-nginx-controller table tr th:nth-child(1), 
._image_xuxiaoweicomcn_ingress-nginx-controller table tr td:nth-child(1) {
    min-width: 390px;
}

._image_xuxiaoweicomcn_ingress-nginx-controller table tr th:nth-child(2), 
._image_xuxiaoweicomcn_ingress-nginx-controller table tr td:nth-child(2) {
    min-width: 365px;
}

</style>