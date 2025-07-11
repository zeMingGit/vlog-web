## 小棱镜 - 小棱镜前端学习文档

<!-- ### Star History


[![Star History Chart](https://api.star-history.com/svg?repos=zeMingGit/vlog&type=Timeline)](https://star-history.com/#zeMingGit/vlog&Timeline) -->

### 安装依赖

```
pnpm install
```

### 常用脚本说明

| 脚本命令         | 说明                     |
| ---------------- | ------------------------ |
| pnpm run dev     | 本地开发环境启动文档站点 |
| pnpm run build   | 构建生产环境静态文档     |
| pnpm run preview | 预览构建后的文档站点     |
| pnpm run lint    | 使用 ESLint 检查代码规范 |
| pnpm run format  | 使用 Prettier 格式化代码 |
| pnpm run prepare | 初始化 Husky Git 钩子    |

## 文档添加内容规范

### 文件命名与目录结构

- 文件名使用 小写字母

- 目录结构应保持清晰和一致。确保每个文档都位于合理的文件夹中，避免混乱。例如：
  - VPNavBarPage/：存放所有文档顶部内容
  - VPContent/：存放所有文档主题内容

### 文件内容

- 使用 #（一级标题）表示文档的主标题，##（二级标题）表示章节标题，###（三级标题）表示小节标题。避免在标题中使用大写字母，除非是专有名词。

### 内容审核与更新

所有新增文档内容需经过审阅，确保内容准确且格式规范。定期更新文档，确保内容与产品版本同步。
