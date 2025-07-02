# git问题记录

## 概要

欢迎来到 Git 文档！Git 是一款分布式版本控制系统，广泛用于协作开发和版本管理。本文档将帮助你了解 Git 的核心概念、基本操作以及高级技巧。

::: tip git下载地址
https://git-scm.com/downloads
:::

## 一、git流程基础/命令行

熟悉git的流程或者命令行可以去这里 [学习Git 命令](https://help.gitee.com/learn-Git-Branching/?locale=zh_CN)

### 1. git流程/命令行

```shell
git init      # 初始化本地仓库
git clone xxx # 克隆仓库
git add .     # 暂存
git commit -m # 提交更改
git pull      # 抓取分支
git push      # 推送分支
git pull origin master-common    # 从主分支获取提交
git fetch     # 拉取数据、分支等
git branch    # 查看当前分支
git checkout XXX   # 切换本地分支
git cherry-pick XXX   # 将指定的提交（commit）应用于其他分支
git reset --soft HEAD^
```

### 2. commit提交规范

| 类型     |                                     详细介绍                                     |
| -------- | :------------------------------------------------------------------------------: |
| feat     |                                  新功能、新特性                                  |
| fix      |                                 bugfix，修改问题                                 |
| docs     |                                  文档修改、变更                                  |
| style    |          代码格式(不影响功能，例如空格、分号等格式修正)注意不是css修改           |
| refactor |                                     代码重构                                     |
| pref     |                                  性能提升的修改                                  |
| test     |                                   测试用例修改                                   |
| build    |            对项目构建或者依赖的改动(例如scopes: webpack、gulp、npm等)            |
| ci       | 更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等 |
| chore    |                         其他修改, 比如构建流程, 依赖管理                         |
| revert   |                                     代码回退                                     |

### 3. git 问题

commit 执行 git reset --hard HEAD^ 回退上次提交

```shell
# 先执行，查看提交id
git reflog
# 根据id回退版本
git reset --hard 1f1c92c60
# 查看提交记录
git log
```

### 4. git push后出现错误 ![rejected] master -> master(non-fast-forward)

https://www.cnblogs.com/qingheshiguang/p/14777557.html

https://blog.csdn.net/Lovely_red_scarf/article/details/125760091

https://blog.csdn.net/weixin_42310154/article/details/118340458

https://blog.csdn.net/SweetoRm/article/details/134134559

## 二、git pull里的大学问

看到一篇 [关于介绍git pull的文章](https://mp.weixin.qq.com/s/n1KbNaT46SwVPCBxpW31ow) 我才知道，**git pull**有大学问！

git pull 命令用于从远程仓库获取最新的更改并合并到当前分支，它其实是 `git fetch` 和 `git merge` 的组合。

- **git fetch**

git fetch 命令从远程仓库获取最新的代码到本地，但不会自动合并代码。

```sh
git fetch <remote> <branch>

# 示例：从名为 origin 的远程仓库获取最新代码：
git fetch origin
```

- **git merge**

git merge 相信大家不陌生，就是将另一个分支的更改合并到当前分支。通常在使用 git fetch 获取了最新的远程更改后，使用 git merge 将这些更改合并到当前分支。

```sh
git merge <branch>
```

### 1. git pull 的过程发生了什么?

当我们远端有代码更新，我们需要拉取。当我们执行git pull的时候，相当于以此执行了:

① **git fetch** ：从云端拉取最新代码

② **git merge**：将云端代码与本地代码合并

### 2. 如何保证git历史的线性?

非常简单，我们只需要使用rebase（变基）命令即可！在正式的介绍命令的使用前，我们先说说什么是变基！简单来说，rebase的作用就是永远会让我们本地的代码处于最新状态。

比如，我们一开始是使用B节点开发代码的，开发到B2时，此时远程已经有人推送了C节点。

在B2节点使用rebase变基，会让我们的B1节点和B2节点位于C节点上。

因此，使用rebase变基后，git永远只有一条线性历史，非常直观。

- **rebase 命令使用**

**rebase** 的使用非常简单，我们只需要在git pull的时候，添加上额外命令即可！

```sh
git pull --rebase

## 自动变基 可以全局设置git pull默认使用变基的方式，一劳永逸！

# git pull默认使用变基操作
git config --global pull.rebase true

# 如果你还是执意喜欢merge，那么使用下面的命令，git pull默认使用合并操作
git config --global pull.rebase false
```

自动变基会面临一个额外的问题：就是如果你本地文件有更改的话，变基会失败，因为变基前服务区必须是干净的。

有两种方法解决这个问题

- git pull前，先使用git commit暂存代码
- git pull前，先将使用 git stash将保存

### 3. 总结

我们介绍了git pull的用法，明白了它有 `merge` 和 `rebase` 两种模式。默认情况下，它使用的是merge。使用merge的方式拉取代码会导致git历史变得复杂，不利于维护和溯源。因此，建议使用 `rebase` 的方式拉取代码。

## 小结

#### 主要特性

- **分布式版本控制**: Git 是一款分布式版本控制系统，每个开发者都可以拥有完整的代码仓库副本，方便离线工作和团队协作。

- **简单易用**: Git 提供了简洁的命令行界面和直观的图形化工具，使得版本控制操作更加容易上手。

- **强大的分支管理**: Git 提供了强大的分支管理功能，可以轻松创建、切换和合并分支，以便同时进行多个任务。

#### 核心优势

- **速度和性能**: Git 能够处理大型项目和大量代码文件，并提供高效的性能和响应速度。

- **数据完整性**: Git 使用校验和机制保证数据的完整性，确保在传输或储存过程中不会损坏或丢失任何数据。

- **灵活性和可定制性**: Git 可以根据项目的需求进行灵活配置和定制，以满足不同开发团队的要求。

#### 目标

Git 的目标是为开发者提供一个高效、可靠的版本控制系统，帮助团队协作和管理代码。我们致力于提供优秀的工具和文档，帮助开发者更好地理解和应用 Git。
