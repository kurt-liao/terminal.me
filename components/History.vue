<script setup lang="ts">
import type { ThemeContext } from '~~/types/theme'

const shell: ShellContext = inject('shell')
const theme: ThemeContext = inject('theme')
</script>

<template>
  <div v-for="history in shell.histories" :key="history.id">
    <div class="flex flex-row space-x-2">
      <div class="flex-shrink">
        <Ps1 />
      </div>
      <div class="flex-grow">
        {{ history.command }}
      </div>
    </div>

    <p
      class="whitespace-pre-wrap mb-2"
      :style="{
        lineHeight: 'normal',
        color: history.isError ? theme.theme.red : theme.theme.foreground,
      }"
      v-html="history.output"
    />
  </div>
</template>
