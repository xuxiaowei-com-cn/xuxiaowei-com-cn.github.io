# ldd 版本 {id=ldd}

若当前系统的 ldd 版本过低时，运行软件可能会出现错误：`/lib64/libc.so.6: version 'GLIBC_2.32' not found`

::: code-group

```shell [查看 ldd 版本]
ldd --version
```

```shell [查看 ldd 版本：纯数字]
ldd --version | head -n 1 | awk '{print $NF}'
```

```shell [ldd 查看当前系统是否能运行软件]
ldd xxx
```

:::

## Docker 镜像 {id=docker-images}

| 镜像                             | ldd 版本(纯数字) | ldd 版本                                     | 年份   |
|--------------------------------|-------------|--------------------------------------------|------|
| openanolis/anolisos:7.9-x86_64 | 2.17        | ldd (GNU libc) 2.17                        | 2012 |
| openanolis/anolisos:8.2-x86_64 | 2.28        | ldd (GNU libc) 2.28                        | 2018 |
| openanolis/anolisos:8.4-x86_64 | 2.28        | ldd (GNU libc) 2.28                        | 2018 |
| openanolis/anolisos:8.6-x86_64 | 2.28        | ldd (GNU libc) 2.28                        | 2018 |
| openanolis/anolisos:8.8        | 2.28        | ldd (GNU libc) 2.28                        | 2018 |
| openanolis/anolisos:23         | 2.36        | ldd (GNU libc) 2.36                        | 2022 |
| debian:9.13                    | 2.24        | ldd (Debian GLIBC 2.24-11+deb9u4) 2.24     | 2016 |
| debian:10.13                   | 2.28        | ldd (Debian GLIBC 2.28-10+deb10u2) 2.28    | 2018 |
| debian:11.8                    | 2.31        | ldd (Debian GLIBC 2.31-13+deb11u7) 2.31    | 2020 |
| debian:12.4                    | 2.36        | ldd (Debian GLIBC 2.36-9+deb12u3) 2.36     | 2022 |
| ubuntu:12.04                   | 2.15        | ldd (Ubuntu EGLIBC 2.15-0ubuntu10.18) 2.15 | 2012 |
| ubuntu:14.04                   | 2.19        | ldd (Ubuntu EGLIBC 2.19-0ubuntu6.15) 2.19  | 2014 |
| ubuntu:15.10                   | 2.21        | ldd (Ubuntu GLIBC 2.21-0ubuntu4.3) 2.21    | 2015 |
| ubuntu:16.04                   | 2.23        | ldd (Ubuntu GLIBC 2.23-0ubuntu11.3) 2.23   | 2016 |
| ubuntu:17.10                   | 2.26        | ldd (Ubuntu GLIBC 2.26-0ubuntu2.1) 2.26    | 2017 |
| ubuntu:18.04                   | 2.27        | ldd (Ubuntu GLIBC 2.27-3ubuntu1.6) 2.27    | 2018 |
| ubuntu:19.10                   | 2.3         | ldd (Ubuntu GLIBC 2.30-0ubuntu2.1) 2.30    | 2019 |
| ubuntu:20.04                   | 2.31        | ldd (Ubuntu GLIBC 2.31-0ubuntu9.14) 2.31   | 2020 |
| ubuntu:21.10                   | 2.34        | ldd (Ubuntu GLIBC 2.34-0ubuntu3.2) 2.34    | 2021 |
| ubuntu:22.04                   | 2.35        | ldd (Ubuntu GLIBC 2.35-0ubuntu3.5) 2.35    | 2022 |
| ubuntu:23.10                   | 2.38        | ldd (Ubuntu GLIBC 2.38-1ubuntu6) 2.38      | 2023 |
| ubuntu:24.04                   | 2.38        | ldd (Ubuntu GLIBC 2.38-3ubuntu1) 2.38      | 2023 |

<style>

._blog_ldd #docker-images + table tr th:nth-child(1), 
._blog_ldd #docker-images + table tr td:nth-child(1) {
    min-width: 235px;
}

._blog_ldd #docker-images + table tr th:nth-child(2), 
._blog_ldd #docker-images + table tr td:nth-child(2) {
    min-width: 125px;
}

._blog_ldd #docker-images + table tr th:nth-child(3), 
._blog_ldd #docker-images + table tr td:nth-child(3) {
    min-width: 310px;
}

._blog_ldd #docker-images + table tr th:nth-child(4), 
._blog_ldd #docker-images + table tr td:nth-child(4) {
    min-width: 55px;
}
</style>