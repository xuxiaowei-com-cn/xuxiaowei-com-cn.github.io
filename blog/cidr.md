# 无类别域间路由 `CIDR`（`Classless Inter-Domain Routing`） {id=cidr}

## 常用内网 {id=common-internal}

| CIDR           | 范围                          | 主机地址     | 可用IP地址   |
|----------------|-----------------------------|----------|----------|
| 192.168.0.0/16 | 192.168.0.0~192.168.255.255 | 65534    | 65536    |
| 172.16.0.0/12  | 172.16.0.0~172.31.255.255   | 1048574  | 1048576  |
| 10.0.0.0/8     | 10.0.0.0~10.255.255.255     | 16777214 | 16777216 |

## 列举 {id=list}

|     |                 |                            |
|-----|-----------------|----------------------------|
| /8  | 256 x 256 x 256 | 大型规模网络，如：大型公司使用，市/省级网络使用   |
| /9  | 128 x 256 x 256 |                            |
| /10 | 64 x 256 x 256  |                            |
| /11 | 32 x 256 x 256  |                            |
| /12 | 16 x 256 x 256  | 中型规模网络，如：公司使用              |
| /13 | 8 x 256 x 256   |                            |
| /14 | 4 x 256 x 256   |                            |
| /15 | 2 x 256 x 256   |                            |
| /16 | 256 x 256       | 小型规模网络，如：家庭使用              |
| /17 | 128 x 256       |                            |
| /18 | 64 x 256        |                            |
| /19 | 32 x 256        |                            |
| /20 | 16 x 256        |                            |
| /21 | 8 x 256         |                            |
| /22 | 4 x 256         |                            |
| /23 | 2 x 256         |                            |
| /24 | 256             |                            |
| /25 | 128             |                            |
| /26 | 64              |                            |
| /27 | 32              |                            |
| /28 | 16              |                            |
| /29 | 8               |                            |
| /30 | 4               |                            |
| /31 | 2               |                            |
| /32 | 1               | IP地址作为单个主机使用，即该IP地址没有可用的子网 |

<style>

._blog_cidr #list + table tr th:nth-child(1), 
._blog_cidr #list + table tr td:nth-child(1) {
    min-width: 25px;
}

._blog_cidr #list + table tr th:nth-child(2), 
._blog_cidr #list + table tr td:nth-child(2) {
    min-width: 130px;
}

._blog_cidr #list + table tr th:nth-child(3), 
._blog_cidr #list + table tr td:nth-child(3) {
    min-width: 355px;
}

</style>