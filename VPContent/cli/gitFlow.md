# Git Flow 工作流程指南

## 概要

Git Flow 是一种基于 Git 的分支管理工作流程模型，由 Vincent Driessen 在 2010 年提出。它为软件开发项目定义了严格的分支模型，适合有固定发布周期的项目。

## 一、介绍

① **长期分支**

`master/main` - 存放正式发布的历史，所有在 master 分支上的 commit 都对应一个可发布的版本

`develop` - 用于集成功能分支，存放最新的开发成果

② **临时分支**

`feature` - 开发新功能的分支，从 develop 分支分出，完成后合并回 develop

`release` - 准备发布新版本的分支，从 develop 分支分出，完成后合并回 master 和 develop

`hotfix` - 修复生产环境紧急问题，从 master 分支分出，完成后合并回 master 和 develop

## 小结

**常见问题**

**Q: Git Flow 必须使用 git-flow 工具吗？**

A: 不是必须的，git-flow 工具只是简化了操作，你可以手动按照 Git Flow 的原则管理分支。

**Q: feature 分支需要 rebase 吗？**

A: 可以但不必须。如果选择 rebase，应该在本地完成，避免已推送的分支被重写历史。

**Q: 如何与远程仓库协作？**

A: 每个功能/发布/热修复分支都可以推送到远程，便于团队协作和代码审查。
