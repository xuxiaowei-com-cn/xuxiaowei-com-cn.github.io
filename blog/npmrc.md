# Node 配置文件 {id=npmrc}

## 说明 {id=description}

1. `.npmrc` 文件是 Node 配置文件
2. `.npmrc` 文件分为 `项目配置文件` 与 `全局配置文件`
    1. `.npmrc` `项目配置文件` 存放在 `项目根目录`
    2. `.npmrc` `全局配置文件` 存放在 `用户根目录`
    3. 使用时遵守 `就近原则`

## 命令

1. 查看配置
   ```shell
   npm config ls
   ```
   ```shell
   npm config ls
   ```
2. 查看单个配置
   ```shell
   npm config get ABC
   ```
3. 设置配置
   ```shell
   npm config set ABC=123
   ```

## 配置 {id=config}

| 配置                               | 默认值                                                                                         | 优化                                                       | 说明                                                                                                           |
|----------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| registry                         | https://registry.npmjs.org/                                                                 | http://registry.npmmirror.com/                           | npm 仓库地址                                                                                                     |
| disturl                          | https://nodejs.org/download/release/                                                        | https://mirrors.aliyun.com/nodejs-release/               | 下载 `/vx.y.z/node-vx.y.z-headers.tar.gz` 地址前缀                                                                 |
| save-exact                       | false                                                                                       | true                                                     | npm 安装依赖时使用固定版本                                                                                              |
| sass_binary_site                 | https://github.com/sass/node-sass/releases/download                                         | https://npmmirror.com/mirrors/node-sass/                 | 下载 `/vx.y.z/platform-arch-*_binding.node` 地址前缀                                                               |
| electron_mirror                  | https://github.com/electron/electron/releases/download/                                     | https://npmmirror.com/mirrors/electron/                  | 下载 `/x.y.z/electron-vx.y.z-platform-arch.zip` 地址前缀                                                           |
| electron_cache                   | `C:\Users\%USERNAME%\AppData\Local\electron\Cache`、`/$HOME/.cache/electron`                 |                                                          | 储存 electron 本地缓存路径                                                                                           |
| electron_builder_binaries_mirror | https://github.com/electron-userland/electron-builder-binaries/releases/download/           | https://npmmirror.com/mirrors/electron-builder-binaries/ | 下载 `/snap-template-x.y-z/snap-template-electron-x.y-z-amd64.tar.7z`、`/appimage-x.y.z/appimage-x.y.z.7z` 地址前缀 |
| electron_builder_cache           | `C:\Users\%USERNAME%\AppData\Local\electron-builder\Cache`、`/$HOME/.cache/electron-builder` |                                                          | 储存 electron builder 本地缓存路径                                                                                   |

<style>

._blog_npmrc table tr th:nth-child(1), 
._blog_npmrc table tr td:nth-child(1) {
    min-width: 230px;
}

._blog_npmrc table tr th:nth-child(2), 
._blog_npmrc table tr td:nth-child(2) {
    min-width: 635px;
}

._blog_npmrc table tr th:nth-child(3), 
._blog_npmrc table tr td:nth-child(3) {
    min-width: 405px;
}

._blog_npmrc table tr th:nth-child(4), 
._blog_npmrc table tr td:nth-child(4) {
    min-width: 790px;
}

</style>