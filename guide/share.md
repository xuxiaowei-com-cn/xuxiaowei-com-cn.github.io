# 共享文件 {id=share}

[[toc]]

## 云盘说明 {id=explain}

1. 云盘总大小 `5T`，截止 `2024-12-05` 已使用 `421.5G`
2. 云盘同步软件 https://github.com/abraunegg/onedrive
3. 云盘用途
    - 分享个人文件
    - 同步 Docker 镜像，避免无法下载，用于离线使用 Docker 镜像
    - 同步 GitHub 项目发布文件下载
4. 批量执行脚本
    1. Shell 拉取并保存 kubernetes 镜像: https://gitlab.xuxiaowei.com.cn/-/snippets/34
    2. Shell 下载 GitHub 产物: https://gitlab.xuxiaowei.com.cn/-/snippets/35

## github.com 项目发布文件下载 {id=github.com-releases-download}

- 链接:
  https://xuxiaowei-my.sharepoint.com/:f:/g/personal/share_xuxiaowei_com_cn/EiBVhzqKnSdLpR42bKUXVUABzwfjjWcrl2EM25WlEgUOrQ

### 产物镜像包含内容 {id=products-image-content}

- github.com/openssl/openssl

## Docker 离线镜像 {id=docker-offline-image}

- 链接:
  https://xuxiaowei-my.sharepoint.com/:f:/g/personal/share_xuxiaowei_com_cn/EjjHOkWYEPdFlpOqfcza1fYBq6kPtWLJ8ZmdosSeGYBMKQ

### 镜像包含内容 {id=mirror-content}

- registry.k8s.io/coredns/coredns
- registry.k8s.io/etcd
- registry.k8s.io/kube-apiserver
- registry.k8s.io/kube-controller-manager
- registry.k8s.io/kube-proxy
- registry.k8s.io/kube-scheduler
- registry.k8s.io/pause

## Kubernetes 作者编译的二进制可执行文件 {id=kubernetes-binary-executable-file}

- 链接:
  https://xuxiaowei-my.sharepoint.com/:f:/g/personal/share_xuxiaowei_com_cn/EvcUl0DY4f1Km86NLrmuI3cB2yEbSaEgH9f1sgy3rHVrwQ

### 作者编译的二进制可执行文件包含内容 {id=kubernetes-binary-executable-file-content}

- kubeadm-100-year: 仅修改 `kubeadm` 程序关于 `证书有效期` 的代码，源码 https://gitee.com/xuxiaowei-com-cn/kubernetes-binary
    1. 使用 `kubeadm` `初始化集群` 时，`CA 证书` 有效期设置为 `100 年`
    2. 使用 `kubeadm` `初始化集群` 时，`客户证书` 有效期设置为 `100 年`
    3. 使用 `kubeadm` 对 `客户证书续期` 时，`客户证书` 有效期设置为 `100 年`
