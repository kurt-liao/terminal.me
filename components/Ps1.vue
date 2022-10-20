<script setup lang="ts">
import { Theme } from '~~/types/theme'

const theme: Theme | undefined = inject('theme')
const hostname = ref('kurt@me')

watchEffect(() => {
  if (!process.server) {
    hostname.value = window.location.hostname
  }
})
</script>

<template>
  <span :style="{ color: theme?.yellow }">guest </span>
  <span :style="{ color: theme?.white }">@ </span>
  <span :style="{ color: theme?.green }">{{ hostname }} </span>
  <span :style="{ color: theme?.white }">:$ ~</span>
</template>
