import Inspect from 'vite-plugin-inspect'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { MermaidPlugin } from 'vitepress-plugin-mermaid'

export function createVitePlugins() {
  return [
    Inspect(),
    GitChangelog({
      repoURL: () => 'https://github.com/zeMinng/vlog-web',
      mapAuthors: [
        {
          name: 'zeMing',
          username: 'zeMinng',
        },
        {
          name: 'Martin Pan',
          username: 'pm1017',
        },
      ],
    }),
    GitChangelogMarkdownSection(),
    MermaidPlugin(),
  ]
}
