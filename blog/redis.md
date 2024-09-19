# Redis {id=redis}

[[toc]]

::: warning 注意

1. 本文涉及的内容过多，根据自己的需求选择阅读

:::

## 源码安装 {id=source-install}

### 下载、解压 {id=source-download}

::: code-group

```shell [使用 curl 下载 和 解压]
REDIS_VERSION=7.2.5
curl -L -o redis-$REDIS_VERSION.tar.gz https://github.com/redis/redis/archive/refs/tags/$REDIS_VERSION.tar.gz
ls -lh redis-$REDIS_VERSION.tar.gz
tar -zxvf redis-7.2.5.tar.gz
ls -lh
```

```shell [使用 wget 下载 和 解压]
REDIS_VERSION=7.2.5
wget --no-check-certificate --content-disposition https://github.com/redis/redis/archive/refs/tags/$REDIS_VERSION.tar.gz
ls -lh redis-$REDIS_VERSION.tar.gz
tar -zxvf redis-7.2.5.tar.gz
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
[root@k8s-1 ~]# redis-cli
127.0.0.1:6379> INFO replication
# Replication
role:master
connected_slaves:1
slave0:ip=192.168.80.82,port=6379,state=online,offset=14,lag=1
master_failover_state:no-failover
master_replid:a3a92c41d793800c26dcbfcbbe1ca03d84df79bd
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:14
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:1
repl_backlog_histlen:14
127.0.0.1:6379> 
```

```shell [查看从节点信息]
[root@k8s-2 ~]# redis-cli 
127.0.0.1:6379> INFO replication
# Replication
role:slave
master_host:192.168.80.81
master_port:6379
master_link_status:up
master_last_io_seconds_ago:1
master_sync_in_progress:0
slave_read_repl_offset:140
slave_repl_offset:140
slave_priority:100
slave_read_only:1
replica_announced:1
connected_slaves:0
master_failover_state:no-failover
master_replid:a3a92c41d793800c26dcbfcbbe1ca03d84df79bd
master_replid2:0000000000000000000000000000000000000000
master_repl_offset:140
second_repl_offset:-1
repl_backlog_active:1
repl_backlog_size:1048576
repl_backlog_first_byte_offset:15
repl_backlog_histlen:126
127.0.0.1:6379> 
```

:::

## 哨兵模式 {id=sentinel}

::: warning 注意

1. 哨兵模式至少需要三个服务器
    - `主节点`：`192.168.80.81`
    - `从节点`：`192.168.80.82`
    - `从节点`：`192.168.80.83`
2. 哨兵模式使用的配置文件是 `sentinel.conf`，而不是 `redis.conf`
3. 源码解压目录中可找到 `sentinel.conf` 文件
4. 哨兵模式要保持 Redis 版本一致
5. 哨兵模式每个`节点` Redis 安装步骤相同
    - 先在任意`节点`完成 Redis 安装、测试
    - 哨兵模式部分功能基于`主从复制`，请先学会主从复制后再学习`哨兵模式`
    - 确认任意`节点`的 Redis 均能正常工作后，再进行哨兵模式的配置

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

### 从节点增加主节点的密码 {id=sentinel-add-masterauth}

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

### 重启从节点 {id=sentinel-slave-restart}

```shell
systemctl restart redis.service
```

### sentinel.conf 配置文件 {id=sentinel.conf}

- 复制源码解压目录中的 sentinel.conf 到指定目录，作为 Linux Service 启动 Redis Sentinel 配置

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

cat /etc/redis/sentinel.conf | grep 'sentinel monitor'
```

### 创建 Linux Service 服务 {id=sentinel-service}

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

```shell
systemctl start redis-sentinel.service
systemctl status redis-sentinel.service --no-pager -l
systemctl enable redis-sentinel.service
```

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
