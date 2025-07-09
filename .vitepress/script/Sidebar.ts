import { type DefaultTheme } from 'vitepress'
import uniapp from '../router/uniapp'
import vue from '../router/vue'
import react from '../router/react'
import cli from '../router/cli'

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '开始',
      collapsed: false,
      base: '/VPContent/start',
      items: [{ text: '简介', link: '/' }],
    },
    vue,
    uniapp,
    react,
    cli,
    {
      text: '杂项',
      collapsed: false,
      base: '/VPContent/sundry',
      items: [
        { text: '概述', link: '/' },
        { text: 'Css布局', link: '/css' },
        { text: 'Grid', link: '/grid' },
        { text: '工具代码', link: '/toolCode' },
        { text: '个人记录', link: '/my' },
      ],
    },
  ]
}

export default sidebarGuide
