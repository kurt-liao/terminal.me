<script setup lang="ts">
import { Theme } from '~/types/theme'
import config from '~/assets/config.json'

const theme: Theme | undefined = inject('theme')
const hostname = ref(config.host || '')

watchEffect(() => {
  if (process.client) {
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
