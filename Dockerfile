# FROM nginx:1.26.0
FROM registry.jihulab.com/xuxiaowei-jihu/xuxiaowei-cloud/spring-cloud-xuxiaowei/nginx:1.26.0

LABEL maintainer="徐晓伟 <xuxiaowei@xuxiaowei.com.cn>"

ARG CI_PIPELINE_URL

ENV CI_PIPELINE_URL=${CI_PIPELINE_URL}

ADD public /usr/share/nginx/html
ADD docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i '/http {/a\    server_tokens off;' /etc/nginx/nginx.conf
