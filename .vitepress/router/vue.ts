import { type DefaultTheme } from 'vitepress'

const vue: DefaultTheme.SidebarItem = {
  text: 'vue',
  collapsed: false,
  base: '/VPContent/vue3',
  items: [
    { text: '基础概述', collapsed: true, items: [{ text: '理论基础', link: '/base' }] },
    { text: 'SHA256', link: '/sha256' },
    { text: 'Vue图片引入指南', link: '/imageIngestion' },
    { text: 'ThreeJs', link: '/three' },
    { text: 'TSX渲染', link: '/tsx' },
    { text: 'Number精度问题', link: '/precision' },
    { text: 'OpenSSL问题', link: '/script' },
  ],
}

export default vue
