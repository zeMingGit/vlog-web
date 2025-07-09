# node生态环境设置

## 概要

对 **node**、**pnpm**和**nvm** 等一些环境设置。

## 技术细节

### 一、node

这里进行 [下载](https://nodejs.org/dist/) 不同版本的node

::: code-group

```sh [配置淘宝镜像]
# 查看当前的镜像地址
npm get registry

# 设置淘宝镜像
npm config set registry https://registry.npm.taobao.org/

# 新的镜像
https://registry.npmmirror.com/
# 替换的淘宝镜像
registry.npm.taobao.org ==》 registry.npmmirror.com
npm.taobao.org ==》npmmirror.com
```

```sh [常用的node版本]
v18.20.4
v18.15.0
v18.9.1
v16.18.0
v14.19.0
v14.18.1
v12.14.0
v10.24.1
```

:::

### 二、nvm (windows)

nvm (windows) 的指导地址看 [这里](https://beltxman.com/3789.html)，下载版本为 **[v1.1.10]**

::: code-group

```sh [nvm下载地址]
# nvm下载地址
https://nvm.uihtm.com/

# 成功下载安装
https://github.com/coreybutler/nvm-windows

```

```sh [修改镜像]
# 找到文件C:\Users\yourUsername\AppData\Roaming\nvm\settings.txt添加两行：
root: D:\wangluozhuanyeke\nvm
path: D:\wangluozhuanyeke\nodejs

node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

:::

#### 1. nvm命令行

```shell
nvm version
nvm list
nvm install stable          ## 安装最新稳定版 node
nvm install <version>       ## 安装指定版本
nvm uninstall <version>     ## 删除已安装的指定版本
nvm use <version>           ## 切换使用指定的版本node
nvm ls                      ## 列出所有安装的版本
nvm ls-remote               ## 列出所有远程服务器的版本
nvm current                 ## 显示当前的版本
nvm alias <name> <version>  ## 给不同的版本号添加别名
nvm unalias <name>          ## 删除已定义的别名
nvm reinstall-packages <version>  ## 在当前版本 node 环境下，重新   全局安装指定版本号的 npm 包
nvm alias default [node版本号]     ##设置默认版本
```

### 三、nvm (mac)

nvm (mac) 的指导地址看 [这里](https://www.jianshu.com/p/304656f2f6af) 或者 [这里](https://blog.csdn.net/ForeverMyheart/article/details/127203419)。

- nvm下载地址

```shell
# nvm下载地址
git clone https://github.com/nvm-sh/nvm.git
```

- 进入 nvm目录中执行install.sh 等待执行完成

```shell
cd nvm （进入nvm目录）
./install.sh  （等待执行成功）
```

- 配置nvm环境变量将下述代码复制到 ~/.bash_profile

```shell
vi ~/.bash_profile

# 在~/.bash_profile添加
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

```sh
source ~/.bash_profile

# 在终端运行
# zsh报错
# 但是再zsh中使用nvm依旧提示
# 解决方法
# 编辑~/.zshrc
# 添加
source ~/.bash_profile

source ~/.zshrc
```

- 重新打开终端，执行nvm --version检测是否安装成功
- 切换node失败

```shell
nvm alias default 10.24.1
```

### 四、pnpm

pnpm 的指导地址看 [这里](https://pnpm.io/installation)

::: code-group

```sh [安装]
npm install -g pnpm
```

:::

下面是一个支持各自Node.js版本的过去pnpm版本的列表
| Node.js | pnpm 7 | pnpm 8 | pnpm 9 |
| ----------- | :-------: | :-------: | :-------: |
| Node.js 12 | ❌ | ❌ | ❌ |
| Node.js 14 | ✔️ | ❌ | ❌ |
| Node.js 16 | ✔️ | ✔️ | ❌ |
| Node.js 18 | ✔️ | ✔️ | ✔️ |
| Node.js 20 | ✔️ | ✔️ | ✔️ |

## 小结

记录 node 生态配置
