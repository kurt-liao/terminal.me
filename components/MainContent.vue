<script setup lang="ts">
import type { ThemeContext } from '~/types/theme'

const { theme }: ThemeContext = inject('theme')
</script>

<template>
  <main class="w-full h-full p-2" :style="{ background: theme?.background }">
    <slot />
  </main>
</template>
