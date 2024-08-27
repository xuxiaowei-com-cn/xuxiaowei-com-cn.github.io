# Docker {id=docker}

[[toc]]

## Docker 命令 {id=command}

- 执行 Docker 命令存在多种方式，如：本机执行、远程调用等

### 执行优先级（从高到低） {id=order}

| 配置                                    | 介绍                | 说明                                                                      |
|---------------------------------------|-------------------|-------------------------------------------------------------------------|
| `docker --host 172.25.25.4:2375`      | 在命令中指定远程调用的端口     | 需要被调用 docker 服务开通远程调用端口，或者使用参数别名 `docker -H 172.25.25.4:2375`           |
| `DOCKER_HOST=tcp://172.25.25.61:2375` | 使用环境变量远程调用 docker | 需要被调用 docker 服务开通远程调用端口，也可以使用 `DOCKER_HOST=unix:///var/run/docker.sock` |
| `/run/docker.sock`                    | Linux 文件（目录）      | 本机安装时默认使用，也可在当前机器的 Docker-in-Docker 中挂载此目录使用                            |

::: warning 警告

1. 环境中存在 `DOCKER_TLS_VERIFY`、`DOCKER_CERT_PATH` 等环境变量时将启用 Docker TLS 验证
2. 如果不想使用 Docker TLS 进行 Docker 调用，
   请使用命令 `unset DOCKER_TLS_VERIFY`、`unset DOCKER_CERT_PATH` 删除环境变量后再运行 docker

:::

### 查看远端镜像支持的所有架构 {id=manifest-inspect}

```shell
docker manifest inspect ghcr.io/graalvm/jdk-community:22.0.2
```

### 构建 {id=build}

| 命令/参数                                                           | 是否必填 | 说明                                                                       |
|-----------------------------------------------------------------|------|--------------------------------------------------------------------------|
| `docker build`                                                  | 必填   | 构建 Docker 镜像的命令                                                          |
| `-t registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/test:0.0.1` | 必填   | 指定构建镜像标签。数组，可指定多个标签。完整参数：`--tag`                                         |
| `.`                                                             | 必填   | Dockerfile 所在上下文目录，这里代表当前目录                                              |
| `--build-arg A=123`                                             | 可选   | 构建时指定的参数。数组，可指定多个参数                                                      |
| `--no-cache`                                                    | 可选   | 构建过程中不使用缓存，默认：使用缓存。此参数可能会导致重复构建速度降低。查看完整日志时需要，常与 `--progress plain` 一起使用 |
| `--progress plain`                                              | 可选   | 构建过程中删除格式，`plain` 会让输出更详细，易于调试                                           |
| `--push`                                                        | 可选   | 构建完成后自动推送镜像                                                              |

```shell
docker build --build-arg A=123 -t registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/test:0.0.1 . --no-cache --progress plain
```

### 保存/加载镜像 {id=save-load}

1. 用于备份/迁移镜像
2. 用于在网络不好/无网络/离线安装等环境下使用 Docker 镜像

```shell
# nginx-1.27.1.tar：导出到磁盘上的文件名
# nginx:1.27.1：镜像名称
docker save -o nginx-1.27.1.tar nginx:1.27.1
ls -lh
```

```shell
# nginx-1.27.1.tar：从磁盘导入的镜像文件名
docker load -i nginx-1.27.1.tar
docker images
```

### 导出/导入镜像 {id=export-import}

1. 将 Docker 容器导出为文件，常用于备份容器
2. 用于在不同机器间迁移 Docker 容器

```shell
docker export -o nginx_2024-08-27-10-19.tar nginx
```

```shell
docker import nginx_2024-08-27_10-19.tar nginx:2024-08-27-10-19
```

### 提交 {id=commit}

1. 将容器保存为一个 Docker 镜像

```shell
# <container_id>：容器名称/容器ID
# repository:tag：镜像名称
docker commit <container_id> repository:tag
```

## 开通远程调用的端口 {id=open-port}

::: danger 警告

1. 如果开通了远程调用的端口，所有能访问此端口的用户均由权限操作 docker，可能会受到攻击
2. 如果需要开通，请采取必要的安全措施，如：限制 IP 来源等

:::

```shell
vim /lib/systemd/system/docker.service
```

```shell
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
```

```shell
sudo systemctl daemon-reload
sudo systemctl restart docker
```

<style>

._blog_docker #order + table  tr th:nth-child(1), 
._blog_docker #order + table tr td:nth-child(1) {
    min-width: 270px;
}

._blog_docker #order + table tr th:nth-child(2), 
._blog_docker #order + table tr td:nth-child(2) {
    min-width: 210px;
}

._blog_docker #order + table tr th:nth-child(3), 
._blog_docker #order + table tr td:nth-child(3) {
    min-width: 645px;
}

._blog_docker #build + table  tr th:nth-child(1), 
._blog_docker #build + table tr td:nth-child(1) {
    min-width: 445px;
}

._blog_docker #build + table tr th:nth-child(2), 
._blog_docker #build + table tr td:nth-child(2) {
    min-width: 75px;
}

._blog_docker #build + table tr th:nth-child(3), 
._blog_docker #build + table tr td:nth-child(3) {
    min-width: 875px;
}
</style>