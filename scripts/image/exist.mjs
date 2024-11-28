import { tokenMap } from './common.mjs'
import axios from 'axios'

const list = async function (image, config = {}) {
    const url = new URL('https://' + image)
    url.pathname = `/v2${url.pathname}/tags/list`
    const map = await tokenMap(image, null)
    if (config.headers) {
        config.headers.Authorization = `Bearer ${map.token}`
    } else {
        config.headers = {Authorization: `Bearer ${map.token}`}
    }
    return await axios.get(url.toString(), config)
        .then(response => response.data)
}

async function main() {
    const images = [// 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/apache-kafka',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/bitnami-git',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/bitnami-kafka',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/bitnami-kubectl',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-cni',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-kube-controllers',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-node',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/calico-pod2daemon-flexvol',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/consul',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/docker-docs',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/elasticsearch',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/filebeat',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gitlab-runner',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/golang',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/graalvm',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/gradle',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/httpd',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ingress-nginx-controller',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ingress-nginx-controller-chroot',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/ingress-nginx-kube-webhook-certgen',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/java',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/jenkins',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kaniko-project-executor',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kibana',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kong',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-apiserver',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-controller-manager',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-proxy',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kube-scheduler',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kubernetes-website',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kubernetesui-dashboard-api',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kubernetesui-dashboard-auth',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kubernetesui-dashboard-metrics-scraper',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/kubernetesui-dashboard-web',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/logstash',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/maven',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/metrics-server',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/minio',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mvnd',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/mysql',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nacos-server',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nexus3',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/nginx',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/node',
        // 'registry.cn-qingdao.aliyuncs.com/xuxiaoweicomcn/redis',
    ]

    for (const image of images) {
        const result = await list(image)
        const tmp = []
        for (const tag of result.tags) {
            if (tag.endsWith('-386') || tag.endsWith('-arm') || tag.endsWith('-arm64') || tag.endsWith('-amd64') || tag.endsWith('-mips64le') || tag.endsWith('-ppc64le') || tag.endsWith('-s390x') || tag.endsWith('-ubi') || tag.endsWith('-alpine')) {
                continue
            }
            tmp.push(`${image}:${tag}`)
        }
        tmp.reverse()
        for (const tag of tmp) {
            console.log(`| ${tag} | |`)
        }

        console.log()
        console.log()
        console.log()
    }

}

main()
