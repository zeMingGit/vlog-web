import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './MyLayout.vue'
import VueAmazingUI from 'vue-amazing-ui'
import 'vue-amazing-ui/css'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(VueAmazingUI)
    app.use(NolebaseGitChangelogPlugin)
  },
} satisfies Theme
