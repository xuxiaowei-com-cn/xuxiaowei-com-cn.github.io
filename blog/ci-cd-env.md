# 流水线 CI/CD 环境变量 env {id=ci-cd-env}

[[toc]]

常用环境变量列举与对比

## GitLab env {id=gitlab}

| 变量                                    | 示例                                                                                      | 说明                       |
|---------------------------------------|-----------------------------------------------------------------------------------------|--------------------------|
| `CI_PROJECT_ID`                       | 1                                                                                       | 项目 ID，自增，在`实例`中唯一        |
| `CI_PROJECT_NAME`                     | spring-cloud-xuxiaowei                                                                  | 项目 名称                    |
| `CI_PROJECT_NAMESPACE_ID`             | 4                                                                                       | 命名空间 ID，自增，在`实例`中唯一      |
| `CI_PROJECT_NAMESPACE`                | xuxiaowei-cloud                                                                         | 命名空间 名称                  |
| `CI_PROJECT_DIR`                      | /builds/xuxiaowei-cloud/spring-cloud-xuxiaowei                                          | 当前工作区                    |
| `RUNNER_TEMP_PROJECT_DIR`             | /builds/xuxiaowei-cloud/spring-cloud-xuxiaowei.tmp                                      | 临时文件夹                    |
|                                       |                                                                                         |                          |
| `CI_PIPELINE_IID`                     | 2                                                                                       | 项目流水线 ID，自增，在`本项目`中唯一    |
| `CI_PIPELINE_ID`                      | 2446                                                                                    | 全局流水线 ID，自增，在`实例`中唯一     |
| `CI_PIPELINE_URL`                     | https://gitlab.xuxiaowei.com.cn/xuxiaowei-cloud/spring-cloud-xuxiaowei/-/pipelines/2446 | 流水线 URL                  |
| `CI_PIPELINE_CREATED_AT`              | 20244-07-23T07:53:41+08:00                                                              | 流水线 创建时间                 |
| `CI_JOB_ID`                           | 5659                                                                                    | 作业 ID，自增，在`实例`中唯一        |
| `CI_JOB_URL`                          | https://gitlab.xuxiaowei.com.cn/xuxiaowei-cloud/spring-cloud-xuxiaowei/-/jobs/5659      | 作业 URL                   |
| `CI_JOB_STARTED_AT`                   | 20244-07-23T08:22:15+08:00                                                              | 作业 创建时间                  |
|                                       |                                                                                         |                          |
| `CI_COMMIT_BRANCH`                    | consul/spring-boot-3                                                                    | 当前分支                     |
| `CI_COMMIT_SHA`                       | 3126307fe95cc2220dfa50802e7b71fa5d847178                                                | 提交 SHA                   |
| `CI_COMMIT_SHORT_SHA`                 | 3126307f                                                                                | 提交 SHA 前八位               |
| `CI_COMMIT_MESSAGE`                   | Merge pull request #565 from...                                                         | 提交 消息                    |
| `CI_COMMIT_TIMESTAMP`                 | 20244-07-23T07:48:55+08:00                                                              | 提交 时间                    |
| `CI_COMMIT_AUTHOR`                    | 徐晓伟 <xuxiaowei@xuxiaowei.com.cn>                                                        | 提交 作者                    |
|                                       |                                                                                         |                          |
| `CI_MERGE_REQUEST_IID`                | 4                                                                                       | 项目 PR 的ID，自增，在`本项目`中唯一   |
| `CI_MERGE_REQUEST_ID`                 | 14                                                                                      | 全局 PR 的ID，自增，在`实例`中唯一    |
| `CI_MERGE_REQUEST_TARGET_BRANCH_NAME` | consul/spring-boot-3                                                                    | PR 的目标分支名称               |
|                                       |                                                                                         |                          |
| `CI_SERVER_HOST`                      | gitlab.xuxiaowei.com.cn                                                                 | 实例域名                     |
| `CI_API_V4_URL`                       | https://gitlab.xuxiaowei.com.cn/api/v4                                                  | API 接口前缀地址               |
|                                       |                                                                                         |                          |
| `GITLAB_USER_ID`                      | 2                                                                                       | GitLab 用户 ID，自增，本`实例`中唯一 |
| `GITLAB_USER_LOGIN`                   | xuxiaowei                                                                               | GitLab 用户 登录名，本`实例`中唯一   |
| `GITLAB_USER_EMAIL`                   | xuxiaowei@xuxiaowei.com.cn                                                              | GitLab 用户 邮箱             |

## GitHub env {id=github}

| 变量                        | 示例                                                                                 | 说明                                                                                 |
|---------------------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| `GITHUB_REPOSITORY`       | xuxiaowei-cloud/spring-cloud-xuxiaowei                                             | 仓库，包含命名空间                                                                          |
| `GITHUB_REPOSITORY_OWNER` | xuxiaowei-cloud                                                                    | 仓库所有者                                                                              |
|                           |                                                                                    |                                                                                    |
| `GITHUB_ACTOR`            | xuxiaowei-com-cn                                                                   | GitHub 作者                                                                          |
|                           |                                                                                    |                                                                                    |
| `GITHUB_RUN_ID`           | 10098348124                                                                        | 全局流水线 ID，自增，在`实例`中唯一                                                               |
| `GITHUB_RUN_NUMBER`       | 2                                                                                  | 项目流水线 ID，自增，在`本项目`中唯一                                                              |
|                           |                                                                                    |                                                                                    |
| `GITHUB_SERVER_URL`       | https://github.com                                                                 | 服务器地址                                                                              |
| `GITHUB_API_URL`          | https://api.github.com                                                             | API 地址                                                                             |
|                           |                                                                                    |                                                                                    |
| `GITHUB_WORKSPACE`        | /home/runner/work/spring-cloud-xuxiaowei/spring-cloud-xuxiaowei                    | 当前工作区                                                                              |
| `RUNNER_TEMP`             | /home/runner/work/_temp                                                            | 临时文件夹                                                                              |
|                           |                                                                                    |                                                                                    |
| `GITHUB_SHA`              | 3126307fe95cc2220dfa50802e7b71fa5d847178                                           | 提交 SHA                                                                             |
| `GITHUB_REF_NAME`         | spring-boot-2                                                                      | 当前分支                                                                               |
|                           |                                                                                    |                                                                                    |
|                           | https://github.com/xuxiaowei-cloud/spring-cloud-xuxiaowei/actions/runs/10098348124 | 流水线 URL，需要手动拼接：`$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID` |

## Jenkins env {id=jenkins}

| 变量              | 示例                                                                | 说明                    |
|-----------------|-------------------------------------------------------------------|-----------------------|
| `JENKINS_URL`   | https://jenkins.xuxiaowei.com.cn/                                 | Jenkins 地址            |
|                 |                                                                   |                       |
| `BUILD_NUMBER`  | 31                                                                | 项目流水线 ID，自增，在`本项目`中唯一 |
| `BUILD_URL`     | https://jenkins.xuxiaowei.com.cn/job/spring-cloud-xuxiaowei-2/31/ | 流水线 URL               |
| `JOB_URL`       | https://jenkins.xuxiaowei.com.cn/job/spring-cloud-xuxiaowei-2/    | 作业 地址                 |
|                 |                                                                   |                       |
| `JENKINS_HOME`  | /var/jenkins_home                                                 | Jenkins 主目录           |
| `WORKSPACE`     | /var/jenkins_home/workspace/spring-cloud-xuxiaowei-2              | 当前工作区                 |
| `WORKSPACE_TMP` | /var/jenkins_home/workspace/spring-cloud-xuxiaowei-2@tmp          | 临时文件夹                 |

## Comparison {id=comparison}

| 名称      | GitLab                    | GitHub                                                              | Jenkins         |
|---------|---------------------------|---------------------------------------------------------------------|-----------------|
| 当前工作区   | `CI_PROJECT_DIR`          | `GITHUB_WORKSPACE`                                                  | `WORKSPACE`     |
| 临时文件夹   | `RUNNER_TEMP_PROJECT_DIR` | `RUNNER_TEMP`                                                       | `WORKSPACE_TMP` |
| 流水线 URL | `CI_PIPELINE_URL`         | `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID` | `BUILD_URL`     |

<style>

._blog_ci-cd-env #gitlab + table tr th:nth-child(1), 
._blog_ci-cd-env #gitlab + table tr td:nth-child(1) {
    min-width: 265px;
}

._blog_ci-cd-env #gitlab + table tr th:nth-child(2), 
._blog_ci-cd-env #gitlab + table tr td:nth-child(2) {
    min-width: 635px;
}

._blog_ci-cd-env #gitlab + table tr th:nth-child(3), 
._blog_ci-cd-env #gitlab + table tr td:nth-child(3) {
    min-width: 270px;
}

._blog_ci-cd-env #github + table tr th:nth-child(1), 
._blog_ci-cd-env #github + table tr td:nth-child(1) {
    min-width: 185px;
}

._blog_ci-cd-env #github + table tr th:nth-child(2), 
._blog_ci-cd-env #github + table tr td:nth-child(2) {
    min-width: 615px;
}

._blog_ci-cd-env #github + table tr th:nth-child(3), 
._blog_ci-cd-env #github + table tr td:nth-child(3) {
    min-width: 655px;
}

._blog_ci-cd-env #jenkins + table tr th:nth-child(1), 
._blog_ci-cd-env #jenkins + table tr td:nth-child(1) {
    min-width: 120px;
}

._blog_ci-cd-env #jenkins + table tr th:nth-child(2), 
._blog_ci-cd-env #jenkins + table tr td:nth-child(2) {
    min-width: 475px;
}

._blog_ci-cd-env #jenkins + table tr th:nth-child(3), 
._blog_ci-cd-env #jenkins + table tr td:nth-child(3) {
    min-width: 270px;
}

._blog_ci-cd-env #comparison + table tr th:nth-child(1), 
._blog_ci-cd-env #comparison + table tr td:nth-child(1) {
    min-width: 95px;
}

._blog_ci-cd-env #comparison + table tr th:nth-child(2), 
._blog_ci-cd-env #comparison + table tr td:nth-child(2) {
    min-width: 190px;
}

._blog_ci-cd-env #comparison + table tr th:nth-child(3), 
._blog_ci-cd-env #comparison + table tr td:nth-child(3) {
    min-width: 470px;
}

._blog_ci-cd-env #comparison + table tr th:nth-child(4), 
._blog_ci-cd-env #comparison + table tr td:nth-child(4) {
    min-width: 120px;
}

</style>