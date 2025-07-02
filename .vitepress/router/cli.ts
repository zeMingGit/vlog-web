import { type DefaultTheme } from 'vitepress'

const cli: DefaultTheme.SidebarItem = {
  text: '工程化',
  collapsed: false,
  base: '/VPContent/cli',
  items: [
    { text: 'Vite', link: '/vite' },
    { text: 'TypeScript', link: '/typeScript' },
    { text: 'Class 类', link: '/class' },
    { text: 'Node生态环境', link: '/node' },
    { text: '组件库推荐', link: '/components' },
    { text: 'VsCode/eslint配置', link: '/settings' },
    { text: '格式化工具Prettier', link: '/prettier' },
  ],
}

export default cli
