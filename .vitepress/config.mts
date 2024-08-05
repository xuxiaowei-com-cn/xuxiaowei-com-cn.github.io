import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "徐晓伟",
  description: "一个半路出家不务正业的程序员",
  lang: 'zh-CN',
  base: '/',
  head: [
    [ 'script', { id: 'baidu' },
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?1da3ac34d67e4132de65ce914d2067ec";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    [ 'style', {},
      `
      td, th {
        padding: 8px !important;
      }
      @media only screen and (min-width: 1440px) {
        :root {
          --vp-layout-max-width: 100%;
        }
        .VPDoc.has-aside .content-container {
          max-width: 100% !important;
        }
      }
      `
    ]
  ],
  lastUpdated: true,
  srcExclude: [ 'README.md' ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '个人简介',
        link: '/guide/intro',
        activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
      },
      {
        text: '其他文档',
        items: [
          {
            text: '徐晓伟微服务',
            link: 'https://docs.xuxiaowei.cloud'
          },
          {
            text: 'GitLab/Kubernetes 知识库',
            link: 'https://gitlab-k8s.xuxiaowei.com.cn'
          },
          {
            text: 'Kubernetes（k8s）一键安装配置脚本',
            link: 'https://gitee.com/xuxiaowei-com-cn/k8s.sh'
          },
          {
            text: 'Kubernetes（k8s）文档国内镜像',
            link: 'https://kubernetes.xuxiaowei.com.cn/zh-cn/'
          },
          {
            text: 'Docker 文档国内镜像',
            link: 'https://docker-docs.xuxiaowei.com.cn'
          },
          {
            text: '网盾',
            link: 'https://gateway-shield.xuxiaowei.com.cn'
          },
          {
            text: '根据 IP 获取地理信息',
            link: 'https://ip.xuxiaowei.com.cn'
          },
          {
            text: '短网址',
            link: 'https://xxw.ac.cn'
          },
          {
            text: 'GitLab',
            link: 'https://gitlab.xuxiaowei.com.cn/xuxiaowei-com-cn/readme/-/blob/main/README.md'
          },
          {
            text: 'Jenkins',
            link: 'https://jenkins.xuxiaowei.com.cn'
          },
          {
            text: 'markdown-it',
            link: 'https://markdown-it.xuxiaowei.com.cn'
          },
          {
            text: '工具',
            link: 'https://tools.xuxiaowei.com.cn'
          },
        ]
      },
    ],
    logo: { src: '/favicon.ico', width: 24, height: 24 },
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: '导读',
        collapsed: false,
        // 由于下方链接使用了其他域名，所以此处不能使用基础地址
        // base: '/guide/',
        items: [
          { text: '个人简介', link: '/guide/intro' },
          { text: '个人网址', link: '/guide/website' },
          // 由于此处链接使用了其他域名，所以上方不能使用基础地址
          { text: '赞助', link: 'https://docs.xuxiaowei.cloud/spring-cloud-xuxiaowei/guide/contributes.html' },
          { text: '视频', link: 'https://docs.xuxiaowei.cloud/spring-cloud-xuxiaowei/guide/video.html' },
        ]
      },
      {
        text: '项目',
        collapsed: false,
        base: '/project/',
        items: [
          { text: '个人项目', link: 'personal' },
        ]
      },
      {
        text: '博客',
        collapsed: false,
        base: '/blog/',
        items: [
          { text: '使用 mvnd 加快 Maven 项目构建速度', link: 'mvnd' },
          { text: 'Node 配置文件', link: 'npmrc' },
          { text: '流水线环境变量', link: 'ci-cd-env' },
          { text: 'JDK 17', link: 'jdk-17' },
          { text: 'JDK 版本与字节码', link: 'jdk-major' },
          { text: 'Docker', link: 'docker' },
          { text: 'ldd', link: 'ldd' },
        ]
      },
      {
        text: '镜像',
        collapsed: true,
        base: '/image/',
        items: [
          {
            text: 'registry.cn-qingdao.aliyuncs.com',
            collapsed: false,
            items: [
              {
                text: 'xuxiaoweicomcn',
                collapsed: false,
                items: [
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/apache-kafka', text: 'apache/kafka' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/bitnami-kafka', text: 'bitnami/kafka' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/bitnami-kubectl', text: 'bitnami/kubectl' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni', text: 'calico/cni' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-kube-controllers', text: 'calico/kube-controllers' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-node', text: 'calico/node' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-pod2daemon-flexvol', text: 'calico/pod2daemon-flexvol' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/consul', text: 'hashicorp/consul' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker', text: 'docker' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker-docs', text: 'docker-docs' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/elasticsearch', text: 'elasticsearch' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/filebeat', text: 'filebeat' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab', text: 'gitlab' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab-runner', text: 'gitlab/gitlab-runner' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/golang', text: 'golang' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/graalvm', text: 'graalvm' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gradle', text: 'gradle' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/httpd', text: 'httpd' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ingress-nginx-controller', text: 'registry.k8s.io/ingress-nginx/controller' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ingress-nginx-controller-chroot', text: 'registry.k8s.io/ingress-nginx/controller-chroot' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ingress-nginx-kube-webhook-certgen', text: 'registry.k8s.io/ingress-nginx/kube-webhook-certgen' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/java', text: 'java' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins', text: 'jenkins' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kaniko-project-executor', text: 'gcr.io/kaniko-project/executor' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kibana', text: 'kibana' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-apiserver', text: 'registry.k8s.io/kube-apiserver' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-controller-manager', text: 'registry.k8s.io/kube-controller-manager' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-proxy', text: 'registry.k8s.io/kube-proxy' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-scheduler', text: 'registry.k8s.io/kube-scheduler' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kubernetes-website', text: 'kubernetes-website' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/logstash', text: 'logstash' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven', text: 'maven' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio', text: 'minio/minio' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd', text: 'mvnd' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mysql', text: 'mysql' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nacos-server', text: 'nacos/nacos-server' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3', text: 'sonatype/nexus3' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx', text: 'nginx' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node', text: 'node' },
                  { link: 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis', text: 'redis' },
                ]
              },
            ]
          },
          {
            text: 'springcloudxuxiaowei',
            collapsed: false,
            items: [
              { link: 'springcloudxuxiaowei/docs', text: 'docs' },
              { link: 'springcloudxuxiaowei/playwright', text: 'playwright' },
              { link: 'springcloudxuxiaowei/playwright-dragonwell', text: 'playwright-dragonwell' },
              { link: 'springcloudxuxiaowei/playwright-maven', text: 'playwright-maven' },
            ]
          },
          {
            text: 'xuxiaoweicomcn',
            collapsed: false,
            items: [
              { link: 'xuxiaoweicomcn/docker-docs', text: 'docker-docs' },
              { link: 'xuxiaoweicomcn/docs', text: 'docs' },
              { link: 'xuxiaoweicomcn/gateway-shield', text: 'gateway-shield' },
              { link: 'xuxiaoweicomcn/gateway-shield-docs', text: 'gateway-shield-docs' },
              { link: 'xuxiaoweicomcn/gitlab-k8s', text: 'gitlab-k8s' },
              { link: 'xuxiaoweicomcn/gitlab-runner-helper', text: 'gitlab-runner-helper' },
              { link: 'xuxiaoweicomcn/ingress-nginx-controller', text: 'ingress-nginx-controller' },
              { link: 'xuxiaoweicomcn/ingress-nginx-controller-chroot', text: 'ingress-nginx-controller-chroot' },
              { link: 'xuxiaoweicomcn/ingress-nginx-kube-webhook-certgen', text: 'ingress-nginx-kube-webhook-certgen' },
              { link: 'xuxiaoweicomcn/jenkins', text: 'jenkins' },
              { link: 'xuxiaoweicomcn/kaniko-project-executor', text: 'kaniko-project-executor' },
              { link: 'xuxiaoweicomcn/kubernetes-website', text: 'kubernetes-website' },
              { link: 'xuxiaoweicomcn/kube-state-metrics', text: 'kube-state-metrics' },
              { link: 'xuxiaoweicomcn/maven-mysql-client', text: 'maven-mysql-client' },
              { link: 'xuxiaoweicomcn/metrics-server', text: 'metrics-server' },
              { link: 'xuxiaoweicomcn/mvnd', text: 'mvnd' },
              { link: 'xuxiaoweicomcn/openjdk-mysql-client', text: 'openjdk-mysql-client' },
              { link: 'xuxiaoweicomcn/xuxiaowei-tools', text: 'xuxiaowei-tools' },
            ]
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xuxiaowei-com-cn/xuxiaowei-com-cn.github.io' },
      { link: 'https://gitee.com/xuxiaowei-com-cn/xuxiaowei-com-cn/', icon: { svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1711680016792" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5075" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="5076"></path></svg>' } },
      { link: 'https://space.bilibili.com/198580655', icon: { svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1711680570691" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6989" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M0 0m184.32 0l655.36 0q184.32 0 184.32 184.32l0 655.36q0 184.32-184.32 184.32l-655.36 0q-184.32 0-184.32-184.32l0-655.36q0-184.32 184.32-184.32Z" fill="#EC5D85" p-id="6990"></path><path d="M512 241.96096h52.224l65.06496-96.31744c49.63328-50.31936 89.64096 0.43008 63.85664 45.71136l-34.31424 51.5072c257.64864 5.02784 257.64864 43.008 257.64864 325.03808 0 325.94944 0 336.46592-404.48 336.46592S107.52 893.8496 107.52 567.90016c0-277.69856 0-318.80192 253.14304-324.95616l-39.43424-58.368c-31.26272-54.90688 37.33504-90.40896 64.68608-42.37312l60.416 99.80928c18.18624-0.0512 41.18528-0.0512 65.66912-0.0512z" fill="#EF85A7" p-id="6991"></path><path d="M512 338.5856c332.8 0 332.8 0 332.8 240.64s0 248.39168-332.8 248.39168-332.8-7.75168-332.8-248.39168 0-240.64 332.8-240.64z" fill="#EC5D85" p-id="6992"></path><path d="M281.6 558.08a30.72 30.72 0 0 1-27.47392-16.97792 30.72 30.72 0 0 1 13.73184-41.216l122.88-61.44a30.72 30.72 0 0 1 41.216 13.74208 30.72 30.72 0 0 1-13.74208 41.216l-122.88 61.44a30.59712 30.59712 0 0 1-13.73184 3.23584zM752.64 558.08a30.60736 30.60736 0 0 1-12.8512-2.83648l-133.12-61.44a30.72 30.72 0 0 1-15.04256-40.7552 30.72 30.72 0 0 1 40.76544-15.02208l133.12 61.44A30.72 30.72 0 0 1 752.64 558.08zM454.656 666.88a15.36 15.36 0 0 1-12.288-6.1952 15.36 15.36 0 0 1 3.072-21.49376l68.5056-50.91328 50.35008 52.62336a15.36 15.36 0 0 1-22.20032 21.23776l-31.5904-33.024-46.71488 34.72384a15.28832 15.28832 0 0 1-9.13408 3.04128z" fill="#EF85A7" p-id="6993"></path><path d="M65.536 369.31584c15.03232 101.90848 32.84992 147.17952 44.544 355.328 14.63296 2.18112 177.70496 10.04544 204.05248-74.62912a16.14848 16.14848 0 0 0 1.64864-10.87488c-30.60736-80.3328-169.216-60.416-169.216-60.416s-10.36288-146.50368-11.49952-238.83776zM362.25024 383.03744l34.816 303.17568h34.64192L405.23776 381.1328zM309.52448 536.28928h45.48608l16.09728 158.6176-31.82592 1.85344zM446.86336 542.98624h45.80352V705.3312h-33.87392zM296.6016 457.97376h21.39136l5.2736 58.99264-18.91328 2.26304zM326.99392 457.97376h21.39136l2.53952 55.808-17.408 1.61792zM470.62016 459.88864h19.456v62.27968h-19.456zM440.23808 459.88864h22.20032v62.27968h-16.62976z" fill="#FFFFFF" p-id="6994"></path><path d="M243.56864 645.51936a275.456 275.456 0 0 1-28.4672 23.74656 242.688 242.688 0 0 1-29.53216 17.52064 2.70336 2.70336 0 0 1-4.4032-1.95584 258.60096 258.60096 0 0 1-5.12-29.57312c-1.41312-12.1856-1.95584-25.68192-2.16064-36.36224 0-0.3072 0-2.5088 3.01056-1.90464a245.92384 245.92384 0 0 1 34.22208 9.5744 257.024 257.024 0 0 1 32.3584 15.17568c0.52224 0.256 2.51904 1.4848 0.09216 3.77856z" fill="#EB5480" p-id="6995"></path><path d="M513.29024 369.31584c15.03232 101.90848 32.84992 147.17952 44.544 355.328 14.63296 2.18112 177.70496 10.04544 204.05248-74.62912a16.14848 16.14848 0 0 0 1.64864-10.87488c-30.60736-80.3328-169.216-60.416-169.216-60.416s-10.36288-146.50368-11.49952-238.83776zM810.00448 383.03744l34.816 303.17568h34.64192L852.992 381.1328zM757.27872 536.28928h45.48608l16.09728 158.6176-31.82592 1.85344zM894.6176 542.98624h45.80352V705.3312H906.5472zM744.35584 457.97376h21.39136l5.2736 58.99264-18.91328 2.26304zM774.74816 457.97376h21.39136l2.53952 55.808-17.408 1.61792zM918.3744 459.88864h19.456v62.27968h-19.456zM887.99232 459.88864h22.20032v62.27968h-16.62976z" fill="#FFFFFF" p-id="6996"></path><path d="M691.32288 645.51936a275.456 275.456 0 0 1-28.4672 23.74656 242.688 242.688 0 0 1-29.53216 17.52064 2.70336 2.70336 0 0 1-4.4032-1.95584 258.60096 258.60096 0 0 1-5.12-29.57312c-1.41312-12.1856-1.95584-25.68192-2.16064-36.36224 0-0.3072 0-2.5088 3.01056-1.90464a245.92384 245.92384 0 0 1 34.22208 9.5744 257.024 257.024 0 0 1 32.3584 15.17568c0.52224 0.256 2.51904 1.4848 0.09216 3.77856z" fill="#EB5480" p-id="6997"></path></svg>' } }
    ],

    editLink: {
      text: '在 Gitee 上编辑此页面',
      pattern: ({ filePath }) => {
        return `https://gitee.com/xuxiaowei-com-cn/xuxiaowei-com-cn/edit/main/${filePath}`
        // return `https://framagit.org/xuxiaowei-com-cn/xuxiaowei-com-cn/-/edit/main/${filePath}`
        // return `https://github.com/xuxiaowei-com-cn/xuxiaowei-com-cn/edit/main/${filePath}`
      },
    },

    footer: {
      copyright: 'Copyright © 2024-present 徐晓伟 <a href="mailto:xuxiaowei@xuxiaowei.com.cn">xuxiaowei@xuxiaowei.com.cn</a><br>' +
          '<a id="beian-miit-gov-cn" target="_blank" href="https://beian.miit.gov.cn">鲁ICP备19009036号-1</a>'
    }
  }
})
