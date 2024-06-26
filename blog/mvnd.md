# 使用 mvnd 加快 Maven 项目构建速度 {id=mvnd}

[[toc]]

1. 昨天看到一篇文章，介绍 [mvnd 1.0 正式发布](https://mp.weixin.qq.com/s/rL7zTUdjP8sApeppFsyAJQ)，可以提高构建速度，
   于是在自己电脑上测试了一下确实能提高不少速度。

2. 在网上查了一下，并没有找到 mvnd 1.0 的镜像，于是自己便制作了一下镜像。

3. 如果 package 中包含中文文件名的文件，可能存在打包异常，请执行 `LANG=C.UTF-8` 命令后再打包（PS. 查看字符命令 `locale`）

## 仓库与代码 {id=code}

| 仓库/地址                                               | 仓库类型      | 说明                                                                    |
|-----------------------------------------------------|-----------|-----------------------------------------------------------------------|
| [maven-mvnd](https://github.com/apache/maven-mvnd/) | GitHub 仓库 | Apache 项目，制作镜像的源代码仓库                                                  |
| [mvnd](https://github.com/xuxiaowei-com-cn/mvnd)    | GitHub 仓库 | 作者仓库，使用 [maven-mvnd](https://github.com/apache/maven-mvnd/) 制作镜像的仓库源码 |
| [mvnd](https://gitee.com/xuxiaowei-com-cn/mvnd)     | Gitee 仓库  | 作者仓库，国内使用                                                             |
| [mvnd](https://gitlab.com/xuxiaowei-com-cn/mvnd)    | GitLab 仓库 | 作者仓库，用于在国外构建镜像，提高拉取镜像、构建镜像、推送镜像的速度                                    |

## 测试准备 {id=pre}

### 作者使用 `个人自建GitLab` 测试 `mvnd` 构建，更符合多数国内公司的使用场景 {id=env}

1. 2015 年笔记本
2. 2 核 4 线程
3. 16G 内存，长期固定内存占用超过 9G

### 使用 [pig](https://gitee.com/log4j/pig) 项目作为测试项目 {id=pig}

1. master 为 JDK 8 分支
2. jdk17 为 JDK 17 分支
3. 已上两个分支均测试

### 相关镜像列表 {id=pre-table}

| Docker Hub 镜像                                  | 国内镜像                                                                            | 说明                            |
|------------------------------------------------|---------------------------------------------------------------------------------|-------------------------------|
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-8-anolis  | registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-8-anolis  | 1.0.0 代表 mvnd 版本              |
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-11-anolis | registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-11-anolis | dragonwell-8 代表使用的是阿里巴巴 JDK 8 |
| xuxiaoweicomcn/mvnd:1.0.0-dragonwell-17-anolis | registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-17-anolis | anolis 代表是阿里云的龙蜥系统，兼容 CentOS  |

## 测试 mvn CI/CD {id=mvn-cicd}

### [mvn JDK 8 CI/CD](https://gitlab.xuxiaowei.com.cn/mirrors/gitee.com/log4j/pig/-/blob/xuxiaowei/master/.gitlab/ci/build-mvn.yml)

```yaml
build-mvn:
  stage: build
  image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-jdk-8
  script:
    - mvn clean package
  cache:
    key: "${CI_JOB_NAME}"
    paths:
      - .m2/repository
```

### [mvn JDK 17 CI/CD](https://gitlab.xuxiaowei.com.cn/mirrors/gitee.com/log4j/pig/-/blob/xuxiaowei/jdk17/.gitlab/ci/build-mvn.yml)

```yaml
build-mvn:
  stage: build
  image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven:3.6.3-openjdk-17
  script:
    - mvn clean package
  cache:
    key: "${CI_JOB_NAME}"
    paths:
      - .m2/repository
```

## 测试 mvnd CI/CD {id=mvnd-cicd}

### [mvnd JDK 8 CI/CD](https://gitlab.xuxiaowei.com.cn/mirrors/gitee.com/log4j/pig/-/blob/xuxiaowei/master/.gitlab/ci/build-mvnd.yml)

```yaml
build-mvnd:
  stage: build
  image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-8-anolis
  script:
    - mvnd clean package
  cache:
    key: "${CI_JOB_NAME}"
    paths:
      - .m2/repository
```

### [mvnd JDK 17 CI/CD](https://gitlab.xuxiaowei.com.cn/mirrors/gitee.com/log4j/pig/-/blob/xuxiaowei/jdk17/.gitlab/ci/build-mvnd.yml)

```yaml
build-mvnd:
  stage: build
  image: registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd:1.0.0-dragonwell-17-anolis
  script:
    - mvnd clean package
  cache:
    key: "${CI_JOB_NAME}"
    paths:
      - .m2/repository
```

## 构建时间 {id=build-time}

| 环境     | mvn CI/CD                                                                            | mvn 耗时   | mvnd CI/CD                                                                           | mvnd 耗时  | 耗时（mvnd ÷ mvn） |
|--------|--------------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------|----------|----------------|
| JDK 8  | [jobs/1306](https://gitlab.xuxiaowei.com.cn/mirrors/gitee.com/log4j/pig/-/jobs/1306) | 54.359 s | [jobs/1304](https://gitlab.xuxiaowei.com.cn/mirrors/gitee.com/log4j/pig/-/jobs/1304) | 36.391 s | 66.95 %        |
| JDK 17 | [jobs/1298](https://gitlab.xuxiaowei.com.cn/mirrors/gitee.com/log4j/pig/-/jobs/1298) | 41.450 s | [jobs/1307](https://gitlab.xuxiaowei.com.cn/mirrors/gitee.com/log4j/pig/-/jobs/1307) | 30.033 s | 72.46 %        |

## 分析 {id=analysis}

1. 无论 JDK 是 8 还是 17，速度都有不少的提升
2. 测试耗时影响因素比较多，比如服务器的 CPU、内存 型号及当前占用率等，测试环境相对稳定，结果比较可信
3. 使用 mvn 直接构建时，本身就不超过 1 分钟，使用 mvnd 提升效果可能看上去并不明显，如果使用 mvn 构建时间比较长，测试效果可能会更突出
4. 由于 mvnd 的设计原理，可以重复构建效率提升更多，此处使用独立的环境，构建完成便立即销毁，所以无法测试重复构建的效率
5. mvnd 官方暂未支持默认读取 `MAVEN_OPTS` 环境变量，如果要使用此环境变量，可以使用命令 `mvn clean package $MAVEN_OPTS`
   临时解决

<style>

._blog_mvnd #code + table tr th:nth-child(1), 
._blog_mvnd #code + table tr td:nth-child(1) {
    min-width: 110px;
}

._blog_mvnd #code + table tr th:nth-child(2), 
._blog_mvnd #code + table tr td:nth-child(2) {
    min-width: 100px;
}

._blog_mvnd #code + table tr th:nth-child(3), 
._blog_mvnd #code + table tr td:nth-child(3) {
    min-width: 500px;
}

._blog_mvnd #pre-table + table tr th:nth-child(1), 
._blog_mvnd #pre-table + table tr td:nth-child(1) {
    min-width: 350px;
}

._blog_mvnd #pre-table + table tr th:nth-child(2), 
._blog_mvnd #pre-table + table tr td:nth-child(2) {
    min-width: 580px;
}

._blog_mvnd #pre-table + table tr th:nth-child(3), 
._blog_mvnd #pre-table + table tr td:nth-child(3) {
    min-width: 315px;
}

._blog_mvnd #build-time + table tr th:nth-child(1), 
._blog_mvnd #build-time + table tr td:nth-child(1) {
    min-width: 65px;
}

._blog_mvnd #build-time + table tr th:nth-child(2), 
._blog_mvnd #build-time + table tr td:nth-child(2) {
    min-width: 95px;
}

._blog_mvnd #build-time + table tr th:nth-child(3), 
._blog_mvnd #build-time + table tr td:nth-child(3) {
    min-width: 80px;
}

._blog_mvnd #build-time + table tr th:nth-child(4), 
._blog_mvnd #build-time + table tr td:nth-child(4) {
    min-width: 100px;
}

._blog_mvnd #build-time + table tr th:nth-child(5), 
._blog_mvnd #build-time + table tr td:nth-child(5) {
    min-width: 90px;
}

._blog_mvnd #build-time + table tr th:nth-child(6), 
._blog_mvnd #build-time + table tr td:nth-child(6) {
    min-width: 160px;
}
</style>