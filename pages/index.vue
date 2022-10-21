<script setup lang="ts">
import { ThemeContext } from '~~/types/theme'

const { theme }: ThemeContext = inject('theme')

const inputRef = ref()
const containerRef = ref()

const focusInput = () => {
  inputRef.value.focus()
}
</script>

<template>
  <div
    class="overflow-hidden h-full rounded"
    :style="{
      borderColor: theme.yellow,
      padding: '16px',
      borderWidth: '2px',
    }"
    @click="focusInput"
  >
    <div class="overflow-y-auto h-full" ref="containerRef">
      <History />
      <CommandInput ref="inputRef" :container-ref="containerRef" />
    </div>
  </div>
</template>
