# Redis {id=redis}

[[toc]]

::: warning 注意

1. 本文涉及的内容过多，根据自己的需求选择阅读
2. 由于本文不是一次性完成的，所以`日志的时间`可能并非按照文章的上下顺序展示，但并不影响阅读

:::

## 源码安装 {id=source-install}

### 下载、解压 {id=source-download}

::: code-group

```shell [使用 curl 下载 和 解压]
REDIS_VERSION=7.2.5
curl -L -o redis-$REDIS_VERSION.tar.gz https://github.com/redis/redis/archive/refs/tags/$REDIS_VERSION.tar.gz
ls -lh redis-$REDIS_VERSION.tar.gz
tar -zxvf redis-$REDIS_VERSION.tar.gz
ls -lh
```

```shell [使用 wget 下载 和 解压]
REDIS_VERSION=7.2.5
wget --no-check-certificate --content-disposition https://github.com/redis/redis/archive/refs/tags/$REDIS_VERSION.tar.gz
ls -lh redis-$REDIS_VERSION.tar.gz
tar -zxvf redis-$REDIS_VERSION.tar.gz
ls -lh
```

:::

### 编译、安装 {id=source-make}

::: code-group

```shell [CentOS]
REDIS_VERSION=7.2.5
cd redis-$REDIS_VERSION
yum -y install gcc make
# 或 make
make MALLOC=libc
make install
```

:::

### 安装结果 {id=source-install-result}

| 文件目录                            | 说明        |
|---------------------------------|-----------|
| `/usr/local/bin/redis-server`   | Redis 服务端 |
| `/usr/local/bin/redis-cli`      | Redis 客户端 |
| `/usr/local/bin/redis-sentinel` | Redis 哨兵  |

### 测试版本 {id=source-test-version}

```shell
redis-server --version
```

### 测试启动 {id=source-test-server}

::: warning 注意

1. 源码解压目录中可找到 `redis.conf` 文件
2. 默认情况下，只能本地连接，无法进行远程连接

:::

::: code-group

```shell [直接启动]
[root@k8s-1 ~]# redis-server 
1623:C 19 Sep 2024 11:26:21.854 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
1623:C 19 Sep 2024 11:26:21.855 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1623:C 19 Sep 2024 11:26:21.855 * Redis version=7.2.5, bits=64, commit=00000000, modified=0, pid=1623, just started
1623:C 19 Sep 2024 11:26:21.855 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
1623:M 19 Sep 2024 11:26:21.856 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1623:M 19 Sep 2024 11:26:21.856 * monotonic clock: POSIX clock_gettime
                _._                                                  
           _.-``__ ''-._                                             
      _.-``    `.  `_.  ''-._           Redis 7.2.5 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._                                  
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 1623
  `-._    `-._  `-./  _.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |           https://redis.io       
  `-._    `-._`-.__.-'_.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |                                  
  `-._    `-._`-.__.-'_.-'    _.-'                                   
      `-._    `-.__.-'    _.-'                                       
          `-._        _.-'                                           
              `-.__.-'                                               

1623:M 19 Sep 2024 11:26:21.859 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1623:M 19 Sep 2024 11:26:21.862 * Server initialized
1623:M 19 Sep 2024 11:26:21.862 * Ready to accept connections tcp
```

```shell [使用配置文件启动]
[root@k8s-1 redis-7.2.5]# redis-server redis.conf 
1674:C 19 Sep 2024 11:33:52.116 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
1674:C 19 Sep 2024 11:33:52.116 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1674:C 19 Sep 2024 11:33:52.116 * Redis version=7.2.5, bits=64, commit=00000000, modified=0, pid=1674, just started
1674:C 19 Sep 2024 11:33:52.116 * Configuration loaded
1674:M 19 Sep 2024 11:33:52.117 * Increased maximum number of open files to 10032 (it was originally set to 1024).
1674:M 19 Sep 2024 11:33:52.117 * monotonic clock: POSIX clock_gettime
                _._                                                  
           _.-``__ ''-._                                             
      _.-``    `.  `_.  ''-._           Redis 7.2.5 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._                                  
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 1674
  `-._    `-._  `-./  _.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |           https://redis.io       
  `-._    `-._`-.__.-'_.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |                                  
  `-._    `-._`-.__.-'_.-'    _.-'                                   
      `-._    `-.__.-'    _.-'                                       
          `-._        _.-'                                           
              `-.__.-'                                               

1674:M 19 Sep 2024 11:33:52.118 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1674:M 19 Sep 2024 11:33:52.118 * Server initialized
1674:M 19 Sep 2024 11:33:52.118 * Loading RDB produced by version 7.2.5
1674:M 19 Sep 2024 11:33:52.118 * RDB age 2 seconds
1674:M 19 Sep 2024 11:33:52.118 * RDB memory usage when created 0.91 Mb
1674:M 19 Sep 2024 11:33:52.118 * Done loading RDB, keys loaded: 1, keys expired: 0.
1674:M 19 Sep 2024 11:33:52.119 * DB loaded from disk: 0.000 seconds
1674:M 19 Sep 2024 11:33:52.119 * Ready to accept connections tcp
```

:::

### 本地连接 {id=source-redis-cli}

```shell
[root@k8s-1 redis-7.2.5]# redis-cli 
127.0.0.1:6379> set name xuxiaowei
OK
127.0.0.1:6379> get name
"xuxiaowei"
127.0.0.1:6379> 
```

### 开通 Redis 端口 {id=source-open-port}

::: code-group

```shell [CentOS]
firewall-cmd --zone=public --add-port=6379/tcp --permanent
firewall-cmd --reload
firewall-cmd --list-all
```

:::

### 配置 Linux 服务，管理 Redis 服务 {id=source-service}

::: warning 注意

1. 源码解压目录中可找到 `redis.conf` 文件
2. 默认情况下，只能本地连接，无法进行远程连接

:::

#### redis.conf 配置文件 {id=source-redis.conf}

- 复制源码解压目录中的 `redis.conf` 到指定目录，作为 Linux Service 启动 Redis 配置

```shell
mkdir -p /etc/redis/
cp redis.conf /etc/redis/
ls -lh /etc/redis/
```

#### 开启远程连接 {id=source-bind}

```shell
# 注释默认绑定本地连接
# 默认配置：bind 127.0.0.1 -::1
# 默认仅支持本地连接
sed -i 's/^bind.*/#&/' /etc/redis/redis.conf
cat /etc/redis/redis.conf | grep bind
```

#### 关闭保护模式 {id=source-protected-mode}

```shell
sed -i 's#protected-mode yes#protected-mode no#' /etc/redis/redis.conf
cat /etc/redis/redis.conf | grep protected-mode
```

#### 设置密码 {id=source-requirepass}

::: code-group

```shell [设置密码]
# 产生一个随机的16位密码
# 注意：尽量不要在 Linux 命令行中直接输入密码
REDIS_PASSWORD=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 16 | head -n 1)
# 查看密码
echo $REDIS_PASSWORD
# 在文件第一行添加密码，注意：请勿多次运行，否则会出现多行密码配置
sed -i "1s/^/requirepass $REDIS_PASSWORD\n/" /etc/redis/redis.conf
```

```shell [查看已设置的密码]
cat /etc/redis/redis.conf | grep requirepass
```

```shell [在本地 Redis 控制台内使用密码连接，推荐]
# 其中 SmTbQcOV0mXm2XLW 为 Redis 密码
[root@k8s-1 redis-7.2.5]# redis-cli
127.0.0.1:6379> AUTH SmTbQcOV0mXm2XLW
OK
127.0.0.1:6379> 
```

```shell [在本地命令行中直接使用密码连接，不推荐]
# 尽量不要在 Linux 命令行中直接输入密码
[root@k8s-1 redis-7.2.5]# redis-cli -a $REDIS_PASSWORD
Warning: Using a password with '-a' or '-u' option on the command line interface may not be safe.
127.0.0.1:6379> 
```

:::

#### 创建 Linux Service 服务 {id=source-redis.service}

::: code-group

```shell [创建 Linux Service 服务：不允许后台运行，Redis 默认配置，推荐]
sed -i 's#daemonize yes#daemonize no#' /etc/redis/redis.conf

cat /etc/redis/redis.conf | grep daemonize

cat <<EOF | tee /lib/systemd/system/redis.service
# 查看 redis 服务日志：journalctl -xefu redis
[Unit]
Description=redis
After=network.target

[Service]
ExecStart=/usr/local/bin/redis-server /etc/redis/redis.conf
ExecReload=/bin/kill -s HUP $MAINPID

[Install]
WantedBy=multi-user.target

EOF
```

```shell [创建 Linux Service 服务：允许后台运行]
sed -i 's#daemonize no#daemonize yes#' /etc/redis/redis.conf

cat /etc/redis/redis.conf | grep daemonize

cat <<EOF | tee /lib/systemd/system/redis.service
# 查看 redis 服务日志：journalctl -xefu redis
[Unit]
Description=redis
After=network.target

[Service]
ExecStart=/usr/local/bin/redis-server /etc/redis/redis.conf
ExecReload=/bin/kill -s HUP $MAINPID
# 代表进程退出时，Linux Service 也认为服务出于正常运行
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target

EOF
```

:::

#### 启动 {id=source-start}

```shell
systemctl start redis.service
systemctl status redis.service --no-pager -l
systemctl enable redis.service
```

### Redis 服务命令 {id=source-service-command}

::: warning 注意

1. 如果修改 `/lib/systemd/system/redis.service` 文件后，需要运行 `systemctl daemon-reload` 命令，然后再操作 Redis 服务
2. 查看 Linux 服务状态时，可增加参数 `--no-pager` 关闭分页，否则需要手动退出
3. 查看 Linux 服务状态时，可增加参数 `-l` 查看全部内容

:::

| 命令                                   | 说明              |
|--------------------------------------|-----------------|
| `systemctl status redis.service`     | 查看 Redis 状态     |
| `systemctl start redis.service`      | 启动 Redis        |
| `systemctl stop redis.service`       | 停止              |
| `systemctl restart redis.service`    | 重启              |
| `systemctl enable redis.service`     | 打开 Redis 开启自启   |
| `systemctl disable redis.service`    | 关闭 Redis 开启自启   |
| `systemctl is-enabled redis.service` | 查看 Redis 是否开启自启 |
| `journalctl -xefu redis`             | 查看 Redis 服务日志   |

## 主从复制 {id=replication}

::: warning 注意

1. 主从复制至少需要两个服务器
    - `主节点` IP：`192.168.80.81`
    - `从节点` IP：`192.168.80.82`
    - `节点`间使用内网通信
    - 如果在同一台机器内操作，需要使用不同的 `redis.conf`，并修改下列配置，防止冲突
        - `port`：Redis 端口
        - `pidfile`：Redis pid 位置
2. 主从复制要保持 Redis 版本一致
3. 主从复制每个`节点` Redis 安装步骤相同
    - 先在任意`节点`完成 Redis 安装、测试
    - 确认任意`节点`的 Redis 均能正常工作后，再进行主从复制的配置
4. 配置主从复制时，无需调整`主节点`，只需要修改`从节点`的配置
    - 对`主节点`无影响
    - `从节点`配置后，会丢失`从节点`的所有数据
    - `从节点`配置后，无法在`从节点`中`增加`、`修改`、`删除`数据，只能在主节点`增加`、`修改`、`删除`数据，`从节点`只能`读取`数据
5. `主节点`与`从节点`密码相互独立
    1. `主节点`的密码是否修改只影响程序连接`主节点`、`从节点`同步`主节点`的数据，不影响程序连接`从节点`
    2. `从节点`的密码是否修改只影响程序连接`从节点`，不影响`从节点`同步`主节点`的数据，不影响程序连接`主节点`

:::

### 从节点增加主节点的地址与端口 {id=add-slaveof}

```shell
# 192.168.80.81 是主节点的地址
sed -i '1s/^/slaveof 192.168.80.81 6379\n/' /etc/redis/redis.conf

cat /etc/redis/redis.conf | grep slaveof
```

### 从节点增加主节点的密码 {id=add-masterauth}

::: warning 注意

1. 主节点没有密码可忽略此步骤

:::

```shell
# 尽量不要在 Linux 命令行中直接输入密码
# 实际配置请使用 vi、vim 等工具
# 其中 SmTbQcOV0mXm2XLW 为 Redis 密码
sed -i '2s/^/masterauth SmTbQcOV0mXm2XLW\n/' /etc/redis/redis.conf

cat /etc/redis/redis.conf | grep masterauth
```

### 配置从节点的密码 {id=slave-requirepass}

::: warning 注意

1. 根据自己的需求配置，也可以与主节点密码相同

:::

```shell
# 产生一个随机的16位密码
# 注意：尽量不要在 Linux 命令行中直接输入密码
REDIS_PASSWORD=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 16 | head -n 1)
# 查看密码
echo $REDIS_PASSWORD
# 在文件第一行添加密码，注意：请勿多次运行，否则会出现多行密码配置
sed -i "1s/^/requirepass $REDIS_PASSWORD\n/" /etc/redis/redis.conf

cat /etc/redis/redis.conf | grep requirepass
```

### 重启从节点 {id=slave-restart}

```shell
systemctl restart redis.service
systemctl status redis.service --no-pager -l
```

### 查看节点信息 {id=info-replication}

::: code-group

```shell [查看主节点信息]
# 其中 master_replid:8ec839af716f0256eb084f57708a60fb41cd62bb 代表主节点的ID
[root@k8s-1 ~]# redis-cli 
127.0.0.1:6379> INFO replication
# Replication
role:master
connected_slaves:1
slave0:ip=192.168.80.82,port=6379,state=online,offset=3542,lag=0
master_failover_state:no-failover
master_replid:8ec839af716f0256eb084f57708a60fb41cd62bb
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:3542
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:3542
127.0.0.1:6379> 
```

```shell [查看从节点信息]
# 其中 master_replid:8ec839af716f0256eb084f57708a60fb41cd62bb 代表主节点的ID
[root@k8s-2 ~]# redis-cli
127.0.0.1:6379> INFO replication
# Replication
role:slave
master_host:192.168.80.81
master_port:6379
master_link_status:up
master_last_io_seconds_ago:9
master_sync_in_progress:0
slave_read_repl_offset:3598
slave_repl_offset:3598
slave_priority:100
slave_read_only:1
replica_announced:1
connected_slaves:0
master_failover_state:no-failover
master_replid:8ec839af716f0256eb084f57708a60fb41cd62bb
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:3598
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:15
repl_backlog_histlen:3584
127.0.0.1:6379> 
```

:::

### 查看日志 {id=replication-log}

::: tip

1. 在从节点增加主节点的配置后，分别在两个节点中执行 `journalctl -xefu redis` 查看两个节点中 Redis 的日志，
   然后重启从节点，可以观察到双方的日志如下

:::

::: code-group

```shell [主节点日志]
# 其中 master_replid:8ec839af716f0256eb084f57708a60fb41cd62bb 代表主节点的ID
Sep 19 11:52:11 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:11.097 * Replica 192.168.80.82:6379 asks for synchronization
Sep 19 11:52:11 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:11.098 * Full resync requested by replica 192.168.80.82:6379
Sep 19 11:52:11 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:11.098 * Replication backlog created, my new replication IDs are '8ec839af716f0256eb084f57708a60fb41cd62bb' and '0000000000000000000000000000000000000000'
Sep 19 11:52:11 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:11.098 * Delay next BGSAVE for diskless SYNC
Sep 19 11:52:16 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:16.550 * Starting BGSAVE for SYNC with target: replicas sockets
Sep 19 11:52:16 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:16.553 * Background RDB transfer started by pid 1680
Sep 19 11:52:16 k8s-1 redis-server[1063]: 1680:C 19 Sep 2024 11:52:16.556 * Fork CoW for RDB: current 0 MB, peak 0 MB, average 0 MB
Sep 19 11:52:16 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:16.557 * Diskless rdb transfer, done reading from pipe, 1 replicas still up.
Sep 19 11:52:16 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:16.563 * Background RDB transfer terminated with success
Sep 19 11:52:16 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:16.563 * Streamed RDB transfer with replica 192.168.80.82:6379 succeeded (socket). Waiting for REPLCONF ACK from replica to enable streaming
Sep 19 11:52:16 k8s-1 redis-server[1063]: 1063:M 19 Sep 2024 11:52:16.563 * Synchronization with replica 192.168.80.82:6379 succeeded
```

```shell [从节点日志]
# 其中 master_replid:8ec839af716f0256eb084f57708a60fb41cd62bb 代表主节点的ID
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:C 19 Sep 2024 11:52:11.078 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can also cause failures without low memory condition, see https://github.com/jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:C 19 Sep 2024 11:52:11.078 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:C 19 Sep 2024 11:52:11.078 * Redis version=7.2.5, bits=64, commit=00000000, modified=0, pid=1651, just started
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:C 19 Sep 2024 11:52:11.078 * Configuration loaded
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.079 * Increased maximum number of open files to 10032 (it was originally set to 1024).
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.079 * monotonic clock: POSIX clock_gettime
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.080 * Running mode=standalone, port=6379.
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.080 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * Server initialized
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * Loading RDB produced by version 7.2.5
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * RDB age 0 seconds
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * RDB memory usage when created 0.83 Mb
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * Done loading RDB, keys loaded: 0, keys expired: 0.
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * DB loaded from disk: 0.000 seconds
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * Ready to accept connections tcp
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * Connecting to MASTER 192.168.80.81:6379
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.081 * MASTER <-> REPLICA sync started
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.094 * Non blocking connect for SYNC fired the event.
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.096 * Master replied to PING, replication can continue...
Sep 19 11:52:11 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:11.097 * Partial resynchronization not possible (no cached master)
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.552 * Full resync from master: 8ec839af716f0256eb084f57708a60fb41cd62bb:14
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.558 * MASTER <-> REPLICA sync: receiving streamed RDB from master with EOF to disk
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.559 * MASTER <-> REPLICA sync: Flushing old data
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.559 * MASTER <-> REPLICA sync: Loading DB in memory
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.562 * Loading RDB produced by version 7.2.5
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.562 * RDB age 0 seconds
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.562 * RDB memory usage when created 1.00 Mb
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.562 * Done loading RDB, keys loaded: 0, keys expired: 0.
Sep 19 11:52:16 k8s-2 redis-server[1651]: 1651:S 19 Sep 2024 11:52:16.562 * MASTER <-> REPLICA sync: Finished with success
```

:::

## 哨兵模式 {id=sentinel}

::: warning 注意

1. 哨兵模式至少需要三个服务器
    - `主节点`：`192.168.80.81`
    - `从节点`：`192.168.80.82`
    - `从节点`：`192.168.80.83`
2. `哨兵模式`基于`主从复制`
3. `主从复制`使用的配置文件是 `redis.conf`，`哨兵`使用的配置文件是 `sentinel.conf`，所以`哨兵模式`需要两个配置文件
4. 源码解压目录中可找到 `sentinel.conf` 文件
5. 哨兵模式要保持 Redis 版本一致
6. 哨兵模式每个`节点` Redis 安装步骤相同
    - 先在任意`节点`完成 Redis 安装、测试
    - 哨兵模式部分功能基于`主从复制`，请先学会主从复制后再学习`哨兵模式`
    - 确认任意`节点`的 Redis 均能正常工作后，再进行哨兵模式的配置
7. `从节点`配置后，无法在`从节点`中`增加`、`修改`、`删除`数据，只能在主节点`增加`、`修改`、`删除`数据，`从节点`只能`读取`数据
8. 哨兵模式主节点可以进行`故障转译`

:::

### 配置 Linux 服务，管理 Redis 服务 {id=redis-service}

- 先让各个节点的 Redis 正常启动，并能正常远程连接，参考上方的`源码安装`中的 `redis.service` 配置

### 配置 Linux 服务，管理 Redis Sentinel 哨兵服务 {id=redis-sentinel-service}

::: warning 注意

1. 源码解压目录中可找到 `sentinel.conf` 文件

:::

### 开通 Redis Sentinel 哨兵端口 {id=sentinel-open-port}

::: code-group

```shell [CentOS]
firewall-cmd --zone=public --add-port=26379/tcp --permanent
firewall-cmd --reload
firewall-cmd --list-all
```

:::

### 从节点增加主节点的地址与端口 {id=sentinel-add-slaveof}

```shell
# 192.168.80.81 是主节点的地址，仅在从节点上添加
sed -i '1s/^/slaveof 192.168.80.81 6379\n/' /etc/redis/redis.conf

cat /etc/redis/redis.conf | grep slaveof
```

### 主节点、从节点增加节点的密码 {id=sentinel-add-masterauth}

::: warning 注意

1. 每个节点密码保持一致
2. 节点没有密码可忽略此步骤

:::

```shell
# 尽量不要在 Linux 命令行中直接输入密码
# 实际配置请使用 vi、vim 等工具
# 其中 SmTbQcOV0mXm2XLW 为 Redis 密码
sed -i '2s/^/masterauth SmTbQcOV0mXm2XLW\n/' /etc/redis/redis.conf

cat /etc/redis/redis.conf | grep masterauth
```

### 重启从节点 {id=sentinel-slave-restart}

```shell
systemctl restart redis.service
```

### sentinel.conf 配置文件 {id=sentinel.conf}

- 复制源码解压目录中的 sentinel.conf 到指定目录，作为 Linux Service 启动 Redis Sentinel 配置

::: warning 注意

1. 所有节点均执行

:::

```shell
mkdir -p /etc/redis/
cp sentinel.conf /etc/redis/
ls -lh /etc/redis/
```

### 从节点监控主节点 {id=sentinel-monitor}

::: warning 注意

1. 仅在 `从节点` 上配置，`主节点` 不配置

:::

```shell
# 注释掉默认配置
sed -i 's/sentinel monitor mymaster 127.0.0.1 6379 2/#&/' /etc/redis/sentinel.conf

# 192.168.80.81 代表主节点地址
sed -i "1s/^/sentinel monitor mymaster 192.168.80.81 6379 2\n/" /etc/redis/sentinel.conf

# Redis 存在密码，则需要在 哨兵中配置 Redis 的密码
# 尽量不要在 Linux 命令行中直接输入密码
# 实际配置请使用 vi、vim 等工具
# 其中 SmTbQcOV0mXm2XLW 为 Redis 密码
# sed -i '2s/^/sentinel auth-pass mymaster SmTbQcOV0mXm2XLW\n/' /etc/redis/sentinel.conf
# cat /etc/redis/sentinel.conf | grep 'sentinel auth-pass'

cat /etc/redis/sentinel.conf | grep 'sentinel monitor'
```

### 创建 Linux Service 服务 {id=sentinel-service}

::: warning 注意

1. 所有节点均执行

:::

```shell
cat <<EOF | tee /lib/systemd/system/redis-sentinel.service
# 查看 redis sentinel 哨兵服务日志：journalctl -xefu redis-sentinel
[Unit]
Description=redis sentinel
# 在 Redis 服务启动后再启动 Redis 哨兵服务
After=redis.service

[Service]
# 注意此处有两种用法，原理相同：https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/
# 用法一：/usr/local/bin/redis-sentinel /etc/redis/sentinel.conf
# 用法二：/usr/local/bin/redis-server /etc/redis/sentinel.conf --sentinel
ExecStart=/usr/local/bin/redis-sentinel /etc/redis/sentinel.conf
ExecReload=/bin/kill -s HUP $MAINPID

[Install]
WantedBy=multi-user.target

EOF
```

### 启动哨兵 {id=sentinel-start}

::: warning 注意

1. 所有节点均执行
2. 先启动主节点，再启动从节点

:::

```shell
systemctl start redis-sentinel.service
systemctl status redis-sentinel.service --no-pager -l
systemctl enable redis-sentinel.service
```

### 查看日志 {id=sentinel-log}

::: tip

1. 启动 Redis 哨兵前，在各个节点查看哨兵的日志：`journalctl -xefu redis-sentinel`

:::

::: code-group

```shell [主节点哨兵日志]
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.435 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.435 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.435 * Redis version=7.2.5, bits=64, commit=00000000, modified=0, pid=1734, just started
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.435 * Configuration loaded
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.437 * Increased maximum number of open files to 10032 (it was originally set to 1024).
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.437 * monotonic clock: POSIX clock_gettime
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.438 * Running mode=sentinel, port=26379.
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.438 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.459 * Sentinel new configuration saved on disk
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.459 * Sentinel ID is e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.459 # +monitor master mymaster 127.0.0.1 6379 quorum 2
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.465 * +slave slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.469 * Sentinel new configuration saved on disk
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.469 * +slave slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:06:58 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:06:58.472 * Sentinel new configuration saved on disk
```

:::

::: code-group

```shell [第一个从节点启动时第一个从节点哨兵日志]
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.388 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can also cause failures without low memory condition, see https://github.com/jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.389 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.389 * Redis version=7.2.5, bits=64, commit=00000000, modified=0, pid=1742, just started
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.389 * Configuration loaded
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.389 * Increased maximum number of open files to 10032 (it was originally set to 1024).
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.389 * monotonic clock: POSIX clock_gettime
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.391 * Running mode=sentinel, port=26379.
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.391 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.395 * Sentinel new configuration saved on disk
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.395 * Sentinel ID is c2ab7f6241f2328021858214b05f10cd5a4ad859
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.395 # +monitor master mymaster 192.168.80.81 6379 quorum 2
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.398 * +slave slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 192.168.80.81 6379
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.400 * Sentinel new configuration saved on disk
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.400 * +slave slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 192.168.80.81 6379
Sep 19 13:07:27 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:27.402 * Sentinel new configuration saved on disk
Sep 19 13:07:29 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:29.092 * +sentinel sentinel e0ed55a14f9f1b958b080ca5671f4af3f80bf44a 127.0.0.1 26379 @ mymaster 192.168.80.81 6379
Sep 19 13:07:29 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:29.095 * Sentinel new configuration saved on disk
Sep 19 13:07:29 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:29.095 * +sentinel-address-switch master mymaster 192.168.80.81 6379 ip 192.168.80.81 port 26379 for e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:07:29 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:29.097 * Sentinel new configuration saved on disk
Sep 19 13:07:29 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:29.097 * +sentinel-address-switch master mymaster 192.168.80.81 6379 ip 127.0.0.1 port 26379 for e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:07:29 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:29.099 * Sentinel new configuration saved on disk
Sep 19 13:07:31 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:31.135 * +sentinel-address-switch master mymaster 192.168.80.81 6379 ip 192.168.80.81 port 26379 for e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:07:31 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:31.137 * Sentinel new configuration saved on disk
Sep 19 13:07:31 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:31.138 * +sentinel-address-switch master mymaster 192.168.80.81 6379 ip 127.0.0.1 port 26379 for e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:07:31 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:07:31.140 * Sentinel new configuration saved on disk

... 重复上面四行日志

```

:::

::: code-group

```shell [第一个从节点启动时主节点哨兵日志]
Sep 19 13:07:29 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:07:29.390 * +sentinel sentinel c2ab7f6241f2328021858214b05f10cd5a4ad859 192.168.80.82 26379 @ mymaster 127.0.0.1 6379
Sep 19 13:07:29 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:07:29.394 * Sentinel new configuration saved on disk
```

:::

::: code-group

```shell [第二个从节点启动时第二个从节点哨兵日志]
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.064 # WARNING Memory overcommit must be enabled! Without it, a background save or replication may fail under low memory condition. Being disabled, it can also cause failures without low memory condition, see https://github.com/jemalloc/jemalloc/issues/1328. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.064 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.064 * Redis version=7.2.5, bits=64, commit=00000000, modified=0, pid=1742, just started
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.064 * Configuration loaded
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.065 * Increased maximum number of open files to 10032 (it was originally set to 1024).
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.065 * monotonic clock: POSIX clock_gettime
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.066 * Running mode=sentinel, port=26379.
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.066 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.069 * Sentinel new configuration saved on disk
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.069 * Sentinel ID is 032386697444c3c8f2b300ce71bd7f376b75aa04
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.069 # +monitor master mymaster 192.168.80.81 6379 quorum 2
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.072 * +slave slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 192.168.80.81 6379
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.075 * Sentinel new configuration saved on disk
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.075 * +slave slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 192.168.80.81 6379
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.077 * Sentinel new configuration saved on disk
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.384 * +sentinel sentinel c2ab7f6241f2328021858214b05f10cd5a4ad859 192.168.80.82 26379 @ mymaster 192.168.80.81 6379
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.386 * Sentinel new configuration saved on disk
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.440 * +sentinel sentinel e0ed55a14f9f1b958b080ca5671f4af3f80bf44a 127.0.0.1 26379 @ mymaster 192.168.80.81 6379
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.446 * Sentinel new configuration saved on disk
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.446 * +sentinel-address-switch master mymaster 192.168.80.81 6379 ip 192.168.80.81 port 26379 for e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.454 * Sentinel new configuration saved on disk
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.454 * +sentinel-address-switch master mymaster 192.168.80.81 6379 ip 127.0.0.1 port 26379 for e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:09:24 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:24.457 * Sentinel new configuration saved on disk
Sep 19 13:09:26 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:26.494 * +sentinel-address-switch master mymaster 192.168.80.81 6379 ip 192.168.80.81 port 26379 for e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:09:26 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:26.497 * Sentinel new configuration saved on disk
Sep 19 13:09:26 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:26.497 * +sentinel-address-switch master mymaster 192.168.80.81 6379 ip 127.0.0.1 port 26379 for e0ed55a14f9f1b958b080ca5671f4af3f80bf44a
Sep 19 13:09:26 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:26.500 * Sentinel new configuration saved on disk

... 重复上面四行日志

```

:::

::: code-group

```shell [第二个从节点启动时第一个从节点哨兵日志]
Sep 19 13:09:26 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:26.102 * +sentinel sentinel 032386697444c3c8f2b300ce71bd7f376b75aa04 192.168.80.83 26379 @ mymaster 192.168.80.81 6379
Sep 19 13:09:26 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:09:26.106 * Sentinel new configuration saved on disk
```

:::

::: code-group

```shell [第二个从节点启动时主节点哨兵日志]
Sep 19 13:09:26 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:09:26.101 * +sentinel sentinel 032386697444c3c8f2b300ce71bd7f376b75aa04 192.168.80.83 26379 @ mymaster 127.0.0.1 6379
Sep 19 13:09:26 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:09:26.105 * Sentinel new configuration saved on disk
```

:::

::: code-group

```shell [随后主节点哨兵日志每隔一段时间输出一下从节点的信息]
Sep 19 13:09:59 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:09:59.300 * +fix-slave-config slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:09:59 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:09:59.426 * +fix-slave-config slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:16:06 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:16:06.441 * +fix-slave-config slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:16:07 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:16:07.000 * +fix-slave-config slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:22:09 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:22:09.623 * +fix-slave-config slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:22:09 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:22:09.623 * +fix-slave-config slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:28:11 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:28:11.819 * +fix-slave-config slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 127.0.0.1 6379
Sep 19 13:28:12 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:28:12.875 * +fix-slave-config slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 127.0.0.1 6379

... 省略

```

:::

### 查看节点信息 {id=sentinel-info-replication}

::: code-group

```shell [查看主节点信息]
[root@k8s-1 redis-7.2.5]# redis-cli 
127.0.0.1:6379> INFO replication
# Replication
role:master
connected_slaves:2
slave0:ip=192.168.80.83,port=6379,state=online,offset=290842,lag=1
slave1:ip=192.168.80.82,port=6379,state=online,offset=290842,lag=1
master_failover_state:no-failover
master_replid:1daf5bf2ec9b8b01bf375e28d139af75ba064c74
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:290842
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:290842
127.0.0.1:6379> 
```

```shell [查看从节点信息]
[root@k8s-2 redis-7.2.5]# redis-cli 
127.0.0.1:6379> INFO replication
# Replication
role:slave
master_host:192.168.80.81
master_port:6379
master_link_status:up
master_last_io_seconds_ago:1
master_sync_in_progress:0
slave_read_repl_offset:294591
slave_repl_offset:294591
slave_priority:100
slave_read_only:1
replica_announced:1
connected_slaves:0
master_failover_state:no-failover
master_replid:1daf5bf2ec9b8b01bf375e28d139af75ba064c74
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:294591
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:15
repl_backlog_histlen:294577
127.0.0.1:6379> 
```

```shell [查看从节点信息]
[root@k8s-3 redis-7.2.5]# redis-cli 
127.0.0.1:6379> INFO replication
# Replication
role:slave
master_host:192.168.80.81
master_port:6379
master_link_status:up
master_last_io_seconds_ago:0
master_sync_in_progress:0
slave_read_repl_offset:296968
slave_repl_offset:296968
slave_priority:100
slave_read_only:1
replica_announced:1
connected_slaves:0
master_failover_state:no-failover
master_replid:1daf5bf2ec9b8b01bf375e28d139af75ba064c74
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:296968
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:15
repl_backlog_histlen:296954
127.0.0.1:6379> 
```

:::

### Redis Sentinel 哨兵模式 故障转移 {id=sentinel-failover}

1. 停止主节点，模拟故障

   ```shell
   [root@k8s-1 redis-7.2.5]# systemctl stop redis.service 
   [root@k8s-1 redis-7.2.5]# systemctl status redis.service 
   ● redis.service - redis
   Loaded: loaded (/usr/lib/systemd/system/redis.service; enabled; vendor preset: disabled)
   Active: inactive (dead) since Thu 2024-09-19 13:58:16 CST; 5min ago
   Process: 1062 ExecStart=/usr/local/bin/redis-server /etc/redis/redis.conf (code=exited, status=0/SUCCESS)
   Main PID: 1062 (code=exited, status=0/SUCCESS)
   
   Sep 19 13:57:40 k8s-1 redis-server[1062]: 1062:M 19 Sep 2024 13:57:40.433 * Connection with replica 192.168.80.82:6379 lost.
   Sep 19 13:58:06 k8s-1 redis-server[1062]: 1062:M 19 Sep 2024 13:58:06.633 * Connection with replica 192.168.80.83:6379 lost.
   Sep 19 13:58:16 k8s-1 redis-server[1062]: 1062:signal-handler (1726725496) Received SIGTERM scheduling shutdown...
   Sep 19 13:58:16 k8s-1 systemd[1]: Stopping redis...
   Sep 19 13:58:16 k8s-1 redis-server[1062]: 1062:M 19 Sep 2024 13:58:16.890 * User requested shutdown...
   Sep 19 13:58:16 k8s-1 redis-server[1062]: 1062:M 19 Sep 2024 13:58:16.890 * Saving the final RDB snapshot before exiting.
   Sep 19 13:58:16 k8s-1 redis-server[1062]: 1062:M 19 Sep 2024 13:58:16.893 * DB saved on disk
   Sep 19 13:58:16 k8s-1 redis-server[1062]: 1062:M 19 Sep 2024 13:58:16.893 * Removing the pid file.
   Sep 19 13:58:16 k8s-1 redis-server[1062]: 1062:M 19 Sep 2024 13:58:16.894 # Redis is now ready to exit, bye bye...
   Sep 19 13:58:16 k8s-1 systemd[1]: Stopped redis.
   [root@k8s-1 redis-7.2.5]#
   ```

2. 查看 Redis Sentinel 哨兵 日志

   由日志内容可知，原始主节点 `192.168.80.81 6379` 故障，已投票将 `192.168.80.83 6379` 作为新的主节点

   ::: code-group

   ```shell [查看 192.168.80.81 节点 哨兵日志]
   Sep 19 13:58:46 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:58:46.953 # +sdown master mymaster 127.0.0.1 6379
   Sep 19 13:58:47 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:58:47.612 * Sentinel new configuration saved on disk
   Sep 19 13:58:47 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:58:47.613 # +new-epoch 1
   Sep 19 13:58:48 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:58:48.002 # +config-update-from sentinel c2ab7f6241f2328021858214b05f10cd5a4ad859 192.168.80.82 26379 @ mymaster 127.0.0.1 6379
   Sep 19 13:58:48 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:58:48.002 # +switch-master mymaster 127.0.0.1 6379 192.168.80.83 6379
   Sep 19 13:58:48 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:58:48.003 * +slave slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 192.168.80.83 6379
   Sep 19 13:58:48 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:58:48.003 * +slave slave 127.0.0.1:6379 127.0.0.1 6379 @ mymaster 192.168.80.83 6379
   Sep 19 13:58:48 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:58:48.007 * Sentinel new configuration saved on disk
   Sep 19 13:59:18 k8s-1 redis-sentinel[1734]: 1734:X 19 Sep 2024 13:59:18.060 # +sdown slave 127.0.0.1:6379 127.0.0.1 6379 @ mymaster 192.168.80.83 6379
   ```

   ```shell [查看 192.168.80.82 节点 哨兵日志]
   Sep 19 13:58:46 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:46.993 # +sdown master mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.084 # +odown master mymaster 192.168.80.81 6379 #quorum 2/2
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.084 # +new-epoch 1
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.084 # +try-failover master mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.087 * Sentinel new configuration saved on disk
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.087 # +vote-for-leader c2ab7f6241f2328021858214b05f10cd5a4ad859 1
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.088 * c2ab7f6241f2328021858214b05f10cd5a4ad859 voted for c2ab7f6241f2328021858214b05f10cd5a4ad859 1
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.094 * 032386697444c3c8f2b300ce71bd7f376b75aa04 voted for c2ab7f6241f2328021858214b05f10cd5a4ad859 1
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.179 # +elected-leader master mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.179 # +failover-state-select-slave master mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.238 # +selected-slave slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.238 * +failover-state-send-slaveof-noone slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.315 * +failover-state-wait-promotion slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.980 * Sentinel new configuration saved on disk
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.980 # +promoted-slave slave 192.168.80.83:6379 192.168.80.83 6379 @ mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.980 # +failover-state-reconf-slaves master mymaster 192.168.80.81 6379
   Sep 19 13:58:48 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.001 * +slave-reconf-sent slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 192.168.80.81 6379
   Sep 19 13:58:48 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.635 * +slave-reconf-inprog slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 192.168.80.81 6379
   Sep 19 13:58:48 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.635 * +slave-reconf-done slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 192.168.80.81 6379
   Sep 19 13:58:48 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.698 # +failover-end master mymaster 192.168.80.81 6379
   Sep 19 13:58:48 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.698 # +switch-master mymaster 192.168.80.81 6379 192.168.80.83 6379
   Sep 19 13:58:48 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.698 * +slave slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 192.168.80.83 6379
   Sep 19 13:58:48 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.698 * +slave slave 192.168.80.81:6379 192.168.80.81 6379 @ mymaster 192.168.80.83 6379
   Sep 19 13:58:48 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.702 * Sentinel new configuration saved on disk
   Sep 19 13:59:18 k8s-2 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:59:18.752 # +sdown slave 192.168.80.81:6379 192.168.80.81 6379 @ mymaster 192.168.80.83 6379
   ```

   ```shell [查看 192.168.80.83 节点 哨兵日志]
   Sep 19 13:58:47 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.049 # +sdown master mymaster 192.168.80.81 6379
   Sep 19 13:58:47 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.091 * Sentinel new configuration saved on disk
   Sep 19 13:58:47 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.091 # +new-epoch 1
   Sep 19 13:58:47 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.093 * Sentinel new configuration saved on disk
   Sep 19 13:58:47 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.093 # +vote-for-leader c2ab7f6241f2328021858214b05f10cd5a4ad859 1
   Sep 19 13:58:47 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.108 # +odown master mymaster 192.168.80.81 6379 #quorum 3/2
   Sep 19 13:58:47 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:47.108 * Next failover delay: I will not start a failover before Thu Sep 19 14:04:47 2024
   Sep 19 13:58:48 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.002 # +config-update-from sentinel c2ab7f6241f2328021858214b05f10cd5a4ad859 192.168.80.82 26379 @ mymaster 192.168.80.81 6379
   Sep 19 13:58:48 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.002 # +switch-master mymaster 192.168.80.81 6379 192.168.80.83 6379
   Sep 19 13:58:48 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.002 * +slave slave 192.168.80.82:6379 192.168.80.82 6379 @ mymaster 192.168.80.83 6379
   Sep 19 13:58:48 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.002 * +slave slave 192.168.80.81:6379 192.168.80.81 6379 @ mymaster 192.168.80.83 6379
   Sep 19 13:58:48 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:58:48.007 * Sentinel new configuration saved on disk
   Sep 19 13:59:18 k8s-3 redis-sentinel[1742]: 1742:X 19 Sep 2024 13:59:18.041 # +sdown slave 192.168.80.81:6379 192.168.80.81 6379 @ mymaster 192.168.80.83 6379
   ```

   :::

3. 查看节点信息

   由日志内容可知，原始主节点 `192.168.80.81 6379` 故障，已投票将 `192.168.80.83 6379` 作为新的主节点

   ::: code-group

   ```shell [查看 192.168.80.81 节点信息]
   [root@k8s-1 redis-7.2.5]# redis-cli 
   Could not connect to Redis at 127.0.0.1:6379: Connection refused
   not connected> INFO replication
   Could not connect to Redis at 127.0.0.1:6379: Connection refused
   not connected> 
   ```

   ```shell [查看 192.168.80.82 节点信息]
   [root@k8s-2 redis-7.2.5]# redis-cli 
   127.0.0.1:6379> INFO replication
   # Replication
   role:slave
   master_host:192.168.80.83
   master_port:6379
   master_link_status:up
   master_last_io_seconds_ago:1
   master_sync_in_progress:0
   slave_read_repl_offset:753140
   slave_repl_offset:753140
   slave_priority:100
   slave_read_only:1
   replica_announced:1
   connected_slaves:0
   master_failover_state:no-failover
   master_replid:cdc67aa8a83dc0e05f36d358645b6c8659ae7dff
   master_replid2:1daf5bf2ec9b8b01bf375e28d139af75ba064c74
   master_repl_offset:753140
   second_repl_offset:611993
   repl_backlog_active:1
   repl_backlog_size:1048576
   repl_backlog_first_byte_offset:474187
   repl_backlog_histlen:278954
   127.0.0.1:6379> 
   ```

   ```shell [查看 192.168.80.83 节点信息]
   [root@k8s-3 redis-7.2.5]# redis-cli 
   127.0.0.1:6379> INFO replication
   # Replication
   role:master
   connected_slaves:1
   slave0:ip=192.168.80.82,port=6379,state=online,offset=758244,lag=0
   master_failover_state:no-failover
   master_replid:cdc67aa8a83dc0e05f36d358645b6c8659ae7dff
   master_replid2:1daf5bf2ec9b8b01bf375e28d139af75ba064c74
   master_repl_offset:758526
   second_repl_offset:617571
   repl_backlog_active:1
   repl_backlog_size:1048576
   repl_backlog_first_byte_offset:471957
   repl_backlog_histlen:286570
   127.0.0.1:6379> 
   ```

   :::

4. 节点 `192.168.80.81` 恢复正常后，自动加入集群，作为从节点使用

### Redis Sentinel 哨兵服务命令 {id=sentinel-service-command}

::: warning 注意

1. 如果修改 `/lib/systemd/system/redis-sentinel.service` 文件后，需要运行 `systemctl daemon-reload` 命令，然后再操作 Redis
   Sentinel 服务
2. 查看 Linux 服务状态时，可增加参数 `--no-pager` 关闭分页，否则需要手动退出
3. 查看 Linux 服务状态时，可增加参数 `-l` 查看全部内容

:::

| 命令                                            | 说明                       |
|-----------------------------------------------|--------------------------|
| `systemctl status redis-sentinel.service`     | 查看 Redis Sentinel 状态     |
| `systemctl start redis-sentinel.service`      | 启动 Redis Sentinel        |
| `systemctl stop redis-sentinel.service`       | 停止                       |
| `systemctl restart redis-sentinel.service`    | 重启                       |
| `systemctl enable redis-sentinel.service`     | 打开 Redis Sentinel 开启自启   |
| `systemctl disable redis-sentinel.service`    | 关闭 Redis Sentinel 开启自启   |
| `systemctl is-enabled redis-sentinel.service` | 查看 Redis Sentinel 是否开启自启 |
| `journalctl -xefu redis-sentinel`             | 查看 Redis Sentinel 服务日志   |
