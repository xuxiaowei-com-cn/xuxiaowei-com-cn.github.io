# Nginx 镜像 {id=nginx}

## 镜像列表 {id=image-list}

- 本镜像仅仅是将 `nginx` 同步到 `registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx`
- 未修改镜像内容
- [docker hub 镜像](https://hub.docker.com/_/nginx)
- 同步镜像流水线：https://gitlab.xuxiaowei.com.cn/hub.docker.com/github.com/nginx/nginx/-/pipelines
- 注意：仅提供以下版本，其他版本待更新，如需其他版本，请 [联系我](../../../guide/website.md)

| 镜像                                                                | 说明                                                            |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.27.2      | 1.27.2 代表版本号，支持：386、amd64、arm、arm64、mips64le、ppc64le、s390x 平台 |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.27.1      |                                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.27.0      |                                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.26.0      |                                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.25.0      |                                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.23.3      |                                                               |
| registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.14-alpine |                                                               |

::: code-group

```shell [创建容器]
sudo docker run \
  -itd \
  --restart always \
  --name nginx-1.27.1 \
  -p 80:80 \
  -p 443:443 \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.27.1
```

```shell [创建容器、挂载路径]
sudo docker run \
  -itd \
  --restart always \
  --name nginx-1.27.1 \
  -p 80:80 \
  -p 443:443 \
  -v /nginx/conf.d:/etc/nginx/conf.d \
  -d registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx:1.27.1
```

```shell [默认 /etc/nginx/nginx.conf]
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

```shell [默认 /etc/nginx/conf.d/default.conf]
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

:::

::: code-group

```shell [使用阿里云镜像]
cat /etc/apt/sources.list.d/debian.sources
sed -i "s#deb.debian.org#mirrors.aliyun.com#" /etc/apt/sources.list.d/debian.sources
sed -i "s#security.debian.org#mirrors.aliyun.com#" /etc/apt/sources.list.d/debian.sources
cat /etc/apt/sources.list.d/debian.sources
apt update
```

:::

<style>

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nginx table tr th:nth-child(1), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nginx table tr td:nth-child(1) {
    min-width: 480px;
}

._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nginx table tr th:nth-child(2), 
._image_registry_cn-qingdao_aliyuncs_com_xuxiaoweicomcn_nginx table tr td:nth-child(2) {
    min-width: 600px;
}

</style>