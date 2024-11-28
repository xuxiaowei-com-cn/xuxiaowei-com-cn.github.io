# 容器时区 {id=container-time-zone}

[[toc]]

## centos

::: code-group

```shell [7.9.2009]
docker run \
  -itd \
  -e TZ=Asia/Shanghai \
  --name centos-7.9.2009 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/centos:7.9.2009
```

:::

## debian

::: code-group

```shell [bookworm]
docker run \
  -itd \
  -e TZ=Asia/Shanghai \
  --name debian-bookworm \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/debian:bookworm
```

```shell [bullseye]
docker run \
  -itd \
  -e TZ=Asia/Shanghai \
  --name debian-bullseye \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/debian:bullseye
```

```shell [buster]
docker run \
  -itd \
  -e TZ=Asia/Shanghai \
  --name debian-buster \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/debian:buster
```

```shell [stretch]
docker run \
  -itd \
  -e TZ=Asia/Shanghai \
  --name debian-stretch \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/debian:stretch
```

```shell [jessie]
docker run \
  -itd \
  -e TZ=Asia/Shanghai \
  --name debian-jessie \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/debian:jessie
```

:::

## ubuntu

::: code-group

```shell [noble]
docker run \
  -itd \
  -v /etc/localtime:/etc/localtime:ro \
  --name ubuntu-noble \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ubuntu:noble
```

```shell [jammy]
docker run \
  -itd \
  -v /etc/localtime:/etc/localtime:ro \
  --name ubuntu-jammy \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ubuntu:jammy
```

```shell [focal]
docker run \
  -itd \
  -v /etc/localtime:/etc/localtime:ro \
  --name ubuntu-focal \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ubuntu:focal
```

```shell [bionic]
docker run \
  -itd \
  -v /etc/localtime:/etc/localtime:ro \
  --name ubuntu-bionic \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ubuntu:bionic
```

```shell [xenial]
docker run \
  -itd \
  -v /etc/localtime:/etc/localtime:ro \
  --name ubuntu-xenial \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ubuntu:xenial
```

:::
