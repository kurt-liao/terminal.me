<script setup lang="ts">
import { useTheme } from '~/helpers/hooks/useTheme'

const [theme, setTheme] = useTheme()

watchEffect(async () => {
  await nextTick(() => {})

  if (!process.server) {
    const savedTheme = await localStorage.getItem('theme')

    if (savedTheme) {
      await setTheme(savedTheme)
    }
  }
})

provide('theme', reactive({ theme, setTheme }))
</script>

<template>
  <slot></slot>
</template>
