<script setup lang="ts">
import { ThemeContext } from '~~/types/theme'

const theme: ThemeContext = inject('theme')

const inputRef = ref()

const focusInput = () => {
  inputRef.value.focus()
}
</script>

<template>
  <div
    class="overflow-hidden h-full rounded"
    :style="{
      borderColor: theme?.theme?.yellow,
      padding: '16px',
      borderWidth: '2px',
    }"
    @click="focusInput"
  >
    <div class="overflow-y-auto h-full">
      <History />
      <CommandInput ref="inputRef" />
    </div>
  </div>
</template>
