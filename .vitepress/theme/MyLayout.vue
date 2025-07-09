<template>
  <DefaultTheme.Layout />
  <ClientOnly>
    <Watermark fullscreen fixed content="zeMing" :zIndex="0" :fontSize="18" :color="color" />
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Watermark } from 'vue-amazing-ui'

const color = ref('rgba(0,0,0,.15)')
const { isDark } = useData()
watch(
  isDark,
  (old) => {
    color.value = old ? 'rgba(0,0,0,.7)' : 'rgba(0,0,0,.15)'
  },
  {
    immediate: true,
    deep: true,
  },
)
</script>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style>
