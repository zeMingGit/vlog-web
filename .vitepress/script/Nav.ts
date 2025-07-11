import { type DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: '开始', link: '/VPContent/start/' },
  {
    text: '作者',
    link: '/VPNavBarPage/',
  },
  {
    text: '关于',
    items: [
      { text: '团队', link: '/VPNavBarPage/team' },
      { text: '关于我们', link: '/VPNavBarPage/about' },
    ],
  },
  { text: '后端文档', link: 'https://vlog-java.netlify.app/' },
  {
    text: '文档友链',
    items: [
      {
        items: [
          { text: 'vue', link: 'https://cn.vuejs.org/guide/introduction.html' },
          { text: 'vite', link: 'https://cn.vitejs.dev/' },
          { text: 'pinia', link: 'https://pinia.vuejs.org/zh/introduction.html' },
          { text: 'vuex', link: 'https://next.vuex.vuejs.org/zh/' },
          { text: 'vue-router', link: 'https://next.router.vuejs.org/zh/' },
        ],
      },
      { text: 'uniapp', link: 'https://uniapp.dcloud.net.cn/' },
      { text: 'eslint', link: 'https://eslint.org/docs/latest/use/getting-started' },
      { text: 'vitePress', link: 'https://vitepress.dev/zh/' },
    ],
  },
]

export default nav
