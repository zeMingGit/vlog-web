import { type DefaultTheme } from 'vitepress'

// 作者: zeMing
const React: DefaultTheme.SidebarItem = {
  text: 'react',
  collapsed: false,
  base: '/VPContent/react',
  items: [
    { text: '概述', link: '/' },
    { text: '基础语法', link: '/foundation' },
    { text: '状态管理', link: '/redux' },
    { text: 'react Router路由', link: '/router' },
  ],
}

export default React
