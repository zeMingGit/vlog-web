---
layout: page
gitChangelog: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://foruda.gitee.com/avatar/1695001043495360137/8741248_zeminga_1695001043.png',
    name: 'zeMing',
    title: '文档作者',
    links: [
      { icon: 'github', link: 'https://github.com/zeMingGit' },
    ]
  },
  {
    avatar: 'https://www.github.com/pm1017.png',
    name: 'Martin Pan',
    title: '贡献者',
    links: [
      { icon: 'github', link: 'https://github.com/pm1017' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      团队核心成员
    </template>
    <template #lead>
      提供有价值的资源和支持
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
