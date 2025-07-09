# TSX的使用

## 概要

[渲染函数 & JSX 官方文档](https://cn.vuejs.org/guide/extras/render-function.html)

在绝大多数情况下，Vue 推荐使用模板语法来创建应用。然而在某些使用场景下，我们真的需要用到 JavaScript 完全的编程能力。这时渲染函数就派上用场了。

## 一、vue常规写法与 TSX 组件混用

内容主要介绍如何在 Vue 的组合式写法（Composition API）中混用 TSX 语法，重点说明以下两个方面：

1. **如何向 TSX 编写的组件传递 Props**：通过标准的组件调用方式，在组合式中直接使用 TSX 组件时，可通过属性绑定将数据作为 Props 传递给组件。
2. **如何使用 TSX 组件的插槽（Slots）**：TSX 组件可通过 children 或显式定义的插槽属性接收内容。在组合式中，可以通过传递函数式插槽或渲染函数的方式为 TSX 组件注入插槽内容。
   ::: code-group

```vue [使用TSX组件]
<template>
  <component v-if="RenderedMenu" :is="RenderedMenu">
    <template #userInfo>
      <div class="userInfo">
        <!-- 插槽部分 -->
      </div>
    </template>
  </component>
</template>

<script lang="ts" setup>
import { useRenderMenuItem } from './Menu'

const RenderedMenu = ref()
const getMenuList = async () => {
  MenuList.value = await permissionStore.getUserMenusAction()
  if (MenuList.value?.length) {
    RenderedMenu.value = defineComponent({
      setup(_, { slots }) {
        const renderFn = useRenderMenuItem(MenuList.value, path, matched, {
          userInfo: () => slots.userInfo?.(),
        })
        return renderFn
      },
    })
  }
}
</script>
```

```tsx [定义TSX组件]
import { ElButton } from 'element-plus'
import type { RouteMeta } from 'vue-router'
import { hasOneShowingChild, getAllParentPath } from '@/layout/components/Menu/src/helper'
import { isUrl } from '@/utils/is'
import { pathResolve, getRedirect } from '@/utils/routerHelper'
import { useRouter } from 'vue-router'
import { useRenderDrawerMenu } from './Menudrawer'

interface MenuSlots {
  userInfo?: () => void
}
/** 控制渲染 Drawer Menu 的状态 */
const showDrawerMenu = ref(false)
const drawerMenuData = ref(null) // 存储点击的菜单数据
const thisMenuId = ref({
  tagId: '',
  childrenId: '',
}) // 记录当前点击的菜单id

export const useRenderMenuItem = (
  menuList: AppRouteRecordRaw[] = [],
  parentPath = '/',
  matched: any = [], // 路由匹配的路径
  slots?: MenuSlots, // 定义插槽类型
) => {
  return () => {
    if (!menuList?.length) return null
    const { push } = useRouter()

    /** 一级菜单点击事件 */
    const handleMenuClick = (v) => {
      const { meta, children, path } = v

      if (!Object.keys(meta).length && children?.length) {
        push({ path: v.path })
        return
      }
      drawerMenuData.value = v // 存储点击的菜单项数据
      showDrawerMenu.value = true // 显示 Drawer Menu
      thisMenuId.value.tagId = v.path // 记录当前点击的菜单id
    }

    // 一级菜单
    const renderMenuItems = menuList.map((item) => {
      const meta = (item.meta ?? {}) as RouteMeta
      if (meta.hidden) return null

      const { oneShowingChild, onlyOneChild } = hasOneShowingChild(item.children, item)
      const fullPath = isUrl(item.path) ? item.path : pathResolve(parentPath, item.path)
      const displayName =
        oneShowingChild &&
        (!onlyOneChild?.children || onlyOneChild.noShowingChildren) &&
        !meta.alwaysShow
          ? onlyOneChild?.meta?.displayName
          : meta?.displayName

      return (
        <div
          class={[
            'menuList',
            [parentPath, thisMenuId.value.tagId, matched[0].path].includes(item.path)
              ? 'thisMenu'
              : '',
          ]}
          key={fullPath}
        >
          <ElButton class="btn" link onClick={() => handleMenuClick(item)}>
            {{
              default: () => displayName || '',
            }}
          </ElButton>
        </div>
      )
    })

    return (
      <>
        {renderMenuItems} {/* 先渲染一级菜单项 */}
        {slots?.userInfo?.()} {/* 用户信息拼接到一级菜单后 */}
        {showDrawerMenu.value && useRenderDrawerMenu(drawerMenuData.value)()} {/* 渲染二级菜单 */}
      </>
    )
  }
}
```

:::

## 小结

` 提示：`
