# JDK {id=jdk}

[[toc]]

## JVM 参数 {id=jvm-flags}

### 查看 Java 进程号 {id=java-process}

#### 使用 ps 查看 Java 进程号 {id=java-process-ps}

::: code-group

```shell
ps -ef | grep java
```

```shell [输出示例]
root     16236 31497  1 Oct12 ?        01:09:02 java -jar /home/app.jar
```

:::

#### 使用 jps 查看 Java 进程号 {id=java-process-jps}

- `jps` 在 `$JAVA_HOME/bin/jps`

| 命令       | 说明                  | 输出示例                              |
|----------|---------------------|-----------------------------------|
| `jps`    | 输出：进程号、执行的 jar 包名称  | `3284915 xxx-0.0.0.jar`           |
| `jps -l` | 输出：进程号、执行的 jar 包全路径 | `3284915 /software/xxx-0.0.0.jar` |

#### 使用 jcmd 查看 Java 进程号 {id=java-process-jcmd}

- `jcmd` 在 `$JAVA_HOME/bin/jcmd`

::: code-group

```shell
jcmd
```

```shell [输出示例]
3284915 /software/xxx-0.0.0.jar
```

:::

### 查看 JVM 参数 {id=jvm-flags-args}

#### 使用 jinfo 查看 JVM 参数 {id=jvm-flags-args-jinfo}

- `jinfo` 在 `$JAVA_HOME/bin/jinfo`

| 命令                 | 说明     | 输出示例    |
|--------------------|--------|---------|
| `jinfo -flags 进程号` | 查看进程信息 | 查看下方代码块 |

::: code-group

```shell
jinfo -flags 3284915
```

```shell [输出示例]
Attaching to process ID 3284915, please wait...
Debugger attached successfully.
Server compiler detected.
JVM version is 25.351-b10
Non-default VM flags: -XX:CICompilerCount=3 -XX:InitialHeapSize=526385152 -XX:MaxHeapSize=8413773824 -XX:MaxNewSize=2804416512 -XX:MinHeapDeltaBytes=524288 -XX:NewSize=175112192 -XX:OldSize=351272960 -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseFastUnorderedTimeStamps -XX:+UseParallelGC
Command line:  
```

:::

| 参数名称                              | 描述                 |
|-----------------------------------|--------------------|
| `-XX:CICompilerCount=3`           | 指定 JIT 编译器的线程数为 3  |
| `-XX:InitialHeapSize=526385152`   | 初始堆大小为 502 MB      |
| `-XX:MaxHeapSize=8413773824`      | 最大堆大小为 7.84 GB     |
| `-XX:MaxNewSize=2804416512`       | 年轻代最大大小为 2.61 GB   |
| `-XX:MinHeapDeltaBytes=524288`    | 堆大小调整的最小增量为 512 KB |
| `-XX:NewSize=175112192`           | 年轻代初始大小为 167 MB    |
| `-XX:OldSize=351272960`           | 老年代初始大小为 335 MB    |
| `-XX:+UseCompressedClassPointers` | 启用压缩类指针            |
| `-XX:+UseCompressedOops`          | 启用压缩普通对象指针         |
| `-XX:+UseFastUnorderedTimeStamps` | 使用快速无序时间戳          |
| `-XX:+UseParallelGC`              | 使用并行垃圾收集器          |
